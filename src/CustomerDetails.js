
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
//import Customer from "./Customer";

//destructuring react to get only useState
function CustomerDetails() {

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

    var b2_style={
        color: 'black',
        margin: 30,
        backgroundColor: '#FF6666',
        fontSize: 20,
        width: 200,
        height: 40,
        borderRadius: 6,
        border: '2px solid white'
    }

    var li_style = {
        textDecoration: 'none'
    }


    const [Customers, setCustomers] = useState([])
    const { id } = useParams()
    const navigate=useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:5000/customers/${id}`)
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setCustomers(response.data)
            })
    }, [])

    return (<>
        <div style={b_style}>
            <h1><b>Customer List</b></h1>
         
            <h2>Deatils of {Customers.first_name}</h2>
            <h2>Enquiry Date{Customers.enqdate}</h2>
            <h2> First Name : {Customers.first_name}</h2>
            <h2>Last Name : {Customers.last_name}</h2>
            <h2>Age  : {Customers.age}</h2>
            <h2>Date of Birth  : {Customers.date_of_birth}</h2>
            <h2>Highest Qualification  : {Customers.highest_qualification}</h2>
            <h2>Marks in percentage : {Customers.marks} %</h2>

            <div >
                <button style={b2_style} type="button"
                    onClick={() => navigate(`/CustomerEdit/${Customers.id}`)} >
                    Edit User
                </button>
            </div>

            <button style={di_style}> <a style={li_style} href="/Customerlist"> Go Back to Customer List</a></button>
            <hr />
        </div>
    </>);
}
export default CustomerDetails;