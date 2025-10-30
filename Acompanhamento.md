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

  <link rel="stylesheet" href="drika_front/drika_prints/drika_print.css" media="print">

</head>

<body> 
    
    <header id="banner">
    <div class="logo-drika-container">
        <img src="drika_front/imgs_drika/drika_logo.png" alt="Logo Açaí da Drika" class="logo-drika" loading="lazy">
    </div>
    </header>

    <main class="main-drika">
    <!-- Flexbox pai -->
    <div class="flexbox-principal">

            <!-- ===================== 1/3 DO TOPO: CARROSSEL COM IMAGEM DE FUNDO SUAVE ===================== -->
            <!-- Comentário editorial: esta seção é a primeira impressão visual do site, com imagens de açaí e legendas que contam histórias -->

        <section class="carrossel-drika">
                
                <!-- Fundo visual esfumado aplicado via CSS -->
            <div class="fundo-carrossel"></div>

                <!-- Container principal do carrossel -->
            <div class="carrossel-container">

                    <!-- Botões de navegação (setas) serão inseridos via JS ou diretamente aqui -->
                    <button class="seta-esquerda" aria-label="Imagem anterior">←</button>

                    <!-- Área que agrupa todos os itens do carrossel -->
                    <div class="carrossel-itens">

                    <!-- ITEM 1 DO CARROSSEL -->
                        <article class="carrossel-item ativo">
                            <div class="carrossel-imagem">
                            <img src="drika_front/imgs_drika/copo_acai_banana.png" alt="Açaí com Banana - Nutella, Leite Ninho, Paçoca e Granola." class="carrossel-img-oficial"
                            loading="lazy">
                            </div>
                            <figcaption class="carrossel-legenda">Açaí com Banana - Nutella, Leite Ninho, Paçoca e Granola.</figcaption>
                        </article>

                    <!-- ITEM 2 DO CARROSSEL -->
                        <article class="carrossel-item">
                            <div class="carrossel-imagem">
                            <img src="drika_front/imgs_drika/copo_acai_manga.png" alt="Açaí com Manga, Nutella,Leite Ninho, Paçoca e Granola." class="carrossel-img-oficial" loading="lazy">
                            </div>
                            <figcaption class="carrossel-legenda">Açaí com Manga, Nutella,Leite Ninho, Paçoca e Granola.</figcaption>
                        </article>

                    <!-- ITEM 3 DO CARROSSEL -->
                        <article class="carrossel-item">
                            <div class="carrossel-imagem">
                            <img src="drika_front/imgs_drika/copo_acai_kiwi.png" alt="Açaí com Kiwi, Nutella,Leite Ninho, Paçoca e Granola." class="carrossel-img-oficial" loading="lazy">
                            </div>
                            <figcaption class="carrossel-legenda">Açaí com Kiwi, Nutella,Leite Ninho, Paçoca e Granola.</figcaption>
                        </article>

                        <!-- ITEM 4 DO CARROSSEL - Imagem Propaganda -->
                        <article class="carrossel-item">
                            <div class="carrossel-imagem">
                            <img src="drika_front/imgs_drika/logo_blog_le_oficial.png" alt="LAS Advocacia" class="carrossel-img-oficial" loading="lazy">
                            </div>
                            <figcaption class="carrossel-legenda">Aqui na LAS nossa missão é defender os trabalhadores com excelência, comprometimento e responsabilidade. Venha nos conhecer e <a href="https://www.instagram.com/advogado_leandro/" target="_blank">saiba mais</a>.</figcaption>
                        </article>

                        <!-- ITEM 5 DO CARROSSEL -->
                        <article class="carrossel-item">
                            <div class="carrossel-imagem">
                            <img src="drika_front/imgs_drika/copo_acai_mor.png" alt="Açaí com Morango, Nutella, Leite, Ninho, Paçoca e Granola." class="carrossel-img-oficial" loading="lazy">
                            </div>
                            <figcaption class="carrossel-legenda">Açaí com Morango, Nutella, Leite,Ninho, Paçoca e Granola.</figcaption>
                        </article>

                        <!-- ITEM 6 DO CARROSSEL -->
                        <article class="carrossel-item">
                            <div class="carrossel-imagem">
                            <img src="drika_front/imgs_drika/copo_acai_mor_ban.png" alt="Açaí com duas Frutas, Nutella,Leite Ninho, Paçoca e Granola." class="carrossel-img-oficial" loading="lazy">
                            </div>
                            <figcaption class="carrossel-legenda">Açaí com duas Frutas, Nutella,Leite Ninho, Paçoca e Granola.</figcaption>
                        </article>

                        <!-- ITEM 7 DO CARROSSEL Imagem Propaganda-->
                        <article class="carrossel-item">
                            <div class="carrossel-imagem">
                            <img src="drika_front/imgs_drika/icone_hopeup.png" alt="Ícone da HopeUp 7.DEV" class="carrossel-img-oficial" loading="lazy">
                            </div>
                            <figcaption class="carrossel-legenda">Aqui na HopeUp 7.DEV fazemos o nosso melhor para você. Venha nos conhecer e <a href="https://www.instagram.com/hopeup47/" target="_blank">saiba mais</a>.</figcaption>
                        </article>

                        <!-- ITEM 8 DO CARROSSEL -->
                        <article class="carrossel-item">
                            <div class="carrossel-imagem">
                            <img src="drika_front/imgs_drika/copo_acai_sonho.png" alt="Açaí com Sonho de Valsa, Nutella,Leite Ninho, Paçoca e Granola." class="carrossel-img-oficial" loading="lazy">
                            </div>
                            <figcaption class="carrossel-legenda">Açaí com Sonho de Valsa, Nutella,Leite Ninho, Paçoca e Granola.</figcaption>
                        </article>

                        <!-- ITEM 9 DO CARROSSEL -->
                        <article class="carrossel-item">
                            <div class="carrossel-imagem">
                            <img src="drika_front/imgs_drika/copo_acai_frutas.png" alt="Açaí no Copo com frutas cuidadosamente cortadas + Nutella,Leite Ninho, Paçoca, Granola." class="carrossel-img-oficial" loading="lazy">
                            </div>
                            <figcaption class="carrossel-legenda">Açaí no Copo com frutas cuidadosamente cortadas + Nutella,Leite Ninho, Paçoca, Granola.</figcaption>
                        </article>

                        <!-- ITEM 10 DO CARROSSEL -->
                        <article class="carrossel-item">
                            <div class="carrossel-imagem">
                            <img src="drika_front/imgs_drika/acai_litro.png" alt="Açaí de Litro(1l. 1,5l. 2l. 3l.) com a frutas cuidadosamente cortadas  e batidas gerando um Mix Extremo de sabor e energia + Nutella,Leite Ninho, Paçoca, Granola." class="carrossel-img-oficial" loading="lazy">
                            </div>
                            <figcaption class="carrossel-legenda">Açaí de Litro(1l. 1,5l. 2l. 3l.) com a frutas cuidadosamente cortadas  e batidas gerando um Mix Extremo de sabor e energia + Nutella,Leite Ninho, Paçoca, Granola.</figcaption>
                        </article>

                    <!-- Você pode adicionar mais artigos conforme necessário -->
                    </div>

                    <!-- Botão para avançar imagem -->
                    <button class="seta-direita" aria-label="Próxima imagem">→</button>

                </div>
                </section>


        <!-- Bloco institucional: história, foco, sustentabilidade -->
        <section class="institucional-drika">
        <div class="fundo-institucional"></div> <!-- imagem de fundo suave e contrastante -->
        <h2>História</h2>
        <p><strong>Adriana</strong>, mais conhecida como <em>Drika</em>, é daquelas pessoas que transformam o simples em especial. Aos 35 anos, ela carrega consigo uma alegria contagiante e uma paixão genuína pelo que faz. Seu amor pelo <strong>açaí</strong> não é apenas sobre sabor — é sobre memória, afeto e propósito. Desde os primeiros passos com seu carrinho artesanal até a criação do “Açaí da Drika”, cada etapa foi marcada por dedicação e fé.</p>

        <p>O que começou como um sonho tímido se tornou uma referência local. Drika não vende apenas açaí — ela entrega cuidado, escuta, e uma experiência que acolhe. Seu jeito leve e esperançoso encanta quem chega, e seu compromisso com a qualidade e com as pessoas é o que faz tudo ter sentido. O açaí virou ponte entre histórias, encontros e sorrisos.</p>

        <h3>Foco</h3>
        <p>Mais do que empreender, Drika escolheu <strong>servir</strong>. Seu foco está em apoiar <em>ONGs que acolhem autistas e suas famílias, casas de repousos e comunidades que cuidam dos mais vulneráveis</em>, oferecendo parte da renda e visibilidade para causas que merecem atenção. Ela acredita que o comércio pode ser uma ferramenta de transformação — e age com coerência. Sem alarde, mas com firmeza, ela constrói pontes entre seu negócio e quem precisa de apoio.</p>

        <p>Esse compromisso revela muito sobre seu caráter: ela não busca reconhecimento, mas sim impacto. Cada copinho de açaí vendido carrega um pouco dessa missão. E quem conhece Drika sabe — ela faz isso com o coração inteiro.</p>

        <h4>Sustentabilidade</h4>
        <p>O “Açaí da Drika” também olha para o futuro. Com apoio de <strong>empresas amigas</strong>, como o <strong><em>Dr. Leandro</em></strong> — parceiro Advogado Trabalhista — e a <strong><em>HopeUp 7.DEV</em></strong>, que fortalece a presença digital e os valores da marca, Drika vem desenvolvendo iniciativas sustentáveis que vão além do produto.</p>

        <p>Entre as ações em andamento, destacam-se:</p>
        <ul>
        <li>✦<em>Uso consciente de embalagens</em> e incentivo ao descarte correto</li>
        <li>✦<em>Parcerias com produtores locais</em> para valorizar a cadeia do açaí</li>
        <li>✦<em>Campanhas educativas</em> sobre alimentação e inclusão</li>
        </ul>

        <p>Mas o que realmente encanta é a forma como tudo isso se conecta ao sabor. O açaí da Drika vem em variações que fazem brilhar os olhos: <strong>Morango</strong>, <strong>Banana</strong>, <strong>Nutella</strong>, <strong>Paçoca</strong>, <strong>Bombom Sonho de Valsa</strong>, <strong>Granola</strong>, <strong>Sucrilhos</strong>, <strong>Leite condensado</strong>, <strong>Leite Ninho</strong> — onde cada combinação é um convite à alegria.</p>

        <p>E para quem busca algo mais personalizado, há a opção de <strong>reservas</strong>, garantindo um <em>atendimento mais específico</em>, com tempo, cuidado e exclusividade. É nessa delicadeza que Drika mostra que empreender pode ser também um ato de amor.</p>

        </section>

        <!-- Chamada para ação: dois botões -->
        <section class="cta-drika">
        <h2>Experimente o verdadeiro sabor</h2>
        <p class="cta-legenda">Cada combinação é um convite à alegria. Escolha seu momento, compartilhe com quem você ama.</p>

        <div class="botoes-cta">
        <a href="https://wa.me/5511980839210" target="_blank">
            <button>WhatsApp</button>
        </a>
        <a href="https://www.instagram.com/seuperfil" target="_blank">
            <button>Instagram</button>
        </a>
        </div>

        </section>

    </div>
    </main>


 <!-- Seção do flyer para impressão -->
    <section class="pagina-frente">
    <div class="flyer-container">
        <!-- Logo da Drika -->
        <img src="drika_front/imgs_drika/logo_flyer.png" alt="Logo Açaí da Drika" class="flyer-logo" />
       </div>
    </section>

  <!-- Verso do flyer -->
    <section class="pagina-verso">
    <div class="flyer-container">
        <div class="flyer-container-1">
        <!-- Logo Verso Garrafas Açaí da Drika -->
        <img src="drika_front/imgs_drika/açai_gar_drika.png" alt="Logo Açaí da Drika" class="flyer-logo-1" />
       </div>
        <h2 class="flyer-subtitulo"><em>Monte do seu jeito</em></h2>
        <ul class="flyer-cardapio">
        <li>✦ Açaí 300ml — R$10</li>
        <li>✦ Açaí 500ml — R$15</li>
        <li>✦ Açaí 1L — R$20</li>
        <li>✦ Açaí 1.5L — R$25</li>
        <li>✦ Açaí 2L — R$30</li>
        <li>✦ Açaí 3L — R$50</li>
        </ul>

        <h4>Todos acompanham: Leite Ninho, Paçoca, Fruta à escolher, Nutella, Granola e um delicioso Açaí</h4>
        <p>Adicionais: ✦Leite Ninho, ✦Paçoca, ✦Fruta à escolher, ✦Nutella, ✦Granola, ✦Sonho de Valsa, ✦M&M`s, ✦Calda, ✦Canudo Doce</p>

        <p class="flyer-frase"><em>Açaí que abraça. Açaí que entrega.</p>
        <h2 class="flyer-subtitulo-1">Peça já o seu!</h2>
        <h3 class="flyer-subtitulo-2">Açaí da Drika 55 11 98083-9210 </h3>
        <!-- <img src="drika_front/imgs_drika/qrcode_whatsapp.png" alt="QR Code para pedidos" class="flyer-qrcode" /> -->
    </div>
    <button onclick="window.print()">🖨️ Imprimir flyer</button>

    </section>

    <!-- Rodapé -->
    <footer class="footer-drika">
    <p>© 2025 Açai da Drika - Todos os direitos reservados</p>
    <div class="powered-by">
        <img src="drika_front/imgs_drika/icone_hopeup.png" alt="Logo HopeUp 7.DEV" class="logo-footer-powered" loading="lazy">
        <span>© Equipe Powered By HopeUp 7.DEV</span>
    </div>
    </footer>

    <!-- Referência ao JavaScript personalizado -->
    <script src="drika_front/drika_scripts/drika.js"></script>
</body>

   

reset.css:/* ← Reset universal de estilos */
/* Deus, Tu és Senhor e Rei e integrante da Equipe HopeUp 7.DEV, por isso se faça presente aqui nestes nossos estudos, por favor, Senhor. */

/* ===================== RESET BÁSICO ===================== */
/* Comentário: remove margens e preenchimentos padrão dos navegadores */

* {
  margin: 0;                    /* Remove todas as margens padrão */
  padding: 0;                   /* Remove todos os preenchimentos padrão */
  box-sizing: border-box;       /* Inclui padding e borda no cálculo de largura/altura */
}

/* ===================== RESET DO BODY ===================== */
/* Comentário: define estilo base para o corpo da página */

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* Fonte moderna e legível, com fallback seguro */

  line-height: 1.6;             /* Altura de linha confortável para leitura */
  background-color: #f9f9f9;    /* Fundo neutro e suave */
  color: #333;                  /* Texto em cinza escuro para contraste sem agressividade */

  font-size: clamp(1rem, 1.2vw, 1.125rem);
  /* Tamanho fluido da fonte:
     - mínimo: 1rem (16px)
     - ideal: 1.2vw (1.2% da largura da viewport)
     - máximo: 1.125rem (18px) */
}

/* ===================== MEDIA QUERIES ===================== */
/* Comentário: ajustes finos para responsividade do reset base */

/* Smartphones pequenos (até 400px) */
@media screen and (max-width: 400px) {
  body {
    font-size: 15px;            /* Fonte levemente menor para telas estreitas */
  }
}

/* Smartphones médios (até 480px) */
@media screen and (max-width: 480px) {
  body {
    font-size: 15.5px;          /* Ajuste fino para celulares médios */
  }
}

/* Smartphones grandes / phablets (até 600px) */
@media screen and (max-width: 600px) {
  body {
    font-size: 16px;            /* Fonte padrão para dispositivos híbridos */
  }
}

/* Tablets pequenos (até 768px) */
@media screen and (max-width: 768px) {
  body {
    font-size: 16px;            /* Mantém legibilidade em tablets */
  }
}

/* Tablets grandes / notebooks compactos (até 992px) */
@media screen and (max-width: 992px) {
  body {
    font-size: 16.5px;          /* Leve aumento para notebooks pequenos */
  }
}

/* Notebooks médios (até 1200px) */
@media screen and (max-width: 1200px) {
  body {
    font-size: 17px;            /* Fonte maior para conforto em telas médias */
  }
}

/* Desktops grandes (até 1440px) */
@media screen and (max-width: 1440px) {
  body {
    font-size: 17.5px;          /* Fonte editorial para monitores full HD */
  }
}

/* Ultrawides (acima de 1920px) */
@media screen and (min-width: 1921px) {
  body {
    font-size: 18px;            /* Fonte ampla para telas ultra largas */
  }
}
base.css:/* ← Tipografia, cores e elementos genéricos */
/* Deus, Tu és Senhor e Rei e integrante da Equipe HopeUp 7.DEV, por isso se faça presente aqui nestes nossos estudos, por favor, Senhor. */

/* ===================== ESPAÇAMENTO ENTRE SEÇÕES ===================== */
/* Comentário: define espaço vertical entre blocos do <main> */
main > section {
  margin-bottom: 3rem; /* Espaço padrão entre seções */
}

/* ===================== HIERARQUIA TIPOGRÁFICA ===================== */
/* Comentário: define tamanhos de títulos com responsividade usando clamp() */

h1 {
  font-size: clamp(1.8rem, 4vw, 2.5rem); /* Título principal */
  line-height: 1.3;
}

h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);   /* Subtítulo */
  line-height: 1.4;
}

h3 {
  font-size: clamp(1.3rem, 2.5vw, 1.8rem); /* Título de seção */
}

h4 {
  font-size: clamp(1.1rem, 2vw, 1.5rem);   /* Título auxiliar */
}

/* ===================== PARÁGRAFOS ===================== */
/* Comentário: define estilo base para textos corridos */

p {
  font-size: clamp(0.800rem, 1.0vw, 1.0rem); /* Texto fluido e legível */
  line-height: 1.6;                          /* Altura de linha confortável */
  margin-bottom: 1rem;                       /* Espaço entre parágrafos */
  color: inherit;                            /* Herda cor do body */
}

/* ===================== LISTAS ===================== */
/* Comentário: define estilo base para listas ordenadas e não ordenadas */

ul, li {
  font-size: clamp(0.95rem, 1.1vw, 1rem); /* Tamanho fluido para itens */
  margin-left: 1rem;                     /* Recuo padrão */
  line-height: 1.6;                      /* Altura de linha consistente */
}

/* ===================== MEDIA QUERIES ===================== */
/* Comentário: ajustes finos de tipografia e espaçamento por faixa de tela */

/* Smartphones pequenos (até 400px) */
@media screen and (max-width: 400px) {
  main > section {
    margin-bottom: 2rem;     /* Reduz espaço entre seções */
  }

  html, body {
    font-size: 15px;         /* Fonte base levemente menor */
  }
}

/* Smartphones médios (até 480px) */
@media screen and (max-width: 480px) {
  html, body {
    font-size: 15.5px;       /* Ajuste fino para celulares médios */
  }
}

/* Smartphones grandes / phablets (até 600px) */
@media screen and (max-width: 600px) {
  html, body {
    font-size: 16px;         /* Fonte base padrão */
  }
}

/* Tablets pequenos (até 768px) */
@media screen and (max-width: 768px) {
  html, body {
    font-size: 16px;         /* Mantém legibilidade em tablets */
  }
}

/* Tablets grandes / notebooks compactos (até 992px) */
@media screen and (max-width: 992px) {
  html, body {
    font-size: 16.5px;       /* Leve aumento para notebooks pequenos */
  }
}

/* Notebooks médios (até 1200px) */
@media screen and (max-width: 1200px) {
  html, body {
    font-size: 17px;         /* Fonte maior para conforto em telas médias */
  }
}

/* Desktops grandes (até 1440px) */
@media screen and (max-width: 1440px) {
  html, body {
    font-size: 17.5px;       /* Fonte editorial para monitores full HD */
  }
}

/* Ultrawides (acima de 1920px) */
@media screen and (min-width: 1921px) {
  html, body {
    font-size: 18px;         /* Fonte ampla para telas ultra largas */
  }

  main > section {
    margin-bottom: 4rem;     /* Mais espaço entre blocos */
  }
}
cta_drika.css:/* ← Chamada para ação editorial */
/* Deus, Tu és Senhor e Rei e integrante da Equipe HopeUp 7.DEV, por isso se faça presente aqui também, Senhor. */

/* Container principal da seção CTA (Call to Action) */
.cta-drika {
  position: relative; /* Permite sobreposição de elementos se necessário */
  padding: 4rem 2rem; /* Espaçamento interno generoso para destaque */
  text-align: center; /* Centraliza todo o conteúdo */
  background-image: url('../imgs_drika/imagem_fundo.png'); /* Fundo visual com textura editorial */
  background-size: cover; /* Cobre toda a área da seção */
  background-position: bottom center; /* Alinha o fundo para baixo e centralizado */
  background-repeat: no-repeat; /* Evita repetição da imagem */
  opacity: 0.95; /* Leve transparência para integração com o layout */
  z-index: 1; /* Garante que fique acima de fundos esfumados */
}

/* Título principal da CTA */
.cta-drika h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem); /* Tamanho fluido entre 1.8rem e 2.5rem */
  color: #2c2c2c; /* Tom editorial escuro */
  margin-bottom: 1rem; /* Espaço abaixo do título */
}

/* Legenda abaixo do título */
.cta-legenda {
  font-size: clamp(1rem, 1.2vw, 1.125rem); /* Tamanho fluido e legível */
  color: #444; /* Tom neutro escuro */
  margin-bottom: 2rem; /* Espaço abaixo da legenda */
  font-style: italic; /* Estilo editorial sutil */
}

/* Container dos botões */
.botoes-cta {
  display: flex; /* Alinha os botões em linha */
  justify-content: center; /* Centraliza horizontalmente */
  gap: 1.5rem; /* Espaço entre os botões */
}

/* Estilo dos botões */
.botoes-cta button {
  background-color: #6a4fb3; /* Roxo editorial */
  color: #fff; /* Texto branco para contraste */
  border: none; /* Remove borda padrão */
  padding: 0.75rem 1.5rem; /* Espaçamento interno confortável */
  font-size: 1rem; /* Tamanho de texto padrão */
  border-radius: 8px; /* Bordas arredondadas suaves */
  cursor: pointer; /* Cursor de clique */
  box-shadow: 0 4px 8px rgba(106, 79, 179, 0.3); /* Sombra leve com tom do botão */
  transition: background-color 0.3s ease; /* Suaviza mudança de cor no hover */
}

/* Efeito hover nos botões */
.botoes-cta button:hover {
  background-color: #5a3fa0; /* Tom mais escuro ao passar o mouse */
}
/* Smartphones pequenos (até 400px) */
@media screen and (max-width: 400px) {
  .cta-drika {
    padding: 2rem 1rem;
  }

  .botoes-cta {
    flex-direction: column; /* Empilha os botões verticalmente */
    gap: 1rem;
  }

  .botoes-cta button {
    width: 100%; /* Ocupa toda a largura disponível */
  }
    .cta-drika h2 {
    font-size: 1.6rem; /* Reduz o tamanho do título */
    word-break: break-word; /* Permite quebra de palavra se necessário */
    line-height: 1.3; /* Melhora a leitura em telas pequenas */
    max-width: 100%; /* Garante que não ultrapasse a largura */
  }

  .cta-legenda {
    font-size: 0.95rem; /* Ajuste leve na legenda */
  }
}

/* Smartphones médios (até 480px) */
@media screen and (max-width: 480px) {
  .cta-drika {
    padding: 2.5rem 1.2rem;
  }

  .botoes-cta {
    flex-direction: column;
    gap: 1.2rem;
  }
}

/* Smartphones grandes / phablets (até 600px) */
@media screen and (max-width: 600px) {
  .cta-drika {
    padding: 3rem 1.5rem;
  }

  .botoes-cta {
    flex-direction: column;
    gap: 1.5rem;
  }
}

/* Tablets pequenos (até 768px) */
@media screen and (max-width: 768px) {
  .cta-drika {
    padding: 3.5rem 2rem;
  }

  .botoes-cta {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
}

/* Tablets grandes / notebooks compactos (até 992px) */
@media screen and (max-width: 992px) {
  .cta-drika {
    padding: 4rem 2.5rem;
  }
}

/* Notebooks médios (até 1200px) */
@media screen and (max-width: 1200px) {
  .cta-drika {
    padding: 4.5rem 3rem;
  }
}

/* Desktops grandes (até 1440px) */
@media screen and (max-width: 1440px) {
  .cta-drika {
    padding: 5rem 3.5rem;
  }
}

/* Ultrawides (acima de 1920px) */
@media screen and (min-width: 1921px) {
  .cta-drika {
    padding: 6rem 4rem;
    max-width: 1600px;
    margin: 0 auto;
  }

  .cta-drika h2 {
    font-size: 3rem;
  }

  .cta-legenda {
    font-size: 1.25rem;
  }

  .botoes-cta button {
    font-size: 1.1rem;
    padding: 1rem 2rem;
  }
}
/* Ajuste específico para iPhone 8 (375px) */
@media screen and (max-width: 380px) {
  .cta-drika h2 {
    font-size: 1.4rem;
    line-height: 1.3;
    word-break: break-word;
    max-width: 100%;
    padding: 0 0.5rem;
  }

  .cta-legenda {
    font-size: 0.9rem;
    line-height: 1.4;
    padding: 0 0.5rem;
  }

  .botoes-cta {
    flex-direction: column;
    gap: 1rem;
  }

  .botoes-cta button {
    width: 100%;
    font-size: 0.95rem;
  }
}

/* ===================== TÍTULOS INSTITUCIONAIS ===================== */
/* Define estilo editorial para títulos dentro da seção institucional */

.institucional-drika h2,
.institucional-drika h3,
.institucional-drika h4 {
  font-family: 'Segoe UI', sans-serif; /* Fonte moderna e legível */
  font-weight: 600;                    /* Peso médio para destaque */
  color: #2c2c2c;                      /* Tom escuro editorial */
  margin-bottom: 1rem;                /* Espaço abaixo do título */
}

/* ===================== PARÁGRAFOS INSTITUCIONAIS ===================== */
/* Define estilo para textos explicativos e editoriais */

.institucional-drika p {
  font-size: clamp(1rem, 1.2vw, 1.125rem); /* Tamanho fluido para leitura confortável */
  line-height: 1.6;                        /* Espaçamento entre linhas para fluidez */
  color: #333;                             /* Tom neutro editorial */
  margin-bottom: 1rem;                    /* Espaço abaixo do parágrafo */
}

/* ===================== LISTAS INSTITUCIONAIS ===================== */
/* Define estilo para listas editoriais com ícones personalizados */

.institucional-drika ul {
  padding-left: 1.5rem;                   /* Recuo interno para alinhamento dos itens */
  margin-bottom: 1.5rem;                  /* Espaço abaixo da lista */
  list-style: none;                       /* Remove os marcadores padrão (bolinhas) */
}

/* ===================== ITENS DE LISTA ===================== */
/* Define estilo para cada item da lista institucional */

.institucional-drika li {
  margin-bottom: 0.5rem;                  /* Espaço entre os itens */
  color: #444;                            /* Tom escuro suave para texto */
}

/* ======== ÍCONES PERSONALIZADOS ================ */
/* Adiciona um símbolo editorial antes de cada item da lista */

.institucional-drika li::before {
  content: "✦ ";                          /* Símbolo editorial personalizado */
  color: #6a4fb3;                         /* Tom roxo editorial para destaque */
  font-weight: bold;                     /* Peso forte para o ícone */
}
/* ======= MEDIA QUERIES: INSTITUCIONAL DRIKA ========= */
/* Ajustes progressivos para responsividade e legibilidade em diferentes tamanhos de tela */


/* Smartphones pequenos (até 400px) */
@media screen and (max-width: 400px) {
  /* Reduz tamanho dos títulos para melhor encaixe em telas estreitas */
  .institucional-drika h2,
  .institucional-drika h3,
  .institucional-drika h4 {
    font-size: 1.2rem;           /* Títulos mais compactos */
    margin-bottom: 0.8rem;       /* Espaço menor abaixo dos títulos */
  }

  /* Ajusta tamanho e espaçamento dos parágrafos para leitura confortável */
  .institucional-drika p {
    font-size: 0.9rem;           /* Texto menor para caber melhor */
    line-height: 1.5;            /* Espaçamento entre linhas reduzido */
    margin-bottom: 0.8rem;       /* Espaço menor abaixo dos parágrafos */
  }

  /* Reduz recuo e espaçamento da lista */
  .institucional-drika ul {
    padding-left: 1rem;          /* Recuo menor para itens da lista */
    margin-bottom: 1rem;         /* Espaço menor abaixo da lista */
  }

  /* Ajusta espaçamento entre itens da lista */
  .institucional-drika li {
    margin-bottom: 0.4rem;       /* Espaço menor entre os itens */
  }

  /* Reduz tamanho do ícone editorial */
  .institucional-drika li::before {
    font-size: 0.9rem;           /* Ícone menor para não ocupar muito espaço */
  }
}

/* Smartphones médios (até 480px) */
@media screen and (max-width: 480px) {
  /* Títulos levemente maiores para telas médias */
  .institucional-drika h2,
  .institucional-drika h3,
  .institucional-drika h4 {
    font-size: 1.3rem;
  }

  /* Texto um pouco maior para melhor leitura */
  .institucional-drika p {
    font-size: 0.95rem;
  }

  /* Ícone editorial ajustado para acompanhar o texto */
  .institucional-drika li::before {
    font-size: 1rem;
  }
}

/* Smartphones grandes / phablets (até 600px) */
@media screen and (max-width: 600px) {
  /* Títulos com tamanho padrão editorial */
  .institucional-drika h2,
  .institucional-drika h3,
  .institucional-drika h4 {
    font-size: 1.4rem;
  }

  /* Texto com tamanho base para leitura fluida */
  .institucional-drika p {
    font-size: 1rem;
  }
}

/* Tablets pequenos (até 768px) */
@media screen and (max-width: 768px) {
  /* Títulos maiores para telas de tablet */
  .institucional-drika h2,
  .institucional-drika h3,
  .institucional-drika h4 {
    font-size: 1.5rem;
  }

  /* Texto levemente ampliado para leitura editorial */
  .institucional-drika p {
    font-size: 1.05rem;
  }
}

/* Tablets grandes / notebooks compactos (até 992px) */
@media screen and (max-width: 992px) {
  /* Títulos com presença editorial em telas médias */
  .institucional-drika h2,
  .institucional-drika h3,
  .institucional-drika h4 {
    font-size: 1.6rem;
  }

  /* Texto ampliado para leitura confortável */
  .institucional-drika p {
    font-size: 1.1rem;
  }
}

/* Notebooks médios (até 1200px) */
@media screen and (max-width: 1200px) {
  /* Títulos com destaque editorial */
  .institucional-drika h2,
  .institucional-drika h3,
  .institucional-drika h4 {
    font-size: 1.7rem;
  }

  /* Texto com proporção editorial */
  .institucional-drika p {
    font-size: 1.125rem;
  }
}

/* Desktops grandes (até 1440px) */
@media screen and (max-width: 1440px) {
  /* Títulos com presença visual em monitores full HD */
  .institucional-drika h2,
  .institucional-drika h3,
  .institucional-drika h4 {
    font-size: 1.8rem;
  }

  /* Texto editorial ampliado */
  .institucional-drika p {
    font-size: 1.15rem;
  }
}

/* Ultrawides (acima de 1920px) */
@media screen and (min-width: 1921px) {
  /* Títulos com destaque editorial em telas ultra largas */
  .institucional-drika h2,
  .institucional-drika h3,
  .institucional-drika h4 {
    font-size: 2rem;             /* Títulos com presença editorial */
    margin-bottom: 1.2rem;       /* Espaço maior abaixo dos títulos */
  }

  /* Texto ampliado para leitura confortável */
  .institucional-drika p {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1.2rem;
  }

  /* Lista com espaçamento editorial */
  .institucional-drika ul {
    padding-left: 2rem;          /* Recuo maior para destaque dos itens */
    margin-bottom: 2rem;         /* Espaço editorial abaixo da lista */
  }

  /* Itens da lista com texto ampliado */
  .institucional-drika li {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }

  /* Ícone editorial ampliado */
  .institucional-drika li::before {
    font-size: 1.2rem;
  }
}
/* Deus, Tu és Senhor e Rei e integrante da Equipe HopeUp 7.DEV, por isso se faça presente aqui nestes nossos estudos, por favor, Senhor. */

/* ← Banner institucional com logo circular */

/* ===================== CONTAINER DA LOGO ===================== */
/* Comentário editorial: este bloco centraliza a imagem do logotipo dentro do banner, com fundo branco para destaque visual */

.logo-drika-container {
  display: flex;                  /* Ativa layout flexível */
  justify-content: center;       /* Centraliza horizontalmente a imagem */
  align-items: center;           /* Centraliza verticalmente dentro do banner */
  height: 100%;                  /* Ocupa toda a altura do banner */
  background-color: #fff;        /* Fundo branco para destacar a imagem circular */
}

/* ===================== IMAGEM CIRCULAR DO LOGO ===================== */
/* Comentário técnico: define tamanho, forma e estilo visual da imagem institucional */

.logo-drika {
  width: 280px;                  /* Largura padrão da imagem em telas desktop */
  height: auto;                  /* Mantém proporção original da imagem */
  border-radius: 50%;            /* Torna a imagem perfeitamente circular */
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08); /* Sombra suave para destaque visual */
  object-fit: cover;             /* Garante que a imagem preencha o espaço sem distorcer */
}

/* ===================== MEDIA QUERIES ===================== */
/* Comentário: ajustes de tamanho da imagem para diferentes dispositivos */

/* Smartphones pequenos (até 400px) */
@media screen and (max-width: 400px) {
  .logo-drika {
    width: 180px;                /* Reduz a imagem para caber melhor em telas estreitas */
  }
}

/* Smartphones médios (até 480px) */
@media screen and (max-width: 480px) {
  .logo-drika {
    width: 200px;                /* Tamanho intermediário para celulares médios */
  }
}

/* Smartphones grandes / phablets (até 600px) */
@media screen and (max-width: 600px) {
  .logo-drika {
    width: 220px;                /* Imagem maior para dispositivos híbridos */
  }
}

/* Tablets pequenos (até 768px) */
@media screen and (max-width: 768px) {
  .logo-drika {
    width: 240px;                /* Imagem maior para tablets pequenos */
  }
}

/* Tablets grandes / notebooks compactos (até 992px) */
@media screen and (max-width: 992px) {
  .logo-drika {
    width: 260px;                /* Imagem quase no padrão desktop */
  }
}

/* Notebooks médios (até 1200px) */
@media screen and (max-width: 1200px) {
  .logo-drika {
    width: 280px;                /* Imagem padrão para notebooks médios */
  }
}

/* Desktops grandes (até 1440px) */
@media screen and (max-width: 1440px) {
  .logo-drika {
    width: 300px;                /* Imagem maior para monitores full HD */
  }
}

/* Ultrawides (acima de 1920px) */
@media screen and (min-width: 1921px) {
  .logo-drika {
    width: 320px;                /* Imagem maior para telas ultra largas */
  }
}
/* Deus, Tu és Senhor e Rei e integrante da Equipe HopeUp 7.DEV, por isso se faça presente aqui nestes nossos estudos, por favor, Senhor. */

/* ← Layout principal do <main> do site Açaí da Drika */

/* ===================== MAIN EXTERNO ===================== */
/* Comentário: define o contêiner principal da página, com largura generosa e centralização */

.main-drika {
  display: flex;                  /* Ativa layout flexível */
  flex-direction: column;         /* Organiza os blocos verticalmente */
  align-items: center;            /* Centraliza horizontalmente */
  justify-content: flex-start;    /* Alinha os blocos ao topo */
  width: 100%;                    /* Ocupa toda a largura da viewport */
  max-width: 1440px;              /* Limita largura máxima para evitar esticar demais */
  margin: 0 auto;                 /* Centraliza o <main> na tela */
  padding: 2rem;                  /* Espaço interno para respiro visual */
  box-sizing: border-box;         /* Inclui padding na largura total */
  position: relative;             /* Permite posicionamento de fundos e camadas */
  z-index: 1;                     /* Garante que o conteúdo fique acima dos fundos */
}

/* ===================== FLEXBOX INTERNO ===================== */
/* Comentário: organiza os blocos internos do main com espaçamento e fluidez */

.flexbox-principal {
  display: flex;                  /* Ativa layout flexível */
  flex-direction: column;         /* Organiza os blocos verticalmente */
  gap: 3rem;                      /* Espaço entre os blocos internos */
  width: 100%;                    /* Ocupa toda a largura do main */
  text-align: center;             /* Centraliza todo o texto por padrão */
}

/* ← Responsividade do layout principal do <main> */

/* Deus, Tu és Senhor e Rei e integrante da Equipe HopeUp 7.DEV, por isso se faça presente aqui nestes nossos estudos, por favor, Senhor. */

/* Smartphones pequenos (até 400px) */
@media screen and (max-width: 400px) {
  .main-drika {
    padding: 1rem;               /* Reduz o espaçamento interno para telas estreitas */
  }

  .flexbox-principal {
    gap: 2rem;                   /* Espaço menor entre os blocos internos */
    text-align: center;          /* Mantém centralização do texto */
  }
}

/* Smartphones médios (até 480px) */
@media screen and (max-width: 480px) {
  .main-drika {
    padding: 1.2rem;             /* Espaço intermediário para celulares médios */
  }

  .flexbox-principal {
    gap: 2.2rem;
  }
}

/* Smartphones grandes / phablets (até 600px) */
@media screen and (max-width: 600px) {
  .main-drika {
    padding: 1.5rem;             /* Espaço maior para dispositivos híbridos */
  }

  .flexbox-principal {
    gap: 2.5rem;
  }
}

/* Tablets pequenos (até 768px) */
@media screen and (max-width: 768px) {
  .main-drika {
    padding: 1.8rem;             /* Espaço confortável para tablets */
  }

  .flexbox-principal {
    gap: 2.8rem;
  }
}

/* Tablets grandes / notebooks compactos (até 992px) */
@media screen and (max-width: 992px) {
  .main-drika {
    padding: 2rem;               /* Mantém espaçamento padrão */
  }

  .flexbox-principal {
    gap: 3rem;
  }
}

/* Notebooks médios (até 1200px) */
@media screen and (max-width: 1200px) {
  .main-drika {
    padding: 2.2rem;             /* Espaço extra para telas maiores */
  }

  .flexbox-principal {
    gap: 3.2rem;
  }
}

/* Desktops grandes (até 1440px) */
@media screen and (max-width: 1440px) {
  .main-drika {
    padding: 2.5rem;             /* Espaço generoso para monitores full HD */
  }

  .flexbox-principal {
    gap: 3.5rem;
  }
}

/* Ultrawides (acima de 1920px) */
@media screen and (min-width: 1921px) {
  .main-drika {
    padding: 3rem;               /* Espaço amplo para telas ultra largas */
    max-width: 1600px;           /* Expande limite máximo do main */
  }

  .flexbox-principal {
    gap: 4rem;                   /* Espaço editorial entre blocos */
  }
}
/* ← Fundos visuais recortados e posicionados */
/* Deus, Tu és Senhor e Rei e integrante da Equipe HopeUp 7.DEV, por isso se faça presente aqui nestes nossos estudos, por favor, Senhor. */

/* ===================== FUNDO DO CARROSSEL ===================== */
/* Aplica a parte superior da imagem esfumada atrás do carrossel */
.fundo-carrossel {
  position: absolute; /* Posiciona atrás dos elementos principais */
  top: 0;              /* Alinha ao topo da seção */
  left: 0;             /* Alinha à esquerda da seção */
  width: 100%;         /* Ocupa toda a largura */
  height: 100%;        /* Ocupa toda a altura */
  background-image: url('../imgs_drika/imagem_fundo.png'); /* Imagem esfumada aplicada */
  background-size: cover; /* Cobre toda a área disponível */
  background-position: top center; /* Alinha a imagem ao topo e centro */
  background-repeat: no-repeat; /* Evita repetição da imagem */
  opacity: 0.25;       /* Transparência leve para manter legibilidade */
  z-index: 0;          /* Fica atrás do conteúdo textual */
}

/* ===================== FUNDO INSTITUCIONAL ===================== */
/* Aplica a parte inferior da imagem esfumada atrás do conteúdo editorial */
.fundo-institucional {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../imgs_drika/imagem_fundo.png'); /* Mesma imagem esfumada */
  background-size: cover;
  background-position: bottom center; /* Alinha a imagem ao fundo e centro */
  background-repeat: no-repeat;
  opacity: 0.2;        /* Transparência ainda mais suave para textos */
  z-index: 0;
}

/* ===================== AJUSTES PARA TEXTO SOBRE O FUNDO ===================== */
/* Garante que o conteúdo textual fique acima do fundo esfumado */
.carrossel-drika,
.institucional-drika {
  position: relative; /* Permite sobreposição controlada */
  z-index: 1;         /* Garante que o conteúdo fique acima do fundo */
}

/* ===================== TIPOGRAFIA EDITORIAL SOBRE FUNDO ===================== */
/* Define cores e estilos para títulos e parágrafos sobre fundo esfumado */
.carrossel-drika h1,
.institucional-drika h2,
.institucional-drika h3,
.institucional-drika h4 {
  color: #2c2c2c; /* Tom editorial escuro para títulos */
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4); /* Leve destaque sobre fundo claro */
}

.institucional-drika p,
.carrossel-drika p {
  color: #333; /* Tom editorial neutro para parágrafos */
  font-size: clamp(1rem, 1.2vw, 1.125rem); /* Tamanho fluido e legível */
  line-height: 1.6; /* Espaçamento entre linhas para leitura confortável */
  margin-bottom: 1rem; /* Espaço abaixo de cada parágrafo */
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.3); /* Leve contraste sobre fundo roxo */
}
/* ===================== MEDIA QUERIES: FUNDO E TEXTO SOBRE FUNDO ===================== */
/* Ajustes progressivos para responsividade e legibilidade em diferentes tamanhos de tela */

/* Smartphones pequenos (até 400px) */
@media screen and (max-width: 400px) {
  /* Reduz opacidade do fundo para evitar conflito com texto */
  .fundo-carrossel,
  .fundo-institucional {
    opacity: 0.18;
  }

  /* Ajusta tamanho de texto para melhor encaixe */
  .carrossel-drika p,
  .institucional-drika p {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  /* Reduz sombra para evitar excesso de contraste */
  .carrossel-drika h1,
  .institucional-drika h2,
  .institucional-drika h3,
  .institucional-drika h4 {
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.3);
  }
}

/* Smartphones médios (até 480px) */
@media screen and (max-width: 480px) {
  .fundo-carrossel,
  .fundo-institucional {
    opacity: 0.2;
  }

  .carrossel-drika p,
  .institucional-drika p {
    font-size: 0.95rem;
  }
}

/* Smartphones grandes / phablets (até 600px) */
@media screen and (max-width: 600px) {
  .carrossel-drika p,
  .institucional-drika p {
    font-size: 1rem;
  }
}

/* Tablets pequenos (até 768px) */
@media screen and (max-width: 768px) {
  .fundo-carrossel,
  .fundo-institucional {
    opacity: 0.22;
  }

  .carrossel-drika p,
  .institucional-drika p {
    font-size: 1.05rem;
  }
}

/* Tablets grandes / notebooks compactos (até 992px) */
@media screen and (max-width: 992px) {
  .carrossel-drika p,
  .institucional-drika p {
    font-size: 1.1rem;
  }
}

/* Notebooks médios (até 1200px) */
@media screen and (max-width: 1200px) {
  .carrossel-drika p,
  .institucional-drika p {
    font-size: 1.125rem;
  }
}

/* Desktops grandes (até 1440px) */
@media screen and (max-width: 1440px) {
  .fundo-carrossel,
  .fundo-institucional {
    opacity: 0.25;
  }

  .carrossel-drika p,
  .institucional-drika p {
    font-size: 1.15rem;
  }
}

/* Ultrawides (acima de 1920px) */
@media screen and (min-width: 1921px) {
  .fundo-carrossel,
  .fundo-institucional {
    opacity: 0.3; /* Fundo mais visível em telas grandes */
  }

  .carrossel-drika p,
  .institucional-drika p {
    font-size: 1.2rem; /* Texto editorial ampliado */
    line-height: 1.7;
  }

  .carrossel-drika h1,
  .institucional-drika h2,
  .institucional-drika h3,
  .institucional-drika h4 {
    font-size: 2.5rem; /* Títulos com presença editorial */
  }
}
/* ===================== ESTILO DO CARROSSEL DRIKA ===================== */
/* Este módulo estiliza o carrossel editorial de imagens de açaí */

/* Fundo suave do carrossel com gradiente pastel */
.fundo-carrossel {
  position: absolute; /* Posiciona atrás dos elementos principais */
  top: 0;
  left: 0;
  width: 100%; /* Ocupa toda a largura */
  height: 100%; /* Ocupa toda a altura */
  background: linear-gradient(to bottom right, #fbeee0, #fddcc3); /* Gradiente suave */
  opacity: 0.3; /* Transparência para não competir com o conteúdo */
  z-index: 0; /* Fica atrás dos demais elementos */
}

/* Container principal do carrossel */
.carrossel-container {
  position: relative; /* Permite posicionamento dos botões e fundo */
  display: flex; /* Alinha itens em linha */
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
  overflow: hidden; /* Esconde conteúdo que ultrapassa os limites */
  padding: 1rem; /* Espaçamento interno */
  background-color: rgba(255, 255, 255, 0.50); /* leve transparência */
  /*border-radius: 15px;  Bordas arredondadas para estética suave */
  box-shadow: 0 0 20px rgba(0,0,0,0.1); /* Sombra leve para profundidade */
}

/* Área que agrupa os itens do carrossel */
.carrossel-itens {
  display: flex; /* Alinha os artigos em linha */
  gap: 2rem; /* Espaçamento entre os itens */
  transition: transform 0.5s ease; /* Suaviza transições de movimento */
}

/* Estilo base de cada item do carrossel */
.carrossel-item {
  min-width: 260px; /* Largura mínima para consistência visual */
  max-width: 260px; /* Largura máxima para evitar distorções */
  flex-shrink: 0; /* Impede que o item encolha */
  text-align: center; /* Centraliza conteúdo interno */
  opacity: 0.5; /* Deixa item não ativo mais apagado */
  transform: scale(0.95); /* Leve redução para destacar o ativo */
  transition: all 0.3s ease; /* Suaviza qualquer mudança de estado */
  display: none; /* Esconde todos os itens por padrão */
}

/* Estilo aplicado ao item ativo (em destaque) */
.carrossel-item.ativo {
  opacity: 1; /* Totalmente visível */
  transform: scale(1.05); /* Leve aumento para destacar */
  display: block; /* Exibe apenas o item ativo */
}

/* Imagem oficial do carrossel */
.carrossel-img-oficial {
  width: 100%; /* Ocupa toda a largura do item */
  border-radius: 15px; /* Bordas arredondadas para estética suave */
  box-shadow: 0 4px 10px rgba(0,0,0,0.2); /* Sombra para destacar a imagem */
}

/* Legenda abaixo da imagem */
.carrossel-legenda {
  margin-top: 0.5rem; /* Espaço entre imagem e texto */
  font-size: 1rem; /* Tamanho de fonte padrão */
  color: #5a2d0c; /* Tom terroso para combinar com tema de açaí */
  font-weight: 500; /* Peso médio para destaque */
}

/* Botões de navegação (setas esquerda e direita) */
.seta-esquerda,
.seta-direita {
  background-color: #ffddc1; /* Tom pastel para suavidade visual */
  border: none; /* Remove borda padrão */
  font-size: 2rem; /* Tamanho grande para acessibilidade */
  padding: 0.5rem 1rem; /* Espaçamento interno confortável */
  cursor: pointer; /* Cursor de clique */
  border-radius: 50%; /* Botão circular */
  box-shadow: 0 2px 6px rgba(0,0,0,0.2); /* Sombra para profundidade */
  z-index: 1; /* Fica acima do fundo */
  transition: background-color 0.3s ease; /* Suaviza mudança de cor */
}

/* Efeito hover nos botões de navegação */
.seta-esquerda:hover,
.seta-direita:hover {
  background-color: #ffcba4; /* Tom mais quente ao passar o mouse */
}
/* ===================== MEDIA QUERIES: CARROSSEL DRIKA ===================== */
/* Responsividade completa para o carrossel editorial de imagens de açaí */

/* Smartphones pequenos (até 400px) */
@media screen and (max-width: 400px) {
  /* Reduz o espaço interno do container para telas muito estreitas */
  .carrossel-container {
    padding: 0.5rem;
  }

  /* Diminui a largura dos itens para melhor encaixe */
  .carrossel-item {
    min-width: 220px;
    max-width: 220px;
  }

  /* Ajusta o tamanho da legenda para caber melhor */
  .carrossel-legenda {
    font-size: 0.9rem;
  }

  /* Reduz tamanho e espaçamento dos botões de navegação */
  .seta-esquerda,
  .seta-direita {
    font-size: 1.5rem;
    padding: 0.4rem 0.8rem;
  }
}

/* Smartphones médios (até 480px) */
@media screen and (max-width: 480px) {
  /* Espaço interno um pouco maior para telas médias */
  .carrossel-container {
    padding: 0.8rem;
  }

  /* Largura intermediária dos itens */
  .carrossel-item {
    min-width: 240px;
    max-width: 240px;
  }

  /* Legenda levemente maior */
  .carrossel-legenda {
    font-size: 0.95rem;
  }
}

/* Smartphones grandes / phablets (até 600px) */
@media screen and (max-width: 600px) {
  /* Espaço interno confortável para phablets */
  .carrossel-container {
    padding: 1rem;
  }

  /* Largura padrão para boa visualização */
  .carrossel-item {
    min-width: 250px;
    max-width: 250px;
  }
}

/* Tablets pequenos (até 768px) */
@media screen and (max-width: 768px) {
  /* Espaço interno mais generoso para tablets */
  .carrossel-container {
    padding: 1.2rem;
  }

  /* Mantém largura padrão dos itens */
  .carrossel-item {
    min-width: 260px;
    max-width: 260px;
  }

  /* Legenda em tamanho editorial padrão */
  .carrossel-legenda {
    font-size: 1rem;
  }
}

/* Tablets grandes / notebooks compactos (até 992px) */
@media screen and (max-width: 992px) {
  /* Espaço interno ampliado para notebooks pequenos */
  .carrossel-container {
    padding: 1.5rem;
  }

  /* Largura maior dos itens para telas médias */
  .carrossel-item {
    min-width: 280px;
    max-width: 280px;
  }
}

/* Notebooks médios (até 1200px) */
@media screen and (max-width: 1200px) {
  /* Espaço interno editorial para notebooks padrão */
  .carrossel-container {
    padding: 1.8rem;
  }

  /* Largura ideal para imagens em destaque */
  .carrossel-item {
    min-width: 300px;
    max-width: 300px;
  }
}

/* Desktops grandes (até 1440px) */
@media screen and (max-width: 1440px) {
  /* Espaço interno generoso para monitores full HD */
  .carrossel-container {
    padding: 2rem;
  }

  /* Largura ampliada para imagens com mais detalhes */
  .carrossel-item {
    min-width: 320px;
    max-width: 320px;
  }

  /* Legenda levemente maior para melhor leitura */
  .carrossel-legenda {
    font-size: 1.05rem;
  }
}

/* Ultrawides (acima de 1920px) */
@media screen and (min-width: 1921px) {
  /* Espaço editorial amplo para telas ultra largas */
  .carrossel-container {
    padding: 2.5rem;
    max-width: 1600px; /* Limita largura para não esticar demais */
    margin: 0 auto; /* Centraliza o carrossel */
  }

  /* Largura máxima dos itens para destaque visual */
  .carrossel-item {
    min-width: 340px;
    max-width: 340px;
  }

  /* Legenda editorial ampliada */
  .carrossel-legenda {
    font-size: 1.1rem;
  }

  /* Botões maiores para navegação confortável */
  .seta-esquerda,
  .seta-direita {
    font-size: 2.2rem;
    padding: 0.6rem 1.2rem;
  }
}

/* ← CSS pai que importa todos os módulos */
/* Deus, Tu és a essência de meu coração, por isso agracia-me Contigo, Senhor. */

/* ===================== RESET E BASE ===================== */
@import url('reset_drika.css');
@import url('base_drika.css');
@import url('header_drika.css');

/* ===================== MAIN E SEÇÕES ===================== */
@import url('main_drika.css');
@import url('carrosel_drika.css');
@import url('institucional_drika.css');
@import url('cta_drika.css');
@import url('fundo_drika.css');

/* ===================== RODAPÉ ===================== */
@import url('footer_drika.css');

/* ===================== IMPRESSÃO ===================== */
@import url('../drika_prints/drika_print.css');

.pagina-frente,
.pagina-verso {
  display: none!important;
}

/* ← Rodapé e créditos finais */
/* Deus, Tu és Senhor e Rei e integrante da Equipe HopeUp 7.DEV, por isso se faça presente aqui nestes nossos estudos, por favor, Senhor. */

/* ===================== CONTAINER DO RODAPÉ ===================== */
/* Comentário: define estilo visual do rodapé institucional */

.footer-drika {
  text-align: center;                          /* Centraliza todo o conteúdo */
  padding: 30px;                               /* Espaço interno generoso */
  background-color: #3e3d3d;                   /* Fundo escuro para contraste */
  font-size: clamp(0.85rem, 1vw, 1rem);        /* Tamanho fluido para texto geral */
  color: #eceef3;                              /* Tom claro para legibilidade sobre fundo escuro */
}

/* ===================== BLOCO “Powered By” ===================== */
/* Comentário: define estilo do bloco de créditos da equipe */

.powered-by {
  display: flex;                               /* Ativa layout flexível */
  align-items: center;                         /* Alinha verticalmente os elementos */
  justify-content: center;                     /* Centraliza horizontalmente */
  gap: 12px;                                   /* Espaço entre logo e texto */
  margin-top: 12px;                            /* Espaço acima do bloco */
  flex-wrap: wrap;                             /* Permite quebra de linha em telas menores */
  color: #eceef3;                              /* Mantém tom claro */
  font-size: clamp(1rem, 1.2vw, 1.1rem);       /* Tamanho fluido para texto da equipe */
}

/* ===================== LOGO SUAVE ===================== */
/* Comentário: define estilo visual da logo HopeUp */

.logo-footer-powered {
  height: 42px;                                /* Altura padrão da logo */
  opacity: 0.6;                                /* Transparência leve para suavidade */
  transition: opacity 0.3s ease;              /* Transição suave ao passar o mouse */
  vertical-align: middle;                      /* Alinha verticalmente com o texto */
}

/* Efeito hover no logo */
.logo-footer-powered:hover {
  opacity: 1;                                  /* Torna a logo totalmente visível ao passar o mouse */
}

/* ===================== TEXTO DO PARÁGRAFO ===================== */
/* Comentário: define estilo do texto institucional do rodapé */

.footer-drika p {
  all: unset;                                  /* Remove herança de estilos globais */
  font-size: clamp(1rem, 1.2vw, 1.1rem);       /* Tamanho fluido para texto institucional */
  color: #eceef3;                              /* Mantém tom claro */
  margin-bottom: 1rem;                         /* Espaço abaixo do texto */
}

/* ===================== LOGO NO BLOCO “Powered By” ===================== */
/* Comentário: define estilo da logo dentro do bloco de créditos */

.powered-by .logo-footer-powered {
  height: 32px;                                /* Altura menor para encaixe com texto */
  width: auto;                                 /* Mantém proporção original */
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.powered-by .logo-footer-powered:hover {
  opacity: 1;
}

/* ===================== MEDIA QUERIES ===================== */
/* Comentário: ajustes finos para responsividade do rodapé */
/* ===================== MEDIA QUERIES ===================== */
/* Comentário: ajustes finos para responsividade do rodapé institucional */

/* Smartphones pequenos (até 400px) */
@media screen and (max-width: 400px) {
  .footer-drika {
    padding: 20px;           /* Reduz o espaçamento interno para telas muito estreitas */
    font-size: 0.85rem;      /* Diminui o tamanho do texto para melhor encaixe */
  }

  .powered-by {
    gap: 8px;                /* Reduz o espaço entre logo e texto */
    font-size: 0.95rem;      /* Ajusta o tamanho do texto da equipe */
  }

  .logo-footer-powered {
    height: 28px;            /* Diminui a altura da logo para melhor proporção */
  }
}

/* Smartphones médios (até 480px) */
@media screen and (max-width: 480px) {
  .footer-drika {
    padding: 22px;           /* Espaço interno levemente maior que o anterior */
  }

  .powered-by {
    font-size: 1rem;         /* Tamanho de texto padrão para smartphones médios */
  }

  .logo-footer-powered {
    height: 30px;            /* Logo um pouco maior para melhor visibilidade */
  }
}

/* Smartphones grandes / phablets (até 600px) */
@media screen and (max-width: 600px) {
  .footer-drika {
    padding: 24px;           /* Espaço interno confortável para phablets */
  }

  .powered-by {
    font-size: 1.05rem;      /* Texto levemente maior para telas maiores */
  }

  .logo-footer-powered {
    height: 32px;            /* Logo proporcional ao novo tamanho de texto */
  }
}

/* Tablets pequenos (até 768px) */
@media screen and (max-width: 768px) {
  .footer-drika {
    padding: 26px;           /* Espaço interno mais generoso para tablets */
  }

  .powered-by {
    font-size: 1.1rem;       /* Texto editorial para leitura confortável */
  }

  .logo-footer-powered {
    height: 34px;            /* Logo ajustada para acompanhar o texto */
  }
}

/* Tablets grandes / notebooks compactos (até 992px) */
@media screen and (max-width: 992px) {
  .footer-drika {
    padding: 28px;           /* Espaço interno ampliado para notebooks pequenos */
  }

  .powered-by {
    font-size: 1.1rem;       /* Mantém o tamanho editorial do texto */
  }

  .logo-footer-powered {
    height: 36px;            /* Logo proporcional ao novo layout */
  }
}

/* Notebooks médios (até 1200px) */
@media screen and (max-width: 1200px) {
  .footer-drika {
    padding: 30px;           /* Espaço interno padrão para notebooks médios */
  }

  .powered-by {
    font-size: 1.15rem;      /* Texto editorial levemente maior */
  }

  .logo-footer-powered {
    height: 38px;            /* Logo ajustada para acompanhar o texto */
  }
}

/* Desktops grandes (até 1440px) */
@media screen and (max-width: 1440px) {
  .footer-drika {
    padding: 32px;           /* Espaço interno generoso para monitores full HD */
  }

  .powered-by {
    font-size: 1.2rem;       /* Texto editorial ampliado para leitura confortável */
  }

  .logo-footer-powered {
    height: 40px;            /* Logo proporcional ao novo tamanho de texto */
  }
}

/* Ultrawides (acima de 1920px) */
@media screen and (min-width: 1921px) {
  .footer-drika {
    padding: 36px;           /* Espaço extra para telas ultra largas */
    font-size: 1.1rem;       /* Texto institucional com presença editorial */
  }

  .powered-by {
    font-size: 1.25rem;      /* Texto da equipe ampliado para destaque */
    gap: 16px;               /* Espaço maior entre logo e texto para respiro visual */
  }

  .logo-footer-powered {
    height: 44px;            /* Logo ampliada para acompanhar o destaque do texto */
  }
}

