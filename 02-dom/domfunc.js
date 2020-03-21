

const DOMFunctions = {

    createListItem: (itemNum) => {     

      const listItem = document.createElement("LI");       
      const textnode = document.createTextNode("Item " + itemNum); 
      listItem.appendChild(textnode);

      return listItem;
    },

    createCard: cardNum => {
        //create elements we need 
        const div = document.createElement("div");
        const h4 = document.createElement("h4");
        const beforeButton = document.createElement("button");
        const afterButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const beforeText = document.createTextNode("Add Before");
        const afterText = document.createTextNode("Add After");  
        const delText = document.createTextNode("Delete"); 
        const cardText = document.createTextNode("Card " + cardNum); 

        //attach buttons and h4 to div
        div.appendChild(h4); div.appendChild(beforeButton); div.appendChild(afterButton); div.appendChild(deleteButton);

        //attach text to elements
        div.append(cardText); h4.append(cardText); beforeButton.append(beforeText); afterButton.append(afterText); deleteButton.append(delText); 

        //add style to card
        div.className = 'card'; div.style.border = "2px solid black";

        return div;
    }   

    
}

export default DOMFunctions;