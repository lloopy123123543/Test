document.onkeydown = checkButton;


function checkButton(event){
    if (event.keyCode===38){
        console.log('Stock');
        if(Stock.x>0){
            
        }

        
        

    }

    if (event.keyCode === 40){
        console.log('Tock')
        if(Tock.x>0){
            
        }
       
    }

    // Adwenty(renderStock(Stock))

}



// function say (Stock){
//     if(Stock.x>0){
//     setInterval(Stock.x+=1, 1000)}
// }



function renderStock (Stock){
    document.getElementById(Stock.id).style.top=Stock.y + 'px';
    document.getElementById(Stock.id).style.left=Stock.x + 'px';

    
}





function renderTock (Tock){
    document.getElementById(Tock.id).style.top=Tock.y + 'px';
    document.getElementById(Tock.id).style.left=Tock.x + 'px';
    let i = 1;
    setTimeout(function() {
        Tock.y+=Tock.step;
        renderTock (Tock)
        

      }, 2000)
    
}

// function ser (Stock){;
// }


// function Adwenty(Stock) {
//     document.getElementById(Stock.id).style.top=Stock.y + 'px';
//     document.getElementById(Stock.id).style.left=Stock.x + 'px';
//     Stock.x+=1;

// }