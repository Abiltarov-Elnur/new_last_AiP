//Задание 129

let lang = 'eng';

switch (lang){
    case 'ru':
        console.log('рус');
    break;
    case 'eng':
        console.log('анг');
    break;
    case 'de':   
        console.log('нем');
    break;
    default:
        console.log('язык не поддерживается');
    break;
}

//Задание 131

let num = -1;
let res = num >= 0 ? '1':2;

console.log(res);

//Задание 132

let a = 2 * (3 - 1);
let b = 6 - 2;

console.log(a!=b)

//Задание 133

let answer = confirm('Тебе есть 18?');

if(answer == true){
    alert('Ну оооочень взрослый текст');

}else{
    alert('Ты ахирел, малый, иди домашку делай')
}

//Задание 134

let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);
