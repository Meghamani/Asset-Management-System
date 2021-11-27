
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

//destructuring react to get only useState
function CustomerDelete() {

    var b_style = {
        background: 'black',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Arial',
        margin: 30,
        padding: 10
    }
    var u_style = {
        listStyleType: 'none'
    }


    const [Customers, setCustomer] = useState([])
    const { id } = useParams()

    useEffect(() => {

        axios.delete(`http://localhost:5000/customers/${id}`)
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setCustomer(response.data)
                window.location='/CustomerList'
            })
    }, [])

    return (<>
       
    </>);
}
export default CustomerDelete;