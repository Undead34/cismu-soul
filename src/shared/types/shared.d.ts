import { Rectangle } from "electron";

export interface IConfig {
  version: string;
  theme: "light" | "dark" | "auto" | "custom";
  desktop_notifications: boolean;
  keyboard_shortcuts: IKeyboardShortcuts[];
  hardware_acceleration: boolean;
  bounds: Rectangle;
  language: string;
  developer_mode: boolean;
  startup: StartupConfig;
}
