export default function Screen3({ onNext, onBack, answers }) {
  const calculateProbability = () => {
    if (answers.income === 'работаю') {
      return 'высокая'
    }
    if (answers.income === 'фриланс') {
      return 'средняя'
    }
    if (answers.income === 'нет') {
      if (answers.age === '18-20') {
        return 'низкая'
      }
      return 'средняя'
    }
    return 'средняя'
  }

  const getExplanation = (probability) => {
    if (probability === 'высокая') {
      return 'С твоими доходами шансы на одобрение отличные. Банки охотно выдают первую карту.'
    }
    if (probability === 'средняя') {
      return 'Без официального дохода банки одобряют реже, но для первой карты с лимитом до 10 000 ₽ это реально.'
    }
    return 'Для твоего возраста без официального дохода одобрение сложнее, но попробуй с небольшим лимитом.'
  }

  const probability = calculateProbability()
  const explanation = getExplanation(probability)

  const getProbabilityColor = () => {
    if (probability === 'высокая') return '#4CAF50'
    if (probability === 'средняя') return '#FF9800'
    return '#F44336'
  }

  return (
    <div className="screen screen-3">
      <div className="screen-content">
        <h2 className="screen-title">Честный прогноз одобрения</h2>

        <div className="probability-indicator">
          <div className="probability-label">Вероятность одобрения:</div>
          <div className="probability-value" style={{ color: getProbabilityColor() }}>
            {probability}
          </div>
        </div>

        <p className="explanation-text">{explanation}</p>

        <button className="button primary" onClick={onNext}>
          Посмотреть подходящие карты
        </button>

        <button className="button secondary back-button" onClick={onBack}>
          Назад
        </button>
      </div>
    </div>
  )
}
