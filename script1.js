function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) { 
        localStorage.setItem("username", username); // 存储用户名
        alert("Password: Thank you Judge Panel"); // ✅ 无论如何都会弹出
        window.location.href = "team.html"; // 跳转到 Team 页面
    } else {
        alert("Please enter both username and password.");
    }
}

// 在 team.html 读取用户名
window.onload = function() {
    if (window.location.pathname.includes("team.html")) {
        let user = localStorage.getItem("username");
        if (user) {
            let welcomeElement = document.getElementById("userWelcome");
            if (welcomeElement) {  // ✅ 确保元素存在
                welcomeElement.textContent = "Welcome!, " + user + "!";
            }
        }
    }
};
