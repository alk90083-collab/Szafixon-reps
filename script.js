const toast=document.getElementById('toast');
function showToast(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth'})}
function saveDemo(){showToast('Demo: link został zapisany!')}
document.querySelectorAll('.heart').forEach(b=>b.addEventListener('click',()=>{b.classList.toggle('liked');b.textContent=b.classList.contains('liked')?'♥':'♡';showToast(b.classList.contains('liked')?'Dodano do ulubionych':'Usunięto z ulubionych')}))
document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.find').forEach(c=>c.style.display=f==='all'||c.dataset.cat===f?'':'none')}))
function filterFinds(){scrollToId('finds');setTimeout(()=>document.querySelector('[data-filter="street"]').click(),350)}
document.querySelector('.menu').addEventListener('click',()=>{const nav=document.querySelector('.nav nav');nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='76px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px';nav.style.background='#090909';nav.style.flexDirection='column';nav.style.zIndex='15'})
