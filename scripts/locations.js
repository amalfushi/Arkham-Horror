/** @jsx React.DOM */
var getLocations = function() {
  return ['School','Woods'];
};

var Location = React.createClass({displayName:'Location',
  render: function() {
    return (
      <div className='Location'>
        {this.props.name}
      </div>
    );
  }
});

var Locations = React.createClass({displayName:'Locations',
  render: function() {
    return (
        <Location/>
    );
  }
});

React.render(<Locations/>, document.getElementById('locations'));
