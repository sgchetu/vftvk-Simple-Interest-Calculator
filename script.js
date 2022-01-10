function compute()
{

var principal = document.getElementById("principal").value;
    
function setFocusToTextBox(){
     document.getElementById("principal").focus();
    }
    
function myFunction() {
    // If amount/principal is Not a Number or less than one;
        if (isNaN(principal) || principal < 1 ||principal=='') {
        alert("Please enter a positive amount");
        document.getElementById("result").innerHTML='';
        setFocusToTextBox();
        fail;
  } else {
        updateRate() ;
    
  }

  }

    var rate = document.getElementById("rate").value;

    function updateRate() 
        {
            var rateval = document.getElementById("rate").value;
            document.getElementById("rate_val").innerText=rateval+"%";


        }  


    myFunction() ;
 
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) /100;
    var year = new Date().getFullYear()+parseInt(years);

    var amount=+principal+ +interest;
        
    document.getElementById("result").innerHTML="\<br\>\<br\>If you deposit "+"<mark>"+principal+","+"</mark>"+"\<br\> at the interest rate "+"<mark>"+rate+"%."+"</mark>"+" \<br\> You will receive an amount of "+"<mark>"+amount+"</mark>"+"\<br\>in the year "+"<mark>"+year+"</mark>"+".";

     function setFocusToTextBox(){
     document.getElementById("principal").focus();
    }
    setFocusToTextBox();

    
}
        
