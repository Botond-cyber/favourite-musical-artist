const checkboxes = [
    { checkbox: document.getElementById('check2013'), row: document.getElementById('tr2013') },
    { checkbox: document.getElementById('check2014'), row: document.getElementById('tr2014') },
    { checkbox: document.getElementById('check2015'), row: document.getElementById('tr2015') },
    { checkbox: document.getElementById('check2016'), row: document.getElementById('tr2016') },
    { checkbox: document.getElementById('check2017'), row: document.getElementById('tr2017') },
    { checkbox: document.getElementById('check2018'), row: document.getElementById('tr2018') },
    { checkbox: document.getElementById('check2019'), row: document.getElementById('tr2019') },
    { checkbox: document.getElementById('check2020'), row: document.getElementById('tr2020') },
    { checkbox: document.getElementById('check2021'), row: document.getElementById('tr2021') },
    { checkbox: document.getElementById('check2022'), row: document.getElementById('tr2022') },
    { checkbox: document.getElementById('check2023'), row: document.getElementById('tr2023') },
    { checkbox: document.getElementById('check2024'), row: document.getElementById('tr2024') }
];

// Initially hide all rows
checkboxes.forEach(({ row }) => {
    row.style.display = 'none';
});

checkboxes.forEach(({ checkbox, row }) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            row.style.display = 'table-row-group';
        } else {
            row.style.display = 'none';
        }
        reorderRows();
    });
});

function reorderRows() {
    const table = document.querySelector('.discographytable');
    checkboxes.forEach(({ checkbox, row }) => {
        if (checkbox.checked) {
            table.appendChild(row);
        }
    });
}