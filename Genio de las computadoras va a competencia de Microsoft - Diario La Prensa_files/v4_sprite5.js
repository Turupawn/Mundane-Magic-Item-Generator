(function(c){if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"");};}var a=a||{};a.hash={};a.defineShapes={};a.init=function(){var e=c;a.initRoot();a.initDefs();a.initShapes();a.interval=70;};a.createTag=function(d){return document.createElementNS("http://www.w3.org/2000/svg",d);};a.initRoot=function(){var f=c,e=f.Ft;a.root=a.createTag("svg");a.root.setAttribute("width",(e.xm-e.xi));a.root.setAttribute("height",(e.ym-e.yi));a.root.setAttribute("version","1.2");a.root.setAttribute("xmlns","http://www.w3.org/2000/svg");a.root.setAttribute("viewBox",e.xi+" "+e.yi+" "+f.Fw+" "+f.Fh);a.scene=document.createElement("div");a.scene.style.position="relative";a.scene.style.left="0";a.scene.style.top="0";a.scene.appendChild(a.root);document.body.appendChild(a.scene);};a.initDefs=function(){var e=a.createTag("g");var d=a.createTag("defs");e.appendChild(d);a.root.appendChild(e);a.defs=d;};a.initShapes=function(){var k=c;var g=k.tg;for(var h=0,f=g.length;h<f;h++){var e=g[h];switch(e.tp){case 2:a.processShape(e);break;case 10:a.processFont(e);break;case 11:a.processText(e);break;case 39:a.processSprite(e);break;case 7:a.processButton(e);break;}a.hash[e.id]=e;}};a.processFont=function(f){var e=a.createTag("font");e.setAttribute("id","ft"+f.id);e.setAttribute("horiz-adv-x",1024);var m=a.createTag("font-face");m.setAttribute("font-family","ft"+f.id);m.setAttribute("line-height","1.15");m.setAttribute("units-per-em",f.us);m.setAttribute("font-weight","bold");e.appendChild(m);for(var g=0,d=f.fo.length;g<d;g++){var l=f.fo[g];var h=a.createTag("glyph");h.setAttribute("d",l.da);h.setAttribute("unicode",l.co);if("ad" in l){h.setAttribute("horiz-adv-x",l.ad);}e.appendChild(h);}a.defs.appendChild(e);};a.processText=function(q){var y=a.createTag("g");var t=a.createTag("defs");var v=a.createTag("g");if("rs" in q){for(var u=0;q.rs[u];u++){var d=q.rs[u];if(q.tt=="html"){var p=q.bd;var o=document.createTextNode(d.tx);var l=document.createElement("span");l.style["fontSize"]=d.fs+"px";l.style["color"]=d.c;l.style["fontFamily"]=d.fd;l.appendChild(o);if(u==0){text_p=document.createElement("p");text_div=document.createElement("div");text_div.style["textAlign"]="left";text_body=document.createElement("body");var f=a.createTag("foreignObject");f.setAttribute("x",p.l);f.setAttribute("y",p.t);f.setAttribute("width",p.r-p.l);f.setAttribute("height",p.b-p.t);var e=a.createTag("g");e.setAttribute("transform",q.tf);e.setAttribute("translate",d.translate);e.appendChild(f);f.appendChild(text_body);text_body.appendChild(text_div);text_div.appendChild(text_p);text_p.appendChild(l);v.appendChild(e);var w=l;}else{w.appendChild(l);w=l;}}else{var x=a.createTag("text");if(d.psd===true){var z="";for(var k=0,h=d.tx.length;k<h;k++){z+="*";}d.tx=z;}var o=document.createTextNode(d.tx);x.appendChild(o);if(d.b){x.setAttribute("font-weight","bold");}x.setAttribute("font-size",d.h);if(d.fd.toString().match(/\d/)){x.setAttribute("font-family","ft"+d.fd);}else{x.setAttribute("font-family",d.fd);}x.setAttribute("fill",d.c);x.setAttribute("x",d.x);x.setAttribute("y",d.y);x.setAttribute("fill-rule","nonzero");x.setAttribute("style","white-space:pre");x.setAttribute("transform",q.tf);v.appendChild(x);}}}y.appendChild(t);y.appendChild(v);y.setAttribute("type","text");a.defineShapes[q.id]=y;};a.processSprite=function(f){var h=a.createTag("g");var e=a.createTag("defs");var d=a.createTag("g");h.setAttribute("type","sprite");h.appendChild(e);h.appendChild(d);a.defineShapes[f.id]=h;};a.processButton=function(f){var g=a.createTag("g");var e=a.createTag("defs");var d=a.createTag("g");g.setAttribute("type","button");g.appendChild(e);g.appendChild(d);a.defineShapes[f.id]=g;};a.processShape=(function(){var e=function(j,k){return f(j,k,"linearGradient");};var d=function(j,k){return f(j,k,"radialGradient");};var f=function(x,m,r){if(document.getElementById(m)){return m;}var v=a.createTag(r);for(var t in x){if((typeof x[t]=="object")||(t=="type")){continue;}v.setAttribute(t,x[t]);}var u=x.sp;for(var q=0,p=u.length;q<p;q++){var l=u[q];var w=a.createTag("stop");for(var n in l){w.setAttribute(n,l[n]);}v.appendChild(w);}v.setAttribute("id",m);a.defs.appendChild(v);return m;};var i=function(j,n){if(document.getElementById(n)){return n;}var l=a.createTag("pattern");for(var k in j){if((typeof j[k]=="object")||(k=="type")){continue;}l.setAttribute(k,j[k]);}var m=a.createTag("image");for(var k in j.image){if(k=="xlink:href"){m.setAttributeNS("http://www.w3.org/1999/xlink","href",j.image[k]);continue;}m.setAttribute(k,j.image[k]);}l.appendChild(m);l.setAttribute("id",n);a.defs.appendChild(l);return n;};var g=function(l,j,p,o){var k=j.tp;if(k==1){l.setAttribute("fill",j.c);l.setAttribute("fill-opacity",(typeof j["fill-opacity"]=="undefined")?1:j["fill-opacity"]);}else{var m="f"+p+":"+o;var n="";switch(k){case 2:n=e(j,m);break;case 3:n=d(j,m);break;case 4:case 5:case 6:case 7:n=i(j,m);break;}l.setAttribute("fill","url(#"+n+")");}};var h=function(n,m,q,o){for(var j in m){if(typeof m[j]!="object"){n.setAttribute(j,m[j]);}}if("fi" in m){var k=m.fi.tp;var l="l"+q+":"+o;var p="";switch(k){case 2:p=e(m.fi,l);break;case 3:p=d(m.fi,l);break;case 4:case 5:case 6:case 7:p=i(m.fi,l);break;}n.setAttribute("stroke","url(#"+p+")");}n.setAttribute("fill","none");};return function(s){var v=a.createTag("g");var t=a.createTag("defs");var x=a.createTag("g");v.appendChild(t);v.appendChild(x);var m=s.pt;if(m){for(var u=0,r=m.length;u<r;u++){var n=m[u];var C=a.createTag("path");C.setAttribute("d",n.da);if(typeof n["fi"]!=="undefined"){var w=s.Fs;var B=w[n["fi"]];var y=s.id;var z=n["fi"];if(B){g(C,B,y,z);}}if(typeof n["ln"]!=="undefined"){var q=s.Ls;var o=q[n["ln"]];var y=s.id;var A=n["ln"];h(C,o,y,A);}x.appendChild(C);}}v.setAttribute("type","shape");a.defineShapes[s.id]=v;};})();a.filterElement=function(f,e){var h={"0":"Shadow","1":"Blur","2":"Glow","3":"Bevel"};var d=function(g){return((g==0)?"SourceGraphic":g);};this.defs=f.firstChild;this.target=f.firstChild.nextSibling;this.id="filter_"+f.getAttribute("id");this.base=0;this.filters=e;this.element=a.createTag("filter");this.defs.appendChild(this.element);this.Rgb=function(k){var j=["R","G","B"];var m=a.createTag("feComponentTransfer");m.setAttribute("in",k);this.element.appendChild(m);for(var l=0;l<j.length;l++){var g=a.createTag("feFunc"+j[l]);g.setAttribute("type","linear");g.setAttribute("slope",0);m.appendChild(g);}return this;};this.Rgba=function(o,l,q){var p=["R","G","B"];var j=[l.r,l.g,l.b,l.a];var k=a.createTag("feComponentTransfer");k.setAttribute("result",q);this.element.appendChild(k);for(var m=0;m<p.length;m++){var g=a.createTag("feFunc"+p[m]);g.setAttribute("type","linear");g.setAttribute("intercept",j[m]);g.setAttribute("Ue",0);k.appendChild(g);}var n=a.createTag("feFuncA");n.setAttribute("type","linear");n.setAttribute("slope",o);n.setAttribute("xh",0);k.appendChild(n);return this;};this.Fo=function(i,k,g){var j=a.createTag("feOffset");j.setAttribute("dx",i);j.setAttribute("dy",k);if(g!==false){j.setAttribute("result",g);}this.element.appendChild(j);return this;};this.Fg=function(g,j){var i=a.createTag("feGaussianBlur");i.setAttribute("stdDeviation",[g,j].join(" "));this.element.appendChild(i);return this;};this.Com=function(j,k,i,m,l,g){var n=a.createTag("feComposite");if(k!==false){n.setAttribute("in",k);}if(i!==false){n.setAttribute("in2",i);}n.setAttribute("operator",j);if(m!=0){n.setAttribute("k2",m);}if(l!=0){n.setAttribute("k3",l);}if(g){n.setAttribute("result",g);}this.element.appendChild(n);return this;};this.Shadow=function(i){if(i.op&128){var g=a.createTag("feFlood");g.setAttribute("result",++this.base);this.element.appendChild(g);}if(i.op&128){this.Rgb(d(this.base-1));}else{this.Rgb(d(this.base));}this.Fg(i.bx,i.by).Fo(i.dx,i.dy,false);if(i.op&128){this.Com("arithmetic",false,d(this.base),-1,1);}this.Rgba(i.st,i.c,++this.base);if(!(i.op&32)){if(i.op&128){this.Com("in",d(this.base),d(this.base-2),0,0,++this.base);}else{if(i.op&64){this.Com("out",d(this.base),d(this.base-1),0,0,++this.base);}}}else{if((i.op&64)&&(i.op&128)){this.Com("in",d(this.base),d(this.base-2),0,0,++this.base);}else{if(i.op&64){this.Com("out",d(this.base),d(this.base-1),0,0,++this.base);}else{if(i.op&128){this.Com("atop",d(this.base),d(this.base-2),0,0,++this.base);}else{this.Com("over",d(this.base-1),d(this.base),0,0,++this.base);}}}}};this.Blur=function(g){var i=a.createTag("feGaussianBlur");i.setAttribute("in",d(this.base));i.setAttribute("result",++this.base);i.setAttribute("stdDeviation",[g.bx,g.by].join(" "));this.element.appendChild(i);};this.Glow=function(i){if(i.op&128){var g=a.createTag("feFlood");g.setAttribute("result",++this.base);this.element.appendChild(g);}if(i.op&128){this.Rgb(d(this.base-1));}else{this.Rgb(d(this.base));}this.Fg(i.bx,i.by);if(i.op&128){this.Com("arithmetic",false,d(this.base),-1,1);}if(i.op&128){this.Rgba(i.st,i.c,d(this.base));}else{this.Rgba(i.st,i.c,++this.base);}if(i.op&64&&i.op&128){this.Com("in",d(this.base),d(this.base-1),0,0,++this.base);}else{if(i.op&64){this.Com("out",d(this.base),d(this.base-1),0,0,++this.base);}else{if(i.op&128){this.Com("atop",d(this.base),d(this.base-1),0,0,++this.base);}else{this.Com("over",d(this.base-1),d(this.base),0,0,++this.base);}}}};this.Bevel=function(g){this.Rgb(d(this.base)).Fg(g.bx,g.by).Fo("-"+g.dx,"-"+g.dy,++this.base).Rgb(d(this.base-1)).Fg(g.bx,g.by).Fo(g.dx,g.dy,++this.base).Com("arithmetic",d(this.base-1),d(this.base),1,-1).Rgba(g.st,g.highlightColor,++this.base).Com("arithmetic",d(this.base-1),d(this.base-2),1,-1).Rgba(g.st,g.c,++this.base).Com("arithmetic",d(this.base-1),d(this.base),1,1,++this.base);if(g.op&64){if(!(g.op&16)){if(g.op&128){this.Com("in",this.base,d(this.base-5),0,0,++this.base);}else{this.Com("out",this.base,d(this.base-5),0,0,++this.base);}}}else{if(g.op&128){this.Com("atop",this.base,d(this.base-5),0,0,++this.base);}else{if(g.op&16){this.Com("over",this.base,d(this.base-5),0,0,++this.base);}else{this.Com("over",d(this.base-5),this.base,0,0,++this.base);}}}};this.init=function(){var k=this.filters.rt;var g=this.filters.rc;this.element.setAttribute("width",k.w);this.element.setAttribute("height",k.h);this.element.setAttribute("x",k.x);this.element.setAttribute("y",k.y);this.element.setAttribute("id",this.id);for(var j=0;j<g.length;j++){this.filterDom(g[j]);}this.attachFilter();};this.reset=function(g){while(this.element.firstChild){this.element.removeChild(this.element.firstChild);this.element.firstChild=null;}this.base=0;this.filters=g;this.init();};this.filterDom=function(g){if(h[g.tp]){this[h[g.tp]](g);}};this.attachFilter=function(){if(this.element.childNodes.length>0){this.target.setAttribute("filter","url(#"+this.id+")");}};this.init();};var b=function(f,d){for(var e=0;e<d.length;e++){if(d[e]==f){return true;}}return false;};a.sprite=function(t,o){this.placeObjects=t.Sf;this.sprites={};this.depths={};this.arrayIndex=0;this.frame=0;this.par=o;this.firstFrame=null;this.diff=null;this.pIdArr=[];if(t==c.Mf){this.diff="Mf";}else{this.diff="Tag";}this.frames=[];var n=[];var e=[];var l=[];var w=[];var p=[];var d=[];function h(j,i){return j-i;}function v(B){var j=[],A=[];for(var m in B){j.push(m);}j.sort(h);for(var k=0;k<j.length;k++){A.push(B[j[k]]);}return A;}var q={};for(var u=0,s=this.placeObjects.length;u<s;u++){var f=this.placeObjects[u];if(f.tp==14||f.tp==43){continue;}var y=f.d;if(!f.remove&&y){w.push(y);}if(f.remove){d.push(y);}if(f.remove){l.push(f);}if(f.tp==1){e=v(q);if(l){for(var r=0;r<l.length;r++){if(!b(l[r].d,w)){p.push(l[r]);}else{}}e=e.concat(p);}n=e.slice();n.push(f);if(p.length>0){for(var t=0;t<p.length;t++){for(var z in q){if(p[t]==q[z]||p[t].d==q[z].d){delete q[z];}}}}this.frames.push(n);n=[];l=[];w=[];p=[];d=[];}else{if(y){if(!f.remove){if(y in q){var x=q[y];if(true){var g={};g.id=f.id;g.d=f.d;if(f.ma){g.ma=f.ma;}if(!f.ma&&x.ma){if(!b(f.d,d)){g.ma=x.ma;}}if(f.cD){g.cD=f.cD;}if(!f.cD&&x.cD){if(!b(f.d,d)){g.cD=x.cD;}}if(f.cx){g.cx=f.cx;}if(!f.cx&&x.cx){if(!b(f.d,d)){g.cx=x.cx;}}if(f.fl){g.fl=f.fl;}if(!f.fl&&x.fl){if(!b(f.d,d)){g.fl=x.fl;}}if(f.opacity){g.opacity=f.opacity;}if(!f.opacity&&x.opacity){if(!b(f.d,d)){g.opacity=x.opacity;}}if(f.opacity==0){g.opacity=0;}if(f.rp){g.rp=true;}if(f.tp){g.tp=f.tp;}q[y]=g;}}else{q[y]=f;}}}}}a.sprite.instances.push(this);};a.sprite.instances=[];a.sprite.prototype.showFrame=function(){var g=this.frames[this.frame],d=g[g.length-1],h=null;for(var f=0,e=g.length-1;f<e;f++){h=g[f];this.renderShape(h);this.lastDepth=h.d;}this.lastDepth=null;if("ac" in d){this.handleAction(d["ac"]);}if(!this.pause){this.frame++;}if(this.frame==this.frames.length){this.frame=0;}};a.sprite.prototype.handleAction=function(f){for(var e=0,d=f.length;e<d;e++){this.action(f[e]);}};a.sprite.prototype.action=function(g){var h=g.as,f=0;for(var e=0,d=h.length;e<d;e++){f=h[e].code;switch(f){case 7:this.stop();break;case 129:this.gotoFrame(h[e].frame);break;case 6:this.play();break;}}};a.sprite.prototype.stop=function(){this.pause=true;};a.sprite.prototype.start=function(){this.pause=false;};a.sprite.prototype.gotoFrame=function(d){this.frame=d;};a.sprite.prototype.gotoAndStop=function(d){if(!this.frames[d]){return;}this.frame=d;this.pause=true;};a.sprite.prototype.play=function(){this.pause=false;};a.sprite.prototype.renderShape=function(d){if("nm" in d){this.name=d["nm"];}var e=d,f;if("remove" in e){return this.removeShape(e.d);}if("rp" in e){f=this.replaceShape(e);this.afterRender(f,e);}else{f=this.getShape(e);if(f){this.afterRender(f,e);}}return true;};a.sprite.prototype.replaceShape=function(l){var n=this.par.firstChild.nextSibling;var k=this.createShape(l);var m=l.d;if(this.depths[m]){var f=this.par.getAttribute("id")+":"+m+":"+this.depths[m];var i=document.getElementById(f);if(f==k.id){f=null;i=null;var h=k;k=null;return h;}n.replaceChild(k,i);if(this.sprites[m+":"+this.depths[m]]){this.sprites[m+":"+this.depths[m]]=null;delete this.sprites[m+":"+this.depths[m]];}if(this.buttons){if(this.buttons[m+":"+this.depths[m]]){this.buttons[m+":"+this.depths[m]]=null;delete this.buttons[m+":"+this.depths[m]];}}}else{if(this.lastDepth){var e=this.par.getAttribute("id")+":"+this.lastDepth+":"+this.depths[this.lastDepth];var g=document.getElementById(e);if(g){var o=g.nextSibling;}if(o){n.insertBefore(k,o);}else{n.appendChild(k);}}else{var d=n.firstChild;if(d){n.insertBefore(k,d);}else{n.appendChild(k);}}}this.depths[m]=l.id;return k;};a.sprite.prototype.removeShape=function(h){if(this.depths[h]){var e=this.depths[h];var d=this.par.firstChild.nextSibling;var g=this.par.getAttribute("id")+":"+h+":"+e;var f=document.getElementById(g);d.removeChild(f);if(this.sprites[h+":"+this.depths[h]]){this.sprites[h+":"+this.depths[h]]=null;delete this.sprites[h+":"+this.depths[h]];}if(this.buttons){if(this.buttons[h+":"+this.depths[h]]){this.buttons[h+":"+this.depths[h]]=null;delete this.buttons[h+":"+this.depths[h]];}}delete this.depths[h];}return h;};a.sprite.prototype.getShape=function(f){var d=this.par.getAttribute("id");var g=d+":"+f.d+":"+f.id;var e=document.getElementById(g);return e;};a.sprite.prototype.afterRender=function(d,e){this.mxTransform(d,e);this.cxTransform(d,e);this.changeOpacity(d,e);this.addFilters(d,e);};a.sprite.prototype.mxTransform=function(d,f){var g={"mask":"moveShape","shape":"moveShape","text":"moveText","sprite":"moveSprite","button":"moveButton"};if("ma" in f){if(d.getAttribute("type")){var e=d.getAttribute("type");var h=g[e];this[h](d,f);}}};a.sprite.prototype.moveShape=function(e,h){var l=h["ma"];if(e.nodeName.toLowerCase()=="g"){var d=e.firstChild.nextSibling;d.setAttribute("transform","matrix("+l+")");}else{var k=e.childNodes;for(var g=0,f=k.length;g<f;g++){k[g].setAttribute("transform","matrix("+l+")");}}};a.sprite.prototype.moveText=function(e,h){var f=e.firstChild.nextSibling.childNodes,l=h["ma"];for(var g=0;f[g];g++){var j=f[g].getAttribute("transform");f[g].oriMx=f[g].oriMx||j;var k=f[g].oriMx.match(/matrix\(([^(]+)\)/)[1];var d=a.sprite.concatMatrix(k,l);f[g].setAttribute("transform","matrix("+d+")");}};a.sprite.prototype.moveSprite=function(d,f){var g=f,h=g["ma"],e=g.d+":"+g.id;this.sprites[e]=this.sprites[e]||(new a.sprite(a.hash[g.id],d));this.sprites[e].showFrame();d.firstChild.nextSibling.setAttribute("transform","matrix("+h+")");};a.sprite.prototype.moveButton=function(i,h){var g=h.d;var d=this.depths[h.d];var j=h["ma"];var m=a.hash[h["id"]];if(!this.buttons){this.buttons={};}if(!this.buttons[g+":"+d]){this.buttons[g+":"+d]=new a.sprite.Button(i,m);}else{var e=this.buttons[g+":"+d];var l=e.sprites;for(var f in l){l[f].showFrame();}}this.buttons[g+":"+d].element.setAttribute("transform","matrix("+j+")");};a.bindAsEventListener=function(f,g){var e=Array.prototype.slice;var d=e.call(arguments,2);return function(h){g.apply(f,[h||window.event].concat(d));};};a.sprite.Button=function(e,d){this.pid=e.getAttribute("id");this.element=e.firstChild.nextSibling;this.states={};this.sprites={};this.init(d);this.element.style["cursor"]="pointer";};a.sprite.Button.prototype={init:function(n){var h=n.rc,f,j,d;for(var g=h.length-1;g>=0;g--){f=h[g];d=f.s;j=a.defineShapes[f.id].cloneNode(true);j.setAttribute("transform",f["tf"]);j.setAttribute("sid",f.id);j.setAttribute("id",this.pid.concat(":",f.id,"_",g));if(!this.states[d]){this.states[d]=[];}this.states[d].push([j,f]);}var e=this.element,m=this.states,l=this.sprites;function k(u){var t=null,r=0,p=m[u].length;for(;r<p;r++){t=m[u][r][0].cloneNode(true);t.style["display"]=(u=="up"||u=="hit")?"block":"none";t.setAttribute("state",u);if(u=="hit"){t.style["opacity"]=0;}e.appendChild(t);var v=m[u][r][1];if("opacity" in v){a.sprite.prototype.changeOpacity(t,v);}if("cx" in v){a.sprite.prototype.colorTransform(t,v["cx"]);}if("fl" in v){a.sprite.prototype.addFilters(t,v);}if(t.getAttribute("type")=="sprite"){var o=t.getAttribute("sid");var q=u.concat(r);l[q]=l[q]||new a.sprite(a.hash[o],t);l[q].showFrame();}}}if("up" in this.states){k("up");}if("hit" in this.states){k("hit");}if("down" in this.states){k("down");}if("over" in this.states){k("over");}this.normalEvents();if("ac" in n){this.handleAction(n.ac);}},normalEvents:function(){this.element.addEventListener("mousedown",a.bindAsEventListener(this,this.mousedownHandler),false);this.element.addEventListener("mouseup",a.bindAsEventListener(this,this.mouseupHandler),false);this.element.addEventListener("mouseover",a.bindAsEventListener(this,this.mouseoverHandler),false);this.element.addEventListener("mouseout",a.bindAsEventListener(this,this.mouseoutHandler),false);},handleAction:function(e){for(var g=0,f=e.length;g<f;g++){var d=e[g];switch(d.cd){case"OverDownToOverUp":case"IdleToOverUp":this.handleRelease(d.as);break;}}},handleRelease:function(d){for(var h=0,g=d.length;h<g;h++){if("u" in d[h]){(function(j,i){j.addEventListener("mouseup",function(n){window.open(i);},false);}(this.element,d[h].u));}var k=d[h].sm;if(/^\S+$/.test(k)&&k.indexOf(".")==-1){var e=k.match(/^([^\(]+)\(([^\(]*)\)$/);var m=e[1].trim();var f=e[2];var l=a.sprite.instances[0];(function(p,n,i,j){n.addEventListener("mouseup",function(o){if(i in p){p[i](j);}},false);}(l,this.element,m,f));}}},mouseoutHandler:function(d){this.changeState("up");},mouseoverHandler:function(d){this.changeState("over");},mousedownHandler:function(d){if("down" in this.states){this.changeState("down");}},mouseupHandler:function(d){this.changeState("up");},changeState:function(g){var e=this.element.childNodes;for(var d=0,f;f=e[d];d++){if(f.getAttribute("state")=="hit"||f.getAttribute("state")==g){f.style.display="block";}else{f.style.display="none";}}}};a.sprite.prototype.cxTransform=function(d,e){if("cx" in e){this.colorTransform(d,e["cx"]);}};a.sprite.prototype.colorTransform=(function(){function e(m,i){var k=m.hasAttribute("stroke")?"stroke":"fill";var j=m.getAttribute(k);if(!j){return;}var l=j.match(/^\S{3}/)[0];switch(l){case"rgb":h(j,m,i,k);break;case"url":f(j,m,i,k);break;}}function h(k,m,i,l){m.oriC=m.oriC||k;var j=d(m.oriC,i);m.setAttribute(l,"rgb("+j[0]+","+j[1]+","+j[2]+")");}function f(u,t,o,p){var r=u.match(/url\(#([^(]+)\)/)[1];var A="";switch(p){case"stroke":A="l";break;case"fill":A="f";break;}var x=r.indexOf(A);if(x!==0){r=r.substr(x);}var s=document.getElementById(r);if(s.nodeName=="pattern"){return;}var l=t.parentNode.parentNode;var k=t.parentNode.previousSibling;var n=l.getAttribute("id")+r;if(document.getElementById(n)){var q=document.getElementById(n);}else{var q=s.cloneNode(true);q.setAttribute("id",n);k.appendChild(q);}var m=s.childNodes,z=q.childNodes;for(var w=0,v=m.length;w<v;w++){var y=m[w].getAttribute("stop-color");var B=d(y,o);z[w].setAttribute("stop-color","rgb("+B[0]+","+B[1]+","+B[2]+")");}t.setAttribute(p,"url(#"+n+")");}function d(k,l){var o=k.match(/rgb\(([^(]+)\)/)[1];var q=o.split(",");var i=q[0]-0;var n=q[1]-0;var p=q[2]-0;var m=Math.max(0,Math.min(((i*l.Rm)/256)+l.Ra,255));var s=Math.max(0,Math.min(((n*l.Gm)/256)+l.Ga,255));var j=Math.max(0,Math.min(((p*l.Bm)/256)+l.Ba,255));m=parseInt(m);s=parseInt(s);j=parseInt(j);return[m,s,j];}function g(l,k,o){var p=l.firstChild.nextSibling.childNodes;for(var n=0,m=p.length;n<m;n++){o.colorTransform(p[n],k);}}return function(m,k){var p=m.getAttribute("type");if((p=="shape"||p=="text")&&(m.nodeName.toLowerCase()!="clippath")){var l=m.firstChild.nextSibling;try{for(var o=0,n=l.childNodes.length;o<n;o++){var r=l.childNodes[o];e(r,k);}}catch(q){}}else{if(p=="sprite"){g(m,k,this);}}};}());a.sprite.prototype.changeOpacity=function(e,f){var d=1;if("opacity" in f){d=f["opacity"];e.setAttribute("opacity",d);}};a.sprite.prototype.addFilters=function(d,e){if("fl" in e){var f=e["fl"];if(d.filter){d.filter.reset(f);}else{d.filter=new a.filterElement(d,f);}}};a.sprite.prototype.getNode=function(d){return a.defineShapes[d.id].cloneNode(true);};a.sprite.prototype.createShape=function(e){var d=this.getNode(e);var f=this.par.getAttribute("id")+":"+e.d+":"+e.id;if("cD" in e){this.clipDepthId=f;this.clipDepth=e.cD;this.clipDepthDepth=e.d;d=this.createClip(e);}else{if(this.clipDepthId){if(e.d>this.clipDepthDepth&&e.d<=this.clipDepth){d.setAttribute("clip-path","url(#"+this.clipDepthId+")");}}}d.setAttribute("id",f);return d;};a.sprite.prototype.createClip=function(f){var d=this.getNode(f);var e=d.getAttribute("type");switch(e){case"shape":return this.createSimpleClip(d);case"sprite":return this.createComplexClip(f);}};a.sprite.prototype.createSimpleClip=function(d){var h=a.createTag("clipPath");var k=d.firstChild.nextSibling.childNodes;for(var f=0,e=k.length;f<e;f++){var g=k[f].cloneNode(true);h.appendChild(g);}h.setAttribute("clippathunits","userSpaceOnUse");h.setAttribute("type","shape");return h;};a.sprite.prototype.createComplexClip=function(g){var e=a.hash[g.id];var j=[];for(var f=0;f<e["Sf"].length;f++){if(!e["Sf"][f].remove){j.push(e["Sf"][f]);}}var h=j[0];var d=a.defineShapes[h.id];return this.createSimpleClip(d);};a.sprite.concatMatrix=function(e,d){var g=[];e=e.split(",");d=d.split(",");for(var f=0;e[f];f++){e[f]=e[f]-0;d[f]=d[f]-0;}g.push(e[0]*d[0]+e[1]*d[1]);g.push(e[0]*d[1]+e[1]*d[3]);g.push(e[1]*d[0]+e[3]*d[1]);g.push(e[1]*d[1]+e[3]*d[3]);g.push(d[4]*e[0]+d[5]*e[1]+e[4]);g.push(d[4]*e[1]+d[5]*e[3]+e[5]);return g.join(",");};a.start=function(){var e=a.createTag("g"),g=c;a.setBackground(a.root);e.setAttribute("id","0");e.appendChild(a.createTag("defs"));e.appendChild(a.createTag("g"));a.root.appendChild(e);var f=new a.sprite(g.Mf,e);a.timer=setTimeout(function(){f.showFrame();clearTimeout(a.timer);a.timer=null;a.timer=setTimeout(arguments.callee,a.interval);},a.interval);};a.stop=function(){clearTimeout(a.timer);};a.resume=function(){a.timer=setTimeout(function(){mainMovie.showFrame();setTimeout(arguments.callee,a.interval);},a.interval);};a.setBackground=function(e){var i=c;var g=a.createTag("rect");var h={x:i.Ft.xi,y:i.Ft.yi,width:i.Fw,height:i.Fh,fill:i.Bg};for(var f in h){g.setAttribute(f,h[f]);}e.appendChild(g);};a.init();a.start();}(data));