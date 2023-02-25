const dom = {
    calendar: document.querySelector('#calendar'),
    year: document.querySelector('#year'),
};

const year = new Date().getFullYear();
dom.year.innerHTML = year;

function isLeap(year) {
    let date = new Date(year, 2, 0);
    return date.getDate()
}

const months = [
    {
        title: 'ёбаный<br>новый год',
        name: 'январь',
        days: 31,
    },
    {
        title: 'ёбаный<br>холод',
        name: 'февраль',
        days: isLeap(year),
    },
    {
        title: 'ёбаная<br>грязь',
        name: 'март',
        days: 31,
    },
    {
        title: 'ёбаные<br>шутники',
        name: 'апрель',
        days: 30,
    },
    {
        title: 'ёбаный<br>день труда',
        name: 'май',
        days: 31,
    },
    {
        title: 'ёбаные<br>школьники',
        name: 'июнь',
        days: 30,
    },
    {
        title: 'ёбаная<br>жара',
        name: 'июль',
        days: 31,
    },
    {
        title: 'ёбаный<br>отпуск',
        name: 'август',
        days: 31,
    },
    {
        title: 'ёбаное<br>3 сентября',
        name: 'сентябрь',
        days: 30,
    },
    {
        title: 'ёбаный<br>дождь',
        name: 'октябрь',
        days: 31,
    },
    {
        title: 'ёбаные<br>скидки',
        name: 'ноябрь',
        days: 30,
    },
    {
        title: 'ёбаные<br>подарки',
        name: 'декабрь',
        days: 31,
    },

];

//функция для генерации шапки месяца
function buildMonthHead(title, monthName) {
    return `
        <div class='month__title'>${title}</div>
        <div class='month__name'>${monthName}</div>
    `
}

//функция для шапки дней недели
function renderWeekDaysNames() {
    const weekDays = ['пн','вт','ср','чт','пт','сб','вс'];
    let dayNames = [];
    for (let i=0; i<=6; i++) {
        const dayNameTag = `<div class='month__date month__date_accent'>${weekDays[i]}</div>`;
        dayNames.push(dayNameTag);
    }
    return dayNames.join('');
}

//функция для отрисовки месяца
function renderMonth(monthIdx, year) {
    const month = months[monthIdx];
    const monthHeadString = buildMonthHead(month.title, month.name);
    let monthContentHTML = ['<div class=\"month__content\">'];
    const monthBox = document.createElement('div');
    monthBox.className = 'month';
    monthContentHTML.push(renderWeekDaysNames());
    monthContentHTML.push(renderDates(year, monthIdx, month.days));
    monthContentHTML.push('</div>');
    monthBox.innerHTML = monthHeadString + monthContentHTML.join('');
    dom.calendar.append(monthBox);
};

function renderDates(year,monthIdx, daysCount) {
    const date = new Date(year, monthIdx, 1);
    let datesHTML = [];
    const startDay = date.getDay();

    let count = 1;
    while (count < startDay || (startDay == 0 && count <=6)) {
        datesHTML.push(buildDate(''));
        count++;
    }

    let day = 1;
    while (day <= daysCount) {
        datesHTML.push(buildDate(day));
        day++;
    }
    return datesHTML.join('');
}

//функция отрисовки ячеек
function buildDate(content, isAccent = false) { //isAccent для выходных(ячейки другого цвета)
    const cls = isAccent ? 'month__date month__date_accent' : 'month__date';
    return `<div class="${cls}">${content}</div>`
}

function renderCalendar (year) {
    for (let i=0; i<=11; i++) {
        renderMonth(i, year);
    };
}

renderCalendar(year);

//след коммит: добавили отрисовку ячеек для дат
//переименовать функции рендер и билд!! и отдельный коммит fix