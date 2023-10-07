type Details3= {
    name:string;
    age:number | string; // this is like OR  number or string
    salary:number |string;
    domain:string;
    getName?:()=>void; // this function is optional 
}


let employeeDetails3 : Details3={
    name:"amal",
    age:22,
    salary:100000,
    domain:"mern",
    getName(){
        console.log(this.name);
    } 

}

let detailsInterns3 : Details3={
    name:"amal",
    age:"22",
    salary:"100000", 
    domain:"mern" , 
}

let skills2 : (string|number|boolean)[]=["ds","oop","js","ts",90,10,12,true,false]