$(document).ready(function() {

	var $accounts = $('.accounts');

	var $checking = $('#checking');
	var $checkBalance = $('#checkingBalance');
	var $checkingDepositBtn = $('.checking-deposit');
	var $checkingWithdrawBtn = $('.checking-withdraw');
	var $checkingAmount = $('#checkingAmount');

	var $savings = $('#savings');
	var $savingsDepositBtn = $('.savings-deposit');
	var $savingsWithdrawBtn = $('.savings-withdraw');
	var $savingsAmount = $('#savingsAmount');


	var balanceCounter = 0;




	var checkingDeposit = function(){
		var $checkingInput = $('#checkingInput').val();
		var checkingInputParsed = parseInt($checkingInput);
		checkTotal = parseInt($checkingAmount.text()) + checkingInputParsed;
		
		console.log(checkTotal);
		$checkingAmount.text(checkTotal);
		checkingInput.value = '';
	};

		var checkingWithdraw = function(){
		var $checkingInput = $('#checkingInput').val();
		var checkingInputParsed = parseInt($checkingInput);
		checkTotal = parseInt($checkingAmount.text()) - checkingInputParsed;		
		console.log(checkTotal);
		$checkingAmount.text(checkTotal);
		checkingInput.value = '';
	};


	var savingsDeposit = function(){
		var $savingsInput = $('#savingsInput').val();
		var savingsInputParsed = parseInt($savingsInput);
		checkTotal = parseInt($savingsAmount.text()) + savingsInputParsed;		
		console.log(checkTotal);
		$savingsAmount.text(checkTotal);
		checkingInput.value = '';
	};

	var savingsWithdraw = function(){
		var $savingsInput = $('#savingsInput').val();
		var savingsInputParsed = parseInt($savingsInput);
		checkTotal = parseInt($savingsAmount.text()) - savingsInputParsed;
		console.log(checkTotal);
		$savingsAmount.text(checkTotal);
		checkingInput.value = '';
	};


//if else if less than zero cancel out
	$checkingDepositBtn.on('click', checkingDeposit);
	$checkingWithdrawBtn.on('click', checkingWithdraw);
	$savingsDepositBtn.on('click', savingsDeposit);
	$savingsWithdrawBtn.on('click', savingsWithdraw);
});