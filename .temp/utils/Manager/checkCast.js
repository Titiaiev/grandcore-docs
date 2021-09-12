/*

TODO
- Проверяем есть ли файл cast.json
  - если нет: создаём и создаём пустой объект cast
  - если есть: парсим в объект cast


- Парсим файлы по каталогам
  - Объявляем переменную с объектом из файла старт
  - Для каждой папки указываем хеш
  - Ищем одинаковые объекты в works и cast.
    - Если находим объект у которого совпада

*/


const works = {
    about: {
        path: '/.about/',
        tags: ['root'],
        hash: 'sf4nfr49fsldnfl',
        status: true
    },
    standards: {
        path: '/.standards/',
        tags: ['info']
    }
}

export default class checkCast {

}