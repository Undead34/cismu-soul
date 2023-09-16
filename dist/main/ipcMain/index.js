"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
class IpcMain {
    constructor() {
        this.events = [];
    }
    init() {
        for (let x = 0; x < this.events.length; x++) {
            const event = this.events[x];
            if (event.handled) {
                const register = event.once ? electron_1.ipcMain.handleOnce : electron_1.ipcMain.handle;
                register(event.channel, event.action);
            }
            else {
                const register = event.once ? electron_1.ipcMain.once : electron_1.ipcMain.on;
                register(event.channel, event.action);
            }
            console.log(`Event ${event.name} was successfully registered`);
        }
    }
}
//# sourceMappingURL=index.js.map