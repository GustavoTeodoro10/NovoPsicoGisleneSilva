---
name: Gislene Silva | Psicóloga Clínica
description: Verde-oliva da marca, creme e um único dourado; serifa de títulos que ecoa o logo; calma como regra.
colors:
  olive-ground: "#354323"
  olive-band: "#2b371c"
  olive-deep: "#212b15"
  olive-raised: "#3f512c"
  cream: "#f4efe3"
  sage-cream: "#cfd2b8"
  gold: "#ceb16d"
  gold-hover: "#dcc283"
  gold-ink: "#1e2812"
typography:
  display:
    fontFamily: "Gilda Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.2vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Gilda Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "Gilda Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.2vw, 1.85rem)"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.12em"
rounded:
  surface: "14px"
  pill: "999px"
spacing:
  section: "clamp(4.5rem, 9vw, 8rem)"
  gutter: "20px"
  gutter-lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.gold-ink}"
    rounded: "{rounded.pill}"
    padding: "12.8px 25.6px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "12.8px 25.6px"
  review-panel:
    backgroundColor: "{colors.olive-band}"
    textColor: "{colors.cream}"
    rounded: "{rounded.surface}"
    padding: "24px"
---

# Design System: Gislene Silva | Psicóloga Clínica

## Overview

**Creative North Star: "A borboleta que pousa"**

Uma página que se monta com calma diante de alguém hesitante. O verde-oliva é o chão, o creme é a voz e o dourado é o único gesto: aparece onde a pessoa deve agir ou olhar. Nada compete com o logo se formando no topo, que é o único momento autoral da página; o resto é leitura tranquila, com muito espaço.

O sistema nasce da identidade real da cliente (logo dourado sobre verde, feed em verde, creme e dourado, títulos em serifa) e a traduz para a web sem enfeite. A serifa de títulos ecoa as letras espaçadas de "Psicóloga clínica" do logo; o corpo em sans mantém a leitura confortável no celular.

**Key Characteristics:**
- Tema único verde escuro, sem faixas invertidas; faixas alternadas só variam o tom do verde.
- Um acento (dourado), usado em CTAs, estrelas, ênfase de uma palavra e detalhes de rótulo.
- Serifa só em títulos; corpo sempre em sans.
- Superfícies suaves (14px) e botões em pílula.
- Movimento: o vídeo do logo em loop com pausa de 3,5 s entre ciclos, e uma revelação discreta ao rolar. Com movimento reduzido, sem vídeo e só fades curtos.

## Colors

Verdes de oliva profundos com creme esverdeado e um dourado de bronze claro, tirados do logo e do feed da cliente.

### Primary
- **Dourado do Logo** (#ceb16d): o único acento. Botões principais, estrelas, a palavra enfatizada do H1, links de seta e o rótulo do cargo no cabeçalho. Texto escuro sobre ele (#1e2812) para contraste de cerca de 7:1.
- **Dourado Claro** (#dcc283): estado hover do botão principal.

### Neutral
- **Verde-Oliva do Vídeo** (#354323): chão da página e do hero; é exatamente o fundo do vídeo do logo, o que o faz fundir sem moldura.
- **Verde de Faixa** (#2b371c): seções alternadas (Atendimento, Como começar, Local) e painéis de avaliação dentro da faixa clara.
- **Verde Profundo** (#212b15): rodapé.
- **Verde Elevado** (#3f512c): placeholder de imagens e mapa antes de carregar.
- **Creme** (#f4efe3): texto principal e títulos.
- **Creme Esverdeado** (#cfd2b8): texto secundário, sempre no tom do verde, nunca cinza (cerca de 6,7:1 sobre o verde).

### Named Rules
**The One Gold Rule.** O dourado é o único acento da página; nenhuma outra cor chromática entra, nem em status ou rodapé.
**The Same Green Rule.** O chão do hero é exatamente o verde do vídeo (#354323). Mudar um sem o outro faz a moldura do vídeo aparecer.

## Typography

**Display Font:** Gilda Display (com Iowan Old Style, Georgia)
**Body Font:** Figtree (com system-ui)

**Character:** Serifa clara e de baixo contraste, elegante sem ser antiga, ecoando o logo; um sans humanista e aberto para ler no celular.

### Hierarchy
- **Display** (400, clamp(2.6rem, 5.2vw, 4.5rem), 1.04): H1 do hero, até 2 linhas; uma palavra pode ir em dourado.
- **Headline** (400, clamp(2rem, 3.6vw, 3rem), 1.1): títulos de seção.
- **Title** (400, clamp(1.5rem, 2.2vw, 1.85rem), 1.3): ofertas, subtítulos.
- **Body** (400, 1.0625rem, 1.65): texto corrido, máximo 62ch. Lead em 1.1875rem na cor secundária.
- **Label** (500, 0.8125rem, 0.12em, maiúsculas): apenas rótulos de lista de fatos (Registro, Abordagem) e o cargo sob o nome no cabeçalho (0.6875rem).
- **Lead** (400, 1.1875rem, 1.65, creme esverdeado): frase de abertura abaixo de títulos.
- **Small / Caption** (400, 0.9375rem e 0.875rem): notas, horários, fonte das avaliações, rodapé.
- **Path Title** (400, clamp(2rem, 3.4vw, 2.75rem), 1.12): títulos dos dois caminhos de atendimento. **Themes line** e citação de destaque: serifa em clamp(1.4rem, 2.4vw, 1.875rem) e clamp(1.6rem, 2.8vw, 2.25rem).

### Named Rules
**The Serif Only Titles Rule.** Serifa só em títulos e em itens de lista em destaque; nunca em parágrafos, botões ou rótulos.

## Layout

Uma coluna de leitura em contêiner de 1280px (`max-w-7xl`), gutters de 20px no celular e 32px no desktop. Grades assimétricas de 12 colunas (5/7, 5/6 com deslocamento) alternam entre seções; nenhuma fileira de três cartões iguais. Ritmo vertical de seção em `clamp(4.5rem, 9vw, 8rem)`, com mais espaço acima do título do que abaixo. No mobile tudo vira uma coluna, com o vídeo do logo acima do texto do hero.

## Elevation & Depth

Plano por padrão: a profundidade vem de tons de verde (chão, faixa, profundo), não de sombras. A única sombra é a do botão flutuante de WhatsApp.

### Shadow Vocabulary
- **Botão flutuante** (`box-shadow: 0 10px 28px rgba(18, 24, 10, 0.55)`): separa o botão do conteúdo ao rolar no celular.

### Named Rules
**The Tonal Depth Rule.** Hierarquia se faz com o tom do verde e com linhas finas douradas (1px, 30% de opacidade), nunca com sombras decorativas.

## Motion

Uma curva só para entradas e feedback: `cubic-bezier(0.23, 1, 0.32, 1)`. Feedback de toque em 160ms, cores em 150ms, sublinhado do menu em 250ms, entrada do menu em 200ms. Revelar ao rolar: 16px e 600ms, irmãos em cascata de 60ms (máximo 240ms), fotos por clip-path em 800ms com a imagem assentando de 1.05 para 1. Hero: texto em cascata de 60ms, 700ms. O botão flutuante entra uma vez, 1,2s depois da carga. Hover só em dispositivos com mouse; só `transform` e `opacity` (e clip-path nas fotos).

**The Quiet Frequency Rule.** Nada que o visitante veja várias vezes (links, menu, rolagem) ganha animação além de cor e um deslocamento curto; o momento autoral é o logo.

## Shapes

Duas regras: botões e controles circulares são pílulas (999px); imagens, painéis e mapa têm 14px. O anel de foco usa 4px de raio. Linhas divisórias são hairlines douradas de 1px. A borda do vídeo e do logo no rodapé é suavizada por máscara radial para se fundir ao verde.

## Components

### Buttons
- **Shape:** pílula (999px), altura mínima 48px.
- **Primary:** fundo dourado (#ceb16d), texto verde muito escuro (#1e2812), padding 0.8rem 1.6rem, ícone de WhatsApp à esquerda. Rótulo único: "Agendar pelo WhatsApp".
- **Hover / Focus:** só com mouse: sobe 2px, clareia para #dcc283 e o ícone do WhatsApp inclina 8 graus; foco com anel creme de 2px. Pressionar: escala 0.97 em 160ms (vale para botões, menu, redes e botão flutuante).
- **Outline:** contorno dourado a 30%, texto creme; no hover contorno e texto ficam dourados. Usado para escolher o formato (sessão ou plano).

### Cards / Containers
- **Review panel:** fundo de faixa (#2b371c), 14px, padding 1.5rem, estrelas douradas, nome em peso 600 e fonte em creme esverdeado. A avaliação de destaque não usa painel, só tipografia grande.

### Navigation
- **Style:** cabeçalho colado de 64px (72px no desktop), links em Figtree 500 na cor secundária com sublinhado dourado que cresce no hover; linha fina aparece ao rolar. Mobile: botão circular abre painel de links em serifa grande, fecha com Esc.

### Logo Stage (componente de assinatura)
Palco quadrado com o vídeo do logo (WebM e MP4, 720px, sem som), borda esmaecida por máscara radial (82%). Em loop: monta, fica parado 3,5 s com o logo pronto, some em 0,6 s e recomeça. Pausa fora da tela e em aba oculta. Sem JS, com movimento reduzido ou economia de dados, vira a imagem estática do logo original sobre o verde.

## Do's and Don'ts

### Do:
- **Do** usar #354323 como chão do hero para que o vídeo do logo se funda sem moldura.
- **Do** manter um único rótulo de CTA ("Agendar pelo WhatsApp") e um evento `data-gc-event` único por seção.
- **Do** manter o tom do texto secundário no verde (#cfd2b8), nunca em cinza.
- **Do** respeitar `prefers-reduced-motion` e economia de dados: sem vídeo, sem revelação.

### Don't:
- **Don't** adicionar uma segunda cor de acento, nem para status ou ícones.
- **Don't** usar rótulos acima de títulos de seção, numeração de seção ou fileiras de cartões iguais.
- **Don't** redesenhar, recolorir ou vetorizar o logo; use apenas o arquivo original da cliente.
- **Don't** usar sombras decorativas, brilho dourado ou texto em degradê.
- **Don't** inventar preços, durações, formas de pagamento ou detalhes dos planos.
