/** @jsx React.DOM */
var Location = React.createClass({
  loadLocations: function() {
    var data = JSON.stringify(['School', 'Woods']);
    localStorage.setItem('locations', data);
  },
  getLocations: function() {
    //return ['Woods'];
    if(localStorage.getItem('locations') == null || localStorage.getItem('locations').length === 0) {
      this.loadLocations();
    }
    return JSON.parse( localStorage.getItem('locations'));
  },
  render: function() {
    return (
      <div>{this.getLocations().map(function(loc, i){
              return <div>{loc}</div>;
          })}</div>
    );
  }
});

React.render(<Location/>, document.getElementById('locations'));
