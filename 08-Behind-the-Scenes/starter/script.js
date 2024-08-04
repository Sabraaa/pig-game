'use strict';

const sabrasphere ={
    firstName: "Sabra",
    year: 2000,
    calcAge: function () {
        console.log(this);
        console.log(2040-this.year)
    console.log("first")
    },
    greet:()=>{
        console.log(`hey ${this.firstName}`)
    }
}
sabrasphere.greet()
sabrasphere.calcAge()
console.log(this.firstName)