export function Logging(constFn: Function) {
    constFn.prototype.writeLog = function(message: string) {
        console.log('%c   ' + new Date() + ': '+message, 'background: #222; color: #bada55');
    }

    constFn.prototype.version = '1.0'
    constFn.prototype.greeteng = 'Hello'
}

export function Log(isActive: boolean): any{
    return isActive ? Logging : null
}

export interface ILog {
    writeLog: (message: string) => void;
    version: string;
    greeteng: string;
}