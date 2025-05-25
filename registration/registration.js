let name = document.getElementById('name');
let lastname = document.getElementById('lastname');
let patronym = document.getElementById('patronym');
let passport = document.getElementById('passport');
let phone = document.getElementById('phone');
let year = document.getElementById('year');
let password = document.getElementById('password');
let passwordRepeat = document.getElementById('password-repeat');

let nameP = document.getElementById('name-p');
let lastnameP = document.getElementById('lastname-p');
let patronymP = document.getElementById('patronym-p');
let passportP = document.getElementById('passport-p');
let phoneP = document.getElementById('phone-p');
let yearP = document.getElementById('year-p');
let passwordP = document.getElementById('password-p');
let passwordRepeatP = document.getElementById('password-repeat-p');

let warnings = 0;

function borderRecolor(input) {
    input.style.borderColor = 'var(--warning)';
    warnings++;
}

function borderRecolorBack(input) {
    if (input.style.border == 'var(--warning)') {
        warnings--;
    }
    input.style.borderColor = 'var(--color2)'
}

function warning(p, set) {
    if (set) {
        switch (p) {
            case 'name':
                nameP.textContent = 'Нельзя использовать цифры!';
                break;
            case 'lastname':
                lastnameP.textContent = 'Нельзя использовать цифры!';
                break;
            case 'patronym':
                patronymP.textContent = 'Нельзя использовать цифры!';
                break;
            case 'passport':
                passportP.textContent = 'Неверный формат!';
                break;
            case 'phone':
                phoneP.textContent = 'Некорректный номер!';
                break;
            case 'year':
                yearP.textContent = '4 цифры!';
                break;
            case 'password':
                passwordP.textContent = 'Пароль должен быть не менее 6 символов!';
                break;
            case 'password-repeat':
                passwordRepeatP.textContent = 'Пароли не совпадают!';
                break;
            default:
                break;
        }
    }
    else {
        switch (p) {
            case 'name':
                nameP.textContent = '';
                break;
            case 'lastname':
                lastnameP.textContent = '';
                break;
            case 'patronym':
                patronymP.textContent = '';
                break;
            case 'passport':
                passportP.textContent = '';
                break;
            case 'phone':
                phoneP.textContent = '';
                break;
            case 'year':
                yearP.textContent = '';
                break;
            case 'password':
                passwordP.textContent = '';
                break;
            case 'password-repeat':
                passwordRepeatP.textContent = '';
                break;
            default:
                break;
        }
    }
}

function checkFIO() {
    let Value = this.value;
    for (let i = 0; i < Value.length; i++) {
        if (!isNaN(Value[i])) {
            borderRecolor(this);
            warning(this.getAttribute('id'), true);
            return;
        }
    }
    borderRecolorBack(this);
    warning(this.getAttribute('id'), false)
}
name.addEventListener('change', checkFIO);
lastname.addEventListener('change', checkFIO);
patronym.addEventListener('change', checkFIO);

function checkPassport() {
    if (passport.value == '') {
        borderRecolorBack(this);
        warning(this.getAttribute('id', false));
        return;
    }
    if (isNaN(passport.value[passport.value.length - 1]) || passport.value.length < 12) {
        borderRecolor(this)
        warning(this.getAttribute('id'), true);
        return;
    }
    borderRecolorBack(this);
    warning(this.getAttribute('id', false));
}

function passportHelper(e) {
    if (e.key == 'Backspace') {
        return;
    }
    if (isNaN(passport.value[passport.value.length - 1])) {
        passport.value = passport.value.slice(0, passport.value.length - 1);
        return;
    }
    switch (passport.value.length) {
        case 2:
            passport.value += '-';
            break;
        case 5:
            passport.value += '-';
            break;
        default:
            break;
    }
    if (passport.value.length > 10) {
        let value = ''
        for (let i = 0; i < passport.value.length; i++) {
            if (i == 2) {
                value += '-';
                continue;
            }
            if (i == 5) {
                value += '-';
                continue;
            }
            value += passport.value[i];
        }
        passport.value = value;
    }
    if (passport.value.length > 11) {
        passport.value = passport.value.slice(0, 11);
    }
}
passport.addEventListener('keydown', passportHelper);
passport.addEventListener('change', checkPassport);

function checkPhone() {
    if (phone.value == '') {
        borderRecolorBack(this);
        warning(this.getAttribute('id', false));
        return;
    }
    if (isNaN(phone.value[phone.value.length - 1]) || phone.value.length < 16) {
        borderRecolor(this)
        warning(this.getAttribute('id'), true);
        return;
    }
    borderRecolorBack(this);
    warning(this.getAttribute('id', false));
}

function phoneHelper(e) {
    if (e.key == 'Backspace') {
        return;
    }
    if (isNaN(phone.value[phone.value.length - 1])) {
        phone.value = phone.value.slice(0, phone.value.length - 1);
        return;
    }
    switch (phone.value.length) {
        case 1:
            phone.value += '(';
            break;
        case 5:
            phone.value += ')-';
            break;
        case 10:
            phone.value += '-';
            break;
        case 13:
            phone.value += '-';
            break;
        default:
            break;
    }
    if (phone.value.length > 13) {
        let value = ''
        for (let i = 0; i < phone.value.length; i++) {
            if (i == 1) {
                value += '(';
                continue;
            }
            if (i == 5) {
                value += ')-';
                i += 1;
                continue;
            }
            if (i == 10 || i == 13) {
                value += '-';
                continue;
            }
            value += phone.value[i];
        }
        phone.value = value;
    }
    if (phone.value.length > 15) {
        phone.value = phone.value.slice(0, 15);
    }
}
phone.addEventListener('keydown', phoneHelper)
phone.addEventListener('change', checkPhone);

function checkYear() {
    if (year.value == '') {
        borderRecolorBack(this);
        warning(this.getAttribute('id', false));
        return;
    }
    if (isNaN(year.value[year.value.length - 1]) || year.value.length < 4) {
        borderRecolor(this)
        warning(this.getAttribute('id'), true);
        return;
    }
    borderRecolorBack(this);
    warning(this.getAttribute('id', false));
}


function yearHelper(e) {
    if (e.key == 'Backspace') {
        return;
    }
    if (isNaN(year.value[year.value.length - 1])) {
        year.value = year.value.slice(0, year.value.length - 1);
        return;
    }
    if (year.value.length > 3) {
        year.value = year.value.slice(0, 3);
    }
}
year.addEventListener('keydown', yearHelper);
year.addEventListener('change', checkYear);

function checkPassword() {
    if (password.value == '') {
        borderRecolorBack(this);
        warning(this.getAttribute('id'), false);
        return;
    }
    if (password.value.length < 6) {
        borderRecolor(this);
        warning(this.getAttribute('id'), true);
        return;
    }
    borderRecolorBack(this);
    warning(this.getAttribute('id'), false);
}
password.addEventListener('change', checkPassword);


function comparePasswords() {
    if (passwordRepeat.value == '') {
        borderRecolorBack(this);
        warning(this.getAttribute('id'), false);
        return;
    }
    if (password.value != passwordRepeat.value) {
        borderRecolor(this);
        warning(this.getAttribute('id'), true);
        return;
    }
    borderRecolorBack(this);
    warning(this.getAttribute('id'), false);
}
passwordRepeat.addEventListener('change', comparePasswords);

let go = document.getElementById('go');
function sendForm() {
    let isFull = true;
    if (name.value == '') {
        borderRecolor(name);
        isFull = false;
    }
    if (lastname.value == '') {
        borderRecolor(lastname);
        isFull = false;
    }
    if (patronym.value == '') {
        borderRecolor(patronym);
        isFull = false;
    }
    if (passport.value == '') {
        borderRecolor(passport);
        isFull = false;
    }
    if (phone.value == '') {
        borderRecolor(phone);
        isFull = false;
    }
    if (year.value == '') {
        borderRecolor(year);
        isFull = false;
    }
    if (password.value == '') {
        borderRecolor(password);
        isFull = false;
    }
    if (passwordRepeat.value == '') {
        borderRecolor(passwordRepeat);
        isFull = false;
    }
    if (warnings != 0) {
        return;
    }
    if (isFull) {
        return;
    }
}
go.addEventListener('click', sendForm);