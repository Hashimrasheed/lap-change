class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        return !this.front;
    }
    enQueue(value) {
        //to create a new node
        let node = new Node(value);

        //if queue empty
        if(this.isEmpty()) {
            this.front = this.back = node;

        }
        else {
            this.back.next = node;
            this.back = node;
        }
        this.print()
    }
    print() {
        
    }
}


let q = new Queue();
q.enQueue(1)
q.enQueue(2)
q.enQueue(3)