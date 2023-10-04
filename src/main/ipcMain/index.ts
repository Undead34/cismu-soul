import { ipcMain, IpcMainEvent } from "electron";
import logger from "../logger";
import colors from "colors";

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
    logger.log("Instantiating IpcMain module");

    this.events = [
      {
        name: "test",
        channel: "test",
        handled: false,
        once: false,
        action: (event: IpcMainEvent, ...argv: any[]) => {
          console.log("test");
        },
      },
    ];
  }

  async init() {
    logger.log("Registering Events...");

    for (let x = 0; x < this.events.length; x++) {
      const initTime = new Date().getTime();
      const event = this.events[x];

      if (event.handled) {
        if (event.once) {
          ipcMain.handleOnce(event.channel, event.action);
        } else {
          ipcMain.handle(event.channel, event.action);
        }
      } else {
        if (event.once) {
          ipcMain.once(event.channel, event.action);
        } else {
          ipcMain.on(event.channel, event.action);
        }
      }

      const endTime = (new Date().getTime() - initTime) / 1000;

      logger.log(`${colors.blue(event.name)} successfully registered ${colors.grey(`${endTime}ms`)}`);
    }

    logger.log("Initialization of the IpcMain module has been successfully completed");
  }
}

export default IpcMain;
