import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Footer, Header, Breadcrumbs, Hero } from './component'
import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'


export const SetIsFilled = createContext({
  setActive : () => {}
});

function App() {

  const [isFilled, setIsFilled] = useState(true);

  return (
    <SetIsFilled.Provider value={
      {
        setActive : setIsFilled
      }
    }>
      <Header/>
      <Breadcrumbs />
      {isFilled ? <Hero /> : ""}
      {isFilled ? "" : <Outlet />}
      <Footer />
    </SetIsFilled.Provider>

  )
}

export default App
