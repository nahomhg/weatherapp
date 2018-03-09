// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp_current = "";
		// button display state
		this.setState({ display: true });
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/2cfd6143719bc949/conditions/q/UK/London.json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		this.setState({ display: false });
		this.move;
	}

	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp_current ? `${style.temp_current} ${style.filled}` : style.temp_current;
		// display all weather data
		return (
			<div class={ style.container } >
				<div class={ style.top }>
					<div class={ style.nav }>This is menu!!</div>
					<div class={ style.location }>
						<div class={ style.city }>{ this.state.locate }</div>
//						<div class={ style.coord }>
//							<div class={ style.latitude}>{ this.state.latitude }</div>
//							<div class={ style.longitude }>{ this.state.longitude }</div>
//						</div>
					</div>
					<div class={ style.refresh }>This is refresh!!</div>
				</div>
				<div class={ style.info }>
					<div class={ style.humidity }>{ this.state.humidity }</div>
					<div class={ style.weather_data }>
						<div class={ style.temperature }>
							<div class={ tempStyles }>{ this.state.temp_current }</div>
							<div class={ style.temp_desc }>
//								<div class={ style.temp_max }>temp_max</div>
//								<div class={ style.temp_min}>temp_min</div>
							</div>
							<div class={ style.wind_speed }>{ this.state.wind_speed }</div>
						</div>
						<div class={ style.wind }>
							<div class={ style.wind_dir }>{ this.state.wind_dir }</div>
						</div>
					</div>
				</div>
				<div class={ style.condition }>
					<div class={ style.tide }>
						<div class={ style.tide_low_st }>Low tide start</div>
						<div class={ style.tide_low_end }>Low tide end</div>
						<div class={ style.tide_high_st }>High tide start</div>
						<div class={ style.tide_high_end }>High tide end</div>
					</div>
					<div class={ style.sailing }>
						<div class={ style.visibility }>{ this.state.visibility }</div>
						<div class={style.pressure }>{ this.state.pressure }</div>
					</div>
				</div>
				<div class={ style.cloud_cover }>
					<div class={ style.cloud_progress}></div>
				</div>
				<div>
					{ this.state.display ? <Button class={ style_iphone.button } clickFunction={ this.fetchWeatherData }/ > : null }
				</div>
			</div>
		);
	}

	parseResponse = (parsed_json) => {
		var location = parsed_json['current_observation']['display_location']['city'];
		var lat = parsed_json['current_observation']['display_location']['latitude'];
		var lon = parsed_json['current_observation']['display_location']['longitude'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];
		var w_speed = parsed_json['current_observation']['wind_kph'];
		var w_dir = parsed_json['current_observation']['wind_dir'];
		var vis = parsed_json['current_observation']['visibility_km'];
		var pres = parsed_json['current_observation']['pressure_mb'];
		var hum = parsed_json['current_observation']['relative_humidity'];

		style.container.height = 200 + 'px';
		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			latitude: lat,
			longitude: lon,
			temp_current: temp_c,
			wind_speed: w_speed,
			wind_dir: w_dir,
			visibility: vis,
			pressure: pres,
			humidity: hum,
			cond : conditions
		});



		//style.container.height = 200 + 'px';
		//var elem = document.getElementByClass("cloud_progress");
		//elem.style.width = parseInt(this.state.humidity) + '%';
	}

	move= () => {
		var elem = document.getElementByClass("cloud_progress");
		var width = 1;
		var id = setInterval(this.frame, 10);
		frame= () => {
			if (width >= 56) {
				clearInterval(id);
			} else {
				width++;
				elem.style.width = width + '%';
				elem.innerHTML = width * 1 + "%";
			}
		}
	}
}
