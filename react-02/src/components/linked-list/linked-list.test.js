
import {Node, LinkedList} from './linked-list.js';


test('Our Node Class', () => {
    let node = new Node('id_1','Math',36);
    expect(node.subject).toBe('Math');
    expect(node.id).toBe('id_1');
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
    expect(list.first().id).toBe('id_1');
    expect(list.last().id).toBe('id_1');
    expect(list.next().id).toBe('id_1');
    expect(list.prev().id).toBe('id_1');

    list.insert('Business', 55);
    expect(list.getCurrent().id).toBe('id_2');    
}); 