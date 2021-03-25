$(function () {
    // carrega na tela a página de início
    $('.todo').load('../src/inicio.html');
});

let perguntaAtual;
let res = {};


/**
 * @description carrega a primeira pergunta do quiz
 */
function comecar() {
    $(".todo").fadeOut("slow");
    setTimeout(function () {
        $('.todo').html('');
        $('.todo').load('../src/pergunta.html');
        perguntaAtual = 1;
        carregarPergunta(perguntaAtual);
    }, 500);
    $(".todo").fadeIn("slow");
}

/**
 * @description ativado com o clique na resposta,
 * computa a resposta e passa pra próxima pergunta
 */
function responder(valor) {
    res[perguntaAtual] = valor;
    if (perguntaAtual == 10) {
        imprimirResultado();
        return;
    }
    $(".todo").fadeOut("slow");
    setTimeout(function () {
        carregarPergunta(perguntaAtual + 1);
    }, 500);
    setTimeout(function () {
        $(".todo").fadeIn("slow");
    }, 700);
}

/**
 * @description com base na variável perguntaAtual,
 * popula a página com os dados de acordo com a
 * pergunta
 */
function carregarPergunta(pergunta) {
    perguntaAtual = pergunta;
    $("#imagem").attr("src", "../img/perguntas/" + perguntaAtual + ".png");
    $('.indexPergunta').text(("0" + perguntaAtual).slice(-2) + ' de 10');
    $('.proximo').show();

    if (perguntaAtual == 10) {
        $('.proximo').hide();
    }

    switch (perguntaAtual) {
        case 1:
            $('.tituloPergunta').text('Qual seu maior defeito?');

            $('#resposta1').text('INSEGURANCA');
            $('#resposta2').text('PERFECCIONISMO');
            $('#resposta3').text('TEIMOSIA');
            $('#resposta4').text('EGOCENTRISMO');
            break;
        case 2:
            $('.tituloPergunta').text('O que você mais gosta de comer?');

            $('#resposta1').text('TANTO FAZ');
            $('#resposta2').text('FONDUE');
            $('#resposta3').text('MACARRÃO');
            $('#resposta4').text('SALADA');
            break;
        case 3:
            $('.tituloPergunta').text('Sextou! O que você vai fazer?');

            $('#resposta1').text('IR ÀS COMPRAS');
            $('#resposta2').text('VER UM FILME EM CASA');
            $('#resposta3').text('DAR UMA FESTA');
            $('#resposta4').text('KARAOKÊ');
            break;
        case 4:
            $('.tituloPergunta').text('Qual animal você mais gosta?');

            $('#resposta1').text('RAPOSAS');
            $('#resposta2').text('NÃO GOSTO MUITO DE ANIMAIS...');
            $('#resposta3').text('TIGRES');
            $('#resposta4').text('COBRAS');
            break;
        case 5:
            $('.tituloPergunta').text('Como seus amigos te descrevem?');

            $('#resposta1').text('ENCANTADOR(A)');
            $('#resposta2').text('SONHADOR(A)');
            $('#resposta3').text('REBELDE');
            $('#resposta4').text('EXTRAVAGANTE');
            break;
        case 6:
            $('.tituloPergunta').text('Escolha um emoji:');

            $('#resposta1').html('&#10024');
            $('#resposta2').html('&#128131');
            $('#resposta3').html('&#128165');
            $('#resposta4').html('&#128133');
            break;
        case 7:
            $('.tituloPergunta').text('O que é mais importante?');

            $('#resposta1').text('SABER QUEM SOU');
            $('#resposta2').text('MEUS SONHOS');
            $('#resposta3').text('MINHA LIBERDADE');
            $('#resposta4').text('MINHAS VONTADES');
            break;
        case 8:
            $('.tituloPergunta').text('O que é mais legal num clipe?');

            $('#resposta1').text('O FIGURINO');
            $('#resposta2').text('A COREOGRAFIA');
            $('#resposta3').text('OS CENÁRIOS');
            $('#resposta4').text('O CONCEITO POR TRÁS');
            break;
        case 9:
            $('.tituloPergunta').text('Escolha um estilo de roupa:');

            $('#resposta1').text('ROMÂNTICO');
            $('#resposta2').text('ESPORTIVO');
            $('#resposta3').text('URBANO');
            $('#resposta4').text('SENSUAL');
            break;
        case 10:
            $('.tituloPergunta').text('Escolha uma artista:');

            $('#resposta1').text('TAYLOR SWIFT');
            $('#resposta2').text('CHARLI XCX');
            $('#resposta3').text('RIHANNA');
            $('#resposta4').text('CHRISTINA AGUILERA');
            break;
    }
}


/**
 * @description calcula as respostas e apresenta
 * o resultado
 */
function imprimirResultado() {
    let respostas = {
        1: 0,
        2: 0,
        3: 0,
        4: 0
    };

    // conta quantas respostas cada entidade recebeu
    for (let i = 1; i <= 10; i++) {
        respostas[res[i]] += 1;
    }

    // array que será ordenado
    let resultado = [respostas[1], respostas[2], respostas[3], respostas[4]];

    // array fixo, que será comparado no final
    const ordem = [respostas[1], respostas[2], respostas[3], respostas[4]];

    let ordenado = resultado.sort();
    let maior;
    let escolhido;

    // descobre se existiram empates de número de questões e decide randomicamente
    if (ordenado[3] > ordenado[2]) {
        // sem empate
        maior = ordenado[3];
    } else if (ordenado[3] == ordenado[2]) {
        // empate duplo
        escolhido = (Math.floor(Math.random() * 2)) + 1;
        maior = ordenado[escolhido];
    } else if (ordenado[3] == ordenado[2] && ordenado[2] == ordenado[1]) {
        // empate triplo
        escolhido = (Math.floor(Math.random() * 3)) + 1;
        maior = ordenado[escolhido];
    }

    let vencedor = ordem.indexOf(maior) + 1;

    $(".todo").fadeOut("slow");
    setTimeout(function () {
        $('.todo').load('../src/resultado.html');
    }, 400);
    setTimeout(function () {
        $(".todo").fadeIn("slow");
    }, 700);

    let imagem;
    let personagem;
    let descricao;
    let link;

    switch (vencedor) {
        case 1:
            /**
             * Ahri
             */
            imagem = "../img/resultado/1.png";
            personagem = "Ahri";
            descricao = "Assim como Ahri, você é uma pessoa calma e sentimental, conseguindo tocar o coração dos ouvintes com suas letras profundas.Além disso, carrega um charme arrebatador que faz todos ao seu redor apaixonarem - se.";
            link = "Para conhecer mais sobre a líder do grupo K/DA, veja o clipe I'LL SHOW YOU clicando <a target='_blank' href='https://www.youtube.com/watch?v=WW1BpABbzHs'>aqui</a>";
            break;
        case 2:
            /**
             * Kaisa
             */
            imagem = "../img/resultado/2.png";
            personagem = "Kai'Sa";
            descricao = "Assim como Kai'Sa, você é uma pessoa que ama aprender sobre outras culturas e incorporar isso no seu dia a dia. Além disso também é extremamente perfeccionista e focada em seus objetivos.";
            link = "Para conhecer mais sobre a coreógrada do grupo K/DA, veja o clipe DRUM GO DUM clicando <a target='_blank' href='https://www.youtube.com/watch?v=E_PbH5y70Tc'>aqui</a>";
            break;
        case 3:
            /**
             * Akali
             */
            imagem = "../img/resultado/3.png";
            personagem = "Akali";
            descricao = "Assim como Akali, você é rebelde e confiante, trazendo seu estilo único a tudo que se envolve. Com sua forma autêntica de se vestir e agir, consegue facilmente cativar as pessoas ao redor.";
            link = "Para conhecer mais sobre a rapper do grupo K/DA, veja o clipe THE BADDEST clicando <a target='_blank' href='https://www.youtube.com/watch?v=RkID8_gnTxw'>aqui</a>";
            break;
        case 4:
            /**
             * Evelynn
             */
            imagem = "../img/resultado/4.png";
            personagem = "Evelynn";
            descricao = "Assim como Evelynn, você não se importa sobre a visão que os outros tem de você, agindo como bem entende. Graças a isso, é conhecida como a \"bad girl\" do grupo.";
            link = "Para conhecer mais sobre a vocalista do grupo K/DA, veja o clipe VILLAIN clicando <a target='_blank' href='https://www.youtube.com/watch?v=xoWxv2yZXLQ'>aqui</a>";
            break;
        default:
            refazer;
    }

    setInterval(function () {
        $("#imagemResultado").attr("src", imagem);
        $('#descricaoPersonagem').text(descricao);
        $('#personagem').text(personagem);
        $('#link').html(link);
    }, 500);
}

/**
 * @description botão de voltar para a pergunta
 * anterior, caso esteja na primeira questão,
 * irá voltar para a tela de menu
 */
function voltar() {
    if (perguntaAtual == 1) {
        refazer()
        return;
    }
    $(".todo").fadeOut("slow");
    setTimeout(function () {
        carregarPergunta(perguntaAtual - 1);
    }, 500);
    setTimeout(function () {
        $(".todo").fadeIn("slow");
    }, 700);
}

/**
 * @description botão de ir para a próxima pergunta,
 * caso esteja na última pergunta, este botão não irá ser apresentado.
 */
function proximo() {
    if (perguntaAtual == 10) return;
    $(".todo").fadeOut("slow");
    setTimeout(function () {
        carregarPergunta(perguntaAtual + 1);
    }, 500);
    setTimeout(function () {
        $(".todo").fadeIn("slow");
    }, 700);
}

/**
 * @description botão presente na tela de resultado,
 * volta para a página inicial
 */
function refazer() {
    perguntaAtual = 1;
    res = {};
    $(".todo").fadeOut("slow");
    setTimeout(function () {
        $('.todo').load('../src/inicio.html');
    }, 500);
    setTimeout(function () {
        $(".todo").fadeIn("slow");
    }, 700);
}