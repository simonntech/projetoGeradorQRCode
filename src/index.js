import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";

async function main() {
    prompt.get(mainPrompt, async (err, choice) => {
        if(choice.select == 1) console.log("Escolheu o QR CODE");
        if(choice.select == 2) console.log("Escolheu o PASSWORD");
    });

    prompt.start();
}

main();