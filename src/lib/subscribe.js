import { contactConfig } from "../content_option";

export const subscribe = async (email, source) => {
  if (!contactConfig.GOOGLE_SHEETS_URL) {
    const subject = encodeURIComponent("Subscribe me to Open Source Weekly");
    const body = encodeURIComponent(`Please add ${email} to Open Source Weekly.`);
    window.location.href = `mailto:${contactConfig.YOUR_EMAIL}?subject=${subject}&body=${body}`;
    return "mailto";
  }

  await fetch(contactConfig.GOOGLE_SHEETS_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ email, source, page: window.location.pathname }),
  });
  return "saved";
};

export const subscribeMessages = {
  saved: "You're on the list. The next issue lands in your inbox.",
  mailto: "Your email app just opened. Hit send and you're on the list.",
  error: "Something went wrong. Please try again.",
};
