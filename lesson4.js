//string methods


//task 1
// let name = 'Mary ' ;
// let activity = 'drink tea' ;
// let bio = 'Our guest ' + name + activity + '.' ;
// console.log(bio.length);

//task 2

// let num = prompt("enter number ") ;
// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' ;
// console.log(str.charAt(num));


//task 3
// let str = prompt('enter string');
//  console.log('last char is ' + (str[str.length - 1]) + (str[str.length - 2]));
// console.log(str.charAt(str.length -1 )+ str.charAt(str.length-2)) ;


//task 4
// let str = 'abcde';
// let nstr = "";

// for (let i = str.length-1; i >= 0 ; i -- )
//   nstr += str[i];

// console.log(nstr);

//task 5
// let str = 'js';
// console.log(str.toUpperCase());

//task 6
// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' ;
// let str1 = prompt('enter string ');
// const res = str.includes(str1);
// console.log(res);

//task 7 

// const elem = '-';
// let str = '1-2-3-4-5';

// while (str.includes(elem)) {
//   str = str.replace(elem, '.');
// }
// console.log(str);

//task 8
// let str = '1-2-3-4-5';
// let nstr = str.replaceAll('-' , '.');
// console.log(nstr);

//task 9

// const str = 'sdfwe' ;
// console.log(str.substring(4,2));
// //fw

//task 10
//const str = "I'm learning javascript!";
// console.log(str.slice(4, 12))
// console.log(str.slice(13 , 23))

// console.log(str.substring(4, 12)); 
// console.log(str.substring(13, 23));

// console.log(str.substr(4, 8));
// console.log(str.substr(13, 10));

//task 11
// const str = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/'

// console.log(str.indexOf('http://'));

//task 12
// const str = 'https://www.notion.html';
// console.log(str.indexOf('.html' , 17));

//task 13
// const str = 'ab cd cd cd ef ';
// console.log(str.lastIndexOf('cd')); //9
// console.log(str.lastIndexOf('cd' , 8)); //6

//task 14
// const str = 'abcde';
// console.log(str.startsWith('abc'));//true
// console.log(str.startsWith('xxx'));//false
// console.log(str.startsWith('bc' , 1));//true

//task 15
// const str = 'abcde';
// console.log(str.endsWith('cde'));//true
// console.log(str.endsWith('xxx'));// false
// console.log(str.endsWith('bc' , 3));// true

// task 16 
// let str = 'ab-cd-ef';
// console.log(str.split('-'));// ['ab', 'cd', 'ef']
// console.log(str.split('-' , 2));// ['ab-cd]
// console.log(str.split(' '));//['ab-cd-ef']
// console.log(str.split(' ', 3)); //['ab-cd-ef']

// let str2 = '12345';
// console.log(str2.split(' '));//['12345']







