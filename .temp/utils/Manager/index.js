import checkCast from "./checkCast";


const checkcast = new checkCast
    /*

    TODO:
    - Метод checkCast (подключить метод из другого файла)
    - Метод step





    ================= ЭТО ВСЕГО ЛИШЬ НАРАБОТКИ =================


    # Формирование объектов с данными

    - Формируем массив слепка
    - Формируем массив конфига
    - Формируем массив из актуальных папок
    - Исключаем неактуальное на основе хеша слепка

    Создаём объект. Первые три значения - дата создания (в универсальном времени), хеш всей папки проекта и комплитед фолс.

    Проверяем хеш всей папки проекта. Если идентично со старым слепком - завершаем скрипт.

    Ищем файлы манифестов, создаём объект, куда записываем пути к файлам манифестов.

    ### ПРОХОД ПО МАНИФЕСТАМ ###

    Забираем хеш папки манифеста. Ищем ту же папку в старом слепке (если есть) и сравниваем. Сохраняем хеш в новый слепок в любом случае и добавляем комплитед тру, если совмедает, если нет - комплитед фолс.

    Забираем содержимое файла манифеста. Удаляем пустые строки и все пробелы из всегофайла. Проверяем в каждой строке наличие знака равно, которые не является первым или последним символом. Если всё гуд - записываем в массив каждую строку в виде ключ/значение.

    Проверяем наличие строки type, которая должна иметь одно из значений из массива в конфиге, строку tags, которая должна содержать минимум одну букву или цифру и не должна содержать спецсимволы. Также поле sort должно содержать цифру от 1 (ноль нельзя).

    ### ПОИСК ФАЙЛОВ В РАБОЧИХ ПАПКАХ ###

    Домены


    ## Параметры папок и файлов

    - type : тип папки или файла (index/group/service-[тип проекта]);
    - title : заголовок;
    - sort : сортировка. не зависит от типа сущности;
    - tags : коллекция или коллекции к которым относится сущность.

    ---

    - hash (только манифесты) : хэш папки
    depth (только файлы) : глубина вложенности страницы. При генерации добавляется класс, который делает отступ слева.
    */