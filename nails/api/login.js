export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { username, password } = req.body || {};

  const FLAG = "FLAG{cupid_loves_sql_injection}";

  // Simulated SQL injection vulnerability
  if (
    (username === "cupid" && password === "love123") ||
    (username && username.includes("'--"))
  ) {
    return res.status(200).json({
      success: true,
      flag: FLAG
    });
  }

  return res.status(401).json({ success: false });
}
