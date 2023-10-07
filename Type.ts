type Details2= {
    name:string;
    age:number;
    salary:number;
    domain:string;
    getName:()=>void;
}


let employeeDetails2 : Details2={
    name:"amal",
    age:22,
    salary:100000,
    domain:"mern",
    getName(){
        console.log(this.name);
    } 

}

let detailsInterns2 : Details2={
    name:"amal",
    age:22,
    salary:100000, 
    domain:"mern" ,
    getName(){
        console.log(this.name);
    }   
}