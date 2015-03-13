/** @jsx React.DOM */

var Neighborhood = React.createClass({
  getLocation: function(loc) {
    var data = new Array();
    data['School'] = ['Upper', 'Lower'];
    data['Woods' ] = ['Scary', 'Friendly']
    return data[loc];
  },
  render: function() {
    return (<details>
              <summary>{this.props.name}</summary>
              {this.getLocation(this.props.name).map(function(loc, i){
                  return <div>{loc}</div>
              })}
            </details>);
  }
});


var Neighborhoods = React.createClass({
  loadLocations: function() {
    var data = ['School', 'Woods'];
    localStorage.setItem('locations', JSON.stringify(data));
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
              return <Neighborhood name={loc}/>
          })}</div>
    );
  }
});

React.render(<Neighborhoods/>, document.getElementById('locations'));
