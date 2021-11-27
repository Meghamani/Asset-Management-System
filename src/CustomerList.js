import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Customer from "./Customer";

//destructuring react to get only useState
function CustomerList() {

    var b_style = {
        background: '#707070',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Arial',
        padding: 10
    }
    var u_style = {
        listStyleType: 'none'
    }


    const [Customers, setCustomers] = useState([])

    useEffect(() => {
        console.log('the use effect hook has been executed');
        axios.get('http://localhost:5000/customers')
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setCustomers(response.data)
            })
    }, [])

    return (<>
        <div style={b_style}>
            <h1>Customer List</h1>
            <div >
                <div>
                    <ul >
                        {Customers.map(customer =>
                            <li style={u_style} key={customer.customerId} >
                                <Customer details={customer} />
                            </li>
                        )}

                    </ul>


                </div>
            </div>
            <hr />
        </div>
    </>);
}
export default CustomerList;