import { abort } from "../bootstrap/startup";
import { CismuOperatingSystemNotSupported } from "../errors";
import logger from "../logger";

const Windows = {
  properties: {
    version: { type: "string" },
    theme: { type: "string" },
    desktop_notifications: { type: "boolean" },
    keyboard_shortcuts: {
      elements: {
        properties: {
          accelerator: { type: "string" },
          action: { type: "string" },
        },
      },
    },
    hardware_acceleration: { type: "boolean" },
    language: { type: "string" },
    developer_mode: { type: "boolean" },
    bounds: {
      properties: {
        x: { type: "int32" },
        y: { type: "int32" },
        width: { type: "int32" },
        height: { type: "int32" },
      },
      additionalProperties: false,
    },
    startup: {
      properties: {
        auto_startup: { type: "boolean" },
        start_minimized: { type: "boolean" },
        minimize_in_tray: { type: "boolean" },
      },
      additionalProperties: false,
    },
  },
  additionalProperties: false,
};

export function getSchema() {
  switch (process.platform) {
    case "win32":
      return Windows;
    case "linux":
      return Windows;
    case "darwin":
      return Windows;
    default:
      logger.error("The current operating system does not support the config module");
      abort(new CismuOperatingSystemNotSupported());
      break;
  }
}
