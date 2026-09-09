import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {filterPapers,emptyFilters} from '../lib/catalog.ts';
const papers=JSON.parse(readFileSync(new URL('../papers.json',import.meta.url),'utf8'));
test('unique, sourced journal records within scope',()=>{
 assert.equal(new Set(papers.map(p=>p.doi)).size,papers.length);
 for(const p of papers){assert.match(p.doi,/^10\.1126\/scirobotics\.[a-z0-9]+$/);assert.ok(p.date>='2020-01-01'&&p.date<='2026-09-09');assert.ok(p.authors.length&&p.authors.every(Boolean));assert.ok(p.domains.length&&p.methods.length&&p.summary&&p.sources.length>=2);assert.equal(p.links.paper,'https://doi.org/'+p.doi);for(const url of [...Object.values(p.links),...p.sources,...p.cover.sources])assert.equal(new URL(url).protocol,'https:');if(p.cover.status==='confirmed')assert.ok(p.cover.sources.length>=2&&p.cover.note);}
});
test('default returns every paper in descending publication order',()=>{const r=filterPapers(papers,emptyFilters);assert.equal(r.length,papers.length);for(let i=1;i<r.length;i++)assert.ok(r[i-1].date>=r[i].date);});
test('domain and BC method intersect, rather than merge',()=>{const r=filterPapers(papers,{...emptyFilters,domain:'Dexterous Manipulation',method:'Behavior Cloning'});assert.ok(r.length>0);assert.ok(r.every(p=>p.domains.includes('Dexterous Manipulation')&&p.methods.includes('Behavior Cloning')));assert.ok(!r.some(p=>p.title.startsWith('Learning a thousand')));});
test('search handles title, author, DOI, whitespace and BC alias',()=>{assert.ok(filterPapers(papers,{...emptyFilters,query:'  neuralfeels   Suresh '}).some(p=>p.doi.endsWith('adl0628')));assert.equal(filterPapers(papers,{...emptyFilters,query:papers[0].doi}).length,1);assert.ok(filterPapers(papers,{...emptyFilters,query:'BC'}).some(p=>p.methods.includes('Behavior Cloning')));});
test('cover, year and article type compose',()=>{const r=filterPapers(papers,{...emptyFilters,coverOnly:true,year:'2025',type:'Research Article'});assert.ok(r.length>0);assert.ok(r.every(p=>p.cover.status==='confirmed'&&p.date.startsWith('2025')&&p.type==='Research Article'));});
test('impossible query is empty; clearing restores all results',()=>{assert.equal(filterPapers(papers,{...emptyFilters,query:'zzzz-no-such-paper'}).length,0);assert.equal(filterPapers(papers,{...emptyFilters}).length,papers.length);});
