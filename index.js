// 1.  Знайдіть суму всіх цифр від 1 до 100.


const LastNumber = 100;
let i = 1;
let n = 0;

while(i <= LastNumber) {
    n = n + i;
    console.log(n);
    i++;
}
console.log(n);


//2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

let arr = [1,2,3,4,5];
for(let i=0; i<arr.length;i++){
    alert(arr[i])
}

// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення

let q;
let newArray=[-1, 22, 3, 44, 5];
for(let i=0;i<newArray.length;i++){
    q=Math.max.apply(Math, newArray)
    console.log(q)
}

// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера.

let userNumbers = [];
let t;
for(let i=0; i<8;i++){
    t = +prompt('Введіть число:')
    userNumbers.push([t])

}
console.log(userNumbers)

/*
if(userNumbers[t]===0){
    alert('Ось скільки нулів знайдено:')
} else if(userNumbers[t]<0){
    alert('Ось скільки від\'мних чисел знайдено:')
}else if(userNumbers[t]>0){
    alert('Ось скільки додатніх чисел знайдено:')
    }
*/

switch (userNumbers) {
    case (t===0):
        alert('Ось скільки нулів знайдено:');
        break;
    case (t>0):
        alert('Ось скільки додатніх чисел знайдено:')
        break;
    case(t<0):
        alert('Ось скільки від\'мних чисел знайдено:')
        break;
    default:"Нічого не знайдено"
}


// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

const TableNum=8;
let m;

for(let i=1;i<=9;i++){
    m=i*TableNum
    console.log(`${TableNum} x ${i} = ${m}`)
}

// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

let newArr = [2,5,9,15,0,4];
for(let i=0;i<newArr.length;i++){
    if (newArr[i]>3 && newArr[i]<10){
        alert(`Цифри, які більше трьох і менше десяти: ${newArr[i]}`)
    }
}

// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?

let userNum1 = +prompt('Введіть перше число:')
let userNum2 = +prompt('Введіть друге число:')
let userSymbol = prompt('Введіть знак бажаної дії:')

const PlusSymbol = userNum1+userNum2
const MinusSymbol = userNum1-userNum2
const MultipleSymbol = userNum1*userNum2
const DivisionSymbol = userNum1/userNum2
let p;

do {
    if (userSymbol === '+') {
        alert(PlusSymbol)
    } else if (userSymbol === '-') {
        alert(MinusSymbol)
    } else if (userSymbol === '*') {
        alert(MultipleSymbol)
    } else if (userSymbol === '/') {
        alert(DivisionSymbol)
    }else{
        continue
    }
    p=confirm('Бажаєте повторити?')
} while (p!==false)




/*
do{
switch (userSymbol) {
    case '+':
        alert(PlusSymbol);
        break;
    case '-':
        alert(MinusSymbol);
        break;
    case '*':
        alert(MultipleSymbol);
        break;
    case '/':
        alert(DivisionSymbol);
        break;
    default:
        'Немає жодних значень';
}n=confirm('Бажаєте повторити?')
    if(n==true)continue;
}
while (n!==false)
*/




//З класної роботи:

//!1. Виводити число поки юзер не натисне окей

/*
let x;
let n;

do{
    x = +prompt('Введіть число:')
    n = confirm(`Ви хотіли це число? ${x}`)
} while(n!==true)
*/

//ФІБОНАЧІ
/*
let x=0;
const Maxloop = 150;
let y=1;
let f;
for (let i =0; i<Maxloop; i++){
    f=x+y;
    x=y;
    y=f;
    if(f>100){
        break
    } else {
        console.log(f)
    }
}*/
