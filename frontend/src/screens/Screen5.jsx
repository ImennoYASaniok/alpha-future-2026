export default function Screen5({ onNext, onBack, onGoToScreen }) {
  return (
    <div className="screen screen-5">
      <div className="screen-content">
        <h2 className="screen-title">Подходящая карта</h2>

        <div className="card-product">
          <div className="card-header">
            <h3 className="card-name">Альфа-Карта Первая</h3>
            <p className="card-reason">
              Идеально для первого кредита: низкий лимит, льготный период 60 дней
            </p>
          </div>

          <div className="card-features">
            <div className="feature-item">
              <div className="feature-icon">💳</div>
              <div className="feature-text">
                <div className="feature-label">Лимит</div>
                <div className="feature-value">до 10 000 ₽</div>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <div className="feature-text">
                <div className="feature-label">Кэшбэк</div>
                <div className="feature-value">до 1%</div>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">📅</div>
              <div className="feature-text">
                <div className="feature-label">Льготный период</div>
                <div className="feature-value">60 дней</div>
              </div>
            </div>
          </div>

          <button className="button primary" onClick={onNext}>
            Оформить
          </button>

          <button className="button secondary" onClick={() => onGoToScreen(4)}>
            Посмотреть другие варианты
          </button>
        </div>

        <button className="button secondary back-button" onClick={onBack}>
          Назад
        </button>
      </div>
    </div>
  )
}
