import axios from "axios"
import { useState } from "react"

function RouterCustomer() {
    var whole_style = {
        borderRadius: '5px',
        backgroundColor: '#A0A0A0',
        padding: '20px',
        border: '#c1c1c1 solid 1px',
        fontSize:'25px',
        width:'60%',
        justifyContent:'center',
        marginLeft:'20%'
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
        height:40,
        width:200
    }
    var reset_style = {
        backgroundColor: "red",
        border: 'none',
        color: "white",
        padding: '4px 2px',
        margin: '4px 2 px',
        cursor: 'pointer',
        fontSize: '24px',
        height:40,
        width:200
    }

    var text_style={
        height:40,
        width:500
    }
    

    const [Customer, setCustomer] = useState({})
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setCustomer(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(Customer);

        axios.post('http://localhost:5000/customers', Customer)
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);
                setCustomer(response.data)
                window.location = '/CustomerList';
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <center style={whole_style}>
            <center> <h1>Customer Details Entry Form</h1></center>
                        
                <table class="table table-striped" >
               
                       <tr>
                          <td>  <label>Enquiry Date  </label></td>
                            <td><input style={text_style} type="date" name="enqdate" value={Customer.enqdate || ""} onChange={handleChange}
                            /></td>
                        </tr><br />

                        <tr>
                            <td><label>First Name  </label></td>
                            <td> <input style={text_style} type="text" name="first_name" placeholder="enter firstname" onChange={handleChange}
                                value={Customer.first_name || ""} /></td>

                        </tr><br />
                        <tr>
                            <td><label>Last name </label></td>
                            <td> <input style={text_style} type="text" name="last_name" placeholder="enter lastname" onChange={handleChange}
                                value={Customer.last_name || ""} /></td>

                        </tr><br />

                        <tr>
                            <td> <label>Age  </label></td>
                            <td> <input style={text_style} type="number" name="age" placeholder="enter age" onChange={handleChange} value={Customer.age || ""} /></td>

                        </tr><br />

                        <tr>
                            <td> <label> Date of Birth  </label></td>
                            <td> <input style={text_style} type="date" name="date_of_birth" placeholder="enter date of birth" onChange={handleChange}
                                value={Customer.date_of_birth || ""} /></td>

                        </tr>
                        <br /><tr>
                            <td> <label>Highest Qualification  </label></td>
                            <td><input style={text_style} type="text" name="highest_qualification" placeholder="enter highest qualification" onChange={handleChange}
                                value={Customer.highest_qualification || ""} /></td>

                        </tr><br />

                        <tr>
                            <td> <label> Marks in Percentage </label></td>
                            <td> <input style={text_style} type="text" name="marks" placeholder="enter marks in percentge" onChange={handleChange}
                                value={Customer.marks || ""} /></td>

                        </tr><br />

                        </table>
                        <input type="submit" value="Save" style={submit_style} />
                        <input type="reset" value="Cancel" style={reset_style} />



                    
             
            </center>
        </form>
    )
}

export default RouterCustomer;