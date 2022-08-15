// # 1 //

let coffeeCups = prompt('Enter the number of cups of coffee');
let result = Math.floor(coffeeCups / 6);

console.log('Client will receive ' + coffeeCups +
    ' cups of coffee, and ' + result
    + ' bonus cups of coffee');

// # 2 //

let chicken = prompt('Enter your number of Chickens');
let cow = prompt('Enter your number of Cows');
let pig = prompt('Enter your number of Pigs');

let legs = chicken * 2 + cow * 4 + pig * 4;

console.log('All animals have ' + legs + ' legs.');
alert('All animals have ' + legs + ' legs.');

// # 3 //

let minutes = prompt('Enter value of minutes');

if (minutes >= 1 & minutes < 15) {
    console.log('On the time of ' + minutes + ' min arrow on I quarter');
} else if (minutes >= 15 & minutes < 30) {
    console.log('On the time of ' + minutes + ' min arrow on II quarter');
} else if (minutes >= 30 & minutes < 45) {
    console.log('On the time of ' + minutes + ' min arrow on III quarter');
} else if (minutes >= 45 & minutes < 60) {
    console.log('On the time of ' + minutes + ' min arrow on IV quarter');
} else {
    console.log('Error!!!');
}

// # 4 //

// v1 //
let stars1 = prompt('Enter count of stars')
let i = 0;
let str = '';
while (i < stars1) {
    str += '*';
    i++;
    console.log(str)
}


// v2 //
let stars2 = prompt('Enter count of stars')
let str ='';
for (let i=0; i<stars2; i++) {
    str+= '*';
    console.log(str);
}









