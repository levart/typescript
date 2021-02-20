// enum AnimalType {
//     Dog = 'DOG',
//     Cat = 'CAT',
//     Girrafe = 'GIRRAFE'
// }
// class Animal {
//     protected voice: string;
//     private animalType: AnimalType
//     constructor(animalType: AnimalType ){
//         this.animalType = animalType;
//     }
//     async getAnimalType(): Promise<AnimalType> {
//         return await this.animalType;
//     }
//     getVoice(): string {
//         return this.voice;
//     }
// }
// // const animal = new Animal(AnimalType.Dog);
// class Dog extends Animal {
//     constructor(voice: string){
//         super(AnimalType.Dog)
//         super.voice = voice
//     }
//     setVoice(voice: string){
//         this.voice = voice
//     }
// }
// class Cat extends Animal {
//     constructor(){
//         super(AnimalType.Cat)
//     }
//     setVoice(voice: string){
//         this.voice = voice
//     }
// }
// const dog = new Dog("wuw");
// // dog.setVoice("wuw");
// console.log(dog.getVoice());
// // console.log(dog.getAnimalType());
// dog.getAnimalType()
// .then( item => console.log(item))
// // const cat = new Cat();
// // cat.setVoice("Miuw");
// // console.log(cat.getVoice());
// // // console.log(cat.getAnimalType());
//# sourceMappingURL=extentClass.js.map