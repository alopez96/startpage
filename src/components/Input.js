import React, {Component} from 'react'

class Input extends Component {
      
    
    render(){
        console.log(this.props.add)
        return(
            <div>
                <form>
                    <input type='text' name='url' ></input>
                </form>
                
                <button id="myBtn">Open Modal</button>
                <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Input;