import react from 'react'
import Link from 'next/link'

import LogInForm from '../components/loginForm'

const LogIn = () => {
  return (
    <div className="font-poiretOne flex flex-col md:flex-row">
      <div className="md:block hidden">
        <img
          src="/images/images_background/living-room1920.jpg"
          style={{ height: '100vh' }}
          className="50%"
        />
      </div>
      <div className="md:hidden block">
        <img
          src="/images/images_background/living-room640.jpg"
          style={{ width: '100%' }}
          className=" z-0 absolute"
        />
      </div>

      <div className=" flex flex-col  md:w-1/3 w-96 mx-auto z-20">
        <Link href="/">
          <a className="self-start md:self-end m-5 underline text-color-bg-darkBlue">
            Accueil
          </a>
        </Link>

        <div className="md:mt-32 ">
          <LogInForm />
        </div>
      </div>
    </div>
  )
}

export default LogIn
