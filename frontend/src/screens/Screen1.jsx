import Screen1Hero from './Screen1Hero'

export default function Screen1({ onNext }) {
  return (
    <div className="screen screen-1">
      <div className="screen-content">
        <h1 className="screen-title">Хочу первую кредитную карту</h1>
        <p className="screen-subtitle">Разберёмся вместе — без сложных условий</p>
        <p className="screen-intro">
          Первый кредит не должен быть пугающим. Мы покажем, как это работает, и честно скажем — одобрят
          или нет.
        </p>
        <Screen1Hero />
        <button type="button" className="button primary" onClick={onNext}>
          Начать
        </button>
      </div>
    </div>
  )
}
