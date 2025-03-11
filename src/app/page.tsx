import { redirect } from 'next/navigation'

export default function Home() {
  const isAdmin = true

  if (isAdmin) {
    redirect('/admin')
  }
  return null
}
