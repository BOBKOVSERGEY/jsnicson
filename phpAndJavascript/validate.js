function validate(form) {
    fail = validateForename(form.forename.value);
    fail += validateSurname(form.surname.value);
    fail += validateUsername(form.username.value);
    fail += validatePassword(form.password.value);
    fail += validateAge(form.age.value);
    fail += validateEmail(form.email.value);

    if (fail == "") {
        return true;
    } else {
        var el = document.getElementById('error');
        el.innerHTML = fail;
        return false;
    }
}

function validateForename(field) {
    return (field == "") ? "Не введено имя<br>" : "";
}

function validateSurname(field) {
    return (field == "") ? "Не введена фамилия<br>" : "";
}

function validateUsername(field) {
    if (field == "") {
        return "Не введено имя пользователя<br>";
    } else if (field.length < 5) {
        return "В имени пользователя должно быть не менее 5 символов<br>";
    } else if (/[^a-zA-Z0-9_-]/.test(field)) {
        return "В имени пользователя разрешены только a-z, A-Z, 0-9, - и _<br>";
    }
    return "";
}

function validatePassword(field) {
    if (field == "") {
        return "Не введен пароль. <br>";
    } else if (field.length < 6) {
        return "Пароль должен быть не менее 6 символов. <br>";
    } else if (!/[a-z]/.test(field) || !/[A-Z]/.test(field) || !/[0-9]/.test(field)) {
        return "Пароль требует 1 символ из каждого набора a-z, A-Z и 0-9<br>";
    }
    return "";
}

function validateAge(field) {
    if (field == "" || isNaN(field)) {
        return "Не введен возраст.<br>";
    } else if (field < 18 || field > 110) {
        return "Возраст должен быть между 18 и 110.<br>";
    }
    return "";
}

function validateEmail(field) {
    if (field == "") {
        return "Не ввседен адрес электронной почты.<br>";
    } else if (!((field.indexOf(".") > 0) &&
        (field.indexOf("@") > 0)) ||
        /[^a-zA-Z0-9.@_-]/.test(field)) {
        return "Электронный адрес имеет не верный формат.<br>";
    }
    return "";
}