# Basic Password Authentication
## Password authentication is fundamentally based on two things:
1) Storing password securely (registration/password_update)
2) Verifying password on demand (login)

## Password storage comes as:
1) A password is sent from the client to the server among other credentials
2) The server hashes the password and stores it (commonly in a database)

## What is hashing basically?
- Hashing primarily uses an algorithms that takes a String and outputs a different String
- Hashing ensures the same input always yeilds the same output
- Hashing is nearly impossible to reverse back to original

## Why hashing?
- Hashing ensures only the user knows the original password
- This protects the password from being compromised even by the admins who can access the database

## We use a library called "Bcrypt" in NodeJS for hashing and it works as:
1) It generates a random unique string called "salt"
2) It combines the salt with the password as one then hashes them
3) It combines the salt and the created hash resulting into a "Token"

The output of bcrypt (Token) is what gets stored securely as the "password" which is formatted as:
$Algorithm_Version$Cost_Factor$Base64_Encoded_Salt.Hash
The rounds of hasing done = 2^Cost_Factor

## How is hashing using bcrypt secure?
- The salt is always unique even for the same password
- This unique salt also makes the token always unique
- If token uniqueness didn't exist, someone could build a reusable table of string => hash pairs
- This table can be used to figure out all passwords for any potential leaked tokens
- Unique tokens ensure that attackers have to build such table for every token
- The computing power will be hashing every possible string multipled by the amount of tokens which is insane

## Password verification comes as:
1) The client sends a password to the server
2) The token is retrieved from the database by the server
3) Salt and Hash are extracted from the token
4) The client password is combined with the salt then hashed
5) The yeild hash has to match the token's hash for a correct password
