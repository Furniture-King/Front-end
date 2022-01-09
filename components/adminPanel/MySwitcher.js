import React from 'react'

import Dashboard from './section/Dashboard'
import Users from './section/Users'
import ProductsChair from './section/ProductsChair'
import ProductsCanape from './section/ProductsCanape'
import ProductsLuminaire from './section/ProductsLuminaire'
import ProductsRangement from './section/ProductsRangement'
import Orders from './section/Orders'

const MySwitcher = (props) => {
  const { myKey } = props

  switch (myKey) {
    case 'dashBoard':
      return <Dashboard title="dashboard dude!!" />
    case 'users':
      return <Users title="Users dude!!" />
    case 'chaises':
      return <ProductsChair title="chaises" />
    case 'canapes':
      return <ProductsCanape title="canapes" />
    case 'luminaires':
      return <ProductsLuminaire title="luminaires" />
    case 'rangements':
      return <ProductsRangement title="rangements" />
    case 'orders':
      return <Orders />

    default:
      break
  }
}

export default MySwitcher
