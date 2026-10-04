// نفس الـ 16 أكلة اللي في الصورة بالظبط بنفس الترتيب
const recipes = [
{t:"Bacon Double Cheese Burger Dip",i:"carrot",img:"https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=400"},
{t:"French Onion Soup Stuffed Mushrooms",i:"mushroom",img:"https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400"},
{t:"The Best Lasagna Ever",i:"carrot",img:"https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400"},
{t:"Easy Shepherd's Pie",i:"beef",img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=400"},
{t:"Patty Melts",i:"beef",img:"https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400"},
{t:"Pot Roast",i:"carrot",img:"https://images.unsplash.com/photo-1525183995014-b329225b9407?w=400"},
{t:"In-N-Out's Double-Double, Animal Style",i:"beef",img:"https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=400"},
{t:"World's Best Lasagna",i:"pasta",img:"https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400"},
{t:"Spicy Whiskey BBQ Sliders",i:"beef",img:"https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=400"},
{t:"Baked Ziti",i:"pasta",img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400"},
{t:"Vietnamese Pho: Beef Noodle Soup Recipe",i:"beef",img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400"},
{t:"Simple, Perfect Enchiladas!",i:"chicken",img:"https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=400"},
{t:"Red Wine-Braised Short Ribs",i:"beef",img:"https://images.unsplash.com/photo-1546964052-d9333494b4c2?w=400"},
{t:"Slow Cooker Beef Stroganoff",i:"beef",img:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400"},
{t:"Sunday Night Stew",i:"carrot",img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=400"},
{t:"Bacon Wrapped Jalapeno Popper Burgers",i:"beef",img:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=400"},
];

const ingredients=["All Ingredients","carrot","beef","pasta","mushroom","chicken"];
document.getElementById('app').innerHTML=`
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif}
body{background:#a9d6e5;padding:20px;min-height:100vh}
.container{max-width:950px;margin:0 auto}
.search-box input{width:100%;padding:14px 20px;border-radius:10px;border:none;outline:none}
.select-wrap{position:relative;margin:12px 0;z-index:99}
.select-btn{width:100%;background:white;padding:13px 16px;border-radius:8px;display:flex;justify-content:space-between;cursor:pointer}
.options{position:absolute;top:110%;left:0;right:0;background:white;border-radius:8px;display:none;box-shadow:0 10px 25px rgba(0,0,0,0.2)}
.select-wrap.open .options{display:block}
.option{padding:12px 16px;cursor:pointer}.option:hover{background:#eef7fb}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.card img{width:100%;height:135px;object-fit:cover;border-radius:6px;background:white}
.card h3{color:white;text-align:center;font-size:13px;margin-top:7px}
</style>
<div class="container">
  <div class="search-box"><input id="searchInput" placeholder="Search recipes..."></div>
  <div class="select-wrap" id="selectWrap">
    <div class="select-btn" id="selectBtn"><span id="selectedText">All Ingredients</span><span>▼</span></div>
    <div class="options" id="optionsList"></div>
  </div>
  <div class="grid" id="grid"></div>
</div>`;

let current="All Ingredients";
const grid=document.getElementById('grid'), search=document.getElementById('searchInput'), wrap=document.getElementById('selectWrap'), btn=document.getElementById('selectBtn'), selText=document.getElementById('selectedText'), list=document.getElementById('optionsList');

function renderOpts(){
 list.innerHTML=ingredients.map(i=>`<div class="option" data-v="${i}">${i}</div>`).join('');
 list.querySelectorAll('.option').forEach(o=>o.onclick=()=>{current=o.dataset.v;selText.textContent=current;wrap.classList.remove('open');renderGrid()});
}
function renderGrid(){
 const q=search.value.toLowerCase();
 const f=recipes.filter(r=>(r.t.toLowerCase().includes(q))&&(current==="All Ingredients"||r.i===current));
 grid.innerHTML=f.map(r=>`
  <div class="card">
   <img src="${r.img}" onerror="this.src='https://picsum.photos/seed/${r.t.replace(/\\s/g,'')}/400/300'">
   <h3>${r.t}</h3>
  </div>`).join('');
}
btn.onclick=(e)=>{e.stopPropagation();wrap.classList.toggle('open')};
document.onclick=()=>wrap.classList.remove('open');
search.oninput=renderGrid;
renderOpts();renderGrid();