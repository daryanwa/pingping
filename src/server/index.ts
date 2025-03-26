import { Hono } from "hono"
import { cors } from "hono/cors"
import { handle } from "hono/vercel"

const app = new Hono().basePath("/api")

// Применяем CORS только к нужным маршрутам
app.use("/auth/*", cors())
app.use("/category/*", cors())

// Динамические импорты для маршрутов
const appRouter = app
  .route(
    "/auth",
    await import("./routers/auth-router").then((m) => m.authRouter)
  )
  .route(
    "/category",
    await import("./routers/category-router").then((m) => m.categoryRouters)
  )

// Экспорт обработчика для Next.js
export const httpHandler = handle(app)

// Экспорт приложения для развертывания
export default app

// Экспорт типов для TypeScript
export type AppType = typeof appRouter
