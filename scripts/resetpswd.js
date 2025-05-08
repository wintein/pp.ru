function validateForm() { 
    const emailInput = document.getElementById('email'); 
   
    if (!emailInput.value) {  
        return false; 
    } 
    window.location.href = "newpswd.html" 
    return false;  
    } 
    