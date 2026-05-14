import { useState, useEffect } from 'react'

const HINTS = {
  1: 'Возраст влияет на лимит и вероятность одобрения.',
  2: 'Без официального дохода лимит будет меньше, но первая карта возможна.',
  3: 'Цель поможет подобрать подходящий лимит и условия.'
}

export default function Screen2({ onNext, onBack, answers, onAnswersChange, onboardingResetKey = 0 }) {
  const [step, setStep] = useState(1)

  useEffect(() => {
    if (onboardingResetKey > 0) {
      setStep(1)
    }
  }, [onboardingResetKey])

  const handleAgeSelect = (value) => {
    onAnswersChange({ age: value })
    setStep(2)
  }

  const handleIncomeSelect = (value) => {
    onAnswersChange({ income: value })
    setStep(3)
  }

  const handlePurposeSelect = (value) => {
    onAnswersChange({ purpose: value })
    onNext()
  }

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      onBack()
    }
  }

  return (
    <div className="screen screen-2">
      <div className="screen-content">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>

        {step === 1 && (
          <div className="question-step fade-in">
            <h2 className="question-title">Сколько тебе лет?</h2>
            <p className="question-hint">{HINTS[1]}</p>
            <div className="options-list">
              <button type="button" className="option-button" onClick={() => handleAgeSelect('18-20')}>
                18–20
              </button>
              <button type="button" className="option-button" onClick={() => handleAgeSelect('21-23')}>
                21–23
              </button>
              <button type="button" className="option-button" onClick={() => handleAgeSelect('24-25')}>
                24–25
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="question-step fade-in">
            <h2 className="question-title">Есть ли официальный доход?</h2>
            <p className="question-hint">{HINTS[2]}</p>
            <div className="options-list">
              <button type="button" className="option-button" onClick={() => handleIncomeSelect('работаю')}>
                Работаю по найму
              </button>
              <button type="button" className="option-button" onClick={() => handleIncomeSelect('фриланс')}>
                Фриланс/подработки
              </button>
              <button type="button" className="option-button" onClick={() => handleIncomeSelect('нет')}>
                Учусь, дохода нет
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="question-step fade-in">
            <h2 className="question-title">Зачем тебе кредитная карта?</h2>
            <p className="question-hint">{HINTS[3]}</p>
            <div className="options-list">
              <button
                type="button"
                className="option-button"
                onClick={() => handlePurposeSelect('повседневные')}
              >
                Повседневные покупки
              </button>
              <button type="button" className="option-button" onClick={() => handlePurposeSelect('крупная')}>
                Крупная покупка
              </button>
              <button
                type="button"
                className="option-button"
                onClick={() => handlePurposeSelect('попробовать')}
              >
                Просто хочу попробовать
              </button>
            </div>
          </div>
        )}

        <button type="button" className="button secondary back-button" onClick={goBack}>
          Назад
        </button>
      </div>
    </div>
  )
}
