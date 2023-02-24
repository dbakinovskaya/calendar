const dom = {
    calendar: document.querySelector('#calendar')
};

const months = [
    {
        title: 'ёбаный<br>новый год',
        name: 'январь',
        days: 31,
    },
    {
        title: 'ёбаный<br>холод',
        name: 'февраль',
        days: 28,
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

//функция для отрисовки месяца
function renderMonth(monthIdx, year) {
    const month = months[monthIdx];
    const monthHeadString = buildMonthHead(month.title, month.name);
    const monthBox = document.createElement('div');
    monthBox.className = 'month';
    monthBox.innerHTML = monthHeadString + `<div class='month__content'>${renderWeekDaysNames()}</div>`;
    dom.calendar.append(monthBox);
};

//цикл для отрисовки всех месяцев
for (let i=0; i<1; i++) { // пока заменили на 1 месяц
    renderMonth(i, 2022);
    renderWeekDaysNames();
};

//функция отрисовки ячеек
function buildCell(content, isAccent = false) { //isAccent для выходных(ячейки другого цвета)
    const cls = isAccent ? 'month__date month__date_accent' : 'month__date';
    return `<div class=${cls}>${content}</div>`
}

function renderMonthCells(monthData) {

}

function renderWeekDaysNames() {
    const weekDays = ['пн','вт','ср','чт','пт','сб','вс'];
    let dayNames = [];
    for (let i=0; i<=6; i++) {
        const dayNameTag = `<div class='month__date month__date_accent'>${weekDays[i]}</div>`;
        dayNames.push(dayNameTag);
    }
    return dayNames.join('');
}

//след коммит: добавили отрисовку ячеек для дат