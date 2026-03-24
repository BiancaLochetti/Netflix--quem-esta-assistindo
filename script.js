function editProfile(name) {
    alert("Editando o perfil de: " + name);
    // Aqui você poderia abrir um modal para trocar imagem ou nome
}

function addNewProfile() {
    const name = prompt("Digite o nome do novo perfil:");
    if (name) {
        alert("Perfil '" + name + "' criado com sucesso!");
        // Lógica para injetar um novo elemento HTML na lista
    }
}