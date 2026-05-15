/* ═════════════════════
   LOAD ADMIN OVERRIDES
   ═════════════════════ */
(function () {
  var stored = localStorage.getItem('kigoMenuConfig');
  if (!stored) return;
  try {
    var c = JSON.parse(stored);
    if (c.menuData)      Object.keys(c.menuData).forEach(function(k) { menuData[k] = c.menuData[k]; });
    if (c.landingData)   Object.keys(c.landingData).forEach(function(k) { if (c.landingData[k] !== null) landingData[k] = c.landingData[k]; });
    if (c.tabs)          { tabs.length = 0; c.tabs.forEach(function(t) { tabs.push(t); }); }
    if (c.sectionTitles) Object.assign(sectionTitles, c.sectionTitles);
  } catch(e) {}
})();

/* ═════════════════════
   PAGE TRANSITIONS
   ═════════════════════ */
function showMenu(initialKey) {
  const key = initialKey || tabs[0].key;
  document.getElementById('landing').classList.replace('visible', 'hidden');
  const menuPage = document.getElementById('menu-page');
  menuPage.classList.replace('hidden', 'visible');
  menuPage.scrollTop = 0;

  // Activate correct tab, then render
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-key') === key);
  });
  renderSection(key);
}

function showLanding() {
  document.getElementById('menu-page').classList.replace('visible', 'hidden');
  document.getElementById('landing').classList.replace('hidden', 'visible');
  document.getElementById('landing').scrollTop = 0;
}

/* ═════════════════════
   TAB SWITCHING
   ═════════════════════ */
function switchTab(category, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSection(category);
  // Scroll content back to top of menu-content
  const content = document.getElementById('menu-content');
  if (content) content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ═════════════════════
   RENDER SECTIONS
   ═════════════════════ */
function tempDots(temp) {
  const hot   = `<span class="temp-dot temp-dot-hot"></span>`;
  const cold  = `<span class="temp-dot temp-dot-cold"></span>`;
  const blank = `<span class="temp-dot temp-dot-blank"></span>`;
  const h = (temp === 'hot'  || temp === 'both') ? hot  : blank;
  const c = (temp === 'iced' || temp === 'both') ? cold : blank;
  return `<div class="temp-dots">${h}${c}</div>`;
}

function renderSection(category) {
  const container = document.getElementById('menu-content');
  const items = menuData[category] || [];
  const t = sectionTitles[category] || { en: category, jp: null };
  const hasTempItems = items.some(item => item.temp !== undefined);

  let html = `<div class="menu-section active">`;

  if (t.en || t.jp) {
    html += `<div class="section-intro">
      ${t.en ? `<h3>${t.en}</h3>` : ''}
      ${t.jp ? `<p>${t.jp}</p>` : ''}
    </div>`;
  }

  items.forEach((item, i) => {
    const imgHtml = item.image
      ? `<img src="${item.image}" alt="${item.name || ''}" loading="lazy">`
      : '';
    const imgBlock   = imgHtml ? `<div class="menu-item-img-wrap">${imgHtml}</div>` : '';
    const dotsHtml   = hasTempItems ? tempDots(item.temp) : '';
    const rightBlock = (dotsHtml || imgBlock) ? `<div class="menu-item-right">${dotsHtml}${imgBlock}</div>` : '';
    const tagHtml    = item.tag ? `<span class="item-tag">${item.tag}</span>` : '';
    const nameHtml   = item.name   ? `<span class="menu-item-name">${item.name}</span>` : '';
    const nameJpHtml = item.nameJp ? `<div class="menu-item-name-jp">${item.nameJp.replace(/\n/g, '<br>')}</div>` : '';
    const descHtml   = item.desc   ? `<p class="menu-item-desc">${item.desc.replace(/\n/g, '<br>')}</p>` : '';
    const priceHtml  = item.price  ? `<div class="menu-item-price">${item.price}</div>` : '';

    html += `
      <div class="menu-item" style="animation-delay:${i * 0.07}s">
        <div class="menu-item-body">
          <div class="menu-item-top">${nameHtml}${tagHtml}</div>
          ${nameJpHtml}
          ${descHtml}
          ${priceHtml}
        </div>
        ${rightBlock}
      </div>`;
  });

  html += `<div class="ornament" style="padding:28px 0">✦ &nbsp; ✦ &nbsp; ✦</div></div>`;
  container.innerHTML = html;
}

/* ═══════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════ */
function setOrHide(id, val, useInnerHTML = false) {
  const el = document.getElementById(id);
  if (!el) return;
  if (val) {
    if (useInnerHTML) el.innerHTML = val; else el.textContent = val;
    el.style.display = '';
  } else {
    el.style.display = 'none';
  }
}

function hideEl(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

/* ═══════════════════════════════════════════
   BUILD TABS
   ═══════════════════════════════════════════ */
function buildTabs() {
  const bar = document.getElementById('tab-bar');
  bar.innerHTML = '';
  tabs.forEach((tab, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('data-key', tab.key);
    btn.textContent = tab.label;
    btn.onclick = () => switchTab(tab.key, btn);
    bar.appendChild(btn);
  });
}

/* ═══════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════ */
function initLanding() {
  const ld = landingData;

  /* ── Header ── */
  setOrHide('cafe-name', ld.cafeName);
  setOrHide('cafe-sub',  ld.cafeSub);
  if (ld.showDate) {
    const d = new Date();
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const dateStr = `${months[d.getMonth()]} ${d.getDate()}`;
    const full = ld.dateSeasonLabel ? `${dateStr} &nbsp;·&nbsp; ${ld.dateSeasonLabel}` : dateStr;
    setOrHide('landing-date-line', full, true);
  } else {
    hideEl('landing-date-line');
  }

  /* ── Hero image (overrides SVG illustration when provided) ── */
  if (ld.heroImage) {
    const heroVisual = document.getElementById('hero-visual');
    heroVisual.innerHTML = `<img class="hero-img" src="${ld.heroImage}" alt="${ld.heroTitle || '季節主視覺'}" loading="lazy">`;
  }
  setOrHide('hero-badge',    ld.heroBadge);
  setOrHide('hero-title',    ld.heroTitle);
  setOrHide('hero-subtitle', ld.heroSubtitle);

  /* ── Tagline ── */
  const taglineBlock = document.querySelector('.tagline-block');
  if (ld.tagline) {
    setOrHide('landing-tagline',    ld.tagline, true);
    setOrHide('landing-tagline-jp', ld.taglineJp);
    if (taglineBlock) taglineBlock.style.display = '';
  } else {
    if (taglineBlock) taglineBlock.style.display = 'none';
  }

  /* ── Seasonal card ── */
  const card = document.getElementById('seasonal-card');
  if (ld.cardLabel) {
    setOrHide('card-label-text', ld.cardLabel);
    setOrHide('card-name',       ld.cardName);
    setOrHide('card-name-jp',    ld.cardNameJp);
    setOrHide('card-desc',       ld.cardDesc);
    setOrHide('card-price',      ld.cardPrice);
    setOrHide('card-tag',        ld.cardTag);
    if (card) card.style.display = '';
  } else {
    if (card) card.style.display = 'none';
  }

  /* ── Banner ──
     bannerImage 有值 → 顯示圖片
     bannerImage null + bannerPlaceholder true → 顯示佔位符
     bannerImage null + bannerPlaceholder false/null → 整區塊隱藏 */
  const bannerSection = document.getElementById('banner-section');
  const bannerDisplay = document.getElementById('banner-display');
  if (ld.bannerImage) {
    setOrHide('banner-label-text', ld.bannerLabel);
    bannerDisplay.innerHTML =
      `<div class="banner-img-wrap"><img src="${ld.bannerImage}" alt="${ld.bannerAlt || '當季推薦'}"></div>`;
  } else if (ld.bannerPlaceholder) {
    setOrHide('banner-label-text', ld.bannerLabel);
    bannerDisplay.innerHTML = `
      <div class="banner-placeholder">
        <div class="banner-placeholder-icon">🌿</div>
        <div class="banner-placeholder-text">
          當季推薦海報<br>
          <span style="font-size:11px;opacity:0.7;letter-spacing:0.1em">在 bannerImage 填入圖片網址</span>
        </div>
      </div>`;
  } else {
    if (bannerSection) bannerSection.style.display = 'none';
  }

  /* ── CTA ── */
  setOrHide('cta-btn',  ld.ctaButton);
  setOrHide('cta-hint', ld.ctaHint);

  /* ── Footer ── */
  setOrHide('footer-left',  ld.footerLeft);
  setOrHide('footer-right', ld.footerRight);
  if (!ld.footerLeft && !ld.footerRight) hideEl('landing-footer');

  /* ── Menu page header ── */
  setOrHide('menu-title-text',    ld.menuTitle);
  setOrHide('menu-subtitle-text', ld.menuSubtitle);

  /* ── Menu page small logo ── */
  const logoWrap = document.getElementById('menu-logo-wrap');
  if (logoWrap && (ld.cafeName || ld.cafeSub)) {
    logoWrap.innerHTML =
      (ld.cafeName ? `<div class="cafe-logo-text" style="font-size:12px">${ld.cafeName}</div>` : '') +
      (ld.cafeSub  ? `<div class="cafe-logo-jp"   style="font-size:10px">${ld.cafeSub}</div>`  : '');
  }

  buildTabs();
}

document.addEventListener('DOMContentLoaded', initLanding);
