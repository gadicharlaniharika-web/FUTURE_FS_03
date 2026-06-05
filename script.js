/* ═══════════════════════════════════════════════
   MoonBean Café — script.js
   Author: MoonBean Café Project
   Description: All JavaScript logic for MoonBean Café
   Sections: Images · Data · Render Functions · Cart
             Builder · Deals · Reviews · Reservation · Toast · Init
═══════════════════════════════════════════════ */

// ═══════════════════════════════
//  IMAGES  — verified Unsplash
// ═══════════════════════════════
const IMG = {
  // Coffee — all confirmed working
  'Cappuccino':        'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80',
  'Latte':             'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=600&q=80',
  'Cold Coffee':       'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
  'Espresso':          'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80',
  'Mocha':             'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&q=80',
  'Flat White':        'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&q=80',
  // Snacks
  'Garlic Bread':      'https://images.unsplash.com/photo-1619531038896-ae818e77be56?w=600&q=80',
  'Chocolate Cake':    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
  'Chicken Sandwich':  'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80',
  'Pasta Arrabbiata':  'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
  'Brownie':           'https://images.unsplash.com/photo-1589881133825-b9d8d5b0a268?w=600&q=80',
  'Croissant':         'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
  // Combos
  'Coffee + Brownie':    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80',
  'Pasta + Cold Coffee': 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80',
  'Family Snack Combo':  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80',
  'Study Session':       'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
  // Deals
  'Buy 2 Coffees':       'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
  '10% Off ₹800+':       'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
  'Free Delivery':       'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80',
  // Review atmosphere images
  'rev1':'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80',
  'rev2':'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80',
  'rev3':'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=80',
  'rev4':'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80',
  'rev5':'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80',
  'rev6':'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?w=600&q=80',
};

// Helper: render image with emoji fallback
function imgEl(key, emoji, cls){
  const src = IMG[key];
  if(src) return `<img class="${cls}" src="${src}" alt="${key}" loading="lazy" onerror="this.parentNode.innerHTML='<div class=\\'${cls.replace('img','img-fallback')}\\'>${emoji}</div>'"/>`;
  return `<div class="${cls.replace('img','img-fallback')}">${emoji}</div>`;
}

// ═══════════════════════════════
//  DATA
// ═══════════════════════════════
const menu = {
  Coffee:[
    {name:'Cappuccino',   price:180,desc:'Espresso with steamed milk foam',       emoji:'☕',veg:true},
    {name:'Latte',        price:200,desc:'Smooth espresso with velvety milk',      emoji:'🥛',veg:true},
    {name:'Cold Coffee',  price:220,desc:'Chilled blended coffee with cream',      emoji:'🧋',veg:true},
    {name:'Espresso',     price:120,desc:'Pure, bold single/double shot',          emoji:'⚡',veg:true},
    {name:'Mocha',        price:230,desc:'Chocolate espresso with whipped cream',  emoji:'🍫',veg:true},
    {name:'Flat White',   price:190,desc:'Ristretto with micro-foam milk',         emoji:'🌀',veg:true},
  ],
  Snacks:[
    {name:'Garlic Bread',    price:150,desc:'Toasted sourdough with herb garlic butter',emoji:'🍞',veg:true},
    {name:'Chocolate Cake',  price:180,desc:'Moist dark chocolate slice',              emoji:'🎂',veg:true},
    {name:'Chicken Sandwich',price:220,desc:'Grilled chicken with sriracha mayo',      emoji:'🥪',veg:false},
    {name:'Pasta Arrabbiata',price:280,desc:'Penne in spicy tomato sauce',             emoji:'🍝',veg:true},
    {name:'Brownie',         price:140,desc:'Fudgy walnut brownie, served warm',       emoji:'🍮',veg:true},
    {name:'Croissant',       price:120,desc:'Buttery flaky pastry',                    emoji:'🥐',veg:true},
  ],
  Combos:[
    {name:'Coffee + Brownie',   price:280,desc:'Any coffee + warm brownie',             emoji:'☕🍮',veg:true,tag:'combo'},
    {name:'Pasta + Cold Coffee',price:440,desc:'Pasta Arrabbiata + Cold Coffee',        emoji:'🍝🧋',veg:true,tag:'combo'},
    {name:'Family Snack Combo', price:750,desc:'4 coffees + 2 snacks + 2 brownies',     emoji:'🍽️', veg:true,tag:'combo'},
    {name:'Study Session',      price:350,desc:'Latte + Garlic Bread + Brownie',        emoji:'📚',  veg:true,tag:'combo'},
  ],
};

const featured=[
  {name:'Cold Coffee',      price:220,emoji:'🧋',badge:'🔥 Hot Pick'},
  {name:'Brownie',          price:140,emoji:'🍮',badge:'⭐ Best Seller'},
  {name:'Mocha',            price:230,emoji:'🍫',badge:'✨ New'},
  {name:'Family Snack Combo',price:750,emoji:'🍽️',badge:'💰 Best Value'},
];

const reviews=[
  {stars:5,text:"Absolute gem! The cold coffee is the best I've had in Bangalore. Love that I can order online — no more queues!",name:'Aarav Mehta',   date:'May 2026',  avatar:'🧔',img:'rev1'},
  {stars:5,text:"The Build Your Coffee feature is genius. Got my oat milk mocha exactly how I wanted. Staff is super friendly!",  name:'Priya Nair',   date:'Apr 2026',  avatar:'👩',img:'rev2'},
  {stars:5,text:"Reserved a table for 6 online in literally 2 minutes. Pasta was amazing and the ambience is beautiful!",         name:'Rohan Das',    date:'Mar 2026',  avatar:'🧑',img:'rev3'},
  {stars:4,text:"Garlic bread and cappuccino combo is a life hack honestly. Will definitely be my regular café.",                 name:'Sneha K.',     date:'May 2026',  avatar:'👩',img:'rev4'},
  {stars:5,text:"The brownie here is criminally good. Came for a study session, ended up staying 4 hours lol.",                  name:'Karan Verma',  date:'Apr 2026',  avatar:'👨',img:'rev5'},
  {stars:5,text:"Comfortable, cosy, great wifi. The Family Snack Combo is excellent value. Will keep coming back!",              name:'Meena & Family',date:'May 2026', avatar:'👨‍👩‍👧',img:'rev6'},
];

const dealsData=[
  {img:'Coffee + Brownie',  icon:'☕🍮',name:'Coffee + Brownie',  desc:'Any coffee + warm brownie at a special combined price.',        orig:320, price:280, saving:'Save ₹40'},
  {img:'Buy 2 Coffees',     icon:'🎉', name:'Buy 2 Coffees',     desc:'Buy any 2 coffees and get a warm brownie absolutely free!',     orig:540, price:400, saving:'Free ₹140 Brownie'},
  {img:'10% Off ₹800+',     icon:'💯', name:'10% Off ₹800+',     desc:'Orders above ₹800 get 10% off — automatically at checkout.',   orig:null,price:null,saving:'Auto-applied in cart'},
  {img:'Free Delivery',     icon:'🛵', name:'Free Delivery',     desc:'Order above ₹1000 and delivery is completely free.',            orig:null,price:null,saving:'Save ₹49 delivery fee'},
  {img:'Study Session',     icon:'📚', name:'Study Session',     desc:'Latte + Garlic Bread + Brownie — your perfect work afternoon.', orig:470, price:350, saving:'Save ₹120'},
  {img:'Family Snack Combo',icon:'🍽️',name:'Family Combo',      desc:'4 coffees + 2 snacks + 2 brownies. Great for groups!',          orig:1080,price:750, saving:'Save ₹330'},
];

const builderOptions={
  Base:    {key:'chipsBase',    opts:['Cappuccino','Latte','Espresso','Cold Coffee','Mocha','Flat White'],prices:{Cappuccino:180,Latte:200,Espresso:120,'Cold Coffee':220,Mocha:230,'Flat White':190}},
  Milk:    {key:'chipsMilk',    opts:['Full Fat','Skimmed','Oat Milk','Soy Milk','Almond Milk'],         prices:{'Full Fat':0,Skimmed:0,'Oat Milk':30,'Soy Milk':20,'Almond Milk':30}},
  Sugar:   {key:'chipsSugar',   opts:['No Sugar','Low','Medium','Extra Sweet'],                          prices:{}},
  Ice:     {key:'chipsIce',     opts:['No Ice','Light Ice','Regular Ice','Extra Ice'],                   prices:{}},
  Toppings:{key:'chipsToppings',opts:['Whipped Cream','Chocolate Drizzle','Caramel Drizzle','Cinnamon','Vanilla Syrup'],prices:{'Whipped Cream':20,'Chocolate Drizzle':20,'Caramel Drizzle':20,Cinnamon:20,'Vanilla Syrup':20}},
};
const builderState={Base:'Cappuccino',Milk:'Full Fat',Sugar:'Medium',Ice:'No Ice',Toppings:[]};
const coffeeEmojis={Cappuccino:'☕',Latte:'🥛',Espresso:'⚡','Cold Coffee':'🧋',Mocha:'🍫','Flat White':'🌀'};
let cart=[],orderHistory=[];

// ═══════════════════════════════
//  RENDER FEATURED
// ═══════════════════════════════
function renderFeatured(){
  document.getElementById('featuredGrid').innerHTML=featured.map(f=>`
    <div class="feat-card" onclick="addToCart('${f.name.replace(/'/g,"\\'")}',${f.price},'${f.emoji}')">
      <span class="feat-badge">${f.badge}</span>
      <div class="feat-img-wrap">${imgEl(f.name,f.emoji,'feat-img')}</div>
      <div class="feat-body">
        <div class="feat-name">${f.name}</div>
        <div class="feat-price">₹${f.price}</div>
      </div>
    </div>`).join('');
}

// ═══════════════════════════════
//  RENDER MENU
// ═══════════════════════════════
let activeTab='Coffee';
function renderTabs(){
  document.getElementById('menuTabs').innerHTML=Object.keys(menu).map(cat=>`
    <button class="tab-btn ${cat===activeTab?'active':''}" onclick="switchTab('${cat}')">${cat}</button>`).join('');
}
function switchTab(cat){activeTab=cat;renderTabs();renderMenuGrid();}
function renderMenuGrid(){
  document.getElementById('menuGrid').innerHTML=menu[activeTab].map(item=>`
    <div class="menu-card">
      <div class="menu-card-img-wrap">${imgEl(item.name,item.emoji,'menu-card-img')}</div>
      <div class="menu-card-body">
        <div class="menu-card-top">
          <span style="font-size:1.3rem">${item.emoji}</span>
          <div>${item.veg?'<span class="tag-veg">VEG</span>':''}${item.tag==='combo'?'<span class="tag-combo">COMBO</span>':''}</div>
        </div>
        <div class="menu-item-name">${item.name}</div>
        <div class="menu-item-desc">${item.desc}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:.5rem">
          <div class="menu-item-price">₹${item.price}</div>
          <button class="add-btn" onclick="addToCart('${item.name.replace(/'/g,"\\'")}',${item.price},'${item.emoji}')">+ Add</button>
        </div>
      </div>
    </div>`).join('');
}

// ═══════════════════════════════
//  BUILDER
// ═══════════════════════════════
function renderBuilder(){
  Object.entries(builderOptions).forEach(([group,cfg])=>{
    const el=document.getElementById(cfg.key);if(!el)return;
    const multi=group==='Toppings';
    el.innerHTML=cfg.opts.map(opt=>{
      const sel=multi?builderState.Toppings.includes(opt):builderState[group]===opt;
      return`<div class="chip ${sel?'selected':''}" onclick="selectChip('${group}','${opt}')">${opt}</div>`;
    }).join('');
  });
  updateBuilderPreview();
}
function selectChip(group,opt){
  if(group==='Toppings'){const i=builderState.Toppings.indexOf(opt);if(i>=0)builderState.Toppings.splice(i,1);else builderState.Toppings.push(opt);}
  else builderState[group]=opt;
  renderBuilder();
}
function calcBuilderPrice(){
  let t=(builderOptions.Base.prices[builderState.Base]||0)+(builderOptions.Milk.prices[builderState.Milk]||0);
  builderState.Toppings.forEach(x=>t+=(builderOptions.Toppings.prices[x]||0));
  return t;
}
function updateBuilderPreview(){
  const b=builderState;
  document.getElementById('builderEmoji').textContent=coffeeEmojis[b.Base]||'☕';
  document.getElementById('builderName').textContent=`Custom ${b.Base}`;
  document.getElementById('builderDetails').textContent=`${b.Milk} · ${b.Sugar} · ${b.Ice}`+(b.Toppings.length?` · ${b.Toppings.join(', ')}`:``);
  document.getElementById('builderPrice').textContent=`₹${calcBuilderPrice()}`;
}
function addBuilderToCart(){addToCart(`Custom ${builderState.Base}`,calcBuilderPrice(),coffeeEmojis[builderState.Base]||'☕');}

// ═══════════════════════════════
//  DEALS
// ═══════════════════════════════
function renderDeals(){
  document.getElementById('dealsGrid').innerHTML=dealsData.map(d=>`
    <div class="deal-card">
      <div class="deal-img-wrap">${imgEl(d.img,d.icon,'deal-img')}</div>
      <div class="deal-body">
        <div class="deal-name">${d.icon} ${d.name}</div>
        <div class="deal-desc">${d.desc}</div>
        ${d.price?`<div class="deal-price">₹${d.price} <s>₹${d.orig}</s></div>`:''}
        <div class="deal-saving">✅ ${d.saving}</div>
        ${d.price?`<button class="add-btn" onclick="addToCart('${d.name}',${d.price},'${d.icon}')">+ Add Combo</button>`:''}
      </div>
    </div>`).join('');
}

// ═══════════════════════════════
//  REVIEWS
// ═══════════════════════════════
function renderReviews(){
  document.getElementById('reviewsGrid').innerHTML=reviews.map(r=>`
    <div class="review-card">
      <div class="review-img-wrap">
        <img class="review-img" src="${IMG[r.img]}" alt="café" loading="lazy"
             onerror="this.style.background='#4a2000';this.style.height='155px'"/>
        <div class="review-img-overlay"></div>
      </div>
      <div class="review-body">
        <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
        <div class="review-text">"${r.text}"</div>
        <div class="review-author">
          <div class="review-avatar">${r.avatar}</div>
          <div><div class="review-name">${r.name}</div><div class="review-date">${r.date}</div></div>
        </div>
      </div>
    </div>`).join('');
}

// ═══════════════════════════════
//  CART
// ═══════════════════════════════
function addToCart(name,price,emoji='☕'){
  const e=cart.find(i=>i.name===name);
  if(e)e.qty++;else cart.push({name,price,emoji,qty:1});
  updateCartUI();showToast(`${emoji} ${name} added!`);
}
function removeFromCart(name){cart=cart.filter(i=>i.name!==name);updateCartUI();}
function changeQty(name,delta){
  const item=cart.find(i=>i.name===name);if(!item)return;
  item.qty+=delta;if(item.qty<=0)removeFromCart(name);else updateCartUI();
}
function getSubtotal(){return cart.reduce((s,i)=>s+i.price*i.qty,0);}
function getDiscount(sub){return sub>=800?Math.round(sub*.1):0;}
function updateCartUI(){
  const count=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cart-count').textContent=count;
  const sub=getSubtotal(),disc=getDiscount(sub),total=sub-disc;
  document.getElementById('cartTotal').textContent=`₹${sub}`;
  const dr=document.getElementById('discountRow');
  if(disc>0){dr.style.display='flex';document.getElementById('discountAmt').textContent=`-₹${disc}`;}
  else dr.style.display='none';
  document.getElementById('cartFinalTotal').textContent=`₹${total}`;
  const bn=document.getElementById('dealBanner');
  if(sub>=1000){bn.style.display='block';bn.textContent='🛵 You qualify for FREE delivery!';}
  else if(sub>=800){bn.style.display='block';bn.textContent=`🎉 10% discount applied — saved ₹${disc}!`;}
  else if(sub>=600){bn.style.display='block';bn.textContent=`💡 Add ₹${800-sub} more to unlock 10% off!`;}
  else bn.style.display='none';
  const el=document.getElementById('cartItems');
  if(!cart.length){el.innerHTML='<div class="cart-empty">Your cart is empty ☕<br/>Browse the menu to start!</div>';return;}
  el.innerHTML=cart.map(item=>`
    <div class="cart-item">
      <div class="ci-name">${item.emoji} ${item.name}</div>
      <div class="ci-qty">
        <button onclick="changeQty('${item.name.replace(/'/g,"\\'")}', -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${item.name.replace(/'/g,"\\'")}', 1)">+</button>
      </div>
      <div class="ci-price">₹${item.price*item.qty}</div>
      <button class="remove-item" onclick="removeFromCart('${item.name.replace(/'/g,"\\'")}')">🗑</button>
    </div>`).join('');
}
function openCart(){document.getElementById('cartDrawer').classList.add('open');document.getElementById('cartOverlay').classList.add('open');}
function closeCart(){document.getElementById('cartDrawer').classList.remove('open');document.getElementById('cartOverlay').classList.remove('open');}
function placeOrder(){
  if(!cart.length){showToast('Add items to your cart first!');return;}
  const sub=getSubtotal(),disc=getDiscount(sub),total=sub-disc;
  orderHistory.unshift({items:[...cart],total,date:new Date().toLocaleString('en-IN',{dateStyle:'medium',timeStyle:'short'})});
  renderHistory();
  document.getElementById('modalMsg').textContent=disc>0?`Total ₹${total} (₹${disc} discount applied). Your order is being prepared!`:`Total ₹${total}. Your order is being prepared — thank you!`;
  document.getElementById('orderModal').classList.add('open');
  cart=[];updateCartUI();closeCart();
}

// ═══════════════════════════════
//  HISTORY
// ═══════════════════════════════
function renderHistory(){
  const el=document.getElementById('historyList');
  if(!orderHistory.length){el.innerHTML='<p class="no-history">No orders yet. Start by browsing the menu! ☕</p>';return;}
  el.innerHTML=orderHistory.map((o,i)=>`
    <div class="history-item">
      <div>
        <div class="h-order-info">Order #${orderHistory.length-i} — ${o.items.map(x=>x.name).join(', ')}</div>
        <div class="h-order-date">${o.date}</div>
      </div>
      <div style="display:flex;align-items:center;gap:1rem">
        <div class="h-order-total">₹${o.total}</div>
        <div class="h-status done">Confirmed ✓</div>
      </div>
    </div>`).join('');
}

// ═══════════════════════════════
//  RESERVATION
// ═══════════════════════════════
function makeReservation(){
  const n=document.getElementById('resName').value.trim();
  const p=document.getElementById('resPhone').value.trim();
  const d=document.getElementById('resDate').value;
  const t=document.getElementById('resTime').value;
  const tb=document.getElementById('resTable').value;
  if(!n||!p||!d||!t||!tb){showToast('⚠️ Please fill all fields!');return;}
  document.getElementById('modalMsg').textContent=`Table reserved for ${n} on ${new Date(d).toDateString()} at ${t} (${tb}). We'll confirm via SMS!`;
  document.getElementById('orderModal').classList.add('open');
  ['resName','resPhone','resDate','resTime','resTable'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
}

// ═══════════════════════════════
//  TOAST + NAV
// ═══════════════════════════════
let toastTimer;
function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2600);
}
function toggleMobile(){document.getElementById('navLinks').classList.toggle('mobile-open');}

// ═══════════════════════════════
//  INIT
// ═══════════════════════════════
document.getElementById('resDate').min=new Date().toISOString().split('T')[0];
renderFeatured();renderTabs();renderMenuGrid();renderBuilder();renderDeals();renderReviews();renderHistory();updateCartUI();