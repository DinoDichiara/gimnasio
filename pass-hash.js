const bcrypt = require('bcrypt');

async function hashPassword() {
    const myPassword = 'FuturoR6'
    const hash = await bcrypt.hash(myPassword, 10)
    console.log(hash);
}

hashPassword()