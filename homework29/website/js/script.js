let signup_form = document.getElementById("signup");
let login_form = document.getElementById("login");

let signup_form_link = document.getElementsByClassName("signup_form_link")[0];
let login_form_link = document.getElementsByClassName("login_form_link")[0];

let text = document.getElementsByClassName("text")[0];

signup_form_link.addEventListener("click", () => {
    signup_form.style.display = "block";
    login_form.style.display = "none";
});

login_form_link.addEventListener("click", () => {
    signup_form.style.display = "none";
    login_form.style.display = "block";
});

///// Validation 

let signup_btn = document.getElementsByClassName("register_btn")[0];

let name_regexp = /^[A-Z][a-z]+$/g;
let email_regexp = /^\w+@[a-z]+[.][a-z]+$/g;
let tel_regexp = /^\+?\(\d{3}\)\d{2}-\d{2}-\d{2}-\d{2}/g;

let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password_repeat = document.getElementById("password_repeat");
let male = document.getElementById("male");
let female = document.getElementById("female");

let first_name_err = document.getElementsByClassName("first_name_err")[0];
let last_name_err = document.getElementsByClassName("last_name_err")[0];
let email_err = document.getElementsByClassName("email_err")[0];
let password_err = document.getElementsByClassName("password_err")[0];
let password_repeat_err = document.getElementsByClassName("password_repeat_err")[0];
let gender_err = document.getElementsByClassName("gender_err")[0];

function validation(field_name, error_field, error_message, regexp) {
    if (field_name !== "") {
        if (!field_name.match(regexp)) {
            error_field.innerText = error_message;
        } else {
            error_field.innerText = "";
        }
    }
}

first_name.addEventListener("keyup", e => validation(e.target.value, first_name_err, "First name can contain only letters and must begin with an uppercase letter!!", name_regexp));
last_name.addEventListener("keyup", e => validation(e.target.value, last_name_err, "Last name can contain only letters and must begin with an uppercase letter!!", name_regexp));
email.addEventListener("keyup", e => validation(e.target.value, email_err, "Incorrect email address!!", email_regexp));

password.addEventListener("keyup", e => {
    let value = e.target.value;
    if (value.length < 8) {
        password_err.innerText = "Password must contain a minimum of 8 characters!!";
    } else if (!/[a-zA-Z]/g.test(value) || !/\d/g.test(value) || !/_/g.test(value)) {
        password_err.innerText = "Password must contain characters, numbers and upper case letter!!";

    } else {
        password_err.innerText = "";
    }
})

password_repeat.addEventListener("keyup", e => {
    let value = e.target.value;
    if (value !== password.value) {
        password_repeat_err.innerText = "Passwords do not match!!";

    } else {
        password_repeat_err.innerText = "";
    }
});

let users = [];
let y = JSON.parse(localStorage.getItem("users"));
if (y) {
    users = y;
}

// Sign up
signup_btn.addEventListener("click", e => {
    e.preventDefault();

    let user = {};

    let email1 = users.find(val => email.value === val.email);
    if (email1) {
        email_err.innerText = "Email already exist!";
    }

    let inputs = document.getElementsByTagName("input");
    for (let i = 3; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            inputs[i].nextElementSibling.innerHTML = "Field cannot be empty!!";
        }
    }

    if (!male.checked && !female.checked) {
        gender_err.innerText = "Choose gender!!";
    } else {
        gender_err.innerText = "";
    }

    if (first_name_err.innerText !== "" || last_name_err.innerText !== "" ||
        email_err.innerText !== "" || password_err.innerText !== "" ||
        password_repeat_err.innerText !== "" || gender_err.innerText !== "") {
        return;
    }

    user = {
        id: Date.now(),
        first_name: first_name.value,
        last_name: last_name.value,
        password: password.value,
        email: email.value,
    }

    if (male.checked) user.gender = male.id;
    else user.gender = female.id;

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Thanks for registration!");
    document.getElementById("form1").reset();

    login_form.style.display = "block";
    signup_form.style.display = "none";
});


// Log In 
let login_btn = document.getElementsByClassName("login_btn")[0];
let logout = document.getElementsByClassName("close")[0];
let isAuth = false;

let z = JSON.parse(localStorage.getItem("isAuth"));
if (z) {
    if (z.isAuth) {
        account.style.display = "block";
        login_form.style.display = "none";

        let user = users.find(val => val.id === z.user_id);
        
        let name = document.getElementsByClassName("name")[0];
        name.innerText = user.first_name;
    } else {
        account.style.display = "none";
        login_form.style.display = "block";
    }
}

let logged_in_user = {};

login_btn.addEventListener("click", e => {
    e.preventDefault();

    let email = document.getElementsByClassName("email")[0].value;
    let password = document.getElementsByClassName("password")[0].value;

    let email_err = document.getElementsByClassName("em1")[0];
    let pass_err = document.getElementsByClassName("em2")[0];

    let register_users = JSON.parse(localStorage.getItem("users"));
    if (!register_users) {
        email_err.innerText = "No such account!";
        return;
    }

    let user = register_users.find(user => email === user.email);

    if (email !== "") {
        if (!user) {
            email_err.innerText = "No such account!";
            return;
        } else {
            email_err.innerText = "";
        }
    } else {
        email_err.innerText = "Field cannot be empty!!";
    }

    if (password !== "") {
        if (user.password !== password) {
            pass_err.innerText = "Incorrect password";
            return;
        } else {
            pass_err.innerText = "";
        }
    } else {
        pass_err.innerText = "Field cannot be empty!!";
        return;
    }

    let name = document.getElementsByClassName("name")[0];
    name.innerText = user.first_name;

    account.style.display = "block";
    login_form.style.display = "none";

    isAuth = true;

    logged_in_user = {
        user_id: user.id,
        isAuth: isAuth
    }
    localStorage.setItem("isAuth", JSON.stringify(logged_in_user) );
});

// log out
logout.addEventListener("click", () => {
    account.style.display = "none";
    login_form.style.display = "block";

    isAuth = false;
    logged_in_user.isAuth = isAuth;
    localStorage.setItem("isAuth", JSON.stringify(logged_in_user) );
});


