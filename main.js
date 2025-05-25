function fillTeacherSlider() {
    let result = `
    <div class="slider-border left"></div>
        <div class="teacher left-teacher" id="teacher${teachers[0].id}">
            <img src="${teachers[0].img}" alt="Фото преподавателя">
             <div class="name">${teachers[0].name}</div>
        </div>
        <div class="teacher center-teacher" id="teacher${teachers[1].id}">
             <img src="${teachers[1].img}" alt="Фото преподавателя">
             <div class="name">${teachers[1].name}</div>
        </div>
        <div class="teacher right-teacher" id="teacher${teachers[2].id}">
            <img src="${teachers[2].img}" alt="Фото преподавателя">
            <div class="name">${teachers[2].name}</div>
        </div>
     `;
    for (let i = 3; i < teachers.length; i++) {
        result += `
        <div class="teacher hidden-teacher" id="teacher${teachers[i].id}">
             <img src="${teachers[i].img}" alt="">
             <div class="name">${teachers[i].name}</div>
        </div>`
    }
    result += `<div class="slider-border right"></div>`;
    teacherSlider.innerHTML = result;
}
let teachers = [
    { id: 1, name: '1', img: 'img/Педагог.jpeg' },
    { id: 2, name: '2', img: 'img/Педагог.jpeg' },
    { id: 3, name: '3', img: 'img/Педагог.jpeg' },
    { id: 4, name: '4', img: 'img/Педагог.jpeg' },
    { id: 5, name: '5', img: 'img/Педагог.jpeg' },
    { id: 6, name: '6', img: 'img/Педагог.jpeg' }
];


let nextTeacher = 'teacher4';
let prevTeacher = 'teacher' + teachers.length;
let teacherSlider = document.getElementById('teacher-slider');
fillTeacherSlider();
teacherSlider.addEventListener('mouseenter', () => {
    this.onwheel = function scrollTeachers(e) {
        document.body.style.overflow = 'hidden';
        let leftTeacher = document.getElementsByClassName('left-teacher')[0];
        let rightTeacher = document.getElementsByClassName('right-teacher')[0];
        let centerTeacher = document.getElementsByClassName('center-teacher')[0];
        let hiddenRightTeacher = document.getElementById(nextTeacher);
        let hiddenLeftTeacher = document.getElementById(prevTeacher);
        if (e.deltaY < 0) {
            if (parseInt(nextTeacher[nextTeacher.length - 1]) + 1 > teachers.length) {
                nextTeacher = 'teacher1'
            }
            else {
                nextTeacher = 'teacher' + (parseInt(nextTeacher[nextTeacher.length - 1]) + 1);
            }
            if (parseInt(prevTeacher[prevTeacher.length - 1]) + 1 > teachers.length) {
                prevTeacher = 'teacher1'
            }
            else {
                prevTeacher = 'teacher' + (parseInt(prevTeacher[prevTeacher.length - 1]) + 1);
            }
            leftTeacher.classList.remove('left-teacher');
            leftTeacher.classList.add('hidden-teacher')
            centerTeacher.classList.remove('center-teacher');
            centerTeacher.classList.add('left-teacher')
            rightTeacher.classList.remove('right-teacher');
            rightTeacher.classList.add('center-teacher');
            hiddenRightTeacher.classList.remove('hidden-teacher');
            hiddenRightTeacher.classList.add('right-teacher');
        } else {
            if (parseInt(nextTeacher[nextTeacher.length - 1]) - 1 <= 0) {
                nextTeacher = 'teacher' + teachers.length;
            }
            else {
                nextTeacher = 'teacher' + (parseInt(nextTeacher[nextTeacher.length - 1]) - 1);
            }
            if (parseInt(prevTeacher[prevTeacher.length - 1]) - 1 <= 0) {
                prevTeacher = 'teacher' + teachers.length;
            }
            else {
                prevTeacher = 'teacher' + (parseInt(prevTeacher[prevTeacher.length - 1]) - 1);
            }
            leftTeacher.classList.remove('left-teacher');
            leftTeacher.classList.add('center-teacher')
            centerTeacher.classList.remove('center-teacher');
            centerTeacher.classList.add('right-teacher')
            rightTeacher.classList.remove('right-teacher');
            rightTeacher.classList.add('hidden-teacher');
            hiddenLeftTeacher.classList.remove('hidden-teacher');
            hiddenLeftTeacher.classList.add('left-teacher');
        }
    };
});
teacherSlider.addEventListener('mouseleave', () => {
    this.onwheel = '';
    document.body.style.overflow = 'scroll';
});

function toStudy() {
    window.location = '#course'
}
document.getElementById('button-to-study').addEventListener('click', toStudy);