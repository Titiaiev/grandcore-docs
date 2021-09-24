import { finMd } from "@grandcore.org/docs";
import genJsCode from "@grandcore.org/docs__gen-js-doc";

export default {
  // версия конфигурации
  v: 1,
  // режим работы менеджера
  mode: "default",
  // правила генерации файлов
  rules: {
    // Конфигурация по умолчанию для всех правил
    default: {
      // Сборщик конечного файла
      finalizer: finMd({
        mode: "default",
      }),
      // папка для сгенерированных файлов
      output: "./dist/",
    },
    // Пример конфигурации (перекрывает стандартные настройки)
    components: {
      // папка с файлами для генерации
      input: "./about/",
      // маска для файлов
      test: /\.jsx?$/,
      // папка для сгенерированных файлов
      output: "./dist/components/",
      // генератор документации для правилаfinHtml
      generator: genJsCode({
        mode: "TypeScript",
      }),
      // мета-данные для файлов документации
      meta: {
        tags: "components, default",
        template: "catalog",
      },
    },
  },
  // внешние скрипты, которые запускаются после успешного завершения генерации.
  scripts: ["./site-gen.sh", "./tests.py"],
};
