// import preact
import { h, render, Component } from 'preact';
import {weatherApi} from '../utils';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
import style_iphone_refresh from '../buttonRefresh';
import style_iphone_menu from '../buttonMenu/';
import Bar from '../vertBar';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
//import Button from '../button';
import ButtonRefresh from '../buttonRefresh';
import ButtonMenu from '../buttonMenu';
//import Button from 'simple-react-button';
//import Search from '../autocomp';


export default class Iphone extends Component {

  constructor(props) {
    super(props);
    this.getWeather("e1 1es");
    this.state = {
      error: null,
      loaded: false,
      display: true,
      unitKm: true,
      unitC: true
    };
  }

  componentWillMount() {
    this.getWeather('autoip');
  }

  getWeather(query) {
    this.setState({
      error: null,
      loaded: false
    });
    weatherApi(query)
      .then(response => {
        if (response.response.error) {
          this.setState({
            error: 'Unable to get weather. Please try again.'
          })
        } else {
          let current = response.current_observation;
          this.setState({
            display: false,
            tempc: current.temp_c,
            tempf: current.temp_f,
            locationlat: current.display_location.latitude,
            locationlon: current.display_location.longitude,
            icon_url: current.icon_url,
            time: current.observation_time,
            pressure: current.pressure_mb,
            visibilitykm: current.visibility_km,
            visibilitymi: current.visibility_mi,
            humidity: current.relative_humidity,
            windspeedkph: current.wind_kph,
            windspeedmph: current.wind_mph,
            winddir: current.wind_dir,
            winddeg: current.wind_degrees,
            timeOb: current.observation_time,
            windchillC: current.windchill_c,
            windchillF: current.windchill_f,
            feelslikeC: current.feelslike_c,
            feelslikeF: current.feelslike_f,
            uv: current.UV,
            icon: current.icon,
          });
        }
        this.setState({ loaded: true });
      });
  }

  switchSpeedUnit(){

  }

  switchTemptUnit(){

  }

  renderError() {
    return (
      <div className="center-block">
        <p className="text-danger">{this.state.error}</p>
      </div>
    )
  }
//    renderPageTwo() {
//		// check if temperature data is fetched, if so add the sign styling to the page
////		const tempStyles = this.state.temp_current ? `${style.temp_current} ${style.filled}` : style.temp_current;
////        const borderRadiusStyle = { borderRadius: 2 }
//		// display all weather data
//		return (
//            
//			<div class={ style.container } >
//                <div class={ style.top }>
//                    <div class={ style.nav }>    
//                        <div class={ style.menu }>
//                                 <img class={style.image} src="../../assets/icons/menuIcon.png" alt="menu"/>
//                        </div>
//                        <div>
//                            <p class={style.title}>Settings</p>
//                        </div>
//                    </div>
//                            <div class={ style.refresh }>
//                                    <img class={style.image} class={style.refre} src="../../assets/icons/refresh.png" alt="refresh" />
//                            </div>  
//                    
// 				       </div>
//                            <div class={style.domainCont}>
//                                             <div class={style.toggTitle}>
//                                                <p>Units:</p>
//                                            </div>
//                                            <div>
//                                            <label class={togStyle.weatherSwitch}>
//                                                        <input type="checkbox" checked onClick={this.foo()}/>
//                                                        <span class={togStyle.weatherSlider}></span>
//                                                </label>
//                                            </div>
//                                                <div>
//                                                    <label class={togStyle.speedSwitch}>
//                                                            <input type="checkbox" checked /> 
//                                                            <span class={togStyle.speedSlider}></span>
//                                                    </label>
//                                                </div> 
//                                <div class={style.divider}>
//                                    <br/>
//                                    <hr/>
//                                </div>
//            
//                                <div class={style.locationContainer}>
//                                    <p class={style.locationSubtitle}>Favourite Locations: </p>
//                                </div>
//            
//                                <div class={style.locations}>    
//                                            <select class={style.locationChoice}>
//                                                <option value="select">Select...</option>
//                                                <option value="SH">Southampton</option>
//                                                <option value="DVN">Devon</option>
//                                                <option value="CRNWL">Cornwall</option>
//                                            </select>
//                                        </div>
//                                
//                                <div class={style.divider}>
//                                    <br/>
//                                    <hr/>
//                                </div>
//            
//                                <div class={style.futureForcast}>
//            
//                                    <div>
//                                        <p class={style.forecast}>Future Forecast: </p>
//                                    </div>
//            
//                                    <div class={style.forcOne}>
//                                        
//                                    </div>
//            
//                                    <div class={style.forcTwo}>
//
//                                    </div>
//        
//                                    <div class={style.forcThree}>
//                                        
//                                    </div>
//                            
//                                </div>
//            
//                            </div>             
//            </div>
//                                
//		);
//	}
//        
  renderWeather() {
    return (
      <div class={style.container}>
        <div class={style.first_container}>
          <div class={style.first_container_menu}>
            <div class={style_iphone_menu.container_menu}>
              {<ButtonMenu class={style_iphone_menu.container_button}/ >}
            </div>
          </div>
          <div class={style.first_container_filler}>
          </div>
          <div class={style.first_container_reset}>
            <div class={style_iphone_refresh.container_refresh}>
              {<ButtonRefresh class={style_iphone_refresh.container_button}/ >}
            </div>
          </div>
        </div>
        <div class={style.second_container}>
          <div class={style.second_container_fillerleft}>
          </div>
          <div class={style.second_container_currenttemp}>
            <div class={style.currentTemp}>
              <h4> {this.state.tempc}&deg;C</h4>
            </div>
          </div>
          <div class={style.second_container_highlowtemp}>
            <div class={style.temp_max}>
              <h4> Wind Chill: {this.state.windchillC}&deg;C</h4>
            </div>
            <div class={style.temp_min}>
              <h4> Feels Like: {this.state.feelslikeC}&deg;C</h4>
            </div>
          </div>
          <div class={style.second_container_fillerright}>
          </div>
        </div>
        <div class={style.third_container}>
          <div class={style.third_container_humidity}>
            <div class={style.humidity}>
              <Bar humidity={this.state.humidity} />
            </div>
          </div>
          <div class={style.third_container_windthing}>
            <div class={style.third_container_windspeed}>
              <div class={style.windspeed}>
                <h4> Wind Speed: {this.state.windspeedkph}kph</h4>
              </div>
            </div>
            <div class={style.third_container_compass}>
              <div class={style.compass}>
                <img class={style.compassTwo} src={require('../img/CompassRose.svg')} alt="compass"/>
              </div>
            </div>
            <div class={style.third_container_windstats}>
              <div class={style.third_container_winddir}>
                <div class={style.winddir}>
                  <h4> Wind Direction: {this.state.winddir} </h4>
                </div>
              </div>
              <div class={style.third_container_winddeg}>
                <div class={style.winddeg}>
                  <h4>Wind Bearing: {this.state.winddeg}&deg; </h4>
                </div>
              </div>
            </div>
          </div>
          <div class={style.third_container_fillerright}>
          </div>
        </div>
        <div class={style.fourth_container}>
          <div class={style.fourth_container_weather}>
            <div class={style.fourth_container_icon_url}>
              <img class={style.icon_url}  src={this.state.icon_url} alt="weather icon" />
            </div>
            <div class={style.fourth_container_icon}>
              <h4> {this.state.icon} </h4>
            </div>
          </div>
          <div class={style.fourth_container_misc}>
            <div class={style.fourth_container_misc_filler_right_top}>
            </div>
            <div class={style.fourth_container_pressure}>
              <h4> Pressure: {this.state.pressure} mb </h4>
            </div>
            <div class={style.fourth_container_visibility}>
              <h4> Visibility: {this.state.visibilitykm} km </h4>
            </div>
            <div class={style.fourth_container_uv}>
              <h4> UV index: {this.state.uv} </h4>
            </div>
            <div class={style.fourth_container_misc_filler_right_bottom}>
            </div>
          </div>
        </div>
        <div class={style.fifth_container}>
          <div class={style.fifth_container_gps}>
            <h4> Co-ordinates: {this.state.locationlat}, {this.state.locationlon}</h4>
          </div>
          <div class={style.fifth_container_last_access}>
            <h4> {this.state.time} </h4>
          </div>
        </div>
      </div>
  )
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          {this.renderError()}
          {this.renderWeather()}
        </div>
      )
    } else {
      return (
        <div className="center-block"><img src={require('../img/loading.gif')} alt="loading"/></div>
      )
    }
  }
}
