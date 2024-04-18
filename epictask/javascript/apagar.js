function apagar(titulo){
    const card = document.querySelector(`#${titulo}`)
    card.classList.add("apagando")
    card.addEventListener("animationend",  () => card.remove() )

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [] 
    const tarefasfiltradas = tarefas.filter(tarefa => tarefa.titulo != titulo)
    localStorage.setItem("tarefas", JSON.stringify(tarefasfiltradas))

    atualizar()
}
