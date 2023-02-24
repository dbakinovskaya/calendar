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
const dayNames = ['пн','вт','ср','чт','пт','сб','вс'];

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
    monthBox.innerHTML = monthHeadString;
    dom.calendar.append(monthBox);
};

//цикл для отрисовки всех месяцев
for (let i=0; i<=11; i++) {
    renderMonth(i, 2022);
};
