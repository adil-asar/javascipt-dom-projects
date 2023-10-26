
function openTab(event,tabName){
var tablink , tabcontent;
tabcontent = document.querySelectorAll('.tabcontents')
for (let i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display="none"
}
tablink=document.querySelectorAll('.tablink')
for (let i = 0; i < tablink.length; i++) {
  tablink[i].className = tablink[i].className.replace(" active", "");
}

document.getElementById(tabName).style.display="block"
event.currentTarget.className += " active";
}