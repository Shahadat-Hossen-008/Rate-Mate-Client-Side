import Lottie from 'lottie-react'
import lottie404 from '../assets/Lottie/404.json'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


function Error () {
  return (
    <div className='flex flex-col items-center'>
        <Lottie animationData={lottie404} className='w-96'></Lottie>
        <Link to={'/'}><Button variant='outlined'>Go to Home Page</Button></Link>
    </div>
  )
}

export default Error