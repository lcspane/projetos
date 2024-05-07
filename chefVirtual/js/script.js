document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nomeReceita = urlParams.get('nome');
    const categoriaNome = urlParams.get('categoria');
    console.log(categoriaNome)

    const categoriasEReceitas = {
        "entradas": [
            {
              "nome": "Espetinhos de Caprese",
              "foto": "/assets/receitas/espetinho-caprese.png",
              "ingredientes": [
                "Tomate cereja",
                "Mussarela de búfala",
                "Folhas de manjericão",
                "Azeite de oliva extravirgem",
                "Sal a gosto",
                "Pimenta do reino a gosto"
              ],
              "modo_preparo": "Em um palito de churrasco, espete um tomate cereja, uma bolinha de mussarela de búfala e uma folha de manjericão.\nRepita o processo até completar o espetinho.\nRegue os espetinhos com azeite de oliva, tempere com sal e pimenta do reino a gosto.",
              "serve_quantas_pessoas": "4 pessoas",
              "dificuldade": "Fácil",
              "pontuacao": "4.5"
            },
            {
              "nome": "Bruschetta de Tomate e Manjericão",
              "foto": "/assets/receitas/bruschetta-de-tomate-e-manjericao.png",
              "ingredientes": [
                "2 tomates maduros",
                "6 fatias de pão italiano",
                "2 dentes de alho",
                "Folhas de manjericão fresco",
                "Azeite de oliva extravirgem",
                "Sal a gosto",
                "Pimenta do reino a gosto"
              ],
              "modo_preparo": "Corte os tomates em cubos pequenos e coloque-os em uma tigela.\nTempere os tomates com azeite de oliva, sal, pimenta do reino e folhas de manjericão picadas.\nEsfregue os dentes de alho nas fatias de pão italiano e regue com azeite.\nLeve as fatias de pão ao forno pré-aquecido a 180°C por cerca de 5 minutos ou até ficarem levemente douradas.\nRetire as fatias de pão do forno e cubra cada uma com a mistura de tomate.\nSirva imediatamente.",
              "serve_quantas_pessoas": "6 pessoas",
              "dificuldade": "Média",
              "pontuacao": "4.7"
            },
            {
              "nome": "Ceviche de Peixe Branco",
              "foto": "/assets/receitas/ceviche-de-peixe-branco.png",
              "ingredientes": [
                "500g de filé de peixe branco",
                "3 limões",
                "1 cebola roxa",
                "2 pimentões vermelhos",
                "Coentro fresco a gosto",
                "Pimenta dedo-de-moça a gosto",
                "Sal a gosto",
                "Pimenta do reino a gosto"
              ],
              "modo_preparo": "Corte o filé de peixe em cubos pequenos e reserve.\nEsprema os limões e reserve o suco.\nCorte a cebola roxa em rodelas finas e o pimentão vermelho em cubos pequenos.\nEm uma tigela, misture o peixe, o suco de limão, a cebola, o pimentão, o coentro, a pimenta dedo-de-moça, o sal e a pimenta do reino.\nDeixe marinar na geladeira por pelo menos 30 minutos antes de servir.\nSirva o ceviche bem gelado.",
              "serve_quantas_pessoas": "4 pessoas",
              "dificuldade": "Fácil",
              "pontuacao": "4.8"
            }
          ],
          "principais": [
            {
              "nome": "Strogonoff de Frango",
              "foto": "/assets/receitas/strogonoff-de-frango.png",
              "ingredientes": [
                "500g de peito de frango",
                "1 cebola",
                "2 dentes de alho",
                "1 lata de creme de leite",
                "1/2 lata de molho de tomate",
                "1 colher de sopa de mostarda",
                "1 colher de sopa de ketchup",
                "Sal a gosto",
                "Pimenta do reino a gosto",
                "Azeite de oliva"
              ],
              "modo_preparo": "Em uma panela, aqueça o azeite e doure a cebola e o alho.\nAdicione o frango cortado em cubos e refogue até dourar.\nTempere com sal e pimenta do reino a gosto.\nAcrescente o molho de tomate, a mostarda e o ketchup.\nCozinhe por alguns minutos em fogo médio.\nPor último, adicione o creme de leite e misture bem até ficar homogêneo.\nSirva quente, acompanhado de arroz branco e batata palha.",
              "serve_quantas_pessoas": "4 pessoas",
              "dificuldade": "Fácil",
              "pontuacao": "4.6"
            },
            {
              "nome": "Risoto de Funghi",
              "foto": "/assets/receitas/risoto-de-funghi.png",
              "ingredientes": [
                "1 xícara de arroz arbóreo",
                "200g de cogumelos funghi secos",
                "1 cebola",
                "2 dentes de alho",
                "1/2 xícara de vinho branco seco",
                "4 xícaras de caldo de legumes",
                "2 colheres de sopa de manteiga",
                "1/2 xícara de queijo parmesão ralado",
                "Sal a gosto",
                "Pimenta do reino a gosto",
                "Salsinha picada a gosto"
              ],
              "modo_preparo": "Hidrate os cogumelos funghi em água morna por cerca de 20 minutos.\nEscorra e reserve a água do hidratante.\nCorte os cogumelos em tiras finas.\nEm uma panela, refogue a cebola e o alho na manteiga até ficarem dourados.\nAdicione o arroz e refogue por mais alguns minutos.\nAcrescente o vinho branco e mexa até evaporar.\nAdicione os cogumelos e vá adicionando o caldo de legumes aos poucos, mexendo sempre, até o arroz ficar al dente.\nFinalize com o queijo parmesão, a salsinha, sal e pimenta do reino a gosto.\nSirva imediatamente.",
              "serve_quantas_pessoas": "4 pessoas",
              "dificuldade": "Média",
              "pontuacao": "4.9"
            },
            {
              "nome": "Moqueca de Peixe",
              "foto": "/assets/receitas/moqueca-de-peixe.png",
              "ingredientes": [
                "500g de filé de peixe",
                "2 tomates maduros",
                "1 cebola",
                "1 pimentão verde",
                "1 pimentão vermelho",
                "200ml de leite de coco",
                "Suco de 1 limão",
                "Coentro fresco a gosto",
                "Azeite de dendê a gosto",
                "Sal a gosto",
                "Pimenta do reino a gosto"
              ],
              "modo_preparo": "Tempere o peixe com sal, pimenta do reino e suco de limão e reserve.\nEm uma panela, refogue a cebola, os tomates e os pimentões cortados em rodelas no azeite de dendê.\nAdicione o leite de coco e deixe ferver.\nColoque o peixe temperado na panela e cozinhe por cerca de 15 minutos em fogo médio.\nFinalize com coentro fresco picado e sirva com arroz branco.",
              "serve_quantas_pessoas": "4 pessoas",
              "dificuldade": "Fácil",
              "pontuacao": "4.7"
            }
          ],
          "complementos": [
            {
              "nome": "Salada Caesar",
              "foto": "/assets/receitas/salada-caesar.png",
              "ingredientes": [
                "Alface romana",
                "Croutons",
                "Queijo parmesão ralado",
                "Molho Caesar"
              ],
              "modo_preparo": "Lave e seque as folhas de alface.\nDisponha as folhas em uma tigela.\nAcrescente os croutons e o queijo parmesão ralado por cima.\nTempere com o molho Caesar a gosto e misture bem.\nSirva imediatamente.",
              "serve_quantas_pessoas": "4 pessoas",
              "dificuldade": "Fácil",
              "pontuacao": "4.8"
            },
            {
              "nome": "Arroz à Grega",
              "foto": "/assets/receitas/arroz-a-grega.png",
              "ingredientes": [
                "2 xícaras de arroz",
                "1 cenoura",
                "1 pimentão vermelho",
                "1/2 lata de ervilha",
                "1/2 lata de milho verde",
                "Azeite de oliva",
                "Sal a gosto"
              ],
              "modo_preparo": "Cozinhe o arroz conforme as instruções da embalagem e reserve.\nEm uma frigideira, aqueça o azeite e refogue a cenoura ralada, o pimentão picado, a ervilha e o milho verde.\nAcrescente o arroz cozido à mistura de legumes e mexa bem.\nTempere com sal a gosto e sirva quente.",
              "serve_quantas_pessoas": "4 pessoas",
              "dificuldade": "Fácil",
              "pontuacao": "4.6"
            },
            {
              "nome": "Batatas Gratinadas",
              "foto": "/assets/receitas/batatas-gratinadas.png",
              "ingredientes": [
                "4 batatas grandes",
                "200ml de creme de leite",
                "100g de queijo parmesão ralado",
                "2 dentes de alho",
                "Sal a gosto",
                "Pimenta do reino a gosto",
                "Noz moscada a gosto"
              ],
              "modo_preparo": "Descasque as batatas e corte-as em rodelas finas.\nEm uma panela, misture o creme de leite, o queijo parmesão ralado, o alho picado, sal, pimenta do reino e noz moscada a gosto.\nEm um refratário untado, faça uma camada de batatas e despeje parte da mistura de creme de leite.\nRepita o processo até acabarem os ingredientes, finalizando com a mistura de creme de leite por cima.\nLeve ao forno pré-aquecido a 180°C por cerca de 30 minutos ou até dourar.\nSirva quente.",
              "serve_quantas_pessoas": "4 pessoas",
              "dificuldade": "Média",
              "pontuacao": "4.7"
            }
          ],
          "sobremesas": [
            {
              "nome": "Mousse de Chocolate",
              "foto": "/assets/receitas/mousse-de-chocolate.png",
              "ingredientes": [
                "200g de chocolate meio amargo",
                "1 lata de creme de leite",
                "3 claras de ovos",
                "3 colheres de sopa de açúcar"
              ],
              "modo_preparo": "Derreta o chocolate em banho-maria ou no microondas e reserve.\nBata as claras em neve, acrescente o açúcar e continue batendo até formar um merengue firme.\nMisture delicadamente o chocolate derretido ao merengue.\nAdicione o creme de leite sem soro e misture até ficar homogêneo.\nDistribua a mousse em taças individuais e leve à geladeira por pelo menos 4 horas antes de servir.\nDecore com raspas de chocolate e sirva gelado.",
              "serve_quantas_pessoas": "6 pessoas",
              "dificuldade": "Fácil",
              "pontuacao": "4.9"
            },
            {
              "nome": "Torta de Limão",
              "foto": "/assets/receitas/torta-de-limão.png",
              "ingredientes": [
                "200g de biscoito maisena",
                "100g de manteiga derretida",
                "1 lata de leite condensado",
                "1/2 xícara de suco de limão",
                "Raspas de limão",
                "1 lata de creme de leite",
                "2 colheres de sopa de açúcar"
              ],
              "modo_preparo": "Triture os biscoitos maisena até obter uma farofa e misture com a manteiga derretida até formar uma massa homogênea.\nForre o fundo de uma forma de aro removível com a massa de biscoito, pressionando bem.\nLeve ao forno preaquecido a 180°C por 10 minutos.\nEnquanto a massa assa, prepare o recheio misturando o leite condensado, o suco e as raspas de limão.\nAcrescente o creme de leite sem soro à mistura de limão e mexa delicadamente.\nDespeje o recheio sobre a massa pré-assada e leve à geladeira por pelo menos 4 horas.\nAntes de servir, bata o creme de leite gelado com o açúcar até obter picos firmes e decore a torta.",
              "serve_quantas_pessoas": "8 pessoas",
              "dificuldade": "Média",
              "pontuacao": "4.7"
            },
            {
              "nome": "Pudim de Leite Condensado",
              "foto": "/assets/receitas/pudim-de-leite-condensado.png",
              "ingredientes": [
                "1 lata de leite condensado",
                "1 lata de leite (use a lata de leite condensado vazia para medir)",
                "3 ovos",
                "1 xícara de açúcar"
              ],
              "modo_preparo": "Prepare a calda caramelizando o açúcar em uma forma de pudim.\nNo liquidificador, bata o leite condensado, o leite e os ovos até obter uma mistura homogênea.\nDespeje a mistura na forma caramelizada e cubra com papel alumínio.\nLeve para assar em banho-maria no forno preaquecido a 180°C por cerca de 1 hora.\nApós assado, deixe esfriar e leve à geladeira por algumas horas antes de desenformar.\nSirva gelado.",
              "serve_quantas_pessoas": "8 pessoas",
              "dificuldade": "Fácil",
              "pontuacao": "4.8"
            }
          ],
          "bebidas": [
            {
              "nome": "Mojito",
              "foto": "/assets/receitas/mojito.png",
              "ingredientes": [
                "6 folhas de hortelã",
                "1 limão",
                "2 colheres de sopa de açúcar",
                "50ml de rum branco",
                "Gelo",
                "Água com gás"
              ],
              "modo_preparo": "Em um copo alto, amasse as folhas de hortelã com o açúcar e o suco de meio limão.\nAdicione o rum e complete o copo com gelo.\nComplete com água com gás e mexa bem.\nDecore com uma rodela de limão e uma ramo de hortelã.",
              "serve_quantas_pessoas": "1 pessoa",
              "dificuldade": "Fácil",
              "pontuacao": "4.9"
            },
            {
              "nome": "Smoothie de Frutas Vermelhas",
              "foto": "/assets/receitas/smothie-de-frutas-vermelhas.png",
              "ingredientes": [
                "1 xícara de morangos congelados",
                "1/2 xícara de framboesas congeladas",
                "1/2 xícara de amoras congeladas",
                "1 banana congelada",
                "200ml de leite",
                "Mel a gosto"
              ],
              "modo_preparo": "Coloque todos os ingredientes no liquidificador.\nBata até obter uma mistura cremosa e homogênea.\nAdicione mel a gosto, se necessário, para adoçar.\nSirva imediatamente.",
              "serve_quantas_pessoas": "1 pessoa",
              "dificuldade": "Fácil",
              "pontuacao": "4.7"
            },
            {
              "nome": "Café Espresso",
              "foto": "/assets/receitas/café-espresso.png",
              "ingredientes": [
                "Café em pó",
                "Água"
              ],
              "modo_preparo": "Moa os grãos de café até obter uma textura fina.\nPrepare o café em uma cafeteira espresso, seguindo as instruções do fabricante.\nSirva imediatamente.",
              "serve_quantas_pessoas": "1 pessoa",
              "dificuldade": "Fácil",
              "pontuacao": "4.8"
            }
          ]
      };

    if (categoriaNome) {
        // Esta é a página de receitas
        const tituloCategoria = document.querySelector('.text-center');
        const receitasContainer = document.querySelector('.row');

        tituloCategoria.textContent = categoriaNome.charAt(0).toUpperCase() + categoriaNome.slice(1);

        const categoria = categoriasEReceitas[categoriaNome];
        if (categoria) {
            document.querySelector('.back-btn a')
            categoria.forEach(receita => {
                const col = document.createElement('div');
                col.classList.add('col');

                const link = document.createElement('a');
                link.href = `/receita.html?nome=${receita.nome.toLowerCase().replace(/\s/g, '-')}`;
                link.classList.add('card', 'h-100', 'bg-dark', 'text-white');

                const img = document.createElement('img');
                img.src = receita.foto;
                img.classList.add('card-img-top');
                img.alt = receita.nome;

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const title = document.createElement('h5');
                title.classList.add('card-title', 'text-center');
                title.textContent = receita.nome;

                cardBody.appendChild(title);
                link.appendChild(img);
                link.appendChild(cardBody);
                col.appendChild(link);
                receitasContainer.appendChild(col);
            });
        } else {
            console.error(`Categoria "${categoriaNome}" não encontrada.`);
        }
    } else if (nomeReceita) {
        // Esta é a página de uma receita específica
        let categoriaEncontrada;
        let receitaEncontrada;

        const nomeReceitaURL = nomeReceita.toLowerCase().replace(/%20/g, '-');

        for (const [categoria, receitas] of Object.entries(categoriasEReceitas)) {
            for (const receita of receitas) {
                receita.nomeFormatado = receita.nome.toLowerCase().replace(/ /g, '-');
                if (receita.nomeFormatado === nomeReceitaURL) {
                    categoriaEncontrada = categoria;
                    receitaEncontrada = receita;
                    break;
                }
            }
            if (receitaEncontrada) {
                break;
            }
        }

        if (receitaEncontrada) {
            document.title = `ChefVirtual | ${receitaEncontrada.nome}`;
            const imagemReceita = document.querySelector('.img-fluid');
            imagemReceita.src = receitaEncontrada.foto;
            imagemReceita.alt = receitaEncontrada.nome;
            document.querySelector('.tempo-de-preparo').textContent = `100 dias`;
            document.querySelector('.serve-quantas-pessoas').textContent = `${receitaEncontrada.serve_quantas_pessoas}`;
            document.querySelector('.dificuldade').textContent = `${receitaEncontrada.dificuldade}`;
            document.querySelector('.pontuacao').textContent = `${receitaEncontrada.pontuacao}`;
            document.querySelector('.mt-4').textContent = `${receitaEncontrada.nome}`;
            const ulIngredientes = document.querySelector('ul');
            ulIngredientes.innerHTML = '';
            receitaEncontrada.ingredientes.forEach(ingrediente => {
                const li = document.createElement('li');
                li.textContent = ingrediente;
                ulIngredientes.appendChild(li);
            });
            const olModoPreparo = document.querySelector('ol');
            olModoPreparo.innerHTML = '';
            receitaEncontrada.modo_preparo.split('\n').forEach(passo => {
                if (passo.trim() !== '') {
                    const li = document.createElement('li');
                    li.textContent = passo.trim();
                    olModoPreparo.appendChild(li);
                }
            });
        } else {
            document.title = `ChefVirtual | Receita não Encontrada`;
            document.querySelector('.mt-4').textContent = `Receita não Encontrada`;
        }
    } else {
        if (document.querySelector('.mt-4')) {
            document.querySelector('.mt-4').textContent = `Receita não Encontrada`;
        } else if (tituloCategoria) {
            tituloCategoria.textContent = "Categoria não Encontrada"
        }
    }
});
