/** @jsx React.DOM */

var Neighborhood = React.createClass({
  loadLocation: function(loc) {
    localStorage.clear();
    var data = new Array();
    localStorage.setItem('School', JSON.stringify(['Upper', 'Lower']));
    localStorage.setItem('Woods', JSON.stringify(['Scary', 'Friendly']));    
  },
  getLocation: function(loc) {
    if(localStorage.getItem(loc) === null || localStorage.getItem(loc).length === 0) {
      this.loadLocation(loc);
    }
    return JSON.parse(localStorage.getItem(loc));
  },
  locationClick: function(loc) {
    alert(loc);
  },
  render: function() {
    return (<details>
              <summary>{this.props.name}</summary>
              {this.getLocation(this.props.name).map(function(loc, i){
                  return <div onClick={this.locationClick.bind(this, loc)} key={i}>{loc}</div>;
              }.bind(this))}
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
              return <Neighborhood name={loc} key={i}/>
          })}</div>
    );
  }
});

React.render(<Neighborhoods/>, document.getElementById('locations'));
