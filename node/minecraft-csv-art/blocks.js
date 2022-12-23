class Block {
  constructor(id) {
    this._id = id;
    this._locale = {
      ru: null,
    }
  }

  getId() {
    return this._id;
  }

  getLocale(locale) {
    return this._locale[locale]
  }

  setLocale(locale, value) {
    this._locale[locale] = value;
  }
}

const locale = {
  ru: {
    'minecraft:glass': 'Стекло',
    'minecraft:white_stained_glass': 'Белое стекло',
    'minecraft:orange_stained_glass': 'Оранжевое стекло',
    'minecraft:magenta_stained_glass': 'Сиреневое стекло',
    'minecraft:light_blue_stained_glass': 'Светло-синее стекло',
    'minecraft:yellow_stained_glass': 'Жёлтое стекло',
    'minecraft:lime_stained_glass': 'Лаймовое стекло',
    'minecraft:pink_stained_glass': 'Розовое стекло',
    'minecraft:gray_stained_glass': 'Серое стекло',
    'minecraft:light_gray_stained_glass': 'Светло-серое стекло',
    'minecraft:cyan_stained_glass': 'Бирюзовое стекло',
    'minecraft:purple_stained_glass': 'Фиолетовое стекло',
    'minecraft:blue_stained_glass': 'Синее стекло',
    'minecraft:brown_stained_glass': 'Коричневое стекло',
    'minecraft:green_stained_glass': 'Зелёное стекло',
    'minecraft:red_stained_glass': 'Красное стекло',
    'minecraft:black_stained_glass': 'Чёрное стекло',
  },
}

const supportedBlocks = [
  'minecraft:glass',
  'minecraft:white_stained_glass',
  'minecraft:orange_stained_glass',
  'minecraft:magenta_stained_glass',
  'minecraft:light_blue_stained_glass',
  'minecraft:yellow_stained_glass',
  'minecraft:lime_stained_glass',
  'minecraft:pink_stained_glass',
  'minecraft:gray_stained_glass',
  'minecraft:light_gray_stained_glass',
  'minecraft:cyan_stained_glass',
  'minecraft:purple_stained_glass',
  'minecraft:blue_stained_glass',
  'minecraft:brown_stained_glass',
  'minecraft:green_stained_glass',
  'minecraft:red_stained_glass',
  'minecraft:black_stained_glass',
]

const blocks = supportedBlocks.map((id) => {
  const block = new Block(id)

  if (locale.ru[id]) {
    block.setLocale('ru', locale.ru[id])
  }

  return block;
}, {})

const dictionary = {
  byId: blocks.reduce((acc, block) => {
    acc[block.getId()] = block;
    return acc;
  }, {})
}

module.exports = {
  blocks,
  dictionary,
}
