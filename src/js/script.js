const buttons = document.querySelectorAll('.once');
const listItems = [...document.querySelectorAll('li')].filter(li => !li.classList.contains('once'));

buttons.forEach(btn => btn.addEventListener('click', () => {
    clearActiveFromTopButtons();
    btn.classList.add('active');
}));

listItems.forEach(li => li.addEventListener('click', () => {
    listItems.forEach(li => {
        li.classList.remove('active')
    });
    li.classList.add('active');
}));

function clearActiveFromTopButtons() {
    buttons.forEach(btn => btn.classList.remove('active'));
}
