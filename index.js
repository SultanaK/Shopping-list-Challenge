function shoppingList() {
    $('#js-shopping-list-form').on('submit', function (event) {
        event.preventDefault();
        //adds new list item to shopping list
        let input = $('#shopping-list-entry').val();
        if(input.length > 0 ){
           $('.shopping-list').append(
              ` <li>
                   <span class="shopping-item">${input}</span>
                   <div class="shopping-item-controls">
                       <button class="shopping-item-toggle">
                           <span class="button-label">check</span>
                       </button>
                       <button class="shopping-item-delete">
                           <span class="button-label">delete</span>
                       </button>
                   </div>
               </li>`
           )
            $('#shopping-list-entry').val(' ') 
        }
        else return alert(`Input can't be empty`) 
        })
    }
   
    
//}

$(shoppingList);