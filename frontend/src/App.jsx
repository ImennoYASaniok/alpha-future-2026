import { useState } from 'react'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'
import Screen4 from './screens/Screen4'
import Screen5 from './screens/Screen5'
import Screen6 from './screens/Screen6'
import './App.css'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [answers, setAnswers] = useState({
    age: '',
    income: '',
    purpose: ''
  })

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
        />
      )}
      {currentScreen === 3 && (
        <Screen3
          onNext={nextScreen}
          onBack={prevScreen}
          answers={answers}
        />
      )}
      {currentScreen === 4 && (
        <Screen4
          onNext={nextScreen}
          onBack={prevScreen}
        />
      )}
      {currentScreen === 5 && (
        <Screen5
          onNext={nextScreen}
          onBack={prevScreen}
          onGoToScreen={goToScreen}
        />
      )}
      {currentScreen === 6 && (
        <Screen6
          onBack={prevScreen}
          onRestart={() => goToScreen(1)}
        />
      )}
    </div>
  )
}
