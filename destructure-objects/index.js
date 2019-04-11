const personalInfo = {
    firstName: 'Itge',
    lastName: 'Ganbold',
    city: 'Charlotte',
    state: 'NC'
}

const {firstName, lastName} = personalInfo;

console.log(`${firstName} ${lastName}`);

// rename
const {firstName: fn, lastName: ln} = personalInfo;

console.log(`${fn} ${ln}`);