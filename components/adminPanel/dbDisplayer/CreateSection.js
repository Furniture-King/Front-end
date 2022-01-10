import React, { useState } from 'react'

import { addNewProducts } from '../../misc_func/gettAll'

import { GiDatabase } from 'react-icons/gi'
import { FaWindowClose } from 'react-icons/fa'

const UpdateInputItem = (props) => {
  const { title, onChange, className, className2, placeholder } = props
  return (
    <div className={`flex mt-2 items-center ${className2}`}>
      <div className=" font-raleway">{title}</div>
      <div className="ml-2">
        <input
          type="text"
          placeholder={placeholder}
          className={`border p-1 ${className}`}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

const UpdateTextAreaItem = (props) => {
  const { title, onChange, className, placeholder } = props
  return (
    <div className="flex mt-2 ">
      <div className="font-raleway">{title}</div>
      <div className="ml-2">
        <textarea
          type="text"
          placeholder={placeholder}
          className={`border p-1 w-96 ${className}`}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

const CreateSection = (props) => {
  const { db, onClick } = props
  const [form, setForm] = useState({
    src: '',
    title: '',
    text: '',
    bigText1: '',
    bigText2: '',
    price: '',
    stars: 0,
    totalVote: 0,
    stock: 0,
    src2: '',
    src3: ''
  })

  const updateForm = (value) => {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  function onSubmit(e) {
    e.preventDefault()

    const NewProduct = {
      src: form.src,
      title: form.title,
      text: form.text,
      bigText1: form.bigText1,
      bigText2: form.bigText2,
      price: form.price,
      stars: form.stars,
      totalVote: form.totalVote,
      stock: form.stock,
      src2: form.src2,
      src3: form.src3
    }
    console.log(NewProduct)
    addNewProducts(db, NewProduct)
    // updateRecord(db, objectId, NewUpdateProduct)
  }

  return (
    <div className="w-full bg-white mb-10 shadow-lg p-5">
      <div className="flex text-xl justify-between pb-5 border-b border-color-bg-lightBrown">
        <GiDatabase size={30} />
        <div>
          Ajouter un nouveau produit à la collection{' '}
          <span className="font-bold capitalize ml-1"> {db}</span>
        </div>
        <button
          onClick={onClick}
          className="rounded transition-color duration-500 
                shadow-lg active:shadow-none hover:shadow-md 
                bg-color-bg-lightBrown 
                text-color-font-white 
                hover:bg-color-font-white 
                hover:text-red-500"
        >
          <FaWindowClose size={25} />
        </button>
      </div>
      <form onSubmit={onSubmit} className="w-full">
        <div className="flex flex-col p-5 ">
          <div className="flex justify-around">
            <div className="flex flex-col justify-between">
              <div className="flex justify-between">
                <UpdateInputItem
                  placeholder="Stock"
                  className="w-20"
                  onChange={(e) => updateForm({ stock: e.target.value })}
                />
                <UpdateInputItem
                  placeholder="Prix"
                  className="w-20"
                  onChange={(e) => updateForm({ price: e.target.value })}
                />
                <UpdateInputItem
                  placeholder="Stars"
                  className="w-20"
                  onChange={(e) => updateForm({ stars: e.target.value })}
                />
                <UpdateInputItem
                  placeholder="Votes"
                  className="w-20"
                  onChange={(e) => updateForm({ totalVote: e.target.value })}
                />
              </div>
              <div className="flex justify-between"></div>
              <UpdateInputItem
                placeholder="Nom"
                className="w-96"
                onChange={(e) => updateForm({ title: e.target.value })}
              />
              <UpdateTextAreaItem
                placeholder="Acccroche"
                onChange={(e) => updateForm({ text: e.target.value })}
              />
              <UpdateTextAreaItem
                placeholder="Text 1"
                className="h-56"
                onChange={(e) => updateForm({ bigText1: e.target.value })}
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col items-center justify-center">
                <UpdateInputItem
                  placeholder="Image principale"
                  className="w-96"
                  className2="flex flex-col "
                  onChange={(e) => updateForm({ src: e.target.value })}
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-5">
                <UpdateInputItem
                  placeholder="Image secondaire(1)"
                  className=" w-96"
                  className2="flex flex-col"
                  onChange={(e) => updateForm({ src2: e.target.value })}
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-5">
                <UpdateInputItem
                  placeholder="Image secondaire(2)"
                  className="w-96"
                  className2="flex flex-col"
                  onChange={(e) => updateForm({ src3: e.target.value })}
                />
              </div>
              <UpdateTextAreaItem
                placeholder="Text 2"
                className="h-56"
                onChange={(e) => updateForm({ bigText2: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group flex justify-center border-t  border-color-bg-lightBrown mt-5">
            <button
              onClick={onClick}
              className={`p-2 px-10 rounded first:mr-10 transition-color duration-500 
                shadow-lg active:shadow-none hover:shadow-md mt-10
                bg-color-bg-lightBrown 
                text-color-font-white 
                hover:bg-color-font-white 
                hover:text-red-500`}
            >
              ANNULER
            </button>
            <button
              type="submit"
              className={`p-2 px-10 rounded first:mr-10 transition-color duration-500 
                shadow-lg active:shadow-none hover:shadow-md mt-10
                bg-color-bg-darkBlue 
                text-color-font-white 
                hover:bg-white 
                hover:text-color-bg-darkBlue`}
            >
              CREATE
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateSection
