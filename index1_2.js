const textElement = document.querySelector(".text");
const textDB = {
    main: "<span>Привет, меня зовут Антон Цяцька!</span><br><br>",
    main2: "<span>Ищу работу на позицию Trainee-Junior Javascript Developer",
    about: "<span>Обо мне<br><br><div style= \"text-align: justify\"><p>Закончил Харьковский государственный медицинский университет, 1 медицинский факультет в 2007 году, в данный момент работаю врачом УЗИ. Со школьных времен хотел стать программистом, в школе делал простенькие сайты на html, css и php. Но жизнь так сложилась, что дальше пошел учиться на врача. В медицине достиг немалого: стал врачом-хирургом и врачом УЗИ первой категории, приобрел большой опыт в консервативном и оперативном лечении пациентов, помог множеству пациентов в решении проблем со здоровьем; за годы работы провел УЗИ большому количеству пациентов, многим из них вовремя выявил патологию, которую необходимо было лечить в срочном порядке, за что они мне очень благодарны.</p><p> Но интерес к программированию не покидал меня все эти годы и я все-таки решил уйти из медицины и заняться делом, о которым мечтал со школьных времен. Сейчас самостоятельно занимаюсь по книгам и видеоурокам в интернете по html, css, javascript, react. Есть желание, способности и мотивация двигаться дальше в этом направлении! Быстро обучаюсь, целеустремленный, ответственный, порядочный!</p></div></span>",
    // resume: "<span>Резюмэ<br><br></span>",
    myProjects: "<span><a class=\"a_proj\"href=\"wood/index.html\">Деревянные изделия для дома</a></span>",
    contacts: "<span>Контакты для связи:<br>email: tosya@ua.fm<br>tel. 0506735712</span>",
}

setTimeout(printText, 1000, textDB.main);
setTimeout(printText, 2500, textDB.main+textDB.main2);

// document.querySelector("#aMain").addEventListener("click", function() {printText(textDB.main)});
// document.querySelector("#aAbout").addEventListener("click", function() {printText(textDB.about)});
// document.querySelector("#aAbout").addEventListener("click", function() {printText(textDB.about)});
// document.querySelector("#aResume").addEventListener("click", function() {printText(textDB.resume)});
// document.querySelector("#aMyProjects").addEventListener("click", function() {printText(textDB.myProjects)});
// document.querySelector("#aContacts").addEventListener("click", function() {printText(textDB.contacts)});

const aArray = document.querySelectorAll(".a_nav");
aArray.forEach( (item, i) => {
    aArray[i].addEventListener("click", function() {
        const a = aArray[i].id.substr(1);
        printText(textDB[a]);
        })
    });

function printText(text) {
    textElement.innerHTML = text;
    if (text==textDB.main) {
        setTimeout(printText, 1500, textDB.main+textDB.main2);
    }
}