/* ==========================================================================
   Gislene Silva | Psicóloga Clínica - comportamento
   JS mínimo, sem dependências. Cada bloco é independente.
   ========================================================================== */
(function () {
  "use strict";

  var doc = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1. WHATSAPP: monta o link com a mensagem de cada botão.
        Número e mensagens ficam no HTML (data-wa-msg). Sem JS o link abre a conversa sem texto. */
  var WA_NUMBER = "5511951088402"; // EDITAR AQUI: WhatsApp com DDI + DDD
  document.querySelectorAll("a[data-wa-msg]").forEach(function (a) {
    a.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(a.getAttribute("data-wa-msg"));
  });

  /* 2. GOATCOUNTER: um único listener para todos os CTAs (data-gc-event).
        O link do WhatsApp funciona mesmo se o rastreio falhar (adblock). */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-gc-event]");
    if (!el) return;
    var nome = el.getAttribute("data-gc-event");
    if (window.goatcounter && window.goatcounter.count) {
      try {
        window.goatcounter.count({ path: nome, title: nome, event: true });
      } catch (err) { /* o rastreio nunca bloqueia o link */ }
    }
  });

  /* 3. MENU MOBILE */
  var menuBtn = document.getElementById("menu-btn");
  var menu = document.getElementById("menu-mobile");
  if (menuBtn && menu) {
    var fechar = function (devolverFoco) {
      menu.hidden = true;
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Abrir menu");
      if (devolverFoco) menuBtn.focus();
    };
    menuBtn.addEventListener("click", function () {
      var abrir = menu.hidden;
      menu.hidden = !abrir;
      menuBtn.setAttribute("aria-expanded", String(abrir));
      menuBtn.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) fechar(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) fechar(true);
    });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", function (q) {
      if (q.matches) fechar(false);
    });
  }

  /* 4. CABEÇALHO: linha fina aparece ao rolar (IntersectionObserver, sem listener de scroll) */
  var header = document.querySelector(".site-header");
  var sentinela = document.getElementById("sentinela-topo");
  if (header && sentinela && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      header.classList.toggle("is-stuck", !entries[0].isIntersecting);
    }).observe(sentinela);
  }

  /* 5. REVELAR AO ROLAR: o CSS esconde só se o JS rodou (sem JS tudo aparece).
        Irmãos dentro do mesmo bloco entram em cascata de 60ms (máx. 240ms).
        Com movimento reduzido o CSS troca o deslocamento por um fade curto. */
  if ("IntersectionObserver" in window) {
    doc.classList.add("js");
    var alvos = document.querySelectorAll("[data-reveal]");
    var contagem = new Map();
    alvos.forEach(function (el) {
      var pai = el.parentElement;
      var n = contagem.get(pai) || 0;
      contagem.set(pai, n + 1);
      el.style.setProperty("--d", Math.min(n * 60, 240) + "ms");
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    alvos.forEach(function (el) { io.observe(el); });
  }

  /* 6. VÍDEO DO LOGO NO HERO
        Repete como um GIF: o logo montado fica parado por alguns segundos, some suavemente e
        recomeça. Pausa sozinho fora da tela e em aba oculta. Sem vídeo (movimento reduzido,
        economia de dados, autoplay bloqueado ou lento): fica a imagem estática do logo montado. */
  var palco = document.querySelector("[data-logo-stage]");
  var video = palco && palco.querySelector("video");
  var saveData = navigator.connection && navigator.connection.saveData;
  if (video && !reduceMotion && !saveData) {
    var PAUSA_ENTRE_CICLOS = 3500; // ms com o logo montado antes de recomeçar (EDITAR AQUI)
    var FADE = 600;                // ms, igual à transição de opacidade no CSS (.logo-stage video)
    var comecou = false;
    var desistiu = false; // true = ficou a imagem estática; o vídeo não volta mais
    var emVista = true;
    var timer = null;

    var voltarParaImagem = function () {
      desistiu = true;
      palco.classList.remove("is-video", "is-fading");
      try { video.pause(); } catch (err) { /* ignora */ }
    };
    var limparTimer = function () { if (timer) { clearTimeout(timer); timer = null; } };
    var podeTocar = function () { return !desistiu && emVista && !document.hidden; };
    var jogar = function () {
      if (!podeTocar()) return;
      var p = video.play();
      // NotAllowedError = o navegador proíbe autoplay: fica a imagem. Outros erros (ex.: aba oculta) são passageiros.
      if (p && p.catch) p.catch(function (err) { if (!comecou && err && err.name === "NotAllowedError") voltarParaImagem(); });
    };
    // some, volta ao primeiro quadro (verde liso) e toca de novo
    var recomecar = function () {
      limparTimer();
      palco.classList.add("is-fading");
      timer = window.setTimeout(function () {
        video.currentTime = 0;
        palco.classList.remove("is-fading");
        jogar();
      }, FADE);
    };
    var retomar = function () {
      if (!podeTocar()) return;
      if (video.ended) recomecar(); else jogar();
    };
    var parar = function () {
      limparTimer();
      palco.classList.remove("is-fading");
      try { video.pause(); } catch (err) { /* ignora */ }
    };

    video.muted = true;
    video.addEventListener("playing", function () {
      if (desistiu) { try { video.pause(); } catch (err) { /* ignora */ } return; }
      comecou = true;
    });
    video.addEventListener("ended", function () {
      limparTimer();
      timer = window.setTimeout(function () { if (podeTocar()) recomecar(); }, PAUSA_ENTRE_CICLOS);
    });
    video.addEventListener("error", voltarParaImagem);

    // pausa fora da tela e com a aba oculta (economiza bateria e atenção)
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        emVista = entries[0].isIntersecting;
        if (emVista) retomar(); else parar();
      }, { threshold: 0.25 }).observe(palco);
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) parar(); else retomar();
    });

    palco.classList.add("is-video");
    jogar();
    // Se o vídeo demorar a começar (rede lenta), mostra o logo estático em vez de um quadro vazio
    window.setTimeout(function () { if (!comecou) voltarParaImagem(); }, 3000);
  }
})();
