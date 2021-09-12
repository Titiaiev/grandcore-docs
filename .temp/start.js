// Подключаем утилиту менеджера потока


// Подключаем сценарий генерации 
import onlyPageScript from "./scripts/onlyPageScript"
import Manager from "./utils/Manager/Manager"

// Объявляем папки и скрипты для их обработки 
const works = {
    about: {
        path: '/.about/',
        tags: ['root'],
    },
    standards: {
        path: '/.standards/',
        tags: ['info']
    }
}

// Объявляем лог
const log = {}

// Создаём объекты
const manager = new Manager
const onlypagescript = new onlyPageScript

// Асинхронность

try {
    // Актуализирует слепок проекта по объекту с путями (можно сделать уже)
    manager.step(manager.checkCast(works), log)

    // Запускаем первый скрипт
    manager.step(onlypagescript.run(works.about), log)

    // Запускаем второй скрипт
    manager.step(onlypagescript.run(works.standards), log)

    // Вывод лога по завершении
    console.log(log)
} catch (e) {
    // Вывод лога c ошибкой
    console.error(log, e)
}
