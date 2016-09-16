contract('Reward', function(accounts) {
  it("Initial reward settings should match", function(done) {
    var reward = Reward.at(Reward.deployed_address);
    // same as previous example up to here
    Reward.new({ from: accounts[0] }).then(
      function(conference) {
        conference.numRegistrants.call().then( function(num) {
          assert.equal(num, 0, "Registrants should be zero!");
          return conference.organizer.call();
        }).then( function(organizer) {
          assert.equal(organizer, accounts[0], "Owner doesn't match!");
          done(); // to stop these tests earlier, move this up
        }).catch(done);
    }).catch(done);
  });
it("Should update quota", function(done) {
  var c = Conference.at(Conference.deployed_address);
  Conference.new({from: accounts[0] }).then(
    function(conference) {
    conference.quota.call().then(
      function(quota) {
        assert.equal(quota, 500, "Quota doesn't match!");
      }).then(
        function() {
          return conference.changeQuota(300);
      }).then(
        function(result) {
          console.log(result); 
          // printed will be a long hex, the transaction hash
          return conference.quota.call();
      }).then(
        function(quota) {
          assert.equal(quota, 300, "New quota is not correct!");
          done();
      }).catch(done);
  }).catch(done);
});
 it("Should let you buy a ticket", function(done) {
  var c = Conference.at(Conference.deployed_address);
  Conference.new({ from: accounts[0] }).then(
    function(conference) {
    var ticketPrice = web3.toWei(.05, 'ether');
    var initialBalance = web3.eth.getBalance(conference.address).toNumber();
    conference.buyTicket({ from: accounts[1], value: ticketPrice })
      .then(
        function() {
         var newBalance = web3.eth.getBalance(conference.address).toNumber();
         var difference = newBalance - initialBalance;
         assert.equal(difference, ticketPrice, "Difference should be what was sent");
         return conference.numRegistrants.call();
      }).then(
       function(num) {
         assert.equal(num, 1, "there should be 1 registrant"); 
         return conference.registrantsPaid.call(accounts[1]);
      }).then(function(amount) {
         assert.equal(amount.toNumber(), ticketPrice, "Sender's paid but is not listed");
         done();
      }).catch(done);
   }).catch(done);
  });
it("Should issue a refund by owner only", function(done) {
  var c = Conference.at(Conference.deployed_address);
  Conference.new({ from: accounts[0] }).then(
    function(conference) {
      var ticketPrice = web3.toWei(.05, 'ether');
      var initialBalance = web3.eth.getBalance(conference.address).toNumber();
      conference.buyTicket({
         from: accounts[1], value: ticketPrice }).then(
       function() {
         var newBalance = web3.eth.getBalance(conference.address).toNumber();
         var difference = newBalance - initialBalance;
         assert.equal(difference, ticketPrice, "Difference should be what was sent");
         // Now try to issue refund as second user - should fail
         return conference.refundTicket(accounts[1], ticketPrice, {from: accounts[1]});
       }).then(function() {
       var balance = web3.eth.getBalance(conference.address).toNumber();
       assert.equal(web3.toBigNumber(balance), ticketPrice, "Balance should be unchanged");
       // Now try to issue refund as organizer/owner - should work
       return conference.refundTicket(accounts[1], ticketPrice, {from: accounts[0]});
     }).then( function() {
       var postRefundBalance = web3.eth.getBalance(conference.address).toNumber();
       assert.equal(postRefundBalance, initialBalance, "Balance should be initial balance");
       done();
     }).catch(done);
  }).catch(done);
 });
});
