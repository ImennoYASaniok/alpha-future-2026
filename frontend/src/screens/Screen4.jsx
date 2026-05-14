import { useState } from 'react'
import { rubAmount } from '../utils/formatRub'

const ANNUAL_RATE = 0.23
const HIGH_LIMIT_THRESHOLD = 50000

export default function Screen4({ onNext, onBack }) {
  const [limit, setLimit] = useState(10000)
  const [monthlySpend, setMonthlySpend] = useState(5000)
  const [payOnTime, setPayOnTime] = useState(true)

  const minPayment = Math.round(monthlySpend * 0.05)

  const overpaymentIfLate = (() => {
    const months = 12
    const avgBalance = Math.min(monthlySpend * 0.5, limit)
    return Math.round(avgBalance * ANNUAL_RATE * (months / 12))
  })()

  const showHighLimitHint = limit >= HIGH_LIMIT_THRESHOLD

  return (
    <div className="screen screen-4">
      <div className="screen-content">
        <div>
          <h2 className="screen-title">Что будет если…</h2>
          <p className="screen-subtitle">
            Подвигай слайдеры — увидишь переплату и минимальный платёж. Цифры упрощённые, для ориентира.
          </p>
        </div>

        <div className="checklist">
          <h3 className="checklist-title">Параметры</h3>
          <div className="simulator-controls simulator-controls--in-checklist">
            <div className="control-group">
              <label className="control-label">
                Лимит карты: <span className="nobreak-amount">{rubAmount(limit)}</span>
              </label>
              <input
                type="range"
                min={10000}
                max={100000}
                step={5000}
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="control-group">
              <label className="control-label">
                Сколько потрачу в месяц: <span className="nobreak-amount">{rubAmount(monthlySpend)}</span>
              </label>
              <input
                type="range"
                min={1000}
                max={50000}
                step={1000}
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="segment-label">Как планируешь платить</div>
            <div className="segment-row" role="group" aria-label="Режим оплаты">
              <button
                type="button"
                className={`segment-button${payOnTime ? ' segment-button--active' : ''}`}
                onClick={() => setPayOnTime(true)}
              >
                Буду платить вовремя
              </button>
              <button
                type="button"
                className={`segment-button${!payOnTime ? ' segment-button--active' : ''}`}
                onClick={() => setPayOnTime(false)}
              >
                Иногда буду задерживать
              </button>
            </div>
          </div>
        </div>

        {showHighLimitHint && (
          <div className="checklist checklist--info">
            <p className="simulator-tip">
              Чем выше лимит, тем больше может быть переплата, если не успеть гасить долг. Часто удобнее
              начать с меньшего — лимит потом можно увеличить.
            </p>
          </div>
        )}

        <div className="checklist">
          <h3 className="checklist-title">Результат за год</h3>
          <ul className="checklist-items">
            <li
              className={`checklist-item simulator-result-line${payOnTime ? ' simulator-result-line--active' : ''}`}
            >
              Переплата за год: <span className="nobreak-amount">0 ₽</span>
              {payOnTime ? ' — если платишь в льготный период' : ' — при оплате в льготный период'}
            </li>
            <li
              className={`checklist-item simulator-result-line${!payOnTime ? ' simulator-result-line--active' : ''}`}
            >
              Переплата если задержу:{' '}
              <span className="nobreak-amount">+{rubAmount(overpaymentIfLate)}</span> (ставка{' '}
              {Math.round(ANNUAL_RATE * 100)}% годовых, упрощённый расчёт)
            </li>
            <li className="checklist-item">Льготный период: 60 дней</li>
            <li className="checklist-item">
              Минимальный платёж: <span className="nobreak-amount">{rubAmount(minPayment)}</span> (5% от трат
              в месяц)
            </li>
          </ul>
        </div>

        <div className="checklist checklist--notes">
          <ul className="checklist-items">
            <li className="checklist-item checklist-item--muted">
              Если платишь в льготный период — переплаты нет
            </li>
            <li className="checklist-item checklist-item--muted">Если задерживаешь — начисляются проценты</li>
          </ul>
        </div>

        <button type="button" className="button primary" onClick={onNext}>
          Понятно, выбрать карту
        </button>

        <div className="final-actions">
          <button type="button" className="button secondary" onClick={onBack}>
            Назад
          </button>
        </div>
      </div>
    </div>
  )
}
