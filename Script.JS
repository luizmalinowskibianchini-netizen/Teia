// Aguarda o carregamento completo da página antes de executar os scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Efeito dinâmico no cabeçalho (Header) ---
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        // Se a página rolar mais de 50 pixels para baixo, escurece o menu e adiciona sombra
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
            header.style.backgroundColor = '#1a252f'; 
            header.style.transition = 'all 0.3s ease';
        } else {
            // Volta ao normal quando estiver no topo
            header.style.boxShadow = 'none';
            header.style.backgroundColor = '#2c3e50'; 
        }
    });

    // --- 2. Rolagem suave (Smooth Scroll) para os links ---
    // Seleciona todos os links do menu e o botão principal
    const links = document.querySelectorAll('.nav-links a, .btn');

    links.forEach(link => {
        link.addEventListener('click', function(evento) {
            const destinoId = this.getAttribute('href');
            
            // Só aplica a rolagem se o link for uma âncora (começar com #)
            if (destinoId.startsWith('#')) {
                evento.preventDefault(); // Impede o pulo seco padrão do HTML
                
                const secaoDestino = document.querySelector(destinoId);
                
                if (secaoDestino) {
                    // Calcula a altura do cabeçalho para o conteúdo não ficar escondido atrás dele
                    const alturaCabecalho = header.offsetHeight;
                    const posicaoTopo = secaoDestino.offsetTop - alturaCabecalho;

                    // Faz a rolagem suave até a seção
                    window.scrollTo({
                        top: posicaoTopo,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 3. Mensagem de teste ---
    // Pressione F12 no navegador e vá na aba "Console" para ver essa mensagem
    console.log("🚀 JavaScript carregado com sucesso! Seu site está interativo.");
});
