export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username, password } = req.body || {};

  const FLAG = "FLAG{cupid_loves_sql_injection}";

  // Normalize input
  const user = (username || "").toLowerCase();

  // Require exact username
  const sqlInjection = user === "admin'--";

  if (
    (username === "cupid" && password === "love123") ||
    sqlInjection
  ) {
    return res.status(200).json({
      success: true,
      flag: FLAG
    });
  }

  return res.status(401).json({ success: false });
}
