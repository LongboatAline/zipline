var d3 = window.d3;

var moment = require('moment');

var zipline = require('../../src/');
var reuse = zipline.util.reuse;

var scales = require('../util/scales');

d3.chart('CBG', {
  initialize: function() {
    var chart = this;

    var xPosition = function(d) {
      return chart.xScale(moment(d.trueUtcTime).utc().toDate());
    };

    this.layer('CBG-circles', this.base.append('g').attr({
      'class': 'CBG-circles'
    }), {
      dataBind: function(data) {
        return reuse(this.selectAll('circle').data(data, function(d) {
          return d.id;
        }));
      },
      insert: function() {
        return this.append('circle')
          .attr({
            r: chart.opts.r,
            fill: chart.opts.fill,
            'class': 'CBG-circle'
          });
      },
      events: {
        merge: function() {
          this.attr({
            cx: xPosition,
            cy: function(d) {
              return chart.yScale(d.value) + chart.yOffset;
            }
          });
        },
        exit: function() {
          this.remove();
        }
      }
    });
  },
  height: function(height) {
    if (!arguments.length) { return this.height; }
    this.height = height;
    this.yScale = scales.bg(height, this.opts.r/2);
    return this;
  },
  opts: function(opts) {
    if (!arguments.length) { return this.opts; }
    this.opts = opts;
    return this;
  },
  xScale: function(xScale) {
    if (!arguments.length) { return this.xScale; }
    this.xScale = xScale;
    return this;
  },
  yOffset: function(yOffset) {
    if (!arguments.length) { return this.yOffset; }
    this.yOffset = yOffset;
    return this;
  }
});

var chart;

module.exports = {
  create: function(el, opts) {
    opts = opts || {};
    var defaults = {};
    _.defaults(opts, defaults);

    chart = d3.select(el).chart('CBG')
      .opts(opts.opts)
      .height(opts.height)
      .xScale(opts.xScale)
      .yOffset(opts.yOffset);

    return chart;
  }
};