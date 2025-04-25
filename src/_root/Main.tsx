import Hero from '@/components/sections/Hero'
import Loader from '@/components/shared/Loader'
import { Suspense } from 'react'
import Workflows from '@/components/ui/workflows'





const Main = () => {
  return (
    <div className="relative">
      <Loader />
      <Suspense>

        <div className="w-full">
          <Hero />
          <Workflows />
          
        </div>

      </Suspense>
    </div>
  )
}

export default Main