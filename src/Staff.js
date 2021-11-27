import { Link } from "react-router-dom"


function Staff(props) {
    var di_style = {
        color: '#d1d8e0',
        margin: 30,
        backgroundColor: 'green',
        fontSize: 20,
        width: 200,
        height: 40,
        borderRadius: 6,
        border: '2px solid white',
        color: 'white'


    }

    var link_style = {
        textDecoration: 'none',

    }
    var b2_style = {
        color: 'black',
        margin: 30,
        backgroundColor: '#FF6666',
        fontSize: 20,
        width: 200,
        height: 40,
        borderRadius: 6,
        border: '2px solid white'
    }
    var d_style = {
        display: 'flex',
        justifyContent: 'center',
        background: '#A0A0A0',
        color: 'black',
        fontSize: 20,
        border: '2px solid white',
        magin: 30,
        width: '95%'


    }
    var n_style = {
        display: 'block'

    }
    var h_style = {
        display: 'flex',

    }
    console.log(props)
    return (
        <>
            <center>
                <div style={d_style}>
                    <div >

                        <h1 style={h_style}> Model Name : {props.details.am_model}</h1><hr/>
                        <h3 style={h_style}> Warranty : {props.details.am_waranty} year</h3>
                        <h3 style={h_style}> Valid from: {props.details.am_from} </h3>
                        <h3 style={h_style}> Valid upto : {props.details.am_waranty} </h3>
                        {/* <p style={h_style}>{props.details.last_name}</p>
                    <p style={h_style}>{props.details.email}</p>
                    <p style={h_style}>{props.details.mobile_no}</p>
                    <p style={h_style}>{props.details.date_of_joining}</p> */}


                    </div>
                    <div style={n_style} >
                       

                        
                       
                    </div>
                </div>
            </center>
        </>
    )
}
export default Staff;