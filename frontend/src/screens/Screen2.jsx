import { useState } from 'react'

export default function Screen2({ onNext, onBack, answers, onAnswersChange }) {
  const [step, setStep] = useState(1)

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
            <div className="options-list">
              <button className="option-button" onClick={() => handleAgeSelect('18-20')}>
                18–20
              </button>
              <button className="option-button" onClick={() => handleAgeSelect('21-23')}>
                21–23
              </button>
              <button className="option-button" onClick={() => handleAgeSelect('24-25')}>
                24–25
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="question-step fade-in">
            <h2 className="question-title">Есть ли доход?</h2>
            <div className="options-list">
              <button className="option-button" onClick={() => handleIncomeSelect('работаю')}>
                Работаю
              </button>
              <button className="option-button" onClick={() => handleIncomeSelect('фриланс')}>
                Фриланс/подработки
              </button>
              <button className="option-button" onClick={() => handleIncomeSelect('нет')}>
                Учусь, дохода нет
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="question-step fade-in">
            <h2 className="question-title">Зачем карта?</h2>
            <div className="options-list">
              <button className="option-button" onClick={() => handlePurposeSelect('повседневные')}>
                Повседневные покупки
              </button>
              <button className="option-button" onClick={() => handlePurposeSelect('крупная')}>
                Крупная покупка
              </button>
              <button className="option-button" onClick={() => handlePurposeSelect('попробовать')}>
                Просто хочу попробовать
              </button>
            </div>
          </div>
        )}

        <button className="button secondary back-button" onClick={goBack}>
          Назад
        </button>
      </div>
    </div>
  )
}
