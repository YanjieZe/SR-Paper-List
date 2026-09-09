import {readFileSync,writeFileSync} from 'node:fs';
const papers=JSON.parse(readFileSync(new URL('../papers.json',import.meta.url),'utf8')).sort((a,b)=>b.date.localeCompare(a.date)||a.title.localeCompare(b.title));
const covers=papers.filter(p=>p.cover.status==='confirmed');
const primary=[...new Set(papers.map(p=>p.domains[0]))].sort((a,b)=>a.localeCompare(b));
const years=[...new Set(papers.map(p=>p.date.slice(0,4)))].sort((a,b)=>b.localeCompare(a));
const slug=s=>s.toLowerCase().replace(/[^\w\- ]/g,'').trim().replace(/ /g,'-');
const count=fn=>papers.filter(fn).length;
const site='https://sr.yanjieze.com';
const repo='https://github.com/YanjieZe/SR-Paper-List';

// Tally an overlapping label field into [label, n] pairs, biggest first.
const tally=pick=>{const m=new Map();for(const p of papers)for(const v of pick(p))m.set(v,(m.get(v)??0)+1);return [...m].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));};
const track=(n,max,width=26)=>{const on=Math.max(1,Math.round(n/max*width));return '█'.repeat(on)+'·'.repeat(width-on);};
const chart=rows=>{const max=Math.max(...rows.map(r=>r[1])),pad=Math.max(...rows.map(r=>r[0].length));
 return '```text\n'+rows.map(([label,n])=>`${label.padEnd(pad)}  ${track(n,max)}  ${String(n).padStart(2)}`).join('\n')+'\n```';};

const linkNames={paper:'Paper',project:'Project',code:'Code',open:'Open version'};
const entry=p=>`#### ${p.cover.status==='confirmed'?'🌟 ':''}[${p.title}](${p.links.paper})\n\n`
 +`\`${p.date}\` · ${p.type} · *Science Robotics* ${p.volume}(${p.issue})\n\n`
 +`${p.authors.join(', ')}\n\n`
 +`${p.summary}\n\n`
 +`\`${p.domains.join('` `')}\` — ${p.methods.join(', ')}\n\n`
 +Object.entries(p.links).map(([k,v])=>`[${linkNames[k]||k}](${v})`).join(' · ')
 +(p.cover.status==='confirmed'?` · [**🌟 Cover evidence**](${p.cover.sources[0]})`:'')+'\n\n';

const esc=s=>s.replace(/-/g,'--').replace(/_/g,'__');
const badge=(label,value,color)=>`![${label}](https://img.shields.io/badge/${encodeURIComponent(esc(label))}-${encodeURIComponent(esc(value))}-${color}?style=flat-square&labelColor=1c1c1e)`;

let text=`<div align="center">

# SR-Paper-List

### Robot learning in *Science Robotics*

Every learning-based robotics paper the journal published between January 2020 and September 2026,\nread, summarized, and tagged by task and by method.

[![Browse the index](https://img.shields.io/badge/browse%20the%20index-sr.yanjieze.com-007aff?style=for-the-badge&labelColor=1c1c1e)](${site})

${badge('papers',String(papers.length),'007aff')} ${badge('research articles',String(count(p=>p.type==='Research Article')),'8e8e93')} ${badge('reviews',String(count(p=>p.type==='Review / Perspective')),'8e8e93')} ${badge('verified covers',String(covers.length),'ff9500')} ${badge('updated','2026-09-09','8e8e93')}

**[Website](${site})** · **[Structured data](papers.json)** · **[Search & verification notes](SEARCH_NOTES.md)** · **[Deployment](DEPLOYMENT.md)** · **[Suggest a paper](${repo}/issues/new)**

</div>

---

## The shape of the field

Papers per year of publication.

${chart(years.map(y=>[y,count(p=>p.date.startsWith(y))]))}

Task and domain tags, counted across every tag a paper carries.

${chart(tally(p=>p.domains))}

Learning methods, counted the same way. A paper can hold several.

${chart(tally(p=>p.methods).filter(([,n])=>n>1))}

<sub>Methods appearing once: ${tally(p=>p.methods).filter(([,n])=>n===1).map(([m])=>m).join(', ')}.</sub>

## 🌟 Cover papers

A cover badge needs a publisher announcement or a reproduced cover with explicit attribution from the author's institution or project page. Everything else stays **not yet verified** rather than being called a non-cover.

| Paper | Published | Evidence |
|---|---|---|
${covers.map(p=>`| [${p.title}](${p.links.paper}) | \`${p.date}\` | [source](${p.cover.sources[0]}) |`).join('\n')}

## Scope

Research where learning supports robot action, perception, interaction, adaptation, or design, plus relevant reviews and perspectives. Editorials, research highlights, corrections, and hardware-only studies are excluded. This is a broad curated index, not a guarantee of exhaustive full-text screening. Dates are journal publication dates, not arXiv dates.

Task/domain and learning method are separate, overlapping labels. The index below files each paper under its primary domain; the website filters across every tag. BC means supervised action prediction from demonstrations — retrieval-based imitation, motion imitation with RL, and policy distillation are not automatically labeled BC. Reviews / Perspectives is a browsing group, not a claim about the publisher's exact article subtype.

## The index

Filed by primary domain, newest first. Expand a domain to read it, or [search the whole index on the website](${site}).

${primary.map(d=>`- [${d}](#${slug(d)}) (${count(p=>p.domains[0]===d)})`).join('\n')}

`;
for(const d of primary){
 const group=papers.filter(p=>p.domains[0]===d);
 text+=`### ${d}\n\n<details>\n<summary><b>${group.length} papers</b> — ${group[0].date.slice(0,4)}–${group[group.length-1].date.slice(0,4)}</summary>\n\n`
  +group.map(entry).join('')+`</details>\n\n`;
}
text+=`## Maintain this index

1. Edit \`papers.json\`, preserving the DOI and source evidence.
2. Run \`npm run generate\` to regenerate this README.
3. Run \`npm test\`, \`npm run typecheck\`, and \`npm run build\`.
4. Commit the data and generated README, then publish a new Sites version. GitHub pushes do not automatically deploy the website.

The website imports the same data directly. No database, login, automated scraper, or scheduled update is required. Run \`npm ci\` and \`npm run dev\` for local development.

---

<div align="center">
<sub>Independent research index maintained by <a href="https://yanjieze.com">Yanjie Ze</a>. Not affiliated with AAAS.<br>
Linked papers, projects, and code retain their respective rights and licenses. No paper PDFs are redistributed here.</sub>
</div>
`;
const out=new URL('../README.md',import.meta.url);
if(process.argv.includes('--check')){if(readFileSync(out,'utf8')!==text)throw new Error('README is stale; run npm run generate');}else writeFileSync(out,text);
