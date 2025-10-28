<!-- Deus, tu és lindo e pertenço somente a Ti -->

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Açai da Drika</title>

  <link rel="stylesheet" href="drika_front/drika_styles/drika_pai_styles.css">


  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  <link rel="stylesheet" href="drika_front/drika_print/drika_print.css" media="print">

</head>

<body>  
<!--main 1: flexbox - Carrosel fotos em js-->
<!--main 2: flexbox - h1 acai da drika-->
    <!-- main 2: 
     h2 + paragrafos sobre a história do açai da drika; 
     h3 o foco do açai da drika; 
     h4 sustentabilidade promovida pelo açai da drika
     h2 com dois botões poara chamada de ação:
       1º whatsapp
       2º instagram <-->

</body>



<!-- Rodapé -->
    <footer class="footer-drika">
    <p>© 2025 Açai da Drika - Todos os direitos reservados</p>
    <div class="powered-by">
        <img src="drika_front/imgs_drika/icone_hopeup.png" alt="Logo HopeUp 7.DEV" class="logo-footer-powered" loading="lazy">
        <span>© Equipe Powered By HopeUp 7.DEV</span>
    </div>
    </footer>

    modulo footer_drika.css:
    /*← Rodapé e créditos finais*/
/*Rodapé do site com créditos e logo*/

/*Deus, Tu és Senhor e Rei e integrante da Equipe HopeUp 7.DEV, por isso se faça presente aqui nestes nossos estudos, por favor, Senhor.*/

.footer-drika {
  text-align: center;
  padding: 30px;
  background-color: #3e3d3d;
  font-size: clamp(0.85rem, 1vw, 1rem); /* Texto menor e responsivo */
  color: #eceef3;
}
.powered-by {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;
  color: #eceef3;
  font-size: clamp(1rem, 1.2vw, 1.1rem); /* Texto da equipe responsivo */
}
/* Logo suave */
.logo-footer-powered {
  height: 42px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  vertical-align: middle;
}

/* Efeito hover no logo */
.logo-footer-powered:hover {
  opacity: 1;
}

.footer-drika p {
  margin-bottom: 1rem;
  font-size: clamp(1rem, 1.2vw, 1.1rem); /* Texto institucional fluido */
}


/* Logo no “© Equipe Powered By” */
.powered-by .logo-footer-powered {
  height: 32px;
  width: auto;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}


.powered-by .logo-footer-powered:hover {
  opacity: 1;
}

.powered-by {
  flex-wrap: wrap;        /* Permite que os elementos internos quebrem linha — útil em rodapés com múltiplos logos ou links */
  color: #eceef3;         /* Tom claro — combina com fundo escuro típico de rodapés */
}

/* ===================== TEXTO DO RODAPÉ COM CLAMP ===================== */


/* ===================== BLOCO “Powered By” COM CLAMP ===================== */

modulo base_drika.css:

/* ← Tipografia, cores e elementos genéricos */
/* Comentário: este módulo define estilos básicos de texto, cores e elementos globais. */

/* Estilos básicos globais (fonte, cor, espaçamento) */
/* Comentário: aqui começa a padronização de fonte, cor e espaçamento para todo o site. */

/* Deus, Tu és Senhor e Rei e integrante da Equipe HopeUp 7.DEV, por isso se faça presente aqui nestes nossos estudos, por favor, Senhor. */
/* Comentário espiritual: consagração do estudo e do código a Deus, reconhecendo Sua presença no aprendizado. */

main > section {
  margin-bottom: 3rem; /* Define espaçamento de 3rem entre cada seção dentro do <main>, criando respiro visual. */
}

html, body {
  overflow-x: hidden; /* Impede rolagem horizontal, evitando barras de rolagem indesejadas. */
  max-width: 100%;    /* Garante que o conteúdo não ultrapasse a largura da viewport. */
  font-size: 16px;    /* Define tamanho base da fonte em 16px, padrão de legibilidade. */
  line-height: 1.6;   /* Define altura de linha confortável para leitura. */
  color: #333;        /* Define cor do texto em cinza escuro, menos agressivo que preto puro. */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* Define família de fontes: Segoe UI (Windows), Tahoma, Geneva, Verdana e fallback sans-serif. */
}

*, *::before, *::after {
  box-sizing: border-box; /* Inclui padding e borda no cálculo de largura/altura, facilitando layout. */
}

/* ===================== TIPOGRAFIA GLOBAL COM CLAMP ===================== */
/* Comentário: define tamanhos de títulos e textos de forma responsiva usando clamp(). */

/* Hierarquia de títulos com responsividade */
h1 {
  font-size: clamp(1.8rem, 4vw, 2.5rem); /* Título principal: mínimo 1.8rem, máximo 2.5rem, ajusta em 4vw. */
  line-height: 1.3; /* Altura de linha compacta para títulos principais. */
}

h2 {
  font-size: clamp(1.5rem, 3vw, 2rem); /* Subtítulo: mínimo 1.5rem, máximo 2rem, ajusta em 3vw. */
  line-height: 1.4; /* Altura de linha levemente maior que h1. */
}

h3 {
  font-size: clamp(1.3rem, 2.5vw, 1.8rem); /* Título de seção: mínimo 1.3rem, máximo 1.8rem, ajusta em 2.5vw. */
}

h4 {
  font-size: clamp(1.1rem, 2vw, 1.5rem); /* Título menor: mínimo 1.1rem, máximo 1.5rem, ajusta em 2vw. */
}

h5 {
  font-size: clamp(1rem, 1.5vw, 1.2rem); /* Título auxiliar: mínimo 1rem, máximo 1.2rem, ajusta em 1.5vw. */
}

h6 {
  font-size: clamp(0.9rem, 1.2vw, 1rem); /* Título mínimo: mínimo 0.9rem, máximo 1rem, ajusta em 1.2vw. */
}

/* Parágrafos padrão com responsividade */
p {
  font-size: clamp(1rem, 1.2vw, 1.125rem); /* Texto fluido: mínimo 1rem, máximo 1.125rem, ajusta em 1.2vw. */
  line-height: 1.6; /* Altura de linha confortável para leitura de parágrafos. */
  margin-bottom: 1rem; /* Espaço inferior de 1rem entre parágrafos. */
  color: inherit; /* Herda a cor definida no body (#333). */
}

/* Listas com responsividade */
ul, li {
  font-size: clamp(0.95rem, 1.1vw, 1rem); /* Tamanho ajustável: mínimo 0.95rem, máximo 1rem, ajusta em 1.1vw. */
  margin: 0 0 0 1rem; /* Recuo à esquerda de 1rem para listas. */
  line-height: 1.6; /* Altura de linha consistente com parágrafos. */
}

/* Smartphones pequenos (até 400px) */
@media screen and (max-width: 400px) {
  main > section {
    margin-bottom: 2rem; /* Reduz espaço entre seções para telas pequenas. */
  }

  html, body {
    font-size: 15px; /* Base levemente menor para caber melhor em telas estreitas. */
  }
}

/* Smartphones médios (até 480px) */
@media screen and (max-width: 480px) {
  html, body {
    font-size: 15.5px; /* Ajuste fino do tamanho da fonte para telas médias. */
  }
}

/* Tablets pequenos (até 768px) */
@media screen and (max-width: 768px) {
  html, body {
    font-size: 16px; /* Mantém base padrão em tablets. */
  }
}

/* Ultrawides (acima de 1920px) */
@media screen and (min-width: 1921px) {
  html, body {
    font-size: 17px; /* Aumenta fonte em telas ultralargas para melhor legibilidade. */
  }

  main > section {
    margin-bottom: 4rem; /* Mais espaço entre blocos em telas grandes. */
  }
}

/* ===================== TIPOGRAFIA GLOBAL FORÇADA ===================== */
/* Comentário: sobrescreve tamanhos de fonte com !important, garantindo consistência. */

h1 {
  font-size: 2.4rem !important; /* Força tamanho fixo de 2.4rem para h1. */
  line-height: 1.3 !important;  /* Força altura de linha de 1.3. */
}

h2 {
  font-size: 2rem !important;   /* Força tamanho fixo de 2rem para h2. */
  line-height: 1.4 !important;  /* Força altura de linha de 1.4. */
}

h3 {
  font-size: 1.7rem !important; /* Força tamanho fixo de 1.7rem para h3. */
  line-height: 1.4 !important;  /* Força altura de linha de 1.4. */
}

h4 {
  font-size: 1.4rem !important; /* Força tamanho fixo de 1.4rem para h4. */
  line-height: 1.4 !important;  /* Força altura de linha de 1.4. */
}

h5 {
  font-size: 1.2rem !important; /* Força tamanho fixo de 1.2rem para h5. */
  line-height: 1.4 !important;  /* Força altura de linha de 1.4. */
}

h6 {
  font-size: 1rem !important;   /* Força tamanho fixo de 1rem para h6. */
  line-height: 1.4 !important;  /* Força altura de linha de 1.4. */
}

p {
  font-size: 1.250rem !important; /* Força tamanho fixo de 1.25rem para parágrafos. */
  line-height: 1.4 !important;    /* Força altura de linha de 1.4. */
}

ul, li {
  font-size: 1.150rem !important; /* Força tamanho fixo de 1.15rem para listas. */
  line-height: 1.6 !important;    /* Força altura de linha de 1.6. */
}

p, h2, h3, h4, h5, h6 {
  word-break: break-word;    /* Quebra palavras longas no final da linha para evitar overflow. */
  overflow-wrap: break-word; /* Garante quebra de palavras para caber no contêiner. */
}
modulo reset_drika.css:
/*← Reset universal de estilos */
/* Comentário editorial: indica que este arquivo tem como objetivo limpar os estilos padrão aplicados pelos navegadores. Isso garante consistência visual entre diferentes browsers. */

/* Resetar estilos padrão dos navegadores */
/* Comentário espiritual: consagração do código como parte do método HopeUp, reconhecendo que até na técnica há espaço para fé. */

/* Deus, Tu és Senhor e Rei e integrante da Equipe
 HopeUp 7.DEV, por isso se faça presente aqui nestes nossos estudos, por favor, Senhor. */
/* Invocação espiritual: entrega do estudo e do código a Deus, reconhecendo Sua presença como fonte de sabedoria e clareza. */

/* ===================== RESET BÁSICO ===================== */
/* Seção técnica: início do reset universal que afeta todos os elementos da página. */

* {
  margin: 0; /* Remove todas as margens padrão dos elementos. Isso evita espaçamentos indesejados e dá controle total ao desenvolvedor. */
  padding: 0; /* Remove todos os preenchimentos internos padrão. Essencial para começar com layout limpo. */
  box-sizing: border-box; /* Altera o modelo de caixa para incluir padding e borda dentro da largura e altura definidas. Isso facilita o controle de layout e evita cálculos complexos. */
}

/* ===================== RESET BÁSICO COM CLAMP ===================== */
/* Seção técnica: define estilos base para o elemento <body>, com foco em responsividade e legibilidade. */

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* Define uma família de fontes legível e moderna. 'Segoe UI' é usada no Windows, Tahoma e Geneva são alternativas seguras, e Verdana é altamente legível. O fallback 'sans-serif' garante que uma fonte sem serifa seja usada caso nenhuma das anteriores esteja disponível. */

  line-height: 1.6;
  /* Define a altura da linha como 1.6 vezes o tamanho da fonte. Isso melhora a legibilidade e o espaçamento vertical entre linhas de texto. */

  background-color: #f9f9f9;
  /* Define um fundo claro e neutro para a página. O tom #f9f9f9 é suave, evitando o branco puro que pode causar fadiga visual. */

  color: #333;
  /* Define a cor do texto como um cinza escuro (#333), que oferece bom contraste com o fundo claro sem ser tão agressivo quanto o preto puro. */

  font-size: clamp(1rem, 1.2vw, 1.125rem);
  /* Define o tamanho da fonte de forma responsiva:
     - Mínimo: 1rem (16px padrão)
     - Ideal: 1.2vw (1.2% da largura da viewport)
     - Máximo: 1.125rem (18px)
     Isso garante que o texto se ajuste suavemente ao tamanho da tela, mantendo legibilidade em diferentes dispositivos. */
}
/*← CSS pai que importa todos os módulos*/
/*Arquivo principal que importa todos os módulos acima*/

/*Deus, Tu és a êssencia de meu coração, por isso agracia-me Contigo, Senhor.*/

/* ===================== RESET E BASE ===================== */
@import url('reset_drika.css');
@import url('base_drika.css');
@import url('header_drika.css');
/* ===================== COMPONENTES REUTILIZÁVEIS ===================== */
@import url('componentes_drika.css');


/* ===================== CSS Print===================== */

@import url('drika_print/drika_print.css');


/* ===================== RODAPÉ ===================== */
@import url('footer_drika.css');

/* ===================== RESPONSIVIDADE ===================== */


.pagina-frente,
.pagina-verso {
  display: none;
}

/* ✨ Impressão do blog_le — consagrado com fé, propósito e alegria */
@media print {
  /* Oculta tudo do site normal */
  main,
  header,
  nav,
  aside,
  .conteudo-grid,
  .perfil-container,
  .secao-ajuda,
  .secao-publicidade,
  .secao-anuncie-aqui,
  .secao-anuncie-aqui-esquerda,
  .secao-anuncie-aqui-esquerda-2,
  .secao-valores-esquerda,
  .footer {
    display: none !important;
  }

  /* Exibe apenas as seções de impressão */
  .pagina-frente,
  .pagina-verso {
    display: block;
    page-break-after: always;
  }

  /* Estilo geral da impressão */
  body {
    font-family: 'Georgia', serif;
    font-size: 6px;
    color: #000;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4 {
    text-align: center;
    line-height: 1.2;
    margin: 0.5rem 0;
    font-weight: bold;
  }

  h1 { font-size: 10px; }
  h2 { font-size: 9px; }
  h3 { font-size: 8px; }
  h4 { font-size: 7px; font-style: italic; }

  p {
    font-size: 7px;
    text-align: justify;
    margin: 0.5rem 0 0.3rem;
    line-height: 1.2;
    text-indent: 0.3cm;
  }

  .conteudo-principal {
    flex: 1;   
    font-size: 6px;
    text-align: justify;
    line-height: 1.2;
    width: 100%;
    max-width: 100cm;
    margin: 0 auto;
  }

  .banner-impressao-editorial {
    width: 100%;
    height: 8cm;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5cm auto;
    page-break-inside: avoid;
    page-break-before: always;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .banner-impressao-editorial img {
    width: 100%;
    height: 6cm;
    object-fit: fill;
    object-position: center center;
    display: block;
  }

  .imagem-final-impressao {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8cm; /* altura da faixa final */
    margin-top: auto; /* empurra para o final da página */
    page-break-inside: avoid;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    margin-bottom: 1%;
  }

  .imagem-final-impressao img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: center;
    display: block;
  }

  .footer-impressao {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 0.5cm 0;
    font-size: 6px;
    width: 100%;
    page-break-inside: avoid;
    margin-top: auto; /* empurra para o final da página */
  }

  .footer-impressao p {
    margin: 0.2rem auto;
    line-height: 1.2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    flex-wrap: wrap;
  }

  .logo-suave-1 {
    width: 6px;
    height: auto;
    vertical-align: middle;
    display: inline-block;
  }
}



