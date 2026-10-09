/* Nova Terra i18n: RU (original) / EN / KK. Add before </body>: <script src="i18n.js"></script>
   Dictionary format: 'русский текст': ['English', 'Қазақша']. Add more lines to translate more. */
(function(){
var K={ru:0,en:1,kk:2},lang='ru';
try{var s=localStorage.getItem('nt_lang');if(K[s]!==undefined)lang=s;}catch(e){}
var D={
'ЭКОНОМИЧЕСКИЙ ПОРТАЛ':['ECONOMIC PORTAL','ЭКОНОМИКАЛЫҚ ПОРТАЛ'],
'Экономика':['Economy','Экономика'],'Валюта':['Currency','Валюта'],'Город':['City','Қала'],
'Промышленность':['Industry','Өнеркәсіп'],'Энергия и оборона':['Energy & defence','Энергия және қорғаныс'],
'Симулятор':['Simulator','Симулятор'],'Проблемы':['Problems','Мәселелер'],'Будущее':['Future','Болашақ'],
'Показатели':['Indicators','Көрсеткіштер'],'Тест':['Quiz','Тест'],
'Официальный экономический портал · Остров Nova Terra':['Official economic portal · Nova Terra Island','Ресми экономикалық портал · Nova Terra аралы'],
'Изолированная экономика острова':['The isolated economy of the island','Оқшауланған арал экономикасы'],
'жителей':['residents','тұрғын'],
'собственная валюта острова':['the island\'s own currency','аралдың өз валютасы'],
'своя энергия':['own energy','өз энергиясы'],
'Nova Terra — изолированный остров, который самостоятельно организует производство, распределение и потребление ресурсов, чтобы минимизировать зависимость от внешнего мира.':['Nova Terra is an isolated island that organizes its own production, distribution and consumption of resources to minimize dependence on the outside world.','Nova Terra — сыртқы әлемге тәуелділікті барынша азайту үшін өндірісті, бөлуді және тұтынуды өзі ұйымдастыратын оқшауланған арал.'],
'Исследовать экономику':['Explore the economy','Экономиканы зерттеу'],
'Посмотреть город':['View the city','Қаланы көру'],
'Экономика острова':['Island economy','Арал экономикасы'],
'Как ресурсы становятся жизнью города':['How resources become the life of the city','Ресурстар қала өміріне қалай айналады'],
'Каждая цепочка показывает, как ресурс острова проходит путь до жителей. Наведите курсор или нажмите на звено, чтобы увидеть его роль в экономике.':['Each chain shows how an island resource travels to the residents. Hover over or tap a link to see its role in the economy.','Әр тізбек аралдың ресурсы тұрғындарға дейін қандай жолмен жететінін көрсетеді. Экономикадағы рөлін көру үшін буынның үстіне меңзерді апарыңыз немесе басыңыз.'],
'Продовольствие':['Food','Азық-түлік'],'Строительство':['Construction','Құрылыс'],'Вода':['Water','Су'],
'Энергия':['Energy','Энергия'],'Топливо':['Fuel','Отын'],
'Наша валюта':['Our currency','Біздің валюта'],
'Собственные деньги острова. Правила Terra Coin защищают цены от резкого роста, а сбережения и зарплаты жителей — от обесценивания.':['The island\'s own money. Terra Coin\'s rules protect prices from sharp rises, and residents\' savings and wages from losing value.','Аралдың өз ақшасы. Terra Coin ережелері бағаны күрт өсуден, ал тұрғындардың жинағы мен жалақысын құнсыздануынан қорғайды.'],
'Знак на монете — буква «T»':['The symbol on the coin is the letter "T"','Монетадағы белгі — «T» әрпі'],
'Обеспечена зерном':['Backed by grain','Дәнмен қамтамасыз етілген'],
'Каждую монету можно обменять на 1 кг зерна из общего запаса острова.':['Each coin can be exchanged for 1 kg of grain from the island\'s common reserve.','Әр монетаны аралдың ортақ қорынан 1 кг дәнге айырбастауға болады.'],
'Независимый Банк острова':['Independent Island Bank','Аралдың тәуелсіз Банкі'],
'Совет не может печатать монеты, чтобы оплачивать свои расходы.':['The Council cannot print coins to pay for its own expenses.','Кеңес өз шығындарын төлеу үшін монета шығара алмайды.'],
'Деньги растут вместе с товарами':['Money grows with goods','Ақша тауармен бірге өседі'],
'Новые монеты выпускаются, только когда остров производит больше.':['New coins are issued only when the island produces more.','Жаңа монеталар арал көбірек өндіргенде ғана шығарылады.'],
'Цель по инфляции в год':['Annual inflation target','Жылдық инфляция мақсаты'],
'Каждый месяц проверяется цена базовой корзины товаров.':['The price of the basic goods basket is checked every month.','Базалық тауар себетінің бағасы ай сайын тексеріледі.'],
'цель':['target','мақсат'],
'Зарплаты растут с ценами':['Wages rise with prices','Жалақы бағамен бірге өседі'],
'Если корзина дорожает, зарплаты повышаются, и покупательная способность сохраняется.':['If the basket gets more expensive, wages go up and purchasing power is preserved.','Себет қымбаттаса, жалақы өседі де, сатып алу қабілеті сақталады.'],
'Вклады и кредиты':['Deposits and loans','Депозиттер мен несиелер'],
'Вклады приносят 3% в год, кредиты на лодки и инструменты стоят 5%. Каждая пятая монета остаётся в хранилище.':['Deposits earn 3% a year; loans for boats and tools cost 5%. Every fifth coin stays in the vault.','Депозит жылына 3% табыс әкеледі, қайық пен құралдарға несие 5% тұрады. Әрбір бесінші монета қоймада қалады.'],
'Terra Coin в жизни города':['Terra Coin in city life','Қала өміріндегі Terra Coin'],
'Выберите операцию':['Choose a transaction','Операцияны таңдаңыз'],
'Nova Terra · экономический портал · учебный проект MYP Economics, Unit 1':['Nova Terra · economic portal · MYP Economics, Unit 1 student project','Nova Terra · экономикалық портал · MYP Economics, Unit 1 оқу жобасы']
};
var META=['Nova Terra — экономический портал изолированного острова: экономика, Terra Coin, город, энергия, промышленность.','Nova Terra — economic portal of an isolated island: economy, Terra Coin, city, energy, industry.','Nova Terra — оқшауланған аралдың экономикалық порталы: экономика, Terra Coin, қала, энергия, өнеркәсіп.'];
function fix(n){
 var o=n._o||n.nodeValue,m=o.match(/^(\s*)([\s\S]*?)(\s*)$/),e=D[m[2]];
 if(!e)return;n._o=o;
 n.nodeValue=lang==='ru'?o:m[1]+e[K[lang]-1]+m[3];
}
function tr(root){
 var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),n;
 while(n=w.nextNode()){var p=n.parentNode.nodeName;if(p!=='SCRIPT'&&p!=='STYLE')fix(n);}
}
var bar=document.createElement('div');bar.className='lang';bar.setAttribute('role','group');bar.setAttribute('aria-label','Language');
['ru','en','kk'].forEach(function(l){var b=document.createElement('button');b.textContent=l.toUpperCase();b.dataset.l=l;bar.appendChild(b);});
var st=document.createElement('style');
st.textContent='.lang{display:flex;gap:4px;margin-left:8px;flex:none}.lang button{font:700 12px/1 var(--f-mono);padding:8px 10px;cursor:pointer;color:var(--stone-ink);background:#B0B0B0;border:2px solid #000;box-shadow:inset 2px 2px 0 #E2E2E2,inset -2px -2px 0 #6A6A6A}.lang button[aria-pressed=true]{background:var(--gold);box-shadow:inset 2px 2px 0 var(--gold-2),inset -2px -2px 0 #A06E14}';
document.head.appendChild(st);
(document.querySelector('.top .wrap')||document.body).appendChild(bar);
function set(l){
 lang=l;try{localStorage.setItem('nt_lang',l);}catch(e){}
 document.documentElement.lang=l;
 var md=document.querySelector('meta[name=description]');if(md)md.content=META[K[l]];
 bar.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l);});
 tr(document.body);
}
bar.addEventListener('click',function(e){var b=e.target.closest('button');if(b)set(b.dataset.l);});
new MutationObserver(function(ms){ms.forEach(function(r){r.addedNodes.forEach(function(a){if(a.nodeType===3)fix(a);else if(a.nodeType===1)tr(a);});});}).observe(document.body,{childList:true,subtree:true});
set(lang);
})();
