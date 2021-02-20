// function getter<T>(num1: T, num2: T ){
//     return +num1 + +num2
// }
// let str = 'str'
// console.log(getter<number>(15,25))
// console.log(getter<string>('250','540'))
// function genericgetter<T>(data: T): T{
//     return data;
// }
// console.log(genericgetter('john').length)
// console.log(genericgetter(100.5465465).toFixed(2))
// console.log(genericgetter([1,2,3]).length)
// const str: string = 'strs'
// const newGeneric: <T>(data:T) => T = genericgetter;
// console.log(newGeneric('john').length)
// console.log(newGeneric(100.5465465).toFixed(2))
// console.log(newGeneric([1,2,3]).length)
// class Count<G, T> {
//     constructor( private num1: G, private num2: T ){}
//     getCount(): any {
//         // return this.num1 + this.num2;
//         if(typeof this.num1 === 'number' && typeof this.num2 === 'number'){
//             return this.num1 + this.num2;
//         }
//     }
// }
// type TCount = number[]
// const count = new Count<number, TCount>(15, [1, 2])
// console.log(count.getCount())
var Count = /** @class */ (function () {
    function Count(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Count.prototype.getCount = function () {
        // return this.num1 + this.num2;
        if (typeof this.num1 === 'number' && typeof this.num2 === 'number') {
            return this.num1 + this.num2;
        }
    };
    return Count;
}());
var count = new Count(15, 25);
console.log(count.getCount());
//# sourceMappingURL=generic.js.map