import { useState } from "react";
function Form() {
    return (
        <div>
            <DetailsEntryForm/>
        </div>
    )
}

function DetailsEntryForm(){
    const [inputs, setInputs] = useState({})
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);

        axios.post('http://localhost:3001/Staff')
        .then(response=>{
            console.log('Promise fullfilled');
            console.log(response);
 
            setStaffs(response.data)
        })
          
    }

return(
    <form onSubmit={handleSubmit}>
         <div>
             <h3>Staff rregistartion Form</h3>
               

            <div>
                <label>Enter First Name : </label>
                <input type="text" name="first_name" placeholder="enter firstname" onChange={handleChange}
                    value={inputs.fname || ""} required />
            </div><br />
            <div>
                <label>Enter Last name : </label>
                <input type="text" name="last_name" placeholder="enter lastname" onChange={handleChange}
                    value={inputs.lname || ""}  required/>
            </div><br />

            <div>
                <label>Email ID : </label>
                <input type="email" name="email" placeholder="enter email" onChange={handleChange}
                    value={inputs.age || ""} />
            </div><br />

            <div>
                <label>Mobile Number: </label>
                <input type="tel" name="mobile_no" placeholder="enter mobile number" onChange={handleChange}
                    value={inputs.dob || ""} />
                    </div>
                    <br/><div>
                <label>Password: </label>
                <input type="password" name="passwword" placeholder="enter highest qualification" onChange={handleChange}
                    value={inputs.highest || ""} />
            </div><br />

            <div>
                <label>Enter Marks in Percentage : </label>
                <input type="text" name="marks" placeholder="enter marks in percentge" onChange={handleChange}
                    value={inputs.marks || ""} />
            </div><br />

         <div>
             <input type="submit" value="Save"/>
             <input type="reset" value="Cancel"/>
         </div>

</div>


    </form>
)
}

export default Form;