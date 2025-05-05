import Hero from '@/components/sections/Hero'

import Loader from '@/components/shared/Loader'
import { Suspense } from 'react'


const Main = () => {
  return (
    <div className="relative">
      <Loader />
      <Suspense>

        <div className="w-full">
          <Hero />


          
        </div>

      </Suspense>
    </div>
  )
}

export default Main