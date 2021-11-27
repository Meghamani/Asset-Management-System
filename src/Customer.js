import { Link } from "react-router-dom"


function Customer(props) {
    var di_style = {
        color: '#d1d8e0',
        margin: 30,
        backgroundColor: 'green',
        fontSize: 20,
        width: 200,
        height: 40,
        borderRadius: 6,
        border: '2px solid white',
        color:'white'


    }

    var link_style={
        textDecoration:'none'
    }
    var b2_style={
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

                    <h3 style={h_style}> Customer Name : {props.details.first_name} {props.details.last_name}</h3>
                   


                </div>
                <div style={n_style} >
                    <div>
                        <button style={di_style}>
                            <Link style={link_style} to={`/CustomerDetails/${props.details.id}`}>
                                View Details
                            </Link>
                        </button>
                    </div>

                    <div >
                        <button style={b2_style}>
                            <Link style={link_style} to={`/CustomerDelete/${props.details.id}`}>
                                Delete Staff
                            </Link>
                        </button>
                    </div>
                </div>
             </div>
            </center>
        </>
    )
}
export default Customer;