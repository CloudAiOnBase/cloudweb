import { Outlet } from "react-router-dom"
import Header from "@/components/shared/Header"
import Footer from "@/components/shared/Footer"


const RootLayout = () => {
  return (
    <div>
      <Header />

      <main >
        {/* Background */}
        <div className="-z-10 fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-red-600/20 opacity-50" />
          <div className="absolute top-1/4 -left-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-[#f79562]/70 to-[#f79562]/40 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-violet-600/30 to-[#183e99]/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '-6s' }}
          />
          <div className="absolute inset-0 backdrop-blur-[50px] sm:backdrop-blur-[100px]" />
        </div>


        <section className='flex flex-1 h-full pt-[65px]'>
          <Outlet />
        </section>

      </main>


      <Footer />
    </div>
  )
}

export default RootLayout