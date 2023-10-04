import { app } from "electron";
import path from "path";

// Folders
const root = app.getPath("userData");
const logs = app.getPath("logs");
const rootCache = path.join(root, "Cache");
const userData = path.join(app.getPath("userData"), "UserData");
const cache = path.join(userData, "Cache");
const media = path.join(userData, "Media");
const profiles = path.join(userData, "Profiles");
const databases = path.join(profiles, "%USERNAME%", "Databases");

// Files
const globalSettings = path.join(root, "settings.global");
const globalDatabase = path.join(root, "cismu.db");
const settings = path.join(profiles, "%USERNAME%", "settings");
const database = path.join(databases, "cismu.db");
const firstStart = path.join(root, ".firststart");

export const paths = {
  folders: {
    root,
    logs,
    rootCache,
    userData,
    cache,
    media,
    profiles,
    databases,
  },
  files: {
    globalSettings,
    globalDatabase,
    settings,
    database,
    firstStart
  }
}

export default {
  paths
}

// ./ /1/1a/1a47929b6056d34d25a95eeb2012395ceed66af6f40cc37c898a08482d6325d2
// 1a47929b6056d34d25a95eeb2012395ceed66af6f40cc37c898a08482d6325d2
