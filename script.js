const scriptURL = 'https://script.google.com/macros/s/AKfycbwsfve3uGNbKhZM15VdakGcbmMLwOyZ3CrUQ3aKpzRjM_FRFVfb9NbPrR524dpITBhN/exec';  

async function loginOrRegister() {  
  const userId = document.getElementById('userId').value.trim();  
  const password = document.getElementById('password').value.trim();  
  const status = document.getElementById('status');  

  if (!userId || !password) {  
    status.style.color = 'red';  
    status.innerText = 'يرجى إدخال معرف وكلمة مرور.';  
    return;  
  }  

  status.innerText = '...جارٍ التحقق';  

  const params = new URLSearchParams();  
  params.append("action", "loginOrRegister");  
  params.append("id", userId);  
  params.append("password", password);  

  try {  
    const res = await fetch(`${scriptURL}?${params.toString()}`);  
    const result = await res.json();  

    if (result.status === "login_success") {  
      status.style.color = 'green';  
      status.innerText = 'تم تسجيل الدخول بنجاح ✅';  
      localStorage.setItem("userId", userId);  
      localStorage.setItem("password", password);  
      setTimeout(() => {  
        window.location.href = "dashboard.html";  
      }, 1000);  
    } else if (result.status === "register_success") {  
      status.style.color = 'blue';  
      status.innerText = 'تم إنشاء الحساب بنجاح 🎉';  
      localStorage.setItem("userId", userId);  
      localStorage.setItem("password", password);  
      setTimeout(() => {  
        window.location.href = "dashboard.html";  
      }, 1000);  
    } else {  
      status.style.color = 'red';  
      status.innerText = 'كلمة المرور غير صحيحة ❌';  
    }  
  } catch (e) {  
    status.style.color = 'red';  
    status.innerText = 'حدث خطأ في الاتصال.';  
  }  
}
