export default function Screen1({ onNext }) {
  return (
    <div className="screen screen-1">
      <div className="screen-content">
        <h1 className="screen-title">Хочу первую кредитную карту</h1>
        <p className="screen-subtitle">Разберёмся вместе — без сложных условий</p>
        <button className="button primary" onClick={onNext}>
          Начать
        </button>
      </div>
    </div>
  )
}
