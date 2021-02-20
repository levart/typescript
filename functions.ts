function getName(): string {
    return "John"
}


function getAge(): number {
    return 20;
}

// let numCount: (num1: number, num2: number) => number

// function count(num1: number, num2: number): number {
//     return num1 + num2;
// }

// numCount = count

let numCount = (num1: number, num2: number): number => num1 + num2;

function getMyAge(age: number, name: string =  "John"): string {
    return `${name} ${age}`
}

getMyAge(15)

function getConsoleMessage(): void{
    console.log("some")
}