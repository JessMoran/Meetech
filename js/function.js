/*Funcionalidad pantalla principal*/
/*Variables globales para uso de las funcionalidades posteriores*/
var $descriptionInput = $("#description");
var $btnEvent = $("#create");

var $eventInput =$("#event");
var $tagInput =$("#tag");
var $dateInput =$("#date");

function loadPage(){
  $descriptionInput.keyup(validateEvent);
  $btnEvent.click(addEvent);
}

function validateEvent () {
  if($(this).val().trim().length > 0) {
    $btnEvent.removeAttr("disabled");
  } else {
    $btnEvent.attr("disabled" , true);
  }
}

function addEvent(e){
  e.preventDefault();
  // guardamos el valor del texto que agrega en los inputs el usuario
  var nameEvent = $eventInput.val();
  var tag = $tagInput.val();
  var date = $dateInput.val();
  var description = $descriptionInput.val();
  // guardamos los valores anteriores en un objeto
  var eventCreate = {
    "name": nameEvent,
    "tag": tag,
    "date": date,
    "description": description
    };
console.log(eventCreate);
}

$(document).ready(loadPage);
