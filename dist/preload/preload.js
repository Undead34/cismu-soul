"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const API = {};
electron_1.contextBridge.exposeInMainWorld("api", API);
//# sourceMappingURL=preload.js.map