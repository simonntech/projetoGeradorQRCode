import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import chalk from "chalk";
import createQRCode from "./services/qr-code/create.js";

async function main() {
    prompt.get(mainPrompt, async (err, choice) => {
        if(choice.select == 1) await createQRCode(); //console.log(chalk.bold.bgWhiteBright("👨‍💻 Gerador de QR CODE"));
        if(choice.select == 2) console.log(chalk.bold.bgWhiteBright("🔑 Gerador de PASSWORD"));
    });

    prompt.start();
}

main();