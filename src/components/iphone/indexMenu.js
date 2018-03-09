// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './styleMenu';
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
		
		this.setState({ display: true });
    }
    
    foo(){
        
    }
    
	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
//		const tempStyles = this.state.temp_current ? `${style.temp_current} ${style.filled}` : style.temp_current;
//        const borderRadiusStyle = { borderRadius: 2 }
		// display all weather data
		return (
            
			<div class={ style.container } >
                <div class={ style.top }>
                    <div class={ style.nav }>    
                        <div class={ style.menu }>
                                 <img class={style.image} src="../../assets/icons/menuIcon.png" alt="menu"/>
                        </div>
                        <div>
                            <p class={style.title}>Settings</p>
                        </div>
                    </div>
                            <div class={ style.refresh }>
                                    <img class={style.image} class={style.refre} src="../../assets/icons/refresh.png" alt="refresh" />
                            </div>  
                    
 				       </div>
                            <div class={style.domainCont}>
                                             <div class={style.toggTitle}>
                                                <p>Units:</p>
                                            </div>
                                            <div>
                                            <label class={togStyle.weatherSwitch}>
                                                        <input type="checkbox" checked onClick={this.foo()}/>
                                                        <span class={togStyle.weatherSlider}></span>
                                                </label>
                                            </div>
                                                <div>
                                                    <label class={togStyle.speedSwitch}>
                                                            <input type="checkbox" checked /> 
                                                            <span class={togStyle.speedSlider}></span>
                                                    </label>
                                                </div> 
                                <div class={style.divider}>
                                    <br/>
                                    <hr/>
                                </div>
            
                                <div class={style.locationContainer}>
                                    <p class={style.locationSubtitle}>Favourite Locations: </p>
                                </div>
            
                                <div class={style.locations}>    
                                            <select class={style.locationChoice}>
                                                <option value="select">Select...</option>
                                                <option value="SH">Southampton</option>
                                                <option value="DVN">Devon</option>
                                                <option value="CRNWL">Cornwall</option>
                                            </select>
                                        </div>
                                
                                <div class={style.divider}>
                                    <br/>
                                    <hr/>
                                </div>
            
                                <div class={style.futureForcast}>
            
                                    <div>
                                        <p class={style.forecast}>Future Forecast: </p>
                                    </div>
            
                                    <div class={style.forcOne}>
                                        
                                    </div>
            
                                    <div class={style.forcTwo}>

                                    </div>
        
                                    <div class={style.forcThree}>
                                        
                                    </div>
                            
                                </div>
            
                            </div>             
            </div>
                                
		);
	}
    //ADD ONCLICK FUNCTION TO LINES 61, 55, THE SELECT SECTION, THE MENU AND THE REFRESH!!!!!//
}

