
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

//destructuring react to get only useState
function DeleteStaff() {

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


    const [Staffs, setStaffs] = useState([])
    const { id } = useParams()

    useEffect(() => {

        axios.delete(`http://localhost:4000/staffs/${id}`)
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setStaffs(response.data)
                window.location='/Stafflist'
            })
    }, [])

    return (<>
       
    </>);
}
export default DeleteStaff;