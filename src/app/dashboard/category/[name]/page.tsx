import { DashboardPage } from "@/components/dashboard-page"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { notFound } from "next/navigation"
import dynamic from "next/dynamic"

interface PageProps {
  params: {
    name: string | string[] | undefined
  }
}

// Ленивая загрузка компонента
const CategoryPageContent = dynamic(() =>
  import("./category-page-content").then((mod) => mod.CategoryPageContent)
)

// Функция для загрузки данных
async function fetchCategoryData(name: string, userId: string) {
  const category = await db.eventCategory.findUnique({
    where: {
      name_userId: {
        name,
        userId,
      },
    },
    include: {
      _count: {
        select: {
          events: true,
        },
      },
    },
  })

  return category
}

export default async function Page({ params }: PageProps) {
  if (typeof params.name !== "string") return notFound()

  const auth = await currentUser()
  if (!auth) return notFound()

  const user = await db.user.findUnique({
    where: {
      externalId: auth.id,
    },
  })
  if (!user) return notFound()

  const category = await fetchCategoryData(params.name, user.id)
  if (!category) return notFound()

  const hasEvents = category._count.events > 0

  return (
    <DashboardPage title={`${category.emoji} ${category.name} events`}>
      <CategoryPageContent hasEvents={hasEvents} category={category} />
    </DashboardPage>
  )
}
