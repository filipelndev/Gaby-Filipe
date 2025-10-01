// --- Pétalas de rosa flutuantes ---
function criarPetala() {
  const petala = document.createElement('div');
  petala.className = 'petala-flutuante';
  petala.style.left = Math.random() * 98 + 'vw';
  petala.style.fontSize = (Math.random() * 16 + 20) + 'px';
  // Cores de pétalas
  const cores = ['#ffb6c1', '#ff69b4', '#e75480', '#ff1493', '#c71585', '#f08080', '#f88379'];
  petala.style.color = cores[Math.floor(Math.random() * cores.length)];
  // Emoji de pétala/rosa
  petala.innerHTML = '🌸';
  document.body.appendChild(petala);
  setTimeout(() => {
    petala.remove();
  }, 5000);
}

// Criar pétalas a cada 900ms
setInterval(criarPetala, 900);
// --- Corações flutuantes ---
function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.className = 'coracao-flutuante';
  coracao.style.left = Math.random() * 90 + 'vw';
  coracao.style.fontSize = (Math.random() * 24 + 24) + 'px';
  coracao.style.color = ['#ff69b4', '#ffb6c1', '#c71585', '#ff1493'][Math.floor(Math.random()*4)];
  coracao.innerHTML = '💗';
  document.body.appendChild(coracao);
  setTimeout(() => {
    coracao.remove();
  }, 4000);
}

// Criar corações a cada 800ms
setInterval(criarCoracao, 800);
// --- Botão de play/pause da música ---
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btn-video');
  if (btn) {
    btn.onclick = function() {
      const video = document.getElementById('video-amor');
      if (video) {
        if (video.paused) {
          video.play().catch(() => {});
          btn.innerHTML = '⏸️ Pausar vídeo';
        } else {
          video.pause();
          btn.innerHTML = '▶️ Tocar vídeo';
        }
      }
    };
    // Atualizar botão se usuário pausar/play por outros meios
    const video = document.getElementById('video-amor');
    if (video) {
      video.addEventListener('play', () => { btn.innerHTML = '⏸️ Pausar vídeo'; });
      video.addEventListener('pause', () => { btn.innerHTML = '▶️ Tocar vídeo'; });
    }
  }
});
// --- Música de fundo: garantir autoplay após interação ---
document.addEventListener('DOMContentLoaded', function() {
  const musica = document.getElementById('musica-fundo');
  if (musica) {
    // Tentar tocar imediatamente
    musica.play().catch(() => {
      // Se não tocar, aguardar interação do usuário
      const playMusic = () => {
        musica.play();
        document.removeEventListener('click', playMusic);
        document.removeEventListener('touchstart', playMusic);
      };
      document.addEventListener('click', playMusic);
      document.addEventListener('touchstart', playMusic);
    });
  }
});

// --- Abelhinha voando ---
function criarAbelhinha() {
  const abelhinha = document.createElement('div');
  abelhinha.innerHTML = `<svg id="abelhinha" width="40" height="40" style="position: fixed; top: 100px; left: 50px; z-index: 999; pointer-events:none;">
    <text x="0" y="30" font-size="30">🐝</text>
  </svg>`;
  document.body.appendChild(abelhinha);
  const abelha = document.getElementById('abelhinha');
  let posX = Math.random() * window.innerWidth;
  let posY = Math.random() * window.innerHeight / 2;
  let sentidoX = 1;
  let sentidoY = 1;
  setInterval(() => {
    posX += sentidoX * (Math.random() * 3);
    posY += sentidoY * (Math.random() * 1.5);
    if (posX > window.innerWidth - 50 || posX < 0) sentidoX *= -1;
    if (posY > window.innerHeight - 100 || posY < 0) sentidoY *= -1;
    abelha.style.left = posX + 'px';
    abelha.style.top = posY + 'px';
  }, 40);
}

// --- Estrelas coloridas brilhando ---
function criarEstrelas() {
  const cores = ['#ffffff', '#ffd6a5', '#cdb4db', '#a2d2ff', '#fdfcdc', '#ffb3c6', '#b5ead7', '#f7d6e0'];
  const estrela = document.createElement('div');
  estrela.classList.add('estrela');
  estrela.style.top = Math.random() * window.innerHeight + 'px';
  estrela.style.left = Math.random() * window.innerWidth + 'px';
  const cor = cores[Math.floor(Math.random() * cores.length)];
  estrela.style.setProperty('--cor', cor);
  document.body.appendChild(estrela);
  setTimeout(() => estrela.remove(), 5000);
}

// Iniciar todos os efeitos visuais ao carregar
document.addEventListener('DOMContentLoaded', function() {
  criarAbelhinha();
  setInterval(criarEstrelas, 250);
  setInterval(criarFrase, 4000);
  setInterval(criarCoracoes, 500);
  setInterval(criarFlores, 600);
  setInterval(criarBolhas, 1500);
  criarFormiguinha();
});
// Função para alternar abas
function showTab(idx) {
  // Abraço virtual: sempre esconder ao trocar de aba
  let abracoVirtual = document.getElementById('abraco-virtual');
  if (abracoVirtual) abracoVirtual.style.display = 'none';
  // Botão de abraço virtual na quarta aba
  const btnAbraco = document.getElementById('btn-abraco');
  // reutiliza a variável já declarada acima
  if (btnAbraco && abracoVirtual) {
    btnAbraco.onclick = function() {
      abracoVirtual.style.display = 'block';
      abracoVirtual.style.animation = 'none';
      void abracoVirtual.offsetWidth;
      abracoVirtual.style.animation = 'abracoSurge 1s cubic-bezier(.68,-0.55,.27,1.55)';
      setTimeout(() => {
        abracoVirtual.style.display = 'none';
      }, 4000);
    };
  }
  // Efeito poético na quarta aba
  if (idx === 3) {
    const poema = `
      Quando a saudade aperta, fecho os olhos e te sinto aqui.
      <br><br>
      Você é o verso mais bonito do meu dia, a rima perfeita do meu sorriso, o abraço que acalma até o meu silêncio.
      <br><br>
      Queria te ter em cada instante, dividir cada detalhe, te mostrar o quanto você é incrível, amável, única.
      <br><br>
      Até meu jeito implicante é só amor querendo te proteger, te mimar, te ter sempre por perto.
      <br><br>
      Você é minha poesia viva, minha saudade boa, meu sonho acordado.
    `;
    const el = document.getElementById('poema-quarta');
    const assinatura = document.getElementById('assinatura-poetica');
    if (el) {
      el.innerHTML = '';
      let i = 0;
      function digitar() {
        if (i < poema.length) {
          if (poema[i] === '<') {
            // Pular tags HTML
            const close = poema.indexOf('>', i);
            el.innerHTML += poema.slice(i, close + 1);
            i = close + 1;
          } else {
            el.innerHTML += poema[i];
            i++;
          }
          setTimeout(digitar, 22);
        } else if (assinatura) {
          assinatura.style.opacity = 1;
        }
      }
      assinatura.style.opacity = 0;
      digitar();
    }
    // Corações subindo
    for (let j = 0; j < 18; j++) {
      setTimeout(() => {
        const coracao = document.createElement('div');
        coracao.innerHTML = '💗';
        coracao.style.position = 'fixed';
        coracao.style.left = (10 + Math.random() * 80) + 'vw';
        coracao.style.bottom = '-40px';
        coracao.style.fontSize = (36 + Math.random() * 32) + 'px';
        coracao.style.opacity = 0.7 + Math.random() * 0.3;
        coracao.style.transition = 'bottom 3.5s linear, opacity 3.5s';
        coracao.style.zIndex = 9999;
        document.body.appendChild(coracao);
        setTimeout(() => {
          coracao.style.bottom = '110vh';
          coracao.style.opacity = 0;
        }, 30);
        setTimeout(() => coracao.remove(), 3700);
      }, j * 180);
    }
  }
  const btns = document.querySelectorAll('.tab-btn');
  const tabs = document.querySelectorAll('.tab-content');
  btns.forEach((b, i) => b.classList.toggle('active', i === idx));
  tabs.forEach((t, i) => {
    if (i === idx) {
      t.classList.add('active');
      t.style.display = '';
    } else {
      t.classList.remove('active');
      t.style.display = 'none';
    }
  });

  // Controle de vídeo e música na quarta aba
  const video = document.getElementById('video-amor');
  const musica = document.getElementById('musica-quarta');
  if (idx === 3) {
    // Aba 4: só música
    if (video) {
      video.pause();
      video.style.display = 'none';
    }
    if (musica) {
      musica.currentTime = 0;
      musica.play().catch(() => {
        const playMusic = () => {
          musica.play();
          document.removeEventListener('click', playMusic);
          document.removeEventListener('touchstart', playMusic);
        };
        document.addEventListener('click', playMusic);
        document.addEventListener('touchstart', playMusic);
      });
    }
  } else {
    // Outras abas: só vídeo
    if (musica) musica.pause();
    if (video) {
      video.style.display = '';
      // Tentar autoplay do vídeo ao voltar para as abas 1, 2 ou 3
      video.play().catch(() => {
        const playVideo = () => {
          video.play();
          document.removeEventListener('click', playVideo);
          document.removeEventListener('touchstart', playVideo);
        };
        document.addEventListener('click', playVideo);
        document.addEventListener('touchstart', playVideo);
      });
    }
  }
}

// Sempre abrir na segunda aba
document.addEventListener('DOMContentLoaded', function() {
  showTab(1);

  // Tentar autoplay do vídeo com som ao abrir o site
  const video = document.getElementById('video-amor');
  if (video) {
    video.muted = false;
    video.play().then(() => {
      video.muted = false;
    }).catch(() => {
      // Se não tocar, aguardar interação do usuário para ativar som e play
      const playVideoWithSound = () => {
        video.muted = false;
        video.play();
        document.removeEventListener('click', playVideoWithSound);
        document.removeEventListener('touchstart', playVideoWithSound);
      };
      document.addEventListener('click', playVideoWithSound);
      document.addEventListener('touchstart', playVideoWithSound);
    });
  }
});

// Atualizar contador nas abas
document.addEventListener('DOMContentLoaded', function() {
  const casamento = new Date('2025-12-02T00:00:00');
  const hoje = new Date();
  const dias = Math.ceil((casamento - hoje) / (1000 * 60 * 60 * 24));
  if(document.getElementById('contador')) document.getElementById('contador').innerText = dias;
  if(document.getElementById('contador2')) document.getElementById('contador2').innerText = dias;
});
// 🐜 Formiguinha apaixonada
function criarFormiguinha() {
  const formiguinha = document.createElement('div');
  formiguinha.classList.add('formiguinha');
  formiguinha.innerHTML = '🐜';
  formiguinha.style.transform = 'scaleX(-1)';
  formiguinha.style.position = 'fixed';
  formiguinha.style.left = '-50px';
  formiguinha.style.top = Math.random() * window.innerHeight + 'px'; // altura aleatória
  formiguinha.style.fontSize = '1.8em';
  formiguinha.style.zIndex = '999';

  document.body.appendChild(formiguinha);

  let posFormigaX = -50;
  setInterval(() => {
    posFormigaX += 1.5;
    formiguinha.style.left = posFormigaX + 'px';

    if (posFormigaX > window.innerWidth) {
      posFormigaX = -50;
      formiguinha.style.top = Math.random() * window.innerHeight + 'px'; // nova altura ao reiniciar
    }
  }, 20);
}

// 🌠 Estrelas
function criarEstrelas() {
  const cores = ['#ffffff', '#ffd6a5', '#cdb4db', '#a2d2ff', '#fdfcdc'];
  const estrela = document.createElement('div');
  estrela.classList.add('estrela');

  // Posição aleatória
  estrela.style.top = Math.random() * window.innerHeight + 'px';
  estrela.style.left = Math.random() * window.innerWidth + 'px';

  // Cor aleatória
  const cor = cores[Math.floor(Math.random() * cores.length)];
  estrela.style.setProperty('--cor', cor);

  document.body.appendChild(estrela);

  // Remoção após tempo para efeito passageiro
  setTimeout(() => estrela.remove(), 5000);
}

// 💬 Frases flutuantes
const frases = [
  "Você é minha paz.",
  "O nosso amor é certeza.",
  "Cada sonho teu vive em mim.",
  "Vamos construir nosso lar.",
  "Nada nos separa.",
  "Maria Cecília já mora no meu coração.",
  "Nosso altar está te esperando.",
  "Te amo mais a cada dia.",
  "Você é meu presente de Deus.",
  "Com você, tudo faz sentido.",
  "Seu sorriso ilumina minha vida.",
  "Meu coração é seu lar.",
  "Amo viver ao seu lado.",
  "Você é minha melhor escolha.",
  "Meu futuro é com você.",
  "Nada é mais bonito que nosso amor."
];

function criarFrase() {
  const frase = document.createElement('div');
  frase.classList.add('frase');
  frase.textContent = frases[Math.floor(Math.random() * frases.length)];
  frase.style.top = Math.random() * window.innerHeight + 'px';
  frase.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(frase);
  setTimeout(() => frase.remove(), 6000);
}

function criarFlores() {
  const flor = document.createElement('div');
  flor.classList.add('flor');

  // Define cor aleatória
  const cores = ['vermelha', 'azul', 'verde'];
  const corEscolhida = cores[Math.floor(Math.random() * cores.length)];
  flor.classList.add(corEscolhida);

  // Escolhe o emoji
  flor.innerHTML = '🌼';
  flor.style.left = Math.random() * window.innerWidth + 'px';

  document.body.appendChild(flor);
  setTimeout(() => flor.remove(), 8000);
}

function criarBolhas() {
  const bolha = document.createElement('div');
  bolha.classList.add('bolha');

  // Tamanho aleatório
  const tamanho = `${Math.random() * 30 + 10}px`;
  bolha.style.setProperty('--tamanho', tamanho);

  // Posição horizontal aleatória
  bolha.style.left = `${Math.random() * window.innerWidth}px`;

  document.body.appendChild(bolha);

  setTimeout(() => bolha.remove(), 10000);
}

// 💗 Corações
function criarCoracoes() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.innerHTML = '💗';
  coracao.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 7000);
}

// 💖 Revela mensagem e inicia efeitos
function mostrarMensagem() {
  document.body.classList.add('revelado');
  document.getElementById('mensagem').style.display = 'block';
  document.querySelector('.carrossel').style.display = 'block';

  const abelhinha = document.createElement('div');
  abelhinha.innerHTML = `<svg id="abelhinha" width="40" height="40" style="position: fixed; top: 100px; left: 50px; z-index: 999;">
    <text x="0" y="30" font-size="30">🐝</text>
  </svg>`;
  document.body.appendChild(abelhinha);

  const abelha = document.getElementById('abelhinha');
  let posX = Math.random() * window.innerWidth;
  let posY = Math.random() * window.innerHeight / 2;
  let sentidoX = 1;
  let sentidoY = 1;
  setInterval(() => {
    posX += sentidoX * (Math.random() * 3);
    posY += sentidoY * (Math.random() * 1.5);
    if (posX > window.innerWidth - 50 || posX < 0) sentidoX *= -1;
    if (posY > window.innerHeight - 100 || posY < 0) sentidoY *= -1;
    abelha.style.left = posX + 'px';
    abelha.style.top = posY + 'px';
  }, 40);

  const musica = document.getElementById('musica');
  musica.play().catch(() => {
    console.log("Clique necessário para iniciar áudio.");
  });

  // 🌠 Inicia os efeitos
  setInterval(criarEstrelas, 250);
  setInterval(criarFrase, 4000);
  setInterval(criarCoracoes, 500);
  setInterval(criarFlores, 600);
  setInterval(criarBolhas, 1500);
  criarFormiguinha();
}

// 🖼️ Carrossel de imagens
const imagens = [
  'fotos/IMG_20250824_111959.jpg',
  'fotos/Screenshot_20250823-115541~2.png',
  'fotos/coracao.png',
  'fotos/amor.jpg', 'fotos/amor1.jpg', 'fotos/amor2.jpg', 'fotos/amor3.jpg', 'fotos/amor4.jpg', 'fotos/amor5.jpg',
  'fotos/amor6.jpg', 'fotos/amor7.jpg', 'fotos/amor8.jpg', 'fotos/amor9.jpg', 'fotos/amor10.jpg', 'fotos/amor11.jpg',
  'fotos/amor12.jpg', 'fotos/amor13.jpg', 'fotos/amor14.jpg', 'fotos/amor15.jpg'
];
let atual = 0;

setInterval(() => {
  atual = (atual + 1) % imagens.length;
  document.getElementById('slide').src = imagens[atual];
}, 3000);

// 📅 Contagem regressiva
const hoje = new Date();
const casamento = new Date('2025-12-02T00:00:00');
const dias = Math.ceil((casamento - hoje) / (1000 * 60 * 60 * 24));
document.getElementById('contador').innerText = dias;

// Frases de amor fixas
const frasesAmorFixas = [
  "Te amo com todas as cores do arco-íris!",
  "Você é minha saudade boa.",
  "Meu coração bate mais forte por você.",
  "Seu sorriso ilumina minha vida.",
  "Cada dia contigo é um presente.",
  "Nosso amor é alegria, paixão e carinho!",
  "Quero você para sempre comigo.",
  "Você é meu sonho realizado.",
  "Com você, tudo é mais bonito!",
  "Meu amor por você é infinito!"
];

function mostrarFraseAmorAleatoria() {
  const frase = document.createElement('div');
  frase.className = 'frase-amor';
  frase.innerText = frasesAmorFixas[Math.floor(Math.random() * frasesAmorFixas.length)];
  frase.style.left = Math.random() * 80 + 10 + 'vw';
  frase.style.top = Math.random() * 80 + 10 + 'vh';
  frase.style.display = 'block';
  document.body.appendChild(frase);
  setTimeout(() => frase.remove(), 3500);
}

// Iniciar a mostrar frases de amor ao carregar
document.addEventListener('DOMContentLoaded', function() {
  setInterval(mostrarFraseAmorAleatoria, 5000);
});

document.getElementById("btn-amor").addEventListener("click", () => {
  const msg = document.getElementById("mensagem-amor");
  msg.style.display = "block";
  msg.style.animation = "none";
  void msg.offsetWidth;
  msg.style.animation = "surge 0.8s ease-in-out";

  setTimeout(() => {
    msg.style.display = "none";
  }, 3500);

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      criarCoracao(); // já definida no seu JS
    }, i * 100);
  }
});