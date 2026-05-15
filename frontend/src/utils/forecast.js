/**
 * Скоринговая модель прогнозирования одобрения кредитной карты.
 * Каждый ответ начисляет баллы. Итоговый балл → вероятность (%) и категория.
 */

/** Максимально возможный балл (сумма всех максимумов) */
const MAX_SCORE = 90

function calculateScore(answers) {
  let score = 0

  // Возраст
  if (answers.age === '18-20') score += 10
  else if (answers.age === '21-23') score += 20
  else if (answers.age === '24-25') score += 30

  // Доход
  if (answers.income === 'работаю') score += 45
  else if (answers.income === 'фриланс') score += 25
  else if (answers.income === 'нет') score += 5

  // Цель
  if (answers.purpose === 'повседневные') score += 15
  else if (answers.purpose === 'попробовать') score += 10
  else if (answers.purpose === 'крупная') score += 5

  return score
}

function getCategory(score) {
  if (score >= 70) return 'высокая'
  if (score >= 45) return 'средняя'
  return 'низкая'
}

/**
 * Переводит баллы в проценты (15–95%), имитируя реальный банковский скоринг
 * (банки никогда не дают 0% и 100%).
 */
function getDisplayProbability(score) {
  return Math.round(15 + (score / MAX_SCORE) * 80)
}

/**
 * Возвращает рекомендованный лимит на основе скора.
 */
function getRecommendedLimit(score) {
  if (score >= 70) return 50000   // высокая вероятность
  if (score >= 45) return 20000   // средняя
  return 10000                    // низкая
}

export function getLimitCap(age, income) {
  const byAge = { '18-20': 10000, '21-23': 30000, '24-25': 50000 }[age] ?? 10000
  if (income === 'работаю') return byAge
  if (income === 'фриланс') return Math.min(byAge, 30000)
  return Math.min(byAge, 10000)
}

/**
 * Возвращает числовой прогноз одобрения.
 *
 * @param {{ age: string, income: string, purpose: string }} answers
 * @returns {{ probability: number, category: string, limitCap: number, score: number }}
 */
export function getForecast(answers) {
  const score = calculateScore(answers)
  const category = getCategory(score)
  const probability = getDisplayProbability(score)
  const limitCap = getRecommendedLimit(score)
  return { probability, category, limitCap, score }
}