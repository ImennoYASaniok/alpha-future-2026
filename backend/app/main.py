from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from app.core.config import settings
from app.db.session import db_ping, init_db


def create_app() -> FastAPI:
    application = FastAPI(title=settings.app_name)

    @application.get("/api/health")
    async def health():
        return {"status": "ok"}

    @application.get("/api/db/ping")
    async def ping_db():
        ok = await db_ping()
        return {"ok": ok}

    application.add_event_handler("startup", init_db)

    if settings.serve_frontend:
        application.mount("/", StaticFiles(directory=settings.frontend_dist_dir, html=True), name="frontend")

    return application


app = create_app()
