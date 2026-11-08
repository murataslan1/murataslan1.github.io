import { contactConfig } from "../content_option";

export const subscribe = async (email, source) => {
  if (!contactConfig.NEWSLETTER_URL) {
    const subject = encodeURIComponent("Subscribe me to Open Source Weekly");
    const body = encodeURIComponent(`Please add ${email} to Open Source Weekly.`);
    window.location.href = `mailto:${contactConfig.YOUR_EMAIL}?subject=${subject}&body=${body}`;
    return "mailto";
  }

  const res = await fetch(contactConfig.NEWSLETTER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source, page: window.location.pathname }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return "saved";
};

export const subscribeMessages = {
  saved: "You're on the list. The next issue lands in your inbox.",
  mailto: "Your email app just opened. Hit send and you're on the list.",
  error: "Something went wrong. Please try again.",
};
