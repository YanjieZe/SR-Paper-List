# Search and verification notes

Last reviewed: **2026-09-09**. Publication window: **2024-01-01–2026-09-09**, inclusive.

## Retrieval and coverage

- Queried Europe PMC with `JOURNAL:"Sci Robot" AND FIRST_PDATE:[2024-01-01 TO 2026-09-09]`, requesting all core records: **348 records**. Screened titles and author abstracts, with targeted inspection of learning-related passages and author project pages.
- Independently queried [Crossref's Science Robotics journal endpoint](https://api.crossref.org/journals/2470-9476/works?filter=from-pub-date:2024-01-01,until-pub-date:2026-09-09&rows=1000): **350 records**. Every selected DOI appears in both sources. The two additional records are an erratum (`10.1126/scirobotics.ads4716`) and a short commentary, *Understanding humanoid robots could save your life* (`10.1126/scirobotics.adw9925`); neither meets the inclusion rule.
- Enumerated and attempted the official table of contents for every indexed issue: volume 9, issues 86–97; volume 10, issues 98–109; volume 11, issues 110–117. All 32 direct requests returned HTTP 403 in this environment. **Official TOC/full-text completeness is therefore not verified.** The table below records index-based coverage, not successful publisher-page inspection.
- The index's latest article date is August 26, 2026. No September article was returned at the September 9 cutoff. Indexing delays remain possible; do not infer that the journal has no unindexed September publications.
- Targeted web searches covered robot learning, reinforcement learning, imitation learning, BC, neural control, dexterity, visuotactile perception, navigation, wearables, and surgical autonomy. Author pages were used to verify additional project/code links and cover features.
- A DBLP cross-check was attempted, but the direct responses did not yield usable DOI records; it is not counted as completed validation.

## Screening decisions

The catalog contains research articles with a substantive learned component in robot action, perception, adaptation, interaction, or design, and related reviews/perspectives. `research/screening.json` records all 350 metadata records and their inclusion decisions. Long-form human-learning experiments, biological neural stimulation without robot learning, classical planning/control without learning, and pure hardware papers are excluded. Short research highlights, editorials and errata are excluded even if their subject is robot learning, to avoid duplicating the original research.

This broad scope includes peripheral but relevant learned sensing and robot-design papers. For a policy-learning-focused view, filter for Reinforcement Learning, Behavior Cloning, or Other Imitation Learning. `Review / Perspective` is a browsing group covering reviews, focus articles, viewpoints and debates; it is not an exact publisher article-type label. Method tags on these articles describe their discussion scope, not implemented contributions.

### Classification rules

- **Domains** describe robot tasks, platforms, or applications. The first domain is the primary README section; secondary tags are searchable on the website.
- **Behavior Cloning** requires supervised action/trajectory prediction from demonstrations. Diffusion policies can be BC. Demonstration-guided RL, teacher–student policy distillation and trajectory retrieval are separately tagged.
- **Model-Based Learning** denotes learned predictive/self models, not the mere use of a classical model-based controller. **Hybrid Methods** covers explicit combinations of planning, control and learned components.
- **Learning-Based Perception** is used when the abstract establishes a learned perception component but does not establish a narrower training objective. Other tags are grounded in the abstract or linked project description.
- Tags are manually curated and may overlap. No automatic keyword-only inclusion is used.

## Metadata checks and limitations

Titles, full author names, DOI, volume, issue and first journal publication dates originate from Europe PMC. DOI presence and dates were compared with Crossref. One discrepancy was resolved: *Bioinspired design of a tissue-engineered ray with machine learning* has February 26 in Crossref but **February 12, 2025** on the [published PDF hosted by the authors](https://diseasebiophysics.seas.harvard.edu/sites/g/files/omnuum8351/files/2025-11/Bioinspired%20design%20of%20a%20tissue-engineered%20ray%20with%20machine%20learning.pdf), agreeing with Europe PMC; the published PDF date is retained.

Summaries are short original paraphrases, not copied abstracts. Relevance screening does not represent a full-text systematic review. The catalog does not claim absolute completeness. Links absent from a record mean no official link was verified in this pass, not that none exists. Author-hosted versions and preprints may differ from the final journal text.

## Cover evidence

`confirmed` is assigned for an identifiable journal cover with an explicit attribution, either in a publisher announcement or reproduced by the authors' institution/project. Each record preserves the evidence basis and sources. Direct issue links are retained for readers, but a blocked TOC request is never treated as positive evidence.

The six confirmed features are NeuralFeels (November 2024), SRT-H (July 2025), Learning a Thousand Tasks in a Day (November 2025), Learning Realistic Lip Motions (January 2026), Large Behavior Models (April 2026), and APT-RL (July 2026). The SRT-H attribution is corroborated by the publisher's official Science Magazine announcement and AAAS issue notification. Other evidence includes the reproduced covers and attributions on CMU, Columbia, KAIST, Imperial's author project, and TRI's official project/institute announcement.

Remaining covers are **pending**, not false. ZEST (August 2026) is a priority for direct publisher verification: indexed journal social posts indicate a possible cover, but an accessible direct publisher confirmation was not obtained. Claims that the August soccer paper is the cover also appear in publicity; neither is promoted to a confirmed badge without resolving that attribution against the cover itself.

## Issue-by-issue inventory

Counts below are Europe PMC records and selected catalog records, respectively. A zero means no record met this catalog's inclusion rule, not an empty issue.

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

Release checks passed: six catalog tests, TypeScript, authored-code lint, and the production build. Browser WebMCP checks returned two matches for Dexterous Manipulation + Behavior Cloning, zero for an impossible query, rejected an invalid year, and restored all 68 entries on reset. Of 31 optional project/code/open-version URLs checked, 28 responded successfully; two institutional pages blocked automated requests and one Google Sites page timed out. These retain their separately reviewed source evidence.
