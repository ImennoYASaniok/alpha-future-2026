const FROM_LEVEL = { 1: 'низкая', 2: 'средняя', 3: 'высокая' }

function baseLevel(answers) {
  const { income, age } = answers
  if (income === 'работаю') return 3
  if (income === 'фриланс') return 2
  if (income === 'нет') {
    if (age === '18-20') return 1
    return 2
  }
  return 2
}

function adjustForPurpose(level, purpose) {
  if (purpose === 'повседневные') return Math.min(3, level + 1)
  if (purpose === 'крупная') return Math.max(1, level - 1)
  return level
}

export function getLimitCap(age, income) {
  const byAge = { '18-20': 10000, '21-23': 30000, '24-25': 50000 }[age] ?? 10000
  if (income === 'работаю') return byAge
  if (income === 'фриланс') return Math.min(byAge, 30000)
  return Math.min(byAge, 10000)
}

export function getForecast(answers) {
  const level = adjustForPurpose(baseLevel(answers), answers.purpose)
  const probability = FROM_LEVEL[level]
  const limitCap = getLimitCap(answers.age, answers.income)
  return { probability, limitCap }
}
