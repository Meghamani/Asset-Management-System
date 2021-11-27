import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

//destructuring react to get only useState
function StaffDetails() {

    var b_style = {
        background: 'grey',
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Arial',
        marginLeft: '25%',
        padding: 10,
        width: '50%',
        align: 'center',
        justifyContent: 'center'
    }
    var u_style = {
        listStyleType: 'none'
    }

    var di_style = {
        color: '#d1d8e0',
        margin: 30,
        backgroundColor: '#0fb9b1',
        fontSize: 20,
        width: 300,
        height: 40,
        borderRadius: 3,
    }

    var li_style = {
        textDecoration: 'none'
    }
    var b2_style = {
        color: 'black',
        margin: 30,
        backgroundColor: '#FF6666',
        fontSize: 20,
        width: 200,
        height: 40,
        borderRadius: 6,
        border: '2px solid white'
    }


    const [Staffs, setStaffs] = useState([])
    const { am_id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`http://localhost:4000/assets/${am_id}`)
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setStaffs(response.data)
            })
    }, [])

    return (<>
        <div style={b_style}>
            <h1>Staff List</h1>
            <hr/>
            <h1>Deatils of {Staffs.am_model}</h1>
            <h2> First Name : {Staffs.am_waranty}</h2>
            <h2>Last Name : {Staffs.last_name}</h2>
            <h2>Email ID : {Staffs.email}</h2>
            <h2>Mobile Number : {Staffs.mobile_no}</h2>
            <h2>Date of Joining : {Staffs.date_of_joining} </h2>
            <h2>Password : {Staffs.password}</h2>

            <div >
                <button style={b2_style} type="button"
                    onClick={() => navigate(`/StaffEdit/${Staffs.id}`)} >
                    Edit User
                </button>
            </div>

            <button style={di_style}> <a style={li_style} href="/StaffList"> Go Back to Staff List</a></button>
            
        </div>
    </>);
}
export default StaffDetails;