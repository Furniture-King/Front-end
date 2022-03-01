import React, { useState } from 'react'
import Link from 'next/link'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

import { AiFillGoogleCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name} className="mt-3">
        {label}
      </label>
      <input className="text-input border p-1" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error border border-red-500  mt-1 p-1 text-center text-red-400 bg-red-100">
          {meta.error}
        </div>
      ) : null}
    </>
  )
}

const LogInForm = () => {
  const [signInState, setSignInState] = useState([])
  console.log(signInState)
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required')
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSignInState(() => [
          {
            email: values.email,
            password: values.password
          }
        ])
        resetForm()
        setSubmitting(false)
      }}
    >
      <Form className="p-5 flex flex-col">
        <h1 className="text-center my-2 font-bold uppercase text-3xl">Login</h1>

        <MyTextInput
          label="Email"
          name="email"
          type="email"
          placeholder="jane@Doe.com"
        />

        <MyTextInput label="Mot de passe" name="password" type="password" />

        <button
          type="submit"
          className="rounded mt-4 shadow p-2 px-4 bg-color-bg-darkBlue text-color-bg-ultraLight  hover:shadow-sm hover:bg-color-bg-light hover:text-color-bg-darkBlue
          transition-colors duration-500"
        >
          Soumettre
        </button>
        <div className="mt-3 text-sm underline">
          <Link href="/signUp">
            <a>Pas encore inscrit ?</a>
          </Link>
        </div>
        <div className="flex flex-col mt-10 justify-between">
          <button
            className="btn btn-sm"
            type="button"
            style={{ backgroundColor: 'rgba(21, 31, 51,1)' }}
          >
            <AiFillGoogleCircle size={25} className="mr-3" />
            With Google
          </button>
          <button
            className="btn  btn-sm mt-3"
            type="button"
            style={{ backgroundColor: 'rgba(21, 31, 51,1)' }}
          >
            <BsFacebook size={20} className="mr-3" />
            With Facebook
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default LogInForm
