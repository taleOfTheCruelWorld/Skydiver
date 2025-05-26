let warnings = 0;

function borderRecolor(input) {
    if (input.style.borderColor != 'var(--warning)') {
        warnings++;
    }
    input.style.borderColor = 'var(--warning)';
}

function borderRecolorBack(input) {
    if (input.style.borderColor == 'var(--warning)') {
        warnings--;
    }
    input.style.borderColor = 'var(--color2)'
}

let phone = document.getElementById('phone');
let password = document.getElementById('password');

let phoneP = document.getElementById('phone-p');
let go = document.getElementById('go');
function warning(set) {
    if (set) {
        phoneP.textContent = 'Некорректный номер!';
    }
    else {
        phoneP.textContent = '';
    }
}

function checkPhone() {
    if (phone.value == '') {
        borderRecolorBack(this);
        warning(false);
        return;
    }
    if (isNaN(phone.value[phone.value.length - 1]) || phone.value.length < 16) {
        borderRecolor(this)
        warning(true);
        return;
    }
    borderRecolorBack(this);
    warning(false);
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

function sendForm() {
    if (phone.value == '') {
        borderRecolor(phone);
    }
    if (password.value == '') {
        borderRecolor(password);
        password.addEventListener('change', () => {
            borderRecolorBack(password)
        });
    }
    if (warnings > 0) {
        return;
    }
}
go.addEventListener('click', sendForm);