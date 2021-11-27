import { useState } from "react";

function RouterRegistration() {
    var submit_style = {
        backgroundColor: "#4CAF50",
        border: 'none',
        color: "white",
        padding: '4px 2px',
        margin: '4px 2 px',
        cursor: 'pointer',
        marginRight:'16px',
        fontSize:'24px'
    }
    var reset_style = {
        backgroundColor: "red",
        border: 'none',
        color: "white",
        padding: '4px 2px',
        margin: '4px 2 px',
        cursor: 'pointer',
        fontSize:'24px'
    }
    var whole_style = {
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        border: '#c1c1c1 solid 1px',
        fontSize:'25px'
    }
    return (
<div style={whole_style}>
        <form >
            <h3>User Registration Form</h3>

            <div>
                <label>Enter Email : </label>
                <input type="text" name="email" placeholder="enter email"
                />
            </div><br />
            <div>
                <label>Enter password : </label>
                <input type="password" name="pwd" placeholder="enter password"
                />
            </div><br />
            <div>
                <label>Confirm Password : </label>
                <input type="password" name="conpwd" placeholder="Re-type Password"
                />
            </div><br />
            <div>
                <label>Enter First Name : </label>
                <input type="text" name="fname" placeholder="enter firstname"
                />
            </div><br />
            <div>
                <label>Enter Last name : </label>
                <input type="text" name="lname" placeholder="enter lastname"
                />
            </div><br />
            <div>
                <label>Enter Mobile Number : </label>
                <input type="tel" name="phone" placeholder="enter phone number"
                />
            </div><br />


            <div>
                <label>Enter Date of joining : </label>
                <input type="date" name="doj" placeholder="enter phone number"
                />
            </div><br />

            <div>
                <input type="submit"  style={submit_style}/>
                <input type="reset" value="cancel" style={reset_style}/>
            </div>
        </form>
        </div>
    )
}

export default RouterRegistration;

