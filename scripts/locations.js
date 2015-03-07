/** @jsx React.DOM */
var Locations = React.createClass({displayName:'Locations',
  render: function() {
    return (
      <div className='Location'>
        Da Streets
      </div>
    );
  }
});

React.render(<Locations/>, document.getElementById('locations'));
