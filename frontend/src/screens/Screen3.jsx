import { getForecast } from '../utils/forecast'
import { getForecastExplanation } from '../utils/forecastCopy'
import { rubAmount } from '../utils/formatRub'

const PROBABILITY_COLOR = {
  высокая: 'var(--success)',
  средняя: 'var(--warning)',
  низкая: 'var(--error)'
}

export default function Screen3({ onNext, onBack, onEditAnswers, onTryLater, answers }) {
  const { probability, category, limitCap } = getForecast(answers)
  const explanation = getForecastExplanation(category, answers, limitCap)

  return (
    <div className="screen screen-3">
      <div className="screen-content">
        <div>
          <h2 className="screen-title">Честный прогноз одобрения</h2>
          <p className="screen-subtitle">
            На основе твоих ответов — без заявки и без влияния на кредитную историю.
          </p>
          <p className="screen-subtitle-note">
            Для новых клиентов без истории в Альфа-Банке. 
            Существующие клиенты получают карту в 4 клика — без этой формы.
          </p>
        </div>

        <div className="probability-indicator">
          <div className="probability-label">Вероятность одобрения</div>
          <div
            className="probability-value"
            style={{ color: PROBABILITY_COLOR[category] }}
          >
            {probability}%
          </div>
          <div
            className="probability-category"
            style={{ color: PROBABILITY_COLOR[category] }}
          >
            {category}
          </div>
        </div>

        <p className="explanation-text">{explanation}</p>

        <div className="checklist">
          <h3 className="checklist-title">Что учли в прогнозе</h3>
          <ul className="checklist-items">
            <li className="checklist-item">
              Ориентировочный лимит:{' '}
              <span className="nobreak-amount">до {rubAmount(limitCap)}</span>
            </li>
            <li className="checklist-item">Льготный период: 60 дней без процентов</li>
            <li className="checklist-item">
              Если платишь в льготный период — переплаты по процентам нет
            </li>
          </ul>
        </div>

        {category === 'низкая' && (
          <div className="checklist checklist--hint">
            <h3 className="checklist-title">Что можно сделать</h3>
            <ul className="checklist-items">
              <li className="checklist-item">Попробовать с минимальным лимитом</li>
              <li className="checklist-item">Подождать 6 месяцев и зайти снова с доходом</li>
            </ul>
          </div>
        )}

        <button type="button" className="button primary" onClick={onNext}>
          Посмотреть подходящие карты
        </button>

        {category === 'низкая' && (
          <button type="button" className="button secondary button-full" onClick={onTryLater}>
            Попробовать позже
          </button>
        )}

        <div className="final-actions">
          <button type="button" className="button secondary" onClick={onBack}>
            Назад
          </button>
          <button type="button" className="button secondary" onClick={onEditAnswers}>
            Изменить ответы
          </button>
        </div>
      </div>
    </div>
  )
}
