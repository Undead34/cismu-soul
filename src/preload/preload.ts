import { contextBridge, ipcRenderer } from "electron";

const API = {
  emit: (channel: string, ...args: any[]) => {
    ipcRenderer.send(channel, ...args);
  },

  on: (channel: string, callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => {
    ipcRenderer.on(channel, callback);
  },

  once: (channel: string, callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => {
    ipcRenderer.once(channel, callback);
  },
};

contextBridge.exposeInMainWorld("api", API);
