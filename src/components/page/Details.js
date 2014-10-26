/** @jsx React.DOM */
var React = require('react');

var Details = React.createClass({
  propTypes: {
    date: React.PropTypes.string.isRequired
  },
  render: function() {
    var detailsClass = 'FlexItem FlexItem-details';
    /* jshint ignore:start */
    return (
      <div className={detailsClass} ref="details" />
    );
    /* jshint ignore:end */
  }
});

module.exports = Details;