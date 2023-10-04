import { abort, reboot, repair } from "../bootstrap/startup";
import { CismuRepairError } from "../errors";

export async function argumentsParser() {
  if (process.argv.includes("--repair-restart")) {
    const repaired = await repair();

    if (repaired) {
      await reboot({ removeArgs: ["--repair-restart"] });
    } else {
      await abort(new CismuRepairError());
    }
  }
}
