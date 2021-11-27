import { useState } from "react";
import axios from "axios";




function DetailsEntryForm() {
    var submit_style = {
        backgroundColor: "#4CAF50",
        border: 'none',
        color: "white",
        padding: '4px 2px',
        margin: '4px 2 px',
        cursor: 'pointer',
        marginRight: '16px',
        fontSize: '24px',
        height: 40,
        width: 200
    }
    var reset_style = {
        backgroundColor: "red",
        border: 'none',
        color: "white",
        padding: '4px 2px',
        margin: '4px 2 px',
        cursor: 'pointer',
        fontSize: '24px',
        height: 40,
        width: 200
    }
    var whole_style = {
        borderRadius: '5px',
        backgroundColor: '#A0A0A0',
        padding: '20px',
        border: '#c1c1c1 solid 1px',
        fontSize: '25px',
        width: '60%',
        justifyContent: 'center',
        marginLeft: '20%'
    }

    var text_style = {
        height: 30,
        width: 500
    }

    const [staffs, setStaffs] = useState({})
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setStaffs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(staffs);

        axios.post('http://localhost:3002/user', staffs)
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);
                setStaffs(response.data)
                window.location = '/StaffList';
            })
    }

    return (
        <center style={whole_style}>
            <form onSubmit={handleSubmit}>
                <center> <h1>User Refistartion Form</h1></center>
                <table class="table table-striped">



                    <tr>

                        <td>
                            <label> First Name </label></td>
                        <td><input style={text_style} type="text" name="first_name" placeholder="enter firstname" onChange={handleChange}
                            value={staffs.first_name || ""} /></td>

                    </tr>
                    <br />
                    <tr>
                        <td> <label> Last name </label></td>
                        <td> <input style={text_style} type="text" name="last_name" placeholder="enter lastname" onChange={handleChange}
                            value={staffs.last_name || ""} /></td>
                    </tr>
                    <br />
                    <tr>

                        <td> <label>Email </label></td>
                        <td>  <input style={text_style} type="email" name="email" placeholder="enter email address" onChange={handleChange}
                            value={staffs.email || ""} /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                            <label>Mobile number </label></td>
                        <td> <input style={text_style} type="tel" name="mobile_no" placeholder="enter mobile number" onChange={handleChange}
                            value={staffs.mobile_no || ""} /></td>

                    </tr>
                    <br />
                    <tr>
                        <td> <label>Date of Birth</label></td>
                        <td>  <input style={text_style} type="date" name="date_of_joining" onChange={handleChange} value={staffs.date_of_joining} />
                        </td>

                    </tr>
                    <br />
                    <tr>
                        <td><label>Password </label></td>
                        <td> <input style={text_style} type="password" name="password" placeholder="enter password" onChange={handleChange}
                            value={staffs.password || ""} /></td>
                    </tr>
                    <br />


                </table>


                <input type="submit" value="Save" style={submit_style} />
                <input type="reset" value="Cancel" style={reset_style} />





            </form>
        </center>
    )
}

export default DetailsEntryForm;