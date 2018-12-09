import React, {Component} from 'react'
import './ActionButtons.css'
import './Header.css'


class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          time: null,
        };
      }

    componentDidMount() {
        //display time and update every second
          setInterval(() => this.setState({
            time: new Date().toLocaleString()
            }), 1000)   
    }

    render(){
        return(
            <div>  
                <div className='header'>
                <h1>Hello Arturo</h1>
                {
                    this.state.time
                    ?<h2>Today is {this.state.time}</h2>
                    :null
                }
                </div> 
            </div>
        )
    }
}

export default Header;