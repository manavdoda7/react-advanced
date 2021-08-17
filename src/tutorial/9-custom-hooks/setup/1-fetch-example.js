import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const Example = () => {
  console.log(useFetch.products)
  return (
    <div>
      <h2>{useFetch.loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
