/** @jsx React.DOM */
var Environment = React.createClass({
  render: function() {
    return (
      <div className='environment'>
        Environment
      </div>
    );
  }
})

var Mythos = React.createClass({
  render: function() {
    return (
      <div className='Mythos'>
        Mythos
      </div>
    );
  }
});

React.render(<Mythos/>, document.getElementById('mythos'))
