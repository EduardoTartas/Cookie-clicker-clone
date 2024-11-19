# Cookie Clicker Clone

Este projeto é um clone do popular jogo Cookie Clicker, desenvolvido em TypeScript e JavaScript. A aplicação permite aos usuários clicar em um cookie para ganhar pontos e comprar upgrades que aumentam a produção de cookies automaticamente.

## Tecnologias Utilizadas
- **TypeScript**: Linguagem de programação utilizada para implementar a lógica do jogo, garantindo maior segurança e escalabilidade.
- **JavaScript**: Utilizado para manipulação do DOM e interatividade.
- **HTML**: Estrutura da página web.
- **CSS**: Estilização da interface do usuário.

## Funcionalidades Principais
### Gerenciamento de Entidades
- **Cookie**: O usuário pode clicar no cookie para ganhar pontos.
- **Grandma**: Produz cookies automaticamente a cada segundo.
- **Farm**: Produz mais cookies automaticamente a cada segundo.
- **Mine**: Produz ainda mais cookies automaticamente a cada segundo.

### Operações de Jogo
- **Clique no Cookie**: O usuário pode clicar no cookie para ganhar pontos.
- **Comprar Upgrades**: O usuário pode comprar upgrades (Grandma, Farm, Mine) para aumentar a produção automática de cookies.
- **Salvar Progresso**: O progresso do jogo é salvo automaticamente no localStorage do navegador.
- **Carregar Progresso**: O usuário pode carregar o progresso salvo ao abrir o jogo novamente.

## Objetivos do Projeto
- **Aprender TypeScript**: Aplicar conceitos fundamentais de TypeScript em um projeto prático.
- **Desenvolver Lógica de Jogo**: Implementar funcionalidades de um jogo incremental de forma simplificada.
- **Interação com o Usuário**: Criar uma interface interativa para que o usuário possa clicar no cookie e comprar upgrades.

## Estrutura do Projeto
### Arquivo Principal (index.ts)
O arquivo principal contém a lógica do jogo, incluindo funções para salvar e carregar o progresso, atualizar a interface do usuário e gerenciar eventos de clique e compra de upgrades.

### Classe Entity (Entity.ts)
Esta classe gerencia os atributos e métodos relacionados às entidades do jogo (Cookie, Grandma, Farm, Mine). Ela contém métodos para comprar upgrades, calcular custos e atualizar a produção de cookies.

### Arquivo de Estilos (index.css)
O arquivo de estilos define a aparência da interface do usuário, incluindo a disposição dos elementos, animações e responsividade.

### Arquivo HTML (index.html)
O arquivo HTML estrutura a página web, incluindo elementos como o cookie clicável, contadores de pontos e botões de compra de upgrades.

## Como Executar o Projeto
1. Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` em um navegador web.
3. Clique no cookie para ganhar pontos e compre upgrades para aumentar a produção automática de cookies.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.