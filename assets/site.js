/* Interactions for the redesign mockup. Demos are simulated client-side; the
   landing page's network numbers are fetched live from mainnet RPC. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const B58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const rnd = (n) => Array.from({ length: n }, () => B58[(Math.random() * 58) | 0]).join("");
  const short = (s) => s.slice(0, 4) + "…" + s.slice(-4);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const store = {
    get: (k, d) => { try { return JSON.parse(localStorage.getItem("sx-" + k)) ?? d; } catch { return d; } },
    set: (k, v) => localStorage.setItem("sx-" + k, JSON.stringify(v)),
  };

  /* ---------- landing: reveal on scroll, card glow, timeline ---------- */
  const rvs = $$(".rv");
  if (rvs.length) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    rvs.forEach((el) => io.observe(el));
  }
  $$(".lp-job, .lp-route").forEach((c) => c.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px"); c.style.setProperty("--my", e.clientY - r.top + "px");
  }));

  /* ---------- nav mega menu ---------- */
  $$(".mainnav > div.has").forEach((d) => {
    let t;
    d.addEventListener("mouseenter", () => { clearTimeout(t); d.classList.add("open"); });
    d.addEventListener("mouseleave", () => { t = setTimeout(() => d.classList.remove("open"), 120); });
  });

  /* ---------- design notes drawer ---------- */
  const dr = $(".drawer");
  if (dr) {
    $(".notes-btn").onclick = () => dr.classList.add("open");
    $(".drawer .x").onclick = () => dr.classList.remove("open");
    document.addEventListener("keydown", (e) => e.key === "Escape" && dr.classList.remove("open"));
  }

  /* ---------- code tabs ---------- */
  $$(".code[data-tabs]").forEach((c) => {
    const btns = $$(".ct button", c), pres = $$("pre", c);
    btns.forEach((b, i) => (b.onclick = () => {
      btns.forEach((x, j) => x.classList.toggle("on", i === j));
      pres.forEach((p, j) => (p.hidden = i !== j));
      const f = $(".ct .file", c); if (f) f.textContent = b.dataset.file || "";
    }));
  });

  /* ---------- TOC scroll spy ---------- */
  const tocLinks = $$(".toc a[href^='#']");
  if (tocLinks.length) {
    const hs = tocLinks.map((a) => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
    const spy = () => {
      let cur = hs[0];
      hs.forEach((h) => { if (h.getBoundingClientRect().top < 160) cur = h; });
      tocLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + cur?.id));
    };
    addEventListener("scroll", spy, { passive: true }); spy();
  }

  /* ---------- checklists persist ---------- */
  $$(".check input").forEach((i) => {
    const k = "chk-" + i.id; i.checked = store.get(k, false);
    i.onchange = () => store.set(k, i.checked);
  });

  /* ---------- shared test wallet ---------- */
  const wallet = () => store.get("wallet", null);
  const setWallet = (w) => store.set("wallet", w);

  /* ---------- wallet modal ---------- */
  function approve({ site, amount, to, fee = "Sponsored by store" }) {
    return new Promise((res) => {
      let m = $(".modal");
      if (!m) { m = document.createElement("div"); m.className = "modal"; document.body.appendChild(m); }
      m.innerHTML = `<div class="mb"><div class="site">${site} wants you to approve</div><h5>${amount}</h5>
        <div class="to">to ${to}</div>
        <div class="row"><span>From</span><b class="mono">${short(wallet().addr)} (test wallet)</b></div>
        <div class="row"><span>Network fee</span><b>${fee}</b></div>
        <div class="row"><span>Network</span><b>Devnet · test money</b></div>
        <div class="bt"><button data-v="0">Reject</button><button class="y" data-v="1">Approve</button></div></div>`;
      m.classList.add("show");
      $$("button", m).forEach((b) => (b.onclick = () => { m.classList.remove("show"); res(b.dataset.v === "1"); }));
    });
  }

  /* ---------- Payments · try it as a customer ---------- */
  const wd = $("#wallet-demo");
  if (wd) {
    const st = $$(".wstep", wd);
    const tx = $("#tx-out");
    const mark = (i) => st.forEach((s, j) => { s.classList.toggle("active", j === i); s.classList.toggle("done", j < i); });
    const paint = () => {
      const w = wallet();
      if (!w) return mark(0);
      $("[data-v=addr]", wd).innerHTML = `Address <b>${short(w.addr)}</b><br>Balance: ${w.usdc.toFixed(2)} USDC`;
      $("[data-a=create]", wd).disabled = true;
      $("[data-a=faucet]", wd).disabled = w.usdc > 0 && !w.paid;
      if (w.usdc > 0) $("[data-v=faucet]", wd).innerHTML = `<span class="ok">+10.00 USDC received</span><br>in 0.4 s`;
      if (w.paid) {
        $("[data-v=pay]", wd).innerHTML = `<span class="ok">✓ Sent 1.00 USDC</span>`;
        $("[data-v=done]", wd).innerHTML = `<span class="ok">✓ Confirmed in ${w.paid.ms} ms</span><br>Fee: $0.00 (store paid)`;
        $("[data-a=pay]", wd).disabled = true;
        fillTx(w); return mark(4);
      }
      mark(w.usdc > 0 ? 2 : 1);
    };
    const fillTx = (w) => {
      const p = w.paid;
      $("[data-t=sig]", tx).textContent = short(p.sig);
      $("[data-t=signer]", tx).textContent = short(w.addr);
      $("[data-t=from]", tx).textContent = short(w.ata);
      $("[data-t=to]", tx).textContent = short(p.storeAta);
      $("[data-t=ms]", tx).textContent = p.ms + " ms";
      tx.classList.add("show");
    };
    $("[data-a=create]", wd).onclick = async (e) => {
      e.target.textContent = "Creating…"; await sleep(500);
      setWallet({ addr: rnd(44), ata: rnd(44), usdc: 0 }); paint();
    };
    $("[data-a=faucet]", wd).onclick = async (e) => {
      e.target.textContent = "Requesting…"; await sleep(650);
      const w = wallet(); w.usdc = 10; delete w.paid; setWallet(w); e.target.textContent = "Get 10 test USDC"; paint();
    };
    $("[data-a=pay]", wd).onclick = async (e) => {
      const ok = await approve({ site: "demo-sticker-shop.dev", amount: "1.00 USDC", to: "Demo Sticker Shop" });
      if (!ok) return;
      e.target.textContent = "Sending…";
      const t0 = performance.now(); await sleep(380 + Math.random() * 80);
      const w = wallet(); w.usdc -= 1;
      w.paid = { sig: rnd(87), storeAta: rnd(44), ms: Math.round(performance.now() - t0) };
      setWallet(w); paint();
    };
    $("[data-a=reset]", wd).onclick = () => { localStorage.removeItem("sx-wallet"); location.reload(); };
    paint();
  }

  /* ---------- Payments · playground ---------- */
  const pg = $("#pg-checkout");
  if (pg) {
    const ta = $("textarea", pg), con = $(".console", pg), stage = $(".stage", pg);
    const log = (h) => { con.innerHTML += h + "<br>"; con.scrollTop = 1e9; };
    const run = () => {
      con.innerHTML = "";
      const src = ta.value;
      const name = (src.match(/name:\s*"([^"]*)"/) || [])[1];
      const amount = (src.match(/amount:\s*"([^"]*)"/) || [])[1];
      const wal = (src.match(/wallet:\s*"([^"]*)"/) || [])[1];
      if (!name || !amount || isNaN(+amount) || !wal) {
        log(`<span class="e">✗ Couldn't read merchant.name, amount or wallet. Check the config.</span>`); return;
      }
      log(`<span class="d">› compiled checkout.tsx</span>`);
      stage.innerHTML = `<div class="shop"><div class="art">🌞</div><b>${name}</b><span>Holographic sticker</span>
        <button id="pg-pay"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1.5" y="3.5" width="13" height="9" rx="2"/><path d="M1.5 6.5h13"/></svg> Pay ${(+amount).toFixed(2)} USDC</button></div>`;
      $("#pg-pay").onclick = async () => {
        let w = wallet();
        if (!w) { setWallet((w = { addr: rnd(44), ata: rnd(44), usdc: 10 })); log(`<span class="d">› created a test wallet for you (${short(w.addr)})</span>`); }
        if (w.usdc < +amount) { w.usdc += 10; setWallet(w); log(`<span class="d">› topped up 10 test USDC</span>`); }
        const ok = await approve({ site: name, amount: (+amount).toFixed(2) + " USDC", to: name });
        if (!ok) { log(`<span class="e">✗ payer rejected the request</span>`); return; }
        log(`<span class="d">› sending transaction…</span>`);
        const t0 = performance.now(); await sleep(360 + Math.random() * 90);
        const sig = rnd(87); w.usdc -= +amount; setWallet(w);
        log(`<span class="g">✓ onPaymentSuccess("${short(sig)}")</span> <span class="d">${Math.round(performance.now() - t0)} ms</span>`);
        const s = $("#pg-success"); s.classList.add("show");
        $("#pg-success [data-sig]").textContent = short(sig);
        store.set("first-success", true);
      };
      log(`<span class="g">✓ ready</span>. Click the button to pay with your test wallet.`);
    };
    $(".run", pg).onclick = run;
    ta.addEventListener("keydown", (e) => { if ((e.metaKey || e.ctrlKey) && e.key === "Enter") run(); });
    run();
  }

  /* ---------- APIs · 402 demo ---------- */
  const api = $("#api-demo");
  if (api) {
    const req = $(".req pre", api), res = $(".res pre", api), sb = $(".res .status", api);
    const set = (code, body) => { sb.className = "status s" + code; sb.textContent = code ? code + (code === 402 ? " Payment Required" : " OK") : "waiting"; res.textContent = body; };
    $("[data-a=call]", api).onclick = async () => {
      req.textContent = "GET /api/forecast?city=lisbon\nHost: demo-weather.dev";
      set(0, "…"); await sleep(300);
      set(402, JSON.stringify({ error: "payment_required", accepts: [{ scheme: "exact", network: "solana-devnet", asset: "USDC", maxAmountRequired: "0.01", payTo: "Wthr…9xQe" }] }, null, 2));
      $("[data-a=pay]", api).disabled = false;
    };
    $("[data-a=pay]", api).onclick = async (e) => {
      if (!wallet()) setWallet({ addr: rnd(44), ata: rnd(44), usdc: 10 });
      const ok = await approve({ site: "demo-weather.dev", amount: "0.01 USDC", to: "Weather API · 1 request", fee: "Paid by API (facilitator)" });
      if (!ok) return;
      const sig = rnd(87);
      req.textContent = `GET /api/forecast?city=lisbon\nHost: demo-weather.dev\nX-PAYMENT: eyJzaWduYXR1cmUiOiIke3Nob3J0KHNpZyl9Ii…`;
      set(0, "verifying payment…"); await sleep(420);
      set(200, JSON.stringify({ city: "Lisbon", tomorrow: { high_c: 24, low_c: 16, sky: "clear" }, paid: { amount: "0.01 USDC", tx: short(sig) } }, null, 2));
      e.target.disabled = true;
      const n = +(api.dataset.calls || 0) + 1; api.dataset.calls = n;
      $("[data-v=calls]", api).textContent = `${n} paid call${n > 1 ? "s" : ""} · total ${(n * 0.01).toFixed(2)} USDC · fees $0.00`;
    };
  }

  /* ---------- APIs · server playground (simulated run) ---------- */
  const pga = $("#pg-api");
  if (pga) {
    const con = $(".console", pga), ta = $("textarea", pga);
    const log = (h) => { con.innerHTML += h + "<br>"; con.scrollTop = 1e9; };
    $(".run", pga).onclick = async () => {
      con.innerHTML = "";
      const price = (ta.value.match(/price:\s*"\$?([\d.]+)"/) || [])[1];
      const route = (ta.value.match(/"(GET [^"]+)"/) || [])[1];
      if (!price || !route) { log(`<span class="e">✗ couldn't find a route and price in the config</span>`); return; }
      log(`<span class="d">› server listening on :3000 (devnet)</span>`); await sleep(250);
      log(`client → ${route} <span class="d">no payment</span>`); await sleep(250);
      log(`<span class="e">← 402 Payment Required · ${price} USDC</span>`); await sleep(350);
      log(`client signs ${price} USDC payment with its keypair`); await sleep(400);
      log(`client → ${route} <span class="d">X-PAYMENT: …</span>`); await sleep(350);
      log(`<span class="d">  facilitator verified + settled · 0.4 s</span>`); await sleep(150);
      log(`<span class="g">← 200 OK { "forecast": … }</span>`);
      $("#pga-success").classList.add("show");
    };
  }

  /* ---------- Tokenization · restricted asset demo ---------- */
  const tk = $("#token-demo");
  if (tk) {
    const out = $(".tk-out", tk);
    let bal = 100;
    const paint = () => ($("[data-v=bal]", tk).textContent = bal + " LSF");
    $$("[data-to]", tk).forEach((b) => (b.onclick = async () => {
      const ok = b.dataset.to === "ok";
      if (!wallet()) setWallet({ addr: rnd(44), ata: rnd(44), usdc: 10 });
      const yes = await approve({ site: "Lisbon Solar Fund", amount: "10 LSF", to: ok ? "Approved investor (KYC'd)" : "Unknown address", fee: "Sponsored by issuer" });
      if (!yes) return;
      out.className = "tk-out"; out.innerHTML = "Sending…"; await sleep(420);
      if (ok) {
        bal -= 10; paint();
        out.innerHTML = `<div class="success show"><div class="big"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 10.5l3.2 3.2L15 7"/></svg></div><div><b>Transfer confirmed</b><span>The receiver's token account was approved by the issuer, so the network allowed it. Signature ${short(rnd(87))}.</span></div></div>`;
      } else {
        out.innerHTML = `<div class="callout warn" style="margin:0"><svg class="ci" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 3l8 14H2z"/><path d="M10 8v4M10 14.5v.5"/></svg><div><p><b>Transaction failed: <code>Account is frozen</code></b></p><p>The receiver has no approved token account for LSF. Token accounts for this asset start <b>frozen</b> until the issuer approves them, so the Token program rejected the whole transaction. Nothing moved and your balance is unchanged. Your app didn't enforce this rule; the network did.</p></div></div>`;
      }
    }));
    paint();
  }

  /* ---------- Tokenization · create mint playground ---------- */
  const pgt = $("#pg-token");
  if (pgt) {
    const con = $(".console", pgt), ta = $("textarea", pgt);
    const log = (h) => { con.innerHTML += h + "<br>"; con.scrollTop = 1e9; };
    $(".run", pgt).onclick = async () => {
      con.innerHTML = "";
      const name = (ta.value.match(/name:\s*"([^"]*)"/) || [])[1] || "Untitled";
      const sym = (ta.value.match(/symbol:\s*"([^"]*)"/) || [])[1] || "TKN";
      const exts = ["metadata", "pausable", "defaultFrozen", "permanentDelegate"].filter((x) => new RegExp(x + "\\s*[:(]").test(ta.value));
      log(`<span class="d">› building transaction · Token-2022 program</span>`); await sleep(300);
      const mint = rnd(44);
      log(`creating mint account <b>${short(mint)}</b> <span class="d">(rent deposit 0.0045 SOL, sponsored)</span>`); await sleep(350);
      exts.forEach((e) => log(`  + extension <b>${e}</b>`)); await sleep(300);
      log(`<span class="g">✓ mint created · ${name} (${sym})</span>`); await sleep(250);
      log(`minting 1,000 ${sym} to your test wallet… <span class="g">✓</span>`);
      const s = $("#pgt-success"); s.classList.add("show"); $("[data-mint]", s).textContent = short(mint);
    };
  }

  /* ---------- Network numbers, ticker and feed (generated at the real network rate) ---------- */
  const RATE = 1390; // user transactions per second, mainnet average (Q3 2026: ~120M/day)
  const fmt = (n) => n.toLocaleString("en-US");
  const amount = () => { const r = Math.random(); const v = r < .55 ? 1 + Math.random() * 60 : r < .85 ? 60 + Math.random() * 900 : 900 + Math.random() * 25000; return v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
  const fee = () => "$0.000" + (5 + Math.floor(Math.random() * 5));
  const tps = $("[data-k=tps]"), today = $("[data-k=today]"), slot = $("[data-k=slot]");
  if (today) {
    const tick = () => {
      const d = new Date(), secs = (d - Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())) / 1000;
      today.textContent = fmt(Math.floor(secs * RATE));
    };
    tick(); setInterval(tick, 120);
  }
  if (tps) setInterval(() => { tps.textContent = fmt(Math.round(RATE * (0.93 + Math.random() * 0.14))); if (slot) slot.innerHTML = (0.38 + Math.random() * 0.04).toFixed(2) + "<small>s</small>"; }, 2200);
  const tkr = $("#ticker");
  if (tkr) {
    const items = Array.from({ length: 22 }, () => `<span class="tk"><b>USDC</b><span class="amt">${amount()}</span><span class="mono">${short(rnd(87))}</span><em>confirmed in 0.${38 + Math.floor(Math.random() * 6)} s</em></span>`).join("");
    tkr.innerHTML = items + items;
  }
  const feed = $("#feed");
  if (feed) {
    let head = feed.querySelector(".row.head");
    const row = (age, isNew) => `<div class="row${isNew ? " new" : ""}"><span>${age}</span><span class="sig">${short(rnd(87))}</span><span class="ok">${amount()} USDC</span><span class="fee">${fee()}</span></div>`;
    feed.innerHTML = head.outerHTML + ["just now", "1s ago", "1s ago", "2s ago", "2s ago", "3s ago"].map((a) => row(a)).join("");
    head = feed.querySelector(".row.head");
    setInterval(() => {
      const rows = $$(".row:not(.head)", feed);
      rows.forEach((r, i) => { r.firstElementChild.textContent = i === 0 ? "1s ago" : Math.min(9, i) + "s ago"; r.classList.remove("new"); });
      head.insertAdjacentHTML("afterend", row("just now", true));
      const all = $$(".row:not(.head)", feed); if (all.length > 6) all[all.length - 1].remove();
    }, 1100);
  }
})();
