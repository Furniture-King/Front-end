import React from 'react'
import Head from 'next/head'

import NavBar2 from '../components/navBar2'
import MainTitle from '../components/mainTitle'
import AdminPanel from '../components/adminPanel'

const Admin_panel = () => {
  return (
    <div>
      <Head>
        <title>Furniture King admin panel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar2 />
      <MainTitle text="Welcome Admin" className="w-12/12 md:w-10/12" />
      <div className="mt-5">
        <AdminPanel />
      </div>
    </div>
  )
}

export default Admin_panel
