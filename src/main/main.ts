import { app, BrowserWindow } from "electron";
import path from "path";

// polyfills
import "./polyfills/crypto";

import { CismuError, CismuStartupError } from "./errors";
import bootstrap from "./bootstrap";
import IpcMain from "./ipcMain";
import Config from "./config";
import logger from "./logger";

const isDevelopment = process.env.NODE_ENV === "development";

if (isDevelopment) {
  process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

/**
 * Creates a new browser window and loads the index.html of the app.
 *
 * @return {void}
 */
const createWindow = () => {
  config.validate();
  const { bounds } = config.config;

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    minWidth: 1024,
    minHeight: 768,
    width: bounds.width,
    height: bounds.height,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      autoplayPolicy: "no-user-gesture-required",
      webSecurity: !isDevelopment,
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  mainWindow.webContents.openDevTools();
};

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Instance the internal modules, the objective is only create a reference to the object, not to do anything in the module.
const config = new Config(); // Configuration module, manages all configurations.
const ipcMain = new IpcMain(); // This module manages the events to communicate the renderer and main process

bootstrap({ config, ipcMain })
  .then(async () => {
    logger.log("Application started successfully, all modules were loaded successfully");
    if (app.isReady()) createWindow();
    else app.once("ready", createWindow);
  })
  .catch((error) => {
    logger.error("An error occurred at application startup");

    if (error instanceof CismuError) {
      logger.crit(error);
    } else {
      logger.crit(new CismuStartupError(error));
    }

    app.exit(1);
  });
