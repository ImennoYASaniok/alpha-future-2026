
# Alpha Future 2026

Прототип для кейса **"Банковское приложение будущего"**.

## Стек

- **Backend**: FastAPI + SQLAlchemy (async)
- **DB**: PostgreSQL
- **Frontend**: React (Vite)
- **Infra**: Docker Compose (2 контейнера: `web` + `db`)

## Структура

- `backend/` — FastAPI приложение
- `frontend/` — React приложение (собирается в `dist/`)
- `docker-compose.yml` — запуск `web` и `db`

## Запуск

1. Скопируй переменные окружения:

```bash
copy .env.example .env
```

2. Запусти:

```bash
docker compose up --build
```

3. Открой:

- `http://localhost:8000` — стартовая страница
- `http://localhost:8000/api/health` — health-check
- `http://localhost:8000/api/db/ping` — проверка соединения с БД

