import { useState } from 'react'
import { getLimitCap } from '../utils/forecast'
import { rubAmount } from '../utils/formatRub'

const OTHER_CARDS = [
  {
    name: 'Альфа-Карта 365',
    teaser: 'Кэшбэк на каждый день года — если уже есть опыт с картами',
    limit: 'до 100 000 ₽'
  },
  {
    name: 'Альфа-Карта с бонусами',
    teaser: 'Больше лимит и бонусы — когда стабильный доход по найму',
    limit: 'до 300 000 ₽'
  },
  {
    name: 'Альфа-Карта Travel',
    teaser: 'Мили и страховка в поездках — если часто ездишь',
    limit: 'до 500 000 ₽'
  }
]

export default function Screen5({ onNext, onBack, onGoToScreen, answers }) {
  const [showOthers, setShowOthers] = useState(false)
  const limitCap = getLimitCap(answers.age, answers.income)

  return (
    <div className="screen screen-5">
      <div className="screen-content">
        <div>
          <h2 className="screen-title">Твоя карта</h2>
          <p className="screen-subtitle">
            Одна рекомендация — без выбора из десятка продуктов. Условия ориентировочные для прототипа.
          </p>
        </div>

        <div className="card-product">
          <div className="card-header">
            <h3 className="card-name">Альфа-Карта Первая</h3>
            <p className="card-reason">
              Идеально для первой кредитной карты: низкий лимит, льготный период 60 дней, кэшбэк на повседневные
              покупки
            </p>
          </div>

          <div className="card-features">
            <div className="feature-item">
              <div className="feature-mark feature-mark--limit" aria-hidden="true" />
              <div className="feature-text">
                <div className="feature-label">Лимит</div>
                <div className="feature-value">
                  <span className="nobreak-amount">до {rubAmount(limitCap)}</span>
                </div>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-mark feature-mark--cashback" aria-hidden="true" />
              <div className="feature-text">
                <div className="feature-label">Кэшбэк</div>
                <div className="feature-value">до 1%</div>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-mark feature-mark--period" aria-hidden="true" />
              <div className="feature-text">
                <div className="feature-label">Льготный период</div>
                <div className="feature-value">60 дней</div>
              </div>
            </div>
          </div>
        </div>

        <div className="checklist">
          <h3 className="checklist-title">Ещё по продукту</h3>
          <ul className="checklist-items">
            <li className="checklist-item">Процентная ставка: 23% годовых</li>
            <li className="checklist-item">Обслуживание: 0 ₽ в первый год</li>
            <li className="checklist-item">Бесплатные push-уведомления о платежах</li>
          </ul>
        </div>

        {showOthers && (
          <div className="alternate-cards fade-in">
            <h3 className="checklist-title">Другие варианты</h3>
            {OTHER_CARDS.map((c) => (
              <div key={c.name} className="alternate-card">
                <div className="alternate-card-name">{c.name}</div>
                <p className="alternate-card-teaser">{c.teaser}</p>
                <div className="alternate-card-limit">{c.limit}</div>
              </div>
            ))}
          </div>
        )}

        <button type="button" className="button primary" onClick={onNext}>
          Оформить эту карту
        </button>

        <div className="screen-5-secondary">
          <button
            type="button"
            className="button secondary"
            onClick={() => setShowOthers((v) => !v)}
          >
            {showOthers ? 'Скрыть другие варианты' : 'Посмотреть другие варианты'}
          </button>
          <button type="button" className="button secondary" onClick={() => onGoToScreen(4)}>
            Вернуться к симулятору
          </button>
        </div>

        <div className="final-actions">
          <button type="button" className="button secondary" onClick={onBack}>
            Назад
          </button>
        </div>
      </div>
    </div>
  )
}
