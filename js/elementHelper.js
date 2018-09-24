

function hideElement(id){
	$("#"+id).css("visibility","hidden");
}

function hideaftertimeout(id, milliseconds){
setTimeout(function(){hideElement(id);},milliseconds);
}

function showaftertimeout(id, milliseconds){
setTimeout(function(){showElement(id);},milliseconds);
}

function showElement(id){
	$("#"+id).css("display","inline");
}

function insertText(id, string){
$("#"+id).html(string);
}
function removeButton() {
    $("#delayedremovedelement").remove();
}

function appendButton(){
   $("#elementsvisibility").append( "<button id='createdelement' type='button' class='btn btn-danger'>I am a newly born button!</button><br>" );
}

function appendandhideButton(){
$("#elementsvisibility").append( "<button id='createdhiddenbutton' type='button' class='btn btn-danger'>I am a newly born button!</button>" );
$("#createdhiddenbutton").css("display","none");
$("#createandhidebuttons").append( "<p>Knappen har skapats men är inte synlig</p>" );
}

