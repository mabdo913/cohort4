class Node {
    constructor(id, subject, amount) {
        this.id = id
        this.subject = subject
        this.amount = amount
        this.forwardNode = null
    }

    show() {
        return "Subject: " + this.subject + " Amount: " + this.amount
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.current = null
        this.count = 0
    }

    getCurrent() {
        return this.current
    }

    first() {
        this.current = this.head
        return this.current
    }

    last() {
        this.current = this.tail
        return this.current
    }

    next() {
        if (this.current) {
            this.current = this.current.forwardNode;
        }
        return this.current;
    }

    prev() {
        if (this.current) {
            this.current = this.current.previousNode;
        }
        return this.current;
    }

    insert(subject, amount) {
        this.count++;
        const id = 'id_' + this.count;
        const node = new Node(id, subject, amount)

        if (this.current) {
            node.forwardNode = this.current.forwardNode
            node.forwardNode.previousNode = node

            this.current.forwardNode = node
            node.previousNode = this.current

            this.current = node;
            this.tail = node
        } else {
            node.forwardNode = node
            node.previousNode = node
            this.current = node
            this.head = node
            this.tail = node
        }
        return id;
    }

    delete() {

    }

}

export { Node, LinkedList }














