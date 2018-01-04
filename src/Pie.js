import React from 'react';
import ChartistGraph from '../node_modules/react-chartist';
import '../node_modules/chartist/dist/chartist.css'

class Pie extends React.Component {
  render() {
	  
	var data = {
		labels: ['XA', 'GZ', 'BJ'],
		series: [50, 30, 20]
	};

	var options = {
			labelInterpolationFnc: function(value) {
			return value;
		}
	};

	var responsiveOptions = [
	  ['screen and (min-width: 640px)', {
		chartPadding: 30,
		labelOffset: 100,
		labelDirection: 'explode',
		labelInterpolationFnc: function(value) {
		  return value;
		}
	  }],
	  ['screen and (min-width: 1024px)', {
		labelOffset: 80,
		chartPadding: 20
	  }]
	];
	var type =  'Pie';
	
	var style = {
		height: 20 + 'em'
	};

    return (
      <div className='Pie'>
        <ChartistGraph  style={style} type={type} options={options} responsive-options={responsiveOptions} data={data}/>
      </div>
    )
  }
}

export default Pie;