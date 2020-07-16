const cityInfo = document.querySelector('.j-city-info');
const formView = document.querySelector('.j-form');

const sectionDelete = document.querySelector('.j-delete-section');
const btnDelete = document.querySelector('.j-delete-btn');

const btnSave = document.querySelector('.j-btn-save');

area.value = localStorage.getItem('area');

// При вводе в поле названия города, в cookie добавляется соответствующие пара ключ-значение 
// с ввденной полльзователем информацией
area.oninput = () => {
    localStorage.setItem('area', area.value)
};

// Если при открытии страницы уже есть информация о городе пользовтеля, 
// соответсвующее сообщение выводится на экран, а поле ввода скрыывается 
if (area.value) {
    formView.classList.replace('d-block','d-none');
    cityInfo.innerHTML = 'Ваш город - ' + area.value;
} else {
    // Если нет информации о городе, отображается поле ввода для его выбора
    formView.classList.replace('d-none', 'd-flex');
    sectionDelete.classList.add('d-none');
}

// При нажатии на кнопку "удалить" cookie area удаляется из localStorage, 
// при этом снова появляется форма ввода города
btnDelete.onclick = () => {
    localStorage.removeItem('area'); 
    area.value="";

    formView.classList.replace('d-none', 'd-block');
    sectionDelete.classList.add('d-none');
    cityInfo.classList.replace('d-flex','d-none');
};


const checkGroup = document.getElementsByName('check-group');

checkbox.value = localStorage.getItem('checkbox');

// Если данные checkbox уже добавлены в cookie,
// то отображаются выбранные пользователем ранее checkbox, 
// при этом все checkbox становятся не активными
if (checkbox.value) {
    let checkArr = [];
    checkArr = checkbox.value.split(" ");

    checkArr.forEach(element => {
        checkId = document.getElementById(element);
        if (checkId)
        {
            checkId.setAttribute('checked', true);
        }
    });

    let idName = 'status_';

    for(i=1; i <= 6; i++){
        document.getElementById(idName + i).disabled = true;
    } 
  
} 

// При первом нажатии пользователя на кнопку добавляются 
// данные о выбранных checbox в cookie
btnSave.onclick = () => {
    if (!checkbox.value) {
        let checked = '';
    for(var i=0; i < checkGroup.length; i++) {
        if (checkGroup[i].checked) {  
            checked += ' ' + checkGroup[i].id;
        } 
    }
    localStorage.setItem('checkbox', checked);
    } 
};
