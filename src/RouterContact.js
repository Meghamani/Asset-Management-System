
function RouterContact() {
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
    var p_style = {
        fontSize: '25px'
    }
    return (<div style={whole_style}>
        <center>
            <h1>Contact us on</h1>
            <p style={p_style}>Phone : 0495 3526217</p>
            <p style={p_style}>email : contactus@gmail.com</p>
        </center>
    </div>
    )
}

export default RouterContact;