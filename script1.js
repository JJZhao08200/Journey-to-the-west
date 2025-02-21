function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) { // 只检查是否输入，不验证正确性
        localStorage.setItem("username", username); // 存储用户名
        window.location.href = "dashboard.html"; // 跳转到 Dashboard 页面
    } else {
        alert("Password: Thank you Judge Panel");
    }
}

// 在 dashboard.html 读取用户名
window.onload = function() {
    if (window.location.pathname.includes("dashboard.html")) {
        let user = localStorage.getItem("username");
        if (user) {
            document.getElementById("userWelcome").textContent = "Welcome!, " + user + "!";
        }
    }
};
