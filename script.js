async function login() {
  const userID = document.getElementById("userID").value;
  const password = document.getElementById("password").value;

  const response = await fetch('https://script.google.com/macros/s/AKfycbwsfve3uGNbKhZM15VdakGcbmMLwOyZ3CrUQ3aKpzRjM_FRFVfb9NbPrR524dpITBhN/exec', {
    method: 'POST',
    body: JSON.stringify({
      action: "login",
      id: userID,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const result = await response.json();

  if (result.status === "success") {
    alert("✅ تم تسجيل الدخول بنجاح");
    window.location.href = "home.html";
  } else {
    alert("❌ البيانات غير صحيحة");
  }
}
