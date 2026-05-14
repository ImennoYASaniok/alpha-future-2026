const SAVE_MAIL_SUBJECT = encodeURIComponent('Прогноз: первая кредитная карта')
const SAVE_MAIL_BODY = encodeURIComponent(
  'Сохранил результат из прототипа «Первый кредит без страха». (Тело письма можно дополнить вручную.)'
)

export default function Screen6({ onBack, onRestart }) {
  const saveHref = `mailto:?subject=${SAVE_MAIL_SUBJECT}&body=${SAVE_MAIL_BODY}`

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
            <li className="checklist-item">Паспорт РФ</li>
            <li className="checklist-item">Телефон</li>
            <li className="checklist-item">Пара минут</li>
          </ul>
        </div>

        <div className="checklist">
          <h3 className="checklist-title">Без лишнего</h3>
          <ul className="checklist-items">
            <li className="checklist-item">Не нужно справки с работы</li>
            <li className="checklist-item">Не нужно поручителей</li>
            <li className="checklist-item">Решение приходит за 1 минуту</li>
          </ul>
        </div>

        <a
          className="button primary button-link"
          href="https://alfabank.ru/get-money/credit-cards/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Заполнить заявку
        </a>

        <a className="button secondary button-link button-full" href={saveHref}>
          Сохранить результат (на почту)
        </a>

        <div className="final-actions">
          <button type="button" className="button secondary" onClick={onBack}>
            Назад
          </button>
          <button type="button" className="button secondary" onClick={onRestart}>
            Вернуться на начало
          </button>
        </div>
      </div>
    </div>
  )
}
