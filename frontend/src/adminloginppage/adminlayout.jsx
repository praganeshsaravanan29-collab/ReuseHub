import { Link, Outlet } from "react-router-dom";

function Adminlayout() {
    return (  
        <p>
            <nav>
                <Link to={"admindashboard"}>admindashboard</Link><br/>
                <Link to={"adminprofile"}>adminprofile</Link><br/>
                <Link to={"categorymanagement"}>categorymanagement</Link><br/>
                <Link to={"exchangemanagement"}>exchangemanagement</Link><br/>
                <Link to={"productmanagement"}>productmanagement</Link><br/>
                <Link to={"reportmanagement"}>reportmanagement</Link><br/>
                <Link to={"usermanagement"}>usermanagement</Link><br/>
            </nav>
            <Outlet></Outlet>
        </p>
    );
}

export default Adminlayout;