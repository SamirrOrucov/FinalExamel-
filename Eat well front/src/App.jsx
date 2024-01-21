import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import Home from "./pages/Home/Home"
import AddPage from "./pages/Add/AddPage"
import { BasketContext } from "./context/BasketContext"
import Basket from "./pages/Basket/Basket"
import Detail from "./pages/Detail/Detail"
import Wishlist from "./pages/Wishlist/Wishlist"
import EditPage from "./pages/Edit/EditPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/wishlist" element={<Wishlist />} />

            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/edit/:id" element={<EditPage />} />



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
