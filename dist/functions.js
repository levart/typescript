function getName() {
    return "John";
}
function getAge() {
    return 20;
}
// let numCount: (num1: number, num2: number) => number
// function count(num1: number, num2: number): number {
//     return num1 + num2;
// }
// numCount = count
var numCount = function (num1, num2) { return num1 + num2; };
function getMyAge(age, name) {
    if (name === void 0) { name = "John"; }
    return name + " " + age;
}
getMyAge(15);
function getConsoleMessage() {
    console.log("some");
}
//# sourceMappingURL=functions.js.map