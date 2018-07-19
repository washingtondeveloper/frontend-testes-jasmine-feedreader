/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */ 

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Deve escrever um teste que garanta
         * que o URL foi definido e que não esteja vazio.
         */
        it('deve ter url definida em cada feed', function() {
            const urlPattern = new RegExp(/^(https?):\/\/([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)+(\/[a-zA-Z0-9_-]+)*\/?$/gi);

            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).toMatch(urlPattern);
            });
        });


        /* Deve escrever um teste que garanta
         * que o Name foi definido e que não esteja vazio.
         */
        it('deve ter um nome definido em cada feed', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name). toBeDefined();
                expect(feed.name).toMatch(/[a-z]+/i);
            });
        });
    });


    /* Escrever um novo Suite de Teste com nome 'O menu' */
    describe('O menu', function() {

        /**
         * Escrever um teste que vefique que o menu se econtra
         * escondido por padrão
         */
        it('deve verificar se o menu esta oculto por padrão', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /** Escrever um teste que garanta as seguintes mudanças do menu, 
          * quando o ícone do menu é clicado. Esse teste
          * deve ter duas expectativas: o menu exibe quando
          * clicou e esconde quando clicado novamente
          */
        it('deve verificar se o menu se esconde quando clica e se esconde quando clica', function() {
            
            $('div.header a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('div.header a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Escrever um novo suite de teste com nome 'Entradas iniciais' */
    describe('Entradas iniciais', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        })   

        /**Escreva um teste que quando a função loadFeed() for chamada, verificar
         * se um elemento(com a classe '.entry') esta disponivel dentro do container '.feed'.
         */
        it('deve garantir que a tela seja carregada e verificar se o carregamento de apenas um elemento esta dentro do container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        })
    });
    /* Escreva um novo suite de teste com nome 'Nova seleção de feed' */
    describe('Nova seleção de feed', function() {

        let feed1;
        let feed2;

        beforeEach(function(done) {

            loadFeed(0, function () {
                feed1 = $('.feed .entry')[0];
                loadFeed(1, function () {
                    feed2 = $('.feed .entry')[0];
                    done();
                });
            });
        });

        /** Escreva um teste, para um novo carregamento de um feed.
         * quando a função loadFeed() é chamada passamos um parametro para ele.
         * loadFeed(params), quando passamos 0, 1 ... deve ser um novo feed carregado.
         */
        it('deve garantir que, quando um novo feed for carregado pela função loadFeed, o conteúdo realmente mude', function() {
            expect(feed1).not.toBe(feed2);
        });

    })
        
    
}());
