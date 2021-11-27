import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


//importing all the components

import RouterHome from './RouterHome';
//import RouterRegistration from "./RouterRegistration";
import RouterLogin from "./RouterLogin"
import RouterContact from "./RouterContact";
import RouterCustomer from "./RouterCustomer";
import StaffList from "./StaffList";
import DetailsEntryForm from "./DetailsEntryForm"
import StaffDetails from "./StaffDetails";
import DeleteStaff from "./DeleteStaff";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import CustomerDelete from "./Customerdelete";
import StaffEdit from "./StaffEdit";
import CustomerEdit from "./CustomerEdit"
//import RouterApp  from "./RouterApp"
//import ReduxDemo from "./ReduxDemo";
import UserList from "./UserList";
function RouterApp() {
    return (
        <div>
            <MyRouter />
        </div>
    );
}

function MyRouter() {
    var h_style = {
        color: "yellow",
        backgroundColor: "DarkSlateGrey",
        height: 50,
        textAlign: 'center',
        padding: 2

    }
    var h3_style = {
        color: "#282828",
        fontSize: '30px',
        fontFamily: 'Times New Roman, Times, serif',
        fontStyle:'normal'
    }
    var div_style = {
        backgroundColor: 'thistle',
        textDecoration: 'none',
        fontFamily: '"Times New Roman", Times, serif',
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        border: '#c1c1c1 solid 1px',
        color:'#ffff99'
    }

    var ul_style = {
        listStyleType: "None",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#333",
        textDecoration: 'None'
    }

    var li_style = {
        float: "left"

    }

    var link_style = {
        display: "block",
        color: "white",
        textAlign: "center",
        padding: '14px 16px',
        textDecoration: 'none',
        fontSize: '30px',
        aHover: 'white'
    }
    var footer_style = {
        textAlign: "center",
        padding: '3px',
        backgroundColor: "DarkSalmon",
        color: "white"
    }
    return (
        <Router>
            <div>

                <ul style={ul_style}>
                    <li style={li_style}>
                        <Link style={link_style} to="/RouterApp">Home</Link>
                    </li>
                    <li style={li_style}>
                        <Link  style={link_style}to="/RouterHome">About</Link>
                    </li>

                    <li style={li_style}><Link style={link_style} to="/DetailsEntryForm">
                        User Registration
                    </Link></li>
                    <li style={li_style}><Link style={link_style} to="/RouterLogin">
                        User Login
                    </Link></li>
                    <li style={li_style}><Link style={link_style} to="/UserList">
                        My Profile
                    </Link></li>

                   


                    <li style={li_style}><Link style={link_style} to="/StaffList">
                        Asset List
                    </Link></li>
                  {/*   <li style={li_style}><Link style={link_style} to="/RouterCustomer">
                        Customer registration
                    </Link></li>
                    <li style={li_style}><Link style={link_style} to="/CustomerList">
                        Customer List
                    </Link></li> */}
                    <li style={li_style}><Link style={link_style} to="/RouterContact">
                        Contact Us
                    </Link></li>
                   {/*  <li style={li_style}><Link style={link_style} to="/ReduxDemo">
                        Redux Demo
                    </Link></li> */}
                </ul>

            </div>
            <h1 style={h_style}>ASSET MANAGEMENT SYSTEM</h1>
            <div style={div_style}><h4 style={h3_style}>Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
            </div>
            <br />

            <Routes>
           
                <Route path="/RouterHome" element={<RouterHome />} />
                <Route path="/DetailsEntryForm" element={<DetailsEntryForm />} />
                <Route path="/RouterLogin" element={<RouterLogin />} />
                <Route path="/RouterContact" element={<RouterContact />} />
                <Route path="/RouterCustomer" element={<RouterCustomer />} />
                <Route path="/StaffList" element={<StaffList />} />
                <Route path="/Staffdetails/:id" element={<StaffDetails />} />
                <Route path="/DeleteStaff/:id" element={<DeleteStaff />} />
                <Route path="/CustomerList" element={<CustomerList/>} />
                <Route path="/CustomerDetails/:id" element={<CustomerDetails/>}/>
                <Route path="/CustomerDelete/:id" element={<CustomerDelete/>}/>
                <Route path="/StaffEdit/:id" element={<StaffEdit/>}/>
                <Route path="/CustomerEdit/:id" element={<CustomerEdit/>}/>
                <Route path="/UserList" element={<UserList/>}/>
             
            </Routes><br />
            <footer style={footer_style}>
                copyright@experion technologies
            </footer>
        </Router >

    );

}

export default RouterApp;