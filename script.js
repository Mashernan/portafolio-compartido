document.getElementById('buscador').addEventListener('input', function() {
    let filtro = this.value.toLowerCase();
    let usuarios = document.querySelectorAll('#lista-usuarios li');

    usuarios.forEach(usuario => {
        let texto = usuario.textContent.toLowerCase();
        usuario.style.display = texto.includes(filtro) ? '' : 'none';
    });
});
