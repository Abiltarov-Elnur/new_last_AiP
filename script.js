//Задание 121

let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}

//Задание 123

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || test2 && test3) { 
	console.log('+++');
} else {
	console.log('---');
}

//Задание 124

let test4 = 10;
if(test4 == 10){
    console.log('yes');
}

//Задание 125

if (test > 0) console.log('+++');


//Задание 127

let day = 34;

if(day >= 0 && day <= 10){
    console.log('Первая декада');
}else if(day >= 11 && day <= 20){
    console.log('Вторая декада');
}else if(day >= 21 && day <= 31){
    console.log('Третья декада');
}else{
    console.log('Ты мне втрираешь какую-то дичь')
}

//Задание 128

let num = 8;

if(num >=10){
    
    if(num <= 99){
        num = (num%10) + ((num/10)-((num%10)/10));
        console.log(num)
    }else{
        console.log('Дичь')
    }
}else{
    console.log('Дичь')
}

//Задание 109



//Задание 109



//Задание 109



//Задание 109



