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
  loadCards: function() {
    var data = ['An environment', 'A headline', 'A rumor'];
    console.log(data.length);
    localStorage.setItem('Mythos', JSON.stringify(data));
  },
  drawCard: function() {
    if(localStorage.getItem('Mythos') == null || localStorage.getItem('Mythos').length === 0) {
      this.loadCards();
    }
    var cards = JSON.parse( localStorage.getItem('Mythos'));
    var x = Math.floor(Math.random() * cards.length);
    console.log(cards[x]);
  },
  render: function() {
    return (
      <div className='Mythos'>
        <div onClick={this.drawCard}>Draw Mythos Card</div>
        <Headline/>
        <Environment/>
        <Rumor/>
      </div>
    );
  }
});

React.render(<Mythos/>, document.getElementById('mythos'))
