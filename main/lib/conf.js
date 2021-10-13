// есть ли аргумент проверяем наличие файла по нему и делаем динамический импорт, если файла нет, выбрасываем ошибку

// если нет аргумента, проверяем есть ли стандартный файл конфига и делайем динамический импорт, если файла нет, выбрасываем ошибку

import fs from "fs";
import process from "process";
let modulePath;



try{
// Проверяем есть ли аргумент
if (process.argv[2]) {
  // Проверяем есть ли файл из аргумента
  console.log(process.argv[2])
  if (fs.existsSync(process.argv[2])) {
    // если есть, добавляем в переменную
    modulePath = process.argv[2];
  }
  // если нет - выбрасываем ошибку
  else if (fs.existsSync('../doc-gen.conf.js')) {
    modulePath = '../doc-gen.conf.js'
  }
} else {
  console.log(fs.existsSync('conf.js'));
  // throw "Не найден файл конфигурации";
}
}

catch {
  //  throw "Неизвестная ошибка";
}



console.log(modulePath)
// const conf = await import(modulePath);

// export default conf;



// let modulePath
// if (process.argv[2]) modulePath = process.argv[2];
// else if (fs.existsSync("../../example/doc-gen.conf.js")) modulePath = "../../example/doc-gen.conf.js"

// // console.log(modulePath);
// let conf = await import(modulePath);
// export default conf;




