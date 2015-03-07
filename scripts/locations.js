/** @jsx React.DOM */
var Location = React.createClass({displayName:'Location',
  render: function() {
    return (
      <div className='Location'>
        Blue Street
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
