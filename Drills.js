const BinarySearchTree = require('./BST');
const Queue = requrie('./queue');


//3. Find Book
function FindBook(library, dewey,title , start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? library.length : end;

    if (start > end) {
        return null;
    }

    const index = Math.floor((start + end) / 2);
    const item = library[index];
    //If we found the Dewey code index section, then we check the book title
    if (item.dewey === dewey) {
        if (item.title===title){
            return item;
        }
    }
    else if (item < dewey) {
        return binarySearch(library, dewey,title, index + 1, end);
    }
    else if (item > dewey) {
        return binarySearch(library, dewey,title, start, index - 1);
    }
};


//4. Searching in a BST

//in-order:  14 15 19 25 27 35 79 89 90 91
//pre-order: 35 25 15 14 19 27 89 79 91 90
//post-order: 14 19 90 15 27 79 91 25 89 35

//post-order:  5 7 6 9 11 10 8
//pre-order:  8 6 5 7 10 9 11


//5. Implement different tree traversals

function tree_traversals(){
    let tree = new BinarySearchTree();
    tree.insert(25, '25');
    tree.insert(15, '15');
    tree.insert(50, '50');
    tree.insert(10, '10');
    tree.insert(24, '24');
    tree.insert(35, '35');
    tree.insert(70, '70');
    tree.insert(4, '4');
    tree.insert(12, '12');
    tree.insert(18, '18');
    tree.insert(31, '31');
    tree.insert(44, '44');
    tree.insert(66, '66');
    tree.insert(90, '90');
    tree.insert(22, '22');

    return tree;
}

function preOrder(tree){
    console.log({ preOrder: tree.key });
    if (tree.left) {
      preOrder(tree.left);
    }
    if (tree.right) {
      preOrder(tree.right);
    }
};

function inOrder(tree){
    if (tree.left) {
      inOrder(tree.left);
    }
    console.log({ inOrder: tree.key });
    if (tree.right) {
      inOrder(tree.right);
    }
};

function postOrder(tree){
    if (tree.left) {
      postOrder(tree.left);
    }
    if (tree.right) {
      postOrder(tree.right);
    }
    console.log({ postOrder: tree.key });
};
//preOrder(tree_traversals());
//inOrder(tree_traversals());
//postOrder(tree_traversals());


//6. Find the next commanding officer
//Since the ranking decreases from left to right for each row
//we will use BFS for this exercise.

function bfs(tree, values = []) {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
        const node = queue.dequeue(); //remove from the queue
        values.push(node.value); // add that value from the queue to an array

        if (node.left) {
            queue.enqueue(node.left); //add left child to the queue
        }

        if (node.right) {
            queue.enqueue(node.right); // add right child to the queue
        }
    }

    return values;
}

function commander(){
    let tree = new Queue();
    tree.enqueue('Captain Picard');
    tree.enqueue('Commander Riker');
    tree.enqueue('Commander Data');
    tree.enqueue('Lt. Cmdr. Worf');
    tree.enqueue('Lt. Cmdr. LaForge');
    tree.enqueue('Lt. Cmdr. LaForge');
    tree.enqueue('Lieutenant security-officer');
    tree.enqueue('Lieutenant Selar');
    return tree;
}

//bsf(comander(), value);