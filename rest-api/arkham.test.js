var superagent = require('superagent')
var expect = require('expect.js')

describe('express rest api server', function(){
  var id;
  var host = 'http://localhost:3000/'
  //start game
  it('post object', function(done){
    superagent.post(host+'game/start')
      .send({})
      .end(function(e, res){
        done();
      });
  });

  //get locations
  it('retrieves an object', function(done){
    superagent.get(host+'locations')
      .end(function(e, res){
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.length).to.eql(1);
        done()
      })
  });
  //get encounters
  it('retrieves an object', function(done){
    superagent.get(host+'encounters/circus')
      .end(function(e, res){
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.length).to.eql(1);
        done()
      })
  })

  //get possible ancient ones
  it('retrieves an object', function(done) {
    superagent.get(host+'ancients')
      .end(function(e, res) {
        expect(e).to.eql(null);
        expect(typeof res.body).to.eql('object');
        expect(res.body.length).to.eql(4);
        done();
      });
  });

  //get specific ancient one info
  it('retrieves an object', function(done) {
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