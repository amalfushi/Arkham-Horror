/** @jsx React.DOM */
var DoomTrack = React.createClass({
  render: function() {
    return <div>Doom Track</div>
  }
})

var AncientOne = React.createClass({
  render: function() {
    return <div><DoomTrack/></div>
  }
});

React.render(<AncientOne/>, document.getElementById('ancientOne'));
