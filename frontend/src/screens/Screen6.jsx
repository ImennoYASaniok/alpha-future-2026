export default function Screen6({ onBack, onRestart }) {
  return (
    <div className="screen screen-6">
      <div className="screen-content">
        <h2 className="screen-title">Почти готово!</h2>
        <p className="screen-subtitle">
          Заявка займёт 3 минуты. Решение — сразу.
        </p>

        <div className="checklist">
          <h3 className="checklist-title">Что понадобится:</h3>
          <ul className="checklist-items">
            <li className="checklist-item">✓ Паспорт</li>
            <li className="checklist-item">✓ Телефон</li>
            <li className="checklist-item">✓ Пара минут</li>
          </ul>
        </div>

        <button className="button primary" onClick={() => alert('Заглушка: заявка отправлена')}>
          Заполнить заявку
        </button>

        <div className="final-actions">
          <button className="button secondary back-button" onClick={onBack}>
            Назад
          </button>
          <button className="button secondary" onClick={onRestart}>
            Начать заново
          </button>
        </div>
      </div>
    </div>
  )
}
