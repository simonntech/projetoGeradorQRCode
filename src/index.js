import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(promptSchemaMain, async (err, choice) => {
        if(err) console.log(err);

        if(choice.select == 1) await createQRCode();
        if(choice.select == 2) await createPassword();
    });

    prompt.start();
}

main();