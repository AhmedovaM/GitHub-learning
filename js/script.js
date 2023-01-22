"use strict";
// 8-dars. Foydalanuvchi bilan oddiy muloqot

//alert ('Hello JavaScript');

//const place = confirm("Are you here")
//console.log("place");

//const currentPlace = prompt("Where are you?", "Urgench", "t");
//console.log( typeof currentPlace);

//const age = prompt("How old are you?", "23");
//console.log(age + 10); // har doim string(MATN) ma'lumot qabul qilgani uchun 23+10=33 mas 2310 bb qoladi.
//number qiymat qabul qilish uchun + dan foydalaniladi: +prompt 
//const age = +prompt("How old are you?", "23");
//console.log(typeof age + 10);

//const favouriteColor = [];
//favouriteColor[0] = "red";
//console.log(favouriteColor); endi buni prompt da yozamiz:
//const favouriteColor = [];
//favouriteColor[0] = prompt("What's your favourite color #1", "");
//favouriteColor[1] = prompt("What's your favourite color #2", "");
//favouriteColor[2] = prompt("What's your favourite color #3", "");
//console.log(favouriteColor);  ------ bu bir nechta ma'lumotlarni bittagina o'zgaruvchiga tiqish



// 13- dadrs. Shartli operatorlar 

//const age = +prompt("How old are you?", "");
//if (age > 25) {
//console.log("Horror films");
//} else if (age > 18 && age < 25) {
// console.log("Motivationals fims");
//} else { 
//console.log("cartoon");
//}

// tennnory operator
//age > 25 ? console.log("Horror films") : console.log("Motivationals fims");
 
// switch case

//const color = "red";
//switch ("color") {
//  case "red":
//    console.log("Stop");
///    break;
//  case "green":
//    console.log("Go");
//    break;
//  case "yellow":
//    console.log("Slowly");
//    break;
//  default: 
//  console.log("Traffik jam");
//  break;
//}



// 9-dars Interpolatsiya
//const channel = prompt("What's your favorite youtuber");
//console.log(`https://youtube.com/${channel}`);
//const user = "Ahmedova";
//const job = "Web developer";
//console.log(`User name is ${user}, she is ${job}`);




//10-dars Operatorlar 
//console.log(6 + +"9"); stribg ma'lumotni number ma'lumotga o'girib olishimiz uchun oldiga + qo'yib olamiz.

//let incr = 10;
//let decr = 10;
//console.log(incr++);
//console.log(decr--);
//console.log(incr++);
//console.log(decr--);
//console.log(incr);
//console.log(decr);

//let incr = 10;
//let decr = 10;
//console.log(++incr);
//console.log(--decr);


//protsent % bo'lish(qoldiq qismni aytadi)
//console.log(10 % 2);

//tenlashtirish = emas == 
//console.log(5 * 5 == 25 ); --- 5 karra 5 25 mi?
// == va === ning farqi ---- == bu faqat qiymatlarni solishtiradi, === esa qiymat va ma'lumot turini ham solishtiradi. 
//console.log(5 * 5 == "25");
//console.log(5 * 5 === "25");

// && --- va,  || --- yoki
