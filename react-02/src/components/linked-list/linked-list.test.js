
import {Node, LinkedList} from './linked-list.js';


test('Our Node Class', () => {
    let node = new Node('id_1','Math',36);
    expect(node.subject).toBe('Math');
    expect(node.id).toBe('id_1');
    expect(node.show()).toBe('Subject: Math Amount: 36')
});

test('Our LinkedList Class', () => {
    const list = new LinkedList();
    // current, first, last, next, previous should all be null
    expect(list.getCurrent()).toBeNull();    
    expect(list.first()).toBeNull();
    expect(list.last()).toBeNull();
    expect(list.next()).toBeNull();
    expect(list.prev()).toBeNull();

    
    list.insert('History', 25);
    expect(list.getCurrent().id).toBe('id_1');
    expect(list.getCurrent().show()).toBe('Subject: History Amount: 25')
    expect(list.first().id).toBe('id_1');
    expect(list.last().id).toBe('id_1');
    expect(list.next().id).toBe('id_1');
    expect(list.prev().id).toBe('id_1');

    //add second node and run some tests
    list.insert('Business', 55);
    expect(list.getCurrent().id).toBe('id_2');  
    expect(list.first().id).toBe('id_1');
    expect(list.first().show()).toBe('Subject: History Amount: 25');  
    // move back one node from the first position
    expect(list.prev().id).toBe('id_2');
    expect(list.getCurrent().show()).toBe('Subject: Business Amount: 55')
    list.next();
    expect(list.getCurrent().show()).toBe('Subject: History Amount: 25')
    list.last()
    expect(list.getCurrent().show()).toBe('Subject: Business Amount: 55')
}); 

test('Our LinkedList Class with three nodes', () => {
    const list = new LinkedList();
    list.insert('History', 25);
    list.insert('Current Affairs', 75);
    list.insert('Business', 55);

    expect(list.getCurrent().id).toBe('id_3');
    expect(list.first().id).toBe('id_1');
    expect(list.last().id).toBe('id_3');
    expect(list.next().id).toBe('id_1');
    expect(list.prev().id).toBe('id_3');
}); 