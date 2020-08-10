function getLineNumberAndColumnIndex(textarea){
     var textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
     var currentLineNumber = textLines.length;
     var currentColumnIndex = textLines[textLines.length-1].length;
}