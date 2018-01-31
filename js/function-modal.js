/*Funcionalidad pantalla principal*/
/*Variables globales para uso de las funcionalidades posteriores*/
var $descriptionInput = $("#description");
var $btnEvent = $("#create");

var $eventInput =$("#event");
var $tagInput =$("#tag");
var $dateInput =$("#date");

/*funcion que se realiza al cargar la página*/
function loadPage(){
  $descriptionInput.keyup(validateEvent);
  $btnEvent.click(addEvent);
}

/*funcion que valida que el usuario haya llenado los campos del modal*/
function validateEvent () {
  if($(this).val().trim().length > 19) {
    $btnEvent.removeAttr("disabled");
  } else {
    $btnEvent.attr("disabled" , true);
  }
}

/* función que guada la informacion que el usuario ingresa en el modal*/
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
