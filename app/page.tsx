'use client';
import {type CSSProperties,useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {flushSync} from 'react-dom';
import {ArrowUpRight,Search,Star,ArrowRight,X,Code2} from 'lucide-react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Empty,EmptyHeader,EmptyTitle,EmptyDescription} from '@/components/ui/empty';
import data from '../papers.json';
import {filterPapers,emptyFilters,type Paper,type Filters} from '@/lib/catalog';

const papers:Paper[]=data;
const options={year:[...new Set(papers.map(p=>p.date.slice(0,4)))].sort((a,b)=>b.localeCompare(a)),domain:[...new Set(papers.flatMap(p=>p.domains))].sort((a,b)=>a.localeCompare(b)),method:[...new Set(papers.flatMap(p=>p.methods))].sort((a,b)=>a.localeCompare(b)),type:[...new Set(papers.map(p=>p.type))].sort((a,b)=>a.localeCompare(b))};
const repo='https://github.com/YanjieZe/SR-Paper-List';
const label=(v:string)=>v==='Behavior Cloning'?'Behavior Cloning (BC)':v;
const day=(iso:string)=>new Date(iso+'T12:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'});
const coverCount=papers.filter(p=>p.cover.status==='confirmed').length;

// Source-list rows carry a count, the way Mail and Finder label their sidebars.
const tallied=(field:'domains'|'methods',values:string[])=>values.map(v=>({value:v,count:papers.filter(p=>p[field].includes(v)).length})).sort((a,b)=>b.count-a.count||a.value.localeCompare(b.value));
const domainRows=tallied('domains',options.domain),methodRows=tallied('methods',options.method);

// Timeline geometry: every paper sits between the first and last publication date.
const span={start:Date.UTC(Number(options.year.at(-1)),0,1),end:Date.UTC(Number(options.year[0])+1,0,1)};
const at=(iso:string)=>((Date.parse(iso)-span.start)/(span.end-span.start))*100;

const typeSegments=[{value:'all',text:'All'},...options.type.map(t=>({value:t,text:t==='Research Article'?'Articles':'Reviews'}))];
const yearSegments=[{value:'all',text:'All years'},...options.year.map(y=>({value:y,text:y}))];

function Segmented({name,value,segments,onChange}:{name:string;value:string;segments:{value:string;text:string}[];onChange:(v:string)=>void}){
 const index=Math.max(0,segments.findIndex(s=>s.value===value));
 const group=name.toLowerCase().replace(/\W+/g,'-');
 // Native radios give arrow-key navigation and roving focus for free.
 return <fieldset className="seg" style={{'--n':segments.length,'--i':index} as CSSProperties}>
  <legend className="sr-only">{name}</legend>
  <span className="seg-thumb" aria-hidden="true"/>
  {segments.map((s,i)=><label key={s.value} className="seg-option">
   <input type="radio" name={group} value={s.value} checked={i===index} onChange={()=>onChange(s.value)}/>
   <span>{s.text}</span>
  </label>)}
 </fieldset>;
}

export default function Home(){
 const [filters,setFilters]=useState<Filters>(emptyFilters);
 const [stuck,setStuck]=useState(false);
 const [peek,setPeek]=useState<Paper|null>(null);
 const searchRef=useRef<HTMLInputElement>(null);
 const results=useMemo(()=>filterPapers(papers,filters),[filters]);
 const covers=useMemo(()=>papers.filter(p=>p.cover.status==='confirmed').sort((a,b)=>b.date.localeCompare(a.date)),[]);
 const hits=useMemo(()=>new Set(results.map(p=>p.doi)),[results]);
 const active=JSON.stringify(filters)!==JSON.stringify(emptyFilters);
 const update=useCallback((key:keyof Filters,value:string|boolean)=>setFilters(f=>({...f,[key]:value})),[]);
 const clear=useCallback(()=>setFilters({...emptyFilters}),[]);
 const toggle=useCallback((key:'domain'|'method',value:string)=>setFilters(f=>({...f,[key]:f[key]===value?'all':value})),[]);

 // The toolbar only grows its hairline once the page has actually moved.
 useEffect(()=>{
  let last=false;
  const sync=()=>{const now=window.scrollY>2;if(now!==last){last=now;setStuck(now);}};
  const first=requestAnimationFrame(sync);
  window.addEventListener('scroll',sync,{passive:true});
  return ()=>{cancelAnimationFrame(first);window.removeEventListener('scroll',sync);};
 },[]);

 // "/" jumps to search, Escape leaves it.
 useEffect(()=>{
  const onKey=(e:KeyboardEvent)=>{
   const el=document.activeElement,typing=el instanceof HTMLElement&&(el.tagName==='INPUT'||el.tagName==='TEXTAREA'||el.isContentEditable);
   if(e.key==='/'&&!typing&&!e.metaKey&&!e.ctrlKey){e.preventDefault();searchRef.current?.focus();}
   if(e.key==='Escape'&&el===searchRef.current)searchRef.current?.blur();
  };
  window.addEventListener('keydown',onKey);return ()=>window.removeEventListener('keydown',onKey);
 },[]);

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

 const chips=[
  filters.query&&{key:'query' as const,text:`“${filters.query}”`,reset:''},
  filters.domain!=='all'&&{key:'domain' as const,text:filters.domain,reset:'all'},
  filters.method!=='all'&&{key:'method' as const,text:label(filters.method),reset:'all'},
  filters.year!=='all'&&{key:'year' as const,text:filters.year,reset:'all'},
  filters.type!=='all'&&{key:'type' as const,text:filters.type,reset:'all'},
  filters.coverOnly&&{key:'coverOnly' as const,text:'Cover papers',reset:false},
 ].filter(Boolean) as {key:keyof Filters;text:string;reset:string|boolean}[];

 return <>
  <header className={`toolbar${stuck?' is-scrolled':''}`}>
   <a className="brand" href="#top"><span className="brand-mark">SR</span> Papers <em>Science Robotics</em></a>
   <div className="toolbar-search">
    <Search size={14}/>
    <Input ref={searchRef} aria-label="Search papers" placeholder="Search title, author, keyword" value={filters.query} onChange={e=>update('query',e.target.value)}/>
    <kbd>/</kbd>
   </div>
   <a className="toolbar-link" href={repo}><Code2 size={15}/> <span>Repository</span></a>
  </header>

  <div className="shell">
   <aside className="sidebar">
    <nav aria-label="Filter by collection">
     <div className="source-group">
      <button className="source-row" aria-pressed={!active} onClick={clear}><span>All papers</span><span className="count">{papers.length}</span></button>
      <button className="source-row" aria-pressed={filters.coverOnly} onClick={()=>update('coverOnly',!filters.coverOnly)}><Star size={13} fill={filters.coverOnly?'currentColor':'none'}/><span>Cover papers</span><span className="count">{coverCount}</span></button>
     </div>
     <div className="source-group">
      <h2>Domains</h2>
      {domainRows.map(r=><button key={r.value} className="source-row" aria-pressed={filters.domain===r.value} onClick={()=>toggle('domain',r.value)}><span>{r.value}</span><span className="count">{r.count}</span></button>)}
     </div>
     <div className="source-group">
      <h2>Methods</h2>
      {methodRows.map(r=><button key={r.value} className="source-row" aria-pressed={filters.method===r.value} onClick={()=>toggle('method',r.value)}><span>{label(r.value)}</span><span className="count">{r.count}</span></button>)}
     </div>
    </nav>
   </aside>

   <main className="content" id="top">
    <h1>Robot learning, paper by paper.</h1>
    <p className="subtitle">{papers.length} papers from <i>Science Robotics</i>, January 2020 to September 2026, tagged by what the robot does and how it learns. <a href={`${repo}/blob/main/SEARCH_NOTES.md`}>How this list was built</a></p>

    <section className="panel" aria-label="Publication timeline">
     <div className="timeline-track" aria-hidden="true" style={{'--years':options.year.length} as CSSProperties} onMouseLeave={()=>setPeek(null)}>
      {papers.map((p,i)=><span key={p.doi} className={`tick${p.cover.status==='confirmed'?' is-cover':''}${active?(hits.has(p.doi)?' is-hit':' is-dim'):''}`} style={{left:`${at(p.date)}%`,animationDelay:`${i*4}ms`}} onMouseEnter={()=>setPeek(p)}/>)}
     </div>
     <div className="timeline-years">
      {[...options.year].reverse().map(y=><button key={y} type="button" aria-pressed={filters.year===y} onClick={()=>update('year',filters.year===y?'all':y)}>{y}</button>)}
     </div>
     <p className="timeline-readout">
      {peek
       ?<span>{peek.title} <span className="num">· {day(peek.date)}</span></span>
       :<><span><i/>One mark per paper, by publication date</span><span><i className="cover"/>{coverCount} verified journal covers</span></>}
     </p>
    </section>

    {!active&&<section className="panel cover-shelf" aria-label="Cover papers">
     <p><Star size={14} fill="currentColor"/><b>On the cover.</b> {covers.length} papers here were featured on the journal cover, each confirmed against a publisher or institutional source.</p>
     <ol>{covers.map(p=><li key={p.doi}><time className="num" dateTime={p.date}>{p.date}</time><a href={p.links.paper}>{p.title}</a></li>)}</ol>
     <Button variant="outline" size="sm" onClick={()=>update('coverOnly',true)}>Show only these <ArrowRight size={14}/></Button>
    </section>}

    <div className="controls">
     <Segmented name="Article type" value={filters.type} segments={typeSegments} onChange={v=>update('type',v)}/>
     <Segmented name="Year" value={filters.year} segments={yearSegments} onChange={v=>update('year',v)}/>
     <span className="count-note" aria-live="polite">{results.length} {results.length===1?'paper':'papers'}</span>
    </div>

    {chips.length>0&&<div className="chips">{chips.map(c=><button key={c.key} type="button" onClick={()=>update(c.key,c.reset)}>{c.text} <X size={12}/></button>)}</div>}

    {results.length===0
     ?<div className="list"><Empty><EmptyHeader><EmptyTitle>Nothing matches those filters</EmptyTitle><EmptyDescription>Try a broader keyword, or start over with the full list.</EmptyDescription></EmptyHeader><Button onClick={clear}>Show all papers</Button></Empty></div>
     :<div className="list">{results.map(p=><article className="paper" key={p.doi}>
      <div className="meta">
       <time className="num" dateTime={p.date}>{day(p.date)}</time><span className="sep">·</span><span>{p.type}</span>
       {p.cover.status==='confirmed'&&<a className="cover-badge" href={p.cover.sources[0]}><Star size={10} fill="currentColor"/> Cover</a>}
      </div>
      <h3><a href={p.links.paper}>{p.title}<ArrowUpRight size={15}/></a></h3>
      <p className="authors">{p.authors.join(', ')}</p>
      <p className="summary">{p.summary}</p>
      <div className="tags">
       {p.domains.map(t=><button className="domain-tag" type="button" key={t} onClick={()=>toggle('domain',t)}>{t}</button>)}
       {p.methods.map(t=><button className="method-tag" type="button" key={t} onClick={()=>toggle('method',t)}>{label(t)}</button>)}
      </div>
      <div className="paper-links">
       {Object.entries(p.links).map(([name,url])=><a key={name} href={url}>{name==='paper'?'Paper':name==='code'?'Code':name==='project'?'Project':name==='open'?'Open version':name}<ArrowUpRight size={12}/></a>)}
       <details><summary>Details and sources</summary><div className="details-body">
        <p className="num">Science Robotics {p.volume}({p.issue}) · {p.doi}</p>
        <p>Cover status: {p.cover.status==='confirmed'?'confirmed':p.cover.status==='reported'?'reported by authors; publisher verification pending':'not yet verified'}{p.cover.note?`. ${p.cover.note}`:''}</p>
        {[...p.sources,...p.cover.sources].map((url,i)=><a key={url+i} href={url}>Source {i+1} <ArrowUpRight size={12}/></a>)}
       </div></details>
      </div>
     </article>)}</div>}

    <footer>
     <div><span>Curated by <a href="https://yanjieze.com">Yanjie Ze</a></span><a href={`${repo}/blob/main/SEARCH_NOTES.md`}>Coverage notes</a><a href={repo}>Repository</a></div>
     <p>Independent research index. Not affiliated with AAAS. A paper without a verified cover badge was not necessarily absent from a cover — it means no source has confirmed it yet.</p>
    </footer>
   </main>
  </div>
 </>;
}
