import React, {Component} from 'react'
import { Icon } from 'semantic-ui-react'
import './ActionButtons.css'
import Header from './Header'

class ActionButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {
          time: null,
          load: null, 
        };
      }

    componentDidMount() {
        //load content simutaneously
        this.setState({
            load: true,
            time: new Date().toLocaleString()
        })
        //update time every second
        setInterval(() => this.setState({
            time: new Date().toLocaleString(),
        }), 1000) 
    }

    render(){
        return(
            <div>{this.state.load
            ?<div>{this.state.time
                ?<Header time={this.state.time}></Header>
                :null}
                <div>
                <Icon.Group size='big' className='padded'>
                <a className='white-button' 
                    href='https://github.com/alopez96'>
                    <Icon name='github' />
                </a>
                </Icon.Group>
                <Icon.Group size='big' className='padded'>
                <a className='white-button'
                    href='https://mail.google.com/mail/u/0/#inbox'>
                    <Icon name='mail' />
                    </a>
                </Icon.Group> 
                <Icon.Group size='big' className='padded'>
                <a className='white-button'
                    href='https://www.reddit.com/'>
                    <Icon name='reddit' />
                </a>
                </Icon.Group> 
                <Icon.Group size='big' className='padded'>
                <a className='white-button'
                href='https://twitter.com/'>
                    <Icon name='twitter' />
                </a>
                </Icon.Group> 
                <Icon.Group size='big' className='padded'>
                <a className='white-button'
                    href='https://www.linkedin.com/feed/'>
                    <Icon name='linkedin' />
                </a>
                </Icon.Group> 
                <Icon.Group size='big' className='padded'>
                <a className='white-button'
                    href='https://calendar.google.com/calendar/r'>
                    <Icon name='calendar' />
                </a>
                </Icon.Group> 
                </div> 
            </div>
            :null}
            </div>
        )
    }
}

export default ActionButtons;