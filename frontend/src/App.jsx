import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './customerloginpage/loginpage.jsx'
import Requestpage from './customerloginpage/requestpage.jsx'
import Reusepage from './customerloginpage/reusepage.jsx'
import Communitysharingpage from './customerloginpage/communitysharingpage.jsx'
import Mainpage from './customerloginpage/mainpage.jsx'
import Productlifetracking from './customerloginpage/productlifetracking.jsx'
import Productmarketplace from './customerloginpage/productmarketplace.jsx'
import Transactionmanagementpage from './customerloginpage/transactionmanagementpage.jsx'
import Digitalproductpage from './customerloginpage/digitalproductpage.jsx'
import Registers from './components/registers.jsx'
import Admin from '../src/adminloginppage/adminlayout.jsx'
import Admindashboard from './adminloginppage/admindashboard.jsx'
import Adminlogin from './adminloginppage/adminlogin.jsx'
import Adminprofile from './adminloginppage/adminprofile.jsx'
import Categorymanagement from './adminloginppage/categorymanagement.jsx'
import Exchangemanagement from './adminloginppage/exchangemanagement.jsx'
import Productmanagement from './adminloginppage/productmanagement.jsx'
import Reportmanagemnt from './adminloginppage/reportmanagement.jsx'
import Usermanagement from './adminloginppage/usermanagement.jsx'

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
              <Route path="/adminloginpage" element={<Adminlogin />} />
              <Route path="/admin" element={<Admin/>}>
                  <Route path="admindashboard" element={<Admindashboard/>} />
                   <Route path="adminprofile" element={<Adminprofile/>} />
                    <Route path="categorymanagement" element={<Categorymanagement/>} />
                     <Route path="exchangemanagement" element={<Exchangemanagement/>} />
                      <Route path="productmanagement" element={<Productmanagement/>} />
                       <Route path="reportmanagement" element={<Reportmanagemnt/>} />
                        <Route path="usermanagement" element={<Usermanagement/>} />
              </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App