import React, {Component} from 'react'
import logo from './logo.svg'
import { Button, Icon } from 'semantic-ui-react'
import './ActionButtons.css';
import styled from 'styled-components';

class ActionButtons extends Component {
    render(){
        return(
            <div>  
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                <Icon.Group size='big' className='padded'>
                    <Icon color='white' name='github' />
                </Icon.Group>
                <Icon.Group size='big' className='padded'>
                    <Icon name='mail' />
                </Icon.Group> 
                <Icon.Group size='big' className='padded'>
                    <Icon name='reddit' />
                </Icon.Group> 
                <Icon.Group size='big' className='padded'>
                    <Icon name='twitter' />
                </Icon.Group> 
                <Icon.Group size='big' className='padded'>
                    <Icon name='linkedin' />
                </Icon.Group> 
                </div> 
            </div>
        )
    }
}

export default ActionButtons;