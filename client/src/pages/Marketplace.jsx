import { ArrowLeftIcon } from 'lucide-react'
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Marketplace = () => {

  const navigate = useNavigate()

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32'>

      <div className='flex items-center justify-between text-slate-500'>
        <button onClick={()=>{navigate('/')}}>
          <ArrowLeftIcon className="size=4"/>
          Back to Home
        </button>
        <button>Filters</button>
      </div>

      <div></div>
    </div>
  )
}

export default Marketplace
