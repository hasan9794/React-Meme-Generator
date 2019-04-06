import React from "react"

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemesImg: []
        }
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemesImg: memes
                })
            })
        }
        
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form">
                    <input name="topText" placeholder="Enter Top Text" onChange={this.handleChange.bind(this)} />
                    <input name="bottomText" placeholder="Enter Bottom Text" onChange={this.handleChange.bind(this)} />
                    <button>Gen</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator