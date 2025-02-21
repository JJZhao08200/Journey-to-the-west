function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) { 
        localStorage.setItem("username", username); // 存储用户名
        alert("Password: Thank you Judge Panel"); // ✅ 登录成功提示
        window.location.href = "team.html"; // ✅ 跳转到 Team 页面
    } else {
        alert("Please enter both username and password."); // 🚨 防止空输入
    }
}

// 🚀 自动检查登录状态，未登录用户跳转到 login.html
window.onload = function() {
    let user = localStorage.getItem("username");

    // 🚨 在 team.html 页面，检查用户是否已登录
    if (window.location.pathname.includes("team.html")) {
        if (!user) {
            // ❌ 如果未登录，重定向到 login 页面
            window.location.href = "login.html";
        } else {
            // ✅ 如果已登录，显示欢迎信息
            let welcomeElement = document.getElementById("userWelcome");
            if (welcomeElement) {  
                welcomeElement.textContent = "Welcome!, " + user + "!";
            }
        }
    }
};
