function matchPwd() {
    let init_pwd = document.getElementById('passwd').value;
    let dup_pwd = document.getElementById("pwd").value;

    console.log(init_pwd);
    if (init_pwd === dup_pwd) {
        alert("Passwords did not match");

    } else {
        alert("Password created successfully");
    }
};

const btn = document.querySelector('#btn');
btn.addEventListener('click', matchPwd);


