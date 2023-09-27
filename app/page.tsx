"use server"

export default async function Page () {
  console.log(process.env.MY_VAR)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {process.env.MY_VAR}
    </main>
  )
}
