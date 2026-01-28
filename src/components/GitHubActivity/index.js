import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

// Color theme matching the site's burnt orange palette
const githubTheme = {
    dark: ['#161b22', '#ff6b3522', '#ff6b3555', '#ff6b35aa', '#ff6b35'],
};

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
};

// Stats data
const githubStats = [
    { label: 'Pull Requests', value: 75, suffix: '+' },
    { label: 'Projects', value: 30, suffix: '+' },
    { label: 'Merged PRs', value: 45, suffix: '+' },
    { label: 'Total Stars', value: 400, suffix: 'k+' },
];

// Contribution data for major projects
const contributions = [
    { project: 'VS Code', stars: '165k', prs: 1, status: 'merged', color: '#007ACC' },
    { project: 'Coolify', stars: '40k', prs: 14, status: 'merged', color: '#6366f1' },
    { project: 'Traefik', stars: '54k', prs: 4, status: 'merged', color: '#00d4aa' },
    { project: 'Milvus', stars: '32k', prs: 5, status: 'open', color: '#00a1ea' },
    { project: 'Deno', stars: '3.5k', prs: 2, status: 'merged', color: '#000000' },
    { project: 'MindsDB', stars: '26k', prs: 1, status: 'merged', color: '#00b06d' },
    { project: 'Cortex', stars: '2k', prs: 1, status: 'bounty', color: '#ff6b35' },
    { project: 'FAISS', stars: '33k', prs: 2, status: 'open', color: '#3b5998' },
];

export const GitHubActivity = () => {
    return (
        <motion.section
            className="github-activity"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
        >
            <motion.h2 className="section-title gradient-text" variants={itemVariants}>
                GitHub Activity
            </motion.h2>

            {/* Stats Grid */}
            <motion.div className="stats-grid" variants={containerVariants}>
                {githubStats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        className="stat-card glass-card"
                        variants={statVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="stat-value">
                            <CountUp
                                end={stat.value}
                                suffix={stat.suffix}
                                duration={2.5}
                                enableScrollSpy
                                scrollSpyOnce
                            />
                        </span>
                        <span className="stat-label">{stat.label}</span>
                    </motion.div>
                ))}
            </motion.div>

            {/* Contribution Graph */}
            <motion.div className="contribution-graph" variants={itemVariants}>
                <h3 className="color_sec">Contribution Graph</h3>
                <GitHubCalendar
                    username="murataslan1"
                    colorScheme="dark"
                    theme={githubTheme}
                    blockSize={12}
                    blockMargin={4}
                    fontSize={14}
                    hideColorLegend={false}
                    hideMonthLabels={false}
                    hideTotalCount={false}
                />
            </motion.div>

            {/* Project Contributions */}
            <motion.div className="project-contributions" variants={containerVariants}>
                <h3 className="color_sec">Major Contributions</h3>
                <div className="contributions-grid">
                    {contributions.map((contrib, index) => (
                        <motion.div
                            key={contrib.project}
                            className="contribution-card glass-card"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                borderColor: contrib.color,
                                boxShadow: `0 0 20px ${contrib.color}33`,
                            }}
                            custom={index}
                        >
                            <div className="contrib-header">
                                <span className="contrib-project">{contrib.project}</span>
                                <span
                                    className={`contrib-status status-${contrib.status}`}
                                    style={{ '--status-color': contrib.color }}
                                >
                                    {contrib.status === 'merged' && '✅'}
                                    {contrib.status === 'open' && '🔄'}
                                    {contrib.status === 'bounty' && '🚀'}
                                </span>
                            </div>
                            <div className="contrib-stats">
                                <span className="contrib-stars">⭐ {contrib.stars}</span>
                                <span className="contrib-prs">{contrib.prs} PR{contrib.prs > 1 ? 's' : ''}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
};
