const dom = {
    calendar: document.querySelector('#calendar'),
    year: document.querySelector('#year'),
}

const year = new Date().getFullYear();
dom.year.innerHTML = year;

function isLeap(year) {
    let date = new Date(year, 2, 0);
    return date.getDate();
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

function buildMonthHead(title, monthName) {
    return `
        <div class='month__title'>${title}</div>
        <div class='month__name'>${monthName}</div>
    `
}

function buildWeekDaysNames() {
    const weekDays = ['пн','вт','ср','чт','пт','сб','вс'];
    let dayNames = [];
    for (let i=0; i<=6; i++) {
        const dayNameTag = `<div class='month__date month__date_accent'>${weekDays[i]}</div>`;
        dayNames.push(dayNameTag);
    }
    return dayNames.join('');
}

function buildDateCell(content, isAccent = false) {
    const cls = isAccent ? 'month__date month__date_accent' : 'month__date';
    return `<div class="${cls}">${content}</div>`;
}


function buildDates(year,monthIdx, daysCount) {
    let datesHTML = [];
    const date = new Date(year, monthIdx, 1);
    const startDay = date.getDay();

    let emptyCells = 1;
    while (emptyCells < startDay || (startDay == 0 && emptyCells <=6)) {
        datesHTML.push(buildDateCell(''));
        emptyCells++;
    }

    let day = 1;
    while (day <= daysCount) {
        let checkDay = new Date(year, monthIdx, day).getDay();
        if (checkDay == 0 || checkDay == 6) {
            datesHTML.push(buildDateCell(day, true));
            day++;
        } else {
            datesHTML.push(buildDateCell(day));
            day++;
        }
    }
    return datesHTML.join('');
}

function renderMonth(monthIdx, year) {
    const month = months[monthIdx];
    const monthHeadString = buildMonthHead(month.title, month.name);

    const monthContentHTML = ['<div class=\"month__content\">'];
    monthContentHTML.push(buildWeekDaysNames());
    monthContentHTML.push(buildDates(year, monthIdx, month.days));
    monthContentHTML.push('</div>');

    const monthBox = document.createElement('div');
    monthBox.className = 'month';
    monthBox.innerHTML = monthHeadString + monthContentHTML.join('');
    dom.calendar.append(monthBox);
};

function renderCalendar (year) {
    for (let i=0; i<=11; i++) {
        renderMonth(i, year);
    };
}

renderCalendar(year);