// ▼▼ 情報タブの内容（ここを書き換えるだけで表示が変わります）▼▼
const INFO={
 title:'和語・漢語・外来語クイズ',
 author:'（作成者名を入力）',
 ver:'1.2.0',
 date:'2026/11/11',
 source:'国語Bのプリント',
 contact:'',
 hist:[
  ['1.2.0','2026/11/11',['「釜飯」「瀬戸」を漢語から和語へ移動','クイズに、間違えた問題の履歴機能を追加','クイズ終了後に「間違えた問題だけもう一度」を追加','「情報」画面を追加']],
  ['1.1.0','2026/11',['フラッシュカードに「両方」モードと自動で次の語へ進む機能を追加','クイズに出題数の指定を追加','フラッシュカードとクイズを選択画面から別画面へ進む形に変更','検索エンジンに載せない設定（noindex）を追加']],
  ['1.0.0','2026/11',['初版公開（一覧・フラッシュカード・クイズ・問題作成）']]
 ],
 notes:[
  '語・読み・分類は、すべて「国語Bのプリント」に準拠しています。',
  '個人の学習用に作った非公式のサイトです。誤りがあった場合は、プリントの内容を優先してください。',
  '間違えた問題の履歴は、お使いのブラウザの中にだけ保存されます。外部には送信されません。ブラウザのデータを消すと、履歴も消えます。'
 ]
};
// ▲▲ ここまで ▲▲

const D={
漢語:`洗濯 せんたく
穏便 おんびん
音便 おんびん
鶏舎 けいしゃ
開墾 かいこん
監査 かんさ
監督 かんとく
家督 かとく
皇帝 こうてい
行程 こうてい
傲慢 ごうまん
捜査 そうさ
姓名 せいめい
恐怖 きょうふ
禁忌 きんき
腫瘍 しゅよう
潰瘍 かいよう
葬式 そうしき
応酬 おうしゅう
却下 きゃっか
学閥 がくばつ
賠償 ばいしょう
管轄 かんかつ
更迭 こうてつ
勲功 くんこう
幽霊 ゆうれい
胎児 たいじ
酌量 しゃくりょう
沙汰 さた
巡回 じゅんかい
清濁 せいだく
港湾 こうわん
呉服 ごふく
凶悪 きょうあく
銃口 じゅうこう
壮観 そうかん
惨劇 さんげき
欧州 おうしゅう
内紛 ないふん
整頓 せいとん
獣医 じゅうい
頒布 はんぷ
病棟 びょうとう
海峡 かいきょう
錦秋 きんしゅう
純粋 じゅんすい`,
和語:`川岸 かわぎし
海辺 うみべ
海鳴 うみなり
山道 やまみち
谷川 たにがわ
木霊 こだま
木陰 こかげ
雨音 あまおと
霧雨 きりさめ
夕立 ゆうだち
夕方 ゆうがた
朝方 あさがた
昼間 ひるま
目頭 めがしら
眉毛 まゆげ
口元 くちもと
耳朶 みみたぶ
鼻汁 はなじる
手袋 てぶくろ
目脂 めやに
腹巻 はらまき
腕力 うでぢから
指先 ゆびさき
爪先 つまさき
声色 こわいろ
膝頭 ひざがしら
母親 ははおや
父親 ちちおや
赤子 あかご
喉元 のどもと
舌先 したさき
足癖 あしくせ
毛玉 けだま
顔色 かおいろ
足音 あしおと
水面 みなも
海鳥 うみどり
足袋 たび
声音 こわね
川辺 かわべ
谷間 たにま
雨雲 あまぐも
雲間 くもま
間合 まあい
朝顔 あさがお
毛色 けいろ
母君 ははぎみ
父上 ちちうえ
目元 めもと
足技 あしわざ
産声 うぶごえ
釜飯 かまめし
瀬戸 せと`,
外来語:`扁桃 アーモンド
極光 オーロラ
風琴 オルガン
瓦斯 ガス
型録 カタログ
合羽 カッパ
骨牌 カルタ
珈琲 コーヒー
秋桜 コスモス
護謨 ゴム
円規 コンパス
曹達 ソーダ
庭球 テニス
天麩羅 テンプラ
螺子 ネジ
籠球 バスケットボール
排球 バレーボール
麺麭 パン
麦酒 ビール
蹴球 フットボール
燐寸 マッチ
燧火 マッチ
賞牌 メダル
鍍金 メッキ
菜単 メニュー
豚油 ラード
喇叭 ラッパ
角灯 ランタン
洋灯 ランプ
檸檬 レモン
浪漫 ロマン
酒精 アルコール
火酒 ウイスキー
煙管 キセル
甘藍 キャベツ
凝乳 クリーム
酒杯 コップ
木栓 コルク
襯衣 シャツ
石鹸 シャボン
肉汁 スープ
粗描 スケッチ
洋袴 ズボン
乾酪 チーズ
卓子 テーブル
素描 デッサン
蕃茄 トマト
隧道 トンネル
仮漆 ニス`};
const T=Object.keys(D),W=[];
T.forEach(t=>D[t].split('\n').forEach((l,i)=>{const [k,r]=l.split(' ');W.push({t,n:i+1,k,r})}));
const $=id=>document.getElementById(id);
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const hira=s=>s.replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-96)).replace(/\s/g,'');
const cnt=t=>D[t].split('\n').length;

// nav
const names=['一覧','フラッシュカード','クイズ','問題作成','情報'];
$('nav').innerHTML=names.map((n,i)=>`<button data-i="${i}">${n}</button>`).join('');
let cur=0;
$('nav').onclick=e=>{const i=e.target.dataset.i;if(i==null)return;show(+i)};
function show(i){cur=i;fcClear();
 document.querySelectorAll('nav button').forEach((b,j)=>b.classList.toggle('on',i==j));
 for(let j=0;j<5;j++)$('s'+j).hidden=j!=i;
 $('range').hidden=(i==0||i==4);
 if(i==0)renderList();
 if(i==1){$('f-rg').appendChild($('range'));fcBack()}
 if(i==2){$('q-rg').appendChild($('range'));qzBack()}
 if(i==3){$('p-rg').appendChild($('range'));renderSheet()}
 if(i==4)renderInfo()}

// range panel（選択画面ごとに表示場所を移動して使い回す）
$('range').innerHTML='<b>出題範囲</b>'+T.map((t,i)=>`<div class="row"><label><input type="checkbox" id="c${i}" checked> ${t}</label>
 <input type="number" id="f${i}" min="1" max="${cnt(t)}" value="1"> 〜 <input type="number" id="e${i}" min="1" max="${cnt(t)}" value="${cnt(t)}"> 番（全${cnt(t)}語）</div>`).join('')+
 `<div class="row">並び順 <select id="ord"><option value="o">元の順番</option><option value="r">ランダム</option></select></div>`;
$('range').onchange=()=>{if(cur==3)renderSheet()};
function pool(){let a=[];T.forEach((t,i)=>{if($('c'+i).checked){const f=+$('f'+i).value||1,e=+$('e'+i).value||999;a=a.concat(W.filter(w=>w.t==t&&w.n>=f&&w.n<=e))}});
 return $('ord').value=='r'?shuf(a):a}

// list
$('s0').innerHTML=`<div class="row"><select id="lt"><option value="">すべて</option>${T.map(t=>`<option>${t}</option>`).join('')}</select><input type="text" id="lq" placeholder="検索（漢字・読み）"></div><div class="tbl" id="lb"></div>`;
$('s0').oninput=renderList;
function renderList(){const t=$('lt').value,q=$('lq').value.trim();
 const a=W.filter(w=>(!t||w.t==t)&&(!q||w.k.includes(q)||hira(w.r).includes(hira(q))));
 $('lb').innerHTML=`<table><tr><th>種類</th><th>番号</th><th>語</th><th>読み</th></tr>${a.map(w=>`<tr><td>${w.t}</td><td>${w.n}</td><td>${w.k}</td><td>${w.r}</td></tr>`).join('')}</table>`}

// flashcard：選択画面 → 学習画面
let fc={a:[],i:0,tm:null,tn:null};
const fcClear=()=>{clearTimeout(fc.tm);clearTimeout(fc.tn)};
$('s1').innerHTML=`<div id="f-set">
 <div class="box"><b>フラッシュカード設定</b><div class="row">モード <select id="fm"><option value="t">語の種類</option><option value="r">読み</option><option value="b">語の種類・読み（両方）</option></select>
 答え表示 <select id="fs"><option value="0">タップ</option><option value="2">2秒後</option><option value="4">4秒後</option><option value="6">6秒後</option></select>
 次の語へ <select id="fv"><option value="0">手動（ボタン）</option><option value="2">答え表示の2秒後</option><option value="3">答え表示の3秒後</option><option value="5">答え表示の5秒後</option><option value="8">答え表示の8秒後</option><option value="10">答え表示の10秒後</option></select></div></div>
 <div id="f-rg"></div><div class="fb ng" id="f-msg"></div><button class="pri go" id="f-go">スタート</button></div>
 <div id="f-play" hidden><div class="row"><button id="f-back">← 選択に戻る</button></div>
 <div class="box" id="fcard" style="cursor:pointer"><div class="c"><span class="tag" id="fno"></span></div><div class="big" id="fk"></div><div class="ans" id="fa"></div><div class="c" style="font-size:.8rem;opacity:.6" id="fh"></div></div>
 <div class="row" style="justify-content:center"><button id="fp">← 前</button><button id="fn" class="pri">次 →</button></div></div>`;
$('f-go').onclick=()=>{const a=pool();if(!a.length){$('f-msg').textContent='範囲に語がありません。設定を確認してください。';return}
 $('f-msg').textContent='';fc.a=a;fc.i=0;$('f-set').hidden=true;$('f-play').hidden=false;fcShow()};
function fcBack(){fcClear();$('f-set').hidden=false;$('f-play').hidden=true}
$('f-back').onclick=fcBack;
function fcShow(){fcClear();const w=fc.a[fc.i];
 $('fno').textContent=`${fc.i+1} / ${fc.a.length}`;$('fk').textContent=w.k;$('fa').textContent='';
 const s=+$('fs').value;const v=+$('fv').value;$('fh').textContent=(s?`${s}秒後に答えが出ます`:'タップで答えを表示')+(v?`／答え表示の${v}秒後に次の語へ`:'');
 if(s)fc.tm=setTimeout(fcReveal,s*1000)}
function fcReveal(){const w=fc.a[fc.i];if(!w)return;const m=$('fm').value;$('fa').innerHTML=m=='t'?w.t:m=='r'?w.r:`${w.t}<br>${w.r}`;
 clearTimeout(fc.tn);const v=+$('fv').value;if(v)fc.tn=setTimeout(fcNext,v*1000)}
$('fcard').onclick=fcReveal;
function fcNext(){if(fc.i<fc.a.length-1){fc.i++}else{fc.a=pool();fc.i=0}fcShow()}
$('fn').onclick=fcNext;
$('fp').onclick=()=>{if(fc.i>0)fc.i--;fcShow()};

// quiz：選択画面 → 出題画面（履歴つき）
const SK='gokushu_v1';
function ld(){try{return JSON.parse(localStorage.getItem(SK))||{}}catch(e){return {}}}
function sv(o){try{localStorage.setItem(SK,JSON.stringify(o))}catch(e){}}
const wid=w=>w.k+'|'+w.r;
const stamp=()=>{const d=new Date(),p=n=>String(n).padStart(2,'0');return `${d.getMonth()+1}/${d.getDate()} ${p(d.getHours())}:${p(d.getMinutes())}`};
function addMiss(w){const o=ld();o.miss=o.miss||{};const m=o.miss[wid(w)]||{n:0};m.n++;m.last=stamp();o.miss[wid(w)]=m;sv(o)}
function delMiss(w){const o=ld();if(o.miss&&o.miss[wid(w)]){delete o.miss[wid(w)];sv(o)}}
function logRun(){const o=ld();o.log=o.log||[];o.log.unshift({d:stamp(),k:qz.kind,m:qz.mode,n:qz.a.length,s:qz.s});o.log=o.log.slice(0,20);sv(o)}
function histWords(){const m=ld().miss||{};return W.filter(w=>m[wid(w)])}
const KIND={normal:'通常',retry:'間違いのやり直し',hist:'履歴から'},MODE={t:'語の種類',r:'読み'};

let qz={a:[],src:[],i:0,s:0,done:false,wrong:[],kind:'normal',mode:'t',logged:false};
$('s2').innerHTML=`<div id="q-set">
 <div class="box"><b>クイズ設定</b><div class="row">モード <select id="qm"><option value="t">語の種類（三択）</option><option value="r">読み（入力）</option></select>
 出題数 <input type="number" id="qc" min="1" placeholder="全問"> 問（空欄で範囲内すべて）</div></div>
 <div id="q-rg"></div><div class="fb ng" id="q-msg"></div><button class="pri go" id="q-go">スタート</button>
 <button class="go" id="q-hb">間違えた問題の履歴（<span id="hn">0</span>問）</button></div>
 <div id="q-hist" hidden><div class="row"><button id="h-back">← 選択に戻る</button></div>
 <div class="box"><b>間違えた問題の履歴</b><div class="tbl" id="h-list"></div>
 <div class="row"><button class="pri" id="h-go">履歴の問題を出題</button><button id="h-clr">履歴を消去</button></div>
 <p style="font-size:.8rem;opacity:.7;margin:4px 0">履歴の問題で正解すると、その語は履歴から外れます。履歴はこのブラウザにだけ保存されます。</p></div>
 <div class="box"><b>最近の成績（最新20件）</b><div class="tbl" id="h-log"></div></div></div>
 <div id="q-play" hidden><div class="row"><button id="q-back">← 選択に戻る</button><span id="qsc"></span></div>
 <div class="box"><div class="c"><span class="tag" id="qno"></span></div><div class="big" id="qk"></div><div id="qin"></div><div class="fb" id="qfb"></div>
 <div class="row" style="justify-content:center"><button id="qn" class="pri" hidden>次へ</button><button id="qr" hidden></button></div></div></div>`;
function startQuiz(list,kind){qz={a:list,src:list,i:0,s:0,done:false,wrong:[],kind,mode:$('qm').value,logged:false};
 $('q-set').hidden=true;$('q-hist').hidden=true;$('q-play').hidden=false;qzShow()}
$('q-go').onclick=()=>{const a=qzPool();if(!a.length){$('q-msg').textContent='範囲に語がありません。設定を確認してください。';return}
 $('q-msg').textContent='';startQuiz(a,'normal')};
function qzPool(){const a=pool(),n=Math.floor(+$('qc').value);return n>0?a.slice(0,n):a}
function qzBack(){$('q-set').hidden=false;$('q-play').hidden=true;$('q-hist').hidden=true;$('hn').textContent=histWords().length}
$('q-back').onclick=qzBack;$('h-back').onclick=qzBack;
$('q-hb').onclick=showHist;
function showHist(){const o=ld(),m=o.miss||{},L=o.log||[];
 const a=histWords().sort((x,y)=>m[wid(y)].n-m[wid(x)].n);
 $('h-list').innerHTML=a.length?`<table><tr><th>語</th><th>読み</th><th>種類</th><th>間違い</th><th>最終</th></tr>${a.map(w=>`<tr><td>${w.k}</td><td>${w.r}</td><td>${w.t}</td><td>${m[wid(w)].n}回</td><td>${m[wid(w)].last}</td></tr>`).join('')}</table>`:'<p class="c">履歴はまだありません。</p>';
 $('h-log').innerHTML=L.length?`<table><tr><th>日時</th><th>種類</th><th>モード</th><th>成績</th></tr>${L.map(x=>`<tr><td>${x.d}</td><td>${KIND[x.k]||''}</td><td>${MODE[x.m]||''}</td><td>${x.s} / ${x.n}</td></tr>`).join('')}</table>`:'<p class="c">成績はまだありません。</p>';
 $('h-go').hidden=!a.length;$('h-clr').hidden=!a.length&&!L.length;
 $('q-set').hidden=true;$('q-hist').hidden=false}
$('h-go').onclick=()=>startQuiz(shuf(histWords()),'hist');
$('h-clr').onclick=()=>{if(confirm('間違えた問題の履歴と成績をすべて消去します。よろしいですか？')){try{localStorage.removeItem(SK)}catch(e){}showHist()}};
function qzShow(){const w=qz.a[qz.i];$('qn').hidden=true;$('qr').hidden=true;$('qfb').textContent='';qz.done=false;
 if(!w){if(!qz.logged){qz.logged=true;logRun()}
  $('qk').textContent=`終了！ ${qz.s} / ${qz.a.length} 問正解`;$('qin').innerHTML='';$('qno').textContent='';
  $('qfb').textContent=qz.wrong.length?`間違えた問題：${qz.wrong.map(x=>x.k).join('、')}`:'全問正解です！';
  $('qn').hidden=false;$('qn').textContent='もう一度';
  $('qr').hidden=!qz.wrong.length;$('qr').textContent=`間違えた問題だけもう一度（${qz.wrong.length}問）`;return}
 $('qn').textContent='次へ';$('qno').textContent=`${qz.i+1} / ${qz.a.length}`;$('qsc').textContent=`正解 ${qz.s}`;$('qk').textContent=w.k;
 if(qz.mode=='t'){$('qin').innerHTML=`<div class="opts">${T.map(t=>`<button data-a="${t}">${t}</button>`).join('')}</div>`;
  $('qin').onclick=e=>{const a=e.target.dataset.a;if(a)qzJudge(a==w.t,w)};}
 else{$('qin').innerHTML=`<div class="row" style="justify-content:center"><input type="text" id="qi" placeholder="読みを入力" autocomplete="off"><button id="qg">答える</button></div>`;
  $('qin').onclick=null;const go=()=>qzJudge(hira($('qi').value)==hira(w.r),w);
  $('qg').onclick=go;$('qi').onkeydown=e=>{if(e.key=='Enter'&&!e.isComposing)go()};$('qi').focus()}}
function qzJudge(ok,w){if(qz.done)return;qz.done=true;
 if(ok){qz.s++;if(qz.kind!='normal')delMiss(w)}else{qz.wrong.push(w);addMiss(w)}
 $('qfb').innerHTML=ok?`<span class="ok">○ 正解！</span> ${w.t}・${w.r}`:`<span class="ng">× 不正解</span> 答え：${w.t}・${w.r}`;
 $('qsc').textContent=`正解 ${qz.s}`;$('qn').hidden=false}
$('qn').onclick=()=>{if(qz.i>=qz.a.length){startQuiz(qz.kind=='normal'?qzPool():shuf(qz.src),qz.kind)}else{qz.i++;qzShow()}};
$('qr').onclick=()=>startQuiz(shuf(qz.wrong),'retry');

// info
function renderInfo(){const n=T.map(t=>`${t}${cnt(t)}語`).join('・');
 $('s4').innerHTML=`<div class="box"><h2 style="margin:.2rem 0 .5rem">${INFO.title}</h2><table>
 <tr><th>作成者</th><td>${INFO.author}</td></tr><tr><th>バージョン</th><td>${INFO.ver}</td></tr><tr><th>最終更新日</th><td>${INFO.date}</td></tr>
 <tr><th>出典</th><td>${INFO.source}</td></tr><tr><th>収録語数</th><td>${n}（計${W.length}語）</td></tr>${INFO.contact?`<tr><th>連絡先</th><td>${INFO.contact}</td></tr>`:''}</table></div>
 <div class="box"><b>更新履歴</b>${INFO.hist.map(h=>`<p style="margin:.6rem 0 .1rem"><b>v${h[0]}</b>（${h[1]}）</p><ul style="margin:0">${h[2].map(x=>`<li>${x}</li>`).join('')}</ul>`).join('')}</div>
 <div class="box"><b>ご利用にあたって</b><ul style="margin:.3rem 0">${INFO.notes.map(x=>`<li>${x}</li>`).join('')}</ul></div>`}

// sheet
$('s3').innerHTML=`<div id="p-rg"></div><div class="row"><input type="text" id="pt" value="語種・読み 確認テスト" style="flex:1"><button id="pb" class="pri">PDFとして保存／印刷</button></div>
 <p style="font-size:.85rem;opacity:.75;margin:4px 0">印刷画面で送信先を「PDFに保存」にするとダウンロードできます。範囲・並び順は上の設定が反映されます。</p><div class="tbl" id="pv"></div>`;
function sheetHTML(){const a=pool();
 return `<h2 style="margin:0 0 8px">${$('pt').value.replace(/</g,'&lt;')}</h2><div style="margin-bottom:8px">氏名：＿＿＿＿＿＿＿＿＿＿　　${a.length}問</div>
 <table><tr><th>No.</th><th>漢字</th><th>読み（解答欄）</th><th>語の種類（解答欄）</th><th>読み（答え）</th><th>語の種類（答え）</th></tr>
 ${a.map((w,i)=>`<tr><td>${i+1}</td><td style="font-size:1.2em">${w.k}</td><td style="min-width:110px">&nbsp;</td><td style="min-width:90px">&nbsp;</td><td>${w.r}</td><td>${w.t}</td></tr>`).join('')}</table>`}
let sheetCache='';
function renderSheet(){sheetCache=sheetHTML();$('pv').innerHTML=sheetCache}
$('pt').oninput=renderSheet;
$('pb').onclick=()=>{$('pa').innerHTML=sheetCache;window.print()};
show(0);
