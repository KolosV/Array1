
let studentsList = ['Колосенцева',  'Сиялов',  'Степанюк', 'Архипов', 'Петухова', 'Мартыненко']
var rand = Math.random()*studentsList.length | 0;
var rValue = studentsList[rand];
for (let i = 0; i < studentsList.length; i++) {
    console.log(studentsList[i]);
}
console.log(studentsList)
console.log(rValue )
console.log(studentsList.length)