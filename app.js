import bcrypt from 'bcrypt';

const password1 = 'd._.g*8aU6XBUMh4';
const password2 = '#ks!sb/1hf@GR04U';

// Assume registration or password update
// Argugment 1 is the password
// Arugment 2 is the salt rounds which indicates the amount of hashing rounds as (2^SaltRounds)
const token = await bcrypt.hash(password1, 10); // Store this in the database

// Assume login
// Argument 1 is the password provided on login
// Argument 2 is the token generatd from the correct password
const compare1 = await bcrypt.compare(password1, token); // Should return true
const compare2 = await bcrypt.compare(password2, token); // Should return false

console.log(`Password 1 match: ${compare1}`);
console.log(`Password 2 match: ${compare2}`);

// This was the fundamentals
// The way you implement this into a real world app is up to you