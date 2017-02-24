
/************ word count function ************/

function getWordCount(text) {
	var words = text.toLowerCase().match(/\b[^\s]+\b/g).filter(Boolean);
	var wordCount = words.length;
	return wordCount;
}

/*********** unique word count ************/

function getUniqueWord(text) {
	var words = text.toLowerCase().match(/\b[^\s]+\b/g).filter(Boolean);
	var uniqueWords = {};
	for (var i = 0; i < words.length; i++) {
		if (words[i] in uniqueWords) {
			uniqueWords[words[i]]++;
		}
		else {
			uniqueWords[words[i]]=1;
		}
	}
	var keyCount = Object.keys(uniqueWords).length;
	return keyCount;
}


/*********** average word length *************/

function getAverageLength(text) {
	var words = text.toLowerCase().match(/\b[^\s]+\b/g).filter(Boolean);
	var totalChar = 0;
	for (var i = 0; i < words.length; i++) {
		totalChar = totalChar + words[i].length;
	}
	return totalChar / words.length;
}

/************ show results & insert the element *************/

function doResults(text) {
	var wordCountResults = getWordCount(text);
	var uniqueWordResults = getUniqueWord(text);
	var averageLengthResults = getAverageLength(text);
	$(".js-text-report").find(".js-word-count").html(wordCountResults);
	$(".js-text-report").find(".js-unique-word").html(uniqueWordResults);
	$(".js-text-report").find(".js-average-length").html(averageLengthResults);
}

/************ remove the class `hidden` ************/

function removeHidden() {
	$(".js-text-report").removeClass("hidden");
}


/*********** get the input text from user to analyze ***********/

function getText() {
	$("button").click(function (event) {
		event.preventDefault();
		doResults($("textarea").val());
		removeHidden();
		
	})
}

$(function () {
	getText();
});


