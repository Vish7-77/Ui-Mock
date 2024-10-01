// let a = 10;
// const A = 100;

// console.log(a+A)

// console.log(1+2+3)

// const name  = "student 1" + "1"

// console.log(name + "1")

// const a  = 100;
// const studentName  = "STUDENT";
// console.log(studentName.includes("DE"))

// two Type - primitive - non -prem [ref]

// let a = 100;
// let studentName = "Std1";
// let isValid = true;

// a = 200;
// studentName = "std2";
// isValid = false;

// console.log(studentName == "std2");

// const marks =[] // 90909098292
// const marks1 =[] // 387e833
// const data ={
//     name:"std1",
//     class:"3rd"
// }

// console.log(marks == marks1)

// const data ={

// }

// console.log(data?.products) // optional chaining
//https://dummyjson.com/users

const API = "https://dummyjson.com/products";
async function fetchData() {
  const response = await fetch(API);
  const data = await response.json();
  console.log(data?.products);
  for (let i = 0; i < data?.products?.length; i++) {
    const div = document.createElement("div");
    div.innerText = data?.products[i].title;
    document.getElementById("main-cont").append(div);
  }
}
fetchData();
