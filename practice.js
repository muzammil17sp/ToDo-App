var input = document.getElementById("input")
var main = document.getElementById("mainItem");
function Addtodo() {
    var newLi = document.createElement("LI")
   var align =  document.createTextNode(input.value)
   newLi.appendChild(align)
   
    
   var dlt = document.createElement("button")
   var insert = document.createTextNode("DELETE")
   dlt.setAttribute("onclick",'deleteTodo(this)')
   dlt.setAttribute("class","button")
   dlt.appendChild(insert)
  newLi.appendChild(dlt)
   var edited = document.createElement("button")
   var inert = document.createTextNode("EDIT TODO")
   edited.setAttribute("onclick","edit(this)")
   edited.setAttribute("class","button")

   edited.appendChild(inert)
   newLi.appendChild(edited)
   main.appendChild(newLi)

input.value=" "


   main.appendChild(newLi)
}
function deleteTodo(e) {
    e.parentNode.remove()
}
function edit(e) {
    var text = prompt("new text",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=text
}
function dltALL() {
    main.innerHTML=" "
}  