import { Hono } from "hono"
import { cors } from "hono/cors"
import { handle } from "hono/vercel"

const app = new Hono().basePath("/api")

// Применяем CORS только к нужным маршрутам
app.use("/auth/*", cors())
app.use("/category/*", cors())
app.use("/payment/*", cors())
app.use("/project/*", cors())

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
  .route(
    "/payment",
    await import("./routers/payment-router").then((m) => m.paymentRouter)
  )
  .route(
    "/project",
    await import("./routers/project-router").then((m) => m.projectRouter)
  )

// Экспорт обработчика для Next.js
export const httpHandler = handle(app)

// Экспорт приложения для развертывания
export default app

// Экспорт типов для TypeScript
export type AppType = typeof appRouter
