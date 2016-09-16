conference.numRegistrants.call().then(
  function(num) {
    assert.equal(num, 0, "Registrants should be zero!"); 
    conference.organizer.call().then(
      function(organizer) {
        assert.equal(organizer, accounts[0], "Doesn't match!");
          }).then(
            function(...))
               }).then(
                 function(...))
                  // Because this would soon get hairy...
