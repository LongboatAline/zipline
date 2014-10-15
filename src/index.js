require('script!d3/d3.min.js');
require('script!d3.chart/d3.chart.js');

require('./less/Zip.less');

var zipline = {
  components: {
    horizontal: {
      Background: require('./components/horizontal/Background'),
      Label: require('./components/horizontal/Label'),
      TimeLabels: require('./components/horizontal/TimeLabels')
    },
    page: {
      Dashboard: require('./components/page/Dashboard'),
      Details: require('./components/page/Details'),
      Picker: require('./components/page/Picker'),
      Timeline: require('./components/page/Timeline')
    },
    vertical: {}
  },
  dataservices: {
    BasicFilter: require('./dataservices/BasicFilter')
  },
  util: {
    colors: require('./util/colors'),
    rgbtohex: require('./util/rgbtohex'),
    reuse: require('./util/reusenodes'),
    scales: require('./util/scales')
  },
  Zipline: require('./Zipline'),
  Zippage: require('./Zippage')
};

module.exports = zipline;