import { ipcMain, IpcMainEvent } from "electron";

interface IpcMainEventObject {
  name: string;
  channel: string;
  handled: boolean;
  once: boolean;
  action: (event: IpcMainEvent, ...argv: any[]) => any;
}

class IpcMain {
  events: IpcMainEventObject[];
  constructor() {
    this.events = [];
  }

  init() {
    for (let x = 0; x < this.events.length; x++) {
      const event = this.events[x];

      if (event.handled) {
        const register = event.once ? ipcMain.handleOnce : ipcMain.handle;
        register(event.channel, event.action);
      } else {
        const register = event.once ? ipcMain.once : ipcMain.on;
        register(event.channel, event.action);
      }

      console.log(`Event ${event.name} was successfully registered`);
    }
  }
}
