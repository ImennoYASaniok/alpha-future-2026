export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">Alpha Future</div>
        <nav className="nav">
          <a className="navLink" href="#scenario">Сценарий</a>
          <a className="navLink" href="#mvp">MVP</a>
          <a className="navLink" href="#demo">Демо</a>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1 className="title">Банковское приложение будущего</h1>
          <p className="subtitle">
            Прототип для молодой аудитории: понятный сценарий, подсказки и быстрые действия.
          </p>
          <div className="ctaRow">
            <a className="button" href="/api/health">Проверить API</a>
            <a className="button secondary" href="/api/db/ping">Проверить БД</a>
          </div>
        </section>

        <section id="scenario" className="card">
          <h2>Фокус сценария</h2>
          <p>
            Здесь будет выбранный сценарий (например: первый вход, выбор продукта, подсказки или управление деньгами) и его логика.
          </p>
        </section>

        <section id="mvp" className="card">
          <h2>MVP</h2>
          <p>
            Минимальная реализация: фронтенд-страница + backend API + подключение к PostgreSQL в Docker.
          </p>
        </section>

        <section id="demo" className="card">
          <h2>Демо</h2>
          <p>
            После запуска Docker: открой <code>http://localhost:8000</code>.
          </p>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Alpha Future</footer>
    </div>
  )
}
