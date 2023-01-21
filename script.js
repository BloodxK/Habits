const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)     // Cria um novo objeto
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
    // const today = new Date().toLocaleDateString('pt-br').slice(0, -5)   // Transforma a data em string, formato pt-br e remove os últimos 5 caracteres
    const today = "16/01"
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert("Dia " + today + " já incluso ❌")
        return
    }

    alert('Dia ' + today + ' adicionado com sucesso ✅')
    nlwSetup.addDay(today)
}

function save() { 
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))      // Salva os dados da aplicação, transformando elas em string
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}  // Pega os dados salvos em string e converte em array
 
nlwSetup.setData(data)
nlwSetup.load()
