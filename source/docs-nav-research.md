# Should use cases be the top-level navigation in solana.com/docs?

*Research, 2026-10-13. Three parallel tracks: (1) live navigation of 21 developer docs sites, (2) the research literature and docs frameworks, (3) Solana's own docs repo history plus redesign case studies.*

## Answer

**Not as several top-level tabs. Yes as the way into the docs.** Use cases should be the first thing a developer sees, through the Start here page, the job picker and the paths. Below that, the docs should stay one canonical core organised by subject: how Solana works, tokens, programs, RPC and tools. The use-case domains should sit together in **one** solutions-style tab, not split across many.

## Evidence

### 1. No leading docs site uses fine-grained jobs as its global navigation
Survey of 21 live sites, checked 2026-10-13:

- **Domain tabs with job-like names.** The common pattern is a few business-domain tabs that read like jobs but hold products and guides:
  - Stripe: Payments · Revenue · Money management · Stablecoins…
  - Plaid: Payments and Funding · Financial Insights…
  - Circle and Coinbase CDP: similar.
  - Sui: Onchain Finance.
- **Specific jobs sit one level down.**
  - Stripe `/get-started/use-cases`: full end-to-end guides by business type.
  - Base: Get Started → *Solutions*, with Accept Payments, Tokenize Assets, Issue a Stablecoin and so on. These are deep guides, and Base is the closest comparable.
  - Cloudflare `/use-cases/`: a thin hub of links. Azure's Architecture Center is a separate catalogue.
- **Polygon** is the only chain with *Payments* as its own top-level tab.
- **ethereum.org and Avalanche** keep use cases in the marketing layer, outside the docs.
- **Reference is always its own top-level item.** No site hides it under a job.

### 2. Research supports starting from the task, not a nav made only of tasks
- **Developers want to start from a scenario.**
  - Robillard & DeLine (440+ Microsoft developers): "matching APIs with scenarios" was a key need. Scenario docs "can compensate for hard-to-understand API structure."
  - Meng et al. 2019 (eye-tracking study): a top level split by content type (Concepts / Samples / Reference) confused people. They recommend organising by functionality.
  - Meng et al. 2020: a use-case-oriented redesign meant fewer errors and faster tasks (n=22, with several changes tested together).
- **Use cases and audiences are "ambiguous" organisation schemes** (Rosenfeld & Morville). They're useful, but the buckets overlap, and mixing schemes in one menu "almost guarantees confusion".
  - GOV.UK and NN/g testing: audience-based navigation degrades usability because "users aren't easily categorised." A stablecoin issuer needs tokenization, payments and DvP all at once.
- **Fragmentation and duplicated scenarios are top complaints** (Uddin & Robillard, 323 IBM developers). Use-case-only structures tend to produce both.
- **Diátaxis allows another axis at the top**, with the four content types underneath. It warns against building a structure before the content exists.
- **Top Tasks:** a few tasks get most of the demand. Keep the entry list short (about 5–7) and base it on data, not internal strategy.
- **Weak spots in the evidence:** the studies are small and mostly from before AI tools. No study compares use-case and product navigation head to head.

### 3. AI agents make the menu matter less, and links and single sources matter more
- **Agent share of docs traffic** (vendor data, rising fast):
  - Mintlify: about 45% of requests in 2025, and a reported 66% by Aug 2026.
  - GitBook: about 52% of intentional reads.
- **Agents navigate by links, llms.txt and `.md` pages, not tabs.** Vercel/ora: 86–97% of fetches came via links. Mintlify: llms.txt cut 404s about 20×.
- **Humans are still about half the traffic, and they don't trust AI output** (Stack Overflow 2025: 46% distrust it), so they come back to the docs to check.
- **Duplicated pages hurt agents**, because they get conflicting versions of the same answer.

### 4. Solana's own docs don't support splitting into more use-case tabs yet
Source: `solana-foundation/solana-com`.

- **The use cases are already one tab, Finance**, covering tokens, tokenization, payments and DeFi. It was added in #1767 (2026-07-29) as part of the docs restructure stack. None of the restructure PRs cite user research, analytics or tree tests.
- **The tabs would be thin:**

  | Section | Pages |
  |---|---|
  | payments | 30 |
  | defi | 9 (5 are one DvP program) |
  | tokenization | 5 |
  | finance | 2 |
  | rpc (for comparison) | 91 |
  | tools (for comparison) | 197 |

- **Section boundaries already leak:**
  - DvP is split across `tokenization/dvp` and `defi/dvp-program`.
  - x402 appears in 3 places; Solana Pay in 2.
  - #2127 had to move Production Readiness and the x402 facilitator page out of Payments.
- **The basics are copied, not linked:**
  - 19 of the 30 payments pages discuss token accounts; only 5 link to `/docs/tokens`.
  - `how-payments-work` re-explains accounts, ATAs, token programs, fees and transactions.
  - `defi/exchange` and `tokenization/token-acl` re-explain mints and extensions.
- **General token docs currently sit under Finance ("Assets").** If you split Finance up, NFTs, Metaplex and game items have nowhere to go.
- **Usable data already exists:**
  - Markdown requests from agents are logged to PostHog per route (`trackMarkdownRequest`).
  - Each section has its own `llms.txt`.

## Recommended structure

```
Start here        → job picker; the paths ("Build a checkout", "Paywall an endpoint", "Issue an asset"), 5–7 max
Use cases (1 tab) → Payments (incl. pay-per-call / x402) · Tokenization · Markets & trading · Privacy
                    each = landing hub + how-to guides that LINK to the core, never re-explain it
How Solana works  → concepts + Tokens (canonical home for token accounts, mints, extensions)
Programs          → writing programs (Anchor, testing, deploying)
API reference     → RPC, SDKs
Resources         → tools, production readiness, video
```

- **Paths are tutorials**, in the Diátaxis sense. They sit under Start here, the same way Base and Stripe place theirs.
- **Concept cards come from one source.** The "in short" text lives on each concept page, and the paths and guides pull it in, which gets rid of the duplicated primers.
- **Fix the existing splits:** move DvP into one place, give x402 and Solana Pay one canonical page each, and give tokens a home outside Finance.
- **Promote Payments to its own tab only if the data supports it.** It's the one candidate: 30 pages, a clear audience, and its own landing page.

## Validate before committing
1. **Top-tasks survey**, run with MLH participants plus current docs users, to confirm which 5–7 jobs belong in the picker.
2. **Tree test** of the current nav against this one, with web2 and crypto-native groups. GitLab and Twilio both did card sorts or tree tests before restructuring.
3. **Pull PostHog Markdown-request data and docs search logs by section**, to see what agents and people actually pull.

## Key sources
- Meng et al. 2019, https://mangold-international.com/resources/meng-et-al-how-developers-use-api-documentation-2019.pdf
- Meng et al. 2020, https://mangold-international.com/resources/meng-et-al-optimizing-api-documentation-2020.pdf
- Robillard & DeLine 2011, https://www.cs.mcgill.ca/~martin/papers/ese2011.pdf
- Uddin & Robillard 2015, https://www.cs.mcgill.ca/~martin/papers/ieeesw2015.pdf
- Aghajani et al. 2020, https://www.inf.usi.ch/faculty/lanza/PUBS/P/Agha2020a.pdf
- Diátaxis on complex hierarchies (archived page in the repo history), https://github.com/evildmp/diataxis-documentation-framework/blob/de7a2d813e2fda339b959e3075afb4e2f09bf54c/complex-hierarchies.rst
- GOV.UK on audience-based navigation, https://insidegovuk.blog.gov.uk/2014/07/18/hey-you-there-the-trouble-with-audience-based-navigation/
- GitLab global nav guidelines, https://docs.gitlab.com/development/documentation/site_architecture/global_nav/
- GitLab workflow-based nav MR, https://gitlab.com/gitlab-org/gitlab-docs/-/merge_requests/1812
- Stripe use cases, https://docs.stripe.com/get-started/use-cases
- Base, https://docs.base.org/
- Cloudflare use cases, https://developers.cloudflare.com/use-cases/
- Mintlify state of AI, https://www.mintlify.com/blog/state-of-ai
- Vercel on agent-readable docs, https://vercel.com/kb/guide/make-your-documentation-readable-by-ai-agents
- Stack Overflow 2025 survey, https://survey.stackoverflow.co/2025/

## Revision (2026-10-13): domain tabs, not one "Use cases" tab

The single-tab recommendation above leaned too heavily on today's page counts. The closest precedents (Stripe, Circle, Coinbase CDP, Plaid, Polygon) put **domains** at the top level, and only fine-grained jobs one level down. The mockup now uses:

```
Start here · Payments · Assets · Markets | How Solana works · Develop · Reference
```

- **Payments** opens with two paths, "Accept dollar payments" and "Charge per API call". Pay-per-call and x402 sit here, followed by the guides and the payments tools.
- **Assets** opens with the "Issue a tokenized asset" path. It covers tokenization, all the token mechanics (basics, extensions, verify), NFTs and game items, which comes to roughly 55 pages, so the tab isn't thin.
- **Markets** covers exchanges, the single canonical DvP page, MEV and SWQoS. It's thin today, at about 9 pages. If it doesn't grow, fold it into Assets.
- **Develop** holds programs, frontend, tools and production readiness. It's for building, not lookup, which is the same split Base and Sui make. It replaces the Resources tab.
- **Reference** is RPC, SDKs and CLI only.
- **Start here** stays short: the job picker, All use cases, setup and AI agents.
