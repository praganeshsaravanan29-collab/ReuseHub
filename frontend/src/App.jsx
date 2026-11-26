import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/loginpage.jsx'
import Requestpage from './pages/requestpage.jsx'
import Reusepage from './pages/reusepage.jsx'
import Communitysharingpage from './pages/communitysharingpage.jsx'
import Mainpage from './pages/mainpage.jsx'
import Productlifetracking from './pages/productlifetracking.jsx'
import Productmarketplace from './pages/productmarketplace.jsx'
import Transactionmanagementpage from './pages/transactionmanagementpage.jsx'
import Digitalproductpage from './pages/digitalproductpage.jsx'
import Registers from './components/registers.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/communitysharingpage" element={<Communitysharingpage/>} />
         <Route path="/digitalproductpassport" element={<Digitalproductpage />} />
          <Route path="/mainpage" element={<Mainpage/>} />
           <Route path="/productlifetracking" element={<Productlifetracking />} />
            <Route path="/productmarketplace" element={<Productmarketplace/>} />
             <Route path="/requestpage" element={<Requestpage/>} />
             <Route path="/reusepage" element={<Reusepage />} />
             <Route path="/transactionmanagement" element={<Transactionmanagementpage />} />
              <Route path="/registers" element={<Registers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App