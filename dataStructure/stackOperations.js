class stack {
    constructor() {
        this.items = []; 
        this.count = 0;
    }

    //add element to top of stack
    push(element) {
        this.items[this.count] = element
        console.log(`${element} is added to ${this.count}`);
        this.count += 1
        return this.count -1
    }
}

const st = new stack;

st.push(100)
st.push(200)
st.push(300)