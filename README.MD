
# Alpha Future 2026

Прототип для кейса **"Банковское приложение будущего"**.

## Стек

- **Backend**: FastAPI + SQLAlchemy (async)
- **DB**: PostgreSQL
- **Frontend**: React (Vite)
- **Infra**: Docker Compose (2 контейнера: `web` + `db`)

## Запуск

```bash
copy .env.example .env
```

```bash
docker compose up --build
```

3. Адреса:

- `http://localhost:8000` — стартовая страница
- `http://localhost:8000/api/health` — health-check
- `http://localhost:8000/api/db/ping` — проверка соединения с БД

