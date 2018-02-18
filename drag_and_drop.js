function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
var dragStart = function(e){
    try {
        e.dataTransfer.setData('text/plain',e.target.id);
    } catch (ex) {
        e.dataTransfer.setData('Text',e.target.id);
    }
};
var dropped = function(e){
    var id;
    cancel(e);
//    if (this.id !== sourceContainerId) {
    try{
        id=e.dataTransfer.getData('text/plain');
    } catch(ex){
        id=e.dataTransfer.getData('Text');
    }
    e.target.insertAdjacentElement('afterend',document.querySelector('#'+id));
    e.target.style.boxShadow= "0px 0px rgba(80,80,200,.3)";
  //  }
};
var dragover = function(e){
    e.preventDefault()
    e.target.style.boxShadow= "4px 0px rgba(80,80,200,.3)";
}
var dragleave = function(e){
    e.preventDefault()
    e.target.style.boxShadow= "0px 0px rgba(80,80,200,.3)";
}
var cancel = function(e){
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    return false;
};
var container = document.querySelector('#div1');
var targets= document.querySelectorAll('[data-role="drag-drop-target"]');

[].forEach.call(targets, function(target){
    target.addEventListener('dragstart', dragStart, false);
    target.addEventListener('dragenter', cancel, false);
    target.addEventListener('dragover', dragover, false);
    target.addEventListener('dragleave', dragleave, false);
    target.addEventListener('drop', dropped, false);
    target.setAttribute("draggable","true");
    target.style.resize="both";
})
