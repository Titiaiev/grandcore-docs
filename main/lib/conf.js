// есть ли аргумент проверяем наличие файла по нему и делаем динамический импорт, если файла нет, выбрасываем ошибку
// если нет аргумента, проверяем есть ли стандартный файл конфига и делайем динамический импорт, если файла нет, выбрасываем ошибку
import fs from "fs";
import process from "process";
import path from 'path';

// если нужно поменять путь к дефолтному конфигу, то это
// нужно сделать здесь
const DEFAULT_CONFIG = 'example/doc-gen.conf.js';

const defaultConfigPath = path.resolve(DEFAULT_CONFIG);
const customConfigPath = process.argv[2] ? path.resolve(process.argv[2]) : null;

let modulePath;
// Проверяем есть ли аргумент и есть ли файл из аргумента
if (customConfigPath && fs.existsSync(customConfigPath)) {
    modulePath = customConfigPath;
} else if (fs.existsSync(defaultConfigPath)) {
  // проверяем есть ли дефолтный конфиг
  modulePath = defaultConfigPath;
} else {
  // если нет - выбрасываем ошибку
  throw new Error("Не найден файл конфигурации");
}

const conf = await import(modulePath);
export default conf;
