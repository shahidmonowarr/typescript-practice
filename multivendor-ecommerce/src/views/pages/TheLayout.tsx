import React from 'react'
import { Footer } from './common/Footer'
import { Header } from './common/Header'
import { Main } from './common/Main'

export const TheLayout = () => {
  return (
    <div>
        <div><Header/></div>
        <main><Main/></main>
        <div><Footer/></div>
    </div>
  )
}
