Teste frontend Apus

Instalação

- Após clonar o repositório basta seguir os comandos padrões
    npm install
    npm run dev

Observações gerais

- Sistema em ReactJS, utilizando Typescript;
- Foi utilizada a biblioteca de ícones react-icons;
- Rotas feitas com router-dom e requisições com axios;
- Durante o procedimento, devido a um erro de CORS no acesso à API, preferi utilizar o domínio cors-anywhere, para acessá-lo, basta seguir a nota ao pé da documentação;
- Tentei diversificar as abordagens no código para mostrar mais conceitos, como na forma de uso da estrutura de dados, formas de tipagem;
- Não foi preciso a utilização de gerenciadores globais de estado, como Context ou Redux, dado a simplicidade do problema e a comunicação curta entre os componentes;
- Preferi manter todas as informações dos cards na apresentação, tratando booleanos como 0 e 1 e tratando os dados na interface da melhor forma, sem perder a estrutura proposta no figma;
- Alguns dados, como latitude ou timestamps retornados nos cards não foram tratados devido a especificação;
- Não foi incluida paginação nas consultas devido a falta dessa informação na documentação da API, retornando sempre os primeiros 100 nomes.

Diretórios

- Foi utilizado o conceito de atomic design para a construção da árvore de componentes.
- Definidas duas páginas, de listagem e consulta.
- Dados da API e requisições disponíveis na pasta services, juntamente à uma pasta de funções externas
- Todas as escolhas de estilização e temas estão organizadas no diretório de nome "theme", contando com definições gerais de estilização, fontes e cores utilizadas.
- Tipagens centralizadas na pasta types

*Para rodar as requisições, basta acessar o site https://cors-anywhere.herokuapp.com/corsdemo e clicar em "request temporary access to demo server".