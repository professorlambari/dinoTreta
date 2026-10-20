
const IMAGES = {"ank": "imagens/ank.webp", "bra": "imagens/bra.webp", "spi": "imagens/spi.webp", "ste": "imagens/ste.webp", "rex": "imagens/rex.webp", "tri": "imagens/tri.webp", "rap": "imagens/rap.webp"};
const DINO_EMOJI = {comp:'🦎',dil:'🦖',par:'🦕',igu:'🦕',all:'🦖',car:'🦖',gal:'🦎',pac:'🦕',apa:'🦕',arg:'🦕'};
function dinoArt(d){
  const emoji=DINO_EMOJI[d.id]||(d.type.includes('PREDADOR')?'🦖':'🦕');
  if(!IMAGES[d.id])return `<span class="dino-emoji" role="img" aria-label="${d.name}">${emoji}</span>`;
  return `<img src="${IMAGES[d.id]}" alt="${d.name}" loading="lazy" onerror="this.outerHTML='<span class=&quot;dino-emoji&quot; role=&quot;img&quot;>${emoji}</span>'">`;
}
const dinos=[
{id:'spi',name:'Espinossauro',type:'PREDADOR AQUÁTICO',desc:'Predador versátil. Sangramento e pressão contínua.',hp:116,atk:19,ini:12,def:7,crit:.15,dodge:0.09,moves:[['Mordida serrilhada','Dano confiável.',1,0],['Garras de rio','Dano leve e sangramento por 2 turnos.',.72,1],['Investida da vela','Golpe pesado que reduz a defesa inimiga.',1.75,3]]},
{id:'rex',name:'Tiranossauro',type:'PREDADOR ALFA',desc:'Dano explosivo, porém menos veloz.',hp:115,atk:23,ini:7,def:6,crit:.17,dodge:0.035,moves:[['Mordida brutal','Dano consistente.',1,0],['Rugido ancestral','Dano moderado e reduz ataque inimigo.',.7,1],['Mandíbulas supremas','Golpe devastador de alto impacto.',1.8,3]]},
{id:'rap',name:'Velocirraptor',type:'CAÇADOR ÁGIL',desc:'Veloz e preciso. Esquiva e ataques críticos.',hp:93,atk:17,ini:20,def:5,crit:.27,dodge:0.32,moves:[['Garra veloz','Ataque rápido.',1,0],['Passo furtivo','Ataca e ganha chance de esquiva.',.85,1],['Ataque em salto','Golpe preciso com crítico ampliado.',1.8,3]]},
{id:'bra',name:'Braquiossauro',type:'COLOSSO HERBÍVORO',desc:'Muita vida e resistência, mas pouco ágil.',hp:145,atk:17,ini:5,def:9,crit:.09,dodge:0.01,moves:[['Pisoteio','Golpe de peso.',1,0],['Postura gigante','Dano leve e recupera vida.',.65,1],['Terremoto','Grande impacto que enfraquece o rival.',1.8,3]]},
{id:'ste',name:'Estegossauro',type:'DEFENSOR ESPINHOSO',desc:'Contra-ataques e espinhos que causam sangramento.',hp:126,atk:17,ini:9,def:10,crit:.12,dodge:0.055,moves:[['Golpe de cauda','Ataque padrão.',1,0],['Guarda espinhosa','Ataca e prepara um contra-ataque.',.65,1],['Cauda de aço','Golpe forte e sangramento.',1.65,3]]},
{id:'ank',name:'Anquilossauro',type:'FORTALEZA VIVA',desc:'Armadura imponente e golpes que quebram defesas.',hp:130,atk:17,ini:6,def:12,crit:.10,dodge:0.025,moves:[['Clava óssea','Ataque padrão.',1,0],['Casco fechado','Dano leve e armadura temporária.',.65,1],['Esmaga-rochas','Golpe que ignora parte da armadura.',1.7,3]]}
,
{"id": "comp", "name": "Compsognato", "type": "MICRO CAÇADOR", "desc": "Minúsculo e quase impossível de acertar; golpes leves.", "hp": 58, "atk": 12, "ini": 27, "def": 2, "crit": 0.19, "dodge": 0.52, "moves": [["Bicada rápida", "Ataque leve e certeiro.", 1, 0], ["Zigue-zague", "Ataca e prepara evasão.", 0.7, 1], ["Enxame ilusório", "Ataque múltiplo de grande precisão.", 1.85, 3]]},
{"id": "dil", "name": "Dilofossauro", "type": "CAÇADOR ASTUTO", "desc": "Velocidade e golpes que enfraquecem o inimigo.", "hp": 86, "atk": 17, "ini": 19, "def": 4, "crit": 0.2, "dodge": 0.26, "moves": [["Mordida rápida", "Ataque comum.", 1, 0], ["Finta venenosa", "Enfraquece o ataque adversário.", 0.8, 1], ["Duplo bote", "Ataque feroz e preciso.", 1.75, 3]]},
{"id": "par", "name": "Parassaurolofo", "type": "HERBÍVORO SONORO", "desc": "Controla o ritmo do combate com seu chamado.", "hp": 105, "atk": 16, "ini": 14, "def": 7, "crit": 0.13, "dodge": 0.13, "moves": [["Chute traseiro", "Golpe comum.", 1, 0], ["Chamado estrondoso", "Reduz o ataque adversário.", 0.75, 1], ["Investida ressonante", "Golpe poderoso e desestabilizador.", 1.7, 3]]},
{"id": "igu", "name": "Iguanodonte", "type": "DEFENSOR VERSÁTIL", "desc": "Resistente, usa os polegares como armas.", "hp": 119, "atk": 17, "ini": 12, "def": 9, "crit": 0.13, "dodge": 0.09, "moves": [["Golpe de polegar", "Ataque padrão.", 1, 0], ["Postura firme", "Fortalece a armadura.", 0.7, 1], ["Estocada óssea", "Ignora parte da defesa.", 1.75, 3]]},
{"id": "all", "name": "Alossauro", "type": "PREDADOR IMPLACÁVEL", "desc": "Caçador equilibrado, focado em sangramento.", "hp": 108, "atk": 19, "ini": 15, "def": 6, "crit": 0.19, "dodge": 0.13, "moves": [["Mordida cortante", "Ataque padrão.", 1, 0], ["Garras afiadas", "Provoca sangramento.", 0.8, 1], ["Emboscada jurássica", "Ataque forte com chance crítica.", 1.75, 3]]},
{"id": "car", "name": "Carnotauro", "type": "PREDADOR VELOZ", "desc": "Explosão de velocidade e investidas.", "hp": 96, "atk": 20, "ini": 20, "def": 4, "crit": 0.18, "dodge": 0.23, "moves": [["Mordida veloz", "Ataque padrão.", 1, 0], ["Arrancada lateral", "Ataca e aumenta evasão.", 0.8, 1], ["Carga dos chifres", "Ataque de alto impacto.", 1.8, 3]]},
{"id": "gal", "name": "Galimimo", "type": "CORREDOR INCANSÁVEL", "desc": "Velocidade extrema e ataques oportunistas.", "hp": 76, "atk": 14, "ini": 25, "def": 3, "crit": 0.19, "dodge": 0.39, "moves": [["Chute ligeiro", "Ataque padrão.", 1, 0], ["Disparada", "Ataca e prepara esquiva.", 0.7, 1], ["Sequência relâmpago", "Ataque veloz de alto dano.", 1.85, 3]]},
{"id": "pac", "name": "Paquicefalossauro", "type": "ARÍETE VIVO", "desc": "Seu crânio poderoso rompe armaduras.", "hp": 110, "atk": 18, "ini": 13, "def": 8, "crit": 0.14, "dodge": 0.12, "moves": [["Cabeçada", "Ataque padrão.", 1, 0], ["Firmeza craniana", "Reforça a armadura.", 0.7, 1], ["Aríete colossal", "Ignora parte da armadura.", 1.8, 3]]},
{"id": "apa", "name": "Apatossauro", "type": "GIGANTE DE CAUDA", "desc": "Muita resistência e golpes de grande alcance.", "hp": 148, "atk": 16, "ini": 4, "def": 9, "crit": 0.08, "dodge": 0.015, "moves": [["Golpe de cauda", "Ataque padrão.", 1, 0], ["Respiro colossal", "Recupera parte da vida.", 0.65, 1], ["Pisoteio sísmico", "Impacto massivo.", 1.8, 3]]},
{"id": "arg", "name": "Argentinossauro", "type": "TITÃ PRÉ-HISTÓRICO", "desc": "Enorme, lento e extremamente resistente.", "hp": 158, "atk": 15, "ini": 3, "def": 10, "crit": 0.07, "dodge": 0.005, "moves": [["Cauda titânica", "Ataque padrão.", 1, 0], ["Muralha viva", "Fortalece a armadura.", 0.65, 1], ["Tremor continental", "Golpe poderoso.", 1.75, 3]]}];

let mode='pve',teamSize=3,picks=[[],[]],pickStep=0,units=[],queue=[],queueIndex=0,round=1,busy=false,finished=false,logs=[],pendingMove=null,aiTimer=null;
const $=id=>document.getElementById(id);
const alive=team=>units.filter(u=>u.owner===team&&u.hpNow>0);
const current=()=>queue[queueIndex];
function setTeamSize(value){teamSize=Number(value);$('sizeValue').textContent=teamSize+' × '+teamSize;picks=[[],[]];pickStep=0;drawRoster()}
function setMode(value){mode=value;picks=[[],[]];pickStep=0;$('pve').classList.toggle('active',mode==='pve');$('pvp').classList.toggle('active',mode==='pvp');drawRoster()}
function drawRoster(){
 const owner=mode==='pvp'?pickStep:0;
 $('pickTitle').textContent=mode==='pvp'?'0'+(owner+1)+' / Monte a equipe '+(owner+1):'01 / Monte sua equipe';
 $('pickHint').textContent='Selecione '+teamSize+' dinossauro(s) · '+picks[owner].length+'/'+teamSize+' escolhidos';
 $('roster').innerHTML=dinos.map((d,i)=>`<button class="dino ${picks[owner].includes(i)?'selected':''}" onclick="pick(${i})"><div class="art">${dinoArt(d)}</div><div class="pill">${String(i+1).padStart(2,'0')} · ${d.type}</div><h3>${d.name}</h3><p>${d.desc}</p><div class="stats">${[['♥',d.hp,'VIDA'],['⚔',d.atk,'ATAQUE'],['↗',d.ini,'INICIATIVA'],['⬡',d.def,'ARMADURA'],['↝',Math.round((d.dodge||0)*100)+'%','ESQUIVA']].map(x=>`<div class="stat"><b>${x[0]} ${x[1]}</b><span>${x[2]}</span></div>`).join('')}</div></button>`).join('');
 $('selectionText').textContent=mode==='pve'?`SEU TIME: ${picks[0].length}/${teamSize} · IA ESCOLHE O ADVERSÁRIO`: `EQUIPE 1: ${picks[0].length}/${teamSize} · EQUIPE 2: ${picks[1].length}/${teamSize}`;
 $('start').disabled=!(picks[0].length===teamSize&&(mode==='pve'||picks[1].length===teamSize));
}
function pick(i){
 const owner=mode==='pvp'?pickStep:0,team=picks[owner];
 if(team.includes(i))team.splice(team.indexOf(i),1);
 else if(team.length<teamSize)team.push(i);
 if(mode==='pvp'&&owner===0&&picks[0].length===teamSize)pickStep=1;
 drawRoster();
}
function startBattle(){
 if(picks[0].length!==teamSize||(mode==='pvp'&&picks[1].length!==teamSize))return;
 const enemy=mode==='pve'?dinos.map((_,i)=>i).filter(i=>!picks[0].includes(i)).sort(()=>Math.random()-.5).slice(0,teamSize):picks[1];
 units=[...picks[0].map((i,n)=>makeUnit(i,0,n)),...enemy.map((i,n)=>makeUnit(i,1,n))];
 round=1;finished=false;busy=false;pendingMove=null;logs=[];queueIndex=0;
 $('select').classList.add('hide');$('arena').style.display='block';$('victory').classList.add('hide');
 log('⚔ A batalha '+teamSize+' × '+teamSize+' começou!');newRound();
}
function makeUnit(i,owner,slot){return {...dinos[i],uid:owner+'-'+slot,owner,hpNow:dinos[i].hp,cd:[0,0,0],bleed:0,weaken:0,armor:0,dodgeBuff:0,counter:0,guard:0,shield:0,acted:false}}
function newRound(){
 if(finished)return;
 queue=units.filter(u=>u.hpNow>0).sort((a,b)=>b.ini-a.ini||a.owner-b.owner||a.slot-b.slot);
 queueIndex=0;
 log('↗ Rodada '+round+' · ordem definida por iniciativa.');
 beginTurn();
}
function beginTurn(){
 if(finished)return;
 while(queueIndex<queue.length&&queue[queueIndex].hpNow<=0)queueIndex++;
 if(queueIndex>=queue.length){round++;newRound();return}
 const u=current();
 // Each ability's cooldown advances on this creature's own turn.
 u.cd=u.cd.map(v=>Math.max(0,v-1));
 if(u.bleed>0){u.bleed--;u.hpNow=Math.max(0,u.hpNow-5);log('🩸 '+u.name+' sofre 5 de sangramento.')}
 if(u.weaken>0)u.weaken--;
 if(checkWinner())return;
 if(u.hpNow<=0){queueIndex++;beginTurn();return}
 busy=false;pendingMove=null;render();
 if(mode==='pve'&&u.owner===1){busy=true;render();aiTimer=setTimeout(ai,700)}
}
function log(t){logs.unshift(t);logs=logs.slice(0,45);$('log').innerHTML=logs.map(x=>`<div>${x}</div>`).join('')}
function effects(u){return [u.bleed?'🩸 '+u.bleed:'',u.weaken?'↓ Ataque':'',u.armor?'⬡ Defesa':'',u.dodgeBuff?'↝ Esquiva':'',u.counter?'↩ Retaliação':'',u.shield?'🛡 Protegido':''].filter(Boolean).join(' · ')||'Sem efeitos'}
function render(){
 $('round').textContent='RODADA '+String(round).padStart(2,'0')+' · '+mode.toUpperCase()+' · '+teamSize+'×'+teamSize;
 for(let owner=0;owner<2;owner++){
  $('alive'+owner).textContent=alive(owner).length+'/'+teamSize+' ativos';
  $('team'+owner).innerHTML=units.filter(u=>u.owner===owner).map(u=>{
   const targetable=pendingMove!==null&&!busy&&!finished&&current().owner!==u.owner&&u.hpNow>0;
   return `<button class="team-unit ${current()===u&&!finished?'current':''} ${u.hpNow<=0?'dead':''} ${targetable?'targetable':''}" ${targetable?'':'disabled'} onclick="chooseTarget('${u.uid}')"><div class="art">${dinoArt(u)}</div>${current()===u&&!finished?'<span class="badge-turn">VEZ</span>':''}<h3>${u.name}</h3><div class="small">⚔ ${u.atk} · ⬡ ${u.def} · ↝ ${Math.round((u.dodge||0)*100)}%</div><div class="hphead"><span>♥ VIDA</span><span>${u.hpNow}/${u.hp}</span></div><div class="bar"><div class="fill" style="width:${u.hpNow/u.hp*100}%;background:${u.hpNow/u.hp<.3?'var(--red)':''}"></div></div><div class="effects">${u.hpNow>0?effects(u):'☠ DERROTADO'}</div></button>`
  }).join('');
 }
 $('initiative').innerHTML=queue.map((u,i)=>`<span class="chip ${i===queueIndex&&!finished?'now':''} ${i<queueIndex||u.hpNow<=0?'done':''}">${u.owner===0?'🟢':'🟠'} ${u.name}</span>`).join('');
 const u=current();
 $('turnLabel').textContent=finished?'COMBATE ENCERRADO':mode==='pve'&&u.owner===1?'TURNO DA IA':'JOGADOR '+(u.owner+1)+' · SUA VEZ';
 $('turnName').textContent=finished?'Fim da batalha':u.name;
 $('targetPrompt').textContent=pendingMove!==null?'🎯 Clique em um dinossauro inimigo destacado para atacar.':'Escolha uma habilidade; depois, escolha o alvo inimigo.';
 $('cancelTarget').classList.toggle('hide',pendingMove===null);
 $('moves').innerHTML=u.moves.map((m,i)=>`<button class="move" ${busy||finished||(mode==='pve'&&u.owner===1)||u.cd[i]>0?'disabled':''} onclick="play(${i})" style="${pendingMove===i?'border-color:var(--lime);background:#405a40':''}"><b>${['⚔','✦','★'][i]} ${m[0]}</b><small>${m[1]}</small><span class="cool">${u.cd[i]>0?'RECARGA: '+u.cd[i]+' TURNO(S)':i===0?'SEM RECARGA':i===1?'RECARGA: 1 TURNO':'RECARGA: 3 TURNOS'}</span></button>`).join('');
}
function play(move){if(busy||finished||current().cd[move]||(mode==='pve'&&current().owner===1))return;pendingMove=move;render()}
function cancelTarget(){pendingMove=null;render()}
function chooseTarget(uid){if(pendingMove===null||busy||finished)return;const target=units.find(u=>u.uid===uid);if(!target||target.owner===current().owner||target.hpNow<=0)return;action(pendingMove,target)}
function ai(){
 if(finished||!current()||current().owner!==1)return;
 const u=current(),targets=alive(0),available=[0,1,2].filter(i=>u.cd[i]===0);
 const move=available.includes(2)&&Math.random()<.75?2:available.includes(1)&&Math.random()<.55?1:0;
 const target=targets.slice().sort((a,b)=>(a.hpNow/a.hp)-(b.hpNow/b.hp))[Math.random()<.65?0:Math.floor(Math.random()*targets.length)];
 action(move,target);
}
function action(move,b){
 const a=current();if(!a||!b||a.hpNow<=0||b.hpNow<=0||a.owner===b.owner||a.cd[move]>0||finished)return;
 busy=true;pendingMove=null;
 const m=a.moves[move],attackMod=a.weaken?.75:1;
 let damage=Math.max(3,Math.round(a.atk*m[2]*attackMod+Math.random()*5-2-b.def*.58-(b.armor?5:0)-(b.shield?4:0)));
 if(['ank','igu','pac'].includes(a.id)&&move===2)damage+=Math.round(b.def*.4);
 const critical=Math.random()<a.crit+(['rap','all','comp'].includes(a.id)&&move===2?.16:0);
 if(critical)damage=Math.round(damage*1.5);
 const dodged=Math.random()<Math.min(.72,(b.dodge||0)+(b.dodgeBuff?.20:0));
 b.dodgeBuff=0;b.armor=0;b.shield=0;
 if(dodged)damage=0;
 b.hpNow=Math.max(0,b.hpNow-damage);
 let text=`<strong>${a.name}</strong> → ${b.name}: ${m[0]} · ${dodged?'↝ ESQUIVOU!':damage+' de dano'+(critical?' 💥 CRÍTICO!':'')}`;
 // Secondary effects require an actual hit, preventing dodged attacks from applying debuffs.
 if(!dodged&&b.hpNow>0){
  if((a.id==='spi'&&move===1)||(a.id==='ste'&&move===2)||(a.id==='all'&&move===1))b.bleed=Math.max(b.bleed,2);
  if((['rex','dil','par'].includes(a.id)&&move===1)||(a.id==='bra'&&move===2))b.weaken=Math.max(b.weaken,2);
 }
 if(['rap','comp','car','gal'].includes(a.id)&&move===1)a.dodgeBuff=1;
 if(['bra','apa'].includes(a.id)&&move===1){const heal=Math.min(12,a.hp-a.hpNow);a.hpNow+=heal;text+=' · ♥ +'+heal}
 if(a.id==='ste'&&move===1)a.counter=1;
 if(['ank','igu','pac','arg'].includes(a.id)&&move===1)a.armor=1;
 if(!dodged&&b.counter&&damage>0){let reflect=Math.min(7,a.hpNow);a.hpNow-=reflect;text+=' · ↩ '+reflect+' de contra-ataque';b.counter=0}
 // Team-oriented defensive role: a defensive alternate grants one ally a light shield.
 if(['ank','igu','arg','pac'].includes(a.id)&&move===1&&teamSize>1){
  const ally=alive(a.owner).filter(x=>x!==a).sort((x,y)=>x.hpNow/x.hp-y.hpNow/y.hp)[0];
  if(ally){ally.shield=1;text+=' · 🛡 '+ally.name+' protegido'}
 }
 if(move>0)a.cd[move]=move===1?2:4;
 log(text);render();
 const tile=[...document.querySelectorAll('.team-unit')].find(el=>el.querySelector('h3')?.textContent===b.name&&el.closest('#team'+b.owner));
 if(tile){tile.classList.remove('impact');void tile.offsetWidth;tile.classList.add('impact')}
 aiTimer=setTimeout(()=>{if(checkWinner())return;queueIndex++;beginTurn()},640);
}
function checkWinner(){
 const a=alive(0).length,b=alive(1).length;
 if(a&&b)return false;
 finished=true;busy=false;pendingMove=null;
 const winner=a?0:b?1:-1;
 $('victory').classList.remove('hide');
 $('victory').innerHTML=`<div class="eyebrow">🏆 FIM DA BATALHA</div><h2>${winner<0?'EMPATE!':'EQUIPE '+(winner+1)+' VENCEU!'}</h2><p>${winner<0?'Ambas as equipes caíram.':mode==='pve'?(winner===0?'Você conquistou a arena!':'A IA venceu. Tente outra estratégia!'):'Jogador '+(winner+1)+' conquistou a vitória!'}</p><button class="btn primary" onclick="back()">JOGAR NOVAMENTE ↗</button>`;
 log('🏆 '+(winner<0?'Empate!':'Equipe '+(winner+1)+' venceu!'));render();return true;
}
function back(){
 if(aiTimer)clearTimeout(aiTimer);
 $('arena').style.display='none';$('select').classList.remove('hide');$('victory').classList.add('hide');
 busy=false;finished=true;pendingMove=null;picks=[[],[]];pickStep=0;drawRoster();
}
drawRoster();
