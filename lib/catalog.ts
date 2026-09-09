export interface Paper {
 title:string; doi:string; date:string; authors:string[]; volume:string; issue:string;
 domains:string[]; methods:string[]; type:string; summary:string;
 cover:{status:string;sources:string[];note?:string}; links:{paper:string;project?:string;code?:string;open?:string}; sources:string[];
}
export interface Filters { query:string; year:string; domain:string; method:string; type:string; coverOnly:boolean }
export const emptyFilters:Filters={query:'',year:'all',domain:'all',method:'all',type:'all',coverOnly:false};
export function filterPapers(papers:Paper[],filters:Filters){
 const words=filters.query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
 return papers.filter(p=>{
  const haystack=[p.title,...p.authors,p.summary,...p.domains,...p.methods,p.doi,p.methods.includes('Behavior Cloning')?'BC':''].join(' ').toLocaleLowerCase();
  return words.every(w=>haystack.includes(w)) && (filters.year==='all'||p.date.startsWith(filters.year)) && (filters.domain==='all'||p.domains.includes(filters.domain)) && (filters.method==='all'||p.methods.includes(filters.method)) && (filters.type==='all'||p.type===filters.type) && (!filters.coverOnly||p.cover.status==='confirmed');
 }).sort((a,b)=>b.date.localeCompare(a.date)||a.title.localeCompare(b.title));
}
