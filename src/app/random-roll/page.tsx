import React from 'react'
import Navbar from '../components/Navbar'
import Random from '../components/Random'

type Props = {}

function page({}: Props) {
  return (
    <>
    <Navbar/>
    <Random/>
    </>
  )
}

export default page