import Hero from '@/components/sections/Hero'
import Loader from '@/components/shared/Loader'
import { Suspense } from 'react'
import Docs from './Docs'

const Main = () => {
  return (
    <div className="relative">
      <Loader />
      <Suspense>

        <div className="w-full">
          <Hero />
          <Docs />
        </div>

      </Suspense>
    </div>
  )
}

export default Main