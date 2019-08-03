import React, {Component} from 'react'
import './ActionButtons.css'
import './Header.css'

import { API_KEY } from '../key';


class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          time: props.time,
          desc: 'test',
          temp: '' ,
          temp_high: '',
          temp_low: '',
          city: '',
        };
      }

    componentWillReceiveProps(){
      //get time from ActionButtons.js
        this.setState({
            time: this.props.time
        })
    }

    
    componentDidMount() {
      //get current location
      navigator.geolocation.getCurrentPosition(
        position => {
          this.fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        error => {
          this.setState({
            error: 'Error Getting Weather Condtions'
          });
        }
      );
    }

    fetchWeather(lat, lon) {
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`;
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({              
          desc: data.weather[0].description,
          temp: data.main.temp,
          city: data.main.name,
          temp_high: data.main.temp_max,
          temp_low: data.main.temp_min,
        });
      })
      .catch(er => {console.debug('error', er)})
    }

    render(){
        return(
            <div>
                <div className='header'>
                <h1>Hello Arturo</h1>
                    <h2>Today is {this.state.time}</h2>
                </div>
                <div className='header'>
                    <div className='space'>
                        <h2 className='inline'>{this.state.desc}</h2>
                        <h2 className='inline'>{this.state.temp} F</h2>
                    </div>
                    <div className='space'>
                        <h2 className='inline'>Max</h2>
                        <h2 className='inline'>{this.state.temp_high} F</h2>
                        <h2 className='inline'>Min</h2>
                        <h2 className='inline'>{this.state.temp_low} F</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;