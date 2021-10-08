import fs from "fs";
import process from "process";

if (process.argv[2] == true) {
  let modulePath = process.argv[2];
} else if (fs.existsSync("../../../../doc-gen.conf.js")) {
  let modulePath = "../../../../doc-gen.conf.js";
} else {
  throw new UserException("Не найден файл конфигурации");
}

const conf = await import(modulePath);

export default conf;
