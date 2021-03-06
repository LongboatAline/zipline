/** @jsx React.DOM */
var React = require('react/addons');

var cx = require('classnames');

var Label = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    fixed: React.PropTypes.bool.isRequired,
    large: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    var labelClass = cx({
      'Label': true,
      'Label--fixed': this.props.fixed,
      'Label--regular': !this.props.large,
      'Label--large': this.props.large
    });
    return (
      <div className={labelClass} id={this.props.id}>
        <h3>
          {this.props.text}
        </h3>
      </div>
    );
  }
});

module.exports = Label;