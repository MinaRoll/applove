/*
 * Archivo principal de funcionalidad de JS
 */
 (function main(){
 	var boxes = Array.from(document.getElementsClassName("box-services"));
 	var modal = document.getElemetnById("box-services-modal");
 	var bodyModal;
 	boxes.forEach(function(box)){
 		box.addEventListener("click", function(){
 			modal.classList.remove("hide")
 		})

 		bodyModal = document.createElement("div");
 		bodyModal.classList.add("modal-body");
 		bodyModal.innerHtml = box.innerHTML;

 	}
 }