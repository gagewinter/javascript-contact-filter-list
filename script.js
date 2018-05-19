//get input element
let filterInput = document.getElementById('filterInput');

//add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    
  //get value of user input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
   //get names from list
    let ul = document.getElementById('names');
    
    //get items 
    let li = ul.querySelectorAll('li.collection-item');
    
    //loop through the li's in collection
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
           li[i].style.display = '';
           } else {
              li[i].style.display = 'none'; 
           }
        
    }
    
};