import DOMFunctions from './domfunc.js';

addButton.addEventListener("click", () => {
   const ol = document.getElementById("itemList");
   const li = DOMFunctions.createListItem(ol.childElementCount+1);
   document.getElementById("itemList").appendChild(li);   
});

document.body.addEventListener("click", e => {
   const parent = e.target.parentNode, buttonText = e.target.textContent, cardGroup = e.target.parentNode.parentNode.parentNode; 
   //const cardArray = Array.from(cardGroup.children); 
   //console.log(cardArray);

   if (e.target.nodeName == 'BUTTON') {
         if (buttonText == 'Delete') {
           parent.remove();                  
         }
         if (buttonText == 'Add Before') {
            const newCard = DOMFunctions.createCard();            
            parent.insertAdjacentElement('beforebegin',newCard); 
            //domfunc.updateCards(parent);           
         }
         if (buttonText == 'Add After') {
            const newCard = DOMFunctions.createCard();            
            parent.insertAdjacentElement('afterend',newCard); 
         }      
   } 
});