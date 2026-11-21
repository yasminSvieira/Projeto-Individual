# AGENTS.md


## Visão geral

O projeto consiste no desenvolvimento de um site informativo sobre diferentes 
estilos de danças urbanas, apresentando suas características, histórias e particularidades. 
Os estilos abordados serão: Hip-Hop, Break Dance, Locking, Popping, House Dance, Lite Feet, Waacking, Voguing e Krump.

Ao final do conteúdo, o usuário poderá realizar um quiz com o objetivo de avaliar seus conhecimentos e verificar o quanto
conseguiu assimilar das informações apresentadas ao longo do site.

Além disso, o sistema contará com dois gráficos que apresentarão indicadores relacionados ao desempenho do usuário ao 
final de cada tentativa do quiz, permitindo acompanhar sua evolução. Também será implementado um sistema de ranking para 
comparar as pontuações e destacar os melhores resultados.


## Tecnologias

HTML para a estruturação das páginas;
CSS para a estilização e responsividade;
JavaScript para as interações do sistemas;
Banco de dados MySQL para o armazenamento dos dados e informações coletadas;
GitHub para o armazenamento dos códigos utilizados;
API Web-Data-Viz para fazer a conexão entre os diferentes sistemas;
Dashboard para plotar os dados e informações coletadas para o usuário.


## Comandos

npm install - Comando utilizado para instalar as dependências (pacotes, bibliotecas e ferramentas) que o NodeJS necessita para o seu funcionamento;
npm start - Comando utilizado para iniciar a aplicação instalada;
git pull - Baixa as atualizações do github e joga para a máquina local; 
git add . - Move as alterações dos arquivos para a área de preparação;
git commit -m '' - Salva as mudanças e define a mensagem que ficará exposta no github quando o commit for enviado;
git push - Envia os commits da máquina local para o repositório no github.



## Arquitetura

Estrutura das principais pastas:
-public/
    -assets/
        -imgs/
    -css/
    -dashboards/
    -html/
-src/
    -routes/
    -controllers/
    -models/
    -database/

Função de cada pasta:
-assets/ -> Armazena as imagens e arquivos utilizadas no site;
-css/ -> Estilização e responsividade das páginas;
-dashboard/ -> Interface utilizada para realizar a visualização dos dados coletados;
-html/ -> Esqueleto do site, a base;
-routes/ -> Rotas, caminhos por onde os dados serão enviados;
-controllers/ -> Validações que os dados precisam passar antes de montar a query;
-models/ -> Criação de toda query que será efetuada no banco de dados;
-database/ -> Credenciais de banco de dados para efetuar a query.

Fluxo de requisição:
-O usuário realiza uma ação;
-A requisição é encaminhada para a rota correspondente;
-O controller recebe a requisição e realiza o tratamento dos dados;
-O model executa a operação necessária no banco de dados;
-O resultado retorna ao controller;
-A API envia uma resposta que pode ser uma apresentação/visualização dos dados ou informar o resultado da requisição.

Onde criar novos arquivos:
-Interface: diretórios de front-end dentro de public/
-Estilos: public/css/
-Rotas da API: src/routes/
-Tratamento das requisições: src/controllers/
-Consulta de dados: src/models/
-Conexão do banco de dados: src/database/


## Padrões de desenvolvimento

-Seguir o mesmo padrão de mensagens para os commits do github;
-Seguir o mesmo padrão de código do web-data-viz;
-Respeitar a estrutra das pastas já criadas;
-Sempre verificar se uma nova alteração não prejudica outra funcionalidade;
-Variáveis sempre criadas com o "let", não com "var". Quando necessário "const" também pode ser utilizado;
-Nomes das variáveis fáceis de entender;
-Nomes das variáveis sempre em português.


## Cuidados e restrições

-Não modificar a estrutura base da API sem autorização prévia;
-Não adicionar tecnologias não autorizadas;
-Não inventar informações aleatórias sobre os estilos de dança ou sobre as informações do usuário;
-Evitar criar arquivos duplicados, que possuam a mesma funcionalidade;
-Não deixar informações delicadas(senhas, documentos pessoais, etc) expostas no código;
-Não mudar a estrutra do web-data-viz;
-Não criar tabelas, rotas ou funções sem realizar a verificação do que já existe;
-Não modificar partes do sistema que não precisam ser alteradas.


## Regra geral: 

Antes de implementar uma alteração, siga as tecnologias, arquitetura, convenções e restrições descritas neste documento. Caso alguma informação esteja ausente, analise o código existente e siga os padrões já adotados no projeto.
