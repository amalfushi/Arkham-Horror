/** @jsx React.DOM */
var loadLocations = function () {
  localStorage['locations'] = ['School', 'Woods'];
}

var getLocations = function() {
  if(localStorage.getItem('locations') == null || localStorage['locations'].length === 0) {
    loadLocations();
  }
  return localStorage['locations'];
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
