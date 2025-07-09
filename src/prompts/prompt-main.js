import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.bold.yellow("Escolha a ferramenta \n1-Gerador de QR CODE \n2-Gerador de PASSWORD\n"),
        pattern: /^[1-2]+/, //padrão utilizando o REGEX
        message: chalk.redBright("⛔ Escolha entre apenas 1 e 2!"),
        required: true, //obriga a digitar o 1 ou 2!
    }
]

export default mainPrompt;