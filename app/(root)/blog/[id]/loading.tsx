import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <Skeleton className="w-full h-[274px] rounded-lg bg-black-200/40" />
      </section>
    </main>
  )
}

export default loading