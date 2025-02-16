async function carregarClientes() {
    try {
        const response = await fetch("http://localhost:3000/clientes");
        const clientes = await response.json();
        const tbody = document.getElementById("clientesTable");
        tbody.innerHTML = ""; // Limpa a tabela

        clientes.forEach(cliente => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${cliente.id}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefone}</td>
                <td>${cliente.afinidade}</td>
                <td>${cliente.imagem ? `<img src="uploads/${cliente.imagem}" alt="Imagem do cliente">` : "Sem imagem"}</td>
            `;
            tbody.appendChild(tr);
        });

    } catch (error) {
        console.error("Erro ao carregar clientes:", error);
    }
}

// Carregar clientes ao abrir a página
window.onload = carregarClientes;