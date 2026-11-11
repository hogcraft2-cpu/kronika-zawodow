/* Panel tylko do przeglądania — brak kont, formularzy zapisu i panelu administracyjnego. */
(function(){
  "use strict";
  const professions = Array.isArray(window.KRONIKA_PROFESSIONS) ? window.KRONIKA_PROFESSIONS : [];
  const nav = document.getElementById("profession-nav");
  const chaptersNav = document.getElementById("chapter-nav");
  const content = document.getElementById("profession-content");
  const menu = document.getElementById("mobile-menu");
  const backdrop = document.getElementById("sidebar-backdrop");
  const sidebar = document.getElementById("sidebar");
  const breadcrumb = document.getElementById("current-profession");

  function e(value){
    return String(value == null ? "" : value).replace(/[&<>"']/g, char => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    }[char]));
  }
  function setMenu(open){
    sidebar.classList.toggle("is-open",open);
    backdrop.classList.toggle("is-open",open);
    menu.setAttribute("aria-expanded",String(open));
    backdrop.hidden = !open;
    if(open){const first=sidebar.querySelector(".profession-btn:not([disabled])");if(first)first.focus()}
  }
  menu.addEventListener("click",()=>setMenu(!sidebar.classList.contains("is-open")));
  backdrop.addEventListener("click",()=>setMenu(false));
  document.addEventListener("keydown",ev=>{
    if(ev.key==="Escape"&&sidebar.classList.contains("is-open")){setMenu(false);menu.focus()}
  });

  function navMarkup(active){
    nav.innerHTML = professions.map(prof => {
      const available=prof.status==="published";
      return `<button class="profession-btn" type="button" data-profession="${e(prof.id)}" ${available ? "" : "disabled aria-disabled=\"true\""} ${prof.id===active.id ? 'aria-current="page"' : ""}>
        <span class="profession-btn__icon" aria-hidden="true">${e(prof.symbol)}</span>
        <span><span class="profession-btn__name">${e(prof.name)}</span><span class="profession-btn__state">${e(prof.statusLabel)}</span></span>
      </button>`;
    }).join("");
    nav.querySelectorAll(".profession-btn:not([disabled])").forEach(button=>{
      button.addEventListener("click",()=>{
        const target=professions.find(p=>p.id===button.dataset.profession);
        if(!target)return;
        if(target.id!==active.id)render(target);
        history.replaceState(null,"","#"+target.id);
        window.scrollTo({top:0,behavior:"smooth"});
        setMenu(false);
      });
    });
  }
  function sectionMarkup(section){
    const rows=(section.rows||[]).map(row=>`<div class="info-row">
      <span class="info-row__glyph" aria-hidden="true">${e(row.icon)}</span>
      <div><strong>${e(row.title)}</strong><p>${e(row.text)}</p></div>
    </div>`).join("");
    const paragraphs=(section.paragraphs||[]).map(p=>`<p>${e(p)}</p>`).join("");
    return `<section class="panel" id="${e(section.id)}" aria-labelledby="title-${e(section.id)}">
      <div class="panel__inner">
        <div class="panel-heading">
          <span class="panel-heading__emblem" aria-hidden="true">${e(section.mark)}</span>
          <div><span class="kicker">${e(section.chapter)}</span><h2 id="title-${e(section.id)}">${e(section.title)}</h2></div>
        </div>
        <div class="prose">${paragraphs}</div>
        ${rows}
        ${section.note ? `<div class="pull-quote">❧ &nbsp; ${e(section.note)}</div>` : ""}
      </div>
    </section>`;
  }
  function faqMarkup(faq){
    return faq.map((item,i)=>`<details class="faq-item" ${i===0 ? "open":""}>
      <summary>${e(item.q)}</summary><p>${e(item.a)}</p>
    </details>`).join("");
  }
  function render(prof){
    document.title = `${prof.name} — Kronika Zawodów | KCD2 RP`;
    breadcrumb.textContent=prof.name;
    navMarkup(prof);
    chaptersNav.innerHTML = `<a href="#wprowadzenie" class="section-link">Wprowadzenie</a>
      <a href="#pierwsze-kroki" class="section-link">Pierwsze kroki</a>` +
      prof.chapters.map(s=>`<a href="#${e(s.id)}" class="section-link">${e(s.title)}</a>`).join("") +
      `<a href="#faq" class="section-link">Pytania i odpowiedzi</a>`;
    const steps=prof.steps.map((step,i)=>`<div class="flow-step"><span class="flow-step__num">${String(i+1).padStart(2,"0")} / ${e(prof.steps.length)}</span><strong>${e(step.title)}</strong><p>${e(step.text)}</p></div>`).join("");
    const quickFacts=prof.quickFacts.map(fact=>`<li><span>${e(fact.label)}</span><b>${e(fact.value)}</b></li>`).join("");
    content.innerHTML=`
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero__copy">
          <span class="eyebrow">${e(prof.rank)}</span>
          <h1 id="hero-title">${e(prof.name)}</h1>
          <p>${e(prof.summary)}</p>
          <div class="hero__rule"></div>
          <span class="hero__label">${e(prof.subtitle)}</span>
        </div>
        <img class="hero__art" src="assets/kowal-rycina.svg" alt="" loading="eager">
        <span class="hero__roman" aria-hidden="true">I</span>
      </section>
      <div class="ornament" aria-hidden="true"><span>❧ ✦ ❧</span></div>
      <div class="content-grid">
        <div class="article">
          <section class="panel" id="wprowadzenie">
            <div class="panel__inner">
              <div class="panel-heading"><span class="panel-heading__emblem" aria-hidden="true">♜</span><div><span class="kicker">Księga profesji</span><h2>O zawodzie</h2></div></div>
              <p class="prose" style="margin-bottom:0">${e(prof.introduction)}</p>
            </div>
          </section>
          <section class="panel" id="pierwsze-kroki">
            <div class="panel__inner">
              <div class="panel-heading"><span class="panel-heading__emblem" aria-hidden="true">✦</span><div><span class="kicker">Od czeladnika do mistrza</span><h2>Jak rozpocząć pracę?</h2></div></div>
              <div class="flow-steps">${steps}</div>
            </div>
          </section>
          ${prof.chapters.map(sectionMarkup).join("")}
          <section class="panel faq-panel" id="faq" aria-labelledby="faq-title">
            <div class="panel__inner">
              <div class="panel-heading"><span class="panel-heading__emblem" aria-hidden="true">?</span><div><span class="kicker">Znajdź odpowiedź</span><h2 id="faq-title">Najczęstsze pytania</h2></div></div>
              <label for="faq-search" class="kicker">Wyszukaj w pytaniach i odpowiedziach</label>
              <div class="search-wrap"><span class="search-wrap__icon" aria-hidden="true">⌕</span><input id="faq-search" class="faq-search" type="search" placeholder="Np. poziom, XP, ruda, naprawa…" autocomplete="off" aria-controls="faq-items"></div>
              <div id="faq-items">${faqMarkup(prof.faq)}</div>
              <p class="faq-empty" id="faq-empty" hidden role="status">Brak wyników dla tej frazy. Spróbuj innego słowa.</p>
            </div>
          </section>
        </div>
        <aside class="aside-information" aria-label="Informacje o zawodzie">
          <div class="sheet"><div class="sheet__inner">
            <div class="sheet__seal" aria-hidden="true">⚜</div><h2>Karta profesji</h2>
            <p class="sheet__subtitle">Zapis podstawowych wiadomości z księgi cechowej</p>
            <ul>${quickFacts}</ul>
          </div></div>
          <div class="side-note"><h3>✦ Dla mieszkańców królestwa</h3>
            <p>Poradnik ma charakter informacyjny. Nie znajdziesz tu przycisku edycji ani dodawania wpisów. Nowe zawody pojawią się wraz z rozbudową kroniki.</p>
          </div>
        </aside>
      </div>
      <footer class="site-footer"><span><b>Kronika Zawodów</b> • Królestwo Czech • Kingdom Come: Deliverance II RP</span><span>Publiczny poradnik • Tylko do odczytu</span></footer>`;
    const input=document.getElementById("faq-search");
    const faqItems=[...content.querySelectorAll(".faq-item")];
    const empty=document.getElementById("faq-empty");
    input.addEventListener("input",()=>{
      const q=input.value.trim().toLocaleLowerCase("pl");
      let count=0;
      faqItems.forEach(item=>{
        const visible=item.textContent.toLocaleLowerCase("pl").includes(q);
        item.hidden=!visible;
        if(visible)count++;
      });
      empty.hidden=count!==0;
    });
    chaptersNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>setMenu(false)));
  }
  const requested=decodeURIComponent(location.hash.replace(/^#/,"").split("/")[0]);
  const active=professions.find(p=>p.id===requested&&p.status==="published")
    ||professions.find(p=>p.status==="published");
  if(active)render(active);
  else content.textContent="Brak opublikowanych zawodów.";
})();
