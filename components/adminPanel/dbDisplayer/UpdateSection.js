import React, { useState, useEffect } from 'react'

import { getItemById, updateRecord } from '../../misc_func/gettAll'
import MySpinner from '../../spinner'

const UpdateInputItem = (props) => {
  const { title, item, onChange, className } = props
  return (
    <div className="flex mt-2 items-center">
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
      src2: form.src2 || state.products.src2,
      src3: form.src3 || state.products.src3
    }
    updateRecord(db, objectId, NewUpdateProduct)
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      {state.products ? (
        <div className="flex flex-col p-5 bg-color-bg-ultraLight">
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
          <div className="flex justify-between">
            <UpdateInputItem
              title="Nom : "
              className="w-96"
              item={state.products.title}
              onChange={(e) => updateForm({ title: e.target.value })}
            />
            <UpdateTextAreaItem
              title="Accroche : "
              item={state.products.text}
              onChange={(e) => updateForm({ text: e.target.value })}
            />
          </div>

          <div className="flex justify-between">
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
          <div className="flex">
            <UpdateInputItem
              title="Image principale : "
              className="w-96"
              item={state.products.src}
              onChange={(e) => updateForm({ src: e.target.value })}
            />
            <img src={state.products.src} className="w-20 ml-10" />
          </div>
          <div className="flex mt-5">
            <UpdateInputItem
              title="Image secondaire(1) : "
              className=" w-96"
              item={state.products.otherSrc[0]}
              onChange={(e) => updateForm({ src2: e.target.value })}
            />
            <img src={state.products.otherSrc[0]} className="w-20 ml-10" />
          </div>
          <div className="flex mt-5">
            <UpdateInputItem
              title="Image secondaire(2) : "
              className="w-96"
              item={state.products.otherSrc[1]}
              onChange={(e) => updateForm({ src3: e.target.value })}
            />
            <img src={state.products.otherSrc[1]} className="w-20 ml-10" />
          </div>
        </div>
      ) : (
        <MySpinner />
      )}
      <div className="form-group">
        <input
          type="submit"
          value="Update Record"
          className="btn btn-primary"
        />
      </div>
      <button className="border rounded mt-10 p-1" onClick={onClick}>
        ANNULER
      </button>
    </form>
  )
}

export default UpdateSection
