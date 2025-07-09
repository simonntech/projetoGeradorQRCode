import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if(err) {
        console.log("Error on app");
        return;
    }

    const isSmall = result.type == 2; //retorna booleano
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("✔ QR CODE gerado! \n"));
        console.log(qrcode)
    })

}

export default handle;