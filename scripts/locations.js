/** @jsx React.DOM */
var loadLocations = function () {
  console.log('1');
  var data = JSON.stringify(['School', 'Woods']);
  console.log(data);
  localStorage.setItem('locations', data);
};

var getLocations = function() {

  //return ['Woods'];
  if(localStorage.getItem('locations') == null || localStorage.getItem('locations').length === 0) {
    loadLocations();
  }
  return JSON.parse( localStorage.getItem('locations'));
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
