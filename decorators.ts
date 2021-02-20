import { ILog, Log, Logging } from "./logging";

@Log(true)
class Users implements ILog {
    version: string;
    greeteng: string

    constructor(public name: string, public age: number){
        this.writeLog('Decorator user')
    }
    writeLog: (message: string) => void;
    
}

const user = new Users('John',25);

console.log(user.version)
console.log(user.greeteng)