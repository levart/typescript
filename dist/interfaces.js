// // interface ILength {
// //     length: number;
// // }
// // function getLength(value: ILength): any {
// //     return value.length
// // }
// // console.log(getLength([1,2,3,4,5]))
// // const box = {
// //     name: 'Box',
// //     length: 25
// // }
// // console.log(getLength(box))
// // interface IUser {
// //     name: string;
// //     age?: number;
// //     logInfo(info: string): void;
// // }
// // const user: IUser = {
// //     name: 'John',
// //     age: 25,
// //     logInfo(info: string): void{
// //         console.log(info);
// //     }
// // }
// interface IUser extends IGetYear {
//     name: string;
//     age?: number;
//     logInfo(info: string): void;
// }
// interface IGetYear {
//     getYear(): number;
// }
// class User implements IUser {
//     name: string = 'user';
//     age: number;
//     gender: string;
//     logInfo(info: string): void{
//         console.log(info)
//     }
//     getAge(): number{
//         return this.age
//     }
//     getYear(): number {
//         return this.age;
//     }
// }
//# sourceMappingURL=interfaces.js.map