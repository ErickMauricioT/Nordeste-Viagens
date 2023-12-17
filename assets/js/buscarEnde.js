document.addEventListener('DOMContentLoaded', function() {
  // Função para buscar o endereço
  function buscarEndereco() {
    const cep = document.getElementById('cepCad').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          document.getElementById('endCad').value = 'CEP não encontrado';
        } else {
          const enderecoCompleto = `${data.logradouro}, ${data.localidade} - ${data.uf}`;
          document.getElementById('endCad').value = enderecoCompleto;
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }

  // Adicionando evento para buscar o endereço ao digitar o CEP
  document.getElementById('cepCad').addEventListener('input', buscarEndereco);
});
