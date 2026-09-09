'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {flushSync} from 'react-dom';
import {ArrowUpRight,Search,Star,BookOpen,ArrowRight,Code2} from 'lucide-react';
import {Select,SelectTrigger,SelectValue,SelectContent,SelectItem} from '@/components/ui/select';
import {Checkbox} from '@/components/ui/checkbox';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Empty,EmptyHeader,EmptyTitle,EmptyDescription} from '@/components/ui/empty';
import data from '../papers.json';
import {filterPapers,emptyFilters,type Paper,type Filters} from '@/lib/catalog';
const papers:Paper[]=data;
const options={year:[...new Set(papers.map(p=>p.date.slice(0,4)))].sort().reverse(),domain:[...new Set(papers.flatMap(p=>p.domains))].sort(),method:[...new Set(papers.flatMap(p=>p.methods))].sort(),type:[...new Set(papers.map(p=>p.type))].sort()};
const repo='https://github.com/YanjieZe/SR-Paper-List';
function Picker({name,label,value,onChange}:{name:keyof typeof options;label:string;value:string;onChange:(v:string)=>void}){
 return <div className="filter-field"><span id={`${name}-label`}>{label}</span><Select value={value} onValueChange={v=>onChange(v??'all')}><SelectTrigger aria-labelledby={`${name}-label`} className="filter-select"><SelectValue>{value==='all'?`All ${label.toLowerCase()}`:value==='Behavior Cloning'?'Behavior Cloning (BC)':value}</SelectValue></SelectTrigger><SelectContent>{['all',...options[name]].map(v=><SelectItem key={v} value={v}>{v==='all'?`All ${label.toLowerCase()}`:v==='Behavior Cloning'?'Behavior Cloning (BC)':v}</SelectItem>)}</SelectContent></Select></div>
}
export default function Home(){
 const [filters,setFilters]=useState<Filters>(emptyFilters);
 const results=filterPapers(papers,filters),covers=papers.filter(p=>p.cover.status==='confirmed');
 const update=(key:keyof Filters,value:string|boolean)=>setFilters(f=>({...f,[key]:value}));
 const active=JSON.stringify(filters)!==JSON.stringify(emptyFilters);
 useEffect(()=>{
  type Registry={registerTool:(tool:unknown,options:{signal:AbortSignal})=>void|Promise<void>};
  const context=(document as Document & {modelContext?:Registry}).modelContext;
  if(!context?.registerTool)return;
  const lifecycle=new AbortController();
  const register=async()=>{try{await context.registerTool({name:'filter_papers',title:'Filter research papers',description:'Apply search and filters to the visible Science Robotics paper directory; omitted filters reset to all.',inputSchema:{type:'object',properties:{query:{type:'string'},year:{type:'string',enum:['all',...options.year]},domain:{type:'string',enum:['all',...options.domain]},method:{type:'string',enum:['all',...options.method]},type:{type:'string',enum:['all',...options.type]},coverOnly:{type:'boolean'}},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute:(input:unknown)=>{
   if(!input||typeof input!=='object'||Array.isArray(input))throw new Error('Expected a filter object');
   const raw=input as Record<string,unknown>;
   for(const [key,value] of Object.entries(raw)){
    if(!(key in emptyFilters))throw new Error(`Unknown filter: ${key}`);
    if(key==='coverOnly'?typeof value!=='boolean':typeof value!=='string')throw new Error(`Invalid value: ${key}`);
    if(key in options&&value!=='all'&&!options[key as keyof typeof options].includes(value as string))throw new Error(`Unknown option: ${key}`);
   }
   const next={...emptyFilters,...raw} as Filters;flushSync(()=>setFilters(next));const matches=filterPapers(papers,next);return {count:matches.length,papers:matches.map(p=>({title:p.title,doi:p.doi,date:p.date}))};
  }},{signal:lifecycle.signal});}catch(error){console.warn('Optional paper tools unavailable',error);}};
  void register();return ()=>lifecycle.abort();
 },[]);
 return <main className="catalog">
  <header className="masthead"><Link href="/" className="mark" aria-label="SR Paper List home">SR</Link><div><p className="eyebrow">SCIENCE ROBOTICS · 2024–2026</p><h1>The robot learning index.</h1></div><a className="repo-link" href={repo}><Code2 size={17}/> GitHub <ArrowUpRight size={15}/></a></header>
  <div className="intro-row"><p>Research, organized by what robots do and how they learn.</p><span>{papers.length} papers <span className="dot">/</span> Updated Sep 9, 2026</span></div>
  <section className="workspace" aria-label="Paper directory">
   <aside className="filters"><div className="section-label">REFINE THE INDEX</div><div className="search-box"><Search size={18}/><Input aria-label="Search papers" placeholder="Title, author, keyword…" value={filters.query} onChange={e=>update('query',e.target.value)} /></div>
    <Picker name="domain" label="Domains" value={filters.domain} onChange={v=>update('domain',v)}/>
    <Picker name="method" label="Methods" value={filters.method} onChange={v=>update('method',v)}/>
    <div className="compact-filters"><Picker name="year" label="Years" value={filters.year} onChange={v=>update('year',v)}/><Picker name="type" label="Article types" value={filters.type} onChange={v=>update('type',v)}/></div>
    <label htmlFor="cover-only" className="cover-toggle"><Checkbox id="cover-only" checked={filters.coverOnly} onCheckedChange={v=>update('coverOnly',v)} /><Star size={16}/> Cover papers only</label>
    <Button variant="ghost" onClick={()=>setFilters({...emptyFilters})} disabled={!active} className="reset">Clear filters</Button>
    <div className="scope-note"><BookOpen size={18}/><p>Published Jan 2024–Sep 9, 2026. Research articles and relevant reviews or perspectives.</p><a href={`${repo}/blob/main/SEARCH_NOTES.md`}>Scope & verification <ArrowUpRight size={13}/></a></div>
   </aside>
   <div className="results">
    {!active&&covers.length>0&&<section className="cover-strip" aria-label="Cover collection"><div><span className="section-label"><Star size={14}/> ON THE COVER</span><p>{covers.length} papers featured on the journal cover</p></div><Button variant="outline" onClick={()=>update('coverOnly',true)}>Explore covers <ArrowRight size={16}/></Button></section>}
    <div className="results-heading"><h2>{filters.coverOnly?'Cover papers':filters.domain!=='all'?filters.domain:'All papers'} <span aria-live="polite">{results.length}</span></h2><span>Newest first</span></div>
    {results.length===0?<Empty><EmptyHeader><EmptyTitle>No matching papers</EmptyTitle><EmptyDescription>Try another keyword or clear your filters.</EmptyDescription></EmptyHeader><Button onClick={()=>setFilters({...emptyFilters})}>Clear filters</Button></Empty>:results.map(p=><article className="paper" key={p.doi}>
     <div className="meta"><time dateTime={p.date}>{new Date(p.date+'T12:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'})}</time><span> · {p.type}</span>{p.cover.status==='confirmed'&&<a className="cover-badge" href={p.cover.sources[0]}><Star size={12} fill="currentColor"/> Cover Paper</a>}</div>
     <h3><a href={p.links.paper}>{p.title}<ArrowUpRight size={17}/></a></h3>
     <p className="authors">{p.authors.slice(0,4).join(', ')}{p.authors.length>4?` +${p.authors.length-4} authors`:''}</p>
     <p className="summary">{p.summary}</p>
     <div className="tags">{p.domains.map(t=><button className="domain-tag" key={t} onClick={()=>update('domain',t)}>{t}</button>)}{p.methods.map(t=><button className="method-tag" key={t} onClick={()=>update('method',t)}>{t==='Behavior Cloning'?'Behavior Cloning (BC)':t}</button>)}</div>
     <div className="paper-links">{Object.entries(p.links).map(([name,url])=><a key={name} href={url}>{name==='paper'?'Paper':name==='code'?'Code':name==='project'?'Project':name==='open'?'Open version':name}<ArrowUpRight size={12}/></a>)}<details><summary>Details & sources</summary><div className="details-body"><p>{p.authors.join(', ')}</p><p>Science Robotics {p.volume}({p.issue}) · {p.doi}</p><p>Cover status: {p.cover.status==='confirmed'?'confirmed':p.cover.status==='reported'?'reported by authors; publisher verification pending':'not yet verified'}{p.cover.note?`. ${p.cover.note}`:''}</p>{[...p.sources,...p.cover.sources].map((url,i)=><a key={url+i} href={url}>Source {i+1} <ArrowUpRight size={12}/></a>)}</div></details></div>
    </article>)}
   </div>
  </section>
  <footer><span>SR Paper List <span className="dot">/</span> Curated by Yanjie Ze</span><a href={`${repo}/blob/main/SEARCH_NOTES.md`}>Coverage notes ↗</a><p>Independent research index. Not affiliated with AAAS. Unverified cover status does not mean a paper was not featured.</p></footer>
 </main>
}
