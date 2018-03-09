.weatherSwitch {
    position: relative;
    display: inline-block;
    width: 90px;
    height: 34px;
    margin-right: 30%;
}

.weatherSwitch input {display:none;}

.weatherSlider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ca2222;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px; 

}

.weatherSlider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .weatherSlider {
  background-color: deepskyblue;
}

input:focus + .weatherSlider {
  box-shadow: 0 0 1px deepskyblue;
}

input:checked + .weatherSlider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(55px);
}

/*------ ADDED CSS ---------*/
.weatherSlider:after
{
 content:'F°';
 color: white;
 display: block;
 position: absolute;
 transform: translate(-50%,-50%);
 top: 50%;
 left: 50%;
 font-size: 16px;
 font-family: Verdana, sans-serif;
}

input:checked + .weatherSlider:after
{  
  content:'C°';
}

//

//
.speedSwitch {
    position: relative;
    display: inline-block;
    width: 90px;
    height: 34px;
    margin-top: 40%;
    margin-left: -60%;
}

.speedSwitch input {display:none;}

.speedSlider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ca2222;
  -webkit-transition: .4s;
  transition: .4s;
   border-radius: 34px;
}

.speedSlider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .speedSlider {
  background-color: deepskyblue;
}

input:focus + .speedSlider {
  box-shadow: 0 0 1px deepskyblue;
}

input:checked + .speedSlider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(55px);
}

/*------ ADDED CSS ---------*/
.speedSlider:after
{
 content:'Kph';
 color: white;
 display: block;
 position: absolute;
 transform: translate(-50%,-50%);
 top: 50%;
 left: 50%;
 font-size: 16px;
 font-family: Verdana, sans-serif;
}

input:checked + .speedSlider:after
{  
  content:'Mph';
}