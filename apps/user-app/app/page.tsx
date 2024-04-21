import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getServerSession();
  if (session?.user) {
    redirect('/user')
  } else {
    redirect('/api/auth/signin')
  }
}