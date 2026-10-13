// Page content: docs IA, job paths, concept pages, and design notes.
import { I, concept, chip, h2, callout, cards, flow, fit, table, checklist, code, ghost, concepts, slug } from "./helpers.mjs";

/* ================================================================ paths */
// Each path lives at the top of its domain tab, like Stripe's "Accept a payment" in Payments.
export const paths = {
  payments: {
    intro: "docs/payments/checkout", hub: "docs/payments", label: "Payments", job: "Accept dollar payments", name: "Build a checkout", time: "~30 min", first: 1,
    steps: [
      ["docs/payments/checkout/try-it", "Pay as a customer"],
      ["docs/payments/checkout/browser", "Build it in the browser"],
      ["docs/payments/checkout/backend", "Confirm from your backend"],
      ["docs/payments/checkout/go-live", "Go live"],
    ],
  },
  apis: {
    intro: "docs/payments/paywall-api", hub: "docs/payments/pay-per-call", label: "Pay-per-call", job: "Charge per API call", name: "Paywall an endpoint", time: "~30 min", first: 1,
    steps: [
      ["docs/payments/paywall-api/try-it", "Call a paid API"],
      ["docs/payments/paywall-api/browser", "Paywall it in the browser"],
      ["docs/payments/paywall-api/server", "Add it to your server"],
      ["docs/payments/paywall-api/go-live", "Go live"],
    ],
  },
  tokenization: {
    intro: "docs/assets/issue-asset", hub: "docs/assets", label: "Tokenized asset", job: "Issue a tokenized asset", name: "Issue an asset", time: "~45 min", first: 1,
    steps: [
      ["docs/assets/issue-asset/try-it", "Hold a restricted asset"],
      ["docs/assets/issue-asset/browser", "Create it in the browser"],
      ["docs/assets/issue-asset/local", "Run it from your machine"],
      ["docs/assets/issue-asset/go-live", "Go live"],
    ],
  },
};

/* ================================================================= tabs */
// Domain tabs (Stripe / Circle / Coinbase pattern), named after the three pieces of
// internet capital markets: money, assets, markets. Then the shared core.
export const tabs = [
  { id: "start", label: "Start here", icon: I.home, href: "docs" },
  { id: "payments", label: "Payments", icon: I.card, href: "docs/payments" },
  { id: "assets", label: "Assets", icon: I.layers, href: "docs/assets" },
  { id: "markets", label: "Markets", icon: I.chart, href: "docs/markets" },
  { sep: true },
  { id: "concepts", label: "How Solana works", icon: I.cube, href: "docs/concepts" },
  { id: "resources", label: "Resources", icon: I.wrench, href: "docs/resources" },
  { id: "reference", label: "API", icon: I.book, href: "docs/reference" },
  { id: "videos", label: "Video tutorials", icon: I.play, href: "https://solana.com/docs/video-guides", ext: true },
];

/* ============================================================ sidebars */
const guide = (p, t, kids) => ({ p, t, kids });
export const sidebars = {
  start: [
    { p: "docs", t: "Start here" },
    { p: "docs/use-cases", t: "All use cases" },
    { p: "docs/from-ethereum", t: "Coming from Ethereum" },
    { h: "Build your own" },
    { p: "docs/programs", t: "Write onchain programs" },
    { h: "About this mockup" },
    { p: "docs/research", t: "Docs Research" },
  ],
  payments: [
    { p: "docs/payments", t: "Overview" },
    { h: "Build it" },
    { path: "payments" },
    { path: "apis" },
    { h: "Guides" },
    guide("docs/payments/send", "Send payments", [["docs/payments/send/basic", "Basic payment"], ["docs/payments/send/memo", "Payment with memo"], ["docs/payments/send/verify-address", "Verify an address"], ["docs/payments/send/processing", "Payment processing"]]),
    guide("docs/payments/accept", "Accept payments", [["docs/payments/accept/solana-pay", "Solana Pay"], ["docs/payments/accept/verification", "Verification tools"], ["docs/payments/accept/indexing", "Indexing & webhooks"]]),
    { p: "docs/payments/subscriptions", t: "Subscriptions" },
    { p: "docs/payments/payouts", t: "Payouts & disbursements" },
    guide("docs/payments/pay-per-call", "Pay-per-call & agents", [["docs/payments/pay-per-call/x402", "How x402 works"], ["docs/payments/pay-per-call/agents", "Agents that pay"], ["docs/payments/pay-per-call/mpp", "Machine payments (MPP)"], ["docs/payments/pay-per-call/pay-sh", "pay.sh"]]),
    { p: "docs/payments/privacy", t: "Private payments" },
    guide("docs/payments/advanced", "Advanced", [["docs/payments/advanced/deferred", "Deferred execution"], ["docs/payments/advanced/spend-permissions", "Spend permissions"]]),
    { h: "Tools" },
    { p: "docs/payments/tools/commerce-kit", t: "Commerce Kit" },
    { p: "docs/payments/tools/kora", t: "Kora (fee sponsorship)" },
    { p: "docs/payments/tools/solana-pay", t: "Solana Pay" },
    { p: "docs/payments/pay-per-call/facilitator", t: "x402 facilitator" },
  ],
  assets: [
    { p: "docs/assets", t: "Overview" },
    { h: "Build it" },
    { path: "tokenization" },
    { h: "Tokenization" },
    { p: "docs/tokenization/token-acl", t: "Allowlists (Token ACL)" },
    { p: "docs/tokenization/attestations", t: "KYC with Attestations" },
    { p: "docs/tokenization/nav-strikes", t: "NAV strikes for funds" },
    { h: "Tokens" },
    guide("docs/tokens/basics", "Token basics", [["docs/tokens/basics/create-mint", "Create a mint"], ["docs/tokens/basics/mint", "Mint tokens"], ["docs/tokens/basics/transfer", "Transfer tokens"], ["docs/tokens/basics/freeze", "Freeze & thaw"], ["docs/tokens/basics/authorities", "Set authorities"]]),
    guide("docs/tokens/extensions", "Token extensions", [["docs/tokens/extensions/metadata", "Metadata"], ["docs/tokens/extensions/pausable", "Pausable"], ["docs/tokens/extensions/default-state", "Default account state"], ["docs/tokens/extensions/permanent-delegate", "Permanent delegate"], ["docs/tokens/extensions/transfer-hook", "Transfer hook"], ["docs/tokens/extensions/confidential", "Confidential transfers"]]),
    { p: "docs/tokens/verify-token", t: "Verify a token" },
    { h: "NFTs & game items" },
    { p: "docs/tokens/metaplex", t: "NFTs with Metaplex" },
    { p: "docs/assets/games", t: "Let players own items" },
  ],
  markets: [
    { p: "docs/markets", t: "Overview" },
    { h: "Guides" },
    { p: "docs/markets/exchange", t: "Build an exchange" },
    { p: "docs/markets/dvp", t: "Delivery vs payment" },
    { p: "docs/markets/mev", t: "MEV protection" },
    { p: "docs/markets/swqos", t: "Stake-weighted QoS" },
  ],
  concepts: (() => {
    const cats = {};
    for (const [k, c] of Object.entries(concepts)) (cats[c.cat] ||= []).push(k);
    return [{ p: "docs/concepts", t: "Overview & coverage" }, ...Object.entries(cats).flatMap(([cat, ks]) => [{ h: cat }, ...ks.map((k) => ({ p: `docs/concepts/${slug(k)}`, t: concepts[k].name }))])];
  })(),
  resources: [
    { p: "docs/resources", t: "Overview" },
    { h: "Set up" },
    { p: "docs/resources/agents", t: "Build with AI coding agents" },
    { p: "docs/resources/setup", t: "Set up your machine" },
    { p: "docs/resources/cli", t: "Solana CLI" },
    { h: "Programs" },
    { p: "docs/programs", t: "Write onchain programs" },
    { p: "docs/programs/first-program", t: "First program in the browser" },
    { p: "docs/programs/anchor", t: "Anchor framework" },
    { p: "docs/programs/testing", t: "Testing programs" },
    { p: "docs/programs/deploying", t: "Deploying" },
    { p: "docs/programs/idls", t: "IDLs & Codama clients" },
    { h: "Build apps" },
    { p: "docs/resources/frontend", t: "React & Next.js" },
    guide("docs/resources/tools", "Developer tools", [["docs/resources/tools/surfpool", "Surfpool"], ["docs/resources/tools/litesvm", "LiteSVM"], ["docs/resources/tools/microscope", "Microscope"], ["docs/resources/tools/keychain", "Keychain"], ["docs/resources/tools/private-channels", "Private Channels"]]),
    { h: "Ship" },
    { p: "docs/resources/production", t: "Production readiness" },
  ],
  reference: [
    { p: "docs/reference", t: "Overview" },
    guide("docs/reference/rpc", "RPC methods", [["docs/reference/rpc/http", "HTTP methods"], ["docs/reference/rpc/websocket", "WebSocket methods"], ["docs/reference/rpc/providers", "RPC providers"]]),
    guide("docs/reference/sdks", "SDKs", [["docs/reference/sdks/typescript", "TypeScript (Kit)"], ["docs/reference/sdks/rust", "Rust"], ["docs/reference/sdks/python", "Python"]]),
  ],
};

/* ====================================================== shared snippets */
const stepper = () => "%%STEPPER%%"; // replaced by build with the path stepper
const next = (href, label, sub) => `<div class="pcard" style="grid-template-columns:1fr auto"><div><div class="k">Next step</div><h3>${label}</h3><p>${sub}</p></div><a class="btnd" href="@/${href}/">Continue ${I.arrow}</a></div>`;
const pathCard = (key, blurb) => {
  const p = paths[key];
  return `<div class="pcard"><div><div class="k">Build it · ${p.steps.length} steps · ${p.time}</div><h3>${p.name}</h3><p>${blurb}</p>
<div class="steps">${p.steps.map(([, t], i) => `<span class="${i === p.first ? "s" : ""}">${i + 1}. ${t}${i === p.first ? " ★" : ""}</span>`).join("")}</div></div>
<a class="btnd purple" href="@/${p.steps[0][0]}/">Start building ${I.arrow}</a></div>`;
};
const liveFeed = () => `<div class="feed light" id="feed"><div class="row head"><span>Age</span><span>USDC transfer</span><span>Amount</span><span>Fee</span></div></div>`;
const N = (t, h) => ({ t, h });

/* ================================================================ pages */
export const pages = {};
const page = (p, o) => (pages[p] = { path: p, ...o });

/* ------------------------------------------------------------ START */
page("docs", {
  tab: "start", title: "Start here", wide: true,
  desc: "Pick a guide for what you're building. Each one starts in your browser, ends running in your own code, and explains the Solana concepts it uses along the way.",
  body: () => `
<div class="dpick">
  <a href="@/docs/payments/checkout/"><span class="di">${I.card}</span><h3>Accept dollar payments that settle in seconds</h3><p>Take USDC (digital dollars) from anyone. Money arrives in under a second for less than a cent, with no percentage fee and no chargebacks.</p><div class="dm"><span>First result ~5 min</span><b>Build a checkout →</b></div></a>
  <a href="@/docs/payments/paywall-api/"><span class="di">${I.api}</span><h3>Charge a few cents per API call</h3><p>Price each request at a cent or less. People's apps and AI agents pay inline over HTTP, with no signup, API key or invoice.</p><div class="dm"><span>First result ~5 min</span><b>Paywall an endpoint →</b></div></a>
  <a href="@/docs/assets/issue-asset/"><span class="di">${I.layers}</span><h3>Issue a tokenized asset with compliance controls</h3><p>A fund share, point or real-world asset, with an approval list and a pause switch enforced by the network.</p><div class="dm"><span>First result ~10 min</span><b>Issue an asset →</b></div></a>
</div>
${cards([
  ["Trading & markets", "Exchanges, order flow, MEV protection.", "@/docs/markets/", "Guides"],
  ["Games & digital items", "Items players own and other apps can read.", "@/docs/assets/games/", "Guides"],
  ["Keep a shared record", "Write your own program when existing ones aren't enough.", "@/docs/programs/", "Guides"],
], "c3")}
${h2("Already know your way around?")}
${cards([
  ["How Solana works", "Accounts, transactions, programs and fees in depth.", "@/docs/concepts/"],
  ["RPC reference", "Every HTTP and WebSocket method.", "@/docs/reference/rpc/"],
  ["SDKs", "TypeScript, Rust, Python and community clients.", "@/docs/reference/sdks/"],
  ["Coming from Ethereum", "Map EVM concepts to Solana before you migrate.", "@/docs/from-ethereum/"],
])}
${h2("Build with AI coding agents")}
${callout(`<p><strong>Using Claude Code, Cursor or Codex?</strong> Add the Solana MCP server or install the official Solana skill so your agent knows the current SDKs. <a href="@/docs/resources/agents/">Set it up →</a></p>`)}
`,
  why: [
    N("change", "Today <code>/docs</code> opens with three cards: <i>Quick Start</i> (a Solana Playground course on accounts, PDAs and CPIs), <i>AI agents</i>, and <i>Core Concepts</i>. That's two concept gates and one tool. Here the docs front door is the same job picker as solana.com/developers, so someone arriving from search lands in the same place."),
    N("why", "Concepts and reference are still one click away under <b>Already know your way around?</b>. Crypto-native developers lose nothing."),
    N("why", "The AI-agent card stays. More and more developers arrive through their coding agent, and that card is about tooling, not concepts."),
  ],
});
page("docs/resources/agents", { tab: "start", title: "Build with AI coding agents", desc: "Give your coding agent current Solana knowledge with the MCP server or the official skill.", stub: { was: "/docs/intro/coding-with-agents" } });
page("docs/resources/setup", { tab: "start", title: "Set up your machine", desc: "Install the Solana CLI, Anchor and Surfpool when you're ready to write programs or run a local network. None of the job paths need this.", stub: { was: "/docs/intro/installation" },
  why: [N("change", "This was step 2 of <i>Getting Started</i>. The paths now link here as optional from their <i>run it from your machine</i> step, because the payments and API paths only need <code>npm install</code> and a URL.")] });
page("docs/from-ethereum", { tab: "start", title: "Coming from Ethereum", desc: "How EVM concepts map onto Solana: accounts vs contract storage, programs vs contracts, fees and finality.", stub: { was: "/developers/evm-to-svm" } });

/* ------------------------------------------------------------ PAYMENTS */
page("docs/payments/checkout", {
  tab: "payments", title: "Accept dollar payments that settle in seconds", pathIntro: "payments",
  desc: "Take USDC, a digital dollar, from anyone with a wallet. You can use the money in under a second, the fee is a fraction of a cent, and there are no chargebacks.",
  body: () => `
${flow([["Request", "amount + order"], ["Approve", "customer's wallet"], ["Settle", "~0.4 s on Solana"], ["Verify", "your server checks"], ["Ship", "fulfil the order"]])}
${pathCard("payments", "Take a 1 USDC payment through a checkout button and confirm it from your own server. The first payment happens in your browser, with nothing to install.")}
${h2("Is this the right tool?")}
<p>Most teams compare this with cards, so here is that comparison, for a $20 sale:</p>
${table(["", "Cards (e.g. Stripe)", "Bank transfer", "USDC on Solana"], [
  ["Fee", "~$0.88 (2.9% + 30¢)", "$0–$30", "<strong>~$0.001</strong>"],
  ["Money usable by you", "~2 business days", "1–5 days", "<strong>&lt; 1 second</strong>"],
  ["Chargebacks", "Yes", "Rare", "No. Refunds are a payment you send back."],
  ["Works across borders", "With FX fees", "Slow, costly", "Same as domestic"],
  ["Your customer needs", "A card", "A bank account", "A wallet holding USDC"],
], 3)}
${fit(["You sell across borders, or to people without cards", "Your margins or ticket sizes are small", "You want instant payouts or automatic revenue splits"],
     ["Your customers won't use a wallet and you won't onboard them. Keep cards, or add an on-ramp", "You need card-style buyer protection", "You haven't checked how your jurisdiction treats stablecoins"])}
${concept("fees")}
${h2("Already know what you need?")}
${cards([
  ["Send payments", "Transfers, memos, address checks and processing at scale.", "@/docs/payments/send/"],
  ["Accept payments", "Checkout flows, Solana Pay, verification and indexing.", "@/docs/payments/accept/"],
  ["Subscriptions", "Recurring charges with delegated spending limits.", "@/docs/payments/subscriptions/"],
  ["Payouts & disbursements", "Pay users, vendors or employees in bulk.", "@/docs/payments/payouts/"],
])}
${callout(`<p>Moving real money? Read <a href="@/docs/resources/production/">Production readiness</a> before you launch. It covers RPC infrastructure, confirmation, monitoring and key management.</p>`)}
`,
  why: [
    N("change", "<b>Where this lives.</b> The path sits at the top of the <i>Payments</i> tab, the way Stripe's Payments sidebar opens with “Accept a payment”. That keeps the path, its guides and its tools in one sidebar, so following a link never swaps tabs. Start here links to it from the job picker."),
    N("why", "This page covers stages 1 and 2 of the template: <b>the job</b> in the developer's words, then an honest <b>fit check</b>. The title is the job (“Accept dollar payments”), not the technology."),
    N("change", "Today's /docs/payments opens with <i>“New to how balances and ownership work on Solana? Read Core Concepts, then review Assets”</i>, which is a concept gate in the second paragraph. That line is gone. The concepts appear inside the steps instead."),
    N("change", "Today's <i>Why Solana</i> list is all upsides. The fit check keeps those facts but adds a comparison against cards and a <b>Not the right fit</b> column. MLH participants compared Solana with Stripe, so we answer that comparison in its own terms."),
    N("why", "The guides (send, accept, subscriptions…) are unchanged and sit below the paths in the same Payments sidebar. The path is a linear 30-minute tutorial. It doesn't duplicate the guides; it links into them at the end."),
  ],
});

page("docs/payments/checkout/try-it", {
  tab: "payments", pathKey: "payments", title: "Pay as a customer",
  desc: "Before writing any code, pay for something the way your customers will. There's nothing to install: this page creates a test wallet for you.",
  body: () => `${stepper()}
<div class="demo" id="wallet-demo"><div class="dh"><span class="dots"><i></i><i></i><i></i></span><span>Demo Sticker Shop</span><span class="net">${"devnet · test money"}</span></div><div class="db">
<div class="wsteps">
  <div class="wstep active"><span class="wn">A</span><b>Get a wallet</b><p>We'll make a test wallet in this browser tab.</p><div class="wv" data-v="addr">No wallet yet</div><button data-a="create" style="margin-top:10px">Create test wallet</button></div>
  <div class="wstep"><span class="wn">B</span><b>Get test dollars</b><p>Receive 10 test USDC, free.</p><div class="wv" data-v="faucet">Balance: 0 USDC</div><button data-a="faucet" style="margin-top:10px">Get 10 test USDC</button></div>
  <div class="wstep"><span class="wn">C</span><b>Buy a sticker</b><p>Approve a 1 USDC payment to the shop.</p><div class="wv" data-v="pay">🌞 Holographic sticker · 1.00 USDC</div><button data-a="pay" style="margin-top:10px">Buy for 1 USDC</button></div>
  <div class="wstep"><span class="wn">D</span><b>Paid</b><p>The shop has the money.</p><div class="wv" data-v="done">Waiting for payment…</div><button data-a="reset" style="margin-top:10px;background:#fff;color:#111;border:1px solid #e4e4e7">Start over</button></div>
</div>
<div class="txcard" id="tx-out"><div class="th"><span>Your transaction · devnet</span><a href="#" style="color:#7c3aed">Open in Explorer ↗</a></div>
  <div class="tr"><span>Signature</span><span class="mono"><b data-t="sig"></b><span class="an">← its ID. Your server will look the payment up by this.</span></span></div>
  <div class="tr"><span>Status</span><span><span style="color:#0a8f5a;font-weight:500">Confirmed</span> in <span data-t="ms"></span><span class="an">← the network agreed it happened; it can't half-happen</span></span></div>
  <div class="tr"><span>Signed by</span><span class="mono"><span data-t="signer"></span><span class="an">← you, when you clicked Approve</span></span></div>
  <div class="tr"><span>Transfer</span><span>1.00 USDC · <span class="mono" data-t="from"></span> → <span class="mono" data-t="to"></span><span class="an">← from your USDC account to the shop's USDC account (see token accounts below)</span></span></div>
  <div class="tr"><span>Network fee</span><span>0.000005 SOL (~$0.001), paid by the shop<span class="an">← you only needed dollars</span></span></div>
</div></div></div>
<p>That's the whole customer experience. One approval, and the shop had the money in well under a second. You used ${chip("clusters", "devnet")}, a test network with play money, so nothing here is real. The code is the same on mainnet.</p>
${concept("wallet")}
${h2("What just happened")}
<p>Your click became a transaction. The panel above (it appears after step D) is the real anatomy of a payment: an ID, who signed it, what moved, and the fee.</p>
${concept("transaction")}
${concept("tokenAccount")}
${h2("Meanwhile, on mainnet")}
<p>Real businesses are doing exactly this on mainnet:</p>
${liveFeed()}
${next("docs/payments/checkout/browser", "Build the checkout in your browser", "Edit the code behind the button you just used, and take your first payment with it.")}
`,
  why: [
    N("why", "Principle 4, <b>use it, then show it live</b>. The developer goes through the product as a customer before seeing any code, then reads <i>their own</i> transaction, then sees the real network doing the same thing. The Explorer is taught on a transaction they made, which means more than a sample one would."),
    N("risk", "<b>Principles 3 and 4 pull against each other.</b> Receiving a stablecoin normally means installing a wallet app, which is an install before first success. This page uses an <b>in-page devnet wallet</b> (a burner key in browser storage) plus a faucet. That's a hard dependency for the Playground team: a hosted devnet USDC faucet that won't rate-limit a focus group. <i>Connect your own wallet</i> should be an option, never the default."),
    N("why", "Three concepts are introduced, each in two sentences with a web2 analogy: wallet, transaction, token account. Devnet appears only as an inline chip. Every card links to the matching concept page, which shows the same text."),
    N("why", "The shop pays the network fee here, so a first-time customer never has to hear about SOL. The production version of this decision is taught in <i>Go live</i> (fee sponsorship)."),
  ],
});

page("docs/payments/checkout/browser", {
  tab: "payments", pathKey: "payments", title: "Build the checkout in your browser",
  desc: "Here's the code behind the button you just used. Change it, run it, and pay with your test wallet. This is your first working Solana app.",
  body: () => `${stepper()}
<div class="demo" id="pg-checkout"><div class="pg">
<div class="ed"><div class="eh">checkout.tsx <button class="run">${I.play} Run</button></div><textarea spellcheck="false">import { PaymentButton } from "@solana-commerce/kit";

export default function Checkout() {
  return (
    &lt;PaymentButton
      config={{
        merchant: {
          name: "My Sticker Shop",   // try changing this
          wallet: "8f3kVQz1wSHop1111111111111111111111111111",
        },
        mode: "fixed",
        amount: "1.00",              // and this
        currency: "USDC",
      }}
      onPaymentSuccess={(signature) =&gt; {
        console.log("paid", signature);
      }}
    /&gt;
  );
}</textarea></div>
<div class="pv"><div class="eh">Preview · devnet</div><div class="stage"></div><div class="console"></div></div>
</div></div>
<div class="success" id="pg-success"><div class="big">${I.check}</div><div><b>You've taken your first payment with code you wrote.</b><span>Signature <span class="mono" data-sig></span>. Next, make your server trust it.</span></div></div>
${h2("What the code is doing")}
<ul>
<li><code>merchant.wallet</code> is the ${chip("wallet", "wallet address")} that payments land in. Anyone can send to it, and only the holder of its key can move money out.</li>
<li><code>PaymentButton</code> builds a ${chip("transaction")} for the chosen amount, asks the payer's wallet to sign it, and sends it to the network.</li>
<li><code>onPaymentSuccess</code> gets back the transaction's <strong>signature</strong>.</li>
</ul>
${concept("signature")}
${callout(`<p><strong>Don't ship orders from this callback alone.</strong> Anything that runs in the browser can be faked. In the next step your server looks the signature up on the network and checks the amount itself.</p>`, "warn")}
${h2("Prefer another framework?")}
<p>Commerce Kit works in any React app. For Vue, Svelte or plain JavaScript, build the same transaction with <a href="@/docs/reference/sdks/typescript/">@solana/kit</a>; see <a href="@/docs/payments/send/basic/">Basic payment</a>.</p>
${next("docs/payments/checkout/backend", "Confirm payments from your backend", "Run a verify endpoint on your own machine and only ship orders the network has confirmed.")}
`,
  why: [
    N("why", "<b>This is the first-success moment</b>, about 5 minutes from landing, with nothing to read, install or decide first. It's built on the Commerce Kit playground that already exists (<code>launch.solana.com/products/commercekit/playground</code>)."),
    N("change", "Today's quickstart, <i>“Quickstart: accept a payment”</i>, opens with <i>“You need Node.js 20+, a React or Next.js app…”</i> and <code>pnpm add</code>, and the browser playground sits <i>below</i> that. The single biggest content change in the pilot is flipping that order."),
    N("why", "Only the concepts this code touches show up here. The address and transaction were already introduced, so they appear as chips, and the signature gets its card now because this is the first time the developer handles one."),
    N("why", "The warning callout sets up the next step, so the path explains why step 3 exists before the developer gets there."),
  ],
});

page("docs/payments/checkout/backend", {
  tab: "payments", pathKey: "payments", title: "Confirm payments from your backend",
  desc: "Your server should ship the order only after it has checked the payment on the network itself. Run this from your own machine against devnet.",
  body: () => `${stepper()}
${h2("1. Install the SDK")}
<p>No CLI and no local network. One package and a URL:</p>
${code({ label: "npm", lang: "sh", src: "npm install @solana/kit\necho 'RPC_URL=https://api.devnet.solana.com' >> .env.local" })}
${concept("rpc")}
${h2("2. Add a verify endpoint")}
<p>Given an order and the signature from the checkout, fetch the transaction from the network and check that it really paid <em>you</em>, in USDC, the right amount, for <em>this</em> order:</p>
${code([
  { label: "Next.js", file: "app/api/orders/[id]/confirm/route.ts", src: `
import { createSolanaRpc, signature as toSignature } from "@solana/kit";
import { findTransfer } from "./lib/payments"; // ~20 lines, see Verification tools

const rpc = createSolanaRpc(process.env.RPC_URL!);

export async function POST(req: Request, { params }) {
  const { signature } = await req.json();
  const order = await db.orders.get(params.id);

  const tx = await rpc.getTransaction(toSignature(signature), {
    commitment: "confirmed",          // see "Confirmation & finality" below
    encoding: "jsonParsed",
    maxSupportedTransactionVersion: 0,
  }).send();

  if (!tx || tx.meta?.err) return Response.json({ paid: false }, { status: 402 });

  const paid = findTransfer(tx, { to: STORE_USDC_ACCOUNT, mint: USDC_MINT, reference: order.reference });
  if (!paid || paid.amount !== order.totalUsdc) return Response.json({ paid: false }, { status: 402 });

  await db.orders.markPaidOnce(order.id, signature); // a signature can only pay once
  return Response.json({ paid: true });
}` },
  { label: "Express", file: "server/confirm.ts", src: `
import express from "express";
import { createSolanaRpc, signature as toSignature } from "@solana/kit";

const rpc = createSolanaRpc(process.env.RPC_URL);
const app = express().use(express.json());

app.post("/orders/:id/confirm", async (req, res) => {
  const order = await db.orders.get(req.params.id);
  const tx = await rpc.getTransaction(toSignature(req.body.signature), {
    commitment: "confirmed", encoding: "jsonParsed", maxSupportedTransactionVersion: 0,
  }).send();
  const paid = tx && !tx.meta?.err && findTransfer(tx, { to: STORE_USDC_ACCOUNT, mint: USDC_MINT, reference: order.reference });
  if (!paid || paid.amount !== order.totalUsdc) return res.status(402).json({ paid: false });
  await db.orders.markPaidOnce(order.id, req.body.signature);
  res.json({ paid: true });
});` },
  { label: "Python", file: "confirm.py", lang: "py", src: `
from solana.rpc.api import Client
from solders.signature import Signature

rpc = Client(os.environ["RPC_URL"])

def confirm(order_id: str, signature: str) -> bool:
    order = db.orders.get(order_id)
    tx = rpc.get_transaction(Signature.from_string(signature), "jsonParsed",
                             commitment="confirmed", max_supported_transaction_version=0).value
    if tx is None or tx.transaction.meta.err:
        return False
    paid = find_transfer(tx, to=STORE_USDC_ACCOUNT, mint=USDC_MINT, reference=order.reference)
    if not paid or paid.amount != order.total_usdc:
        return False
    return db.orders.mark_paid_once(order.id, signature)  # a signature can only pay once` },
])}
${concept("commitment")}
${h2("3. Call it from the checkout")}
${code({ label: "checkout.tsx", file: "checkout.tsx", src: `
onPaymentSuccess={async (signature) => {
  const r = await fetch("/api/orders/" + order.id + "/confirm", {
    method: "POST", body: JSON.stringify({ signature }),
  });
  if ((await r.json()).paid) router.push("/thanks");
}}` })}
${h2("4. Test it")}
<p>Pay with your test wallet from the previous step, then call the endpoint directly with that signature:</p>
${code({ label: "curl", lang: "sh", src: `curl -X POST localhost:3000/api/orders/demo/confirm \\
  -d '{"signature":"<your signature from step 2>"}'
# {"paid":true}` })}
${callout(`<p>Want the CLI, a local test network or Anchor? You don't need them for payments, but <a href="@/docs/resources/setup/">Set up your machine</a> covers them.</p>`)}
${next("docs/payments/checkout/go-live", "Go live", "Switch to mainnet, decide who pays network fees, and handle the edge cases real customers hit.")}
`,
  why: [
    N("why", "Stage 5 of the template, <b>plug it into your stack</b>. It runs on the developer's machine in their framework, and it carries the path's real engineering lesson: <b>never trust the client, verify on the network</b>. That's the step MLH participants said was missing (“examples ended with no next step”)."),
    N("why", "RPC and confirmation levels are introduced here because this is the first time they matter. Taught before step 2 they would have been noise."),
    N("change", "Installation (CLI, Anchor, Surfpool) is currently <i>Getting Started → Installation</i>. Here it's an optional link, because payments only need <code>npm install</code> and a URL."),
    N("risk", "The code is illustrative. The pilot needs a real, tested <code>findTransfer</code> helper (or a Commerce Kit server helper), so developers don't hand-parse transactions."),
  ],
});

page("docs/payments/checkout/go-live", {
  tab: "payments", pathKey: "payments", title: "Go live",
  desc: "Switch to mainnet, decide who pays network fees, and handle the edge cases real customers hit. Then pick where to go next.",
  body: () => `${stepper()}
${h2("Before you take real money")}
${checklist("pay-live", [
  ["Use a production RPC provider", "Public endpoints are rate-limited. See RPC providers."],
  ["Swap devnet values for mainnet ones", "The RPC URL and USDC mint address, from the table below."],
  ["Match payments to orders with a reference key", "Never match by amount alone, because two customers can pay $20 at once."],
  ["Handle expired and failed transactions", "Customers retry, and a transaction that isn't sent within ~60 s expires and needs rebuilding."],
  ["Use webhooks instead of polling", "Get notified when your USDC account receives funds. See Indexing & webhooks."],
  ["Decide who pays network fees", "See fee sponsorship below."],
])}
${concept("sponsorship")}
${concept("rent")}
${h2("Devnet vs mainnet values")}
${table(["", "Devnet (testing)", "Mainnet (real money)"], [
  ["RPC URL", "<code>https://api.devnet.solana.com</code>", "Your provider's URL"],
  ["USDC mint", "<code>4zMMC9sr…JncDU</code>", "<code>EPjFWdd5…TDt1v</code>"],
  ["Money", "Free test tokens", "Real USDC"],
])}
${h2("You built a working checkout")}
<p>You took a payment as a customer, built the button, and verified payments from your own server. From here:</p>
${cards([
  ["Next path: charge per API call", "Reuses everything you've learned, and adds paying from code instead of from a button.", "@/docs/payments/paywall-api/", "Next path"],
  ["Subscriptions", "Recurring charges with spending limits the customer controls.", "@/docs/payments/subscriptions/", "Go deeper"],
  ["Payouts & disbursements", "Send money back out: refunds, payroll, marketplace splits.", "@/docs/payments/payouts/", "Go deeper"],
  ["Solana School or a partner", "A guided program, or a team that has shipped Solana payments before.", "#", "Get help"],
])}
`,
  why: [
    N("why", "This is stages 5 (production) and 6 (go further) of the template. The template's six stages map onto <b>one overview page plus four steps</b>, so each sidebar entry is a page you can finish in one sitting."),
    N("why", "Fee sponsorship and rent show up here as concepts because they're production surprises. “Why does my customer need SOL?” and “why did my first transfer to a new customer cost extra?” are the two most common payments support questions."),
    N("why", "The path ends with the <b>next path first</b>, then deeper docs, then human help. A dead end at the end of a path counts as a bug."),
  ],
});

/* -------------------------------------------------------------- APIS */
page("docs/payments/paywall-api", {
  tab: "apis", title: "Charge a few cents per API call", pathIntro: "apis",
  desc: "Price each request at a cent or less. Clients, whether people's apps or AI agents, pay inline over HTTP, with no signup, API key or invoice.",
  body: () => `
${flow([["Request", "GET /api/forecast"], ["402", "price: $0.01"], ["Pay", "client signs"], ["Retry", "with payment"], ["200", "your data"]])}
${pathCard("apis", "Put a 1¢ price on an endpoint and have a client pay for it automatically. You'll see it work in the browser before you touch your server.")}
${h2("Is this the right tool?")}
${table(["", "Card billing", "Prepaid credits + API keys", "x402 on Solana"], [
  ["Smallest practical charge", "~$0.50", "A $5–$10 top-up", "<strong>~$0.001</strong>"],
  ["Client onboarding", "Account + card", "Signup + key + balance", "<strong>None.</strong> A wallet."],
  ["Works for AI agents", "No", "Only after a human sets it up", "Yes, natively"],
  ["Billing code you maintain", "Invoices, dunning", "A balance ledger", "None"],
], 3)}
${fit(["You want to price per request, per page or per second of compute", "Your clients are programs or AI agents, not people at a checkout", "You don't want to run signups, keys and balances"],
     ["You charge one flat monthly fee; use your existing billing", "Your buyers need invoices and net-30 terms", "Requests must answer in single-digit milliseconds even on the first call; use prepaid sessions instead"])}
${concept("fees")}
${h2("Guides")}
${cards([
  ["How x402 works", "The HTTP 402 flow, payment headers and facilitators.", "@/docs/payments/pay-per-call/x402/"],
  ["Agents that pay", "Give an AI agent a wallet with a spending limit.", "@/docs/payments/pay-per-call/agents/"],
])}
`,
  why: [
    N("why", "This path covers what today's nav calls <i>Agents and AI</i>, so it doesn't need its own Wave 1 path. Pay-per-call is the concrete job agents do with Solana."),
    N("change", "Today this content is split across <i>Payments → Agentic payments → x402</i>, <i>pay.sh</i> and <i>Resources → x402 facilitator</i>. Here it becomes one sub-section of Payments (x402 <i>is</i> payments) plus a path under Start here. The Docs Research found no precedent for a separate “APIs &amp; agents” tab."),
    N("why", "The fit check is honest about latency. The first paid request includes a settlement round-trip, so it's not for sub-10 ms SLAs without sessions."),
  ],
});
page("docs/payments/paywall-api/try-it", {
  tab: "apis", pathKey: "apis", title: "Call a paid API",
  desc: "Call a real paywalled endpoint from this page and watch the HTTP 402 flow happen: request, price, payment, data.",
  body: () => `${stepper()}
<div class="demo" id="api-demo"><div class="dh"><span class="dots"><i></i><i></i><i></i></span><span>demo-weather.dev · $0.01 per request</span><span class="net">devnet · test money</span></div><div class="db">
<div class="http"><div class="req"><div class="hh"><span>Request</span><span>client</span></div><pre>Press “Call the API” to send a request.</pre></div>
<div class="res"><div class="hh"><span>Response</span><span class="status s0">waiting</span></div><pre></pre></div></div>
<div class="http-actions"><button class="btnd" data-a="call">1 · Call the API</button><button class="btnd purple" data-a="pay" disabled>2 · Pay 0.01 USDC &amp; retry</button><span data-v="calls" style="margin-left:auto;align-self:center;font-size:13px;color:#62626b"></span></div>
</div></div>
<p>The first call got <code>402 Payment Required</code> with a price attached. Your test wallet paid 0.01 USDC, and the retry came back <code>200</code> with the data. That's the whole protocol: plain HTTP, plus a ${chip("transaction")} that settles in under a second.</p>
${concept("wallet")}
${concept("transaction")}
${h2("Why 402?")}
<p>HTTP has reserved status 402 “Payment Required” since 1997 without ever defining how to pay. <strong>x402</strong> is the open standard that fills that gap: the 402 response lists accepted payments, and the client retries with an <code>X-PAYMENT</code> header containing a signed payment. On Solana that payment costs a fraction of a cent, which is what makes 1¢ prices work.</p>
${next("docs/payments/paywall-api/browser", "Paywall an endpoint in your browser", "Write the server side: one middleware, a price and your wallet address.")}`,
  why: [N("why", "Same shape as the payments path: use it as a customer first. Here the “customer” is an HTTP client, so the developer sees raw requests and responses. That's the format web2 API developers already think in."),
        N("why", "Wallet and transaction are introduced again, using the same text as the payments path. Each path is a possible entry point, so <b>at most once per path</b> means once in each path, not once across the site.")],
});
page("docs/payments/paywall-api/browser", {
  tab: "apis", pathKey: "apis", title: "Paywall an endpoint in your browser",
  desc: "One middleware, a price and your wallet address. Run it, and a test client pays for each request.",
  body: () => `${stepper()}
<div class="demo" id="pg-api"><div class="pg">
<div class="ed"><div class="eh">server.ts <button class="run">${I.play} Run</button></div><textarea spellcheck="false">import express from "express";
import { paymentMiddleware } from "x402-express";

const app = express();

app.use(paymentMiddleware(
  "WthrQe9x1111111111111111111111111111111111",   // your wallet: payments land here
  {
    "GET /api/forecast": { price: "$0.01", network: "solana-devnet" },
  },
  { url: "https://facilitator.example.dev" },     // verifies + settles for you
));

app.get("/api/forecast", (req, res) =&gt;
  res.json({ city: "Lisbon", high_c: 24, sky: "clear" }));

app.listen(3000);</textarea></div>
<div class="pv"><div class="eh">Test client · devnet</div><div class="stage" style="place-items:start;padding:14px 16px;font-size:13px;color:#62626b">The test client calls your endpoint without paying, reads the price from the 402, signs a payment with its own keypair, and retries.</div><div class="console"></div></div>
</div></div>
<div class="success" id="pga-success"><div class="big">${I.check}</div><div><b>Your endpoint just got paid.</b><span>Change the price or route and run it again. Next, put it in your real server.</span></div></div>
${h2("What the code is doing")}
<ul><li>The first argument is your ${chip("wallet", "wallet address")}: where payments land.</li>
<li>The route map sets a price per endpoint. Requests without a valid payment get a <code>402</code> listing that price.</li>
<li>The <strong>facilitator</strong> checks the client's signed payment, submits it, and confirms it, so your server doesn't need to talk to the network itself.</li></ul>
${callout(`<p>The test client is a script with its own keypair, which is a wallet in code. That's how AI agents pay: they hold a wallet with a spending limit you set. See <a href="@/docs/payments/pay-per-call/agents/">Agents that pay</a>.</p>`)}
${next("docs/payments/paywall-api/server", "Add it to your server", "Install the middleware in your own app, choose a facilitator, and call it from a real client.")}`,
  why: [N("why", "The first success is the server side, because that's the developer's job here. The client is simulated so that nothing has to be installed."),
        N("risk", "This needs a <b>hosted devnet demo endpoint and facilitator</b> owned by the docs team. A third-party demo that disappears would break the path. The middleware API shown is illustrative and must match the SDK at launch.")],
});
page("docs/payments/paywall-api/server", {
  tab: "apis", pathKey: "apis", title: "Add it to your server",
  desc: "Install the middleware in your own app, pick a facilitator, and pay for your endpoint from a real client.",
  body: () => `${stepper()}
${h2("1. Install")}
${code({ label: "npm", lang: "sh", src: "npm install x402-express @solana/kit" })}
${h2("2. Protect your routes")}
${code([{ label: "Express", file: "server.ts", src: `
import { paymentMiddleware } from "x402-express";

app.use(paymentMiddleware(process.env.PAY_TO, {
  "GET /api/forecast": { price: "$0.01", network: process.env.NETWORK }, // "solana-devnet" → "solana"
  "POST /api/summarize": { price: "$0.05", network: process.env.NETWORK },
}, { url: process.env.FACILITATOR_URL }));` },
  { label: "Next.js", file: "middleware.ts", src: `
import { paymentMiddleware } from "x402-next";

export const middleware = paymentMiddleware(process.env.PAY_TO, {
  "/api/forecast": { price: "$0.01", network: process.env.NETWORK },
}, { url: process.env.FACILITATOR_URL });

export const config = { matcher: ["/api/:path*"] };` }])}
${h2("3. Pay from a client")}
${code({ label: "client.ts", file: "client.ts", src: `
import { wrapFetchWithPayment } from "x402-fetch";
import { createKeyPairSignerFromBytes } from "@solana/kit";

const signer = await createKeyPairSignerFromBytes(loadKey("client.json"));
const pay = wrapFetchWithPayment(fetch, signer, { maxPerRequest: "$0.05" });

const res = await pay("http://localhost:3000/api/forecast"); // handles the 402 for you
console.log(await res.json());` })}
${concept("rpc")}
${concept("commitment")}
<p>Facilitators usually settle at <em>confirmed</em>, which adds roughly half a second to the first paid request. For high-frequency clients, cache a short-lived session after the first payment.</p>
${next("docs/payments/paywall-api/go-live", "Go live", "Mainnet, pricing in USDC base units, and protecting unpaid routes from abuse.")}`,
  why: [N("why", "RPC and confirmation appear here, at the point where latency becomes a design decision for the API owner."),
        N("why", "The client example uses <code>maxPerRequest</code>. Spending limits are the first question every reviewer asks about agents paying.")],
});
page("docs/payments/paywall-api/go-live", {
  tab: "apis", pathKey: "apis", title: "Go live",
  desc: "Mainnet, a facilitator you trust, and protection for unpaid routes. Then where to go next.",
  body: () => `${stepper()}
${h2("Before you charge real money")}
${checklist("api-live", [
  ["Switch the network to mainnet", "Set <code>network: \"solana\"</code> and use a mainnet wallet you control."],
  ["Choose a facilitator", "Use a hosted one, or self-host. See x402 facilitator."],
  ["Rate-limit unpaid requests", "402 responses are cheap to send but still cost you a request."],
  ["Make paid requests idempotent", "Clients retry. The same payment must not be charged twice."],
  ["Log the payment signature with each request", "It's your receipt and your audit trail."],
])}
${concept("sponsorship")}
${h2("You paywalled an API")}
${cards([
  ["Agents that pay", "Give an AI agent a wallet and a budget.", "@/docs/payments/pay-per-call/agents/", "Next"],
  ["Accept dollar payments", "Add a human checkout next to your API.", "@/docs/payments/checkout/", "Next path"],
  ["Machine payments (MPP)", "Streaming and session-based payments.", "@/docs/payments/pay-per-call/mpp/", "Go deeper"],
  ["Kora", "Run your own fee payer.", "@/docs/payments/tools/kora/", "Tool"],
])}`,
});
page("docs/payments/pay-per-call/x402", { tab: "apis", title: "How x402 works", desc: "The HTTP 402 flow in detail: payment requirements, the X-PAYMENT header, verification and settlement.", stub: { was: "/docs/payments/agentic-payments/x402" } });
page("docs/payments/pay-per-call/agents", { tab: "apis", title: "Agents that pay", desc: "Give an AI agent a wallet with a spending limit, and let it pay for APIs on its own.", stub: { was: "/docs/payments/agentic-payments" } });
page("docs/payments/pay-per-call/mpp", { tab: "apis", title: "Machine payments (MPP)", desc: "Session- and stream-based payments between machines.", stub: { was: "/docs/payments/agentic-payments/mpp" } });
page("docs/payments/pay-per-call/pay-sh", { tab: "apis", title: "pay.sh", desc: "Pay for APIs from the command line.", stub: { was: "/docs/payments/pay-sh" } });
page("docs/payments/pay-per-call/facilitator", { tab: "apis", title: "x402 facilitator", desc: "Run or choose a facilitator that verifies and settles x402 payments.", stub: { was: "/docs/tools/x402-facilitator" } });

/* -------------------------------------------------------- TOKENIZATION */
page("docs/assets/issue-asset", {
  tab: "tokenization", title: "Issue a tokenized asset with compliance controls", pathIntro: "tokenization",
  desc: "Create a token for a fund share, a security, a point or a real-world asset, with metadata, an approval list and a pause switch that the network enforces on every transfer.",
  body: () => `
${flow([["Define", "name, rules"], ["Approve", "who may hold it"], ["Issue", "mint to holders"], ["Transfer", "under your rules"], ["Control", "pause · recover"]])}
${pathCard("tokenization", "Hold a restricted asset, see a transfer get blocked, then create your own with metadata, pause and approvals, and run it from your machine.")}
${h2("Is this the right tool?")}
${table(["", "Spreadsheet / transfer-agent database", "Token on Solana (Token-2022)"], [
  ["Who keeps the register", "You, reconciled with every partner", "<strong>One shared ledger everyone reads</strong>"],
  ["Transfers", "Business hours, T+1 or T+2", "<strong>24/7, ~0.4 s</strong>"],
  ["Rules enforced by", "Your app and back office", "<strong>The Token program, on every transfer</strong>"],
  ["Works with wallets and exchanges", "Custom integration each time", "Any app that supports Token-2022"],
], 2)}
${fit(["Holders sit outside your company and transfer between themselves", "You need rules (who can hold it, pauses, recovery) to apply everywhere", "Settlement time or reconciliation cost is a real problem"],
     ["All holdings are internal. A database is simpler", "Balances must be hidden from the public (see confidential transfers first)", "You don't have the legal role covered (issuer, transfer agent, licences). Talk to a partner"])}
${h2("Guides")}
${cards([
  ["Token basics", "Create a mint, mint, transfer, freeze.", "@/docs/tokens/basics/"],
  ["Token extensions", "Metadata, pause, default state, transfer hooks and more.", "@/docs/tokens/extensions/"],
  ["Allowlists (Token ACL)", "Approve holders without writing a program.", "@/docs/tokenization/token-acl/"],
  ["Delivery vs payment", "Swap an asset for USDC atomically.", "@/docs/markets/dvp/"],
])}`,
  why: [
    N("change", "Today there are two sections, <i>Assets</i> (token basics, extensions, Metaplex) and <i>Issuance &amp; Tokenization</i> (quickstart, Token ACL, DvP, NAV strikes). From a developer's point of view they're the same job, so they merge into one."),
    N("change", "<b>Token Extensions</b> leaves the global Build dropdown, where it was listed as a technology, and becomes a guide inside this job. Nobody's job is “a transfer hook”. Their job is an asset that only approved holders can receive."),
  ],
});
page("docs/assets/issue-asset/try-it", {
  tab: "tokenization", pathKey: "tokenization", title: "Hold a restricted asset",
  desc: "Your test wallet holds 100 shares of a demo fund. Send some to an approved investor, then to an unknown address, and watch the network enforce the rule.",
  body: () => `${stepper()}
<div class="demo" id="token-demo"><div class="dh"><span class="dots"><i></i><i></i><i></i></span><span>Lisbon Solar Fund (LSF) · restricted asset</span><span class="net">devnet · test asset</span></div><div class="db">
<div style="display:flex;align-items:center;gap:18px;margin-bottom:16px"><div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#ffe8a3,#ffb86b);display:grid;place-items:center;font-size:24px">☀️</div>
<div><div style="font-size:13px;color:#62626b">Your balance</div><div style="font-size:26px;font-weight:600;letter-spacing:-.02em" data-v="bal">100 LSF</div></div>
<div style="margin-left:auto;display:flex;gap:8px"><button class="btnd" data-to="ok">Send 10 to an approved investor</button><button class="btnd ghost" data-to="bad">Send 10 to an unknown address</button></div></div>
<div class="tk-out" style="font-size:14px;color:#62626b">Try both.</div>
</div></div>
<p>Same wallet, same token, same click, but only one transfer went through. The rule lives in the token itself, so it applies in every wallet and every app, not just yours.</p>
${concept("tokenAccount")}
${concept("transaction")}
${h2("Why it failed")}
<p>This asset was created so that every new holder's token account starts <strong>frozen</strong>. The issuer approves (thaws) accounts after a KYC check. The unknown address had no approved account, so the Token ${chip("program")} rejected the transfer, and because transactions are all-or-nothing, nothing moved.</p>
${next("docs/assets/issue-asset/browser", "Create the asset in your browser", "Make your own restricted asset with metadata, pause and default-frozen accounts.")}`,
  why: [N("why", "<b>Failure is the lesson.</b> Watching a transfer get blocked teaches more about compliance controls in five seconds than a page about extensions does."),
        N("risk", "This path's first success needs a browser playground for Token-2022 (today's tokenization quickstart runs on a local network). That's the long pole of Phase 2 for the Playground team.")],
});
page("docs/assets/issue-asset/browser", {
  tab: "tokenization", pathKey: "tokenization", title: "Create the asset in your browser",
  desc: "Create a Token-2022 mint with metadata, a pause switch and default-frozen accounts, then mint some to your test wallet.",
  body: () => `${stepper()}
<div class="demo" id="pg-token"><div class="pg">
<div class="ed"><div class="eh">create-asset.ts <button class="run">${I.play} Run</button></div><textarea spellcheck="false">import { createMint, mintTo } from "@solana-program/token-2022";

const mint = await createMint({
  payer: wallet,
  decimals: 6,
  mintAuthority: wallet.address,     // who may issue more
  freezeAuthority: wallet.address,   // who may approve / freeze holders
  extensions: {
    metadata: { name: "Lisbon Solar Fund", symbol: "LSF", uri: "https://example.com/lsf.json" },
    pausable: { authority: wallet.address },
    defaultFrozen: true,             // new holders start frozen until approved
    permanentDelegate: wallet.address,
  },
});

await mintTo({ mint, to: wallet.address, amount: 1_000n });</textarea></div>
<div class="pv"><div class="eh">Output · devnet</div><div class="stage" style="place-items:start;padding:14px 16px;font-size:13px;color:#62626b">Remove an extension or rename the asset, then run it again.</div><div class="console"></div></div>
</div></div>
<div class="success" id="pgt-success"><div class="big">${I.check}</div><div><b>You issued an asset.</b><span>Mint <span class="mono" data-mint></span> now exists on devnet, with your rules built in.</span></div></div>
${h2("What you just created")}
${concept("account")}
${concept("mint")}
${concept("program")}
${concept("extensions")}
${callout(`<p><strong>Choose extensions before you launch.</strong> Most of them can't be added to a mint after it's created. Decide on pause, default state and a permanent delegate up front, or plan to migrate.</p>`, "warn")}
${next("docs/assets/issue-asset/local", "Run it from your machine", "The same script against devnet from your terminal, plus approving a holder with Token ACL.")}`,
  why: [N("why", "The concept cards come <i>after</i> the success, and each one points at a line in the code the developer just ran. Four cards is the most on any step, and they're the four ideas this asset depends on."),
        N("change", "Today this content is the <i>Quickstart: launch a token</i>, which runs on a local test network (Surfpool) with CodeTabs for Kit, legacy and Rust. Those code samples carry over to the next step.")],
});
page("docs/assets/issue-asset/local", {
  tab: "tokenization", pathKey: "tokenization", title: "Run it from your machine",
  desc: "Create the same asset from your terminal against devnet, then approve a holder so they can receive it.",
  body: () => `${stepper()}
${h2("1. Install and create a key")}
${code({ label: "terminal", lang: "sh", src: "npm install @solana/kit @solana-program/token-2022\nnpx @solana/keygen new -o issuer.json     # your issuer wallet\n# get free devnet SOL for fees and rent: https://faucet.solana.com" })}
${concept("rent")}
${h2("2. Create the mint")}
${code([{ label: "Kit", file: "create-asset.ts", src: `
import { createSolanaRpc, createKeyPairSignerFromBytes } from "@solana/kit";
import { createMint } from "@solana-program/token-2022";

const rpc = createSolanaRpc("https://api.devnet.solana.com");
const issuer = await createKeyPairSignerFromBytes(load("issuer.json"));

const mint = await createMint(rpc, {
  payer: issuer, decimals: 6, mintAuthority: issuer.address, freezeAuthority: issuer.address,
  extensions: { metadata: { name: "Lisbon Solar Fund", symbol: "LSF" }, pausable: true, defaultFrozen: true },
});
console.log("mint", mint);` },
  { label: "Rust", file: "src/main.rs", lang: "rs", src: `
let mint = create_mint_with_extensions(&rpc, &issuer, MintConfig {
    decimals: 6,
    metadata: Some(("Lisbon Solar Fund", "LSF")),
    pausable: true,
    default_frozen: true,
})?;
println!("mint {mint}");` }])}
${concept("rpc")}
${h2("3. Approve a holder")}
<p>New token accounts start frozen. Approve an investor by thawing their account directly, or let <a href="@/docs/tokenization/token-acl/">Token ACL</a> do it automatically for addresses on your allowlist.</p>
${code({ label: "approve.ts", file: "approve.ts", src: `await thawAccount(rpc, { mint, owner: investorAddress, freezeAuthority: issuer });` })}
${next("docs/assets/issue-asset/go-live", "Go live", "Protect the authority keys, connect KYC, and write the pause runbook.")}`,
});
page("docs/assets/issue-asset/go-live", {
  tab: "tokenization", pathKey: "tokenization", title: "Go live",
  desc: "Protect the authority keys, connect your KYC process, and decide who can pause. Then go further.",
  body: () => `${stepper()}
${checklist("tok-live", [
  ["Move authorities to a multisig", "Mint, freeze, pause and delegate authorities shouldn't sit in one laptop key."],
  ["Connect KYC with Attestations", "Issue verifiable claims and approve holders from them."],
  ["Write the pause and recovery runbook", "Who can pause, when, and how you'll tell holders."],
  ["Publish metadata and verification", "So wallets and explorers show the right name and issuer."],
  ["Get legal sign-off on the structure", "Tokens don't replace the issuer's or transfer agent's obligations."],
])}
${h2("You issued an asset")}
${cards([
  ["Delivery vs payment", "Swap the asset for USDC atomically.", "@/docs/markets/dvp/", "Next"],
  ["NAV strikes for funds", "Daily pricing for money-market style funds.", "@/docs/tokenization/nav-strikes/", "Go deeper"],
  ["Accept dollar payments", "Take USDC for subscriptions to your fund.", "@/docs/payments/checkout/", "Next path"],
  ["Work with a partner", "Issuance platforms and transfer agents on Solana.", "#", "Get help"],
])}`,
});
const tokStubs = { "basics": ["Token basics", "Create a mint, mint, transfer, freeze and close token accounts.", "/docs/tokens/basics"], "basics/create-mint": ["Create a mint", "", "/docs/tokens/basics/create-mint"], "basics/mint": ["Mint tokens", "", "/docs/tokens/basics/mint-tokens"], "basics/transfer": ["Transfer tokens", "", "/docs/tokens/basics/transfer-tokens"], "basics/freeze": ["Freeze & thaw", "", "/docs/tokens/basics/freeze-account"], "basics/authorities": ["Set authorities", "", "/docs/tokens/basics/set-authority"], "extensions": ["Token extensions", "Every Token-2022 extension, what it does, and when it must be set.", "/docs/tokens/extensions"], "extensions/metadata": ["Metadata", "", "/docs/tokens/extensions/metadata"], "extensions/pausable": ["Pausable", "", "/docs/tokens/extensions/pausable"], "extensions/default-state": ["Default account state", "", "/docs/tokens/extensions/default-state"], "extensions/permanent-delegate": ["Permanent delegate", "", "/docs/tokens/extensions/permanent-delegate"], "extensions/transfer-hook": ["Transfer hook", "", "/docs/tokens/extensions/transfer-hook"], "extensions/confidential": ["Confidential transfers", "", "/docs/tokens/extensions/confidential-transfer"], "token-acl": ["Allowlists (Token ACL)", "Approve and revoke holders from a list, without writing a program.", "/docs/tokenization/token-acl"], "dvp": ["Delivery vs payment", "", "/docs/markets/dvp"], "nav-strikes": ["NAV strikes for funds", "", "/docs/tokenization/nav-strikes"], "verify-token": ["Verify a token", "", "/docs/tokens/how-to-verify-a-token"], "attestations": ["Attestations", "Issue and check verifiable claims such as KYC status.", "/docs/tools/attestations"], "metaplex": ["Metaplex", "", "/docs/tokens/metaplex"] };
for (const [k, [t, d, w]] of Object.entries(tokStubs)) page(k === "dvp" ? "docs/markets/dvp" : /^(basics|extensions|metaplex|verify-token)/.test(k) ? `docs/tokens/${k}` : `docs/tokenization/${k}`, { tab: "tokenization", title: t, desc: d, stub: { was: w } });

/* payments guide stubs */
const payStubs = { "send": ["Send payments", "Everything about moving money out: basic transfers, memos, address checks and processing at scale.", "/docs/payments/send-payments"], "send/basic": ["Basic payment", "", "/docs/payments/send-payments/basic-payment"], "send/memo": ["Payment with memo", "", "/docs/payments/send-payments/payment-with-memo"], "send/verify-address": ["Verify an address", "", "/docs/payments/send-payments/verify-address"], "send/processing": ["Payment processing", "", "/docs/payments/send-payments/payment-processing"], "accept": ["Accept payments", "Checkout flows, Solana Pay, verification and indexing.", "/docs/payments/accept-payments"], "accept/solana-pay": ["Solana Pay", "", "/docs/payments/accept-payments/solana-pay"], "accept/verification": ["Verification tools", "", "/docs/payments/accept-payments/verification-tools"], "accept/indexing": ["Indexing & webhooks", "", "/docs/payments/accept-payments/indexing"], "subscriptions": ["Subscriptions", "Recurring charges using delegated spending authority.", "/docs/payments/subscriptions"], "payouts": ["Payouts & disbursements", "Pay users, vendors or employees in bulk.", "/docs/payments/send-payments/payment-processing"], "advanced": ["Advanced payments", "", "/docs/payments/advanced-payments"], "advanced/deferred": ["Deferred execution", "", "/docs/payments/advanced-payments/deferred-execution"], "advanced/spend-permissions": ["Spend permissions", "", "/docs/payments/advanced-payments/spend-permissions"], "tools/commerce-kit": ["Commerce Kit", "React components and hooks for checkout.", "/docs/tools/commerce-kit"], "tools/kora": ["Kora", "A fee-payer service that lets your app cover network fees for users.", "/docs/tools/kora"], "tools/solana-pay": ["Solana Pay", "", "/docs/tools/solana-pay"] };
for (const [k, [t, d, w]] of Object.entries(payStubs)) page(`docs/payments/${k}`, { tab: "payments", title: t, desc: d, stub: { was: w } });

/* ------------------------------------------------------------- MORE */
page("docs/use-cases", {
  tab: "more", title: "All use cases",
  desc: "Guides for jobs that don't have a full build path yet. Each one becomes a path in Wave 2, using the same template.",
  body: () => `
${cards([
  ["Trading & markets", "Exchanges, order flow, MEV protection and stake-weighted QoS.", "@/docs/markets/", "Guides"],
  ["Let players own items across games", "Items minted to a player and read by a second app.", "@/docs/assets/games/", "Wave 2 path"],
  ["Private payments", "Confidential balances and private channels.", "@/docs/payments/privacy/", "Guides"],
  ["Keep a shared record partners can audit", "Write a program that records who changed what.", "@/docs/programs/", "Wave 2 path"],
])}`,
  why: [N("why", "Only jobs with a real path get a top-level tab. These sections keep today's content without pretending to be paths, so the picker never promises a path that doesn't exist yet.")],
});
page("docs/markets", { tab: "more", title: "Markets & trading", desc: "Build exchanges and trading systems.", stub: { was: "/docs/defi" } });
page("docs/markets/exchange", { tab: "more", title: "Build an exchange", desc: "", stub: { was: "/docs/defi/exchange" } });
page("docs/markets/mev", { tab: "more", title: "MEV protection", desc: "", stub: { was: "/docs/defi/mev-protection" } });
page("docs/markets/swqos", { tab: "more", title: "Stake-weighted QoS", desc: "", stub: { was: "/docs/defi/stake-weighted-qos" } });
page("docs/assets/games", { tab: "more", title: "Let players own items across games", desc: "Mint an item to a player and read it from a second app. A Wave 2 job path.", stub: { was: "/developers/guides/games" } });
page("docs/payments/privacy", { tab: "more", title: "Private payments", desc: "Confidential transfers and private channels.", stub: { was: "/docs/finance/privacy" },
  why: [N("change", "Today this is the only page in a top-level section called <i>Finance</i>. A one-page section with a broad name promises more than it delivers, so it's renamed after what it covers.")] });
page("docs/programs", { tab: "more", title: "Keep a shared record: write your own program", desc: "When existing programs aren't enough, write your own. This becomes the Wave 2 path “Keep a shared record partners can audit”.", stub: { was: "/docs/programs" },
  why: [N("why", "The coverage map shows that Wave 1 teaches <i>using</i> Solana, but never <b>writing a program, PDAs or CPI</b>. This is where that lives until the Wave 2 path ships.")] });
page("docs/programs/first-program", { tab: "more", title: "First program in the browser", desc: "Write, deploy and call a program in Solana Playground: accounts, PDAs and cross-program calls.", stub: { was: "/docs/intro/quick-start" },
  why: [N("change", "This is today's <b>Quick Start</b>, the first card on <code>/docs</code>. It's good content behind the wrong front door: it teaches programs, PDAs and CPI before a web2 developer has a reason to care. It moves here, and the URL redirects.")] });
for (const [k, t, w] of [["anchor", "Anchor framework", "/docs/programs/anchor"], ["testing", "Testing programs", "/docs/programs/testing"], ["deploying", "Deploying", "/docs/programs/deploying"], ["idls", "IDLs & Codama clients", "/docs/programs/idls"]])
  page(`docs/programs/${k}`, { tab: "more", title: t, desc: "", stub: { was: w } });

/* --------------------------------------------------------- CONCEPTS */
page("docs/concepts", {
  tab: "concepts", title: "How Solana works", wide: true,
  desc: "The fundamentals behind every path. Each page opens with the same two-sentence version you see inside the builds, then goes deep.",
  body: () => `%%COVERAGE%%
${h2("All concepts")}
${cards(Object.entries(concepts).map(([k, c]) => [c.name, c.short.replace(/<[^>]+>/g, "").split(". ")[0].replace(/\.$/, "") + ".", `@/docs/concepts/${slug(k)}/`, c.cat]), "c3")}`,
  why: [
    N("why", "The coverage table is <b>generated from the paths</b>. Every concept card in a path registers itself, so the table can't drift from the content. A concept that no path introduces shows up as a gap."),
    N("why", "<b>Writing programs, PDAs and CPI are uncovered in Wave 1.</b> That's the real trade-off behind the open decision about swapping in a program-writing path. I'd still keep Wave 1 as proposed: web2 developers build on existing programs long before they write their own, and today's Quick Start covers the gap from <i>More use cases → Write your own program</i>."),
    N("change", "Renamed from <i>Core Concepts</i>. The URLs under <code>/docs/core/*</code> can stay; only the label and the opening card change."),
  ],
});
for (const [k, c] of Object.entries(concepts)) {
  page(`docs/concepts/${slug(k)}`, {
    tab: "concepts", title: c.name, conceptKey: k, desc: "",
    body: () => `%%INSHORT:${k}%%
${k === "transaction" ? `
${h2("What's in a transaction")}
<p>A transaction bundles one or more <strong>instructions</strong>, each one a call to a program, plus the list of accounts those instructions read or write, a recent blockhash, and the signatures of every account that has to approve.</p>
${table(["Part", "What it is", "In the payments path"], [["Signatures", "One per required signer; the first is the transaction ID", "Your test wallet's approval"], ["Instructions", "Program calls, run in order", "One Token program transfer"], ["Accounts", "Every account read or written", "Your USDC account, the shop's"], ["Recent blockhash", "Proves it's fresh; expires after ~60–90 s", "Why retries rebuild the transaction"]])}
${h2("All or nothing")}
<p>If any instruction fails, the whole transaction fails and no state changes. That's why the blocked transfer in the tokenization path left your balance untouched.</p>
${h2("Size and expiry")}
<p>Transactions are limited to 1,232 bytes and must land before their blockhash expires. In practice: keep them small, and when a send times out, rebuild with a fresh blockhash instead of resending forever.</p>
${h2("Fees")}
<p>Every transaction pays a base fee per signature, plus an optional priority fee when the network is busy. See ${chip("fees")}.</p>` : `${h2("In depth")}<div class="stub"><b>Existing in-depth content carries over here.</b> Only the opening “In short” card and the “You've used this in” links are new.<br><span class="was">today: ${c.was}</span></div>${ghost(7)}`}`,
  });
}

/* --------------------------------------------------------- REFERENCE */
page("docs/reference", { tab: "reference", title: "Reference", desc: "APIs, SDKs and tools: the lookup material you'll need once something is working.",
  body: () => cards([["RPC methods", "Every HTTP and WebSocket method.", "@/docs/reference/rpc/"], ["SDKs", "TypeScript (Kit), Rust, Python.", "@/docs/reference/sdks/"], ["React & Next.js", "Hooks, wallet connection and server patterns.", "@/docs/resources/frontend/"], ["Developer tools", "Surfpool, LiteSVM, Microscope, Keychain and more.", "@/docs/resources/tools/"], ["Solana CLI", "Keys, airdrops, deploys and config.", "@/docs/resources/cli/"], ["Production readiness", "Infrastructure, monitoring and keys before launch.", "@/docs/resources/production/"]]),
  why: [N("change", "This merges today's <i>Solana SDKs</i>, <i>Frontend</i>, <i>Solana RPC Methods</i> and the tools half of <i>Resources</i> into one place for lookups. Tools that belong to one job (Commerce Kit, Kora, Attestations) are listed inside that job too, the same just-in-time rule applied to products.")] });
for (const [p, t, w] of [["rpc", "RPC methods", "/docs/rpc"], ["rpc/http", "HTTP methods", "/docs/rpc/http"], ["rpc/websocket", "WebSocket methods", "/docs/rpc/websocket"], ["rpc/providers", "RPC providers", "/docs/rpc/providers"], ["sdks", "SDKs", "/docs/clients"], ["sdks/typescript", "TypeScript (Kit)", "/docs/clients/official/javascript"], ["sdks/rust", "Rust", "/docs/clients/official/rust"], ["sdks/python", "Python", "/docs/clients/community"], ["frontend", "React & Next.js", "/docs/frontend"], ["tools", "Developer tools", "/docs/tools"], ["tools/surfpool", "Surfpool", "/docs/tools/surfpool"], ["tools/litesvm", "LiteSVM", "/docs/tools/litesvm"], ["tools/microscope", "Microscope", "/microscope"], ["tools/keychain", "Keychain", "/docs/tools/keychain"], ["tools/private-channels", "Private Channels", "/docs/tools/private-channels"], ["cli", "Solana CLI", "/docs/intro/installation/solana-cli-basics"], ["production", "Production readiness", "/docs/tools/production-readiness"]])
  page(/^(tools|production|frontend|cli)/.test(p) ? `docs/resources/${p}` : `docs/reference/${p}`, { tab: "reference", title: t, desc: "", stub: { was: w } });

/* ============================================================ LANDING */
export const landingWhy = [
  N("why", "<b>The page has one job:</b> get a developer into the right path within one scroll. The order is hero → network numbers → job picker → <b>Why Solana</b> → recent transfers → guided routes. There's no standalone concepts section."),
  N("why", "<b>Why Solana</b> follows Tempo's pattern of a few sourced stat tiles, plain benefit lines and named production users. Every figure has a source link and an as-of date. Check them against Artemis or the Foundation's own data before launch."),
  N("change", "Today's hero buttons are <i>Read the core docs</i> and <i>Browse templates</i>, and the use-case grid is the <b>third</b> block, below <i>Learn the stack / Build by example / Move to Solana</i>. Here the primary button scrolls to the picker, and the picker is the only block with green buttons."),
  N("why", "The quiet links under the hero (<i>Go to the docs</i>, <i>Coming from Ethereum</i>) keep today's crypto-native developers one click from where they go now. The redesign is aimed at web2 developers, and it shouldn't cost the current users anything."),
  N("risk", "<b>Keep the network numbers honest.</b> In this mockup the numbers, ticker and feed are generated in the browser at the real network rate (about 1,390 user transactions per second). In production, serve them from an indexer-backed endpoint rather than calling public RPC from the browser, which is slow and rate-limited. (a) TPS excludes validator votes, because raw TPS is inflated about 3× and skeptical developers will notice. (b) “Under a second” is true for <i>confirmed</i>; <i>finalized</i> is ~13 s unless Alpenglow ships first, so label it. (c) A dollar fee needs a price feed, with a fallback to SOL."),
  N("why", "Each job card follows the template: the <b>developer's question</b> as the title, one line on fit that compares against something they already know (card fees, a database), and the time to a first result. The cards name no concepts."),
  N("change", "Products are gone from this page. The 8-product grid becomes part of the paths: Commerce Kit in Payments, the x402 facilitator and Kora in Pay-per-call, Token ACL and Attestations in Tokenization. A grid of nine product names is a concept gate too."),
  N("change", "Nav: the Build dropdown now leads with <i>What are you building?</i> (hover it). Token Extensions moves out of the menu and into the tokenization job. DeFi and Gaming sit behind <i>More use cases</i> until their paths exist. Reorder the global nav only once the Payments path is live."),
  N("why", "<b>Internet capital markets is the frame; the jobs stay in the developer's words.</b> The headline uses the Foundation's narrative, and the very next sentence defines it in plain terms (money, assets and markets on the internet, open 24/7). The picker then splits it into building blocks: Money → payments, Pricing → pay-per-call, Assets → tokenization, with Markets behind them. Each card title is still the developer's own question."),
  N("risk", "<b>Check that web2 developers understand “internet capital markets”.</b> It isn't chain vocabulary, but it is a coined term. Add one question to the MLH rerun script: “After reading the first screen, what do you think you could build here?” If people can't answer, keep ICM as the eyebrow and move the plain-language line into the headline."),
  N("why", "The words “web3”, “blockchain”, “decentralized” and “keypair” still appear nowhere on this page."),
];


/* ===================================================== use-case hubs (one tab) */
const hubPath = (key, blurb) => {
  const p = paths[key];
  return `<div class="pcard"><div><div class="k">Start with the path · ${p.time}</div><h3>${p.job}</h3><p>${blurb}</p></div><a class="btnd purple" href="@/${p.intro}/">Open the path ${I.arrow}</a></div>`;
};
page("docs/use-cases", {
  tab: "usecases", title: "Use cases",
  desc: "How-to guides grouped by what you're building. New here? Each use case starts with a path under Start here; these guides are where you go next.",
  body: () => `
${cards([
  ["Payments", "Send, accept, subscriptions, payouts, and pay-per-call for apps and AI agents.", "@/docs/payments/", "30 guides"],
  ["Tokenization", "Allowlists, KYC attestations, delivery vs payment, fund NAV.", "@/docs/assets/", "Guides"],
  ["Markets & trading", "Exchanges, order flow, MEV protection, stake-weighted QoS.", "@/docs/markets/", "Guides"],
  ["Privacy", "Confidential balances and private channels.", "@/docs/payments/privacy/", "Guides"],
  ["Games & digital items", "Items players own and other apps can read.", "@/docs/assets/games/", "Wave 2"],
])}
${callout(`<p>Looking for how tokens, accounts or fees work? Those have one home: <a href="@/docs/concepts/">How Solana works</a>. Use-case guides link there instead of re-explaining.</p>`)}`,
  why: [
    N("change", "<b>One tab, not four.</b> The Docs Research found that no leading docs site (of 21 checked) puts fine-grained jobs in the global nav; the common pattern is a few domain groups plus job guides under Get started. Solana's use-case sections are also thin today (tokenization 5 pages, defi 9, finance 2), and their borders already leak (DvP in two roots, x402 in three)."),
    N("why", "This tab holds <b>how-to guides</b> (Diátaxis). The <b>tutorials</b>, i.e. the job paths, sit under Start here. Concepts and token mechanics sit in How Solana works. Each type of content has exactly one home."),
    N("risk", "Validate the labels with a tree test before shipping, and pull the PostHog <code>trackMarkdownRequest</code> data by section to see what agents actually fetch."),
  ],
});
page("docs/payments", {
  tab: "usecases", title: "Payments",
  desc: "Guides for moving money with stablecoins: sending, accepting, recurring billing, payouts, and per-request pricing for apps and AI agents.",
  body: () => `
${hubPath("payments", "New to payments on Solana? Take a payment in your browser in five minutes, then confirm it from your own backend.")}
${h2("Guides")}
${cards([
  ["Send payments", "Transfers, memos, address checks and processing at scale.", "@/docs/payments/send/"],
  ["Accept payments", "Checkout flows, Solana Pay, verification and indexing.", "@/docs/payments/accept/"],
  ["Subscriptions", "Recurring charges with delegated spending limits.", "@/docs/payments/subscriptions/"],
  ["Payouts & disbursements", "Pay users, vendors or employees in bulk.", "@/docs/payments/payouts/"],
  ["Pay-per-call & agents", "x402: price API requests at a cent or less; let agents pay.", "@/docs/payments/pay-per-call/"],
  ["Advanced", "Deferred execution and spend permissions.", "@/docs/payments/advanced/"],
])}
${h2("Tools for payments")}
${cards([["Commerce Kit", "React components for checkout.", "@/docs/payments/tools/commerce-kit/"], ["Kora", "Pay network fees for your users.", "@/docs/payments/tools/kora/"]])}
${callout(`<p>How do token accounts, fees and confirmation work? See <a href="@/docs/concepts/">How Solana works</a>. Payments guides link there instead of re-explaining (today 19 of 30 payments pages re-explain token accounts; 5 link to the token docs).</p>`)}`,
  why: [N("change", "Today's <code>payments/how-payments-work</code> re-explains accounts, ATAs, token programs, fees and transactions. In this structure that page becomes links to the concept pages plus the concept cards, which render from one source.")],
});
page("docs/payments/pay-per-call", {
  tab: "usecases", title: "Pay-per-call & agents",
  desc: "Price API requests at a cent or less with x402, and let AI agents pay for what they use.",
  body: () => `${hubPath("apis", "Call a paywalled API from your browser, then paywall your own endpoint in five minutes.")}
${cards([["How x402 works", "The HTTP 402 flow, payment headers and facilitators.", "@/docs/payments/pay-per-call/x402/"], ["Agents that pay", "Give an agent a wallet and a budget.", "@/docs/payments/pay-per-call/agents/"], ["Machine payments (MPP)", "Session and streaming payments.", "@/docs/payments/pay-per-call/mpp/"], ["x402 facilitator", "Verify and settle payments for your API.", "@/docs/payments/pay-per-call/facilitator/"]])}`,
  why: [N("change", "x402 currently appears in three places (<code>payments/agentic-payments/x402</code>, <code>tools/x402-facilitator</code>, <code>video-guides/agent-payments</code>). Here it has one home, under Payments.")],
});
page("docs/assets", {
  tab: "usecases", title: "Tokenization",
  desc: "Guides for issuing regulated and real-world assets: approvals, KYC claims, settlement and fund pricing. Token mechanics live in How Solana works → Tokens.",
  body: () => `${hubPath("tokenization", "Hold a restricted asset, watch a blocked transfer, then create your own with approvals and a pause switch.")}
${h2("Guides")}
${cards([["Allowlists (Token ACL)", "Approve holders without writing a program.", "@/docs/tokenization/token-acl/"], ["KYC with Attestations", "Issue and check verifiable claims.", "@/docs/tokenization/attestations/"], ["Delivery vs payment", "Swap an asset for USDC atomically. One canonical page.", "@/docs/markets/dvp/"], ["NAV strikes for funds", "Daily pricing for money-market style funds.", "@/docs/tokenization/nav-strikes/"]])}
${h2("Token mechanics")}
${cards([["Token basics", "Mints, minting, transfers, freeze and thaw.", "@/docs/tokens/basics/"], ["Token extensions", "Metadata, pausable, default state, transfer hooks.", "@/docs/tokens/extensions/"]])}`,
  why: [
    N("change", "Today general token docs (including NFTs and Metaplex) sit under Finance → Assets. Here they move to <b>How Solana works → Tokens</b>, so gaming and NFT developers aren't sent through a finance tab."),
    N("change", "DvP is currently split across <code>tokenization/dvp</code> and <code>defi/dvp-program/</code> (5 pages). This structure keeps one canonical DvP page here and links to it from Markets."),
  ],
});

/* ===================================================== Docs Research */
const src = (n, t, u) => `<li id="s${n}"><b>[${n}]</b> ${u ? `<a href="${u}">${t}</a>` : t}</li>`;
const c = (...ns) => ns.map((n) => `<a href="#s${n}">[${n}]</a>`).join("");
page("docs/research", {
  tab: "start", title: "Docs Research", wide: false,
  desc: "Why this mockup is structured the way it is: the brief it implements, the research into docs navigation, and every source.",
  body: () => `
${callout(`<p><strong>Question:</strong> should use cases be the top-level navigation of solana.com/docs?<br><strong>Answer:</strong> not as fine-grained jobs (“Charge per API call”) in the global nav; no leading docs site does that. Yes as a few <strong>domain tabs</strong>, the Stripe / Circle / Coinbase pattern: <strong>Payments · Assets · Markets</strong>, the three pieces of internet capital markets. Each opens with its job path, then guides. Underneath sits one shared core: How Solana works · Resources (including Programs) · API.</p>`, "green")}

${h2("1. The brief")}
<p>This mockup implements an internal Notion brief, <em>“TL;DR: solana.com/developers becomes a job picker”</em> ${c(1)}, shared at the start of this work (12 Oct 2026). Its core claims:</p>
<ul>
<li><strong>Thesis.</strong> “Every developer enters through a problem they already have, and leaves with something working. Solana fundamentals are never an initial blocker.”</li>
<li><strong>Evidence.</strong> MLH focus group (Sept 2026): participants couldn't say what Solana is or what they'd build; they compared it with Stripe and databases, not other chains; concepts arrived without context; examples ended with no next step. MLH recommended explaining Solana through questions web2 developers already ask.</li>
<li><strong>Five principles.</strong> Name the outcome · fundamentals just in time (two sentences, a web2 analogy, a docs link) · no concept gate before first success · use it, then show it live · end in their stack.</li>
<li><strong>Wave 1 paths.</strong> Accept dollar payments · Charge a few cents per API call · Issue a tokenized asset with compliance controls. <strong>Wave 2:</strong> shared audit record, game items.</li>
<li><strong>Six-stage path template</strong>, phasing (Align → Pilot (Payments) → Build → Validate), owners (Awesome Docs team, Playground team, Bri for video), and three open decisions (Wave 1 paths; where “web3” appears; how to run the assessment).</li>
</ul>
<h3>Where each principle shows up in this mockup</h3>
${table(["Principle (brief)", "Implemented as"], [
  ["Name the outcome", "Job picker and path titles are the developer's question (“Accept dollar payments that settle in seconds”), on the landing page and in Start here."],
  ["Fundamentals just in time", "Concept cards (two sentences + “Like:” analogy + link) at the step that uses them; one source of truth on each How Solana works page, with “You've used this in” backlinks."],
  ["No concept gate before first success", "Step 2 of every path is a browser playground; installation is optional and linked from step 3."],
  ["Use it, then show it live", "Step 1 demos (test wallet buys a sticker, 402 → pay → 200, blocked transfer) plus a live mainnet feed."],
  ["End in their stack", "Step 3 runs on the developer's machine in their framework; step 4 ends with the next path first."],
  ["Six-stage template", "Path intro (stages 1–2: job + fit check) + four steps (stages 3–6)."],
  ["Coverage map", "Generated from the paths on How Solana works; flags PDAs and CPI as not covered in Wave 1."],
])}

<p><a href="#appendix-a-the-brief-in-full">Read the full brief in Appendix A →</a></p>
<h3>Where this mockup follows the brief, and where it departs</h3>
${table(["Brief says", "Mockup", "Status"], [
  ["Hero draft: “A shared global ledger your code runs on.”", "“Build on internet capital markets.”, with a plain-language definition in the next sentence. Changed at your request after the first mockup.", "<strong>Departs</strong>. Test it in the MLH rerun (§9)."],
  ["Network module: throughput, median fee, finality", "Live from mainnet: flat fee, block time, user TPS excluding votes. Finality is labelled (confirmed ≈0.4 s vs finalized).", "Follows, with claim hygiene"],
  ["“What are you building?” picker: question title, one line on fit, one button", "Landing page and Start here, three cards", "Follows"],
  ["Guided routes: Docs, Solana School, ecosystem partners", "Docs, Solana School, Templates, Work with a partner", "Follows"],
  ["No standalone concepts section on the landing page", "None", "Follows"],
  ["Build dropdown: use-case column first, relabelled as questions; Start building and Tools follow", "Mega menu: “What are you building?” column first", "Follows"],
  ["Token Extensions leaves the dropdown and folds into the tokenized-asset path", "Removed from the nav, taught inside the path. The extension how-tos live once in How Solana works → Tokens and the path links to them.", "Follows, refined by the research (single source)"],
  ["Six-stage path template", "Path intro (job + fit check) + four steps: use it, browser build ★, your stack, go live and go further", "Follows"],
  ["“Across the five paths, every core concept is taught at least once”", "The generated coverage map shows <strong>CPI is not covered by any of the five paths</strong>; PDAs and writing programs arrive only in Wave 2.", "<strong>Gap found.</strong> Decide when scoping Wave 2."],
  ["Silent on docs top-level navigation", "Answered by this research: use cases as the entry point, one Use cases tab, canonical core", "<strong>New</strong>"],
  ["Job picker mockup (job-picker-mockup.html)", "Not available to this work; the picker was rebuilt from the description", "Not reviewed"],
])}
<h3>Recommendations on the open decisions</h3>
${table(["Open decision", "Recommendation"], [
  ["Wave 1 paths", "Keep Payments, Pay-per-call and Tokenized asset. Web2 developers use existing programs long before they write one; the current Quick Start covers programs, PDAs and CPI under the Programs tab until the Wave 2 path ships."],
  ["Where “web3” appears", "Agree: never in path titles or the hero; allowed in deeper docs. The mockup's landing page and paths don't use “web3”, “blockchain”, “decentralized” or “keypair”."],
  ["Initial phase 1 assessment: MLH rerun? Internal process?", "Both. Quick internal tests (about five people) during the Phase 1 pilot, then the MLH rerun at Phase 3 with the same script, plus the tree test and top-tasks survey in §9."],
])}

${h2("2. Method")}
<p>Three research tracks ran in parallel on 13 Oct 2026, plus inspection of the live site and repo while building the mockup:</p>
<ol>
<li><strong>Platform survey.</strong> Live top-level navigation of 21 developer docs sites, parsed from page HTML where possible.</li>
<li><strong>Literature and frameworks.</strong> Empirical studies of how developers use API docs, survey and traffic data, IA frameworks, AI-agent consumption.</li>
<li><strong>Solana's own docs.</strong> The public <code>solana-foundation/solana-com</code> repo: IA, git and PR history, overlap counts; plus documented redesigns elsewhere.</li>
</ol>
<p>Not checked: internal analytics, Linear, or internal research behind unauthorised connectors.</p>

${h2("3. What leading docs sites do")}
<p>No site of the 21 uses fine-grained jobs as its global navigation. The common pattern is a few <strong>domain tabs with job-like names</strong>, with specific jobs one level down.</p>
${table(["Site", "Top level (abridged)", "Where use cases live"], [
  ["Stripe " + c(10), "Get started · Payments · Revenue · Risk · Money management · Stablecoins · …", "Get started → Use cases: full guides by business type " + c(11)],
  ["Base " + c(12), "Get Started · Build on Base · Specifications · SDKs & APIs", "Get Started → Solutions: Accept Payments, Tokenize Assets, Issue a Stablecoin (deep guides)"],
  ["Circle " + c(13), "Get started · Assets · Payments · Crosschain · Agent stack · API reference", "Job-phrased home cards that route to products"],
  ["Coinbase CDP " + c(14), "Docs · API Reference · SDKs · Recipes", "Domain sidebar groups (Payments, Stablecoins, Trading)"],
  ["Plaid " + c(15), "Quickstart · API · … then Payments and Funding · Financial Insights · …", "The job-named product groups"],
  ["Cloudflare " + c(16), "Docs · Directory · API · SDKs · Changelog", "/use-cases/: a thin hub, not in the header"],
  ["Sui " + c(17), "Getting Started · Develop · Onchain Finance · References", "One “Onchain Finance” tab (like Solana's Finance)"],
  ["Polygon " + c(18), "Platform · Payments · Wallets · …", "Payments is a top-level tab (the only chain doing this)"],
  ["ethereum.org " + c(19), "Use: Payments · Stablecoins · … (site menu)", "Marketing layer, outside the dev docs"],
  ["AWS, Google Cloud, Azure " + c(20, 21), "Product categories + guidance layers", "Separate solutions/architecture catalogues"],
])}
<p>Also surveyed: Twilio, Shopify, Supabase, Vercel, Firebase, Adyen, Aptos, NEAR, Avalanche. API reference is a separate top-level item on every site.</p>

${h2("4. What the research says")}
<ul>
<li><strong>Start from the scenario.</strong> “Matching APIs with scenarios” was a key need among 440+ Microsoft developers; scenario docs “can compensate for hard-to-understand API structure” ${c(30)}. Developers spend ~49% of task time in docs and are both opportunistic and systematic ${c(31, 33)}.</li>
<li><strong>Organise by what the developer is doing, not by content type.</strong> A top level split into Concepts / Samples / Reference confused participants ${c(31)}; a use-case-oriented redesign gave fewer errors and faster tasks (n=22, changes bundled) ${c(32)}.</li>
<li><strong>But task and audience schemes are ambiguous.</strong> Mixing schemes in one menu “almost guarantees confusion” ${c(37)}; audience-based navigation degraded usability in testing because users fit several buckets ${c(38, 39)}.</li>
<li><strong>Fragmentation and duplicated scenarios are top complaints</strong> ${c(34)}; findability and organisation matter to most practitioners ${c(35)}.</li>
<li><strong>Diátaxis</strong> allows another axis at the top with the four types beneath, and warns against empty top-down structures ${c(36)}. <strong>Top Tasks:</strong> a few tasks carry most demand, so keep the entry list short and data-driven ${c(40)}.</li>
<li><strong>Every page is page one.</strong> Readers arrive by search, so pages must stand alone and link richly ${c(41)}.</li>
</ul>
<p><em>Strength of evidence:</em> studies are small and mostly pre-AI; nothing tests use-case versus product navigation head-to-head for a blockchain platform.</p>

${h2("5. What AI agents change")}
<ul>
<li>Agents are roughly half or more of docs traffic on vendor platforms (Mintlify ~45% in 2025, reported 66% by Aug 2026; GitBook ~52%) ${c(50, 51, 52)}.</li>
<li>They navigate by <strong>links, llms.txt and .md pages</strong>, not tabs: 86–97% of fetches via links ${c(53)}; llms.txt cut 404s about 20× ${c(51)}. Counterpoint: 97% of llms.txt files site-wide get no requests ${c(54)}.</li>
<li>Humans still verify: technical docs are the top learning resource (67.8%) and 46% distrust AI output ${c(55)}.</li>
<li>Implication: the menu matters less, <strong>single sources and links matter more</strong>. Duplicated explanations hand agents conflicting answers.</li>
</ul>

${h2("6. What Solana's docs look like today")}
<ul>
<li>Six tabs today: Start here · Concepts · RPC API · Finance · Video Tutorials · Resources ${c(60)}. <strong>The use cases are already one tab, Finance</strong>, added in #1767 (29 Jul 2026) as part 2 of the docs restructure stack ${c(61)}. Payments was added in #1061 (16 Jan 2026) ${c(62)}. None of these PRs cite user research or analytics.</li>
<li><strong>Thin sections:</strong> payments 30 pages, defi 9 (5 are one DvP program), tokenization 5, finance 2. For comparison: rpc 91, tools 197.</li>
<li><strong>Leaky borders:</strong> DvP in two roots; x402 in three places; Solana Pay in two; #2127 moved Production Readiness and the x402 facilitator out of Payments ${c(63)}.</li>
<li><strong>Re-explained basics:</strong> 19 of 30 payments pages discuss token accounts, only 5 link to <code>/docs/tokens</code>; <code>how-payments-work</code> re-explains accounts, ATAs, token programs, fees and transactions.</li>
<li><strong>Already instrumented:</strong> per-section llms.txt, .md versions of every page, and PostHog logging of Markdown requests by route.</li>
</ul>

${h2("7. Redesigns elsewhere")}
<ul>
<li><strong>GitLab</strong> moved its docs nav to workflow-based groups after usability testing (“improved overall success rates”), and its guidelines warn against a long top-level nav ${c(70, 71)}. Its UI nav moved to task groups after card sorts and a longitudinal study ${c(72)}.</li>
<li><strong>Twilio</strong> reorganised its Console by lifecycle after card sorts and removed ~10% duplicate content ${c(73)}.</li>
<li><strong>GOV.UK</strong> dropped audience-based navigation after testing ${c(39)}. <strong>Gatsby</strong> and <strong>Kubernetes</strong> organise by content type ${c(74)}.</li>
<li>No documented case was found of a company moving <em>away</em> from use-case tabs, and none published measured outcomes for either direction.</li>
</ul>

${h2("8. Decision and what changed in this mockup")}
<p><strong>Tabs:</strong> Start here · <strong>Payments · Assets · Markets</strong> | How Solana works · Resources · API (seven, against Stripe's nine). Programs sits inside Resources and is linked from Start here. Benchmarks are web2 and institutional-finance docs (Stripe, Shopify, Plaid, Circle, Canton) rather than other chains.</p>
${table(["Decision", "Why"], [
  ["<strong>Domain tabs: Payments, Assets, Markets</strong>", "The dominant pattern among the most comparable sites (Stripe, Circle, Coinbase CDP, Plaid, Polygon) " + c(10, 13, 14, 15, 18) + ". Broad enough to avoid overlap, specific enough to signal what's inside. They also spell out the internet capital markets framing."],
  ["<strong>Jobs are paths inside their domain</strong> (Payments opens with “Accept dollar payments” and “Charge per API call”)", "Stripe's Payments sidebar opens with “Accept a payment”. Keeping path, guides and tools in one sidebar avoids cross-tab jumps " + c(10)],
  ["<strong>Pay-per-call is part of Payments</strong>", "x402 <em>is</em> payments, and it's already split across three places in today's docs"],
  ["<strong>Tokens live in Assets</strong> (with tokenization, NFTs and game items)", "Gives NFT and game developers a home outside “Finance”, and makes Assets substantial (about 55 pages today) rather than thin (5)"],
  ["<strong>DvP has one page, in Markets</strong>", "Today it is split across two roots"],
  ["<strong>Programs sits in Developer resources</strong>, linked from Start here", "Stripe puts custom code (“Extend Stripe”) in Developer resources and Shopify nests Functions under Apps → Build " + c(24, 23) + ". Start here links straight to it, so crypto-native developers are one click away. Promote it to its own tab if analytics show it's a primary destination, as Canton does with App Development " + c(22) + "."],
  ["<strong>Resources</strong> = setup, AI agents, CLI, frontend, tools, production", "Stripe's Developer resources tab " + c(24) + ". It replaces today's catch-all Resources tab."],
  ["<strong>API</strong> = RPC and SDK reference only", "Lookups only. Reference is its own top-level item on every site surveyed"],
  ["<strong>Start here stays short</strong>: the picker, All use cases, setup, AI agents", "It routes people; it doesn't hold content"],
])}
<h3>Revision history</h3>
<p><strong>Third revision.</strong> Programs moved from its own tab into Resources (Stripe calls it Developer resources), and is linked from Start here. That brings the bar to seven tabs.</p>
<p><strong>Second revision.</strong> A “Develop” tab (programs plus tools) was briefly modelled on Base and Sui. It was replaced after review by benchmarks from the strongest web2 and institutional-finance docs: Stripe (Developer resources), Shopify (Functions nested in Apps) and Canton (App Development as a top-level tab). Programs keeps its own tab, and tools move to Developer resources.</p>
<p><strong>First revision.</strong> An earlier version of this mockup collapsed everything into a single “Use cases” tab, mainly because some of Solana's use-case sections are thin today (tokenization 5 pages, defi 9). On review that overweighted a snapshot of current page counts. It also departed from the closest precedents, Stripe above all, which put their domains at the top level. A single generic “Use cases” label also says nothing about what's inside. The thin-section risk is handled instead by folding tokens into Assets, and by a fold-back rule for Markets if it doesn't grow (see the design notes on that tab).</p>

${h2("9. Validate before shipping")}
<ol>
<li><strong>Top-tasks survey</strong> (MLH participants + current docs users) to confirm the 3–7 jobs in the picker ${c(40)}.</li>
<li><strong>Tree test</strong> of today's nav versus this one, with web2 and crypto-native groups ${c(70, 73)}.</li>
<li><strong>PostHog Markdown-request data and search logs</strong> by section, to see what agents and people actually pull.</li>
<li><strong>MLH rerun</strong> question from the brief: after the first screen, can participants say what Solana is and what they'd build?</li>
</ol>

${h2("Appendix A: the brief, in full")}
<p>Reproduced from the Notion brief ${c(1)} as shared on 12 Oct 2026. Formatting adapted for this page.</p>
<div style="border:1px solid var(--line);border-radius:14px;background:#fff;padding:8px 26px 14px;margin:14px 0 30px">
<h3>TL;DR</h3>
<p>solana.com/developers becomes a job picker: every developer enters through a problem they already have, and leaves with something working. Solana fundamentals are never an initial blocker.</p>
<p>Each concept appears only at the step of a build that needs it, preferably explained against something the developer already knows.</p>
<p>We ship three use cases / job paths first (stablecoin payments, pay-per-call APIs, Tokenized Assets), on one shared path template, and validate by rerunning the MLH focus group / Creating our own.</p>
<h3>Why</h3>
<p>Web2 / “regular” developers arrive with a problem to solve; today's page answers "why Solana over other chains" and teaches concepts before showing anything they can build.</p>
<ul>
<li><strong>MLH focus group (Sept 2026):</strong> participants could not say what Solana is or what they would build with it. They compared it to Stripe and traditional databases, not other chains. Concepts like transactions, accounts and framework choice arrived without context, and examples ended with no next step. MLH's recommendation: explain Solana through the questions web2 developers already ask.</li>
<li>Developers land on concept-heavy pages (keypairs, decentralization) and disengage. We should lead with concrete use cases and weave fundamentals in.</li>
<li><strong>Existing flags:</strong> the solana.com Build dropdown already has a "Build by use case" column (Payments, DeFi, Gaming, Token Extensions, Agents and AI), but it sits third.</li>
</ul>
<h3>Principles</h3>
<p>Every job path is held to these rules:</p>
<ol>
<li><strong>Name the outcome.</strong> "Charge per API call", not "SPL tokens". The developer should recognise their own problem in the title.</li>
<li><strong>Fundamentals arrive just in time.</strong> A concept appears only at the step that uses it. It gets at most two sentences, a web2 analogy, and a link to docs for depth.</li>
<li><strong>No concept gate before first success.</strong> Nothing to read, install or decide before the developer sees their result working. The first success happens in the browser playground; local "try it yourself" guides, installation and setup come after it.</li>
<li><strong>Use it, then show it live.</strong> Before building, the developer uses the product as a customer would (a wallet, a stablecoin received) then sees the real network doing that job right now, not a mock (This builds on principle 3)</li>
<li><strong>End in their stack.</strong> The last build step runs from the developer's own machine, then offers the next path or a guided program.</li>
</ol>
<h3>Page architecture</h3>
<p>The landing page has one job: get the developer into the right path within one scroll. Top to bottom:</p>
<ol>
<li>What Solana does for them, with no chain vocabulary. Draft: "A shared global ledger your code runs on. Payments and records settle in under a second for a fraction of a cent."</li>
<li>One module showing the network working now: throughput, median fee, finality.</li>
<li><strong>"What are you building?" job picker.</strong> One card per job path: the developer's question as the title, one line on fit, one button into the path.</li>
<li><strong>Guided routes such as Docs,</strong> Solana School, Ecosystem partners for developers who want a structured start.</li>
</ol>
<p>Mockup of the job picker (item 3), structure only, not final copy or design: <em>job-picker-mockup.html</em></p>
<p>There is no standalone concepts section on the landing page.</p>
<p>Navigation changes compared to solana.com: the existing "Build by use case" column moves first in the Build dropdown and becomes the job-path list, each entry relabelled as the developer's question ("Payments" → "Accept dollar payments").</p>
<p>Concepts / Technology (Token Extensions as an example) leaves that dropdown and folds into the use case / job path (Tokenised assets as an example), since they are primitives, not a job.</p>
<p>Start building and Tools and references follow behind it.</p>
<h3>The job paths</h3>
<p>The following is an idea for the initial job paths, mentioning what the user would build and which fundamentals they would learn.</p>
${table(["Path (the developer's question)", "What they build", "Fundamentals picked up"], [
  ["<strong>Wave 1 · Accept dollar payments that settle in seconds</strong>", "A checkout that takes a stablecoin payment and confirms it server-side", "Wallets and signatures, transactions, token accounts, confirmation"],
  ["<strong>Wave 1 · Charge a few cents per API call</strong>", "A paywalled API endpoint that unlocks after payment", "Transaction fees, RPC, verifying a payment from a backend"],
  ["<strong>Wave 1 · Issue a tokenized asset with compliance controls</strong>", "A token with metadata, transfer rules and a freeze/pause control", "Accounts, mint authority, programs (Token-2022), extensions"],
  ["<strong>Wave 2 · Keep a shared record partners can audit</strong>", "A small program that records who changed what, queried from an app", "Writing a program, accounts as state, PDAs, Anchor"],
  ["<strong>Wave 2 · Let players own items across games</strong>", "An item minted to a player and read by a second app", "Tokens as ownership, metadata, reading state"],
])}
<h3>Anatomy of a job path</h3>
<p>Every path follows the same six stages, so the team builds one template and fills it per job.</p>
${table(["Stage", "What the developer does", "Fundamentals picked up here"], [
  ["1. The job", "A problem they already have, in their words", "Nothing yet: plain language, no chain vocabulary"],
  ["2. Fit check", "Where Solana fits, and where it does not", "Fees and settlement time"],
  ["3. Use it, then see it live", "Receive a stablecoin in a wallet, then watch it", "Transactions and the explorer: a transaction is a signed request, here is one"],
  ["<strong>4. Build it in the browser</strong>", "<strong>First success in the playground, no install</strong>", "Wallets, accounts, programs: only those this build touches, two lines each"],
  ["5. Plug it into your stack", "Same result from their own backend and SDK", "RPC, confirmation, fees in production"],
  ["6. Go further", "Next job path, deep docs, or a guided program", "Depth on demand: links into docs"],
])}
<h3>Fundamentals coverage map</h3>
<p>Across the five paths, every core concept is taught at least once, always inside a build.</p>
<h3>Phasing and owners</h3>
<p>The Payments path is built first as the pilot for the template; the other two Wave 1 paths are cloned from it once it passes review.</p>
${table(["Phase", "Work", "Definition of Done"], [
  ["Phase 0 · Align", "First 3 jobs; path template draft", "Scope signed off"],
  ["Phase 1 · Pilot", "Use-case column first; hero and job picker; Payments path pilot", "Pilot path approved"],
  ["Phase 2 · Build", "Pay-per-call path; Tokenized asset path", "Three paths live"],
  ["Phase 3 · Validate", "Validate through assessment; pick Wave 2 paths", "Initial assessment passes"],
])}
${table(["Workstream", "Owner"], [
  ["Execution lead, information architecture, path template", "Awesome Docs team"],
  ["Playground integration", "Playground team"],
  ["Short video per job path", "Bri"],
])}
<h3>Open decisions</h3>
<p>These close at the Phase 0 Definition of done.</p>
<ul>
<li>☐ <strong>Wave 1 paths.</strong> Recommended: Payments, Pay-per-call, Tokenized asset. One alternative could be swapping one for a program-writing path</li>
<li>☐ <strong>Where "web3" appears.</strong> Recommended: never in path titles or the hero; allowed in deeper docs.</li>
<li>☐ <strong>Initial phase 1 assessment:</strong> MLH rerun? Internal process?</li>
</ul>
</div>

${h2("Sources")}
<ol style="list-style:none;padding-left:0;font-size:14px">
${src(1, "Internal Notion brief: “TL;DR: solana.com/developers becomes a job picker” (Awesome Docs team), shared 12 Oct 2026. Reproduced in full in Appendix A, including the MLH focus group findings (Sept 2026). The job-picker-mockup.html it references was not available to this work.")}
${src(2, "Live solana.com/developers and solana.com/docs pages, inspected 12–13 Oct 2026", "https://solana.com/developers")}
${src(10, "Stripe docs", "https://docs.stripe.com/")}
${src(11, "Stripe: Get started → Use cases", "https://docs.stripe.com/get-started/use-cases")}
${src(12, "Base docs", "https://docs.base.org/")}
${src(13, "Circle developer docs", "https://developers.circle.com/")}
${src(14, "Coinbase Developer Platform docs", "https://docs.cdp.coinbase.com/")}
${src(15, "Plaid docs", "https://plaid.com/docs/")}
${src(16, "Cloudflare developer docs: use cases", "https://developers.cloudflare.com/use-cases/")}
${src(17, "Sui docs", "https://docs.sui.io/")}
${src(18, "Polygon docs", "https://docs.polygon.technology/")}
${src(19, "ethereum.org developer docs", "https://ethereum.org/developers/docs/")}
${src(20, "AWS documentation", "https://docs.aws.amazon.com/")}
${src(21, "Azure Architecture Center", "https://learn.microsoft.com/en-us/azure/architecture/")}
${src(22, "Canton Network docs (Overview · App Development · Global Synchronizer · Integrations · SDKs and Tools · API Reference)", "https://docs.canton.network/")}
${src(23, "Shopify: Apps → Build (Functions nested inside)", "https://shopify.dev/docs/apps/build")}
${src(24, "Stripe: Developer resources (CLI, SDKs, testing, agents/MCP, Extend Stripe)", "https://docs.stripe.com/development")}
${src(30, "Robillard & DeLine (2011), A field study of API learning obstacles", "https://www.cs.mcgill.ca/~martin/papers/ese2011.pdf")}
${src(31, "Meng, Steinhardt & Schubert (2019), How developers use API documentation: an observation study", "https://mangold-international.com/resources/meng-et-al-how-developers-use-api-documentation-2019.pdf")}
${src(32, "Meng et al. (2020), Optimizing API documentation (SIGDOC)", "https://mangold-international.com/resources/meng-et-al-optimizing-api-documentation-2020.pdf")}
${src(33, "Meng et al. (2018), API documentation: what do software developers want?", "https://journals.sagepub.com/doi/full/10.1177/0047281617721853")}
${src(34, "Uddin & Robillard (2015), How API documentation fails", "https://www.cs.mcgill.ca/~martin/papers/ieeesw2015.pdf")}
${src(35, "Aghajani et al. (2020), Software documentation: the practitioners' perspective (ICSE)", "https://www.inf.usi.ch/faculty/lanza/PUBS/P/Agha2020a.pdf")}
${src(36, "Diátaxis: complex hierarchies (archived)", "https://github.com/evildmp/diataxis-documentation-framework/blob/de7a2d813e2fda339b959e3075afb4e2f09bf54c/complex-hierarchies.rst")}
${src(37, "Rosenfeld & Morville, Information Architecture for the WWW: organisation schemes", "https://files.znu.edu.ua/files/comp.books/books/information_architecture_for_WWW/infoarch/ch03_02.htm")}
${src(38, "Nielsen Norman Group: audience-based website navigation", "https://www.nngroup.com/videos/audience-based-website-navigation/")}
${src(39, "GOV.UK: the trouble with audience-based navigation", "https://insidegovuk.blog.gov.uk/2014/07/18/hey-you-there-the-trouble-with-audience-based-navigation/")}
${src(40, "Gerry McGovern, Top Tasks", "https://articles.centercentre.com/?p=877")}
${src(41, "Mark Baker, Every Page is Page One", "https://xmlpress.net/publications/eppo/")}
${src(50, "Mintlify: State of AI in docs", "https://www.mintlify.com/blog/state-of-ai")}
${src(51, "Mintlify: State of Knowledge 2026", "https://www.mintlify.com/state-of-knowledge/2026")}
${src(52, "GitBook: AI docs data, April 2026", "https://gitbook.com/blog/ai-docs-data-april-2026")}
${src(53, "Vercel: Make your documentation readable by AI agents", "https://vercel.com/kb/guide/make-your-documentation-readable-by-ai-agents")}
${src(54, "Ahrefs: llms.txt study", "https://ahrefs.com/blog/llmstxt-study/")}
${src(55, "Stack Overflow Developer Survey 2025", "https://survey.stackoverflow.co/2025/")}
${src(60, "solana-foundation/solana-com: apps/docs content and packages/ui-chrome/src/developers-nav.tsx", "https://github.com/solana-foundation/solana-com")}
${src(61, "solana-com #1767: Finance, Tokenization and DeFi sections (docs restructure, part 2 of 6)", "https://github.com/solana-foundation/solana-com/pull/1767")}
${src(62, "solana-com #1061: initial payments docs section", "https://github.com/solana-foundation/solana-com/pull/1061")}
${src(63, "solana-com #2127: move Production Readiness and x402 facilitator to Resources", "https://github.com/solana-foundation/solana-com/pull/2127")}
${src(70, "GitLab docs: workflow-based navigation (MR 1812)", "https://gitlab.com/gitlab-org/gitlab-docs/-/merge_requests/1812")}
${src(71, "GitLab docs: global navigation guidelines", "https://docs.gitlab.com/development/documentation/site_architecture/global_nav/")}
${src(72, "GitLab: navigation research", "https://about.gitlab.com/blog/navigation-research-blog-post/")}
${src(73, "Twilio: designing a Console that matches the customer journey", "https://www.twilio.com/en-us/blog/designing-console-that-matches-customer-journey")}
${src(74, "Gatsby: announcing the new docs site", "https://v3.gatsbyjs.com/blog/announcing-new-gatsby-docs-site")}
</ol>`,
  why: [N("why", "This page exists so reviewers can trace every structural decision in the mockup back to the brief or to a source.")],
});

/* ===================================================== v4 hubs */
page("docs/use-cases", {
  title: "All use cases",
  desc: "Every job the docs cover, grouped by the three pieces of internet capital markets: money, assets and markets.",
  body: () => `
${h2("Payments")}
${cards([["Accept dollar payments", "Path · build a checkout in ~30 min", "@/docs/payments/checkout/", "Path"], ["Charge per API call", "Path · paywall an endpoint in ~30 min", "@/docs/payments/paywall-api/", "Path"], ["Subscriptions, payouts, privacy…", "All payments guides", "@/docs/payments/", "Guides"]], "c3")}
${h2("Assets")}
${cards([["Issue a tokenized asset", "Path · issue an asset in ~45 min", "@/docs/assets/issue-asset/", "Path"], ["Tokens & extensions", "Mints, transfers, extensions", "@/docs/tokens/basics/", "Guides"], ["NFTs & game items", "Metaplex, items players own", "@/docs/assets/games/", "Wave 2"]], "c3")}
${h2("Markets")}
${cards([["Build an exchange", "Order flow and settlement", "@/docs/markets/exchange/", "Guides"], ["Delivery vs payment", "Swap an asset for USDC atomically", "@/docs/markets/dvp/", "Guides"], ["MEV protection", "Protect users' orders", "@/docs/markets/mev/", "Guides"]], "c3")}
${h2("Something else")}
${cards([["Keep a shared record", "Write your own program (Wave 2 path)", "@/docs/programs/", "Develop"], ["Coming from Ethereum", "Map EVM concepts to Solana", "@/docs/from-ethereum/", "Start here"]])}`,
  why: [N("why", "Stripe has the same kind of page (<i>Find your use case</i>) alongside its domain tabs. It's the one place that lists every job, so the tabs can stay few.")],
});
page("docs/assets", {
  title: "Assets",
  desc: "Guides for creating and managing tokens: tokenized funds and securities, stablecoins, points, NFTs and game items.",
  body: () => `${hubPath("tokenization", "Hold a restricted asset, watch a blocked transfer, then create your own with approvals and a pause switch.")}
${h2("Tokenization")}
${cards([["Allowlists (Token ACL)", "Approve holders without writing a program.", "@/docs/tokenization/token-acl/"], ["KYC with Attestations", "Issue and check verifiable claims.", "@/docs/tokenization/attestations/"], ["NAV strikes for funds", "Daily pricing for money-market style funds.", "@/docs/tokenization/nav-strikes/"], ["Delivery vs payment", "Settle an asset against USDC. Lives in Markets.", "@/docs/markets/dvp/"]])}
${h2("Tokens")}
${cards([["Token basics", "Mints, minting, transfers, freeze and thaw.", "@/docs/tokens/basics/"], ["Token extensions", "Metadata, pausable, default state, transfer hooks.", "@/docs/tokens/extensions/"], ["NFTs with Metaplex", "Collections and digital items.", "@/docs/tokens/metaplex/"], ["Let players own items", "Wave 2 path.", "@/docs/assets/games/"]])}
${callout(`<p>How token accounts, mints and extensions <em>work</em> is explained once, in <a href="@/docs/concepts/token-account/">How Solana works</a>. The guides here are how-tos that link there.</p>`)}`,
  why: [
    N("change", "Today general token docs, including NFTs and Metaplex, sit under <i>Finance → Assets</i>. Naming the tab <b>Assets</b> rather than Finance or Tokenization gives NFT and game developers a home too, and fits the internet capital markets framing (money, assets, markets)."),
    N("why", "With token mechanics included this is one of the largest tabs (about 55 pages today), which answers the earlier worry that a tokenization tab alone would be too thin (5 pages)."),
  ],
});
page("docs/markets", {
  title: "Markets",
  desc: "Guides for exchanges, order flow and settlement.",
  body: () => `${cards([["Build an exchange", "Order books, matching and settlement.", "@/docs/markets/exchange/"], ["Delivery vs payment", "Swap an asset for USDC atomically. One canonical page.", "@/docs/markets/dvp/"], ["MEV protection", "Protect users' orders from front-running.", "@/docs/markets/mev/"], ["Stake-weighted QoS", "Get transactions landed reliably under load.", "@/docs/markets/swqos/"]])}`,
  why: [
    N("change", "DvP is split today across <code>tokenization/dvp</code> and <code>defi/dvp-program/</code> (5 pages). Settlement is a market activity, so it gets one canonical page here, linked from Assets."),
    N("risk", "<b>This is the thinnest tab</b> (about 9 pages today). It earns its place because it completes the money / assets / markets framing and is where the Markets Wave 2 work lands. If it isn't growing within a couple of quarters, fold it into Assets as <i>Assets &amp; markets</i>."),
  ],
});
page("docs/resources", {
  title: "Resources",
  desc: "Set up your environment and the tools that apply whatever you're building: onchain programs, AI coding agents, the CLI, frontends, local testing and production readiness.",
  body: () => `${cards([["Write onchain programs", "Rust and Anchor, from first program to deploy.", "@/docs/programs/"], ["Build with AI coding agents", "MCP server and the Solana skill.", "@/docs/resources/agents/"], ["Set up your machine", "CLI, Anchor and Surfpool, when you need them.", "@/docs/resources/setup/"], ["React & Next.js", "Wallet connection, hooks and server patterns.", "@/docs/resources/frontend/"], ["Developer tools", "Surfpool, LiteSVM, Microscope and more.", "@/docs/resources/tools/"], ["Solana CLI", "Keys, airdrops, deploys and config.", "@/docs/resources/cli/"], ["Production readiness", "Infrastructure, monitoring and keys before launch.", "@/docs/resources/production/"]])}`,
  why: [
    N("why", "Modelled on Stripe's <b>Developer resources</b> tab, which holds the CLI, SDKs, testing, agent and MCP setup, Workbench and production tooling, and keeps API reference separate."),
    N("change", "This replaces today's catch-all <i>Resources</i> tab and the old <i>Getting Started → Installation</i>. Setup is reached from step 3 of a path, never before first success."),
  ],
});
page("docs/programs", {
  title: "Write onchain programs",
  desc: "When existing programs (tokens, payments) aren't enough, write your own: code that runs on Solana, owns accounts and can be called by anyone.",
  body: () => `<div class="pcard"><div><div class="k">Path · coming in Wave 2</div><h3>Keep a shared record partners can audit</h3><p>A small program that records who changed what, queried from an app. Until it ships, start with the first program in your browser.</p></div><a class="btnd purple" href="@/docs/programs/first-program/">First program in the browser ${I.arrow}</a></div>
${cards([["Anchor framework", "The standard framework for Solana programs in Rust.", "@/docs/programs/anchor/"], ["Testing programs", "LiteSVM, Surfpool and Anchor tests.", "@/docs/programs/testing/"], ["Deploying", "Devnet, mainnet and upgrade authority.", "@/docs/programs/deploying/"], ["IDLs & Codama clients", "Generate typed clients for your program.", "@/docs/programs/idls/"]])}
${callout(`<p>New to how programs, accounts and PDAs work? Start with ${chip("program")} and ${chip("pda")} in How Solana works.</p>`)}`,
  why: [
    N("why", "<b>Why Programs lives in Resources.</b> This follows Stripe, which puts its custom code (“Extend Stripe”: apps, extensions, custom objects) inside <i>Developer resources</i>. Shopify does the same, nesting Functions under Apps → Build. Writing programs is a build skill, like frontend, testing and tooling, so it sits with them. It's also one less tab in the bar."),
    N("why", "<b>It stays easy to find.</b> Start here links to it directly (<i>Build your own → Write onchain programs</i>), and so does the “Keep a shared record” card on the Start here page. Experienced Solana developers get there in one click."),
    N("why", "<b>Why it isn't in API.</b> Reference is for lookups (RPC methods, SDK APIs). Writing a program is a tutorial and how-to activity."),
    N("risk", "If analytics or the tree test show Programs is a primary destination for a large share of visitors (likely for crypto-native developers), promote it back to its own tab, the way Canton gives App Development a top-level tab."),
    N("why", "Like the domain tabs, it opens with a path: the Wave 2 “Keep a shared record” path from the brief."),
  ],
});

/* ===================================================== tab assignment */
// The tab follows the URL, so the sidebar and the address never disagree.
const tabFor = (p) =>
  /^docs\/payments(\/|$)/.test(p) ? "payments"
  : /^docs\/(assets|tokenization|tokens)(\/|$)/.test(p) ? "assets"
  : /^docs\/markets(\/|$)/.test(p) ? "markets"
  : /^docs\/concepts(\/|$)/.test(p) ? "concepts"
  : /^docs\/(programs|resources)(\/|$)/.test(p) ? "resources"
  : /^docs\/reference(\/|$)/.test(p) ? "reference"
  : "start";
for (const pg of Object.values(pages)) pg.tab = tabFor(pg.path);
