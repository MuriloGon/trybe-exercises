## Entendendo o infograma do mapStateToProps

![react-redux](images/map-State-To-Props-info.png)

### Análise do passo a passo
![mapStateToProps](images/map-State-To-Props.png)

![mapStateToProps](images/map-State-To-Props-exp.png)

```javascript
cd missing_mapstatetoprops
npm install
npm start
```

Em src/App.js:
- Foi retirado o mapStateToProps que recebe um objeto com as chaves receiveIngredients e receiveOrder;
- Cada chave é uma props dentro de App.js e representam um estado da aplicação.

Em src/components/PrepareBurger.js:
- Foi retirado o mapStateToProps que recebe um objeto com a chave receiveRecipe;
- A chave é uma props dentro de PrepareBurger.js e representa um estado da aplicação.

*Dica receiveIngredients: o nome do reducer é 'spiedIngredients' e a chave atualizada da action é 'ingredients'.*

*Dica receiveOrder: o nome do reducer é 'spiedOrder' e a chave atualizada da action é 'order'.*

*Dica receiveRecipe: o nome do reducer é 'spiedRecipe' e a chave atualizada da action é 'recipe'.*

**Seu objetivo é configurar o mapStateToProps dos componentes App.js e PrepareBurger.js para que eles recebam o estado atualizado da aplicação.**

**Referências:**

- Imagem bobEsponja: https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e2f0bab-4518-4c60-a8d6-444eeef68485/dd56cw0-4ba5ce04-63ba-4369-8c8e-13bc3b3538fb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGUyZjBiYWItNDUxOC00YzYwLWE4ZDYtNDQ0ZWVlZjY4NDg1XC9kZDU2Y3cwLTRiYTVjZTA0LTYzYmEtNDM2OS04YzhlLTEzYmMzYjM1MzhmYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.P37ofPgA8KVdnrbgO761nelbriOZMk2coJiYPW6tA6I;
- Imagem bobEsponjaTela: https://i.pinimg.com/originals/2c/dc/15/2cdc15e420a51342f59cd645f4b17b36.jpg;
- Imagem gary: https://static.wikia.nocookie.net/bubblestand/images/b/b2/GarytheSnail.png/revision/latest?cb=20200731043920;
- Imagem hamburguer: https://upload.wikimedia.org/wikipedia/en/4/4c/Krabby_Patty.png;
- Imagem patrick: https://static.wikia.nocookie.net/wikiesponja/images/d/d8/;Patrick_Estrela_de_Bob_Esponja.png/revision/latest?cb=20170325005037&path-prefix=pt-br
- Gif plankton: https://images6.fanpop.com/image/photos/39700000/-plankton-sticker-spongebob-squarepants-39750396-500-500.gif;
- Imagem siriCascudoUniforme: https://static.wikia.nocookie.net/spongebob/images/5/54/Krusty_Krab_hat_upright_stock_art.png/revision/latest?cb=20181228020634;
- Imagem siriguejo: https://static.wikia.nocookie.net/wikiesponja/images/2/2d/Sr_Sirigueijo_de_Bob_Esponja.png/revision/latest/scale-to-width-down/340?cb=20170325000158&path-prefix=pt-br.
