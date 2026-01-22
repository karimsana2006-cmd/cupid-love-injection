async function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: user,
        password: pass
      })
    });

    const data = await response.json();

    if (data.success) {
      document.getElementById("result").innerHTML =
        "💖 ACCESS GRANTED 💖<br><br>" + data.flag;
    } else {
      document.getElementById("result").innerText = "❌ Access Denied";
    }
  } catch (err) {
    document.getElementById("result").innerText =
      "⚠️ Server error";
  }
}
