import Hero from '@/components/sections/Hero'
// import Roadmap from '@/components/sections/Roadmap'
import Loader from '@/components/shared/Loader'
import { Suspense } from 'react'
// import Vision from '@/components/sections/Vision'
// import Services from '@/components/sections/Services'
// import Workflows from '@/components/sections/Workflows'

const Main = () => {
  return (
    <div className="relative">
      <Loader />
      <Suspense>

        <div className="w-full">
          <Hero />
          {/* <Workflows /> */}
          {/* <About /> */}
          {/* <Services />
          <Vision />
          <Roadmap /> */}

          
        </div>

      </Suspense>
    </div>
  )
}

export default Main