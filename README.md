# Gislene Silva | Psicóloga Clínica (Mauá, SP)

Site one-page em HTML, CSS e JS puro, com Tailwind CSS via CDN. Sem build, backend ou CMS.
Objetivo: transmitir confiança e levar o visitante a uma conversa no WhatsApp.

## Estrutura

```
.
├── index.html              # página única (blocos comentados e editáveis)
├── assets/
│   ├── css/style.css       # tokens de cor, componentes e movimento
│   ├── js/main.js          # WhatsApp, GoatCounter, menu, revelação ao rolar, vídeo do logo
│   ├── img/                # fotos, logo original (webp com transparência), favicons, imagem de compartilhamento
│   └── video/              # vídeo do logo (WebM + MP4, 720 px, sem áudio)
├── _fontes/                # originais (vídeos completos, fotos coletadas). NÃO vai para o deploy
├── PRODUCT.md, DESIGN.md   # documentação de produto e de design (opcional no deploy)
└── .gitignore
```

## Rodar localmente

Não há instalação. Abra com um servidor estático (o vídeo e as fontes funcionam melhor assim):

```bash
python -m http.server 5173
```

Depois acesse http://localhost:5173.

## Deploy gratuito

Escolha uma opção. Em todas, publique a raiz do projeto (sem etapa de build).

- **GitHub Pages:** suba o repositório, vá em *Settings > Pages*, escolha a branch `main` e a pasta `/ (root)`.
- **Netlify:** *Add new site > Import from Git* (ou arraste a pasta). Build command vazio, publish directory `.`.
- **Cloudflare Pages:** *Create project > Connect to Git*. Framework preset *None*, build command vazio, output directory `/`.

### Domínio próprio
1. Compre o domínio (ex.: registro.br).
2. No provedor escolhido, adicione o domínio em *Custom domain* e siga os registros DNS que ele mostrar (CNAME para `www`, A/ALIAS para o domínio raiz).
3. Ative HTTPS (automático nos três).
4. **Depois do deploy**, ajuste duas coisas no `index.html`: troque `og:image` por uma URL absoluta (ex.: `https://SEU-DOMINIO/assets/img/og-image.jpg`) e adicione `"url"` no JSON-LD.
5. Cadastre o domínio no GoatCounter (veja abaixo) e atualize o link do site no perfil do Google Meu Negócio, que hoje aponta para o site antigo (`psigislene.netlify.app`).

## Como editar (tudo está comentado no código)

| O que | Onde |
|---|---|
| Número do WhatsApp | `assets/js/main.js` (`WA_NUMBER`) e o `href` base `wa.me/...` dos botões no `index.html` |
| Mensagem pré-programada de cada botão | atributo `data-wa-msg` do botão no `index.html` |
| Textos | `index.html`, cada seção tem comentário de bloco. A seção Atendimento tem de propósito cerca de 45 palavras: se adicionar texto, retire outro |
| Cores e fontes | `:root` no início de `assets/css/style.css` |
| Avaliações do Google | seção `#avaliacoes` no `index.html` (texto copiado do perfil em 06/10/2026) |
| Horários e endereço | seção `#local`, rodapé e o JSON-LD no `<head>` |
| Logo, fotos | `assets/img/` (veja pendências abaixo) |

O botão flutuante do WhatsApp aparece só no celular e tablet (até 1024 px).

## GoatCounter (estatísticas sem cookies)

- **Onde está o script:** no `<head>` do `index.html`, sem alterações além do endereço:
  `<script data-goatcounter="https://teocode.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>`
- **Como funcionam os eventos:** um único listener em `assets/js/main.js` chama `window.goatcounter.count({ path, title, event: true })` quando qualquer elemento com `data-gc-event` é clicado. Se o rastreio falhar (adblock), o link do WhatsApp abre normalmente.
- **Eventos de clique (um por seção):**
  `cta-menu`, `cta-hero`, `cta-casal`, `cta-individual`, `cta-avaliacoes`, `cta-contato`, `cta-footer`, `cta-flutuante`.
- **Como ver:** no painel do GoatCounter, *Dashboard > Events*.
- **Lembrete importante:** o domínio onde o site for publicado precisa estar cadastrado no painel do GoatCounter (*Settings > Sites*), senão as visitas não são contadas.

## Vídeo do logo no hero

- Toca em loop, como um GIF, mas com cuidado: monta o logo, **mantém o logo parado por 3,5 s**, some suavemente (0,6 s) e recomeça (ajuste `PAUSA_ENTRE_CICLOS` em `assets/js/main.js`). Começa em 0,6 s do original para não mostrar o "pisca" do primeiro quadro.
- Pausa sozinho quando sai da tela ou a aba fica oculta. Não há botão de pausar (decisão do projeto).
- Se o visitante usa movimento reduzido ou economia de dados, ou se o autoplay for bloqueado, aparece `assets/img/logo-hero-final.webp` (o logo original montado sobre o verde).
- O chão do hero é `#354323`, exatamente o verde do vídeo. Se mudar um, mude o outro.

## Pendências que dependem da cliente

1. **Logo em SVG** (opcional). O site usa o PNG original com transparência (`_fontes/logo/logo-gislene-silva.png`, 2460 px), convertido para `assets/img/logo-gislene-silva.webp`. Um SVG deixaria o logo nítido em qualquer tamanho.
2. **Autorizar a exibição das avaliações** (publicidade em psicologia é regulada pelo CFP; a decisão é dela).
3. **Palestras e workshops:** saíram do site por falta de descrição (só aparece o título no Google). Voltam se ela confirmar. A cliente informou que **não** trabalha com sessão avulsa nem planos de 90 e 180 dias, então a seção "Escolha como começar" foi removida. O site não mostra valores, duração nem forma de pagamento.
3b. **Terapia de casal** é o carro-chefe e tem o bloco maior. Falta confirmar com ela: se é presencial, online ou os dois, se os dois parceiros vêm juntos e como é o primeiro passo. Enquanto isso, o texto só diz o que as fontes dela sustentam.
4. **E-mail:** o site usa `psigislenesilva@outlook.com`, tirado do cartão digital dela (`_fontes/logo/cartao-gislene.pdf`). Confirmar que é o e-mail para exibir.
5. **Fotos em alta resolução** (retrato e consultório). Hoje: retrato 960 px e consultório 900x1200 px, do perfil do Google.
6. **Atualizar a nota e o número de avaliações** (5,0 e 104 em 06/10/2026) se mudarem.
