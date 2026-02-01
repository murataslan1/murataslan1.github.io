import React, { useState, useEffect, useCallback, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import "./style.css";

const GITHUB_USERNAME = "murataslan1";

const githubTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

// Fallback stats from GitHub API (last updated: Feb 2026)
const FALLBACK_STATS = {
  repos: 222,
  totalCommits: 45,
  totalPRs: 2,
  followers: 69
};

const FALLBACK_ACTIVITIES = [
  { icon: '🔀', action: 'Opened PR in', repo: 'microsoft/vscode', time: 'recently', color: 'purple' },
  { icon: '📝', action: 'Pushed to', repo: 'murataslan1.github.io', time: '2 days ago', color: 'green' },
  { icon: '⭐', action: 'Starred', repo: 'vercel-labs/agent-skills', time: '3 days ago', color: 'yellow' },
  { icon: '🔀', action: 'Opened PR in', repo: 'coollabsio/coolify', time: '4 weeks ago', color: 'purple' },
  { icon: '💬', action: 'Commented on', repo: 'coollabsio/coolify', time: '4 weeks ago', color: 'blue' },
];

export const GitHubActivity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);
  const isMountedRef = useRef(true);
  const [stats, setStats] = useState({
    totalPRs: FALLBACK_STATS.totalPRs,
    totalCommits: FALLBACK_STATS.totalCommits,
    totalIssues: 0,
    repos: FALLBACK_STATS.repos
  });

  const fetchGitHubData = useCallback(async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const headers = { Accept: "application/vnd.github+json" };
      const eventsRes = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`,
        { headers, cache: "no-store" }
      );
      const events = await eventsRes.json();

      if (!eventsRes.ok) {
        throw new Error(events?.message || "GitHub events API error");
      }

      const userRes = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}`,
        { headers, cache: "no-store" }
      );
      const user = await userRes.json();

      if (!userRes.ok) {
        throw new Error(user?.message || "GitHub user API error");
      }

      const safeEvents = Array.isArray(events) ? events : [];
      
      // Group consecutive pushes to same repo within same hour
      const groupedEvents = [];
      let lastPushKey = null;
      
      safeEvents
        .filter(e =>
          ['PushEvent', 'PullRequestEvent', 'IssuesEvent', 'CreateEvent', 'WatchEvent', 'ForkEvent', 'IssueCommentEvent'].includes(e.type)
        )
        .forEach(event => {
          const eventTime = new Date(event.created_at);
          const hourKey = `${event.type}-${event.repo.name}-${eventTime.toISOString().slice(0, 13)}`;
          
          if (event.type === 'PushEvent' && lastPushKey === hourKey && groupedEvents.length > 0) {
            // Merge with previous push
            const lastEvent = groupedEvents[groupedEvents.length - 1];
            if (lastEvent._pushCount) {
              lastEvent._pushCount += 1;
            }
          } else {
            if (event.type === 'PushEvent') {
              event._pushCount = 1;
              lastPushKey = hourKey;
            } else {
              lastPushKey = null;
            }
            groupedEvents.push(event);
          }
        });
      
      const processedActivities = groupedEvents
        .slice(0, 10)
        .map(event => {
          const repo = event.repo.name.replace(`${GITHUB_USERNAME}/`, '');
          const time = new Date(event.created_at);
          const timeAgo = getTimeAgo(time);

          switch (event.type) {
            case 'PushEvent': {
              const commits = event._pushCount || 1;
              return {
                icon: '📝',
                action: commits > 1 ? `${commits} pushes to` : 'Pushed to',
                repo,
                time: timeAgo,
                color: 'green'
              };
            }
            case 'PullRequestEvent':
              return {
                icon: '🔀',
                action: `${event.payload.action === 'opened' ? 'Opened' : event.payload.action} PR in`,
                repo,
                time: timeAgo,
                color: 'purple'
              };
            case 'IssuesEvent':
              return {
                icon: '🐛',
                action: `${event.payload.action} issue in`,
                repo,
                time: timeAgo,
                color: 'orange'
              };
            case 'IssueCommentEvent':
              return {
                icon: '💬',
                action: 'Commented on',
                repo,
                time: timeAgo,
                color: 'blue'
              };
            case 'CreateEvent':
              return {
                icon: '✨',
                action: `Created ${event.payload.ref_type} in`,
                repo,
                time: timeAgo,
                color: 'cyan'
              };
            case 'WatchEvent':
              return {
                icon: '⭐',
                action: 'Starred',
                repo: event.repo.name,
                time: timeAgo,
                color: 'yellow'
              };
            case 'ForkEvent':
              return {
                icon: '🍴',
                action: 'Forked',
                repo: event.repo.name,
                time: timeAgo,
                color: 'pink'
              };
            default:
              return null;
          }
        })
        .filter(Boolean);

      const prCount = safeEvents.filter(e => e.type === 'PullRequestEvent').length;
      // Count commits from payload.commits array if available, otherwise count each push as 1 commit
      const commitCount = safeEvents
        .filter(e => e.type === 'PushEvent')
        .reduce((acc, e) => acc + (e.payload.commits?.length || e.payload.size || 1), 0);
      const issueCount = safeEvents.filter(e => e.type === 'IssuesEvent').length;

      if (isMountedRef.current) {
        setActivities(processedActivities);
        setStats({
          totalPRs: prCount,
          totalCommits: commitCount,
          totalIssues: issueCount,
          repos: user.public_repos || 0
        });
        setLastUpdated(new Date());
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      if (isMountedRef.current) {
        // Use fallback data on error
        setActivities(FALLBACK_ACTIVITIES);
        setStats({
          totalPRs: FALLBACK_STATS.totalPRs,
          totalCommits: FALLBACK_STATS.totalCommits,
          totalIssues: 0,
          repos: FALLBACK_STATS.repos
        });
        setLastUpdated(new Date());
        setErrorMessage("");
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchGitHubData();
    return () => {
      isMountedRef.current = false;
    };
  }, [fetchGitHubData]);

  const getTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 }
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
      }
    }
    return 'just now';
  };

  return (
    <section className="github-activity">
      <div className="github-activity__header">
        <span className="section-label">ACTIVITY</span>
        <h2 className="section-heading">GitHub Activity</h2>
      </div>

      {/* Quick Stats */}
      <div className="github-quick-stats">
        <div className="quick-stat">
          <span className="quick-stat__value">{stats.repos}</span>
          <span className="quick-stat__label">Public Repos</span>
        </div>
        <div className="quick-stat">
          <span className="quick-stat__value">{stats.totalCommits}</span>
          <span className="quick-stat__label">Commits (last 100 events)</span>
        </div>
        <div className="quick-stat">
          <span className="quick-stat__value">{stats.totalPRs}</span>
          <span className="quick-stat__label">PRs (last 100 events)</span>
        </div>
      </div>

      <div className="github-activity__meta">
        <span>
          {lastUpdated
            ? `Last updated ${getTimeAgo(lastUpdated)}`
            : "Updating..."}
        </span>
        <button
          type="button"
          onClick={fetchGitHubData}
          className="activity-refresh"
          disabled={loading}
        >
          Refresh
        </button>
      </div>

      {/* Contribution Calendar */}
      <div className="contribution-calendar">
        <GitHubCalendar
          username={GITHUB_USERNAME}
          colorScheme="light"
          theme={githubTheme}
          blockSize={11}
          blockMargin={3}
          fontSize={12}
          hideColorLegend={false}
          hideMonthLabels={false}
          hideTotalCount={false}
        />
      </div>

      {/* Recent Activity Feed */}
      <div className="activity-feed">
        <div className="activity-feed__header">
          <h3 className="activity-feed__title">Recent Activity</h3>
          <span className="activity-feed__note">Last 100 public events</span>
        </div>
        {loading ? (
          <div className="activity-loading">Loading activities...</div>
        ) : errorMessage ? (
          <div className="activity-error">
            {errorMessage.toLowerCase().includes("rate limit")
              ? "GitHub rate limit reached. Try again later."
              : "Unable to load recent activity right now."}
          </div>
        ) : activities.length > 0 ? (
          <div className="activity-list">
            {activities.map((activity, idx) => (
              <div key={idx} className={`activity-item activity-item--${activity.color}`}>
                <span className="activity-item__icon">{activity.icon}</span>
                <div className="activity-item__content">
                  <span className="activity-item__action">{activity.action}</span>
                  <span className="activity-item__repo">{activity.repo}</span>
                </div>
                <span className="activity-item__time">{activity.time}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="activity-empty">No recent activity</div>
        )}
      </div>

      {/* GitHub Link */}
      <a 
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noreferrer"
        className="github-profile-link"
      >
        View Full Profile on GitHub →
      </a>
    </section>
  );
};
