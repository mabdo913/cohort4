import fetchFunctions from './fetch-api.js';

test('Check to see if async function "workingWithData()" works...', async (done)=> {
    await fetchFunctions.workWithData(); // logs first name and all 10 names to the console
    done();   
});

test('Check values of variables', async (done) => {    
    const json = await fetchFunctions.postData(fetchFunctions.url, fetchFunctions.me);
    console.log('Status code:', json.status, 'Status text:', json.statusText); // logs 'Status code: 201 Status text: Created' to the console   
    done(); 
});