import { Mirage } from "ldrs/react"
import 'ldrs/react/Mirage.css'

const Loader = () => {
  return (
    <div className="loader-screen">
        <Mirage
          size="60"
          speed="1.7"
        />
      </div>
  )
}

export default Loader