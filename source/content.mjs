// Page content: docs IA, job paths, concept pages, and design notes.
import { I, concept, chip, h2, callout, cards, flow, fit, table, checklist, code, ghost, concepts, slug } from "./helpers.mjs";

/* ================================================================ paths */
export const paths = {
  payments: {
    tab: "payments", label: "Payments", job: "Accept dollar payments", name: "Build a checkout", time: "~30 min", first: 1,
    steps: [
      ["docs/payments/build/try-it", "Pay as a customer"],
      ["docs/payments/build/browser", "Build it in the browser"],
      ["docs/payments/build/backend", "Confirm from your backend"],
      ["docs/payments/build/go-live", "Go live"],
    ],
  },
  apis: {
    tab: "apis", label: "Pay-per-call", job: "Charge per API call", name: "Paywall an endpoint", time: "~30 min", first: 1,
    steps: [
      ["docs/apis/build/try-it", "Call a paid API"],
      ["docs/apis/build/browser", "Paywall it in the browser"],
      ["docs/apis/build/server", "Add it to your server"],
      ["docs/apis/build/go-live", "Go live"],
    ],
  },
  tokenization: {
    tab: "tokenization", label: "Tokenized asset", job: "Issue a tokenized asset", name: "Issue an asset", time: "~45 min", first: 1,
    steps: [
      ["docs/tokenization/build/try-it", "Hold a restricted asset"],
      ["docs/tokenization/build/browser", "Create it in the browser"],
      ["docs/tokenization/build/local", "Run it from your machine"],
      ["docs/tokenization/build/go-live", "Go live"],
    ],
  },
};

/* ================================================================= tabs */
export const tabs = [
  { id: "start", label: "Start here", icon: I.home, href: "docs" },
  { id: "payments", label: "Payments", icon: I.card, href: "docs/payments" },
  { id: "apis", label: "APIs & agents", icon: I.api, href: "docs/apis", isNew: true },
  { id: "tokenization", label: "Tokenization", icon: I.layers, href: "docs/tokenization" },
  { id: "more", label: "More use cases", icon: I.grid, href: "docs/more" },
  { sep: true },
  { id: "concepts", label: "How Solana works", icon: I.cube, href: "docs/concepts" },
  { id: "reference", label: "Reference", icon: I.code, href: "docs/reference" },
];

/* ============================================================ sidebars */
const guide = (p, t, kids) => ({ p, t, kids });
export const sidebars = {
  start: [
    { p: "docs", t: "Start here" },
    { h: "Set up" },
    { p: "docs/agents", t: "Build with AI coding agents" },
    { p: "docs/setup", t: "Set up your machine" },
    { p: "docs/from-ethereum", t: "Coming from Ethereum" },
  ],
  payments: [
    { p: "docs/payments", t: "Overview" },
    { path: "payments" },
    { h: "Guides" },
    guide("docs/payments/send", "Send payments", [["docs/payments/send/basic", "Basic payment"], ["docs/payments/send/memo", "Payment with memo"], ["docs/payments/send/verify-address", "Verify an address"], ["docs/payments/send/processing", "Payment processing"]]),
    guide("docs/payments/accept", "Accept payments", [["docs/payments/accept/solana-pay", "Solana Pay"], ["docs/payments/accept/verification", "Verification tools"], ["docs/payments/accept/indexing", "Indexing & webhooks"]]),
    { p: "docs/payments/subscriptions", t: "Subscriptions" },
    { p: "docs/payments/payouts", t: "Payouts & disbursements" },
    guide("docs/payments/advanced", "Advanced", [["docs/payments/advanced/deferred", "Deferred execution"], ["docs/payments/advanced/spend-permissions", "Spend permissions"]]),
    { h: "Tools for this job" },
    { p: "docs/payments/tools/commerce-kit", t: "Commerce Kit" },
    { p: "docs/payments/tools/kora", t: "Kora (fee sponsorship)" },
    { p: "docs/payments/tools/solana-pay", t: "Solana Pay" },
  ],
  apis: [
    { p: "docs/apis", t: "Overview" },
    { path: "apis" },
    { h: "Guides" },
    { p: "docs/apis/x402", t: "How x402 works" },
    { p: "docs/apis/agents", t: "Agents that pay" },
    { p: "docs/apis/mpp", t: "Machine payments (MPP)" },
    { p: "docs/apis/pay-sh", t: "pay.sh" },
    { h: "Tools for this job" },
    { p: "docs/apis/facilitator", t: "x402 facilitator" },
    { p: "docs/payments/tools/kora", t: "Kora (fee sponsorship)" },
  ],
  tokenization: [
    { p: "docs/tokenization", t: "Overview" },
    { path: "tokenization" },
    { h: "Guides" },
    guide("docs/tokenization/basics", "Token basics", [["docs/tokenization/basics/create-mint", "Create a mint"], ["docs/tokenization/basics/mint", "Mint tokens"], ["docs/tokenization/basics/transfer", "Transfer tokens"], ["docs/tokenization/basics/freeze", "Freeze & thaw"], ["docs/tokenization/basics/authorities", "Set authorities"]]),
    guide("docs/tokenization/extensions", "Token extensions", [["docs/tokenization/extensions/metadata", "Metadata"], ["docs/tokenization/extensions/pausable", "Pausable"], ["docs/tokenization/extensions/default-state", "Default account state"], ["docs/tokenization/extensions/permanent-delegate", "Permanent delegate"], ["docs/tokenization/extensions/transfer-hook", "Transfer hook"], ["docs/tokenization/extensions/confidential", "Confidential transfers"]]),
    { p: "docs/tokenization/token-acl", t: "Allowlists (Token ACL)" },
    { p: "docs/tokenization/dvp", t: "Delivery vs payment" },
    { p: "docs/tokenization/nav-strikes", t: "NAV strikes for funds" },
    { p: "docs/tokenization/verify-token", t: "Verify a token" },
    { h: "Tools for this job" },
    { p: "docs/tokenization/attestations", t: "Attestations (KYC claims)" },
    { p: "docs/tokenization/metaplex", t: "Metaplex" },
  ],
  more: [
    { p: "docs/more", t: "All use cases" },
    { h: "Markets & trading" },
    guide("docs/more/markets", "Overview", [["docs/more/markets/exchange", "Build an exchange"], ["docs/more/markets/mev", "MEV protection"], ["docs/more/markets/swqos", "Stake-weighted QoS"]]),
    { h: "Games & digital items" },
    { p: "docs/more/games", t: "Let players own items" },
    { h: "Privacy" },
    { p: "docs/more/privacy", t: "Private payments" },
    { h: "Keep a shared record" },
    { p: "docs/more/programs", t: "Write your own program" },
    { p: "docs/more/programs/first-program", t: "First program in the browser" },
    { p: "docs/more/programs/anchor", t: "Anchor framework" },
    { p: "docs/more/programs/testing", t: "Testing programs" },
    { p: "docs/more/programs/deploying", t: "Deploying" },
    { p: "docs/more/programs/idls", t: "IDLs & Codama clients" },
  ],
  concepts: (() => {
    const cats = {};
    for (const [k, c] of Object.entries(concepts)) (cats[c.cat] ||= []).push(k);
    return [{ p: "docs/concepts", t: "Overview & coverage" }, ...Object.entries(cats).flatMap(([cat, ks]) => [{ h: cat }, ...ks.map((k) => ({ p: `docs/concepts/${slug(k)}`, t: concepts[k].name }))])];
  })(),
  reference: [
    { p: "docs/reference", t: "Overview" },
    { h: "APIs" },
    guide("docs/reference/rpc", "RPC methods", [["docs/reference/rpc/http", "HTTP methods"], ["docs/reference/rpc/websocket", "WebSocket methods"], ["docs/reference/rpc/providers", "RPC providers"]]),
    guide("docs/reference/sdks", "SDKs", [["docs/reference/sdks/typescript", "TypeScript (Kit)"], ["docs/reference/sdks/rust", "Rust"], ["docs/reference/sdks/python", "Python"]]),
    { p: "docs/reference/frontend", t: "React & Next.js" },
    { h: "Tools" },
    guide("docs/reference/tools", "Developer tools", [["docs/reference/tools/surfpool", "Surfpool"], ["docs/reference/tools/litesvm", "LiteSVM"], ["docs/reference/tools/microscope", "Microscope"], ["docs/reference/tools/keychain", "Keychain"], ["docs/reference/tools/private-channels", "Private Channels"]]),
    { p: "docs/reference/cli", t: "Solana CLI" },
    { h: "Ship" },
    { p: "docs/reference/production", t: "Production readiness" },
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
const liveFeed = () => `<div class="feed light" id="feed" data-live><div class="row head"><span>Age</span><span>Transaction touching USDC</span><span>Status</span><span></span></div>
${[["2s ago", "5VfY…h3Kq"], ["2s ago", "3kPq…tV9a"], ["3s ago", "Hq1c…9pLm"], ["4s ago", "2xTr…Ww7e"]].map(([a, s]) => `<div class="row"><span>${a}</span><span class="sig">${s}</span><span class="ok">● confirmed</span><a class="ext" href="#">↗</a></div>`).join("")}</div><div class="feedsrc">sample data · connecting to mainnet…</div>`;
const N = (t, h) => ({ t, h });

/* ================================================================ pages */
export const pages = {};
const page = (p, o) => (pages[p] = { path: p, ...o });

/* ------------------------------------------------------------ START */
page("docs", {
  tab: "start", title: "Start here", wide: true,
  desc: "Pick what you're building. Every path starts in your browser, ends running in your own stack, and teaches you the parts of Solana each step needs, when it needs them.",
  body: () => `
<div class="dpick">
  <a href="@/docs/payments/"><span class="di">${I.card}</span><h3>Accept dollar payments that settle in seconds</h3><p>Take USDC (digital dollars) from anyone. Money arrives in under a second for less than a cent, with no percentage fee and no chargebacks.</p><div class="dm"><span>First result ~5 min</span><b>Build a checkout →</b></div></a>
  <a href="@/docs/apis/"><span class="di">${I.api}</span><h3>Charge a few cents per API call</h3><p>Price each request at a cent or less. People's apps and AI agents pay inline over HTTP, with no signup, API key or invoice.</p><div class="dm"><span>First result ~5 min</span><b>Paywall an endpoint →</b></div></a>
  <a href="@/docs/tokenization/"><span class="di">${I.layers}</span><h3>Issue a tokenized asset with compliance controls</h3><p>A fund share, point or real-world asset, with an approval list and a pause switch enforced by the network.</p><div class="dm"><span>First result ~10 min</span><b>Issue an asset →</b></div></a>
</div>
${cards([
  ["Trading & markets", "Exchanges, order flow, MEV protection.", "@/docs/more/markets/", "Guides"],
  ["Games & digital items", "Items players own and other apps can read.", "@/docs/more/games/", "Guides"],
  ["Keep a shared record", "Write your own program when existing ones aren't enough.", "@/docs/more/programs/", "Guides"],
], "c3")}
${h2("Already know your way around?")}
${cards([
  ["How Solana works", "Accounts, transactions, programs and fees in depth.", "@/docs/concepts/"],
  ["RPC reference", "Every HTTP and WebSocket method.", "@/docs/reference/rpc/"],
  ["SDKs", "TypeScript, Rust, Python and community clients.", "@/docs/reference/sdks/"],
  ["Coming from Ethereum", "Map EVM concepts to Solana before you migrate.", "@/docs/from-ethereum/"],
])}
${h2("Build with AI coding agents")}
${callout(`<p><strong>Using Claude Code, Cursor or Codex?</strong> Add the Solana MCP server or install the official Solana skill so your agent knows the current SDKs. <a href="@/docs/agents/">Set it up →</a></p>`)}
`,
  why: [
    N("change", "Today <code>/docs</code> opens with three cards: <i>Quick Start</i> (a Solana Playground course on accounts, PDAs and CPIs), <i>AI agents</i>, and <i>Core Concepts</i>. That's two concept gates and one tool. Here the docs front door is the same job picker as solana.com/developers, so someone arriving from search lands in the same place."),
    N("why", "Concepts and reference are still one click away under <b>Already know your way around?</b>. Crypto-native developers lose nothing."),
    N("why", "The AI-agent card stays. More and more developers arrive through their coding agent, and that card is about tooling, not concepts."),
  ],
});
page("docs/agents", { tab: "start", title: "Build with AI coding agents", desc: "Give your coding agent current Solana knowledge with the MCP server or the official skill.", stub: { was: "/docs/intro/coding-with-agents" } });
page("docs/setup", { tab: "start", title: "Set up your machine", desc: "Install the Solana CLI, Anchor and Surfpool when you're ready to write programs or run a local network. None of the job paths need this.", stub: { was: "/docs/intro/installation" },
  why: [N("change", "This was step 2 of <i>Getting Started</i>. The paths now link here as optional from their <i>run it from your machine</i> step, because the payments and API paths only need <code>npm install</code> and a URL.")] });
page("docs/from-ethereum", { tab: "start", title: "Coming from Ethereum", desc: "How EVM concepts map onto Solana: accounts vs contract storage, programs vs contracts, fees and finality.", stub: { was: "/developers/evm-to-svm" } });

/* ------------------------------------------------------------ PAYMENTS */
page("docs/payments", {
  tab: "payments", title: "Accept dollar payments that settle in seconds",
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
${callout(`<p>Moving real money? Read <a href="@/docs/reference/production/">Production readiness</a> before you launch. It covers RPC infrastructure, confirmation, monitoring and key management.</p>`)}
`,
  why: [
    N("why", "This page covers stages 1 and 2 of the template: <b>the job</b> in the developer's words, then an honest <b>fit check</b>. The title is the job (“Accept dollar payments”), not the technology."),
    N("change", "Today's /docs/payments opens with <i>“New to how balances and ownership work on Solana? Read Core Concepts, then review Assets”</i>, which is a concept gate in the second paragraph. That line is gone. The concepts appear inside the steps instead."),
    N("change", "Today's <i>Why Solana</i> list is all upsides. The fit check keeps those facts but adds a comparison against cards and a <b>Not the right fit</b> column. MLH participants compared Solana with Stripe, so we answer that comparison in its own terms."),
    N("why", "The guides (send, accept, subscriptions…) are unchanged and still live here. The path is a linear 30-minute build that sits <i>above</i> the guides. It doesn't duplicate them, and it links into them at the end."),
  ],
});

page("docs/payments/build/try-it", {
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
<p>Real businesses are doing exactly this right now. These are live transactions involving USDC on mainnet:</p>
${liveFeed()}
${next("docs/payments/build/browser", "Build the checkout in your browser", "Edit the code behind the button you just used, and take your first payment with it.")}
`,
  why: [
    N("why", "Principle 4, <b>use it, then show it live</b>. The developer goes through the product as a customer before seeing any code, then reads <i>their own</i> transaction, then sees the real network doing the same thing. The Explorer is taught on a transaction they made, which means more than a sample one would."),
    N("risk", "<b>Principles 3 and 4 pull against each other.</b> Receiving a stablecoin normally means installing a wallet app, which is an install before first success. This page uses an <b>in-page devnet wallet</b> (a burner key in browser storage) plus a faucet. That's a hard dependency for the Playground team: a hosted devnet USDC faucet that won't rate-limit a focus group. <i>Connect your own wallet</i> should be an option, never the default."),
    N("why", "Three concepts are introduced, each in two sentences with a web2 analogy: wallet, transaction, token account. Devnet appears only as an inline chip. Every card links to the matching concept page, which shows the same text."),
    N("why", "The shop pays the network fee here, so a first-time customer never has to hear about SOL. The production version of this decision is taught in <i>Go live</i> (fee sponsorship)."),
  ],
});

page("docs/payments/build/browser", {
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
${next("docs/payments/build/backend", "Confirm payments from your backend", "Run a verify endpoint on your own machine and only ship orders the network has confirmed.")}
`,
  why: [
    N("why", "<b>This is the first-success moment</b>, about 5 minutes from landing, with nothing to read, install or decide first. It's built on the Commerce Kit playground that already exists (<code>launch.solana.com/products/commercekit/playground</code>)."),
    N("change", "Today's quickstart, <i>“Quickstart: accept a payment”</i>, opens with <i>“You need Node.js 20+, a React or Next.js app…”</i> and <code>pnpm add</code>, and the browser playground sits <i>below</i> that. The single biggest content change in the pilot is flipping that order."),
    N("why", "Only the concepts this code touches show up here. The address and transaction were already introduced, so they appear as chips, and the signature gets its card now because this is the first time the developer handles one."),
    N("why", "The warning callout sets up the next step, so the path explains why step 3 exists before the developer gets there."),
  ],
});

page("docs/payments/build/backend", {
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
${callout(`<p>Want the CLI, a local test network or Anchor? You don't need them for payments, but <a href="@/docs/setup/">Set up your machine</a> covers them.</p>`)}
${next("docs/payments/build/go-live", "Go live", "Switch to mainnet, decide who pays network fees, and handle the edge cases real customers hit.")}
`,
  why: [
    N("why", "Stage 5 of the template, <b>plug it into your stack</b>. It runs on the developer's machine in their framework, and it carries the path's real engineering lesson: <b>never trust the client, verify on the network</b>. That's the step MLH participants said was missing (“examples ended with no next step”)."),
    N("why", "RPC and confirmation levels are introduced here because this is the first time they matter. Taught before step 2 they would have been noise."),
    N("change", "Installation (CLI, Anchor, Surfpool) is currently <i>Getting Started → Installation</i>. Here it's an optional link, because payments only need <code>npm install</code> and a URL."),
    N("risk", "The code is illustrative. The pilot needs a real, tested <code>findTransfer</code> helper (or a Commerce Kit server helper), so developers don't hand-parse transactions."),
  ],
});

page("docs/payments/build/go-live", {
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
  ["Next path: charge per API call", "Reuses everything you've learned, and adds paying from code instead of from a button.", "@/docs/apis/", "Next path"],
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
page("docs/apis", {
  tab: "apis", title: "Charge a few cents per API call",
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
  ["How x402 works", "The HTTP 402 flow, payment headers and facilitators.", "@/docs/apis/x402/"],
  ["Agents that pay", "Give an AI agent a wallet with a spending limit.", "@/docs/apis/agents/"],
])}
`,
  why: [
    N("why", "This path covers what today's nav calls <i>Agents and AI</i>, so it doesn't need its own Wave 1 path. Pay-per-call is the concrete job agents do with Solana."),
    N("change", "Today this content is split across <i>Payments → Agentic payments → x402</i>, <i>pay.sh</i> and <i>Resources → x402 facilitator</i>. Here it becomes one use case with its own tab."),
    N("why", "The fit check is honest about latency. The first paid request includes a settlement round-trip, so it's not for sub-10 ms SLAs without sessions."),
  ],
});
page("docs/apis/build/try-it", {
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
${next("docs/apis/build/browser", "Paywall an endpoint in your browser", "Write the server side: one middleware, a price and your wallet address.")}`,
  why: [N("why", "Same shape as the payments path: use it as a customer first. Here the “customer” is an HTTP client, so the developer sees raw requests and responses. That's the format web2 API developers already think in."),
        N("why", "Wallet and transaction are introduced again, using the same text as the payments path. Each path is a possible entry point, so <b>at most once per path</b> means once in each path, not once across the site.")],
});
page("docs/apis/build/browser", {
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
${callout(`<p>The test client is a script with its own keypair, which is a wallet in code. That's how AI agents pay: they hold a wallet with a spending limit you set. See <a href="@/docs/apis/agents/">Agents that pay</a>.</p>`)}
${next("docs/apis/build/server", "Add it to your server", "Install the middleware in your own app, choose a facilitator, and call it from a real client.")}`,
  why: [N("why", "The first success is the server side, because that's the developer's job here. The client is simulated so that nothing has to be installed."),
        N("risk", "This needs a <b>hosted devnet demo endpoint and facilitator</b> owned by the docs team. A third-party demo that disappears would break the path. The middleware API shown is illustrative and must match the SDK at launch.")],
});
page("docs/apis/build/server", {
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
${next("docs/apis/build/go-live", "Go live", "Mainnet, pricing in USDC base units, and protecting unpaid routes from abuse.")}`,
  why: [N("why", "RPC and confirmation appear here, at the point where latency becomes a design decision for the API owner."),
        N("why", "The client example uses <code>maxPerRequest</code>. Spending limits are the first question every reviewer asks about agents paying.")],
});
page("docs/apis/build/go-live", {
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
  ["Agents that pay", "Give an AI agent a wallet and a budget.", "@/docs/apis/agents/", "Next"],
  ["Accept dollar payments", "Add a human checkout next to your API.", "@/docs/payments/", "Next path"],
  ["Machine payments (MPP)", "Streaming and session-based payments.", "@/docs/apis/mpp/", "Go deeper"],
  ["Kora", "Run your own fee payer.", "@/docs/payments/tools/kora/", "Tool"],
])}`,
});
page("docs/apis/x402", { tab: "apis", title: "How x402 works", desc: "The HTTP 402 flow in detail: payment requirements, the X-PAYMENT header, verification and settlement.", stub: { was: "/docs/payments/agentic-payments/x402" } });
page("docs/apis/agents", { tab: "apis", title: "Agents that pay", desc: "Give an AI agent a wallet with a spending limit, and let it pay for APIs on its own.", stub: { was: "/docs/payments/agentic-payments" } });
page("docs/apis/mpp", { tab: "apis", title: "Machine payments (MPP)", desc: "Session- and stream-based payments between machines.", stub: { was: "/docs/payments/agentic-payments/mpp" } });
page("docs/apis/pay-sh", { tab: "apis", title: "pay.sh", desc: "Pay for APIs from the command line.", stub: { was: "/docs/payments/pay-sh" } });
page("docs/apis/facilitator", { tab: "apis", title: "x402 facilitator", desc: "Run or choose a facilitator that verifies and settles x402 payments.", stub: { was: "/docs/tools/x402-facilitator" } });

/* -------------------------------------------------------- TOKENIZATION */
page("docs/tokenization", {
  tab: "tokenization", title: "Issue a tokenized asset with compliance controls",
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
  ["Token basics", "Create a mint, mint, transfer, freeze.", "@/docs/tokenization/basics/"],
  ["Token extensions", "Metadata, pause, default state, transfer hooks and more.", "@/docs/tokenization/extensions/"],
  ["Allowlists (Token ACL)", "Approve holders without writing a program.", "@/docs/tokenization/token-acl/"],
  ["Delivery vs payment", "Swap an asset for USDC atomically.", "@/docs/tokenization/dvp/"],
])}`,
  why: [
    N("change", "Today there are two sections, <i>Assets</i> (token basics, extensions, Metaplex) and <i>Issuance &amp; Tokenization</i> (quickstart, Token ACL, DvP, NAV strikes). From a developer's point of view they're the same job, so they merge into one."),
    N("change", "<b>Token Extensions</b> leaves the global Build dropdown, where it was listed as a technology, and becomes a guide inside this job. Nobody's job is “a transfer hook”. Their job is an asset that only approved holders can receive."),
  ],
});
page("docs/tokenization/build/try-it", {
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
${next("docs/tokenization/build/browser", "Create the asset in your browser", "Make your own restricted asset with metadata, pause and default-frozen accounts.")}`,
  why: [N("why", "<b>Failure is the lesson.</b> Watching a transfer get blocked teaches more about compliance controls in five seconds than a page about extensions does."),
        N("risk", "This path's first success needs a browser playground for Token-2022 (today's tokenization quickstart runs on a local network). That's the long pole of Phase 2 for the Playground team.")],
});
page("docs/tokenization/build/browser", {
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
${next("docs/tokenization/build/local", "Run it from your machine", "The same script against devnet from your terminal, plus approving a holder with Token ACL.")}`,
  why: [N("why", "The concept cards come <i>after</i> the success, and each one points at a line in the code the developer just ran. Four cards is the most on any step, and they're the four ideas this asset depends on."),
        N("change", "Today this content is the <i>Quickstart: launch a token</i>, which runs on a local test network (Surfpool) with CodeTabs for Kit, legacy and Rust. Those code samples carry over to the next step.")],
});
page("docs/tokenization/build/local", {
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
${next("docs/tokenization/build/go-live", "Go live", "Protect the authority keys, connect KYC, and write the pause runbook.")}`,
});
page("docs/tokenization/build/go-live", {
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
  ["Delivery vs payment", "Swap the asset for USDC atomically.", "@/docs/tokenization/dvp/", "Next"],
  ["NAV strikes for funds", "Daily pricing for money-market style funds.", "@/docs/tokenization/nav-strikes/", "Go deeper"],
  ["Accept dollar payments", "Take USDC for subscriptions to your fund.", "@/docs/payments/", "Next path"],
  ["Work with a partner", "Issuance platforms and transfer agents on Solana.", "#", "Get help"],
])}`,
});
const tokStubs = { "basics": ["Token basics", "Create a mint, mint, transfer, freeze and close token accounts.", "/docs/tokens/basics"], "basics/create-mint": ["Create a mint", "", "/docs/tokens/basics/create-mint"], "basics/mint": ["Mint tokens", "", "/docs/tokens/basics/mint-tokens"], "basics/transfer": ["Transfer tokens", "", "/docs/tokens/basics/transfer-tokens"], "basics/freeze": ["Freeze & thaw", "", "/docs/tokens/basics/freeze-account"], "basics/authorities": ["Set authorities", "", "/docs/tokens/basics/set-authority"], "extensions": ["Token extensions", "Every Token-2022 extension, what it does, and when it must be set.", "/docs/tokens/extensions"], "extensions/metadata": ["Metadata", "", "/docs/tokens/extensions/metadata"], "extensions/pausable": ["Pausable", "", "/docs/tokens/extensions/pausable"], "extensions/default-state": ["Default account state", "", "/docs/tokens/extensions/default-state"], "extensions/permanent-delegate": ["Permanent delegate", "", "/docs/tokens/extensions/permanent-delegate"], "extensions/transfer-hook": ["Transfer hook", "", "/docs/tokens/extensions/transfer-hook"], "extensions/confidential": ["Confidential transfers", "", "/docs/tokens/extensions/confidential-transfer"], "token-acl": ["Allowlists (Token ACL)", "Approve and revoke holders from a list, without writing a program.", "/docs/tokenization/token-acl"], "dvp": ["Delivery vs payment", "", "/docs/tokenization/dvp"], "nav-strikes": ["NAV strikes for funds", "", "/docs/tokenization/nav-strikes"], "verify-token": ["Verify a token", "", "/docs/tokens/how-to-verify-a-token"], "attestations": ["Attestations", "Issue and check verifiable claims such as KYC status.", "/docs/tools/attestations"], "metaplex": ["Metaplex", "", "/docs/tokens/metaplex"] };
for (const [k, [t, d, w]] of Object.entries(tokStubs)) page(`docs/tokenization/${k}`, { tab: "tokenization", title: t, desc: d, stub: { was: w } });

/* payments guide stubs */
const payStubs = { "send": ["Send payments", "Everything about moving money out: basic transfers, memos, address checks and processing at scale.", "/docs/payments/send-payments"], "send/basic": ["Basic payment", "", "/docs/payments/send-payments/basic-payment"], "send/memo": ["Payment with memo", "", "/docs/payments/send-payments/payment-with-memo"], "send/verify-address": ["Verify an address", "", "/docs/payments/send-payments/verify-address"], "send/processing": ["Payment processing", "", "/docs/payments/send-payments/payment-processing"], "accept": ["Accept payments", "Checkout flows, Solana Pay, verification and indexing.", "/docs/payments/accept-payments"], "accept/solana-pay": ["Solana Pay", "", "/docs/payments/accept-payments/solana-pay"], "accept/verification": ["Verification tools", "", "/docs/payments/accept-payments/verification-tools"], "accept/indexing": ["Indexing & webhooks", "", "/docs/payments/accept-payments/indexing"], "subscriptions": ["Subscriptions", "Recurring charges using delegated spending authority.", "/docs/payments/subscriptions"], "payouts": ["Payouts & disbursements", "Pay users, vendors or employees in bulk.", "/docs/payments/send-payments/payment-processing"], "advanced": ["Advanced payments", "", "/docs/payments/advanced-payments"], "advanced/deferred": ["Deferred execution", "", "/docs/payments/advanced-payments/deferred-execution"], "advanced/spend-permissions": ["Spend permissions", "", "/docs/payments/advanced-payments/spend-permissions"], "tools/commerce-kit": ["Commerce Kit", "React components and hooks for checkout.", "/docs/tools/commerce-kit"], "tools/kora": ["Kora", "A fee-payer service that lets your app cover network fees for users.", "/docs/tools/kora"], "tools/solana-pay": ["Solana Pay", "", "/docs/tools/solana-pay"] };
for (const [k, [t, d, w]] of Object.entries(payStubs)) page(`docs/payments/${k}`, { tab: "payments", title: t, desc: d, stub: { was: w } });

/* ------------------------------------------------------------- MORE */
page("docs/more", {
  tab: "more", title: "All use cases",
  desc: "Guides for jobs that don't have a full build path yet. Each one becomes a path in Wave 2, using the same template.",
  body: () => `
${cards([
  ["Trading & markets", "Exchanges, order flow, MEV protection and stake-weighted QoS.", "@/docs/more/markets/", "Guides"],
  ["Let players own items across games", "Items minted to a player and read by a second app.", "@/docs/more/games/", "Wave 2 path"],
  ["Private payments", "Confidential balances and private channels.", "@/docs/more/privacy/", "Guides"],
  ["Keep a shared record partners can audit", "Write a program that records who changed what.", "@/docs/more/programs/", "Wave 2 path"],
])}`,
  why: [N("why", "Only jobs with a real path get a top-level tab. These sections keep today's content without pretending to be paths, so the picker never promises a path that doesn't exist yet.")],
});
page("docs/more/markets", { tab: "more", title: "Markets & trading", desc: "Build exchanges and trading systems.", stub: { was: "/docs/defi" } });
page("docs/more/markets/exchange", { tab: "more", title: "Build an exchange", desc: "", stub: { was: "/docs/defi/exchange" } });
page("docs/more/markets/mev", { tab: "more", title: "MEV protection", desc: "", stub: { was: "/docs/defi/mev-protection" } });
page("docs/more/markets/swqos", { tab: "more", title: "Stake-weighted QoS", desc: "", stub: { was: "/docs/defi/stake-weighted-qos" } });
page("docs/more/games", { tab: "more", title: "Let players own items across games", desc: "Mint an item to a player and read it from a second app. A Wave 2 job path.", stub: { was: "/developers/guides/games" } });
page("docs/more/privacy", { tab: "more", title: "Private payments", desc: "Confidential transfers and private channels.", stub: { was: "/docs/finance/privacy" },
  why: [N("change", "Today this is the only page in a top-level section called <i>Finance</i>. A one-page section with a broad name promises more than it delivers, so it's renamed after what it covers.")] });
page("docs/more/programs", { tab: "more", title: "Keep a shared record: write your own program", desc: "When existing programs aren't enough, write your own. This becomes the Wave 2 path “Keep a shared record partners can audit”.", stub: { was: "/docs/programs" },
  why: [N("why", "The coverage map shows that Wave 1 teaches <i>using</i> Solana, but never <b>writing a program, PDAs or CPI</b>. This is where that lives until the Wave 2 path ships.")] });
page("docs/more/programs/first-program", { tab: "more", title: "First program in the browser", desc: "Write, deploy and call a program in Solana Playground: accounts, PDAs and cross-program calls.", stub: { was: "/docs/intro/quick-start" },
  why: [N("change", "This is today's <b>Quick Start</b>, the first card on <code>/docs</code>. It's good content behind the wrong front door: it teaches programs, PDAs and CPI before a web2 developer has a reason to care. It moves here, and the URL redirects.")] });
for (const [k, t, w] of [["anchor", "Anchor framework", "/docs/programs/anchor"], ["testing", "Testing programs", "/docs/programs/testing"], ["deploying", "Deploying", "/docs/programs/deploying"], ["idls", "IDLs & Codama clients", "/docs/programs/idls"]])
  page(`docs/more/programs/${k}`, { tab: "more", title: t, desc: "", stub: { was: w } });

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
  body: () => cards([["RPC methods", "Every HTTP and WebSocket method.", "@/docs/reference/rpc/"], ["SDKs", "TypeScript (Kit), Rust, Python.", "@/docs/reference/sdks/"], ["React & Next.js", "Hooks, wallet connection and server patterns.", "@/docs/reference/frontend/"], ["Developer tools", "Surfpool, LiteSVM, Microscope, Keychain and more.", "@/docs/reference/tools/"], ["Solana CLI", "Keys, airdrops, deploys and config.", "@/docs/reference/cli/"], ["Production readiness", "Infrastructure, monitoring and keys before launch.", "@/docs/reference/production/"]]),
  why: [N("change", "This merges today's <i>Solana SDKs</i>, <i>Frontend</i>, <i>Solana RPC Methods</i> and the tools half of <i>Resources</i> into one place for lookups. Tools that belong to one job (Commerce Kit, Kora, Attestations) are listed inside that job too, the same just-in-time rule applied to products.")] });
for (const [p, t, w] of [["rpc", "RPC methods", "/docs/rpc"], ["rpc/http", "HTTP methods", "/docs/rpc/http"], ["rpc/websocket", "WebSocket methods", "/docs/rpc/websocket"], ["rpc/providers", "RPC providers", "/docs/rpc/providers"], ["sdks", "SDKs", "/docs/clients"], ["sdks/typescript", "TypeScript (Kit)", "/docs/clients/official/javascript"], ["sdks/rust", "Rust", "/docs/clients/official/rust"], ["sdks/python", "Python", "/docs/clients/community"], ["frontend", "React & Next.js", "/docs/frontend"], ["tools", "Developer tools", "/docs/tools"], ["tools/surfpool", "Surfpool", "/docs/tools/surfpool"], ["tools/litesvm", "LiteSVM", "/docs/tools/litesvm"], ["tools/microscope", "Microscope", "/microscope"], ["tools/keychain", "Keychain", "/docs/tools/keychain"], ["tools/private-channels", "Private Channels", "/docs/tools/private-channels"], ["cli", "Solana CLI", "/docs/intro/installation/solana-cli-basics"], ["production", "Production readiness", "/docs/tools/production-readiness"]])
  page(`docs/reference/${p}`, { tab: "reference", title: t, desc: "", stub: { was: w } });

/* ============================================================ LANDING */
export const landingWhy = [
  N("why", "<b>The page has one job:</b> get a developer into the right path within one scroll. The order is hero → proof (live network) → job picker → how a path works → live activity → guided routes. There's no standalone concepts section."),
  N("change", "Today's hero buttons are <i>Read the core docs</i> and <i>Browse templates</i>, and the use-case grid is the <b>third</b> block, below <i>Learn the stack / Build by example / Move to Solana</i>. Here the primary button scrolls to the picker, and the picker is the only block with green buttons."),
  N("why", "The quiet links under the hero (<i>Go to the docs</i>, <i>Coming from Ethereum</i>) keep today's crypto-native developers one click from where they go now. The redesign is aimed at web2 developers, and it shouldn't cost the current users anything."),
  N("risk", "<b>Keep the network numbers honest.</b> The side panel here is fetched live from mainnet RPC. (a) TPS excludes validator votes, because raw TPS is inflated about 3× and skeptical developers will notice. (b) “Under a second” is true for <i>confirmed</i>; <i>finalized</i> is ~13 s unless Alpenglow ships first, so label it. (c) A dollar fee needs a price feed, with a fallback to SOL."),
  N("why", "Each job card follows the template: the <b>developer's question</b> as the title, one line on fit that compares against something they already know (card fees, a database), and the time to a first result. The cards name no concepts."),
  N("change", "Products are gone from this page. The 8-product grid becomes part of the paths: Commerce Kit in Payments, the x402 facilitator and Kora in Pay-per-call, Token ACL and Attestations in Tokenization. A grid of nine product names is a concept gate too."),
  N("change", "Nav: the Build dropdown now leads with <i>What are you building?</i> (hover it). Token Extensions moves out of the menu and into the tokenization job. DeFi and Gaming sit behind <i>More use cases</i> until their paths exist. Reorder the global nav only once the Payments path is live."),
  N("why", "The words “web3”, “blockchain”, “decentralized” and “keypair” appear nowhere on this page. “Ledger” and “digital dollars” do that work."),
];
