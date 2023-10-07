type Details4= {
    name:string;
    age:number | string; // this is like OR  number or string
    salary?:number |string;
    domain?:string;
    getName?:()=>void; // this function is optional 
}


let employeeDetails4 : Details3={
    name:"amal",
    age:22,
    salary:100000,
    domain:"mern",

}

function userNameFunc(empDetail:Details4){
    return empDetail.name
}
console.log(userNameFunc(employeeDetails4));


// returns  type string
function userAgeFunc({name,age}:Details4):string {
    return name
} 
let naam = userAgeFunc({name:"Amal", age:90});
console.log(naam.toLowerCase());



function userAgeFunc2({name,age}:{name:string;age:number}){
    return name
} 
console.log(userAgeFunc2({name:"Amal suresh", age:100}));


// nothing to return so type void
function userAgeFunc3({name,age}:Details4):void {
  console.log(name);
} 
 userAgeFunc3({name:"Amal", age:90});

