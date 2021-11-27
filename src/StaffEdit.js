import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";


function StaffEdit() {
    const { id } = useParams()
    return (
        <div>
            <h1>Staff Edit</h1>
            <MyForm id={id} />
        </div>
    )



    function MyForm(props) {

        const [Staffs, setStaffs] = useState([])

        useEffect(() => {

            axios.get(`http://localhost:4000/staffs/${props.id}`)
                .then(response => {
                    console.log('Promise fullfilled');
                    console.log(response);

                    setStaffs(response.data)
                })
        }, [])

        function handleChange(event) {
            const name = event.target.name;
            const value = event.target.value;

            setStaffs(values => ({ ...values, [name]: value }))
        }

        function handleSubmit(event) {
            event.preventDefault();
            console.log(Staffs);

            axios.put(`http://localhost:4000/staffs/${props.id}`, Staffs)
                .then(response => {
                    console.log('Promise fullfilled');
                    console.log(response);
                    setStaffs(response.data)
                    alert('Staff detals has been updated')
                })
        }

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
            backgroundColor: '#f2f2f2',
            padding: '20px',
            border: '#c1c1c1 solid 1px',
            fontSize: '25px'
        }

        var text_style = {
            height: 30,
            width: 500
        }

        return (
            <center style={whole_style}>
                <form onSubmit={handleSubmit}>
                    <table class="table table-striped">
                        <tr>
                            <td>
                                <center> <h1>Staff Edit  Form</h1></center>
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <label>Enter First Name : </label></td>
                            <td><input style={text_style} type="text" name="first_name" placeholder="enter firstname" onChange={handleChange}
                                value={Staffs.first_name || ""} /></td>

                        </tr>
                        <br />
                        <tr>
                            <td> <label>Enter Last name : </label></td>
                            <td> <input style={text_style} type="text" name="last_name" placeholder="enter lastname" onChange={handleChange}
                                value={Staffs.last_name || ""} /></td>
                        </tr>
                        <br />
                        <tr>

                            <td> <label>Email : </label></td>
                            <td>  <input style={text_style} type="email" name="email" placeholder="enter age" onChange={handleChange}
                                value={Staffs.email || ""} /></td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <label>Mobile number : </label></td>
                            <td> <input style={text_style} type="tel" name="mobile_no" placeholder="enter date of birth" onChange={handleChange}
                                value={Staffs.mobile_no || ""} /></td>

                        </tr>
                        <br />
                        <tr>
                            <td> <label>Date of joining</label></td>
                            <td>
                                <input style={text_style}
                                    type="text" name="date_of_joining"
                                    onChange={handleChange}
                                    value={Staffs.date_of_joining}
                                    onFocus={(e) => (e.currentTarget.type = "date")}
                                    onBlur={(e) => (e.currentTarget.type = "text")} />
                            </td>

                        </tr>
                        <br />
                        <tr>
                            <td><label>Password: </label></td>
                            <td> <input style={text_style} type="password" name="password" placeholder="enter highest qualification" onChange={handleChange}
                                value={Staffs.password || ""} /></td>
                        </tr>
                        <br />


                    </table>


                    <input type="submit" value="Save" style={submit_style} />
                    <input type="reset" value="Cancel" style={reset_style} />





                </form>
            </center>
        )
    }
}
export default StaffEdit;