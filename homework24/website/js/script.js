let signup_form = document.getElementById("signup");
let login_form = document.getElementById("login");

let signup_form_link = document.getElementsByClassName("signup_form_link")[0];
let login_form_link = document.getElementsByClassName("login_form_link")[0];

let text = document.getElementsByClassName("text")[0];

signup_form_link.addEventListener("click", () => {
    signup_form.classList.remove("hide");
    login_form.classList.add("hide");
    text.classList.add("hide");
});

login_form_link.addEventListener("click", () => {
    login_form.classList.remove("hide");
    signup_form.classList.add("hide");
    text.classList.add("hide");
});


// Fill birthday selects

let birthday = document.getElementsByClassName("birthday")[0];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let day_select = document.createElement("select");
let month_select = document.createElement("select");
let year_select = document.createElement("select");

for (let i = 1; i <= 31; i++) {
    let option = document.createElement("option");
    option.innerText = i;
    day_select.append(option);
}

for (let i = 0; i < months.length; i++) {
    let option = document.createElement("option");
    option.innerText = months[i];
    month_select.append(option);
}

for (let i = 1993; i <= 2024; i++) {
    let option = document.createElement("option");
    option.innerText = i;
    year_select.append(option);
}

birthday.append(day_select);
birthday.append(month_select);
birthday.append(year_select);


///// Validation 

let signup_btn = document.getElementsByClassName("register_btn")[0];

let name_regexp = /^[A-Z][a-z]+$/g; 
let email_regexp = /^\w+@[a-z]+[.][a-z]+$/g; 
let tel_regexp = /^\+?\(\d{3}\)\d{2}-\d{2}-\d{2}-\d{2}/g;

let first_name_err = document.getElementsByClassName("first_name_err")[0];
let last_name_err = document.getElementsByClassName("last_name_err")[0];
let email_err = document.getElementsByClassName("email_err")[0];
let password_err = document.getElementsByClassName("password_err")[0];
let password_repeat_err = document.getElementsByClassName("password_repeat_err")[0];
let gender_err = document.getElementsByClassName("gender_err")[0];

let users = [];

function validation(field_name, error_field, error_message, regexp) {
    if (field_name !== "") {
        if (!field_name.match(regexp)) {
            error_field.innerText = error_message;
            return;
        } else {
            error_field.innerText = "";
        }
    } else {
        error_field.innerText = "Field cannot be empty!!";
    }
}

signup_btn.addEventListener("click", e => {
    e.preventDefault();

    let user = {};

    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password_repeat = document.getElementById("password_repeat").value;
    let male = document.getElementById("male");
    let female = document.getElementById("female");

    validation(first_name, first_name_err, "First name can contain only letters and must begin with an uppercase letter!!", name_regexp);
    validation(last_name, last_name_err, "Last name can contain only letters and must begin with an uppercase letter!!!!", name_regexp);
    validation(email, email_err, "Incorrect email address!!", email_regexp);

    if (password !== "") {
        if (password.length < 8) {
            password_err.innerText = "Password must contain a minimum of 8 characters!!";
            return;
        } else if (!/[a-zA-Z]/g.test(password) || !/\d/g.test(password) || !/_/g.test(password)) {
            password_err.innerText = "Password must contain characters, numbers and upper case letter!!";
            return;
        } else {
            password_err.innerText = "";
        }
    } else {
        password_err.innerText = "Field cannot be empty!!";
    }

    if (password_repeat !== "") {
        if (password_repeat !== password) {
            password_repeat_err.innerText = "Passwords do not match!!";
            return;
        } else {
            password_repeat_err.innerText = "";
        }
    } else {
        password_repeat_err.innerText = "Field cannot be empty!!";
    }

    if (!male.checked && !female.checked) {
        gender_err.innerText = "Choose gender!!";
        return;
    } else {
        gender_err.innerText = "";
    }

    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.password = password;
    if (male.checked) user.gender = male.id;
    else user.gender = female.id;

    users.push(user);
    
    login_form.classList.remove("hide");
    signup_form.classList.add("hide");

    text.classList.remove("hide");
});



// Log In 

let login_btn = document.getElementsByClassName("login_btn")[0];
let close_btn = document.getElementsByClassName("close")[0];
let account = document.getElementById("account");

login_btn.addEventListener("click", e => {
    e.preventDefault();

    let email = document.getElementsByClassName("email")[0].value;
    let password = document.getElementsByClassName("password")[0].value;

    let email_err = document.getElementsByClassName("em1")[0];
    let pass_err = document.getElementsByClassName("em2")[0];

    let user = users.find(user => email === user.email);

    if (email !== "") {            
        if ( !user ) {
            email_err.innerText = "No such account!";
            return;
        } else {
            email_err.innerText = "";
        }
    } else {
        email_err.innerText = "Field cannot be empty!!";
    }

    if (password !== "") {
        if ( user.password !== password ) {
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
    account.classList.remove("hide");

    login_form.classList.add("hide");
    signup_form.classList.add("hide");
    text.classList.add("hide");
});

close_btn.addEventListener("click", () => {
    account.classList.add("hide");
    login_form.classList.remove("hide");

    document.getElementsByClassName("email")[0].value = "";
    document.getElementsByClassName("password")[0].value = "";
});