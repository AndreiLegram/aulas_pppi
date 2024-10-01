function soma(...numbers) {
    return numbers.reduce((x, y) => x + y)
}

document.body.onload = () => {
    const btn = document.getElementById('btn')
    btn.onclick = () => {
        btn.classList.toggle('desativado')
        btn.classList.toggle('ativado')
    }

    const n1 = Number(prompt("Entre com o primeiro número:"))
    const n2 = parseInt(prompt("Entre com o segundo número:"))
    const n3 = +prompt("Entre com o terceiro número:")
    alert(soma(n1, n2, n3))
}
