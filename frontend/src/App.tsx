import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Dashboard from "./components/Dashboard"
import NewOrder from "./components/NewOrder"
import PendingList from "./components/PendingList"
import CompletedOrders from "./components/CompletedOrders"
import { RecoilRoot } from "recoil"

export default function App() {
  return <RecoilRoot>

  <BrowserRouter>
            <Routes>
              <Route  path="/"  element={<AppLayout/>} >
                  <Route index  element={<Dashboard/>} />
                  <Route path="new-order" element={<NewOrder/>} />
                  <Route path="pending-list" element={<PendingList/>} />
                  <Route path="completed-list" element={<CompletedOrders/>} />
              </Route>
            </Routes>
         </BrowserRouter>
  </RecoilRoot>
}