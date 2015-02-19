var superagent = require('superagent')
var expect = require('expect.js')

describe('Arkham Rest API', function(){
  var id;
  var host = 'http://localhost:3000/'
  //start game
  it('Start a Game', function(done){
    superagent.post(host+'game/start')
      .send({})
      .end(function(e, res){
        done();
      });
  });

  //get locations
  it('Get all locations', function(done){
    superagent.get(host+'locations')
      .end(function(e, res){
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.length).to.eql(1);
        done()
      })
  });
  //get encounters
  it('get encounters', function(done){
    superagent.get(host+'encounters/circus')
      .end(function(e, res){
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.length).to.eql(1);
        done()
      })
  })

  //get possible ancient ones
  it('Get Ancient Ones', function(done) {
    superagent.get(host+'ancients')
      .end(function(e, res) {
        expect(e).to.eql(null);
        expect(typeof res.body).to.eql('object');
        expect(res.body.length).to.eql(4);
        done();
      });
  });

  //get specific ancient one info
  it('Get Ancient One Details', function(done) {
    superagent.get(host+'ancients/Cthulu')
      .end(function(e, res) {
        expect(e).to.eql(null);
        expect(typeof res.body).to.eql('object');
        expect(res.body.name).to.eql('Cthulu');
        done();
      });
  });
  //set ancient one
  //get mythos card
  //get encounter
  //end game

})
