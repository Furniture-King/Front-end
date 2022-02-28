import react from 'react'
import Link from 'next/link'

import SignupForm from '../components/signupForm'

const SignUp = () => {
  return (
    <div className="font-poiretOne flex  ">
      <img
        src="./images/images_background/da-guojing-g41a0eca6f_1920.jpg"
        style={{ height: '100vh' }}
      />
      <div className=" flex flex-col w-2/3 mx-auto">
        <Link href="/">
          <a className="self-end m-5">Accueil</a>
        </Link>

        <div className="mt-32 w-2/3 mx-auto ">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

export default SignUp
