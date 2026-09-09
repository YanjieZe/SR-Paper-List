# Search and verification notes

Last reviewed: **2026-09-09**. Publication window: **2020-01-01–2026-09-09**, inclusive.

The window was extended backward from 2024 in a second pass. The two passes used the same sources and the same inclusion rule; where they differ, this file says so.

## Retrieval and coverage

### 2020-01-01 to 2023-12-31 (second pass)

- Queried Europe PMC with `JOURNAL:"Sci Robot" AND FIRST_PDATE:[2020-01-01 TO 2023-12-31]`, requesting all core records: **388 records** (2020: 83, 2021: 123, 2022: 87, 2023: 95). Screened every title, then read the author abstract of every record that a title made plausible.
- Independently queried [Crossref's Science Robotics journal endpoint](https://api.crossref.org/journals/2470-9476/works?filter=from-pub-date:2020-01-01,until-pub-date:2023-12-31): **391 records**. All 388 Europe PMC DOIs appear in Crossref; the three extra Crossref records were not indexed by Europe PMC and did not surface in screening.
- **Official tables of contents were not requested for this window.** The 2024–2026 pass established that direct publisher TOC requests return HTTP 403 from this environment, so no request was made here. Coverage in this window is index-based only.
- **49 records were included**, raising the catalog from 68 to 117 entries.
- **A cover-verification pass was run and produced zero confirmations.** Sixteen papers and author groups were checked against institutional news pages, lab pages and author CVs, covering the highest-visibility work in the window (MIT CSAIL, ETH RSL, Columbia, Caltech, KAIST, UCLA, Glasgow, DeepMind, Michigan, TUM). None of those pages state a cover feature or reproduce a cover. Every 2020–2023 record therefore keeps `cover.status: "pending"`, which means unverified, not "not a cover".
- Publisher pages remain the only complete source and remain unreachable: `www.science.org` and the legacy `robotics.sciencemag.org` both return HTTP 403 to every fetcher available here. Per the rule in the cover-evidence section, a blocked table of contents is not treated as evidence in either direction.
- Three cover attributions were observed indirectly, through a search engine's rendering of blocked table-of-contents pages, and all three point at papers this catalog excludes: volume 7 issue 66 (a micro-drone swarm), volume 7 issue 67 (Yu *et al.*, printable electronic skin), and the July 2023 special issue (a team of legged robots). They are recorded here as context only and are not stored in `papers.json`.
- Optional links were collected in a later pass and every URL was checked for a 200 response before being stored. Of the 49 records: 16 carry an open version, 9 carry author code, 6 carry a project page, and 25 carry only the DOI.
- Open versions were resolved from Semantic Scholar and OpenAlex, then verified against the arXiv or repository landing page by comparing the stored title and author surnames. Two preprints have titles that differ slightly from the published version (`abd9285`, `abk0431`); both share first and last authors with the journal record and are retained as open versions.
- Only author-affiliated code and project pages are stored. Third-party reimplementations were rejected — for example the only public code found for `abk2822` is an independent reimplementation, so that record carries no code link. One candidate repository was rejected after reading its README showed it belongs to a different, later paper (`abm0608`). One Zenodo record could not be reached from this environment and was left out rather than stored unverified (`adg3679`).
- Absence of a link still means no link was verified, not that none exists. Roughly half the window has had no successful search for a project page yet.

### 2024-01-01 to 2026-09-09 (first pass)

- Queried Europe PMC with `JOURNAL:"Sci Robot" AND FIRST_PDATE:[2024-01-01 TO 2026-09-09]`, requesting all core records: **348 records**. Screened titles and author abstracts, with targeted inspection of learning-related passages and author project pages.
- Independently queried [Crossref's Science Robotics journal endpoint](https://api.crossref.org/journals/2470-9476/works?filter=from-pub-date:2024-01-01,until-pub-date:2026-09-09&rows=1000): **350 records**. Every selected DOI appears in both sources. The two additional records are an erratum (`10.1126/scirobotics.ads4716`) and a short commentary, *Understanding humanoid robots could save your life* (`10.1126/scirobotics.adw9925`); neither meets the inclusion rule.
- Enumerated and attempted the official table of contents for every indexed issue: volume 9, issues 86–97; volume 10, issues 98–109; volume 11, issues 110–117. All 32 direct requests returned HTTP 403 in this environment. **Official TOC/full-text completeness is therefore not verified.** The table below records index-based coverage, not successful publisher-page inspection.
- The index's latest article date is August 26, 2026. No September article was returned at the September 9 cutoff. Indexing delays remain possible; do not infer that the journal has no unindexed September publications.
- Targeted web searches covered robot learning, reinforcement learning, imitation learning, BC, neural control, dexterity, visuotactile perception, navigation, wearables, and surgical autonomy. Author pages were used to verify additional project/code links and cover features.
- A DBLP cross-check was attempted, but the direct responses did not yield usable DOI records; it is not counted as completed validation.

## Screening decisions

Both passes applied the same rule. The catalog contains research articles with a substantive learned component in robot action, perception, adaptation, interaction, or design, and related reviews/perspectives. `research/screening.json` records all 738 metadata records from both passes and their inclusion decisions. Long-form human-learning experiments, biological neural stimulation without robot learning, classical planning/control without learning, and pure hardware papers are excluded. Short research highlights, editorials and errata are excluded even if their subject is robot learning, to avoid duplicating the original research.

This broad scope includes peripheral but relevant learned sensing and robot-design papers. For a policy-learning-focused view, filter for Reinforcement Learning, Behavior Cloning, or Other Imitation Learning. `Review / Perspective` is a browsing group covering reviews, focus articles, viewpoints and debates; it is not an exact publisher article-type label. Method tags on these articles describe their discussion scope, not implemented contributions.

### Classification rules

- **Domains** describe robot tasks, platforms, or applications. The first domain is the primary README section; secondary tags are searchable on the website.
- **Behavior Cloning** requires supervised action/trajectory prediction from demonstrations. Diffusion policies can be BC. Demonstration-guided RL, teacher–student policy distillation and trajectory retrieval are separately tagged.
- **Model-Based Learning** denotes learned predictive/self models, not the mere use of a classical model-based controller. **Hybrid Methods** covers explicit combinations of planning, control and learned components.
- **Learning-Based Perception** is used when the abstract establishes a learned perception component but does not establish a narrower training objective. Other tags are grounded in the abstract or linked project description.
- Tags are manually curated and may overlap. No automatic keyword-only inclusion is used.

## Metadata checks and limitations

Titles, full author names, DOI, volume, issue and first journal publication dates originate from Europe PMC. DOI presence and dates were compared with Crossref.

**Date granularity, 2020 to August 2021.** Europe PMC stores only month precision for Science Robotics issues published before September 2021: every record in those issues is stamped on the first of the month. For those records the Crossref issue date is used instead, and the substitution is applied by rule, not case by case. From September 2021 onward Europe PMC is day-precise and is kept as the primary source even where Crossref differs, because Crossref carries the issue cover date while Europe PMC carries first publication. Twenty-two records in the 2020–2023 window differ between the two sources in that direction and retain the Europe PMC date. One discrepancy was resolved: *Bioinspired design of a tissue-engineered ray with machine learning* has February 26 in Crossref but **February 12, 2025** on the [published PDF hosted by the authors](https://diseasebiophysics.seas.harvard.edu/sites/g/files/omnuum8351/files/2025-11/Bioinspired%20design%20of%20a%20tissue-engineered%20ray%20with%20machine%20learning.pdf), agreeing with Europe PMC; the published PDF date is retained.

Summaries are short original paraphrases, not copied abstracts. Relevance screening does not represent a full-text systematic review. The catalog does not claim absolute completeness. Links absent from a record mean no official link was verified in this pass, not that none exists. Author-hosted versions and preprints may differ from the final journal text.

## Cover evidence

`confirmed` is assigned for an identifiable journal cover with an explicit attribution, either in a publisher announcement or reproduced by the authors' institution/project. Each record preserves the evidence basis and sources. Direct issue links are retained for readers, but a blocked TOC request is never treated as positive evidence.

The six confirmed features are NeuralFeels (November 2024), SRT-H (July 2025), Learning a Thousand Tasks in a Day (November 2025), Learning Realistic Lip Motions (January 2026), Large Behavior Models (April 2026), and APT-RL (July 2026). The SRT-H attribution is corroborated by the publisher's official Science Magazine announcement and AAAS issue notification. Other evidence includes the reproduced covers and attributions on CMU, Columbia, KAIST, Imperial's author project, and TRI's official project/institute announcement.

Remaining covers are **pending**, not false. ZEST (August 2026) is a priority for direct publisher verification: indexed journal social posts indicate a possible cover, but an accessible direct publisher confirmation was not obtained. Claims that the August soccer paper is the cover also appear in publicity; neither is promoted to a confirmed badge without resolving that attribution against the cover itself.

## Issue-by-issue inventory

Counts below are Europe PMC records and selected catalog records, respectively. A zero means no record met this catalog's inclusion rule, not an empty issue.

### Volumes 5 to 8 (2020–2023)

No publisher TOC was requested for these issues; see the retrieval section.

| Volume | Issue | Indexed records | Included | Official TOC access |
|---|---:|---:|---:|---|
| 5 | [38](https://www.science.org/toc/scirobotics/5/38) | 8 | 0 | Not requested in this pass |
| 5 | [39](https://www.science.org/toc/scirobotics/5/39) | 4 | 1 | Not requested in this pass |
| 5 | [40](https://www.science.org/toc/scirobotics/5/40) | 4 | 0 | Not requested in this pass |
| 5 | [41](https://www.science.org/toc/scirobotics/5/41) | 4 | 1 | Not requested in this pass |
| 5 | [42](https://www.science.org/toc/scirobotics/5/42) | 5 | 0 | Not requested in this pass |
| 5 | [43](https://www.science.org/toc/scirobotics/5/43) | 8 | 0 | Not requested in this pass |
| 5 | [44](https://www.science.org/toc/scirobotics/5/44) | 8 | 0 | Not requested in this pass |
| 5 | [45](https://www.science.org/toc/scirobotics/5/45) | 8 | 0 | Not requested in this pass |
| 5 | [46](https://www.science.org/toc/scirobotics/5/46) | 8 | 1 | Not requested in this pass |
| 5 | [47](https://www.science.org/toc/scirobotics/5/47) | 8 | 2 | Not requested in this pass |
| 5 | [48](https://www.science.org/toc/scirobotics/5/48) | 8 | 1 | Not requested in this pass |
| 5 | [49](https://www.science.org/toc/scirobotics/5/49) | 10 | 3 | Not requested in this pass |
| 6 | [50](https://www.science.org/toc/scirobotics/6/50) | 11 | 0 | Not requested in this pass |
| 6 | [51](https://www.science.org/toc/scirobotics/6/51) | 7 | 1 | Not requested in this pass |
| 6 | [52](https://www.science.org/toc/scirobotics/6/52) | 14 | 1 | Not requested in this pass |
| 6 | [53](https://www.science.org/toc/scirobotics/6/53) | 17 | 0 | Not requested in this pass |
| 6 | [54](https://www.science.org/toc/scirobotics/6/54) | 12 | 3 | Not requested in this pass |
| 6 | [55](https://www.science.org/toc/scirobotics/6/55) | 13 | 3 | Not requested in this pass |
| 6 | [56](https://www.science.org/toc/scirobotics/6/56) | 7 | 0 | Not requested in this pass |
| 6 | [57](https://www.science.org/toc/scirobotics/6/57) | 10 | 0 | Not requested in this pass |
| 6 | [58](https://www.science.org/toc/scirobotics/6/58) | 15 | 1 | Not requested in this pass |
| 6 | [59](https://www.science.org/toc/scirobotics/6/59) | 5 | 1 | Not requested in this pass |
| 6 | [60](https://www.science.org/toc/scirobotics/6/60) | 5 | 0 | Not requested in this pass |
| 6 | [61](https://www.science.org/toc/scirobotics/6/61) | 7 | 1 | Not requested in this pass |
| 7 | [62](https://www.science.org/toc/scirobotics/7/62) | 6 | 1 | Not requested in this pass |
| 7 | [63](https://www.science.org/toc/scirobotics/7/63) | 10 | 1 | Not requested in this pass |
| 7 | [64](https://www.science.org/toc/scirobotics/7/64) | 7 | 0 | Not requested in this pass |
| 7 | [65](https://www.science.org/toc/scirobotics/7/65) | 11 | 2 | Not requested in this pass |
| 7 | [66](https://www.science.org/toc/scirobotics/7/66) | 12 | 1 | Not requested in this pass |
| 7 | [67](https://www.science.org/toc/scirobotics/7/67) | 11 | 7 | Not requested in this pass |
| 7 | [68](https://www.science.org/toc/scirobotics/7/68) | 7 | 2 | Not requested in this pass |
| 7 | [69](https://www.science.org/toc/scirobotics/7/69) | 4 | 1 | Not requested in this pass |
| 7 | [70](https://www.science.org/toc/scirobotics/7/70) | 5 | 0 | Not requested in this pass |
| 7 | [71](https://www.science.org/toc/scirobotics/7/71) | 5 | 1 | Not requested in this pass |
| 7 | [72](https://www.science.org/toc/scirobotics/7/72) | 4 | 0 | Not requested in this pass |
| 7 | [73](https://www.science.org/toc/scirobotics/7/73) | 5 | 0 | Not requested in this pass |
| 8 | [74](https://www.science.org/toc/scirobotics/8/74) | 6 | 1 | Not requested in this pass |
| 8 | [75](https://www.science.org/toc/scirobotics/8/75) | 5 | 1 | Not requested in this pass |
| 8 | [76](https://www.science.org/toc/scirobotics/8/76) | 6 | 0 | Not requested in this pass |
| 8 | [77](https://www.science.org/toc/scirobotics/8/77) | 6 | 1 | Not requested in this pass |
| 8 | [78](https://www.science.org/toc/scirobotics/8/78) | 8 | 1 | Not requested in this pass |
| 8 | [79](https://www.science.org/toc/scirobotics/8/79) | 6 | 1 | Not requested in this pass |
| 8 | [80](https://www.science.org/toc/scirobotics/8/80) | 8 | 1 | Not requested in this pass |
| 8 | [81](https://www.science.org/toc/scirobotics/8/81) | 8 | 1 | Not requested in this pass |
| 8 | [82](https://www.science.org/toc/scirobotics/8/82) | 7 | 2 | Not requested in this pass |
| 8 | [83](https://www.science.org/toc/scirobotics/8/83) | 12 | 1 | Not requested in this pass |
| 8 | [84](https://www.science.org/toc/scirobotics/8/84) | 10 | 2 | Not requested in this pass |
| 8 | [85](https://www.science.org/toc/scirobotics/8/85) | 13 | 1 | Not requested in this pass |

### Volumes 9 to 11 (2024–2026)

| Volume | Issue | Indexed records | Included | Official TOC access |
|---|---:|---:|---:|---|
| 9 | [86](https://www.science.org/toc/scirobotics/9/86) | 10 | 1 | HTTP 403; index screened |
| 9 | [87](https://www.science.org/toc/scirobotics/9/87) | 10 | 0 | HTTP 403; index screened |
| 9 | [88](https://www.science.org/toc/scirobotics/9/88) | 10 | 3 | HTTP 403; index screened |
| 9 | [89](https://www.science.org/toc/scirobotics/9/89) | 11 | 3 | HTTP 403; index screened |
| 9 | [90](https://www.science.org/toc/scirobotics/9/90) | 12 | 3 | HTTP 403; index screened |
| 9 | [91](https://www.science.org/toc/scirobotics/9/91) | 13 | 2 | HTTP 403; index screened |
| 9 | [92](https://www.science.org/toc/scirobotics/9/92) | 13 | 0 | HTTP 403; index screened |
| 9 | [93](https://www.science.org/toc/scirobotics/9/93) | 9 | 1 | HTTP 403; index screened |
| 9 | [94](https://www.science.org/toc/scirobotics/9/94) | 11 | 0 | HTTP 403; index screened |
| 9 | [95](https://www.science.org/toc/scirobotics/9/95) | 12 | 2 | HTTP 403; index screened |
| 9 | [96](https://www.science.org/toc/scirobotics/9/96) | 12 | 1 | HTTP 403; index screened |
| 9 | [97](https://www.science.org/toc/scirobotics/9/97) | 14 | 1 | HTTP 403; index screened |
| 10 | [98](https://www.science.org/toc/scirobotics/10/98) | 11 | 3 | HTTP 403; index screened |
| 10 | [99](https://www.science.org/toc/scirobotics/10/99) | 12 | 1 | HTTP 403; index screened |
| 10 | [100](https://www.science.org/toc/scirobotics/10/100) | 11 | 1 | HTTP 403; index screened |
| 10 | [101](https://www.science.org/toc/scirobotics/10/101) | 10 | 0 | HTTP 403; index screened |
| 10 | [102](https://www.science.org/toc/scirobotics/10/102) | 11 | 2 | HTTP 403; index screened |
| 10 | [103](https://www.science.org/toc/scirobotics/10/103) | 10 | 3 | HTTP 403; index screened |
| 10 | [104](https://www.science.org/toc/scirobotics/10/104) | 11 | 7 | HTTP 403; index screened |
| 10 | [105](https://www.science.org/toc/scirobotics/10/105) | 12 | 4 | HTTP 403; index screened |
| 10 | [106](https://www.science.org/toc/scirobotics/10/106) | 12 | 4 | HTTP 403; index screened |
| 10 | [107](https://www.science.org/toc/scirobotics/10/107) | 10 | 0 | HTTP 403; index screened |
| 10 | [108](https://www.science.org/toc/scirobotics/10/108) | 11 | 3 | HTTP 403; index screened |
| 10 | [109](https://www.science.org/toc/scirobotics/10/109) | 10 | 2 | HTTP 403; index screened |
| 11 | [110](https://www.science.org/toc/scirobotics/11/110) | 9 | 2 | HTTP 403; index screened |
| 11 | [111](https://www.science.org/toc/scirobotics/11/111) | 8 | 0 | HTTP 403; index screened |
| 11 | [112](https://www.science.org/toc/scirobotics/11/112) | 10 | 2 | HTTP 403; index screened |
| 11 | [113](https://www.science.org/toc/scirobotics/11/113) | 11 | 4 | HTTP 403; index screened |
| 11 | [114](https://www.science.org/toc/scirobotics/11/114) | 11 | 1 | HTTP 403; index screened |
| 11 | [115](https://www.science.org/toc/scirobotics/11/115) | 10 | 1 | HTTP 403; index screened |
| 11 | [116](https://www.science.org/toc/scirobotics/11/116) | 11 | 5 | HTTP 403; index screened |
| 11 | [117](https://www.science.org/toc/scirobotics/11/117) | 10 | 6 | HTTP 403; index screened |

## Maintenance and validation

`papers.json` is the single source for the generated README and imported website data. Run `npm run generate`, `npm test`, `npm run typecheck`, `npm run lint:app`, and `npm run build` before publication. The tests check DOI uniqueness, date limits, source links, cover evidence, sorting, text search, intersecting filters, empty results and reset behavior.

The untouched starter component catalog has existing lint findings; `lint:app` targets authored application, utility and script code. No blanket suppression or edits to unrelated vendored components were applied. The website has an optional, feature-detected `filter_papers` WebMCP action; support depends on the reader's browser. No scheduled crawler or automatic deployment is configured.

Release checks passed: six catalog tests, TypeScript, authored-code lint, and the production build. Link checks reported here were run during the first pass, on the 31 optional project/code/open-version URLs that existed then: 28 responded successfully, two institutional pages blocked automated requests, and one Google Sites page timed out. The second pass added no optional links, so no new link checks were required.
