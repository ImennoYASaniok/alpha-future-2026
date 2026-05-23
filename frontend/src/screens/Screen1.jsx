import Screen1Hero from './Screen1Hero'

export default function Screen1({ onNext }) {
  return (
    <div className="screen screen-1">
      <div className="screen-content">
        <h1 className="screen-title">Хочу первую кредитную карту</h1>
        <p className="screen-subtitle">Разберёмся вместе — без сложных условий</p>
        <p className="screen-intro">
          Первая кредитная карта не должна быть пугающей. Мы покажем, как это работает, и честно скажем — одобрят
          или нет.
        </p>
        <p className="screen-intro-note">
          Для новых клиентов Альфа-Банка — без заполнения длинных форм. 
          Уже клиент? Получите карту в 4 клика в приложении.
        </p>
        <Screen1Hero />
        <button type="button" className="button primary" onClick={onNext}>
          Начать
        </button>
      </div>
    </div>
  )
}
