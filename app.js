

//create a variable to store the number of drinks;
    var i=0;
    

    //create an event capture click function for the beer image
    $("#beer").click(function(){
//        numberOfDrinks.innerText = i;
        //increase the counting variable of the drinks by 1
            i=i+1;
        
        //display the new number of drinks on the screen
            $('#numberOfDrinks').replaceWith(i);
        
        //create a conditional statement to check if the word drinks should be singular or plural depending on the number of drinks drunk
            if i= 0 then
//                pluralDrink.innerText = "drinks";
//                var td = document.getElementyById('numberOfDrinks');
//                td.textContent= i;
                var drinks = " drinks";
                $('#pluralDrink').replaceWith(drinks);
            else if i=1 then
//                pluralDrink.innerText = "drink";
                var drinks = " drink";
                $('#pluralDrink').replaceWith(drinks);
            else
//                pluralDrink.innerText = "drinks";
                var drinks = " drinks";
                $('#pluralDrink').replaceWith(drinks);
        });
        



        //create an event capture click function for the wine image
        $("#wine").click(function(){
//        numberOfDrinks.innerText = ;
//        pluralDrink.innerText = ;
            //increase the counting variable of the drinks by 1
            i=i+1;
            
            //display the new number of drinks on the screen
            $('#numberOfDrinks').replaceWith(i);
            
            //create a conditional statement to check if the word drinks should be singular or plural depending on the number of drinks drunk
            if i= 0 then
//                pluralDrink.innerText = "drinks";
//                var td = document.getElementyById('numberOfDrinks');
//                td.textContent= i;
                var drinks = " drinks";
                $('#pluralDrink').replaceWith(drinks);
            else if i=1 then
//                pluralDrink.innerText = "drink";
                var drinks = " drink";
                $('#pluralDrink').replaceWith(drinks);
            else
//                pluralDrink.innerText = "drinks";
                var drinks = " drinks";
                $('#pluralDrink').replaceWith(drinks);
        });
        




        //create an event capture click function for the shot image
        $("#shot").click(function() {
//        numberOfDrinks.innerText = ;
//        pluralDrink.innerText = ;
            
            //increase the counting variable of the drinks by 1
            i=i+1;
            
            //display the new number of drinks on the screen
            $('#numberOfDrinks').replaceWith(i);
            
            //create a conditional statement to check if the word drinks should be singular or plural depending on the number of drinks drunk
            if i= 0 then
//                pluralDrink.innerText = "drinks";
//                var td = document.getElementyById('numberOfDrinks');
//                td.textContent= i;
                var drinks = " drinks";
                $('#pluralDrink').replaceWith(drinks);
            else if i=1 then
//                pluralDrink.innerText = "drink";
                var drinks = " drink";
                $('#pluralDrink').replaceWith(drinks);
            else
//                pluralDrink.innerText = "drinks";
                var drinks = " drinks";
                $('#pluralDrink').replaceWith(drinks);
        });