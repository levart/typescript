
const age = "mike";

namespace Utils {
    let age

    export function getAge(){
        console.log(age);
    }

    export function setAge(a){
        age = a
    }

}

Utils.setAge(25)
Utils.getAge()
console.log(age)