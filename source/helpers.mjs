// Shared components and state for the static site generator.

export const state = { cur: null, usage: [] }; // usage: {key, page, kind}

/* ------------------------------------------------------------------ icons */
const sv = (d, vb = "0 0 16 16") =>
  `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
export const I = {
  arrow: sv('<path d="M3 8h10M9 4l4 4-4 4"/>'),
  down: sv('<path d="M8 3v10M4 9l4 4 4-4"/>'),
  chev: sv('<path d="M6 4l4 4-4 4"/>'),
  caret: sv('<path d="M4 6l4 4 4-4"/>'),
  card: sv('<rect x="1.5" y="3.5" width="13" height="9" rx="2"/><path d="M1.5 6.5h13M4 10h2.5"/>'),
  api: sv('<path d="M5 4L1.5 8 5 12M11 4l3.5 4-3.5 4M9.5 2.5l-3 11"/>'),
  layers: sv('<path d="M8 1.8l6.2 3.2L8 8.2 1.8 5z"/><path d="M1.8 8L8 11.2 14.2 8M1.8 11L8 14.2 14.2 11"/>'),
  home: sv('<path d="M2 7l6-4.5L14 7v6.5a.5.5 0 01-.5.5H10V10H6v4H2.5a.5.5 0 01-.5-.5z"/>'),
  grid: sv('<rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/>'),
  cube: sv('<path d="M8 1.5l5.5 3v7L8 14.5l-5.5-3v-7z"/><path d="M2.5 4.5L8 7.5l5.5-3M8 7.5v7"/>'),
  book: sv('<path d="M2 3h4.5A1.5 1.5 0 018 4.5V14a1.5 1.5 0 00-1.5-1.5H2zM14 3H9.5A1.5 1.5 0 008 4.5V14a1.5 1.5 0 011.5-1.5H14z"/>'),
  school: sv('<path d="M1 6l7-3.5L15 6 8 9.5z"/><path d="M4 7.5v3.5c0 .8 1.8 2 4 2s4-1.2 4-2V7.5M15 6v4"/>'),
  code: sv('<rect x="1.5" y="2.5" width="13" height="11" rx="2"/><path d="M5.5 7L4 8.5 5.5 10M10.5 7L12 8.5 10.5 10"/>'),
  users: sv('<circle cx="6" cy="5.5" r="2.5"/><path d="M1.5 14c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4"/><path d="M11 3.2a2.5 2.5 0 010 4.6M12.5 10.3c1.3.6 2 1.8 2 3.7"/>'),
  wrench: sv('<path d="M10 2.2a3.5 3.5 0 00-3.3 4.6L2 11.5V14h2.5l4.7-4.7A3.5 3.5 0 0013.8 6l-2 2-1.8-.2-.2-1.8 2-2A3.5 3.5 0 0010 2.2z"/>'),
  info: sv('<circle cx="8" cy="8" r="6.5"/><path d="M8 7.2V11M8 5v.3"/>', "0 0 16 16"),
  check: sv('<path d="M3.5 8.5l3 3 6-7"/>'),
  play: sv('<path d="M5 3.5v9l7-4.5z" fill="currentColor"/>'),
  gem: sv('<path d="M4 2h8l3 4-7 8-7-8z"/><path d="M1 6h14M6 2L5 6l3 8 3-8-1-4"/>'),
  note: sv('<path d="M3 2.5h7l3 3v8a.5.5 0 01-.5.5h-9.5a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5z"/><path d="M5.5 7.5h5M5.5 10h5M10 2.5v3h3"/>'),
  copy: sv('<rect x="5" y="5" width="8.5" height="8.5" rx="1.5"/><path d="M11 5V3.5A1.5 1.5 0 009.5 2h-6A1.5 1.5 0 002 3.5v6A1.5 1.5 0 003.5 11H5"/>'),
  gh: sv('<path d="M6 13.5c-3 .9-3-1.5-4.2-1.8M10 15v-2.3a2 2 0 00-.6-1.6c2-.2 4.1-1 4.1-4.5a3.5 3.5 0 00-1-2.4 3.2 3.2 0 000-2.4s-.8-.2-2.5 1a8.6 8.6 0 00-4.5 0C3.8 1.6 3 1.8 3 1.8a3.2 3.2 0 000 2.4 3.5 3.5 0 00-1 2.4c0 3.5 2.1 4.3 4.1 4.5a2 2 0 00-.6 1.6V15"/>'),
  toc: sv('<path d="M2 4h12M2 8h8M2 12h10"/>'),
  globe: sv('<circle cx="8" cy="8" r="6.5"/><path d="M1.5 8h13M8 1.5c2 2 2.8 4.2 2.8 6.5S10 12.5 8 14.5C6 12.5 5.2 10.3 5.2 8S6 3.5 8 1.5z"/>'),
  search: sv('<circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/>'),
  sparkle: sv('<path d="M8 1.5l1.6 4.9 4.9 1.6-4.9 1.6L8 14.5l-1.6-4.9L1.5 8l4.9-1.6z"/>'),
  shield: sv('<path d="M8 1.5l5.5 2v4.2c0 3.3-2.3 5.7-5.5 6.8-3.2-1.1-5.5-3.5-5.5-6.8V3.5z"/>'),
  game: sv('<rect x="1.5" y="4.5" width="13" height="7" rx="3.5"/><path d="M4.5 8h2.5M5.75 6.75v2.5M10.5 7.2v.1M12 8.7v.1"/>'),
  chart: sv('<path d="M2 14V2M2 14h12M5 11V8M8 11V5M11 11V7"/>'),
};
export const logo = `<svg viewBox="0 0 101 88" aria-hidden="true"><defs><linearGradient id="lg" x1="8" y1="91" x2="88" y2="-3" gradientUnits="userSpaceOnUse"><stop stop-color="#9945FF"/><stop offset=".2" stop-color="#7962E7"/><stop offset="1" stop-color="#00D18C"/></linearGradient></defs><path fill="url(#lg)" d="M100.5 69.4L84 87a3.8 3.8 0 01-2.8 1.2H3a1.9 1.9 0 01-1.4-3.2L18 67.4a3.8 3.8 0 012.8-1.2h78.2a1.9 1.9 0 011.4 3.2zM84 34a3.8 3.8 0 00-2.8-1.2H3a1.9 1.9 0 00-1.4 3.2L18 53.6a3.8 3.8 0 002.8 1.2h78.2a1.9 1.9 0 001.4-3.2zM3 21.3h78.2A3.8 3.8 0 0084 20.1L100.5 2.5A1.9 1.9 0 0099.1-.7H20.8A3.8 3.8 0 0018 .5L1.6 18.1A1.9 1.9 0 003 21.3z"/></svg>`;

/* -------------------------------------------------------------- concepts */
export const concepts = {
  wallet: { name: "Wallets & signatures", cat: "The basics", short: "A wallet is a keypair: a public <em>address</em> that anyone can pay, and a private key that <em>signs</em> approvals and never leaves the device.", like: "An account number plus a password that only ever approves things and never gets sent anywhere.", was: "new page" },
  signature: { name: "Signatures", cat: "The basics", short: "Every transaction is signed by the wallets it spends from. The first signature doubles as the transaction's ID, which is what your code gets back and looks up later.", like: "A receipt number that also proves who authorized the payment.", was: "/docs/core/transactions#signatures" },
  transaction: { name: "Transactions", cat: "The basics", short: "A transaction is a signed request to change the shared ledger. It either fully happens or doesn't happen at all, and once confirmed anyone can look it up.", like: "A signed, atomic database write with a public audit log.", was: "/docs/core/transactions" },
  account: { name: "Accounts", cat: "The basics", short: "Everything on Solana (balances, tokens, programs, app data) lives in accounts: records at an address, each with an owner that is allowed to change it.", like: "Rows in one global key-value table, where each row says which service may write to it.", was: "/docs/core/accounts" },
  clusters: { name: "Devnet & mainnet", cat: "The basics", short: "Devnet is a free public test network that behaves like the real one (mainnet), with play money. Same code, different URL.", like: "Stripe test mode vs live mode.", was: "/docs/references/clusters" },
  tokenAccount: { name: "Token accounts", cat: "Tokens", short: "Wallets don't hold tokens directly. Each token (USDC, or your own asset) gets a small account owned by the wallet, and transfers move between these accounts.", like: "A separate sub-account per currency at a bank.", was: "/docs/tokens/basics/create-token-account" },
  mint: { name: "Mints & authorities", cat: "Tokens", short: "A mint account defines a token: its supply, its decimals, who may create more (<em>mint authority</em>) and who may freeze holders (<em>freeze authority</em>).", like: "The class definition plus the admin roles for your asset.", was: "/docs/tokens/basics/create-mint" },
  extensions: { name: "Token extensions", cat: "Tokens", short: "Optional features of the Token-2022 program, such as metadata, pausing, default-frozen accounts and transfer hooks, switched on per mint. Most must be chosen <b>when the mint is created</b>.", like: "Feature flags you have to set when you create the table.", was: "/docs/tokens/extensions" },
  fees: { name: "Fees", cat: "Costs & speed", short: "Every transaction pays a small flat network fee, currently a fraction of a cent, whatever the amount. Whoever submits the transaction pays, and that can be you rather than your customer.", like: "A fixed per-API-call cost, not a percentage interchange fee.", was: "/docs/core/fees" },
  sponsorship: { name: "Fee sponsorship", cat: "Costs & speed", short: "By default, whoever sends a transaction needs a little SOL to pay its fee. A fee-payer service such as Kora lets your app pay instead, so customers only ever hold dollars.", like: "Absorbing the card fee instead of adding a surcharge.", was: "/docs/tools/kora" },
  rent: { name: "Rent (storage deposit)", cat: "Costs & speed", short: "Every account holds a small refundable deposit for the space it takes up. Opening a USDC account for a new customer costs about 0.002 SOL, which comes back if the account is closed.", like: "A refundable deposit on a storage locker.", was: "/docs/core/accounts#rent" },
  commitment: { name: "Confirmation & finality", cat: "Costs & speed", short: "A transaction goes from <em>processed</em> to <em>confirmed</em> (~0.4 s) to <em>finalized</em>. Confirmed is enough for most orders. Finalized can't be reversed, and takes longer.", like: "Pending → authorized → settled.", was: "new page" },
  rpc: { name: "RPC", cat: "Building", short: "RPC is the HTTP/JSON API your code uses to read from and send to the network. Use public endpoints for testing and a provider in production.", like: "A hosted database endpoint, with RPC providers in the role of AWS or Supabase.", was: "/docs/rpc" },
  program: { name: "Programs", cat: "Building", short: "Programs are code deployed to the network that owns and updates accounts. Most apps call existing programs, such as the Token program, rather than writing their own.", like: "A hosted, shared API that everyone calls and nobody can change under you.", was: "/docs/core/programs" },
  pda: { name: "Program-derived addresses", cat: "Building", short: "A PDA is an address derived from a program plus some seeds. It has no private key, so only that program can sign for it, which makes it handy for storing app state at predictable addresses.", like: "A deterministic primary key that only your service can write to.", was: "/docs/core/pda" },
  cpi: { name: "Cross-program calls", cat: "Building", short: "A cross-program call (CPI) is one program calling another inside the same transaction, the way your program would call the Token program to move tokens.", like: "One microservice calling another, all inside a single database transaction.", was: "/docs/core/cpi" },
};
export const slug = (k) => k.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
export const conceptHref = (k) => `@/docs/concepts/${slug(k)}/`;

export function concept(key, { label = "New concept" } = {}) {
  const c = concepts[key];
  state.usage.push({ key, page: state.cur, kind: "intro" });
  return `<aside class="concept"><div class="ch"><span class="gem">${I.gem}</span><b>${c.name}</b><span class="lbl">${label}</span><a href="${conceptHref(key)}">Learn more →</a></div>
<div>${c.short}</div><div class="like"><b>Like:</b><span>${c.like}</span></div></aside>`;
}
export function chip(key, text) {
  const c = concepts[key];
  state.usage.push({ key, page: state.cur, kind: "ref" });
  return `<a class="chip" href="${conceptHref(key)}" title="${c.short.replace(/<[^>]+>/g, "")}">${text || c.name}</a>`;
}

/* ------------------------------------------------------------ primitives */
export const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export const h2 = (t, id) => `<h2 id="${id || t.toLowerCase().replace(/<[^>]+>/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}">${t}</h2>`;
export const callout = (html, kind = "") =>
  `<div class="callout ${kind}">${kind === "warn" ? `<svg class="ci" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 3l8 14H2z"/><path d="M10 8v4M10 14.5v.5"/></svg>` : `<span class="ci">${kind === "green" ? I.check : I.info}</span>`}<div>${html}</div></div>`;
export const cards = (items, cls = "") =>
  `<div class="cards ${cls}">${items.map(([t, d, h, k]) => `<a class="card" href="${h || "#"}">${k ? `<div class="k">${k}</div>` : ""}<b>${t}</b><span>${d}</span></a>`).join("")}</div>`;
export const flow = (items) => {
  const colors = ["#9945ff", "#7f5cf0", "#3b82f6", "#19d3c5", "#14c784"];
  return `<div class="flow">${items.map(([t, s], i) => `${i ? "<i>→</i>" : ""}<div style="border-color:${colors[i % colors.length]}"><b>${t}</b><span>${s}</span></div>`).join("")}</div>`;
};
export const fit = (yes, no) =>
  `<div class="fit"><div class="y"><h4>✓ A good fit if</h4><ul>${yes.map((x) => `<li>${x}</li>`).join("")}</ul></div><div class="n"><h4>✕ Not the right fit if</h4><ul>${no.map((x) => `<li>${x}</li>`).join("")}</ul></div></div>`;
export const table = (head, rows, hl = -1) =>
  `<table><tr>${head.map((h, i) => `<th class="${i === hl ? "hl" : ""}">${h}</th>`).join("")}</tr>${rows.map((r) => `<tr>${r.map((c, i) => `<td class="${i === hl ? "hl" : ""}">${c}</td>`).join("")}</tr>`).join("")}</table>`;
export const checklist = (id, items) =>
  `<ul class="check">${items.map(([t, s], i) => `<li><input type="checkbox" id="${id}-${i}"><label for="${id}-${i}"><span>${t}${s ? `<small>${s}</small>` : ""}</span></label></li>`).join("")}</ul>`;

/* code with a tiny highlighter */
const KW = /\b(import|from|export|default|function|const|let|var|await|async|return|if|else|new|true|false|null|def|class|for|in|not|or|and|None|True|False|use|fn|let|mut|pub|struct|impl)\b/;
export function hl(src, lang = "ts") {
  const com = lang === "py" || lang === "sh" ? "#[^\\n]*" : "\\/\\/[^\\n]*";
  const re = new RegExp(`(${com})|("(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*')|${KW.source}|\\b(\\d[\\d_]*n?)\\b|\\b([a-zA-Z_]\\w*)(?=\\()`, "g");
  return esc(src).replace(re, (m, c, s, k, n, f) =>
    c ? `<span class="tk-c">${c}</span>` : s ? `<span class="tk-s">${s}</span>` : k ? `<span class="tk-k">${k}</span>` : n ? `<span class="tk-n">${n}</span>` : `<span class="tk-f">${f}</span>`);
}
export function code(tabs) {
  if (!Array.isArray(tabs)) tabs = [tabs];
  return `<div class="code" data-tabs><div class="ct">${tabs.map((t, i) => `<button class="${i ? "" : "on"}" data-file="${t.file || ""}">${t.label}</button>`).join("")}<span class="file">${tabs[0].file || ""}</span></div>
${tabs.map((t, i) => `<pre${i ? " hidden" : ""}><code>${hl(t.src.replace(/^\n/, ""), t.lang)}</code></pre>`).join("")}</div>`;
}
export const ghost = (n = 5) => `<div class="ghost-lines">${Array.from({ length: n }, (_, i) => `<i style="width:${70 + ((i * 37) % 30)}%"></i>`).join("")}</div>`;
