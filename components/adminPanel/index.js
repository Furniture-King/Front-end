import React, { useState } from 'react'

import MySwitcher from './MySwitcher'
import AdminButton from './AdminButton'

const AdminPanel = () => {
  const [title, setTitle] = useState('dashBoard')
  const [displayer, setDisplayer] = useState('dashBoard')

  const handleClick = (e) => {
    setTitle(e.target.value)
    setDisplayer(e.target.value)
  }

  return (
    <div className="w-10/12 md:w-8/12 mx-auto ">
      <div className="flex">
        <div className=" w-3/12 font-poiretOne">
          <div className="mr-5">
            <div className="mx-auto rounded-full p-8 w-3/12 m-2 border shadow-lg"></div>
            <div className="flex justify-center">John Doe</div>
            <div className="flex justify-center text-xs">Admin Master</div>
            <div className="flex flex-col mt-10">
              <AdminButton
                title="Dashboard"
                value="dashBoard"
                onClick={handleClick}
              />
              <div className="flex flex-col  mt-6">
                <AdminButton
                  title="Users"
                  value="users"
                  onClick={handleClick}
                />
              </div>
              <div className="flex flex-col  mt-6">
                <AdminButton
                  title="Chaises"
                  value="chaises"
                  onClick={handleClick}
                />
                <AdminButton
                  title="Canapés"
                  value="canapes"
                  onClick={handleClick}
                />
                <AdminButton
                  title="Luminaires"
                  value="luminaires"
                  onClick={handleClick}
                />
                <AdminButton
                  title="Rangements"
                  value="rangements"
                  onClick={handleClick}
                />
              </div>
              <div className="flex flex-col  mt-6">
                <AdminButton
                  title="Orders"
                  value="orders"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full ml-5">
          <div className="capitalize text-3xl font-bold">{title}</div>
          <div className="mt-4">
            <MySwitcher myKey={displayer} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
