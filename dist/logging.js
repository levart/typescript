"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.Logging = void 0;
function Logging(constFn) {
    constFn.prototype.writeLog = function (message) {
        console.log('%c   ' + new Date() + ': ' + message, 'background: #222; color: #bada55');
    };
    constFn.prototype.version = '1.0';
    constFn.prototype.greeteng = 'Hello';
}
exports.Logging = Logging;
function Log(isActive) {
    return isActive ? Logging : null;
}
exports.Log = Log;
//# sourceMappingURL=logging.js.map