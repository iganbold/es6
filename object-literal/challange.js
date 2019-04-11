// template literal, object literal, object destructureing
function makeAddres(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'US'
    }

    let {city, state} = address;
    let newAddress2 = {city, state, country: 'US'};
    console.log(`${newAddress2.city} ${newAddress2.state} ${newAddress2.country}`);
    // out: Charlotte NC US
}

makeAddres({city: 'Charlotte', state: 'NC'});
