function RouterHome() {
    var whole_style = {
        borderRadius: '5px',
        backgroundColor: '#A0A0A0',
        padding: '20px',
        border: '#c1c1c1 solid 1px',
    }
    var p_style={
        fontSize:'30px',
        fontFamily:'Times New Roman", Times, serif',
        overFlow:'hidden'
    }
    return (
        <div style={whole_style}>
            <h1>About Us</h1>
            <p style={p_style}>Contrary to popular belief, Lorem
                Ipsum is not simply random text. It
                has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000
                years old. Richard McClintock, a Latin professor
                at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
                the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
                1.10.32.</p>
        </div>
    );
}

export default RouterHome;