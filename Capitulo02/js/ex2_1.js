// cria referencia ao form e ao elemento h3 (Onde a resposta será exbida)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")
//Cria um 'ouvinte' de evento, acionando o botão submit for clicado
frm.addEventListener("submit",(e) => {
    const nome = document.querySelector("form").inNome.value
    resp.innerText = nome = `Olá ${nome}`
    e.preventDefault()
})