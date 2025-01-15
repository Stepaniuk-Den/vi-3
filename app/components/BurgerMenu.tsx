// "use client"

// import { ModalProvider } from "./ModalProvider"
import Navigation from "./Navigation"

const BurgerMenu = () => {
  return (
    <div className="w-full h-full bg-customMarsala flex items-center justify-center">
      <div className='container'>
        <Navigation />
      </div>
    </div>
  )
}

export default BurgerMenu
