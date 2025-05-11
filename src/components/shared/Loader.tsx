import { Mirage } from "ldrs/react"
import 'ldrs/react/Mirage.css'

const Loader = () => {
  return (
    <div className="loader-screen">
        <Mirage
          size="77"
          speed="1.7"
          // color="#f79562"
          color="#06b6d4"
        />
      </div>
  )
}

export default Loader