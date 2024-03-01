const secundBlock = document.querySelector('.secunds')
const cheti = document.querySelector('.gasoline-number')
const chetir = document.querySelector('.gasoline-numbers')
function startGame(){
    let a = document.querySelector('.form').value;
    if(a.length>0)
    {document.querySelector('.ch').innerHTML = a;
    document.getElementById('bg').style.display='none';
    document.getElementById('pbg').style.display='none';
    document.getElementById('game').style.display='block';
    chetir.innerHTML = 'Максимум - ' + Math.max.apply(null, chety);
    chetchik()
    timeStart()} else{
        alert('Введите имя пользователя')
    }

}
var chety =[0];
let interval;
let inter;
var sec = 60;
var chet = 0;
function timer(){
    sec--
    secundBlock.innerHTML = sec;
    if(sec <= 0){
        restartGame()
    }
}
function chetchik(){
    inter = setInterval(sh, 10)
}
function sh(){
    cheti.innerHTML = chet;
}
function timeStart(){
    interval = setInterval(timer, 1000);
}
var countcircle = 0
function createImageA() {
    var image = document.createElement('img');
    image.src = 'img/apple.png'; // Путь к вашей картинке
    image.className = 'image';

    var x = Math.random() * (window.innerWidth - 100);
    var y = Math.random() * (window.innerHeight - 100);
    if(x<200){
        x = x + 200
    }
    image.style.left = x + 'px';
    image.style.top = y + 'px';

    image.onclick = function() {
        chet += 10
        image.style.display = 'none';
        createImageA(); // Создаем новое изображение после клика
    };

    document.querySelector('.game').appendChild(image);
}

function createImageO() {
    var image = document.createElement('img');
    image.src = 'img/orange.png'; // Путь к вашей картинке
    image.className = 'image';

    var x = Math.random() * (window.innerWidth - 100);
    var y = Math.random() * (window.innerHeight - 100);
    if(x<200){
        x = x + 200
    }
    image.style.left = x + 'px';
    image.style.top = y + 'px';

    image.onclick = function() {
        image.style.display = 'none';
        chet += 15
        createImageO(); // Создаем новое изображение после клика
    };

    document.querySelector('.game').appendChild(image);
}
function createImageG() {
    var image = document.createElement('img');
    image.src = 'img/gruha.png'; // Путь к вашей картинке
    image.className = 'image';

    var x = Math.random() * (window.innerWidth - 100);
    var y = Math.random() * (window.innerHeight - 100);
    if(x<200){
        x = x + 200
    }
    image.style.left = x + 'px';
    image.style.top = y + 'px';

    image.onclick = function() {
        chet += 15
        image.style.display = 'none';
        createImageG(); // Создаем новое изображение после клика
    };

    document.querySelector('.game').appendChild(image);
}
function createImageL() {
    var image = document.createElement('img');
    image.src = 'img/limon.png'; // Путь к вашей картинке
    image.className = 'image';

    var x = Math.random() * (window.innerWidth - 100);
    var y = Math.random() * (window.innerHeight - 100);
    if(x<200){
        x = x + 200
    }
    image.style.left = x + 'px';
    image.style.top = y + 'px';

    image.onclick = function() {
        chet += 10
        image.style.display = 'none';
        createImageL(); // Создаем новое изображение после клика
    };

    document.querySelector('.game').appendChild(image);
}
function createImageS() {
    var image = document.createElement('img');
    image.src = 'img/sliva.png'; // Путь к вашей картинке
    image.className = 'image';

    var x = Math.random() * (window.innerWidth - 100);
    var y = Math.random() * (window.innerHeight - 100);
    if(x<200){
        x = x + 200
    }
    image.style.left = x + 'px';
    image.style.top = y + 'px';

    image.onclick = function() {
        chet += 5
        image.style.display = 'none';
        createImageS(); // Создаем новое изображение после клика
    };

    document.querySelector('.game').appendChild(image);
}
function createCircle() {
    var circle = document.createElement('div');
    circle.className = 'circle';
    
    // Генерируем случайные координаты для кружка
    var x = Math.random() * (window.innerWidth - 100);
    var y = Math.random() * (window.innerHeight - 100);
    if(x<200){
        x+=200
    }
    
    // Задаем случайные координаты для позиционирования кружка
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    
    // Генерируем случайный размер кружка от 20px до 50px
    var size = Math.random() * (50 - 20) + 20;
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';

    // Добавляем обработчик клика на кружке
    circle.onclick = function() {
        circle.style.display = 'none'; // Скрываем кружок при клике
        sec = 1
    }
    setTimeout(function() {
        circle.style.display = 'none'; // Показываем кружок через 10 секунд
        createCircle(); // Создаем новый кружок
    }, 10000);

    // Добавляем кружок на страницу
    document.querySelector('.game').appendChild(circle);
}
// Создаем изображения при загрузке страницы



function restartGame(){
    chety.push(chet);
    document.querySelector('.chetik').innerHTML = 'Ваш счет: ' + chet;
    document.getElementById('end').style.display = 'block';
    document.getElementById('pbg').style.display='none';
    document.getElementById('game').style.display='none';
    clearInterval(interval)
    clearInterval(inter)
}

function restart(){
    sec = 60
    chet = 0
    chetir.innerHTML = 'Максимум - ' + Math.max.apply(null, chety);
    document.getElementById('game').style.display='block';
    document.getElementById('end').style.display = 'none';
    chetchik()
    timeStart()
}

createImageA();
createImageO();
createImageL();
createImageG();
createImageS();
createCircle();