import { app, dialog } from "electron";

import { testing, reboot, abort, setup, isFirstStart } from "./startup";
import { argumentsParser } from "../utils/parseArguments";
import { CismuError } from "../errors";
import IpcMain from "../ipcMain";
import Config from "../config";
import logger from "../logger";

/**
 * This is the starting point of the application, nothing should be done before calling this function.
 * You can do things like start modules but they must not make use of the I/O or the network, only start internal variables,
 * the only thing you can do is start the logger and this must be designed not to fail and be repairable in case of not having
 * access to the I/O.
 *
 * modules: An object with the modules to initialize where the module can already do what it needs to do,
 * the modules can be marked as optional to prevent the program from aborting.
 * @param modules
 */
function bootstrap({ config, ipcMain }: { config: Config; ipcMain: IpcMain }) {
  return new Promise(async (resolve, reject) => {
    try {
      await argumentsParser();

      if (isFirstStart()) {
        try {
          logger.log("Welcome! Cismu is being configured for the first use");
          await setup();

          await config.init();
          await ipcMain.init();

          await resolve(true);
        } catch (error) {
          await abort(error);
        }
      } else {
        try {
          await testing();

          await config.init();
          await ipcMain.init();

          resolve(true);
        } catch (error) {
          await app.whenReady();

          let detail = "An error occurred when starting the application, do you want to try a repair?";
          let message = "Unknown error at startup";
          let title = "Unknown Error";

          if (error instanceof CismuError) {
            title = error.name;
            message = error.message;
            detail = error.description;
          }

          const response = await dialog.showMessageBox(null, {
            type: "error",
            title: title,
            message: message,
            detail: detail,
            buttons: ["Close", "Try to Repair", "Continue"],
          });

          switch (response.response) {
            case 1:
              await reboot({ addArgs: ["--repair-restart"] });
              break;
            case 2:
              resolve(true);
              break;
            default:
              reject(error);
              break;
          }
        }
      }
    } catch (error) {
      reject(error);
    }
  });
}

export default bootstrap;
