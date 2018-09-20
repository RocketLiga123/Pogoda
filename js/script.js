menu.onclick = function myFunction() {
  var x = document.getElementById("myTopnav");

  if(x.className === "topnav") {
    x.className += " responsive";
  } else{
     x.className = "topnav";
  }
}
$('#datepicker1').datepicker({
minDate: -7,
maxDate: +7
});

function validDate(){ 
  var date = document.GetElementById('DATE').value;
  var d_arr = date.split('.');
  var d = new Date(d_arr[2]+'/'+d_arr[1]+'/'+d_arr[0]+''); 
  if (d_arr[2]!=d.getFullYear() || d_arr[1]!=(d.getMonth() + 1) || d_arr[0]!=d.getDate()) {
    return false;
  };
  return true;
}

