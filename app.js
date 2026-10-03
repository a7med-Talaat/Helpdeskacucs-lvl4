/* ═══════════════════════════════════════════════════════
   ACU HELP DESK  ·  App Logic  v2  |  app.js
   ═══════════════════════════════════════════════════════ */

(() => {

  // ── Clean URL: display 'index' instead of 'index.html' ───
  try {
    if (window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('index.html')) {
      const cleanPath = window.location.pathname.replace(/index\.html$/, 'index');
      window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
    }
  } catch (e) {
    // Ignore in local environments with file:// restrictions
  }

  // ── Spec config ───────────────────────────────────────
  const SPECS = {
    ai: {
      label: 'Artificial Intelligence', shortTag: 'AI',
      barClass: 'bar-ai', iconClass: 'icon-ai', tagClass: 'tag-ai', badgeClass: 'badge-ai',
      headerGrad: 'linear-gradient(135deg,#3b0764,#7c3aed)',
      gridId: 'ai-grid', countId: 'ai-count',
      navCountId: 'nav-ai-count', sqcCountId: 'sqc-ai-count',
      icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="18" cy="6" r="3"/></svg>`
    },
    software: {
      label: 'Software Engineering', shortTag: 'Software',
      barClass: 'bar-sw', iconClass: 'icon-sw', tagClass: 'tag-sw', badgeClass: 'badge-sw',
      headerGrad: 'linear-gradient(135deg,#022c22,#059669)',
      gridId: 'sw-grid', countId: 'sw-count',
      navCountId: 'nav-sw-count', sqcCountId: 'sqc-sw-count',
      icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
    },
    cs: {
      label: 'Computer Science', shortTag: 'CS',
      barClass: 'bar-cs', iconClass: 'icon-cs', tagClass: 'tag-cs', badgeClass: 'badge-cs',
      headerGrad: 'linear-gradient(135deg,#0f2155,#1d4ed8)',
      gridId: 'cs-grid', countId: 'cs-count',
      navCountId: 'nav-cs-count', sqcCountId: 'sqc-cs-count',
      icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
    },
    network: {
      label: 'Network Engineering', shortTag: 'Network',
      barClass: 'bar-net', iconClass: 'icon-net', tagClass: 'tag-net', badgeClass: 'badge-net',
      headerGrad: 'linear-gradient(135deg,#451a03,#d97706)',
      gridId: 'net-grid', countId: 'net-count',
      navCountId: 'nav-net-count', sqcCountId: 'sqc-net-count',
      icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
    }
  };

  // ── DOM refs ──────────────────────────────────────────
  const searchInput   = document.getElementById('searchInput');
  const navItems      = document.querySelectorAll('.nav-item');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerClose   = document.getElementById('drawer-close');
  const drawerBadge   = document.getElementById('drawer-badge');
  const drawerTitle   = document.getElementById('drawer-title');
  const drawerDesc    = document.getElementById('drawer-desc');
  const drawerTags    = document.getElementById('drawer-tags');
  const drawerLink    = document.getElementById('drawer-drive-link');
  const drawerHeader  = document.getElementById('drawer-header');
  const bannerTitle   = document.getElementById('banner-title');
  const bannerSub     = document.getElementById('banner-sub');
  const bannerEyebrow = document.getElementById('banner-eyebrow');
  const statCourses   = document.getElementById('stat-courses');
  const menuToggle    = document.getElementById('menuToggle');
  const sidebar       = document.getElementById('sidebar');
  const backdrop      = document.getElementById('sidebarBackdrop');
  const viewHome      = document.getElementById('view-home');
  const viewCourses   = document.getElementById('view-courses');
  const viewProject1  = document.getElementById('view-project1');
  const viewMemorial  = document.getElementById('view-memorial');
  const viewEnglish   = document.getElementById('view-english');
  const homeMemorialBanner = document.getElementById('homeMemorialBanner');
  const searchNotice  = document.getElementById('search-notice');
  const searchQuery   = document.getElementById('search-query');
  const clearSearch   = document.getElementById('clear-search');

  // ── Theme toggle ──────────────────────────────────────
  const themeToggle = document.getElementById('themeToggle');
  const root        = document.documentElement;

  // Load saved theme (default: light)
  const savedTheme = localStorage.getItem('hd-theme') || 'light';
  root.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('hd-theme', next);
  });

  // ── Build all cards ───────────────────────────────────
  let totalCount = 0;

  function buildCards() {
    for (const [key, cfg] of Object.entries(SPECS)) {
      const list   = subjects[key] || [];
      const grid   = document.getElementById(cfg.gridId);
      const badge  = document.getElementById(cfg.countId);
      const navC   = document.getElementById(cfg.navCountId);
      const sqcC   = document.getElementById(cfg.sqcCountId);

      if (badge) badge.textContent = list.length;
      if (navC)  navC.textContent  = list.length;
      if (sqcC)  sqcC.textContent  = list.length + ' courses';
      totalCount += list.length;

      list.forEach(subj => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.dataset.spec   = key;
        card.dataset.search = (subj.name + ' ' + subj.desc + ' ' + subj.tags.join(' ')).toLowerCase();

        card.innerHTML = `
          <div class="card-bar ${cfg.barClass}"></div>
          <div class="card-body">
            <div class="card-header-row">
              <div class="card-icon-wrap ${cfg.iconClass}">${cfg.icon}</div>
              <span class="card-spec-tag ${cfg.tagClass}">${cfg.shortTag}</span>
            </div>
            <div class="card-name">${subj.name}</div>
            <div class="card-desc">${subj.desc}</div>
            <div class="card-footer">
              <div class="card-footer-left">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Course Materials
              </div>
              <div class="card-arrow">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
            </div>
          </div>`;

        card.addEventListener('click', () => openDrawer(subj, cfg));
        grid.appendChild(card);
      });
    }
  }

  // ── View switching ────────────────────────────────────
  let currentView = 'home';  // 'home' | spec key

  function showHome() {
    currentView = 'home';
    viewHome.classList.add('active');
    viewCourses.classList.remove('active');
    viewProject1.classList.remove('active');
    if (viewMemorial) viewMemorial.classList.remove('active');
    if (viewEnglish)  viewEnglish.classList.remove('active');
    setActiveNav('home');
    searchInput.value = '';
    hideSearchNotice();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.innerWidth <= 900) closeSidebar();
  }

  function showProject1() {
    currentView = 'project1';
    viewHome.classList.remove('active');
    viewCourses.classList.remove('active');
    viewProject1.classList.add('active');
    if (viewMemorial) viewMemorial.classList.remove('active');
    if (viewEnglish)  viewEnglish.classList.remove('active');
    setActiveNav('project1');
    searchInput.value = '';
    hideSearchNotice();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.innerWidth <= 900) closeSidebar();
  }

  function showMemorial() {
    currentView = 'memorial';
    viewHome.classList.remove('active');
    viewCourses.classList.remove('active');
    viewProject1.classList.remove('active');
    if (viewMemorial) viewMemorial.classList.add('active');
    if (viewEnglish)  viewEnglish.classList.remove('active');
    setActiveNav('memorial');
    searchInput.value = '';
    hideSearchNotice();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.innerWidth <= 900) closeSidebar();
  }

  function showEnglish() {
    currentView = 'english';
    viewHome.classList.remove('active');
    viewCourses.classList.remove('active');
    viewProject1.classList.remove('active');
    if (viewMemorial) viewMemorial.classList.remove('active');
    if (viewEnglish)  viewEnglish.classList.add('active');
    setActiveNav('english');
    searchInput.value = '';
    hideSearchNotice();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.innerWidth <= 900) closeSidebar();
  }

  // ── Build Project 1 page ──────────────────────────────
  function buildProject1() {
    // Project 1 static instructions & link are rendered directly in index.html
  }

  function showSpec(spec) {
    currentView = spec;
    viewHome.classList.remove('active');
    viewProject1.classList.remove('active');
    if (viewMemorial) viewMemorial.classList.remove('active');
    if (viewEnglish)  viewEnglish.classList.remove('active');
    viewCourses.classList.add('active');
    setActiveNav(spec);

    // Show only the matching section, hide others
    document.querySelectorAll('.course-section').forEach(sec => {
      sec.classList.toggle('hidden', sec.dataset.spec !== spec);
    });

    // Update banner
    const cfg = SPECS[spec];
    bannerEyebrow.textContent = 'Specialization';
    bannerTitle.textContent   = cfg.label;
    bannerSub.textContent     = 'Browse all courses in ' + cfg.label + '. Click a course to access its materials.';
    statCourses.textContent   = (subjects[spec] || []).length;

    searchInput.value = '';
    hideSearchNotice();
    showAllCards();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.innerWidth <= 900) closeSidebar();
  }

  function setActiveNav(viewKey) {
    navItems.forEach(btn => btn.classList.toggle('active', btn.dataset.view === viewKey));
  }

  // Nav clicks
  navItems.forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.view;
      if (v === 'home')          showHome();
      else if (v === 'project1') showProject1();
      else if (v === 'memorial') showMemorial();
      else if (v === 'english')  showEnglish();
      else showSpec(v);
    });
  });

  if (homeMemorialBanner) {
    homeMemorialBanner.addEventListener('click', showMemorial);
  }

  // Quick spec cards on home page
  document.querySelectorAll('.spec-quick-card').forEach(btn => {
    btn.addEventListener('click', () => showSpec(btn.dataset.view));
  });

  // ── Drawer ────────────────────────────────────────────
  function openDrawer(subj, cfg) {
    drawerHeader.style.background = cfg.headerGrad;
    drawerBadge.textContent  = cfg.label;
    drawerBadge.style.cssText = 'background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;padding:4px 11px;border-radius:20px;display:inline-flex;';
    drawerTitle.textContent  = subj.name;
    drawerDesc.textContent   = subj.desc;
    drawerLink.href          = subj.drive;

    drawerTags.innerHTML = subj.tags.map(t => `
      <span class="drawer-tag">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
        ${t}
      </span>`).join('');

    drawerOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawerOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', e => { if (e.target === drawerOverlay) closeDrawer(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  // ── Search ────────────────────────────────────────────
  function showAllCards() {
    document.querySelectorAll('.course-card').forEach(c => c.style.display = '');
    document.querySelectorAll('.no-results').forEach(el => el.remove());
  }

  function hideSearchNotice() {
    if (searchNotice) searchNotice.classList.add('hidden');
  }

  function refreshNoResults() {
    document.querySelectorAll('.course-section:not(.hidden)').forEach(sec => {
      const grid = sec.querySelector('.cards-grid');
      const visible = [...grid.querySelectorAll('.course-card')].filter(c => c.style.display !== 'none');
      const existing = grid.querySelector('.no-results');
      if (visible.length === 0 && !existing) {
        const el = document.createElement('div');
        el.className = 'no-results';
        el.textContent = 'No courses match your search.';
        grid.appendChild(el);
      } else if (visible.length > 0 && existing) {
        existing.remove();
      }
    });
  }

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();

    if (q.length === 0) {
      hideSearchNotice();
      if (currentView === 'home') {
        showHome();
      } else if (currentView === 'project1') {
        showProject1();
      } else if (currentView === 'memorial') {
        showMemorial();
      } else if (currentView === 'english') {
        showEnglish();
      } else {
        showAllCards();
        showSpec(currentView);
      }
      return;
    }

    // Switch to courses view, show all sections
    viewHome.classList.remove('active');
    viewProject1.classList.remove('active');
    if (viewMemorial) viewMemorial.classList.remove('active');
    if (viewEnglish)  viewEnglish.classList.remove('active');
    viewCourses.classList.add('active');
    document.querySelectorAll('.course-section').forEach(s => s.classList.remove('hidden'));
    setActiveNav('');

    // Update banner
    bannerEyebrow.textContent = 'Search Results';
    bannerTitle.textContent   = 'Courses';
    bannerSub.textContent     = 'Showing results across all specializations.';

    // Filter cards
    document.querySelectorAll('.course-card').forEach(card => {
      card.style.display = card.dataset.search.includes(q) ? '' : 'none';
    });
    document.querySelectorAll('.no-results').forEach(el => el.remove());
    refreshNoResults();

    // Show notice
    if (searchQuery)  searchQuery.textContent = q;
    if (searchNotice) searchNotice.classList.remove('hidden');

    // Count visible
    const visCount = [...document.querySelectorAll('.course-card')].filter(c => c.style.display !== 'none').length;
    statCourses.textContent = visCount;
  });

  if (clearSearch) {
    clearSearch.addEventListener('click', () => {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
    });
  }

  // ── Keyboard shortcut ─────────────────────────────────
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // ── Mobile sidebar ────────────────────────────────────
  function openSidebar()  { sidebar.classList.add('open'); backdrop.classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
  function closeSidebar() { sidebar.classList.remove('open'); backdrop.classList.add('hidden'); document.body.style.overflow = ''; }
  menuToggle.addEventListener('click', () => sidebar.classList.contains('open') ? closeSidebar() : openSidebar());
  backdrop.addEventListener('click', closeSidebar);

  // ── Init ──────────────────────────────────────────────
  buildCards();
  buildProject1();
  showHome();

})();
