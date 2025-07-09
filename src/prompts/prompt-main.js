const mainPrompt = [
    {
        name: "select",
        description: "Escolha a ferramenta 1 - QRCODE ou 2- PASSWORD",
        pattern: /^[1-2]+/, //padrão utilizando o REGEX
        message: "Escolha entre apenas entre 1 e 2",
        required: true, //obriga a digitar o 1 ou 2!
    }
]

export default mainPrompt;