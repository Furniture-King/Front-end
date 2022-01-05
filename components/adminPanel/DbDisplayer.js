import React, { useState, useEffect } from 'react'

import { getItemById } from '../misc_func/gettAll'
import StarGenerator from '../misc_func/StarGenerator'
import MySpinner from '../spinner'

import { BsBoxSeam } from 'react-icons/bs'
import { GrDocumentUpdate, GrTrash } from 'react-icons/gr'
import { AiFillEye } from 'react-icons/ai'

const MyModal = (props) => {
  const { data } = props

  return (
    <div className="modal">
      <div className="modal-box">
        <h1>{data}</h1>
        <p>
          Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut
          adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea
          quasi eligendi. Saepe velit autem minima.
        </p>
        <div className="modal-action">
          <label htmlFor="my-modal-2" className="btn btn-primary">
            Accept
          </label>
          <label htmlFor="my-modal-2" className="btn">
            Close
          </label>
        </div>
      </div>
    </div>
  )
}

const DbDisplayer = (props) => {
  const { data, db } = props
  const [state, setState] = useState('')

  // console.log(state)

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
                      onClick={() => setState(item.title)}
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
