import { useState } from "react"
import { About, Contact, Content, Footer, Header, Hero } from "./components" 

 

function App() { 

  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <Header isOpen={isOpen} toggleBurger={() => setIsOpen(prev => !prev)} />
      <main className="bg-black-2 relative">
        <Hero />
        <About />
        <Content />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
