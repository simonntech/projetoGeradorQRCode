import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR CODE: "),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo do QRCode: \n1-Grande \n2-Pequeno\n"),
        pattern: /^[1-2]+$/, //regex
        message: chalk.red.bold("⛔ Escolha apenas entre 1 e 2!"),
        required: true,
    }
];

export default promptQRCode;