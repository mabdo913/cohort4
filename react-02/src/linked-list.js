class Node {
    constructor(subject, amount) {
        this.subject = subject
        this.amount = amount
        this.forwardNode = null        
    }

    show() {
        return this.subject + " " + this.amount
    }
}

class LinkedList {
    constructor() {
        this.head = null 
        this.current = null       
    }

    insert(subject,amount) {
        // create a new node
        const newNode = new Node(subject,amount);
        //special case: no items in the list yet
        if (this.head === null) {
            // just set the head to the new node
            this.head = newNode;
        } else {
            // start out by looking at the first node
            let current = this.head;
            // follow `next` links until you reach the end
            while (current.forwardNode !== null) {
                current = current.forwardNode;
            }
            // assign the node into the `next` pointer
            current.forwardNode = newNode;
        }
    }

    first () {
        this.current = this.head
    }

    last () {
        
    }

    next () {
        
    }

    previous () {
        
    }

    delete () {
        
    }


}

let list = new LinkedList();
list.insert('games',400)
console.log(list)
list.insert('toys',100)
console.log(list)
