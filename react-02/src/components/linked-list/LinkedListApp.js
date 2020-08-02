import React from 'react'
import { useState } from 'react'
import ButtonGroup from './ButtonGroup.js'
import LinkedListCard from './LinkedListCard.js'
import AddNode from './AddNode.js'
import { Node, LinkedList } from './linked-list.js'



export default function LinkedListApp() {

    const linkedList = new LinkedList();
    const [list, setList] = useState(null);

    
    return (
        <div>
          <button className="l">New Node</button>
          <AddNode />
           <h3>Current Node</h3>                  
            <LinkedListCard />
            <ButtonGroup />
        </div>
    )
}
