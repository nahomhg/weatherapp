import { h, render, Component } from 'preact';
import style from './style';

export default class Bar extends Component {

  render() {
    var hum = this.props.humidity;
    var tempStyles;
    switch (hum.charAt(0)) {
      case '1':
        tempStyles = `${style.bar_v_prog} ${style.bar_v_prog_10}`;
        break;
      case '2':
        tempStyles = `${style.bar_v_prog} ${style.bar_v_prog_20}`;
        break;
      case '3':
        tempStyles = `${style.bar_v_prog} ${style.bar_v_prog_30}`;
        break;
      case '4':
        tempStyles = `${style.bar_v_prog} ${style.bar_v_prog_40}`;
        break;
      case '5':
        tempStyles = `${style.bar_v_prog} ${style.bar_v_prog_50}`;
        break;
      case '6':
        tempStyles = `${style.bar_v_prog} ${style.bar_v_prog_60}`;
        break;
      case '7':
        tempStyles = `${style.bar_v_prog} ${style.bar_v_prog_70}`;
        break;
      case '8':
        tempStyles = `${style.bar_v_prog} ${style.bar_v_prog_80}`;
        break;
      case '9':
        tempStyles = `${style.bar_v_prog} ${style.bar_v_prog_90}`;
        break;
      default:
        tempStyles = `${style.bar_v_prog} ${style.bar_v_prog_0}`;
        break;
    }

    tempStyles = (hum.length == 4) ? `${style.bar_v_prog} ${style.bar_v_prog_100}` : tempStyles ;

    return (
      <div class={ style.bar_container }>
        <div class={ style.bar_v_cont }>
          <div class={ tempStyles }></div>
        </div>
        <div class={style.text}>
          <h4> Humidity: { hum } </h4>
        </div>
      </div>
    )
  }
}
