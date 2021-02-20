import { ILog, Log, Logging } from "./logging";

@Log(true)
class User1  implements ILog{
    age: number;
    isActive: boolean;

    constructor(private name: string, age?: number){
        this.setAge(age);
        this.writeLog('Class user')
    }

    writeLog: (message: string) => void;
    version: string;
    greeteng: string;

    getName(): string{
        return this.name;
    }

    private setAge(age: number): void{
        this.age = age
    }

    getAge(): number{
        return this.age
    }

}

const user = new User1("John", 15);


console.log(user.getName());
console.log(user.getAge());