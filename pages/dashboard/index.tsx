// main tools
import { useSession } from 'next-auth/react'

// components
import { Layout } from '@atoms/layout'

// types
import { NextPage } from 'next'

const DashboardPage: NextPage = () => {
  const { data } = useSession()

  return (
    <Layout meta={{ title: 'Dashboard' }}>
      <h1 className='text-center py-5'>Hola {data?.user?.name}</h1>
    </Layout>
  )
}

export default DashboardPage
