import { paths } from "../constants";
import { v4 as uuid } from "uuid";
import logger from "../logger";
import path from "path";
import fs from "../fs";

export function cloneDeep<T>(value: T): T {
  try {
    if (fs.isPrimitive(value)) {
      return value;
    }

    if (Array.isArray(value)) {
      return value.map((item) => cloneDeep(item)) as unknown as T;
    }

    if (typeof value === "object") {
      const clonedObj = {} as T;
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          clonedObj[key] = cloneDeep(value[key]);
        }
      }

      return clonedObj;
    }
  } catch (error) {
    logger.error("cloneDeep: Unhandled value type");
    logger.error(error);
  }
}

export function getTempPath() {
  return path.join(paths.folders.rootCache, uuid());
}
