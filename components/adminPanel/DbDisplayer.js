import React, { useState, useEffect } from 'react'

import { getItemById } from '../misc_func/gettAll'
import StarGenerator from '../misc_func/StarGenerator'
import MySpinner from '../spinner'

import { BsBoxSeam } from 'react-icons/bs'
import { GrDocumentUpdate, GrTrash } from 'react-icons/gr'
import { AiFillEye, AiFillCloseCircle } from 'react-icons/ai'

const MyModal = (props) => {
  const { data } = props
  const [value, setValue] = useState('')
  const [state, setState] = useState({})

  useEffect(() => {
    setValue(data)
  }, [data])

  useEffect(() => {
    getItemById(setState, 'chaises', value)
  }, [value])

  console.log(state)

  return (
    <div className="modal">
      <div className="modal-box">
        {state.products ? (
          <div>
            <div
              className="modal-action p-0 m-0"
              style={{ transform: 'translateY(-60%) translate(2%)' }}
            >
              <label htmlFor="my-modal-2" className="cursor-pointer">
                <AiFillCloseCircle />
              </label>
            </div>
            <img src={state.products.src} />
            <div className="flex justify-around items-centerOui my-3">
              <img src={state.products.src} className="border w-32" />
              {/* <img src={state.products.otherSrc[0]} className="border w-32" />
              <img src={state.products.otherSrc[1]} className="border w-32" /> */}
              {state.products.otherSrc ? (
                state.products.otherSrc.map((item) => {
                  return <img src={item} className="border w-32 p-2" />
                })
              ) : (
                <MySpinner />
              )}
            </div>

            <div className="flex justify-between">
              <h1 className="font-bold">{state.products.title}</h1>
              <div>{state.products.price} €</div>
              <StarGenerator
                totalVotes={state.products.totalVote}
                stars={state.products.stars}
              />
              <div className="flex items-center">
                <span className="mr-1">
                  <BsBoxSeam />
                </span>
                {state.products.stock}
              </div>
            </div>
            <div className="flex flex-col font-raleway text-sm">
              <p className="my-2">{state.products.text}</p>
              <p className="mb-2">{state.products.bigText1}</p>
              <p>{state.products.bigText2}</p>
            </div>
          </div>
        ) : (
          <div className="m-96">
            <MySpinner />
          </div>
        )}
      </div>
    </div>
  )
}

const DbDisplayer = (props) => {
  const { data, db } = props
  const [state, setState] = useState('')

  return (
    <div className="flex flex-wrap justify-between font-poiretOne">
      {data ? (
        data.map((item) => {
          return (
            <div
              key={item._id}
              className="border w-48 mb-3 shadow-lg hover:shadow-none"
            >
              <div className="flex justify-between m-1">
                <div>{item.price} €</div>
                <div className="" style={{ transform: 'scale(70%)' }}>
                  <StarGenerator
                    totalVotes={item.totalVote}
                    stars={item.stars}
                  />
                </div>
              </div>
              <div className="card card-bordered">
                <figure>
                  <img src={item.src} />
                </figure>
                <div className="card-body p-3 m-0">
                  <div className="flex justify-between">
                    <h2 className="card-title text-base">{item.title}</h2>
                    <div className="badge mx-1 badge-success p-3">
                      <span className="mr-1">{item.stock}</span>
                      <BsBoxSeam />
                    </div>
                  </div>
                  <div className="flex justify-between ">
                    <button className="border rounded-xs p-1 px-3 flex items-baseline justify-center">
                      <GrDocumentUpdate />
                    </button>
                    <button className="border rounded-xs p-1 px-3 flex items-baseline justify-center">
                      <GrTrash />
                    </button>

                    <label
                      value={item._id}
                      htmlFor="my-modal-2"
                      className="modal-button cursor-pointer border rounded-xs p-1 px-3"
                      onClick={() => setState(item._id)}
                    >
                      <AiFillEye value={item._id} />
                    </label>
                    <input
                      type="checkbox"
                      id="my-modal-2"
                      className="modal-toggle"
                      value={item._id}
                    />
                    <MyModal data={state} db={db} />
                  </div>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <div className="m-96">
          <MySpinner />
        </div>
      )}
    </div>
  )
}

export default DbDisplayer
