import React, { useState, useEffect } from 'react'

import { getItemById, updateRecord } from '../../misc_func/gettAll'
import MySpinner from '../../spinner'

import { GiDatabase } from 'react-icons/gi'

const UpdateInputItem = (props) => {
  const { title, item, onChange, className, className2 } = props
  return (
    <div className={`flex mt-2 items-center ${className2}`}>
      <div className=" font-raleway">{title}</div>
      <div className="ml-2">
        <input
          type="text"
          defaultValue={item}
          className={`border p-1 ${className}`}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

const UpdateTextAreaItem = (props) => {
  const { title, item, onChange, className } = props
  return (
    <div className="flex mt-2 ">
      <div className="font-raleway">{title}</div>
      <div className="ml-2">
        <textarea
          type="text"
          value={item}
          className={`border p-1 w-96 ${className}`}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

const UpdateSection = (props) => {
  const { onClick, objectId, db } = props
  const [state, setState] = useState({})
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

  useEffect(() => {
    getItemById(setState, db, objectId)
    return function cleanup() {
      console.log('clean')
    }
  }, [db])

  const name = state.products ? state.products.title : null

  const updateForm = (value) => {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  function onSubmit(e) {
    e.preventDefault()

    const NewUpdateProduct = {
      src: form.src || state.products.src,
      title: form.title || state.products.title,
      text: form.text || state.products.text,
      bigText1: form.bigText1 || state.products.bigText1,
      bigText2: form.bigText2 || state.products.bigText2,
      price: form.price || state.products.price,
      stars: form.stars || state.products.stars,
      totalVote: form.totalVote || state.products.totalVote,
      stock: form.stock || state.products.stock,
      src2: form.src2 || state.products.otherSrc[0],
      src3: form.src3 || state.products.otherSrc[1]
    }
    updateRecord(db, objectId, NewUpdateProduct)
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex items-center mb-5 capitalize text-2xl font-bold p-5 border-b border-color-bg-lightBrown w-full">
        <GiDatabase size={50} />{' '}
        <span className="ml-5 font-raleway font-bold text-color-bg-darkBlue">
          Collection/{db}/update/{name}
        </span>
      </div>
      {state.products ? (
        <div className="flex flex-col p-5 bg-color-bg-ultraLight">
          <div className="flex justify-around">
            <div className="flex flex-col justify-between">
              <div className="flex justify-between">
                <UpdateInputItem
                  title="Stock : "
                  className="w-20"
                  item={state.products.stock}
                  onChange={(e) => updateForm({ stock: e.target.value })}
                />
                <UpdateInputItem
                  title="Prix : "
                  className="w-20"
                  item={state.products.price}
                  onChange={(e) => updateForm({ price: e.target.value })}
                />
              </div>
              <div className="flex justify-between">
                <UpdateInputItem
                  title="Stars : "
                  className="w-20"
                  item={state.products.stars}
                  onChange={(e) => updateForm({ stars: e.target.value })}
                />
                <UpdateInputItem
                  title="Votes : "
                  className="w-20"
                  item={state.products.totalVote}
                  onChange={(e) => updateForm({ totalVote: e.target.value })}
                />
              </div>
              <UpdateInputItem
                title="Nom : "
                className="w-96"
                item={state.products.title}
                onChange={(e) => updateForm({ title: e.target.value })}
              />
              <UpdateTextAreaItem
                title="Text0 : "
                item={state.products.text}
                onChange={(e) => updateForm({ text: e.target.value })}
              />
              <UpdateTextAreaItem
                title="Text 1 : "
                className="h-56"
                item={state.products.bigText1}
                onChange={(e) => updateForm({ bigText1: e.target.value })}
              />
              <UpdateTextAreaItem
                title="Text 2 : "
                className="h-56"
                item={state.products.bigText2}
                onChange={(e) => updateForm({ bigText2: e.target.value })}
              />
            </div>
            <div className="mx auto">
              <div className="flex flex-col items-center justify-center">
                <img src={state.products.src} className="w-48 shadow ml-10" />
                <UpdateInputItem
                  title="Image principale : "
                  className="w-96"
                  className2="flex flex-col "
                  item={state.products.src}
                  onChange={(e) => updateForm({ src: e.target.value })}
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-5">
                <img
                  src={state.products.otherSrc[0]}
                  className="w-48 shadow ml-10"
                />
                <UpdateInputItem
                  title="Image secondaire(1) : "
                  className=" w-96"
                  className2="flex flex-col"
                  item={state.products.otherSrc[0]}
                  onChange={(e) => updateForm({ src2: e.target.value })}
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-5">
                <img
                  src={state.products.otherSrc[1]}
                  className="w-48 shadow ml-10"
                />
                <UpdateInputItem
                  title="Image secondaire(2) : "
                  className="w-96"
                  className2="flex flex-col"
                  item={state.products.otherSrc[1]}
                  onChange={(e) => updateForm({ src3: e.target.value })}
                />
              </div>
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
              UPDATE
            </button>
          </div>
        </div>
      ) : (
        <MySpinner />
      )}
    </form>
  )
}

export default UpdateSection
