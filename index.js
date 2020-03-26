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
   // Delete Item 
   
        $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
            event.preventDefault();
            $(event.target).closest('li').remove(); 
        })
    //Checked Item

    $('.shopping-list').on('click', '.shopping-item-toggle ', function (event) {
        event.preventDefault();
        //$(this).parent().parent().find('.shopping-item').toggleass('.shopping-item-checked');
        $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item-checked');
       // $(document).on('click')
        //console.log($(event.target).closest('li').find('.shopping-item'));
        
    })
}
$(shoppingList);