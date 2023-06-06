
let firstName = "Evgen";
let lastName = "Kolesan";
let user = `${firstName} ${lastName}`;
console.log(user);

let x = 12;
let y = 6;
let p = x+y;
console.log(p);

Math.pow(6, 10);
Math.pow(10,6);
console.log(Math.pow(10, 6));

console.log(Math.floor(Math.random( ) * 50));

let namber=7;
namber>=0? console.log("negative value"):console.log("positive value");

// честно признаюсь слегка списывал проще даже когда вы домашку разобрали я от туда что то списывал\\
let text="very bad day";
if(text.length > 0)
{console.log(text[6]);
}
else{
    console.log("error");
}
let month = 13;
 switch ( month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12 :
        console.log("December") 
        break;  
  default:
    console.log("month not found!");
  
 }
//  я так понял если я просто в пароли поставлю пробел то все изменится на <this password is weak> но я зделал без пробела..
let password= "evgenKolesan";
 if(password.length > 7 && password.includes(" "))
 {
   console.log("this password is Storage");
 }
    else{
        console.log("this password is weak");
 }

 let a=62;
 let b=74;
 let suma=a*b;
 console.log(suma);

 let textOne = "Alena";
 let textTwo = "Danil";
 if (textOne.length === textTwo.length )
 {console.log("those items are strings and they equal")}
  {console.log("items are not compareble")};

