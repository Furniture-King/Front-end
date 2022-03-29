import React, { useContext } from 'react'
import Context from '../context'

const CartProductCard = (props) => {
  const { title, img, text, price } = props
  return (
    <div className="my-10 shadow">
      <div className="p-2 grid grid-flow-row-dense grid-cols-5 grid-rows-1">
        <img className="m-3" src={img} alt={title} style={{ width: '12rem' }} />
        <div className="ml-5 flex flex-col justify-between">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-xs">Supprimer</p>
        </div>
        <p className="text-center my-auto font-bold">{price} €</p>
        <div class="btn-group mx-auto my-auto">
          <button class="btn btn-sm btn-outline">-</button>
          <button class="btn btn-sm btn-disabled btn-outline ">1</button>
          <button class="btn btn-sm btn-outline">+</button>
        </div>
        <p className="text-center my-auto font-bold">{price} €</p>
      </div>
    </div>
  )
}

const CartDisplayer = () => {
  const { cart } = useContext(Context)

  return (
    <div className="mx-auto my-10 w-10/12 md:w-8/12 font-poiretOne">
      <div className="p-2 grid grid-flow-row-dense grid-cols-5 grid-rows-1">
        <div>Produits</div>
        <div></div>
        <div className="text-center">Prix unitaire</div>
        <div className="text-center">Quatité</div>
        <div className="text-center">Total</div>
      </div>
      {cart.map((item, index) => {
        return (
          <CartProductCard
            key={index}
            title={item.products.title}
            img={item.products.src}
            price={item.products.price}
          />
        )
      })}
    </div>
  )
}

export default CartDisplayer
