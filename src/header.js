import React from "react"

class Header extends React.Component {
    render(){
        return(
            <header>
                <img 
                    src = "http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                    alt="problem ?"
                />
                <p>{this.props.name}</p>
            </header>
        )
    }
}

export default Header