import React, {Component} from 'react'
import { Icon } from 'semantic-ui-react'
import './ActionButtons.css';

class ActionButtons extends Component {
    render(){
        return(
            <div>  
                <div>
                <Icon.Group size='big' className='padded'>
                <a className='white-button' 
                    href='https://github.com/alopez96'>
                    <Icon color='white' name='github' />
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
                </div> 
            </div>
        )
    }
}

export default ActionButtons;