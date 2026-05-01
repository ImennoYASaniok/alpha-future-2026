from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Alpha Future"
    app_env: str = "dev"

    database_url: str

    serve_frontend: bool = True
    frontend_dist_dir: str = "frontend_dist"

    class Config:
        env_file = ".env"
        extra = "ignore"


settings = Settings()
