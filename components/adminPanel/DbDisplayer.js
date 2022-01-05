import React from 'react'

import StarGenerator from '../misc_func/StarGenerator'
import MySpinner from '../spinner'

import { BsBoxSeam } from 'react-icons/bs'
import { GrDocumentUpdate, GrTrash } from 'react-icons/gr'
import { AiFillEye } from 'react-icons/ai'

const DbDisplayer = (props) => {
  const { data } = props
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
                    <button className="border rounded-xs p-1 px-3 flex items-baseline justify-center">
                      <AiFillEye />
                    </button>
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
