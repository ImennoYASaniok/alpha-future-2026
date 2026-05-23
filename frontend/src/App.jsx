import { useState, useEffect } from 'react'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'
import Screen4 from './screens/Screen4'
import Screen5 from './screens/Screen5'
import Screen6 from './screens/Screen6'
import {
  loadPersistedState,
  savePersistedState,
  clearPersistedState,
  emptyAnswers
} from './utils/persistState'
import './App.css'

function getInitialState() {
  const persisted = loadPersistedState()
  if (persisted) {
    return {
      currentScreen: persisted.currentScreen,
      answers: persisted.answers
    }
  }
  return { currentScreen: 1, answers: emptyAnswers() }
}

const initial = getInitialState()

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(initial.currentScreen)
  const [onboardingResetKey, setOnboardingResetKey] = useState(0)
  const [answers, setAnswers] = useState(initial.answers)

  useEffect(() => {
    savePersistedState(currentScreen, answers)
  }, [currentScreen, answers])

  const handleAnswers = (newAnswers) => {
    setAnswers(prev => ({ ...prev, ...newAnswers }))
  }

  const nextScreen = () => {
    setCurrentScreen(prev => Math.min(prev + 1, 6))
  }

  const prevScreen = () => {
    setCurrentScreen(prev => Math.max(prev - 1, 1))
  }

  const goToScreen = (screen) => {
    setCurrentScreen(screen)
  }

  return (
    <div className="app-container">
      {currentScreen === 1 && (
        <Screen1 onNext={nextScreen} />
      )}
      {currentScreen === 2 && (
        <Screen2
          onNext={nextScreen}
          onBack={prevScreen}
          answers={answers}
          onAnswersChange={handleAnswers}
          onboardingResetKey={onboardingResetKey}
        />
      )}
      {currentScreen === 3 && (
        <Screen3
          onNext={nextScreen}
          onBack={prevScreen}
          onEditAnswers={() => {
            setOnboardingResetKey((k) => k + 1)
            goToScreen(2)
          }}
          onTryLater={() => {
            setAnswers(emptyAnswers())
            setOnboardingResetKey(0)
            clearPersistedState()
            goToScreen(1)
          }}
          answers={answers}
        />
      )}
      {currentScreen === 4 && (
        <Screen4
          onNext={nextScreen}
          onBack={prevScreen}
          answers={answers}
        />
      )}
      {currentScreen === 5 && (
        <Screen5
          onNext={nextScreen}
          onBack={prevScreen}
          onGoToScreen={goToScreen}
          answers={answers}
        />
      )}
      {currentScreen === 6 && (
        <Screen6
          onBack={prevScreen}
          onRestart={() => {
            setAnswers(emptyAnswers())
            setOnboardingResetKey(0)
            clearPersistedState()
            goToScreen(1)
          }}
        />
      )}
    </div>
  )
}
