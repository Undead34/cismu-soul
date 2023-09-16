import { ipcMain } from "electron";
import fs from "fs/promises";

class BasePlugin {
  ui: boolean;

  init() {}
}

class Plugins {
  private plugins: Map<string, BasePlugin>;

  constructor() {
    this.plugins = new Map();
  }

  async load() {
    // const directory_list = await fs.readdir(pluginPath, { encoding: "utf-8" });

    const plugin_test = {
      name: "cismu",
      productName: "Cismu",
      version: "1.0.0",
      description: "My Electron application description",
      main: "C:\\Users\\Undead34\\Documents\\Undead34\\cismu-plugin\\index.js",
      author: "Undead34",
    };

    ipcMain.on("plugins", (event) => {
      event.sender.send("plugins", plugin_test.main);
    });
  }
}

export default Plugins;
