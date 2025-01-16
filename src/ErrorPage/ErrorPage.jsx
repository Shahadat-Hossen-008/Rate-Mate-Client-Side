import Lottie from 'lottie-react'
import lottie404 from '../assets/Lottie/404.json'
import { Button } from '@mui/material'
import { Link, Navigate, useNavigate } from 'react-router-dom'


function Error () {
  const navigate = useNavigate()
  const handlebtn = () =>{
    navigate(-1)
  }
  return (
    <div className='flex flex-col items-center'>
        <Lottie animationData={lottie404} className='w-96'></Lottie>
        <p className='mt-4 text-gray-500 dark:text-gray-400'>
            Sorry, the page you are looking for doesnt exist.Here are some
            helpful links:
          </p>
         <div className='flex gap-10 mt-5'>
         <Button onClick={handlebtn} variant='outlined'>Go Back</Button>
         <Link to={'/'}><Button variant='outlined'>Go to Home Page</Button></Link>
         </div>
    </div>
  )
}

export default Error