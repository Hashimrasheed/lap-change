class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    } 

    //insert last
    insertLast(data) {
        let node = new Node(data);
        let current;

        //if empty make head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    //insert at index
    insertAt(data, index) {
        //if index = 0
        if(index === 0) {
            this.head = new Node(data, this.head)
            return;
        }
        //if index is out of range
        if(index > 0 && index >this.size) {
            return;
        }
        const node = new Node(data);
        let current, previous;

        //set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = this.head;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;

        this.size++;
    }

    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        //remove first
        if(index ==0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }
        this.size--;
    }

    //clear list
    clearList() {
        this.head = null;
        this.size = null;
    }

    //search by index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while(current) {
            if(count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    //print list

    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const node1 = new linkedList();

node1.insertFirst(400);
node1.insertFirst(200);
node1.insertLast(800);
node1.insertAt(300, 1)

// node1.removeAt(0)
node1.clearList();

node1.printListData();
// node1.getAt(3)