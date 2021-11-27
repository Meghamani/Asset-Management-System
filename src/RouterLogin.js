
import { useState } from "react"
import axios from "axios"
//import { useNavigate } from "react-router"

function RouterLogin(){
    localStorage.clear();
    return(
        <div>
            <MyForm/>
        </div>
    )
}

function MyForm(){

    var submit_style = {
        backgroundColor: "#4CAF50",
        border: 'none',
        color: "white",
        padding: '4px 2px',
        margin: '4px 2 px',
        cursor: 'pointer',
        marginRight:'16px',
        fontSize:'24px',
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
        fontSize:'24px',
        height:40,
        width:200
    }
    var whole_style = {
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        border: '#c1c1c1 solid 1px',
        fontSize:'25px'
    }
   
    var text_style={
        height:30,
        width:500
    }
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


    //const navigate=useNavigate();

    const[inputs,setInputs]=useState({});


    function handleChange(event){
        const name=event.target.name;
        const value=event.target.value;

        setInputs(values=>({...values,[name]:value}))
    }

    function handleSubmit(event){
        localStorage.clear();

        event.preventDefault();
        console.log(inputs);

        axios
        .post(`http://localhost:3006/login`,inputs)
        .then(response=>{
           // console.log('login promise was fullfilled')
            //console.log(response)
            
            localStorage.setItem('mytoken',response.data.accessToken);

           // console.log(localStorage.getItem('mytoken'));

           window.location='/StaffList'
        })

.catch(error=>{
    localStorage.clear();

    if(error.response){
        alert(error.response.data);
    }
})
    }
            
    return(
        <center style={whole_style}>
            <form >
           <center> <h1>Staff Login Form</h1></center>
           <table class="table table-striped">
            
                <tr>
               <td> <label> User ID   </label></td>
                <td><input style={text_style} 
                type="text"
                 name="user_id" 
                 value={inputs.user_id || ""}
                 onChange={handleChange}
                 required
                   /></td>
            </tr><br />
            <tr>
               <td> <label>Password   </label></td>
                <td><input style={text_style}
                 type="password"
                  name="password" 
                  value={inputs.password||""}
                  onChange={handleChange}
                  required
                    /></td>
            </tr><br />
            </table>
                <input type="submit" value="Login" style={submit_style}/>
               {/*  <input type="submit" value="Register" style={reset_style}/> */}
          
        </form>
        </center>
    );

}

export default RouterLogin;
