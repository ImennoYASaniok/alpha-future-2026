import { useState } from 'react'

export default function Screen4({ onNext, onBack }) {
  const [limit, setLimit] = useState(10000)
  const [monthlySpend, setMonthlySpend] = useState(5000)
  const [payOnTime, setPayOnTime] = useState(true)

  const calculateOverpayment = () => {
    if (payOnTime) {
      return 0
    }
    const baseRate = 0.23
    const months = 12
    const avgBalance = monthlySpend * 0.5
    return Math.round(avgBalance * baseRate * (months / 12))
  }

  const overpayment = calculateOverpayment()

  return (
    <div className="screen screen-4">
      <div className="screen-content">
        <h2 className="screen-title">Что будет если...</h2>
        <p className="screen-subtitle">Симулятор кредитной карты</p>

        <div className="simulator-controls">
          <div className="control-group">
            <label className="control-label">
              Лимит карты: {limit.toLocaleString()} ₽
            </label>
            <input
              type="range"
              min="10000"
              max="100000"
              step="5000"
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value))}
              className="slider"
            />
          </div>

          <div className="control-group">
            <label className="control-label">
              Сколько потрачу в месяц: {monthlySpend.toLocaleString()} ₽
            </label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(parseInt(e.target.value))}
              className="slider"
            />
          </div>

          <div className="control-group">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={payOnTime}
                onChange={(e) => setPayOnTime(e.target.checked)}
                className="toggle"
              />
              Буду платить вовремя
            </label>
          </div>
        </div>

        <div className="simulator-results">
          <div className="result-item success">
            ✅ Переплата за год: {overpayment === 0 ? '0 ₽' : `${overpayment.toLocaleString()} ₽`}
          </div>
          {!payOnTime && overpayment > 0 && (
            <div className="result-item warning">
              ⚠️ Переплата если задержу: +{overpayment.toLocaleString()} ₽
            </div>
          )}
          <div className="result-item info">
            📅 Льготный период: 60 дней
          </div>
        </div>

        <button className="button primary" onClick={onNext}>
          Выбрать карту
        </button>

        <button className="button secondary back-button" onClick={onBack}>
          Назад
        </button>
      </div>
    </div>
  )
}
