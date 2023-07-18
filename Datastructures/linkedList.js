//linked list Class

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    find(index) {
        let i=0, search=this.head;

        while(i < index) {
            search = search.next;
            i++;
        }
      
        return search;
    }

    get(index) {
        if(index < 0 || index >= this.length) throw new Error('Range Error: index out of bounds');
         
        return this.find(index).value;
    }

    append(value) {
        !this.head ? this.head = this.tail = new Node(value) : this.tail = this.tail.next = new Node(value);
        this.length++;
        return this; 
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;

        if(!this.length) this.tail = this.head;
        this.length++;
        return this;
    }

    insertAt(value, index) {
        if( index<0 || index>this.length) throw new Error('Invalid Index');
        if( index === 0) return this.prepend(value);
        if( index === this.length) return this.append(value);
        
        const node = new Node(value);
        const insert = this.find(index-1);
        
            node.next = insert.next;
            insert.next = node;
            this.length++;

        return this;
    }

    deleteIndex(index) {
        let remove;
        if( index<0 || index>=this.length) throw new Error('Invalid Index');

        if( index === 0) {
            remove = this.head;
            this.head = this.head.next;
            if(!this.head) this.tail = null;

        } else {
            
        const previous = this.find(index-1); 
            remove = previous.next;
            previous.next = remove.next;
            if(!previous.next) this.tail = previous;
        }

        this.length--;
        return remove.value;
    }

    delete(value) {
        let node=this.head, prev=null;
        const removed = [];

        while(node) {
            

        }

        return removed;
    }
}


