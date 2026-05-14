const STORAGE_KEY = 'alpha-future-prototype-v1'

export const emptyAnswers = () => ({
  age: '',
  income: '',
  purpose: ''
})

function normalize(raw) {
  if (!raw || typeof raw !== 'object') return null
  const screen = Number(raw.currentScreen)
  const answers = {
    age: raw.answers?.age ?? '',
    income: raw.answers?.income ?? '',
    purpose: raw.answers?.purpose ?? ''
  }
  const complete = Boolean(answers.age && answers.income && answers.purpose)
  if (!Number.isInteger(screen) || screen < 1 || screen > 6) {
    return { currentScreen: 1, answers }
  }
  if (screen >= 3 && !complete) {
    return { currentScreen: 2, answers }
  }
  return { currentScreen: screen, answers }
}

export function loadPersistedState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
    return normalize(parsed)
  } catch {
    return null
  }
}

export function savePersistedState(currentScreen, answers) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ currentScreen, answers })
    )
  } catch {}
}

export function clearPersistedState() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {}
}
