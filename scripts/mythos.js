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

var Rumor = React.createClass({
  render: function() {
    return (
      <div className='rumor'>
        Rumors
      </div>
    );
  }
})

var HeadLine = React.createClass({
  render: function() {
    return (
      <div className='Headline'>
        Headline
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
