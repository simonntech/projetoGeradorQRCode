//refatoração: extracted method

async function permittedCharacters() {
    let permitted = [];

    if (process.env.UPPERCASE_LETTERS === "true") permitted.push(... "ABCEDEFGHIJKLMNOPQRSTUWXYZ");

    if (process.env.LOWERCASE_LETTERS === "true") permitted.push(..."abcedfghizjklmnopqrstuwxyz");

    if (process.env.NUMBERS === "true") permitted.push(... "0123456789");

    if (process.env.SPECIAL_CHARACTERS === "true") permitted.push(... "!@#$%¨&*()-_");

    return permitted;
}
export default permittedCharacters