    const dadosTestemunhos = {
            testemunho1: {
                nome: "Maria da Silva",
                texto: "A proteção divina durante o tornado mudou a minha vida e fortaleceu minha fé de uma forma indescritível. Estar dentro do Santuário naquele momento de desespero e sentir a paz de Deus nos cobrindo foi o maior milagre que já presenciei. O Santuário Santo Antônio é verdadeiramente um lugar de abrigo e esperança."
            },
            testemunho2: {
                nome: "João Carlos",
                texto: "Estava presente na celebração da Crisma com centenas de fiéis no dia do tornado. Quando ouvimos o vento forte lá fora, nos unimos em uma só oração. Ninguém se feriu dentro da igreja. Sentimos a presença real de Deus nos protegendo sob a intercessão de Santo Antônio. Sou grato a Deus todos os dias por essa graça."
            },
            testemunho3: {
                nome: "Ana Paula",
                texto: "O Santuário da Esperança é um porto seguro para a nossa família e toda a comunidade de Rio Bonito do Iguaçu. A forma como a igreja acolheu as famílias, servindo de abrigo e arrecadação de doações logo após a tragédia, mostrou o verdadeiro amor cristão em ação."
            }
        };

        function abrirModal(id) {
            const modal = document.getElementById('modalTestemunho');
            const nomeElem = document.getElementById('modalNome');
            const textoElem = document.getElementById('modalTexto');

            if(dadosTestemunhos[id]) {
                nomeElem.innerText = dadosTestemunhos[id].nome;
                textoElem.innerText = dadosTestemunhos[id].texto;
                modal.style.display = "flex";
            }
        }

        function fecharModal() {
            document.getElementById('modalTestemunho').style.display = "none";
        }

        window.onclick = function(event) {
            const modal = document.getElementById('modalTestemunho');
            if (event.target === modal) {
                fecharModal();
            }
        }