import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Staff from "./Staff";

//destructuring react to get only useState
function StaffList() {

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


    const [staffs, setStaffs] = useState([])

    useEffect(() => {
        console.log('the use effect hook has been executed');
        axios.get('http://localhost:4000/assets')
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setStaffs(response.data)
            })
    }, [])

    return (<>
        <div style={b_style}>
            <h1>Asset List</h1><hr/>
            <div >
                <div>
                    <ul >
                        {staffs.map(staff =>
                            <li style={u_style} key={staff.staffId} >
                                <Staff details={staff} />
                            </li>
                        )}

                    </ul>


                </div>
            </div>
            <hr />
        </div>
    </>);
}
export default StaffList;