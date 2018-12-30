import React, {Component} from 'react'
import './ActionButtons.css'
import './Header.css'


class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          time: props.time,
          desc: 'test',
          temp: '' ,
          temp_high: '',
          temp_low: '',
        };
      }

    componentWillReceiveProps(){
        this.setState({
            time: this.props.time
        })
    }

    componentDidMount(){
        var that = this
        //santa rosa id location
        var url = 'http://api.openweathermap.org/data/2.5/weather?id=5393287&units=imperial&appid=124937c31ac5b9be3ed8666a4de85528'
        fetch(url)
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .then(function(data) {
          console.log(data)
          that.setState({
            desc: data.weather[0].description,
            temp: data.main.temp,
            temp_high: data.main.temp_max,
            temp_low: data.main.temp_min,
          })
        });
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