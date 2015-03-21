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

var Headline = React.createClass({
  render: function() {
    return (
      <div className='Headline'>
        Headline
      </div>
    );
  }
})

var Mythos = React.createClass({
  drawCard: function() {

  },
  render: function() {
    return (
      <div className='Mythos'>
        <div onClick='{this.drawCard}'>Draw Mythos Card</div>
        <Headline/>
        <Environment/>
        <Rumor/>
      </div>
    );
  }
});

React.render(<Mythos/>, document.getElementById('mythos'))
