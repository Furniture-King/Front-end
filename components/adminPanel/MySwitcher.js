import React from 'react'

import Dashboard from './Dashboard'
import Users from './Users'
import ProductsChair from './ProductsChair'
import ProductsCanape from './ProductsCanape'
import ProductsLuminaire from './ProductsLuminaire'
import ProductsRangement from './ProductsRangement'
import Orders from './Orders'

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
