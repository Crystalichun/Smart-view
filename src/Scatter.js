import React from 'react';
import ChartistGraph from '../node_modules/react-chartist';
import '../node_modules/chartist/dist/chartist.css'

class Scatter extends React.Component {
  render() {
	  
	var times = function(n) {
		return Array.apply(null, new Array(n));
    };

	var data = times(52).map(Math.random).reduce(function(data, rnd, index) {
		data.labels.push(index + 1);
		data.series.forEach(function(series) {
		series.push(Math.random() * 100)
	});

		return data;
	}, {
	  labels: [],
	  series: times(4).map(function() { return new Array() })
	});

	var options = {
	  showLine: false,
	  axisX: {
		labelInterpolationFnc: function(value, index) {
		  return index % 13 === 0 ? 'W' + value : null;
		}
	  }
	};

	var responsiveOptions = [
	  ['screen and (min-width: 640px)', {
		axisX: {
		  labelInterpolationFnc: function(value, index) {
			return index % 4 === 0 ? 'W' + value : null;
		  }
		}
	  }]
	];

	var type =  'Line';

	return (
	  <div className='Pie'>
		<ChartistGraph  type={type} options={options} responsive-options={responsiveOptions} data={data}/>
	  </div>
	)
  }
}

export default Scatter;