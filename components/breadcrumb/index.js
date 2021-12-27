import React from 'react'
import Link from 'next/link'

const MyBreadcrumb = (props) => {
  const { item1, item2, hrefItem1, hrefItem2, item3, hrefItem3 = '/' } = props
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-10/12 md:w-8/12 border-b-2 border-color-bg-lightBrown">
        <div className="mt-10 pb-4 font-poiretOne text-2xl text-color-font-black">
          <ul className="flex">
            <li>
              <Link href={hrefItem1} passHref>
                <a>{item1}</a>
              </Link>
            </li>
            /
            <li>
              <Link href={hrefItem2} passHref>
                <a>{item2}</a>
              </Link>
            </li>
            /
            <li>
              <Link href={hrefItem3} passHref>
                <a>{item3}</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyBreadcrumb
