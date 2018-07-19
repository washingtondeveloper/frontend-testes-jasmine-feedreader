# Projeto UdaciFeeds

Teste unitario é muito importante para aplicações back-end, não sabia que tinha tanta importância no 

front-end, e o resultado é fantastico.

E esse simples projeto, mostra como você pode aprender a ser organizado e responsavel pelo seus testes.

## Detalhes dos testes

Um dos pontos que gostaria de destacar foi a organização de pastas, onde realmente você isola seu codigo 

de teste.

### Esse foi o pedido da equipe de teste: 

1. Elabore um teste que faça loop em cada feed no objeto allFeeds e garanta que ele tenha uma URL definida e não esteja vazia.

- O sistema tem uma lista de allFeeds, então fiz uma iteração e verifiquei se a url estava definida ou vazia

2. Elabore um teste que faça loop em cada feed no objeto allFeeds, e garanta que ele tenha um nome definido e não esteja vazio.

- O sistema tem uma lista de allFeeds, então fiz uma iteração e verifiquei se o nome estava definido ou vazio

3. Elabore uma nova suíte de testes, denominada "O menu".

4. Elabore um teste que garanta que o elemento de menu permaneça oculto por padrão. Você precisará analisar o HTML e o CSS para determinar como ocultaremos/mostraremos o elemento de menu.

- APRENDIZADO: Compreender mais detalhes da linguagem JavaScript, principalmente na parte de verificar se o elemento tem ou não um atributo.

5. Elabore um teste que garanta que o menu altere a visibilidade quando alguém clica no item de menu. Esse teste deve ter duas expectativas: o menu deve ser exibido quando alguém clica nele e ocultado quando mais um clique é feito.

- O sistema tem um menu que fica oculto por padrão, então eu devo verificar o que faz para esse menu ficar escondido, é uma classe CSS ? ou JS ?.

- APRENDIZADO: Não sabia que eu poderia simular um click com jasmine.

6. Elabore uma suíte de testes denominada "Entradas iniciais".

7. Elabore um teste que garanta que, quando a função loadFeed for chamada e concluir seu trabalho, exista pelo menos um elemento .entry no contêiner .feed.

- APRENDIZADO: Ter o controle da aplicação nos testes.

8. Elabore uma nova suíte de testes, denominada "Nova seleção de feed".

9. Elabore um teste que garanta que, quando um novo feed for carregado pela função loadFeed, o conteúdo realmente mude

- APRENDIZADO: Mais uma vez mostrou um TOTAL controle sobre a aplicação, e usando do melhor do Jasmine.

