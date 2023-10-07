interface Details {
    name:string;
    age:number;
    salary:number;
    domain:string;
    getName:()=>void;
}


let employeeDetails : Details={
    name:"jipson",
    age:22,
    salary:100000,
    domain:"mern",
    getName(){
        console.log(this.name);
    } 

}

let detailsInterns : Details={
    name:"jipson",
    age:22,
    salary:100000,
    domain:"mern" ,
    getName(){
        console.log(this.name);
    }   
}