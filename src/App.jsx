import { Route, Routes } from "react-router"
import Home from "./page/Home"
import UserRegister from "./auth/UserRegister"
import UserLogin from "./auth/UserLogin"
import CaptainLogin from "./auth/CaptainLogin"
import CaptainRegister from "./auth/CaptainRegister"


function App() {

  return (
    <div className="">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-register" element={<UserRegister />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-register" element={<CaptainRegister />} />
    </Routes>
    </div>
  )
}

export default App
