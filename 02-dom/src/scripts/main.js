import DOMFunctions from './domfunc.js';

addButton.addEventListener("click", () => {
   const ol = document.getElementById("itemList");
   const li = DOMFunctions.createListItem(ol.childElementCount+1);   
   document.getElementById("itemList").appendChild(li);   
});

document.body.addEventListener("click", e => {
   const parent = e.target.parentNode, buttonText = e.target.textContent, cardNum = parent.parentNode.childElementCount+1;   

   if (e.target.nodeName == 'BUTTON') {
         if (buttonText == 'Delete') {
           parent.remove();                  
         }
         if (buttonText == 'Add Before') {
            const newCard = DOMFunctions.createCard(cardNum);            
            parent.insertAdjacentElement('beforebegin',newCard);                       
         }
         if (buttonText == 'Add After') {
            const newCard = DOMFunctions.createCard(cardNum);            
            parent.insertAdjacentElement('afterend',newCard);            
         }      
   } 
});