import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/loginpage.jsx'
import MainPage from './pages/mainpage.jsx'
import CommunitySharingPage from './pages/communitysharingpage.jsx'
import DigitalProductPassport from './pages/digitalproductppassport.jsx'
import ProductLifeTracking from './pages/productlifetracking.jsx'
import ProductMarketplace from './pages/produuctmarketplace.jsx'
import RequestPage from './pages/requestpage.jsx'
import ReusePage from './pages/reusepage.jsx'
import TransactionManagementPage from './pages/transactionmanagementppage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/community" element={<CommunitySharingPage />} />
        <Route path="/passport" element={<DigitalProductPassport />} />
        <Route path="/lifecycle" element={<ProductLifeTracking />} />
        <Route path="/marketplace" element={<ProductMarketplace />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/reuse" element={<ReusePage />} />
        <Route path="/transactions" element={<TransactionManagementPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App