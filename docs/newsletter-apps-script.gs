// Open Source Weekly subscriber list.
// Setup: create a Google Sheet -> Extensions -> Apps Script -> paste this file ->
// Deploy -> New deployment -> Web app (Execute as: Me, Who has access: Anyone) ->
// put the /exec URL into contactConfig.GOOGLE_SHEETS_URL in src/content_option.js.

const SHEET_NAME = "Subscribers";
const NOTIFY_EMAIL = ""; // optional: your address to get an email per new subscriber
const EMAIL_RE = /^[^=+\-@\s][^@\s]*@[^@\s]+\.[^@\s]+$/;

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || "{}");
    const email = String(data.email || "").trim().toLowerCase();
    if (!EMAIL_RE.test(email) || email.length > 254) return json({ ok: false });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(["Date", "Email", "Source", "Page"]);

    const rows = sheet.getLastRow() - 1;
    const existing = rows > 0 ? sheet.getRange(2, 2, rows, 1).getValues().flat() : [];
    if (existing.indexOf(email) === -1) {
      sheet.appendRow([
        new Date(),
        email,
        String(data.source || "").slice(0, 40),
        String(data.page || "").slice(0, 100),
      ]);
      if (NOTIFY_EMAIL) MailApp.sendEmail(NOTIFY_EMAIL, "New Open Source Weekly subscriber", email);
    }
    return json({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
