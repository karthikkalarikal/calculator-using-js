var saved='' ;
function btnclick(val)
{
  document.getElementById('screen').value+=val;
} 


function clearScreen()
{
  document.getElementById('screen').value='';
  saved='';
}

function btnclickOperation (opn) {
  if(opn != '='){
  
  saved +=document.getElementById('screen').value+=opn;
  document.getElementById('screen').value="";
  console.log(saved);
  
  }
  else{

  saved +=  document.getElementById('screen').value;
  var Result = eval(saved);
  document.getElementById('screen').value = Result;
  
  }
}
