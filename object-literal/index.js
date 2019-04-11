function addressMaker (city, state) {
    const newAddress = {newCity: city, newState: state};
    console.log(newAddress);
    // out: { newCity: 'Charlotte', newState: 'NC' }

    // new way
    const address = {city, state};
    console.log(address);
    // out: { city: 'Charlotte', state: 'NC' }
}

addressMaker('Charlotte', 'NC');