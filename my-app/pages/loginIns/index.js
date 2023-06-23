
import { Inter } from 'next/font/google'
import LoginForm from './LoginForm'
import CarouselPage from './CarouselPage'
import AppFooter from './AppFooter'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  
    
    
<div className="h-screen w-full p-20">

  <div className="w-full h-full  ">

          <div className="  flex justify-center items-center   ">

                <div className="max-w-xl  justify-center items-center  hidden lg:block ">
                  <CarouselPage />
                </div>

                <div className="max-w-sm  flex justify-center items-center ">
                  <LoginForm />
                </div>

          </div>

  </div>

          <div className=" w-full  flex justify-center items-top  -pt-20 -mt-20">
            <AppFooter />
          </div>

</div>

  )
}
