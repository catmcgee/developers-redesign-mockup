// Static site generator: node build.mjs → ../site
import { mkdirSync, writeFileSync, copyFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { state, I, logo, concepts, slug, cards, ghost } from "./helpers.mjs";
import { pages, paths, tabs, sidebars, landingWhy } from "./content.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, "..", "site");
const BUILD = Date.now().toString(36);

/* ---------------------------------------------------------- utilities */
const depth = (p) => (p ? p.split("/").length : 0);
const rel = (p) => (depth(p) ? "../".repeat(depth(p)) : "./");
const link = (p) => `@/${p ? p + "/" : ""}`;
const stripTags = (s) => s.replace(/<[^>]+>/g, "");

/* ------------------------------------------------- pass 1: collect usage */
for (const p of Object.values(pages)) if (p.body) { state.cur = p.path; p.body(); }
const usage = state.usage.slice();
state.usage.length = 0;

const pathOfPage = (pg) => {
  for (const [k, P] of Object.entries(paths)) {
    if (pg === P.intro) return { k, i: -1 };
    const i = P.steps.findIndex(([s]) => s === pg);
    if (i >= 0) return { k, i };
  }
  return null;
};

/* ----------------------------------------------------------- chrome */
function topbar() {
  const mega = `<div class="mega">
    <div class="col first"><h6>What are you building?</h6>
      <a class="it" href="${link("docs/payments/checkout")}"><b>Accept dollar payments</b><span>A checkout that settles in seconds</span></a>
      <a class="it" href="${link("docs/payments/paywall-api")}"><b>Charge per API call</b><span>Pay-per-request for apps and AI agents</span></a>
      <a class="it" href="${link("docs/assets/issue-asset")}"><b>Issue a tokenized asset</b><span>Tokens with approvals and a pause switch</span></a>
      <a class="more" href="${link("docs/use-cases")}">More use cases: trading, games, custom programs →</a></div>
    <div class="col"><h6>Start building</h6>
      <a class="it" href="${link("docs")}"><b>Docs</b><span>Start here, then everything else</span></a>
      <a class="it" href="#"><b>Templates</b><span>Clone a working app</span></a>
      <a class="it" href="${link("docs/resources/agents")}"><b>Build with AI agents</b><span>MCP server and Solana skill</span></a>
      <a class="it" href="${link("docs/from-ethereum")}"><b>Coming from Ethereum</b><span>EVM → SVM guide</span></a></div>
    <div class="col"><h6>Tools &amp; reference</h6>
      <a class="it" href="${link("docs/resources/tools")}"><b>Developer tools</b><span>Commerce Kit, Kora, Surfpool…</span></a>
      <a class="it" href="${link("docs/reference/rpc")}"><b>RPC API</b><span>Every method</span></a>
      <a class="it" href="https://explorer.solana.com"><b>Explorer</b><span>Look up any transaction</span></a>
      <a class="it" href="#"><b>Changelog</b><span>What shipped</span></a></div></div>`;
  const item = (t, opts = "") => `<div class="${opts.includes("has") ? "has" : ""}"><a href="${opts.includes("build") ? link("") : "#"}" class="${opts.includes("cur") ? "cur" : ""}">${t}<span class="caret">${I.caret}</span></a>${opts.includes("has") ? mega : ""}</div>`;
  return `<header class="topbar"><div class="in">
  <a class="logo" href="${link("")}">${logo}SOLANA</a>
  <nav class="mainnav">${item("Use Solana")}${item("Build", "has cur build")}${item("Enterprise")}${item("Products")}${item("Ecosystem")}</nav>
  <div class="right"><span class="search">${I.search}<span>Search</span><kbd>⌘K</kbd></span><span class="lang">EN</span></div></div></header>`;
}
const drawer = (notes) => !notes?.length ? "" : `
<button class="notes-btn">${I.note} Design notes <i>${notes.length}</i></button>
<aside class="drawer"><button class="x">✕</button><h4>Design notes</h4><p class="sub">Why this page looks the way it does. These are for reviewers, not part of the product. Full evidence and sources: <a href="${link("docs/research")}" style="color:#ffd27a;text-decoration:underline">Docs Research</a>.</p>
${notes.map((n) => `<div class="nt ${n.t}"><span class="ty">${{ why: "Why", risk: "Risk / dependency", change: "Vs. today" }[n.t]}</span>${n.h}</div>`).join("")}</aside>`;
const shell = (p, { title, body, cls, notes }) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${stripTags(title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@400..600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="@/assets/site.css?v=${BUILD}"></head>
<body class="${cls}">${topbar()}${body}${drawer(notes)}<script src="@/assets/site.js?v=${BUILD}"></script></body></html>`;

/* ------------------------------------------------------- docs pieces */
function sidebarHtml(tab, cur) {
  const items = sidebars[tab];
  const a = (pp, t, extra = "", inner = "") => `<a class="l ${pp === cur ? "cur" : ""} ${extra}" href="${link(pp)}">${inner}${t}</a>`;
  return items.map((it) => {
    if (it.h) return `<div class="sec">${it.h}</div>`;
    if (it.path) {
      const P = paths[it.path];
      const ci = P.steps.findIndex(([s]) => s === cur);
      return `<div class="pathbox"><a class="ph${P.intro === cur ? " on" : ""}" href="${link(P.intro)}">${P.job}<span>${P.time}</span></a>${P.steps.map(([s, t], i) =>
        a(s, t, ci > i ? "done" : "", `<span class="num">${ci > i ? "✓" : i + 1}</span>`).replace("</a>", i === P.first ? `<span class="star" title="First success">★</span></a>` : "</a>")).join("")}</div>`;
    }
    if (it.kids) {
      const open = it.p === cur || it.kids.some(([k]) => k === cur);
      return a(it.p, it.t).replace("</a>", `<span class="chev" style="${open ? "transform:rotate(90deg)" : ""}">${I.chev}</span></a>`) +
        (open ? `<div class="kids">${it.kids.map(([k, t]) => a(k, t)).join("")}</div>` : "");
    }
    return a(it.p, it.t);
  }).join("");
}
const flatOrder = (tab) => sidebars[tab].flatMap((it) => it.path ? [[paths[it.path].intro, paths[it.path].job], ...paths[it.path].steps] : it.kids ? [[it.p, it.t], ...it.kids] : it.p ? [[it.p, it.t]] : []);

function stepperHtml(key, cur) {
  const P = paths[key];
  const ci = P.steps.findIndex(([s]) => s === cur);
  return `<div class="stepper">${P.steps.map(([s, t], i) => `<a href="${link(s)}" class="${i === ci ? "cur" : i < ci ? "done" : ""}"><span class="n">STEP ${i + 1}${i < ci ? " ✓" : ""}${i === P.first ? ' <span class="s">★ first win</span>' : ""}</span>${t}</a>`).join("")}</div>`;
}

function coverageHtml() {
  const wave2 = {
    shared: { wallet: "r", transaction: "r", account: "I", program: "I", pda: "I", rpc: "r", fees: "r", rent: "r", cpi: "gap" },
    games: { wallet: "r", tokenAccount: "r", mint: "r", extensions: "r", account: "r", cpi: "gap" },
  };
  const cell = (key, pk) => {
    const P = paths[pk];
    const list = [P.intro, ...P.steps.map(([s]) => s)];
    const intro = list.findIndex((pg) => usage.some((u) => u.key === key && u.page === pg && u.kind === "intro"));
    if (intro >= 0) return `<span class="I">${intro === 0 ? "Overview" : "Step " + intro}</span>`;
    if (list.some((pg) => usage.some((u) => u.key === key && u.page === pg))) return `<span class="R">mentioned</span>`;
    return `<span class="R">·</span>`;
  };
  const w2 = (v) => v === "I" ? `<span class="I">intro</span>` : v === "gap" ? `<span class="gap">GAP</span>` : v ? `<span class="R">reuse</span>` : `<span class="R">·</span>`;
  const rows = Object.entries(concepts).map(([k, c]) => {
    const w1 = Object.keys(paths).some((pk) => { const P = paths[pk]; return [P.intro, ...P.steps.map(([s]) => s)].some((pg) => usage.some((u) => u.key === k && u.page === pg)); });
    return `<tr><td><a href="${link("docs/concepts/" + slug(k))}">${c.name}</a>${w1 ? "" : ' <span class="gap">not in Wave 1</span>'}</td>${Object.keys(paths).map((pk) => `<td>${cell(k, pk)}</td>`).join("")}<td>${w2(wave2.shared[k])}</td><td>${w2(wave2.games[k])}</td></tr>`;
  }).join("");
  return `<h2 id="coverage">Where each concept is taught</h2><p>Every concept is introduced inside a build, at the step that needs it. This table is generated from the paths themselves.</p>
<table class="cov"><tr><th>Concept</th>${Object.values(paths).map((P) => `<th>${P.label}</th>`).join("")}<th>Shared record <small>(W2)</small></th><th>Game items <small>(W2)</small></th></tr>${rows}</table>`;
}
function inShort(k) {
  const c = concepts[k];
  const used = [...new Map(usage.filter((u) => u.key === k).map((u) => [u.page, pathOfPage(u.page)]).filter(([, v]) => v)).entries()];
  return `<aside class="concept" style="margin-top:0"><div class="ch"><span class="gem">${I.gem}</span><b>In short</b><span class="lbl">same text as in the paths</span></div><div>${c.short}</div><div class="like"><b>Like:</b><span>${c.like}</span></div></aside>
<div class="usedin">${used.length ? "You've used this in:" : "Not used in a Wave 1 path yet."} ${used.map(([pg, { k: pk, i }]) => `<a href="${link(pg)}">${paths[pk].label} <i>${i < 0 ? "overview" : "step " + (i + 1)}</i></a>`).join("")}</div>`;
}

function docsPage(p) {
  state.cur = p.path;
  let body = p.body ? p.body() : stubBody(p);
  if (p.pathKey) body = body.replace("%%STEPPER%%", stepperHtml(p.pathKey, p.path));
  body = body.replace("%%COVERAGE%%", coverageHtml).replace(/%%INSHORT:(\w+)%%/, (_, k) => inShort(k));
  const toc = [...body.matchAll(/<h2 id="([^"]+)">(.*?)<\/h2>/g)].map(([, id, t]) => `<a href="#${id}">${stripTags(t)}</a>`).join("");
  const order = flatOrder(p.tab);
  const idx = order.findIndex(([s]) => s === p.path);
  const prev = order[idx - 1], nxt = order[idx + 1];
  const tab = tabs.find((t) => t.id === p.tab);
  const P = p.pathKey && paths[p.pathKey];
  const si = P ? P.steps.findIndex(([s]) => s === p.path) : -1;
  const PI = p.pathIntro && paths[p.pathIntro];
  const crumb = `Solana Documentation <span>/ ${tab.label}${P ? " / " + P.name + " · step " + (si + 1) + " of " + P.steps.length : PI ? " / " + PI.name + " · overview" : ""}</span>`;
  const main = `
<nav class="tabs"><div class="in">${tabs.map((t) => t.sep ? `<span class="sep"></span>` : t.ext ? `<a class="ext" href="${t.href}" target="_blank" rel="noopener">${t.icon}${t.label} ↗</a>` : `<a class="${t.id === p.tab ? "cur" : ""}" href="${link(t.href)}">${t.icon}${t.label}${t.isNew ? ' <span class="tag-new">NEW</span>' : ""}</a>`).join("")}</div></nav>
<div class="layout">
<aside class="sidebar">${sidebarHtml(p.tab, p.path)}</aside>
<main class="content"><div class="crumb">${crumb}</div><h1>${p.title}</h1>${p.desc ? `<p class="desc">${p.desc}</p>` : ""}
<div class="pageacts"><span>${I.copy} Copy Markdown</span><span>Open ▾</span><span class="meta">${P ? (si === P.first ? "★ first win · ~5 min" : "~" + [6, 5, 10, 8][si] + " min") : p.stub ? "carried over from today's docs" : ""}</span></div>
<div class="prose ${p.wide ? "wide" : ""}">${body}</div>
<div class="helpful">Is this page helpful? <span>👍</span><span>👎</span></div>
<div class="pn">${prev ? `<a href="${link(prev[0])}">‹ Previous<b>${prev[1]}</b></a>` : "<span></span>"}${nxt ? `<a class="n" href="${link(nxt[0])}">Next ›<b>${nxt[1]}</b></a>` : ""}</div>
</main>
<aside class="toc">${toc ? `<h6>${I.toc} On this page</h6>${toc}` : ""}<div class="edit">${I.gh} Edit page</div>
${P ? `<div class="pathmini"><b>${P.name}</b><div class="pbar"><i style="width:${((si + 1) / P.steps.length) * 100}%"></i></div><span>Step ${si + 1} of ${P.steps.length} · ${P.time} total</span></div>` : ""}</aside>
</div>`;
  return shell(p.path, { title: `${p.title} | Solana Docs`, body: main, cls: "docs", notes: p.why });
}
function stubBody(p) {
  const tab = sidebars[p.tab];
  const g = tab.find((it) => it.kids && it.p === p.path);
  return `<div class="stub"><b>This page's content carries over from today's docs.</b> In this mockup, only its place in the structure is new.<br><span class="was">today: ${p.stub.was}</span></div>
${g ? cards(g.kids.map(([k, t]) => [t, "Carried over.", link(k)])) : ""}${ghost(8)}`;
}

/* ------------------------------------------------------------ landing */
function landing() {
  const job = (href, icon, title, text, first, total, cta, visual, i) => `<a class="lp-job rv" style="--d:${i * 90}ms" href="${link(href)}">
  <div class="lp-vis">${visual}</div>
  <div class="lp-jb"><span class="lp-ico">${icon}</span><h3>${title}</h3><p>${text}</p></div>
  <div class="lp-jf"><span><b>~${first}</b> to first result</span><span class="lp-go">${cta}${I.arrow}</span></div></a>`;
  const visPay = `<div class="v-pay"><span class="v-node">You</span><span class="v-track"><i class="v-coin">$</i></span><span class="v-node shop">Shop</span><span class="v-tag">1.00 USDC · 0.4 s · $0.001 fee</span></div>`;
  const visApi = `<div class="v-api"><div class="v-line l1"><b>GET</b> /api/forecast</div><div class="v-line l2"><span class="s402">402</span> price: $0.01</div><div class="v-line l3"><span class="spay">paid</span> 0.01 USDC · 0.4 s</div><div class="v-line l4"><span class="s200">200</span> { "sky": "clear" }</div></div>`;
  const visAsset = `<div class="v-asset"><div class="v-token">LSF</div><div class="v-rows"><div class="v-r ok">→ Approved investor <b>✓</b></div><div class="v-r no">→ Unknown address <b>✕</b></div></div></div>`;
  const step = (n, t, d, hl) => `<div class="lp-step${hl ? " hl" : ""}"><span class="lp-dot">${n}</span><h4>${t}</h4><p>${d}</p>${hl ? '<span class="lp-win">First win</span>' : ""}</div>`;
  const body = `
<nav class="subbar"><div class="in"><a class="cur" href="${link("")}">${I.sparkle}Build</a><a href="${link("docs")}">${I.book}Docs</a><a href="${link("docs/reference/rpc")}">${I.code}API</a><a href="${link("docs/resources/tools")}">${I.wrench}Tools</a><a href="#">${I.school}Learn</a><a href="#">${I.users}Community</a></div></nav>

<section class="lp-hero">
  <div class="lp-aurora"><i class="a1"></i><i class="a2"></i><i class="a3"></i></div>
  <div class="lp-gridbg"></div>
  <div class="lp-wrap lp-hin">
    <h1 class="rv">Build on <span class="lp-shine">internet capital markets.</span></h1>
    <p class="lp-lede rv" style="--d:80ms">Solana is a public network for moving money and assets. Transactions confirm in about 0.4 seconds and cost about $0.001. Each guide below gets a working example running in your browser, then in your own code.</p>
    <div class="lp-ctas rv" style="--d:160ms"><a class="lp-btn primary" href="#picker">Pick a guide ${I.down}</a><a class="lp-btn ghost" href="${link("docs")}">Docs</a></div>
    <p class="lp-quiet rv" style="--d:220ms">Coming from Ethereum? Read the <a href="${link("docs/from-ethereum")}">EVM to SVM guide</a>.</p>
    <div class="lp-stats rv" style="--d:300ms" data-live>
      <div class="lp-stat"><span class="lp-k"><i class="lp-pulse"></i><span class="livepill">Live from mainnet</span></span><span class="lp-v" data-k="fee">$0.0010</span><span class="lp-h">base fee per transaction, regardless of amount</span></div>
      <div class="lp-stat"><span class="lp-k">Block time</span><span class="lp-v" data-k="slot">0.40<small>s</small></span><span class="lp-h">transactions usually confirm within one block</span></div>
      <div class="lp-stat"><span class="lp-k">Transactions / sec</span><span class="lp-v" data-k="tps">1,100</span><span class="lp-h">user transactions, excluding votes</span></div>
    </div>
  </div>
</section>

<section class="lp-sec" id="picker"><div class="lp-wrap">
  <div class="lp-head rv"><h2>What are you building?</h2>
  <p>Each guide takes about 30 minutes. You try the finished example first, build it in a browser playground, then run it from your own machine.</p></div>
  <div class="lp-jobs">
    ${job("docs/payments/checkout", I.card, "Accept dollar payments that settle in seconds", "Take USDC through a checkout button and confirm the payment from your server.", "5 min", "30 min", "Build a checkout", visPay, 0)}
    ${job("docs/payments/paywall-api", I.api, "Charge a few cents per API call", "Charge per request using HTTP 402 (x402). Clients, including AI agents, pay without an account or API key.", "5 min", "30 min", "Paywall an endpoint", visApi, 1)}
    ${job("docs/assets/issue-asset", I.layers, "Issue a tokenized asset with compliance controls", "Create a Token-2022 token with metadata, an allowlist and a pause control.", "10 min", "45 min", "Issue an asset", visAsset, 2)}
  </div>
  <div class="lp-more rv"><span>Also:</span>
    <a href="${link("docs/markets")}">Trading &amp; markets</a><a href="${link("docs/assets/games")}">Games &amp; digital items</a><a href="${link("docs/payments/pay-per-call/agents")}">AI agents that pay</a><a href="${link("docs/programs")}">Write your own program</a><a href="${link("docs/use-cases")}">All use cases →</a></div>
</div></section>

<section class="lp-sec"><div class="lp-wrap">
  <div class="lp-head rv"><h2>How the guides work</h2>
  <p>Every guide has the same four steps. Solana concepts are explained briefly at the step where you first need them, with links to the full docs.</p></div>
  <div class="lp-timeline rv"><div class="lp-rail"><i></i></div>
    ${step(1, "Try it", "Use a working version with a test wallet created in the page.")}
    ${step(2, "Build it in the browser", "Edit and run the code in a playground. Nothing to install.", true)}
    ${step(3, "Run it locally", "Run the same code from your own backend against devnet.")}
    ${step(4, "Go to production", "A checklist for mainnet, then related guides.")}
  </div>
</div></section>

<section class="lp-sec"><div class="lp-wrap lp-split">
  <div class="rv"><h2>Recent USDC transactions</h2>
    <p class="lp-p">Live transactions involving the USDC mint on mainnet, fetched from a public RPC node. Click one to view it in Explorer.</p>
    <a class="lp-btn ghost" href="https://explorer.solana.com" target="_blank" rel="noopener">Open Explorer ${I.arrow}</a></div>
  <div class="rv" style="--d:120ms"><div class="lp-feedcard"><div class="feed" id="feed"><div class="row head"><span>Age</span><span>Transaction touching USDC</span><span>Status</span><span></span></div>
    ${[["1s ago", "5VfY…h3Kq"], ["1s ago", "3kPq…tV9a"], ["2s ago", "Hq1c…9pLm"], ["2s ago", "2xTr…Ww7e"], ["3s ago", "Bq9T…mm8A"], ["3s ago", "Fv2m…1yQp"]].map(([a, s]) => `<div class="row"><span>${a}</span><span class="sig">${s}</span><span class="ok">● confirmed</span><a class="ext" href="#">↗</a></div>`).join("")}
  </div></div><div class="feedsrc">sample data · connecting to mainnet…</div></div>
</div></section>

<section class="lp-sec"><div class="lp-wrap">
  <div class="lp-head rv"><h2>Other ways to learn</h2><p>Reference docs, courses, starter code and outside help.</p></div>
  <div class="lp-routes">
    ${[["docs", I.book, "Docs", "Concepts, SDKs and RPC reference."], ["#", I.school, "Solana School", "A structured course from first transaction to deployed program."], ["#", I.code, "Templates", "Starter apps for Next.js, mobile and programs."], ["#", I.users, "Development partners", "Agencies that build on Solana."]].map(([h, ic, t, d], i) => `<a class="lp-route rv" style="--d:${i * 70}ms" href="${h === "#" ? "#" : link(h)}"><span class="lp-ico">${ic}</span><h4>${t}</h4><p>${d}</p><span class="lp-arrow">${I.arrow}</span></a>`).join("")}
  </div>
</div></section>

<section class="lp-sec lp-last"><div class="lp-wrap"><div class="lp-news rv">
  <div><h3>Solana developer update</h3><p>A monthly email covering releases, network upgrades and new guides.</p></div>
  <form onsubmit="return false"><input placeholder="you@company.com"><button class="lp-btn primary">Subscribe</button></form>
</div></div></section>
<footer class="site"><div class="wrap"><span>© Solana Foundation · structural mockup, illustrative copy</span><nav><a href="#">Grants</a><a href="#">Media kit</a><a href="#">Careers</a><a href="#">Privacy</a><a href="${link("docs/research")}">Docs Research</a><a href="https://github.com/catmcgee/developers-redesign-mockup">Source</a></nav></div></footer>`;
  return shell("", { title: "Build on internet capital markets | Solana Developers", body, cls: "dark", notes: landingWhy });
}

/* -------------------------------------------------------------- write */
rmSync(OUT, { recursive: true, force: true });
const write = (p, html) => {
  const f = join(OUT, p, "index.html");
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, html.replaceAll("@/", rel(p)));
};
write("", landing());
for (const p of Object.values(pages)) write(p.path, docsPage(p));
mkdirSync(join(OUT, "assets"), { recursive: true });
for (const f of ["site.css", "site.js"]) copyFileSync(join(here, "assets", f), join(OUT, "assets", f));
writeFileSync(join(OUT, ".nojekyll"), "");
console.log(`built ${Object.keys(pages).length + 1} pages → ${OUT}`);
