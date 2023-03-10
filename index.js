let proceed=()=> {
    document.forms["google-sheet"]["Name"].value;
    if(document.getElementById("name").value == null){
        alert("Form must be filled out");
    }else{
        window.open('donate2.html','_self')
    }


}
