// let myPerson = {
//     name: "Yura",
//     lastname: "Palasiyk",
//     mail: "palasiyk@gmail.com",
// };
// console.log(myPerson.mail);
//
//
// let person = {
//     firstName: "Andrey",
//     lastName: "Ivanov",
//     age: 20,
//     isStudent: true,
//     сontactInfo: {
//         "phone": "098-556-33-41",
//         "email": "AndreyIvanov@gmail.com"
//     },
//     disciplines: [
//         "Programming",
//         "Machine engineering",
//         "English"
//     ]
// };
// console.log(person.сontactInfo);
// let jsonPeron = JSON.stringify(person);

// function showName(){
//     console.log('Vasja')
// }
// setTimeout(showName, 0);
// console.log("Kolja");
//
// if(2>1) {
//     function showMasage() {
//         console.log("1");
//     }
// }
// showMasage();

const userInfo = {
    name:"Vasja",
        age: 30,
    };
userInfo.name = "Lena";
delete userInfo.name;

    console.log(userInfo);