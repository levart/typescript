var age = "mike";
var Utils;
(function (Utils) {
    var age;
    function getAge() {
        console.log(age);
    }
    Utils.getAge = getAge;
    function setAge(a) {
        age = a;
    }
    Utils.setAge = setAge;
})(Utils || (Utils = {}));
Utils.setAge(25);
Utils.getAge();
console.log(age);
//# sourceMappingURL=namespaces.js.map