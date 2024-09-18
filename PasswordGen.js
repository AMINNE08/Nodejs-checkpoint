const generator = require('generate-password');

// Generate a random password
const password = generator.generate({
    length: 10,
    numbers: true
});

console.log(password);
