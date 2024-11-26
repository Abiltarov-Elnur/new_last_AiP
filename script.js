//Задание 140

let numm = 10;
if((numm%2)===0){
	console.log('Ахрененно');
}else{
	console.log('дувак');
}



//Задание 141

let num1 = '123033'; // берем в кавычки, чтобы обращаться к цифрам 

let sum1 = Number(num1[0]) + Number(num1[1]) + 
	Number(num1[2]); 
let sum2 = Number(num1[3]) + Number(num1[4]) + 
	Number(num1[5]); 

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}
//Задание 142

let str = '1234';

if(Number(str[0]) == 1){
    console.log('++++');
}

//Задание 144

let mass = ['a', 'b', 'c', 'd', 'e'];

for(let el of mass){
	console.log(el);
}
//Задание 145

let obj = {x: 1, y: 2, z: 3};

for (let kk in obj){
	console.log(kk); //вывели название ключей
}
for (let kk in obj){
	console.log(obj[kk]);
}