import React, { Component } from 'react';
import './App.css';

class App extends Component {

  map = null;

	componentDidMount () {
		window.initMap = this.initMap.bind(this);
		loadJS('https://maps.googleapis.com/maps/api/js?callback=initMap');
	}

	initMap() {
		this.map = new window.google.maps.Map(this.refs.map, {
			center: {lat: 32.115164, lng: 34.844330},
      zoom: 18
		});

		const infoWindow = new window.google.maps.InfoWindow({
			content: '<div>Hello, my name is Timi :)</div>'
		});

		const marker = new window.google.maps.Marker({
			position: {lat: 32.115164, lng: 34.844330},
			map: this.map,
			icon: {
				url: 'http://localhost:3000/timi.png',
				scaledSize: new window.google.maps.Size(40, 40)
			}
		});

		marker.addListener('click', () => infoWindow.open(this.map, marker));
	}

  render() {
    return (
		<div className="App">
			<header>
				<h1 className="App-title">Google Maps API & React</h1>
			</header>
			<div className="map">
				<div ref="map" style={{height: '100%', width: '100%'}} />
			</div>
		</div>
    );
  }
}

export default App;


const loadJS = src => {
	const ref = window.document.getElementsByTagName('script')[0];
	let script = window.document.createElement('script');

	script.src = src;
	script.async = true;
	ref.parentNode.insertBefore(script, ref);
};