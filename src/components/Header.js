import React, {Component} from 'react'
import './ActionButtons.css'
import './Header.css'


class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          time: props.time
        };
      }

    componentWillReceiveProps(){
        this.setState({
            time: this.props.time
        })
    }

    render(){
        return(
            <div>
                <div className='header'>
                <h1>Hello Arturo</h1>
                    <h2>Today is {this.state.time}</h2>
                </div> 
            </div>
        )
    }
}

export default Header;