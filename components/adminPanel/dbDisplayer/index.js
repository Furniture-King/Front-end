import React, { useState, useEffect } from 'react'

import { getItemById, deleteRecord } from '../../misc_func/gettAll'
import StarGenerator from '../../misc_func/StarGenerator'
import MySpinner from '../../spinner'
import UpdateSection from './UpdateSection'

import { BsBoxSeam } from 'react-icons/bs'
import { GrDocumentUpdate, GrTrash } from 'react-icons/gr'
import { AiFillEye, AiFillCloseCircle } from 'react-icons/ai'

const MyModal = (props) => {
  const { data, db } = props
  const [value, setValue] = useState('')
  const [state, setState] = useState({})

  useEffect(() => {
    setValue(data)
    return function cleanup() {
      console.log('clean')
    }
  }, [data, db])

  useEffect(() => {
    getItemById(setState, db, value)
    return function cleanup() {
      console.log('clean')
    }
  }, [db, value])

  // console.log(state)

  return (
    <div className="modal">
      <div className="modal-box">
        <div
          className="modal-action p-0 m-0"
          style={{ transform: 'translateY(-60%) translate(2%)' }}
        >
          <label htmlFor="my-modal" className="cursor-pointer">
            <AiFillCloseCircle />
          </label>
        </div>
        {state.products ? (
          <div>
            <img src={state.products.src} />
            <div className="flex justify-around items-centerOui my-3">
              <img src={state.products.src} className="border w-32" />
              {state.products.otherSrc ? (
                state.products.otherSrc.map((item, index) => {
                  return (
                    <img src={item} key={index} className="border w-32 p-2" />
                  )
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
          <MySpinner />
        )}
      </div>
    </div>
  )
}

const MyTrashModal = (props) => {
  const { data, db } = props
  const [value, setValue] = useState('')
  const [state, setState] = useState({})

  useEffect(() => {
    setValue(data)
    return function cleanup() {
      console.log('clean')
    }
  }, [data, db])

  useEffect(() => {
    getItemById(setState, db, value)
    return function cleanup() {
      console.log('clean')
    }
  }, [value, db, setState])

  const handleClick = () => {
    //function on comment plz !!
    // deleteRecord(db, value)
    // console.log(`l'article : ${value} sur la DB : ${db} a bien été delete Bro!`)
    console.log(
      `this function was disabled ! it's work but don't want to delete for the demo`
    )
  }

  return (
    <div className="modal">
      <div className="modal-box">
        {state.products ? (
          <div>
            <div className="flex justify-between font-bold border-b-2 pb-2">
              <div className="flex items-center">
                <img src={state.products.src} className="w-16" />
                <div className="text-3xl">{state.products.title}</div>
              </div>
              <div className="modal-action p-0 m-0">
                <label htmlFor="my-modal-2" className="cursor-pointer">
                  <AiFillCloseCircle />
                </label>
              </div>
            </div>
            <p className="mt-2 font-raleway">
              Etes-vous sur de vouloir supprimer{' '}
              <span className="font-bold text-error underline uppercase">
                definitivement
              </span>{' '}
              l'article
              <span className="text-error font-bold">
                {' '}
                {state.products.title}
              </span>{' '}
              de votre base de données ?
            </p>
          </div>
        ) : null}

        <div className="modal-action font-raleway">
          <label
            htmlFor="my-modal-2"
            className="btn btn-error"
            onClick={handleClick}
          >
            Accept
          </label>
        </div>
      </div>
    </div>
  )
}

const DbDisplayer = (props) => {
  const { data, db } = props
  const [state, setState] = useState('')
  const [toggleView, setToggleView] = useState(false)

  const viewer = () => {
    if (toggleView) {
      setToggleView(false)
    } else {
      setToggleView(true)
    }
  }

  const updateClick = (objectId) => {
    setState(objectId)
  }

  return (
    <div className="flex flex-wrap justify-between font-poiretOne">
      {toggleView ? (
        <UpdateSection onClick={viewer} objectId={state} db={db} />
      ) : (
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
                        <button
                          onClick={viewer}
                          className="border rounded-xs p-1 px-3 flex items-baseline justify-center"
                        >
                          <GrDocumentUpdate
                            onClick={() => updateClick(item._id)}
                          />
                        </button>

                        {/* modal trash  */}
                        <label
                          htmlFor="my-modal-2"
                          className="modal-button cursor-pointer border rounded-xs p-1 px-3"
                          onClick={() => setState(item._id)}
                        >
                          <GrTrash />
                        </label>
                        <input
                          type="checkbox"
                          id="my-modal-2"
                          className="modal-toggle"
                        />
                        <MyTrashModal data={state} db={db} />

                        {/* modal preview  */}
                        <label
                          value={item._id}
                          htmlFor="my-modal"
                          className="modal-button cursor-pointer border rounded-xs p-1 px-3"
                          onClick={() => setState(item._id)}
                        >
                          <AiFillEye value={item._id} />
                        </label>
                        <input
                          type="checkbox"
                          id="my-modal"
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
      )}
    </div>
  )
}

export default DbDisplayer
