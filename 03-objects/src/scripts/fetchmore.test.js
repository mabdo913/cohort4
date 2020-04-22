import fetchFunctions from './fetchmore.js';

test('Check to see if async function works...', async (done)=> {
    await fetchFunctions.workWithData(); 
    done();   
});
