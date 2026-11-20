/* Metrozo Ads – website scripts */
/* ===== Professional line icons (Lucide-style, MIT) ===== */
const IC={
 trend:'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
 target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
 pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
 palette:'<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2a10 10 0 0 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4A5.6 5.6 0 0 0 22 9.8C22 5.5 17.5 2 12 2Z"/>',
 star:'<polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/>',
 megaphone:'<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
 shirt:'<path d="M20.4 3.5 16 2a4 4 0 0 1-8 0L3.6 3.5a2 2 0 0 0-1.3 2.2l.6 3.5a1 1 0 0 0 1 .8H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.2a1 1 0 0 0 1-.8l.6-3.5a2 2 0 0 0-1.4-2.2z"/>',
 gem:'<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
 cart:'<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 2h3l2.7 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
 bike:'<circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>',
 cap:'<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><path d="M22 10v6"/>',
 bed:'<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
 utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
 building:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
 heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
 sofa:'<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"/><path d="M4 18v2M20 18v2"/>',
 sparkles:'<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
 tv:'<rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/>',
 wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z"/>',
 hardhat:'<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/>',
 lamp:'<path d="M8 2h8l4 10H4L8 2Z"/><path d="M12 12v6"/><path d="M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"/>',
 laptop:'<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.3 2.6a1 1 0 0 1-.9 1.4H3.6a1 1 0 0 1-.9-1.4L4 16"/>',
 car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0 0 13.7 6H8.4a2 2 0 0 0-1.7 1L5 10l-2.2.6A2 2 0 0 0 2 12.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M9 17h6"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
 book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
 phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
 msg:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
 rocket:'<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0"/><path d="M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
 eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
 briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
 file:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h6M16 13H8M16 17H8M10 9H8"/>',
 chart:'<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
 pie:'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
 image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
 users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
 send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
 'play-s':'<polygon points="7 4 20 12 7 20 7 4" fill="currentColor"/>',
 check:'<path d="M20 6 9 17l-5-5"/>',
 arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',
 hand:'<path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.4l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15"/>'
};
const IG_PATH='<path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.2 5.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>';
const WA_PATH='<path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/>';
function ic(n,cls){return `<svg class="ico ${cls||''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]||''}</svg>`}
function wa(cls){return `<svg class="ico ${cls||''}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${WA_PATH}</svg>`}
function igI(cls){return `<svg class="ico ${cls||''}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${IG_PATH}</svg>`}
/* replace [data-ic] placeholders in static HTML */
function hydrateIcons(root){(root||document).querySelectorAll('[data-ic]').forEach(el=>{const n=el.dataset.ic;el.innerHTML=n==='wa'?wa():n==='ig'?igI():ic(n);el.removeAttribute('data-ic')})}

hydrateIcons();
/* ===== METROZO ADS – shared data & behaviour ===== */
const WA='916380650947';
const SERVICES=[
 {name:"Digital Marketing",short:"Digital",ico:"trend",desc:"Strategic digital campaigns to grow your brand visibility and online reach.",
  inc:["Social media strategy for Instagram, Facebook & YouTube","Monthly content calendar & creatives","Brand awareness campaigns","Monthly performance report"],best:"Textile, Jewellery, Showrooms, Restaurants"},
 {name:"Lead Generation",short:"Leads",ico:"target",desc:"High-quality lead acquisition focused on conversions and ROI.",
  inc:["Meta & Google lead campaigns","Lead forms & landing pages","WhatsApp & call enquiry campaigns","Lead quality tracking"],best:"Education, Construction, Interiors, Car & Bike Showrooms"},
 {name:"GMB Services",short:"GMB",ico:"pin",desc:"Optimised Google My Business management for local dominance.",
  inc:["Google Business Profile setup & optimisation","Regular photos, posts & offers","Review management","Better local map ranking"],best:"Hotels, Restaurants, Supermarkets, Parlours, Shops"},
 {name:"Daily Branding",short:"Branding",ico:"palette",desc:"Consistent brand presence through creative daily content.",
  inc:["Daily posters & festival creatives","Reels & short videos","Offer & product posts","One consistent brand look"],best:"Every local business that wants to stay top-of-mind"},
 {name:"Influencer Promotion",short:"Influencer",ico:"users",desc:"Targeted influencer campaigns to boost brand credibility.",
  inc:["Right local influencer selection","Reels collaborations","End-to-end campaign coordination","Reach & engagement report"],best:"Restaurants, Textile, Beauty, New launches"},
 {name:"Paid Promotions",short:"Paid Ads",ico:"megaphone",desc:"Result-driven paid ad campaigns across major platforms.",
  inc:["Facebook & Instagram ads","Google & YouTube ads","Budget management & optimisation","ROI-focused audience targeting"],best:"Any business that wants faster, measurable growth"}
];
const INDUSTRIES=[
 ["shirt","Textile","Lead generation and branding for textile showrooms and manufacturers.",["Aurea Collections","Mps Boutique","Rahamath Burka","VVTex"]],
 ["gem","Jewellery","High-ticket lead campaigns and premium brand positioning.",["ARC GaneshKumar Jewellery"]],
 ["cart","Super Markets","Local reach ads and offer-based campaigns to increase daily footfall.",["Apple Super Market","Balaji Oils","Imayam Super Market","Paalam Super Market"]],
 ["bike","Bike Showrooms","Test-ride leads and seasonal sales campaigns.",["Bawa Honda","Majestic Motors"]],
 ["cap","Education Centers","Admission-focused strategies for schools, colleges & institutes.",["Green Apple Computer Education","SIP Abacus","Veranda Race"]],
 ["bed","Hotels","Booking-driven marketing and visibility boost for hotels and lodges.",["Annamithra","Melba"]],
 ["utensils","Restaurants","Online orders, local reach ads and brand visibility.",[]],
 ["building","Residency","Room booking and long-stay enquiry campaigns.",[]],
 ["heart","Marriage Halls","Event-based lead generation and seasonal booking strategies.",["S S Mahal"]],
 ["sofa","Furniture Showrooms","Product-focused ads and showroom visit campaigns.",["New National"]],
 ["sparkles","Beauty Parlour","Local ads and online booking support.",["Aari Zone","Abhaya","Rakshitha Parlour"]],
 ["tv","Electronics Shop","Product promotion and local customer reach.",["Power LED"]],
 ["wrench","Hardware Shop","Lead generation and local visibility.",[]],
 ["hardhat","Construction","Project leads and brand promotion for builders.",[]],
 ["lamp","Interior Designs","Client leads and online promotion for interior designers.",[]],
 ["laptop","Computer Showroom","Product marketing and local sales growth.",[]],
 ["car","Car Showroom","Test-drive leads and showroom visit campaigns.",[]],
 ["grid","Tiles Showroom","Customer leads and product promotion.",["Mahalingam Tiles Showroom"]],
 ["book","School","Admission-focused digital marketing for schools.",["Igen Pre School"]]
];
const IG_PROFILE='https://www.instagram.com/metrozoads/';
const rl=id=>`https://www.instagram.com/reel/${id}/`;
const thumbSrc=id=>(window.THUMBS&&window.THUMBS[id])||('reel-'+id+'.jpg');
const VIDEOS={
 "Textile":[["Textile","Dd3cYRgDUww"],["Textile","DcbEQcyly9o"],["Textile","DbdeZYBj9RC"],["Boutique","DccwCZhjXq3"],["Boutique","DXWrvyDiBgD"]],
 "Education Centers":[["Abacus centre","DcdrdgqT_B7"],["Abacus centre","DaAknLckQ5f"]],
 "Restaurants":[["Restaurant","DcLne9OEyI4"],["Restaurant","DWRGwE7CAUP"],["Restaurant","DfPT40ACVwK"],["Restaurant","DclXfTmgF9M"]]
};
const JOBS=[
 ["Video Editor","3 Seats","Premiere Pro, After Effects, DaVinci Resolve, Avid"],
 ["Photoshop Designer","2 Seats","Photoshop, Illustrator, InDesign"],
 ["Social Media Manager","1 Seat","Meta Ads, Analytics, Google My Business"],
 ["Accountant","1 Seat","GST, Billing, Excel, Accounting"],
 ["Ads Manager","1 Seat","Meta Ads, Campaign Optimisation, Budget Management"]
];
const waLink=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const $=id=>document.getElementById(id);

/* ---- render lists ---- */
$('indWrap').innerHTML=INDUSTRIES.map((d,i)=>{const v=VIDEOS[d[1]]||[];return `<button class="ind reveal d${i%4}" data-i="${i}">${v.length?`<span class="cnt">${ic('play-s')}${v.length} videos</span>`:d[3].length?`<span class="cnt">${d[3].length} client${d[3].length>1?'s':''}</span>`:''}<span class="em">${ic(d[0])}</span><h4>${d[1]}</h4><p>${d[2]}</p><span class="more">${v.length?'Watch our work':'View details'} ${ic('arrow')}</span></button>`}).join('');
$('jobs').innerHTML=JOBS.map((j,i)=>`<div class="job reveal d${i%4}"><h4>${j[0]}</h4><div class="meta"><span>${j[1]}</span><span>Age 18–25</span></div><p><b>Skills:</b> ${j[2]}</p><a href="${waLink('Hi Metrozo Ads, I want to apply for the '+j[0]+' job.')}" target="_blank" rel="noopener">${wa()} Apply via WhatsApp</a></div>`).join('');
$('fb').innerHTML=INDUSTRIES.map(d=>`<option>${d[1]}</option>`).join('')+'<option>Other</option>';
$('fs').innerHTML=SERVICES.map(s=>`<option>${s.name}</option>`).join('');
$('svcChips').innerHTML=SERVICES.map((s,i)=>`<button data-i="${i}">${ic(s.ico)} ${s.name}</button>`).join('');
$('yr').textContent=new Date().getFullYear();

/* ---- loader / nav ---- */
const hideLoader=()=>$('loader').classList.add('done');
addEventListener('load',()=>setTimeout(hideLoader,300));setTimeout(hideLoader,2500);
const nav=$('nav'),burger=$('burger'),links=$('links');
const onScroll=()=>nav.classList.toggle('scrolled',scrollY>30);addEventListener('scroll',onScroll);onScroll();
burger.onclick=()=>{burger.classList.toggle('open');links.classList.toggle('open')};
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{burger.classList.remove('open');links.classList.remove('open')}));

/* ---- reveal + counters ---- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,to=+el.dataset.to,t0=performance.now();
 (function tick(t){const p=Math.min((t-t0)/1800,1);el.textContent=Math.round(to*(1-Math.pow(1-p,4)));if(p<1)requestAnimationFrame(tick)})(t0);cio.unobserve(el)}),{threshold:.4});
document.querySelectorAll('.count').forEach(el=>cio.observe(el));

/* ---- modal ---- */
const modal=$('modal');
function fitReels(){document.querySelectorAll('.reel').forEach(r=>r.style.setProperty('--s',(r.clientWidth/326).toFixed(4)))}
addEventListener('resize',fitReels);
function openModal(html){$('modalBody').innerHTML=html;modal.classList.add('open');modal.setAttribute('aria-hidden','false');requestAnimationFrame(fitReels);setTimeout(fitReels,450)}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
$('modalX').onclick=closeModal;modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
$('indWrap').addEventListener('click',e=>{const b=e.target.closest('.ind');if(!b)return;const d=INDUSTRIES[+b.dataset.i];
 const v=VIDEOS[d[1]]||[];
 openModal(`<div class="em">${ic(d[0])}</div><h3>${d[1]}</h3><p>${d[2]}</p>${v.length?`<p class="mv-title">${igI()} Our work — tap a video to watch</p><div class="reels">${v.map((x,k)=>`<a class="reel" href="${rl(x[1])}" target="_blank" rel="noopener" style="--h:${(k*37)%360}" aria-label="Watch ${x[0]} reel ${k+1} on Instagram"><span class="r-media"><img src="${x[2]||thumbSrc(x[1])}" alt="${x[0]} reel ${k+1}" loading="lazy" onerror="this.remove()"></span><span class="r-shade"></span><span class="r-ig">${igI()}</span><span class="r-play">${ic('play-s')}</span><span class="r-lb"><b>${x[0]}</b>Reel ${k+1}</span></a>`).join('')}</div><a class="ig-all" href="${IG_PROFILE}" target="_blank" rel="noopener">${igI()} See all our work on Instagram ${ic('arrow')}</a>`:d[3].length?`<p style="margin-top:18px;color:var(--text);font-weight:700">Brands we've worked with</p><div class="clients">${d[3].map(c=>`<span>${c}</span>`).join('')}</div>`:`<p style="margin:18px 0 24px">Want to see our results for ${d[1].toLowerCase()}? Ask us on WhatsApp — we'll share campaign reports and ROI proof.</p>`}<a class="btn btn-primary" href="${waLink('Hi Metrozo Ads, I run a '+d[1]+' business. I want to grow with digital marketing.')}" target="_blank" rel="noopener">${wa()} Grow my ${d[1]} business</a>`)});

/* ---- SERVICE CHART ---- */
(function(){
 const svg=$('svcChart'),NS='http://www.w3.org/2000/svg',N=SERVICES.length;
 const cs=getComputedStyle(document.documentElement);
 const colors=SERVICES.map((_,i)=>cs.getPropertyValue('--c'+(i+1)).trim()||'#f16d21');
 const mode=(cs.getPropertyValue('--chart-mode').trim()||'donut').replace(/"/g,'');
 const R0=mode==='lotus'?92:105,R1=mode==='lotus'?250:235,GAP=mode==='lotus'?0:.035;
 const pol=(r,a)=>[r*Math.cos(a),r*Math.sin(a)];
 function wedge(a0,a1){const [x0,y0]=pol(R1,a0),[x1,y1]=pol(R1,a1),[x2,y2]=pol(R0,a1),[x3,y3]=pol(R0,a0),lg=a1-a0>Math.PI?1:0;
  return `M${x0},${y0}A${R1},${R1} 0 ${lg} 1 ${x1},${y1}L${x2},${y2}A${R0},${R0} 0 ${lg} 0 ${x3},${y3}Z`}
 function petal(a){const w=(R1-R0)*.42,L=R1-R0;const p=`M${R0},0 C${R0+L*.25},${-w} ${R0+L*.8},${-w*.75} ${R1},0 C${R0+L*.8},${w*.75} ${R0+L*.25},${w} ${R0},0Z`;return [p,a*180/Math.PI]}
 // decorative rings
 const deco=document.createElementNS(NS,'g');deco.setAttribute('class','chart-deco');
 deco.innerHTML=`<circle r="${R1+14}" fill="none" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="3 7"/><circle r="${R0-12}" fill="none" stroke="var(--line)" stroke-width="1"/>`;
 svg.appendChild(deco);
 const segs=SERVICES.map((s,i)=>{
  const step=2*Math.PI/N,a0=-Math.PI/2+i*step+GAP,a1=a0+step-2*GAP,am=(a0+a1)/2;
  const g=document.createElementNS(NS,'g');g.setAttribute('class','seg');g.setAttribute('tabindex','0');g.setAttribute('role','button');g.setAttribute('aria-label',s.name);
  const p=document.createElementNS(NS,'path');p.setAttribute('fill',colors[i]);
  if(mode==='lotus'){const [d,deg]=petal(am);p.setAttribute('d',d);p.setAttribute('transform',`rotate(${deg})`);p.setAttribute('stroke','var(--petal-stroke,rgba(255,255,255,.5))');p.setAttribute('stroke-width','2')}
  else p.setAttribute('d',wedge(a0,a1));
  g.appendChild(p);
  const lr=(R0+R1)/2+(mode==='lotus'?18:0);const [tx,ty]=pol(lr,am);
  const icg=document.createElementNS(NS,'g');icg.setAttribute('transform',`translate(${tx-12},${ty-30})`);icg.setAttribute('class','seg-ic');icg.innerHTML=`<g fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${IC[s.ico]}</g>`;
  const t=document.createElementNS(NS,'text');t.setAttribute('x',tx);t.setAttribute('y',ty+12);t.textContent=s.short;
  const n=document.createElementNS(NS,'text');n.setAttribute('x',tx);n.setAttribute('y',ty+28);n.setAttribute('class','num');n.textContent='0'+(i+1);
  g.append(icg,t,n);svg.appendChild(g);
  g.style.transformBox='view-box';g.style.transformOrigin='50% 50%';g._am=am;
  // intro animation
  g.style.opacity=0;g.style.transform='scale(.4) rotate(-40deg)';
  return g});
 const pieIO=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;segs.forEach((g,i)=>setTimeout(()=>{g.style.opacity='';g.style.transform='';},120*i));setTimeout(()=>select(0,false),120*N+200);pieIO.disconnect()},{threshold:.3});
 pieIO.observe(svg);
 let cur=-1,auto=true,timer=null;
 function select(i,user){
  if(user){auto=false;clearInterval(timer)}
  cur=i;const s=SERVICES[i];
  segs.forEach((g,k)=>{const off=k===i?16:0;g.style.transform=k===i?`translate(${Math.cos(g._am)*off}px,${Math.sin(g._am)*off}px) scale(1.04)`:'';g.classList.toggle('dim',k!==i)});
  $('ccIco').innerHTML=ic(s.ico);$('ccName').textContent=s.name;
  document.querySelectorAll('#svcChips button').forEach((b,k)=>b.classList.toggle('on',k===i));
  const P=$('svcPanel');P.style.setProperty('--panel-bar',colors[i]);
  P.innerHTML=`<div class="sp-anim"><div class="sp-num">0${i+1}</div><span class="sp-tag">Service 0${i+1} / 0${N}</span><h3><span class="sp-ic">${ic(s.ico)}</span>${s.name}</h3><p class="desc">${s.desc}</p><ul>${s.inc.map(x=>`<li>${x}</li>`).join('')}</ul><p class="best"><b>Best for:</b> ${s.best}</p><a class="btn btn-primary" href="${waLink('Hi Metrozo Ads, I am interested in '+s.name+'.')}" target="_blank" rel="noopener">${wa()} Enquire about ${s.name}</a></div>`;
  window.dispatchEvent(new CustomEvent('svc-select',{detail:i}));
 }
 segs.forEach((g,i)=>{g.addEventListener('click',()=>select(i,true));g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(i,true)}})});
 $('svcChips').addEventListener('click',e=>{const b=e.target.closest('button');if(b)select(+b.dataset.i,true)});
 timer=setInterval(()=>{if(auto&&cur>=0)select((cur+1)%N,false)},4500);
 window.selectService=i=>select(i,true);
})();

/* ---- form -> WhatsApp ---- */
$('leadForm').addEventListener('submit',e=>{e.preventDefault();const v=id=>$(id).value.trim();
 const url=waLink(`Hi Metrozo Ads!\n\nName: ${v('fn')}\nPhone: ${v('fp')}\nBusiness: ${v('fb')}\nService: ${v('fs')}\nMessage: ${v('fm')}`);
 const w=window.open(url,'_blank');if(!w){const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove()}
 $('fnote').textContent='Opening WhatsApp… if it does not open, message us at +91 63806 50947';});

(function(){/* milestones on growth line */
 const box=document.querySelector('.growth'),p=$('gpath'),L=p.getTotalLength();
 const M=[[.18,'Strategy'],[.42,'Creatives'],[.66,'Leads'],[.92,'Growth']];
 M.forEach(([f,t],i)=>{const pt=p.getPointAtLength(L*f);const d=document.createElement('div');d.className='mile'+(i%2?'':' dn');d.style.left=(pt.x/12)+'%';d.style.top=(pt.y/2.6)+'%';d.style.animationDelay=(0.6+3*f)+'s';d.innerHTML=`<b>${t}</b><i></i>`;box.appendChild(d)});
 const r=$('runner');const t0=performance.now()+3600;(function run(t){const k=((t-t0)/6000)%1;if(t>t0){r.style.opacity=1;const pt=p.getPointAtLength(L*Math.max(0,k));r.style.left=(pt.x/12)+'%';r.style.top=(pt.y/2.6)+'%'}requestAnimationFrame(run)})(performance.now());
})();
(function(){/* hero shrink on scroll */const h=$('bigH');addEventListener('scroll',()=>{const k=Math.min(scrollY/innerHeight,1);h.style.transform=`scale(${1-k*.25})`;h.style.opacity=1-k*.6},{passive:true})})();
(function(){/* sticky story */const steps=[...document.querySelectorAll('.sstep')],views=[...document.querySelectorAll('.view')];
 const mob=innerWidth<=980;
 const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const v=+e.target.dataset.v;steps.forEach(s=>s.classList.toggle('on',s===e.target));views.forEach((x,i)=>x.classList.toggle('on',i===v))}}),{rootMargin:mob?'-58% 0px -30% 0px':'-45% 0px -45% 0px'});
 steps.forEach(s=>io2.observe(s))})();
hydrateIcons();

/* ===== EXTRA ANIMATION LAYER ===== */
(function(){
 const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
 const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
 /* scroll progress + back to top */
 const bar=document.createElement('div');bar.className='progress';document.body.appendChild(bar);
 const tt=document.createElement('button');tt.className='totop';tt.setAttribute('aria-label','Back to top');
 tt.innerHTML='<svg viewBox="0 0 52 52"><circle cx="26" cy="26" r="24"/></svg>↑';document.body.appendChild(tt);
 const ring=tt.querySelector('circle');tt.onclick=()=>scrollTo({top:0,behavior:'smooth'});
 const prl=[...document.querySelectorAll('[data-speed]')];
 function onS(){const h=document.documentElement.scrollHeight-innerHeight,p=h>0?scrollY/h:0;bar.style.transform=`scaleX(${p})`;ring.style.strokeDashoffset=151*(1-p);tt.classList.toggle('show',scrollY>600);
  if(!reduce)prl.forEach(el=>{el.style.transform=`translate3d(0,${scrollY*(+el.dataset.speed)}px,0)`})}
 addEventListener('scroll',onS,{passive:true});onS();
 /* split-text headings */
 document.querySelectorAll('.sec-title').forEach(h=>{
  const out=[];h.childNodes.forEach(n=>{if(n.nodeType===3){n.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w))out.push(document.createTextNode(' '));else{const s=document.createElement('span');s.className='sw';s.innerHTML='<span></span>';s.firstChild.textContent=w;out.push(s)}})}
   else if(n.nodeType===1){if(n.tagName==='BR'){out.push(n.cloneNode());return}const parts=n.textContent.split(/\s+/).filter(Boolean);parts.forEach((w,i)=>{const s=document.createElement('span');s.className='sw';const inner=document.createElement('span');const c=n.cloneNode(false);c.textContent=w;inner.appendChild(c);s.appendChild(inner);out.push(s);if(i<parts.length-1)out.push(document.createTextNode(' '))})}});
  h.innerHTML='';out.forEach(o=>h.appendChild(o));h.classList.add('split');
  h.querySelectorAll('.sw>span').forEach((s,i)=>s.style.transitionDelay=(i*.06)+'s')});
 const sio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');sio.unobserve(e.target)}}),{threshold:.2});
 document.querySelectorAll('.split,.eyebrow').forEach(el=>sio.observe(el));
 /* ripple */
 document.addEventListener('pointerdown',e=>{const b=e.target.closest('.btn');if(!b)return;const r=b.getBoundingClientRect(),d=Math.max(r.width,r.height),s=document.createElement('span');s.className='ripple';s.style.cssText=`width:${d}px;height:${d}px;left:${e.clientX-r.left-d/2}px;top:${e.clientY-r.top-d/2}px`;b.appendChild(s);setTimeout(()=>s.remove(),700)});
 if(!fine||reduce)return;
 /* custom cursor */
 const c=document.createElement('div');c.className='cursor';const dot=document.createElement('div');dot.className='cursor-dot';document.body.append(c,dot);
 let cx=0,cy=0,tx=0,ty=0;addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;dot.style.left=tx+'px';dot.style.top=ty+'px';document.body.classList.add('has-cursor')});
 (function lp(){cx+=(tx-cx)*.18;cy+=(ty-cy)*.18;c.style.left=cx+'px';c.style.top=cy+'px';requestAnimationFrame(lp)})();
 document.addEventListener('pointerover',e=>c.classList.toggle('big',!!e.target.closest('a,button,.seg,.ind,input,select,textarea')));
 document.addEventListener('pointerleave',()=>document.body.classList.remove('has-cursor'));
 /* magnetic buttons */
 document.querySelectorAll('.btn').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
 /* 3D tilt cards */
 document.querySelectorAll('.ind,.job,.stat,.step,.c-tilt').forEach(el=>{el.classList.add('tilt');const g=document.createElement('span');g.className='glare';el.appendChild(g);
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;el.style.transition='transform .1s';el.style.transform=`perspective(800px) rotateX(${(.5-y)*10}deg) rotateY(${(x-.5)*10}deg) translateY(-4px)`;el.style.setProperty('--gx',x*100+'%');el.style.setProperty('--gy',y*100+'%')});
  el.addEventListener('pointerleave',()=>{el.style.transition='transform .5s';el.style.transform=''})});
})();
