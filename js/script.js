'use strict';

const message = "Welcome to the Bohdan Yelmanov's portfolio";

function addOneLetter(letter, id){
	let blockToIncertText = document.getElementById(id);
	blockToIncertText.innerText += letter;
}

function printWithInterval(message){
	let start = 0;
	let end = message.length;
	setTimeout(function print() {
		addOneLetter(message[start], 'header__heading');
		if(start < end - 1){
			setTimeout(print, 100);
		}
		start++
	}, 100);
	
	
}

printWithInterval(message);

