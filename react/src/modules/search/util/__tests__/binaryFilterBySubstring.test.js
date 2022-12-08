import { binaryFilterBySubstring } from '../binaryFilterBySubstring'

describe('binarySearchSubstring', () => {
  const cars = [
    'AUDI',
    'AZURE DYNAMICS',
    'BENTLEY',
    'BMW',
    'CADILLAC',
    'CHEVROLET',
    'CHRYSLER',
    'FIAT',
    'FISKER',
    'FORD',
    'GENESIS',
    'HONDA',
    'HYUNDAI',
    'JAGUAR',
    'JEEP',
    'KIA',
    'LAND ROVER',
    'LEXUS',
    'LINCOLN',
    'LUCID MOTORS',
    'MERCEDES-BENZ',
    'MINI',
    'MITSUBISHI',
    'NISSAN',
    'POLESTAR',
    'PORSCHE',
    'RIVIAN',
    'SMART',
    'SUBARU',
    'TESLA',
    'TH!NK',
    'TOYOTA',
    'VOLKSWAGEN',
    'VOLVO'
  ]

  it('Should not modify array', () => {
    const DetectModifyArrayProxy = new Proxy(cars, {
      set: function() {
        throw new Error('Restricted to modify array')
      }
    })

    expect(binaryFilterBySubstring.bind(null, DetectModifyArrayProxy, 'bmw')).not.toThrow()
  })

  it('Empty array arg', () => {
    expect(binaryFilterBySubstring([], 'some')).toStrictEqual([])
  })

  it('Empty input arg', () => {
    expect(binaryFilterBySubstring(cars, '')).toStrictEqual(cars)
  })

  it('No matches', () => {
    expect(binaryFilterBySubstring(cars, 'VAZ')).toStrictEqual([])
  })

  it('Should ignore case', () => {
    const input = 'audi'
    const found = binaryFilterBySubstring(cars, input)

    expect(found).toStrictEqual(['AUDI'])
  })

  it('1 match', () => {
    const input = 'BM'
    const found = binaryFilterBySubstring(cars, input)

    expect(found).toStrictEqual(['BMW'])
  })

  it('Several matches (T)', () => {
    const input = 'T'
    const found = binaryFilterBySubstring(cars, input)

    expect(found).toStrictEqual(['TESLA', 'TH!NK', 'TOYOTA'])
  })

  it('Several matches (C)', () => {
    const input = 'C'
    const found = binaryFilterBySubstring(cars, input)

    expect(found).toStrictEqual(['CADILLAC', 'CHEVROLET', 'CHRYSLER'])
  })

  it('Several matches (A)', () => {
    const input = 'A'
    const found = binaryFilterBySubstring(cars, input)

    expect(found).toStrictEqual(['AUDI', 'AZURE DYNAMICS',])
  })

  it('Several matches (VO)', () => {
    const input = 'VO'
    const found = binaryFilterBySubstring(cars, input)

    expect(found).toStrictEqual(['VOLKSWAGEN', 'VOLVO'])
  })

  it('Should support maxElements as argument', () => {
    const input = 'T'
    const maxElements = 2
    const found = binaryFilterBySubstring(cars, input, maxElements)

    expect(found.length).toBeLessThanOrEqual(maxElements)
  })

  it('Should support getCompare callback as argument', () => {
    const input = 'ma'
    const arr = [
      { name: 'arianna' },
      { name: 'ben' },
      { name: 'mac' },
      { name: 'max' },
      { name: 'xyz' }
    ]
    const found = binaryFilterBySubstring(arr, input, null, (item) => item.name)

    expect(found).toStrictEqual([
      { name: 'mac' },
      { name: 'max' },
    ])
  })

  it('Should be faster, than linear filter', () => {
    const input = 'cd'
    const init = (_, i) => {
      if (i < 200) return 'a'
      if (i < 400) return 'ab'
      if (i < 800) return 'b'
      if (i < 1400) return 'bacd'
      if (i < 1800) return 'cd'
      if (i < 2200) return 'cdek'
      if (i < 2700) return 'crown'
      if (i < 3000) return 'dang'
      if (i < 3150) return 'fang'
      return 'google'
    }

    const bigArr1 = Array.from({ length: 3_300 }, init)
    const bigArr2 = Array.from({ length: 3_300 }, init)

    let l0, l1;
    let b0, b1;

    l0 = performance.now()
    const linear = bigArr1.filter(car => car.toLowerCase().startsWith(input.toLowerCase()))
    l1 = performance.now()

    b0 = performance.now()
    const binary = binaryFilterBySubstring(bigArr2, input)
    b1 = performance.now()

    const linearTime = l1 - l0;
    const binaryTime = b1 - b0;

    expect(linear).toStrictEqual(binary)
    expect(binaryTime).toBeLessThanOrEqual(linearTime)
  })
})