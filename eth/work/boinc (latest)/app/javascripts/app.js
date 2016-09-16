


window.onload = function() {


var Web3 = require('web3');
// create an instance of web3 using the HTTP provider.
// NOTE in mist web3 is already available, so check first if its available before instantiating
//var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//var web3= new Web3();


if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

     //   var eth = web3.eth;

	var accounts = web3.eth.accounts;
	var reward = Reward.at(Reward.deployed_address);
   console.log(reward);
  


	$("#rewrdAddress").html(Reward.deployed_address);

	var myRewardInstance;
	Reward.new({from: accounts[0]}).then(
		function(reward) {
			myRewardInstance = reward;
			checkValues();
 	});

	// Check Values
	function checkValues() {
		myRewardInstance.organizer.call().then(
			
			function(organizer) { 
				$("input#rewrdOrganizer").val(organizer);
				return myRewardInstance.numRegistrants.call(); 
		}).then(
			function(num) { 
				$("#numRegistrants").html(num.toNumber());
				return myRewardInstance.organizer.call();
		});
	}

	// Change Quota
//	function changeQuota(val) {
//		myConferenceInstance.changeQuota(val, {from: accounts[0]}).then(
//			function() {
//				return myConferenceInstance.quota.call();
//			}).then(
//			function(quota) {
//				if (quota == val) {
//					var msgResult;
//					msgResult = "Change successful";
//				} else {
//					msgResult = "Change failed";
//				}
//				$("#changeQuotaResult").html(msgResult);
//			});
//	}
	
	//DepositFund
	function DepositFund(DeposAddress, fundAmount) {

		myRewardInstance.DepositFund({ from: DeposAddress, value: fundAmount }).then(
	
			function() {
				
				return myRewardInstance.OrgDeposit.call(DeposAddress);
				var result1 = myRewardInstance.OrgDeposit.call(DeposAddress);
				console.log(result1);
				var result = myRewardInstance.OrgDeposit(DeposAddress);
				console.log(result);
			}).then(
			function(DeposPaid) {
				var msgResult;
				msgResult= "Фонд взнесен";
				$("#DepositFundResult").html(msgResult);
			});
	}
	

	
	
	
	//Input a Member 
	function gotMember(MemberAddress, RewAmnt) {

     // console.log(MemberAddress);
     // console.log(RewAmnt);
     // console.log("1st_init");
            
   
     // console.log(RewAmnt);
     // console.log(MemberAddress);
	
	myRewardInstance.gotMember(MemberAddress, RewAmnt, {from:accounts[0]}).then(
			function() {
				//console.log("1,1");
				return myRewardInstance.numRegistrants.call();
				console.log("2nd_init");
			}).then(
			function(num) {
				$("#numRegistrants").html(num.toNumber());
				return myRewardInstance.MemberGot.call(MemberAddress);
			//	console.log("3rd init");
			}).then(
			function(valuePaid) {
				var msgResult;
//				if (valuePaid.toNumber() == RewAmnt) {
	         if (valuePaid.toNumber() == RewAmnt) {
	
					msgResult = "Участник внесен в список";
				} else {
					msgResult = "Что-то пошло не так";
				}
				$("#gotMemberResult").html(msgResult);
			});
	}
	



//Getting All Members request as EVENT

   function getAllreqEvent () {
   	
   var MyEvent= myRewardInstance.MemberDepo({fromBlock: 0, toBlock: 'latest'})  ;
   MyEvent.watch(function (error,result) {
   	if (error) {
   	console.log("Error: "+error);
   	} else {
   		console.log("Event: " +result.MyEvent);
   		console.log(MyEvent);
   		console.log(result);
   	}
   	});	
   
  // var events= myRewardInstance.allEvents({fromBlock: 0, toBlock: 'latest'})  ;
 //  events.watch(function (error,result) {
  // 	if (error) {
  // 	console.log("Error: "+error);
   //	} else {
   //		console.log("Event: " +result.events);
   //		console.log(events);
   //		console.log(result.events);
   //	}
   //	});
   	
   //	events.get(function (error,logs) {console.log(logs.events);});
   
 //  MyEvent.stopWatching();
  // events.stopWatching();
   
   
   
   }


	
	
// Getting All Members request (try to see)
  //  function getAllrequest(){
  //  	myRewardInstance.organizer.call().then(
    	
   //    function () {
    //   	return myRewardInstance.numRegistrants.call();
       
   //    }).then(    	
    	
   //    function  (numreq) {
       	
    
 //   $("#GetRequestResult1").html(numreq.toNumber());
  //  console.log(numreq);
 //   return myRewardInstance.MemberGot.call();
  //  return;
 //   })
  //  .then(
  //  function (req) {
    
   // $("#GetRequestResult2").html(req);
    
    
  // for (i=0; i< numreq.toNumber(); i++) {
  //  	console.log(req);
  //  return myRewardInstance.MemberGot.call(i);
 //  console.log(req);
//    };
 //   });    
  //  }
	
  
  
  //Getting Members from DB
 // function getDB() {
  
// $.post(
//  "/get_users.php",
  
  
  
//  ) 
  
 // }
	
	
	//Getting Member from db
	 function getNumDb() {
	   $.post(
	      "/get_id.php",
	      onIdSuccess
	      );
	      function onIdSuccess (data) {
	      	msgResult=data;
	      	console.log(data);
	      	var ids=data;
	      	for (var el, i=0; i< ids.length; i++) {
	      		el=ids[i];
	      		$.post(
	      		"/get_single.php",
	      		{
	      		id: el
	      		},
	      		onSingleSuccess
	      		);
	      		
	      		
	      	}
	      	}
	      	 function onSingleSuccess (data) {
	      	 //	console.log(data);
	      	 	var obj = data;
	      	 	console.log(obj);
	      	 	console.log(obj.wallet);
	      	 	obj.amount=web3.toWei(obj.amount);
	      	 	rewardMember(obj.wallet, obj.amount);
	      	 	
	      	 }
	     $("#GetIDResult").html(msgResult); 	
	}
	
	function Ec() {
	   $.post(
	      "echo.php",
	      function (data) 
	      {
	      	
	      	msgResult=data;
	      	console.log(data);
	      });
	     $("#EchoResult").html(msgResult); 	
	}
	
	
	function Eb () {
		 $.post(
	      "edb.php",
	      function (data) 
	      {
	      	
	      	console.log(data);
	      });
	   }
	
	//Reward Member
	function rewardMember(MemberAddress, RewAmnt) {
         gotMember(MemberAddress, RewAmnt);
			var msgResult;
         var result;
			myRewardInstance.MemberGot.call(MemberAddress).then(
			function(result) {
		//		result= myRewardInstance.MemberGot.call(MemberAddress);
		     
            $.post(
            "/echo.php",
            onEcSuc);
            function onEcSuc (data) {
            	console.log(data);
            	}
            
            		     
		      $.post(
		      "/get_balance.php",
		      {
              wallet: MemberAddress 
		      },
		      onAjaxSuccess
		      
		      );
		      function onAjaxSuccess (data) {
            
            	var r=data;
            	console.log(data);
            	result=r.balance
            	console.log(result);	      
		      }
		
				if (result < RewAmnt) {
					$("#RewardMemberResult").html("Баланс меньше запрошенной суммы!");
				} else {		
					myRewardInstance.rewardMember(MemberAddress, 
						RewAmnt, {from: accounts[0]}).then(
						function() {
							return myRewardInstance.numRegistrants.call();
						}).then(
						function(num) {
							$("#numRegistrants").html(num.toNumber());
							return myRewardInstance.MemberGot.call(MemberAddress);
						}).then(
						function(valuePaid) {
							 if (valuePaid.toNumber() == 0) {
								var Amnt= web3.fromWei(RewAmnt);
								msgResult = "Вознаграждение успешно!";
								$.post(
								"/insert.php",
								{
								wallet: MemberAddress,
								amount: Amnt
								},
 								successInsert
								);
								function successInsert () {
									console.log(data);
								}
							}
							 else {
							
								msgResult = "Вознаграждение не прошло";
							}
							
							$("#RewardMemberResult").html(msgResult);
						});	
				}
			});
	}
	
	
	

	// buyTicket
//	function buyTicket(buyerAddress, ticketPrice) {
//
//		myConferenceInstance.buyTicket({ from: buyerAddress, value: ticketPrice }).then(
//			function() {
//				return myConferenceInstance.numRegistrants.call();
//			}).then(
//			function(num) {
//				$("#numRegistrants").html(num.toNumber());
//				return myConferenceInstance.registrantsPaid.call(buyerAddress);
//			}).then(
//			function(valuePaid) {
//				var msgResult;
//				if (valuePaid.toNumber() == ticketPrice) {
//					msgResult = "Purchase successful";
//				} else {
//					msgResult = "Purchase failed";
//				}
//				$("#buyTicketResult").html(msgResult);
//			});
//	}


	// refundTicket
//	function refundTicket(buyerAddress, ticketPrice) {
//
//			var msgResult;
//
//			myConferenceInstance.registrantsPaid.call(buyerAddress).then(
//			function(result) {
//				if (result.toNumber() == 0) {
//					$("#refundTicketResult").html("Buyer is not registered - no refund!");
//				} else {		
//					myConferenceInstance.refundTicket(buyerAddress, 
//						ticketPrice, {from: accounts[0]}).then(
//						function() {
//							return myConferenceInstance.numRegistrants.call();
//						}).then(
//						function(num) {
//							$("#numRegistrants").html(num.toNumber());
//							return myConferenceInstance.registrantsPaid.call(buyerAddress);
//						}).then(
//						function(valuePaid) {
//							if (valuePaid.toNumber() == 0) {
//								msgResult = "Refund successful";
//							} else {
//								msgResult = "Refund failed";
//							}
//							$("#refundTicketResult").html(msgResult);
//						});	
//				}
//			});
//	}



	// Wire up the UI elements
//	$("#changeQuota").click(function() {
//		var val = $("#confQuota").val();
//		changeQuota(val);
//	});

$("#GetEcho").click(function() {
			Ec();
	});
	
	$("#GetEb").click(function() {
			Eb();
	});

$("#GetRequest").click(function() {
			getAllreqEvent();
	});

$("#GetID").click(function() {
			getNumDb();
	});

$("#DepositFund").click(function() {
		var val = $("#fundAmount").val();
		var DeposAddress = $("#DeposAddress").val();
		DepositFund(DeposAddress, web3.toWei(val));
	});


$("#gotMember").click(function() {
		var val = $("#RewAmnt").val();
		var MemberAddress = $("#MemberAddress").val();
		gotMember(MemberAddress, web3.toWei(val));
	});


$("#rewardMember").click(function() {
		var val = $("#RewAmnt").val();
		var MemberAddress = $("#rewMemberAddress").val();
		rewardMember(MemberAddress, web3.toWei(val));
	});



//	$("#buyTicket").click(function() {
//		var val = $("#ticketPrice").val();
//		var buyerAddress = $("#buyerAddress").val();
//		buyTicket(buyerAddress, web3.toWei(val));
//	});

//	$("#refundTicket").click(function() {
//		var val = $("#ticketPrice").val();
//		var buyerAddress = $("#refBuyerAddress").val();
//		refundTicket(buyerAddress, web3.toWei(val));
//	});


// Установка значений кошельков к аккаунтам.
   $("#DeposAddress").val(accounts[0]);
   $("#MemberAddress").val(accounts[1]);
	$("#rewMemberAddress").val(accounts[1]);


	// Set value of wallet to accounts[1]
//	$("#buyerAddress").val(accounts[1]);
//	$("#refBuyerAddress").val(accounts[1]);

};