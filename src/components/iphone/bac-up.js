// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';
import menu from '../../assets/icons/menuIcon.png';
//import ToggleButton from './Toggle';
import togStyle from './toggStyle';
//import {Toggle} from './Toggle';

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		var apiKey = "19da8c5ac2684341ae4162055180102";
		var apiURL = 'http://api.worldweatheronline.com/premium/v1/';
		//this.state.locate = "";
		// temperature state
		//this.state.temp_current = "";
		// button display state
		this.setState({ display: true });
    }
	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp_current ? `${style.temp_current} ${style.filled}` : style.temp_current;
        const borderRadiusStyle = { borderRadius: 2 }
		// display all weather data
		return (
          
			<div class={ style.container } >
                <div class={ style.top }>
                    <div class={ style.nav }>    
                        <div class={ style.menu }>
                                 <img class={style.image} src="../../assets/icons/menuIcon.png" alt="menu"/>
                        </div>
                    </div>
                            <div class={ style.refresh }>
                                    <img class={style.image} class={style.refre}src="../../assets/icons/refresh.png" alt="refresh"/>
                            </div>  
                                        <div class={style.toggTitle}>
                                                <p>Units:</p>
                                        </div>

                                            <div>
                                                <label class={togStyle.weatherSwitch}>
                                                        <input type="checkbox" checked/>
                                                        <span class={togStyle.weatherSlider}></span>
                                                </label>
                                        </div>
                                            <div>
                                                    <label class={togStyle.speedSwitch}>
                                                            <input type="checkbox" checked/>
                                                            <span class={togStyle.speedSlider}></span>
                                                    </label>
                                        </div>

 				       </div>
                
                  </div>
                                
                                
		);
	}
  
}

