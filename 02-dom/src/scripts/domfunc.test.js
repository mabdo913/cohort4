import domfunctions from './domfunc';

test('Check if createListItem function works...', ()=> {
    expect(domfunctions.createListItem('test')).toBeTruthy('<li>Item test</li>');
});

test('Check if createCard function works...', ()=> {
    expect(domfunctions.createCard('test')).toBeTruthy();   
});