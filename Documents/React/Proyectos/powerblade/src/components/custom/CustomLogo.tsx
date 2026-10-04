import React from 'react'
import { Link } from 'react-router'
import logo from '@/assets/Logo.png'
interface Props {
  subtitle?: string;
}

export const CustomLogo = () => {
  return (
    <Link to="/" className=''>
      <img
      style={{width: "15rem" }}
        src={logo}
        alt=""
        className=""
      />
    </Link>

  )
}
