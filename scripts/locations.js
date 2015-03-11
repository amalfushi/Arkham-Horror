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

React.render(<div>{getLocations().map(function(loc, i){
        return <Location name={loc} key={i} />;
    })}</div>, document.getElementById('locations'));
