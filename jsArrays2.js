
var input = 'string';
input.split('');
var container = [input];




function compareValues(container) {
    let i;
    let b;
    for( i = 0; i < container.length; i++){
        for( b = container.lengt-1; b > i; b--){
            if( container[i] === container[b]){
    
              console.log([i])
            }
            else{
            console.log('is not Palodromic');
            }
           
        }
            
    }
   
 
}




