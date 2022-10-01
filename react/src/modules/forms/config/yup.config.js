import printValue from "yup/lib/util/printValue";

export let mixed = {
  default: "Поле содержит ошибку",
  required: "Поле обязательно для заполнения",
  defined: '${path} должен быть определен',
  oneOf: "Поле должно содержать одно из следующих значений: ${values}",
  notOneOf: "Поле не должно содержать одно из следующих значение: ${values}",
  notType: ({ path, type, value, originalValue }) => {
    let isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} должен быть \`${type}\` типом, ` +
      `но финальное значение: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (приведено из значения \`${printValue(originalValue, true)}\`).`
        : ".");

    if (value === null) {
      msg += `\n Если "null" является пустым значением, убедитесь что схема помечена как \`.nullable()\``;
    }

    return msg;
  },
  notNull: "${path} не может быть null"
};

export let string = {
  length: "Поле должно иметь ровно ${length} символов",
  min: "Минимум ${min} символов",
  max: "Максимум ${max} символов",
  matches: '${path} должен совпадать со следующим регулярном выражением: "${regex}"',
  email: "Невалидный e-mail",
  url: "Невалидная ссылка",
  uuid: "Невалидный UUID",
  trim: "Поле не должно содержать в начале или в конце пробелы",
  lowercase: "Поле должно содержать только строчные символы (нижний регистр)",
  uppercase: "Поле должно содержать только прописные символы (верхний регистр)"
};

export let number = {
  min: "Значение должно быть больше или равно ${min}",
  max: "Значение должно быть меньше или равно ${max}",
  lessThan: "Значение должно быть меньше чем ${less}",
  moreThan: "Значение должно быть больше ${more}",
  notEqual: "Значение не должно быть равно ${notEqual}",
  positive: "Значение должно быть положительном числом",
  negative: "Значение должно быть негативном числом",
  integer: "Значение должно быть целым числом"
};

export let date = {
  min: "Дата не может быть меньше начальной",
  max: "Дата не может быть больше конечной"
};

export let boolean = {
  isValue: "Должно иметь значение: ${value}",
};

export let object = {
  noUnknown: "${path} field cannot have keys not specified in the object shape"
};

export let array = {
  min: "В поле должно быть указано не менее ${min} элементов",
  max: "В поле должно быть указано не более ${max} элементов",
  length: "Поле должно иметь ${length} элементов",
};

export default Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
})