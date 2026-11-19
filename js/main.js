/**
 * Ateliê Mimos das Titias - Catálogo Interativo & Simulador de Orçamento WhatsApp
 * Desenvolvido por: Mickael Soares
 */

// =========================================================================
// CONFIGURAÇÃO CENTRAL (Altere aqui o WhatsApp quando for para produção)
// =========================================================================
const CONFIG = {
  whatsappNumber: '556593608299',
  brandName: 'Ateliê Mimos das Titias',
  instagramHandle: '@_kitminifesta.personalizados_',
  packagingExtraPrice: 3.00, // Acréscimo celofane + laço nas lembrancinhas
  storageKey: 'mimos_titias_budget_v1'
};

// =========================================================================
// CATÁLOGO COMPLETO (Fiel à tabela oficial do Ateliê)
// =========================================================================
const CATALOG_CATEGORIES = [
  {
    id: 'caixaria',
    label: 'Caixaria',
    icon: 'fa-box-open',
    scope: 'nacional',
    subtitle: 'Modelos disponíveis: Milk, Cubo, Pirâmide e Sushi',
    note: 'Todos os itens vão vazios • Personalizados no tema da sua festa',
    layout: 'tiers',
    items: [
      {
        id: 'caixaria-basico',
        name: 'Caixaria Básico',
        subtitle: 'Milk • Cubo • Pirâmide • Sushi',
        image: 'images/caixaria-basico.webp',
        price: 7.00,
        unit: 'un.',
        tier: 'basico',
        badge: 'Essencial',
        defaultQty: 10,
        features: [
          'Caixinha personalizada com nome e idade',
          'Arte exclusiva no tema da festa',
          'Sem aplique 3D',
          'Sem laço de cetim'
        ]
      },
      {
        id: 'caixaria-luxo',
        name: 'Caixaria Luxo',
        subtitle: 'Milk • Cubo • Pirâmide • Sushi',
        image: 'images/caixaria-luxo.webp',
        price: 9.00,
        unit: 'un.',
        tier: 'luxo',
        badge: 'Mais Pedido',
        featured: true,
        defaultQty: 10,
        features: [
          'Caixinha personalizada com nome e idade',
          'Arte exclusiva no tema da festa',
          '1 aplique em camadas 3D',
          'Laço de cetim coordenado'
        ]
      },
      {
        id: 'caixaria-master',
        name: 'Caixaria Master',
        subtitle: 'Milk • Cubo • Pirâmide • Sushi',
        image: 'images/caixaria-master.webp',
        price: 16.00,
        unit: 'un.',
        tier: 'master',
        badge: 'Acabamento Joia',
        defaultQty: 10,
        features: [
          'Caixinha personalizada com nome e idade',
          'Arte exclusiva no tema da festa',
          '2 apliques em camadas 3D',
          'Laço de cetim luxo',
          'Acabamento em strass e pedraria',
          'Fitas nobres especiais'
        ]
      }
    ]
  },
  {
    id: 'master',
    label: 'Personalizados Master',
    icon: 'fa-crown',
    scope: 'nacional',
    subtitle: 'Linha premium com inicial/idade, aplique 3D, laço de cetim, strass, pedraria e fitas nobres',
    note: 'Acabamento artesanal de alto padrão no tema da festa',
    layout: 'grid-4',
    items: [
      {
        id: 'master-nutella',
        name: 'Nutella Master',
        subtitle: 'Acabamento Luxo + Pedraria',
        image: 'images/master-nutella.webp',
        price: 21.00,
        unit: 'un.',
        tier: 'master',
        badge: 'Linha Master',
        defaultQty: 10,
        icon: 'fa-jar',
        features: ['Inicial/idade + aplique 3D', 'Laço de cetim, strass e fitas nobres']
      },
      {
        id: 'master-cofrinho',
        name: 'Cofrinho Master',
        subtitle: 'Acabamento Luxo + Pedraria',
        image: 'images/master-cofrinho.webp',
        price: 17.00,
        unit: 'un.',
        tier: 'master',
        badge: 'Linha Master',
        defaultQty: 10,
        icon: 'fa-piggy-bank',
        features: ['Inicial/idade + aplique 3D', 'Laço de cetim, strass e fitas nobres']
      },
      {
        id: 'master-kitkat',
        name: 'KitKat Master',
        subtitle: 'Acabamento Luxo + Pedraria',
        image: 'images/master-kitkat.webp',
        price: 15.00,
        unit: 'un.',
        tier: 'master',
        badge: 'Linha Master',
        defaultQty: 10,
        icon: 'fa-candy-cane',
        features: ['Inicial/idade + aplique 3D', 'Laço de cetim, strass e fitas nobres']
      },
      {
        id: 'master-jujuba',
        name: 'Jujuba Master',
        subtitle: 'Acabamento Luxo + Pedraria',
        image: 'images/master-jujuba.webp',
        price: 13.00,
        unit: 'un.',
        tier: 'master',
        badge: 'Linha Master',
        defaultQty: 10,
        icon: 'fa-gift',
        features: ['Inicial/idade + aplique 3D', 'Laço de cetim, strass e fitas nobres']
      }
    ]
  },
  {
    id: 'acrilicos',
    label: 'Acrílicos',
    icon: 'fa-gem',
    scope: 'nacional',
    subtitle: 'Modelos disponíveis: Tubete, Latinha, Caixa Acrílica e Garrafinha',
    note: 'Todos os itens vão vazios • Personalizados com nome e idade',
    layout: 'tiers',
    items: [
      {
        id: 'acrilico-basico',
        name: 'Acrílicos Básico',
        subtitle: 'Tubete • Latinha • Caixa Acrílica • Garrafinha',
        image: 'images/acrilico-basico.webp',
        price: 5.00,
        unit: 'un.',
        tier: 'basico',
        badge: 'Essencial',
        defaultQty: 10,
        features: [
          'Item personalizado com nome e idade',
          'Arte no tema da festa',
          'Sem aplique 3D',
          'Sem laço de cetim'
        ]
      },
      {
        id: 'acrilico-luxo',
        name: 'Acrílicos Luxo',
        subtitle: 'Tubete • Latinha • Caixa Acrílica • Garrafinha',
        image: 'images/acrilico-luxo.webp',
        price: 8.00,
        unit: 'un.',
        tier: 'luxo',
        badge: 'Mais Pedido',
        featured: true,
        defaultQty: 10,
        features: [
          'Item personalizado com nome e idade',
          'Arte no tema da festa',
          'Aplique em 3D',
          'Laço de cetim'
        ]
      },
      {
        id: 'acrilico-master',
        name: 'Acrílicos Master',
        subtitle: 'Tubete • Latinha • Caixa Acrílica • Garrafinha',
        image: 'images/acrilico-master.webp',
        price: 15.00,
        unit: 'un.',
        tier: 'master',
        badge: 'Acabamento Joia',
        defaultQty: 10,
        features: [
          'Item personalizado com nome e idade',
          'Arte no tema da festa',
          'Aplique em 3D',
          'Laço de cetim',
          'Acabamento em strass e pedraria',
          'Fitas nobres'
        ]
      }
    ]
  },
  {
    id: 'lembrancinhas',
    label: 'Lembrancinhas',
    icon: 'fa-bag-shopping',
    scope: 'nacional',
    subtitle: 'Personalizadas com nome, idade e tema da festa',
    note: 'Todos os itens vão vazios • Opcional: embalagem celofane + laço (+R$ 3,00/un.)',
    hasPackagingToggle: true,
    layout: 'grid-4',
    items: [
      {
        id: 'lemb-marmitinha',
        name: 'Marmitinha',
        subtitle: 'Personalizada no tema',
        image: 'images/lemb-marmitinha.webp',
        price: 4.99,
        unit: 'un.',
        defaultQty: 15,
        icon: 'fa-box',
        supportsPackaging: true,
        features: ['Personalizada com nome e idade', 'Item vazio']
      },
      {
        id: 'lemb-sacolinha',
        name: 'Sacolinha',
        subtitle: 'Personalizada no tema',
        image: 'images/lemb-sacolinha.webp',
        price: 7.99,
        unit: 'un.',
        defaultQty: 15,
        icon: 'fa-bag-shopping',
        supportsPackaging: true,
        features: ['Personalizada com nome e idade', 'Item vazio']
      },
      {
        id: 'lemb-maletinha',
        name: 'Maletinha Acrílica',
        subtitle: 'Personalizada no tema',
        image: 'images/lemb-maletinha.webp',
        price: 9.99,
        unit: 'un.',
        defaultQty: 15,
        icon: 'fa-briefcase',
        supportsPackaging: true,
        features: ['Personalizada com nome e idade', 'Item vazio']
      },
      {
        id: 'lemb-cofrinho',
        name: 'Cofrinho Tradicional',
        subtitle: 'Personalizado no tema',
        image: 'images/lemb-cofrinho.webp',
        price: 10.99,
        unit: 'un.',
        defaultQty: 15,
        icon: 'fa-piggy-bank',
        supportsPackaging: true,
        features: ['Personalizado com nome e idade', 'Item vazio']
      }
    ]
  },
  {
    id: 'cinema',
    label: 'Kit Cinema',
    icon: 'fa-film',
    scope: 'nacional',
    subtitle: 'Sucesso garantido entre as crianças — já vai embalado no celofane com laço e tag',
    note: 'Kit Básico vai vazio • Kit Luxo já inclui pipoca + refrigerante ou suco',
    layout: 'grid-2',
    items: [
      {
        id: 'cinema-basico',
        name: 'Kit Cinema Básico',
        subtitle: '1 Balde de Pipoca + 1 Copo Canudo (Vazios)',
        image: 'images/cinema-basico.webp',
        price: 21.99,
        unit: 'un.',
        badge: 'Itens Vazios',
        defaultQty: 10,
        features: [
          '1 balde de pipoca + 1 copo canudo',
          'Personalizado com nome, idade e tema',
          'Saco celofane transparente',
          'Laço de cetim + tag personalizada'
        ]
      },
      {
        id: 'cinema-luxo',
        name: 'Kit Cinema Luxo',
        subtitle: '1 Balde + 1 Copo + 1 Pipoca + 1 Refri/Suco',
        image: 'images/cinema-luxo.webp',
        price: 28.99,
        unit: 'un.',
        badge: 'Completo c/ Guloseimas',
        featured: true,
        defaultQty: 10,
        features: [
          '1 balde de pipoca + 1 copo canudo',
          '1 pipoca + 1 refrigerante ou suco inclusos',
          'Personalizado com nome, idade e tema',
          'Saco celofane, laço de cetim e tag personalizada'
        ]
      }
    ]
  },
  {
    id: 'centro-mesa',
    label: 'Centro de Mesa',
    icon: 'fa-star',
    scope: 'nacional',
    subtitle: 'Decoração prática e encantadora para a mesa dos convidados',
    note: 'Todos os itens vão vazios • Acompanham palito, adesivo com nome/idade e laço',
    layout: 'tiers',
    items: [
      {
        id: 'centro-cachepo',
        name: 'Centro Cachepô',
        subtitle: 'Clássico e charmoso',
        image: 'images/centro-cachepo.webp',
        price: 12.99,
        unit: 'un.',
        badge: 'Econômico',
        defaultQty: 10,
        features: [
          'Cachepô personalizado no tema',
          'Palito decorativo',
          'Adesivo com nome e idade',
          'Laço de cetim'
        ]
      },
      {
        id: 'centro-sextavada',
        name: 'Caixa Sextavada',
        subtitle: 'Destaque geométrico na mesa',
        image: 'images/centro-sextavada.webp',
        price: 16.99,
        unit: 'un.',
        badge: 'Mais Pedido',
        featured: true,
        defaultQty: 10,
        features: [
          'Caixa sextavada personalizada',
          'Palito decorativo',
          'Adesivo com nome e idade',
          'Laço de cetim'
        ]
      },
      {
        id: 'centro-baldinho',
        name: 'Centro Baldinho',
        subtitle: 'Com balde de pipoca reutilizável',
        image: 'images/centro-baldinho.webp',
        price: 20.99,
        unit: 'un.',
        badge: 'Lembrança Útil',
        defaultQty: 10,
        features: [
          'Balde de pipoca personalizado',
          'Palito decorativo',
          'Adesivo com nome e idade',
          'Laço de cetim'
        ]
      }
    ]
  },
  {
    id: 'diversao',
    label: 'Kits Diversão',
    icon: 'fa-palette',
    scope: 'nacional',
    subtitle: 'Lembrancinhas criativas com todos os itens personalizados no tema',
    note: 'Todos os itens inclusos e embalados no celofane com laço',
    layout: 'grid-2',
    items: [
      {
        id: 'diversao-pintura',
        name: 'Kit Pintura',
        subtitle: 'Criatividade na medida certa',
        image: 'images/diversao-pintura.webp',
        price: 16.99,
        unit: 'un.',
        badge: 'Itens Inclusos',
        defaultQty: 10,
        features: [
          'Livro de colorir personalizado',
          'Caixinha de giz de cera personalizada',
          'Saco celofane transparente',
          'Laço de cetim'
        ]
      },
      {
        id: 'diversao-completo',
        name: 'Kit Diversão Completo',
        subtitle: 'O favorito das crianças',
        image: 'images/diversao-completo.webp',
        price: 19.99,
        unit: 'un.',
        badge: 'Mais Completo',
        featured: true,
        defaultQty: 10,
        features: [
          'Livro de colorir + giz de cera personalizados',
          'Bolha de sabão personalizada',
          'Massinha de modelar + modelador',
          'Saco celofane + laço de cetim'
        ]
      }
    ]
  }
];

// Kits Festa na Mesa (Seção Destaque Local: VG e Cuiabá)
const MESA_KITS = {
  'kit-mesa-essencial': {
    id: 'kit-mesa-essencial',
    name: 'Kit Festa na Mesa Essencial',
    subtitle: 'VG e Cuiabá • Painel 50x50 + 4 Bandejas + 1 Boleira + 2 Displays',
    image: 'images/kit-mesa-essencial.webp',
    price: 60.00,
    unit: 'kit',
    defaultQty: 1
  },
  'kit-mesa-completo': {
    id: 'kit-mesa-completo',
    name: 'Kit Festa na Mesa Completo',
    subtitle: 'VG e Cuiabá • Painel 50x50 + Lona + 4 Bandejas + 1 Boleira + Mini Arco de Balão',
    image: 'images/kit-mesa-completo.webp',
    price: 80.00,
    unit: 'kit',
    defaultQty: 1
  }
};

// Outros Itens (Sob Orçamento)
const CUSTOM_QUOTE_ITEMS = [
  { id: 'custom-topo-bolo', name: 'Topo de Bolo Simples e 3D', icon: 'fa-cake-candles', image: 'images/outros-topo-bolo.webp' },
  { id: 'custom-toppers', name: 'Toppers para Docinhos', icon: 'fa-wand-magic-sparkles', image: 'images/outros-toppers.webp' },
  { id: 'custom-convite', name: 'Convite Virtual Interativo', icon: 'fa-mobile-screen', image: 'images/outros-convite.webp' },
  { id: 'custom-bandeirola', name: 'Bandeirola Personalizada', icon: 'fa-flag' },
  { id: 'custom-menu', name: 'Menu Personalizado', icon: 'fa-book-open' },
  { id: 'custom-arco-balao', name: 'Arco de Balão Simples e Orgânico (VG/Cuiabá)', icon: 'fa-cloud', image: 'images/outros-arco-balao.webp' },
  { id: 'custom-impressao', name: 'Impressão de Folhas', icon: 'fa-print' }
];

// =========================================================================
// ESTADO DA APLICAÇÃO
// =========================================================================
let state = {
  activeTab: 'caixaria',
  lembrancinhaWithPackaging: false,
  cart: {}, // { itemKey: { id, name, unitPrice, qty, unit, extraNote } }
  customQuotes: [] // array of item names
};

// Carregar estado salvo no localStorage
function loadState() {
  try {
    const saved = localStorage.getItem(CONFIG.storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object') {
        state.cart = parsed.cart || {};
        state.customQuotes = Array.isArray(parsed.customQuotes) ? parsed.customQuotes : [];
      }
    }
  } catch (e) {
    // Silencioso em navegação privada
  }
}

function saveState() {
  try {
    localStorage.setItem(
      CONFIG.storageKey,
      JSON.stringify({ cart: state.cart, customQuotes: state.customQuotes })
    );
  } catch (e) {
    // Silencioso
  }
}

// Utilitário de moeda BRL
function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Encontrar definição do item no catálogo
function findCatalogItem(itemId) {
  if (MESA_KITS[itemId]) return MESA_KITS[itemId];
  for (const cat of CATALOG_CATEGORIES) {
    const found = cat.items.find(i => i.id === itemId);
    if (found) return found;
  }
  return null;
}

// Chave única no carrinho (diferencia lembrancinha com/sem embalagem)
function getCartKey(itemId, withPackaging = false) {
  return withPackaging ? `${itemId}__embalado` : itemId;
}

// =========================================================================
// AÇÕES DO CARRINHO / ORÇAMENTO
// =========================================================================
function addToCart(itemId, qtyOverride = null) {
  const item = findCatalogItem(itemId);
  if (!item) return;

  const isPackaged = Boolean(item.supportsPackaging && state.lembrancinhaWithPackaging);
  const key = getCartKey(itemId, isPackaged);
  const unitPrice = isPackaged ? item.price + CONFIG.packagingExtraPrice : item.price;
  const displayName = isPackaged ? `${item.name} (c/ Celofane + Laço)` : item.name;

  if (state.cart[key]) {
    state.cart[key].qty += qtyOverride || 1;
  } else {
    state.cart[key] = {
      id: itemId,
      key,
      name: displayName,
      unitPrice,
      qty: qtyOverride || item.defaultQty || 1,
      unit: item.unit || 'un.'
    };
  }

  saveState();
  syncUI();
  showToast(`${displayName} adicionado ao orçamento!`);
}

function updateCartQty(key, newQty) {
  const parsed = parseInt(newQty, 10);
  if (isNaN(parsed) || parsed <= 0) {
    delete state.cart[key];
  } else {
    if (state.cart[key]) {
      state.cart[key].qty = Math.min(parsed, 999);
    }
  }
  saveState();
  syncUI();
}

function stepCartQty(key, delta) {
  if (!state.cart[key]) return;
  updateCartQty(key, state.cart[key].qty + delta);
}

function removeFromCart(key) {
  delete state.cart[key];
  saveState();
  syncUI();
}

function toggleCustomQuote(itemName) {
  const idx = state.customQuotes.indexOf(itemName);
  if (idx >= 0) {
    state.customQuotes.splice(idx, 1);
  } else {
    state.customQuotes.push(itemName);
    showToast(`"${itemName}" incluído em Sob Orçamento`);
  }
  saveState();
  syncUI();
}

function clearBudget() {
  state.cart = {};
  state.customQuotes = [];
  saveState();
  syncUI();
  showToast('Orçamento limpo.');
}

function getBudgetTotals() {
  let totalPrice = 0;
  let totalUnits = 0;
  let distinctCount = 0;

  Object.values(state.cart).forEach(entry => {
    totalPrice += entry.unitPrice * entry.qty;
    totalUnits += entry.qty;
    distinctCount += 1;
  });

  const customCount = state.customQuotes.length;
  return {
    totalPrice,
    totalUnits,
    distinctCount,
    customCount,
    hasAny: distinctCount > 0 || customCount > 0
  };
}

// =========================================================================
// RENDERIZAÇÃO DO CATÁLOGO INTERATIVO
// =========================================================================
function renderTabs() {
  const container = document.getElementById('catalog-tabs');
  if (!container) return;

  container.innerHTML = CATALOG_CATEGORIES.map(cat => {
    const isActive = cat.id === state.activeTab;
    return `
      <button
        type="button"
        data-tab="${cat.id}"
        class="catalog-tab ${isActive ? 'active' : 'bg-white text-atelie-ink border-atelie-sky hover:border-atelie-blue/50 hover:bg-atelie-ice'} shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold cursor-pointer"
        aria-pressed="${isActive}"
      >
        <i class="fa-solid ${cat.icon} text-xs"></i>
        <span>${cat.label}</span>
      </button>
    `;
  }).join('');

  container.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.getAttribute('data-tab');
      renderTabs();
      renderCatalogPanel();
    });
  });
}

function buildItemControlHTML(item) {
  const isPackaged = Boolean(item.supportsPackaging && state.lembrancinhaWithPackaging);
  const key = getCartKey(item.id, isPackaged);
  const entry = state.cart[key];

  if (entry) {
    return `
      <div class="mt-5 pt-4 border-t border-slate-100">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center bg-atelie-ice rounded-full p-1 border border-atelie-sky">
            <button type="button" onclick="stepCartQty('${key}', -1)" class="w-8 h-8 rounded-full bg-white text-atelie-blue hover:bg-atelie-blue hover:text-white font-bold transition flex items-center justify-center shadow-sm" aria-label="Diminuir quantidade">
              <i class="fa-solid fa-minus text-xs"></i>
            </button>
            <input
              type="number"
              min="1"
              max="999"
              value="${entry.qty}"
              onchange="updateCartQty('${key}', this.value)"
              class="w-12 text-center bg-transparent font-bold text-atelie-deep text-sm focus:outline-none"
              aria-label="Quantidade"
            />
            <button type="button" onclick="stepCartQty('${key}', 1)" class="w-8 h-8 rounded-full bg-white text-atelie-blue hover:bg-atelie-blue hover:text-white font-bold transition flex items-center justify-center shadow-sm" aria-label="Aumentar quantidade">
              <i class="fa-solid fa-plus text-xs"></i>
            </button>
          </div>
          <div class="text-right">
            <span class="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Subtotal</span>
            <span class="text-sm font-extrabold text-atelie-blue">${formatBRL(entry.unitPrice * entry.qty)}</span>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="mt-5 pt-4 border-t border-slate-100">
      <button
        type="button"
        onclick="addToCart('${item.id}')"
        class="w-full py-2.5 px-4 rounded-xl bg-atelie-blue hover:bg-atelie-deep text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
      >
        <i class="fa-solid fa-plus text-xs"></i>
        <span>Adicionar (${item.defaultQty || 10} ${item.unit})</span>
      </button>
    </div>
  `;
}

function renderCatalogPanel() {
  const panel = document.getElementById('catalog-panel');
  if (!panel) return;

  const cat = CATALOG_CATEGORIES.find(c => c.id === state.activeTab);
  if (!cat) return;

  const gridClass =
    cat.layout === 'grid-4'
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : cat.layout === 'grid-2'
        ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
        : 'grid-cols-1 md:grid-cols-3';

  const packagingToggleHTML = cat.hasPackagingToggle
    ? `
      <div class="mb-6 bg-white border border-atelie-sky rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-atelie-goldSoft text-atelie-gold flex items-center justify-center shrink-0">
            <i class="fa-solid fa-ribbon text-lg"></i>
          </div>
          <div>
            <p class="font-bold text-atelie-deep text-sm">Deseja embaladas no saco celofane + laço?</p>
            <p class="text-xs text-slate-500">Acréscimo de +R$ 3,00 por lembrancinha (atualiza os valores abaixo na hora)</p>
          </div>
        </div>
        <label class="inline-flex items-center gap-2.5 cursor-pointer select-none shrink-0">
          <input
            type="checkbox"
            id="packaging-toggle"
            class="sr-only peer"
            ${state.lembrancinhaWithPackaging ? 'checked' : ''}
          />
          <div class="w-12 h-6 bg-slate-200 rounded-full peer peer-checked:bg-atelie-blue relative transition after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-6"></div>
          <span class="text-sm font-bold ${state.lembrancinhaWithPackaging ? 'text-atelie-blue' : 'text-slate-500'}">
            ${state.lembrancinhaWithPackaging ? 'Sim (+R$ 3,00)' : 'Não (Vazias)'}
          </span>
        </label>
      </div>
    `
    : '';

  const cardsHTML = cat.items
    .map(item => {
      const isPackaged = Boolean(item.supportsPackaging && state.lembrancinhaWithPackaging);
      const displayPrice = isPackaged ? item.price + CONFIG.packagingExtraPrice : item.price;
      const key = getCartKey(item.id, isPackaged);
      const inCart = Boolean(state.cart[key]);

      const isMaster = item.tier === 'master';
      const isFeatured = Boolean(item.featured);

      const cardBorder = isMaster
        ? 'border-atelie-gold/60 bg-gradient-to-b from-atelie-goldSoft/60 to-white'
        : isFeatured
          ? 'border-atelie-blue/40 bg-white ring-1 ring-atelie-blue/10'
          : 'border-slate-200/80 bg-white';

      const badgeStyle = isMaster
        ? 'bg-atelie-gold text-white'
        : isFeatured
          ? 'bg-atelie-blue text-white'
          : 'bg-atelie-ice text-atelie-blue';

      const safeName = item.name.replace(/'/g, "\\'");
      const imageBlock = item.image
        ? `
          <div class="relative mb-4 rounded-3xl overflow-hidden bg-atelie-ice/60 aspect-square group cursor-zoom-in border border-slate-100 shadow-xs" onclick="openLightbox('${item.image}', '${safeName}', '${formatBRL(displayPrice)} / ${item.unit}')">
            <img src="${item.image}" alt="${item.name} - Ateliê Mimos das Titias" loading="lazy" class="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300" />
            <span class="absolute bottom-2.5 right-2.5 bg-black/55 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs opacity-90 group-hover:opacity-100">
              <i class="fa-solid fa-magnifying-glass-plus mr-1"></i>Ampliar
            </span>
          </div>
        `
        : '';

      return `
        <article class="product-card ${inCart ? 'in-cart' : ''} ${cardBorder} border rounded-3xl p-5 flex flex-col justify-between shadow-sm relative">
          <div>
            ${imageBlock}

            <div class="flex items-start justify-between gap-2 mb-2.5">
              ${
                item.badge
                  ? `<span class="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeStyle}">
                      ${isMaster ? '<i class="fa-solid fa-crown text-[10px]"></i>' : ''}
                      ${item.badge}
                    </span>`
                  : `<span class="w-8 h-8 rounded-xl bg-atelie-ice text-atelie-blue flex items-center justify-center">
                      <i class="fa-solid ${item.icon || 'fa-gift'} text-xs"></i>
                    </span>`
              }
              ${
                inCart
                  ? `<span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      <i class="fa-solid fa-check text-[10px]"></i> No orçamento
                    </span>`
                  : ''
              }
            </div>

            <h3 class="font-display text-2xl font-bold text-atelie-deep leading-tight">${item.name}</h3>
            <p class="text-xs text-slate-500 mt-1">${item.subtitle}</p>

            <div class="mt-4 flex items-baseline gap-1.5">
              <span class="text-3xl font-extrabold text-atelie-blue">${formatBRL(displayPrice)}</span>
              <span class="text-xs font-semibold text-slate-400">/ ${item.unit}</span>
            </div>

            <ul class="mt-4 space-y-2 text-sm text-slate-600">
              ${item.features
                .map(feat => {
                  const isNegative = feat.toLowerCase().startsWith('sem ');
                  return `
                    <li class="flex items-start gap-2">
                      <i class="fa-solid ${isNegative ? 'fa-minus text-slate-300' : isMaster ? 'fa-sparkles text-atelie-gold' : 'fa-check text-atelie-blue'} text-xs mt-1 shrink-0"></i>
                      <span class="${isNegative ? 'text-slate-400' : ''}">${feat}</span>
                    </li>
                  `;
                })
                .join('')}
            </ul>
          </div>

          ${buildItemControlHTML(item)}
        </article>
      `;
    })
    .join('');

  panel.innerHTML = `
    <div class="catalog-panel-enter">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
        <div>
          <p class="text-sm font-semibold text-atelie-deep">${cat.subtitle}</p>
          <p class="text-xs text-slate-500 mt-0.5"><i class="fa-solid fa-circle-info text-atelie-blue mr-1"></i>${cat.note}</p>
        </div>
        <span class="inline-flex items-center gap-1.5 self-start md:self-auto text-xs font-bold text-atelie-blue bg-atelie-ice border border-atelie-sky px-3 py-1.5 rounded-full">
          <i class="fa-solid fa-truck-fast"></i> Envio para todo o Brasil
        </span>
      </div>

      ${packagingToggleHTML}

      <div class="grid ${gridClass} gap-5">
        ${cardsHTML}
      </div>
    </div>
  `;

  const toggleEl = document.getElementById('packaging-toggle');
  if (toggleEl) {
    toggleEl.addEventListener('change', e => {
      state.lembrancinhaWithPackaging = e.target.checked;
      renderCatalogPanel();
    });
  }
}

// =========================================================================
// RENDERIZAÇÃO DOS KITS FESTA NA MESA & OUTROS ITENS SOB ORÇAMENTO
// =========================================================================
function syncMesaKitButtons() {
  Object.keys(MESA_KITS).forEach(kitId => {
    const container = document.getElementById(`ctrl-${kitId}`);
    if (!container) return;
    const entry = state.cart[kitId];
    const card = document.getElementById(`card-${kitId}`);

    if (card) {
      card.classList.toggle('in-cart', Boolean(entry));
    }

    if (entry) {
      container.innerHTML = `
        <div class="flex items-center justify-between gap-3 bg-atelie-ice border border-atelie-sky rounded-2xl p-2">
          <div class="flex items-center gap-2">
            <button type="button" onclick="stepCartQty('${kitId}', -1)" class="w-9 h-9 rounded-xl bg-white text-atelie-blue hover:bg-atelie-blue hover:text-white font-bold transition flex items-center justify-center shadow-sm">
              <i class="fa-solid fa-minus text-xs"></i>
            </button>
            <span class="w-8 text-center font-extrabold text-atelie-deep">${entry.qty}</span>
            <button type="button" onclick="stepCartQty('${kitId}', 1)" class="w-9 h-9 rounded-xl bg-white text-atelie-blue hover:bg-atelie-blue hover:text-white font-bold transition flex items-center justify-center shadow-sm">
              <i class="fa-solid fa-plus text-xs"></i>
            </button>
          </div>
          <span class="text-sm font-extrabold text-emerald-700 pr-2">
            <i class="fa-solid fa-check mr-1"></i>${formatBRL(entry.unitPrice * entry.qty)}
          </span>
        </div>
      `;
    } else {
      const kit = MESA_KITS[kitId];
      container.innerHTML = `
        <button
          type="button"
          onclick="addToCart('${kitId}', 1)"
          class="w-full py-3 px-5 rounded-2xl ${kitId === 'kit-mesa-completo' ? 'bg-atelie-blue hover:bg-atelie-deep text-white shadow-md' : 'bg-atelie-ice hover:bg-atelie-blue text-atelie-blue hover:text-white border border-atelie-sky'} font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <i class="fa-solid fa-plus text-xs"></i>
          <span>Adicionar ao Orçamento • ${formatBRL(kit.price)}</span>
        </button>
      `;
    }
  });
}

function renderCustomQuoteChips() {
  const container = document.getElementById('custom-quote-grid');
  if (!container) return;

  container.innerHTML = CUSTOM_QUOTE_ITEMS.map(item => {
    const selected = state.customQuotes.includes(item.name);
    const thumb = item.image
      ? `<img src="${item.image}" alt="${item.name}" loading="lazy" class="w-11 h-11 rounded-xl object-cover shrink-0 border ${selected ? 'border-white/40' : 'border-slate-200'}" />`
      : `<span class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
          selected ? 'bg-white/15 text-white' : 'bg-atelie-ice text-atelie-blue'
        }">
          <i class="fa-solid ${item.icon} text-sm"></i>
        </span>`;

    return `
      <button
        type="button"
        onclick="toggleCustomQuote('${item.name.replace(/'/g, "\\'")}')"
        class="group flex items-center justify-between gap-3 p-3.5 rounded-2xl border text-left transition cursor-pointer ${
          selected
            ? 'bg-atelie-blue text-white border-atelie-blue shadow-md'
            : 'bg-white text-atelie-ink border-slate-200 hover:border-atelie-blue/50 hover:bg-atelie-ice/50'
        }"
      >
        <div class="flex items-center gap-3 min-w-0">
          ${thumb}
          <span class="font-semibold text-sm leading-snug">${item.name}</span>
        </div>
        <span class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs ${
          selected ? 'bg-white text-atelie-blue' : 'bg-slate-100 text-slate-400 group-hover:bg-atelie-sky/50 group-hover:text-atelie-blue'
        }">
          <i class="fa-solid ${selected ? 'fa-check' : 'fa-plus'}"></i>
        </span>
      </button>
    `;
  }).join('');
}

// Lightbox para ampliar fotos dos produtos
function openLightbox(src, title, priceLabel) {
  const modal = document.getElementById('product-lightbox');
  const img = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const priceEl = document.getElementById('lightbox-price');
  if (!modal || !img) return;

  img.src = src;
  img.alt = title;
  if (titleEl) titleEl.textContent = title;
  if (priceEl) priceEl.textContent = priceLabel || '';
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('product-lightbox');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// =========================================================================
// DRAWER & BARRA FLUTUANTE DO ORÇAMENTO
// =========================================================================
function renderBudgetDrawer() {
  const listEl = document.getElementById('drawer-items-list');
  const customEl = document.getElementById('drawer-custom-list');
  const totalEl = document.getElementById('drawer-total-price');
  const emptyEl = document.getElementById('drawer-empty');
  const filledEl = document.getElementById('drawer-filled');

  const totals = getBudgetTotals();

  // Badges do header e barra inferior
  const headerBadge = document.getElementById('header-budget-badge');
  const totalCount = totals.distinctCount + totals.customCount;
  if (headerBadge) {
    headerBadge.textContent = totalCount;
    headerBadge.classList.toggle('hidden', totalCount === 0);
  }

  const stickyBar = document.getElementById('sticky-budget-bar');
  const stickyCount = document.getElementById('sticky-budget-count');
  const stickyTotal = document.getElementById('sticky-budget-total');

  if (stickyBar) {
    stickyBar.classList.toggle('visible', totals.hasAny);
  }
  if (stickyCount) {
    const parts = [];
    if (totals.distinctCount > 0) parts.push(`${totals.distinctCount} ${totals.distinctCount === 1 ? 'item' : 'itens'}`);
    if (totals.customCount > 0) parts.push(`+${totals.customCount} sob orçamento`);
    stickyCount.textContent = parts.join(' • ');
  }
  if (stickyTotal) {
    stickyTotal.textContent = totals.distinctCount > 0 ? formatBRL(totals.totalPrice) : 'Sob Orçamento';
  }

  if (!emptyEl || !filledEl) return;

  if (!totals.hasAny) {
    emptyEl.classList.remove('hidden');
    filledEl.classList.add('hidden');
    return;
  }

  emptyEl.classList.add('hidden');
  filledEl.classList.remove('hidden');

  if (listEl) {
    const entries = Object.values(state.cart);
    if (entries.length === 0) {
      listEl.innerHTML = '';
    } else {
      listEl.innerHTML = entries
        .map(entry => `
          <div class="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="font-bold text-atelie-deep text-sm truncate">${entry.name}</p>
              <p class="text-xs text-slate-500">${formatBRL(entry.unitPrice)} / ${entry.unit}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <div class="flex items-center bg-white border border-slate-200 rounded-full p-0.5">
                <button type="button" onclick="stepCartQty('${entry.key}', -1)" class="w-6 h-6 rounded-full text-slate-500 hover:bg-atelie-ice hover:text-atelie-blue flex items-center justify-center text-[11px]">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <input
                  type="number"
                  min="1"
                  max="999"
                  value="${entry.qty}"
                  onchange="updateCartQty('${entry.key}', this.value)"
                  class="w-10 text-center text-xs font-bold text-atelie-deep focus:outline-none"
                />
                <button type="button" onclick="stepCartQty('${entry.key}', 1)" class="w-6 h-6 rounded-full text-slate-500 hover:bg-atelie-ice hover:text-atelie-blue flex items-center justify-center text-[11px]">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
              <span class="text-xs font-extrabold text-atelie-blue w-16 text-right">${formatBRL(entry.unitPrice * entry.qty)}</span>
              <button type="button" onclick="removeFromCart('${entry.key}')" class="text-slate-400 hover:text-rose-500 transition p-1" aria-label="Remover item">
                <i class="fa-solid fa-trash-can text-xs"></i>
              </button>
            </div>
          </div>
        `)
        .join('');
    }
  }

  if (customEl) {
    if (state.customQuotes.length === 0) {
      customEl.innerHTML = '';
    } else {
      customEl.innerHTML = `
        <div class="mt-3 pt-3 border-t border-slate-200">
          <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Itens Sob Orçamento</p>
          <div class="flex flex-wrap gap-1.5">
            ${state.customQuotes
              .map(
                name => `
                <span class="inline-flex items-center gap-1.5 bg-atelie-goldSoft text-atelie-deep border border-atelie-gold/40 text-xs font-semibold px-2.5 py-1 rounded-full">
                  ${name}
                  <button type="button" onclick="toggleCustomQuote('${name.replace(/'/g, "\\'")}')" class="text-atelie-gold hover:text-rose-600">
                    <i class="fa-solid fa-xmark text-[10px]"></i>
                  </button>
                </span>
              `
              )
              .join('')}
          </div>
        </div>
      `;
    }
  }

  if (totalEl) {
    totalEl.textContent = totals.distinctCount > 0 ? formatBRL(totals.totalPrice) : 'A combinar';
  }
}

function openBudgetDrawer() {
  document.getElementById('drawer-backdrop')?.classList.add('open');
  document.getElementById('drawer-panel')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBudgetDrawer() {
  document.getElementById('drawer-backdrop')?.classList.remove('open');
  document.getElementById('drawer-panel')?.classList.remove('open');
  document.body.style.overflow = '';
}

// =========================================================================
// GERAÇÃO DA MENSAGEM PRONTA PARA WHATSAPP
// =========================================================================
function sendBudgetToWhatsApp() {
  const totals = getBudgetTotals();
  if (!totals.hasAny) {
    showToast('Selecione pelo menos 1 item para simular.');
    return;
  }

  const tema = document.getElementById('input-tema')?.value.trim() || '';
  const nomeIdade = document.getElementById('input-nome-idade')?.value.trim() || '';
  const cidade = document.getElementById('input-cidade')?.value.trim() || '';
  const obs = document.getElementById('input-obs')?.value.trim() || '';

  const lines = [
    `Olá, *${CONFIG.brandName}*!`,
    `Montei meu orçamento pelo site:`,
    ''
  ];

  if (tema || nomeIdade || cidade) {
    if (tema) lines.push(`- *Tema:* ${tema}`);
    if (nomeIdade) lines.push(`- *Nome/Idade:* ${nomeIdade}`);
    if (cidade) lines.push(`- *Cidade:* ${cidade}`);
    lines.push('');
  }

  const entries = Object.values(state.cart);
  if (entries.length > 0) {
    lines.push('*ITENS SELECIONADOS:*');
    entries.forEach(entry => {
      const sub = formatBRL(entry.unitPrice * entry.qty);
      lines.push(`- ${entry.qty}x ${entry.name} (${formatBRL(entry.unitPrice)}) = *${sub}*`);
    });
    lines.push('');
    lines.push(`*Total estimado:* ${formatBRL(totals.totalPrice)}`);
  }

  if (state.customQuotes.length > 0) {
    lines.push('');
    lines.push('*ITENS SOB ORÇAMENTO:*');
    state.customQuotes.forEach(name => lines.push(`- ${name}`));
  }

  if (obs) {
    lines.push('');
    lines.push(`*Observações:* ${obs}`);
  }

  lines.push('');
  lines.push('Podemos confirmar disponibilidade e prazo de produção?');

  const text = encodeURIComponent(lines.join('\n'));
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openDirectWhatsApp(customMessage) {
  const msg = encodeURIComponent(
    customMessage || `Olá, ${CONFIG.brandName}! Vim pelo site e gostaria de fazer um orçamento personalizado.`
  );
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
}

// =========================================================================
// SINCRONIZAÇÃO GERAL & UTILITÁRIOS DE UI
// =========================================================================
function syncUI() {
  renderCatalogPanel();
  syncMesaKitButtons();
  renderCustomQuoteChips();
  renderBudgetDrawer();
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

// =========================================================================
// INICIALIZAÇÃO
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderTabs();
  syncUI();

  // Menu mobile
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Accordion FAQ
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Fechar drawer ou lightbox com ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeBudgetDrawer();
      closeLightbox();
    }
  });

  // Animação fade-up no scroll
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});
