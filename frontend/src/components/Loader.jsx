import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div role="status">
    <InfinitySpin 
  width='200'
  color="#ffffff"
/>
    </div>
  )
}

export default Loader