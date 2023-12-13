var ju=Object.defineProperty;var d=(e,t)=>ju(e,"name",{value:t,configurable:!0});var Ts="159";var qu=0,ro=1,Yu=2;var Zl=1,Zu=2,gi=3,ni=0,At=1,Kt=2;var ai=0,Mr=1,Qa=2,ao=3,no=4,Ku=5,Hi=100,Ju=101,Qu=102,so=103,oo=104,$u=200,ec=201,tc=202,ic=203,cs=204,ds=205,rc=206,ac=207,nc=208,sc=209,oc=210,lc=211,hc=212,uc=213,cc=214,dc=0,pc=1,mc=2,$a=3,fc=4,gc=5,vc=6,_c=7,Kl=0,xc=1,yc=2,Ei=0,Mc=1,bc=2,Sc=3,Tc=4,wc=5,lo="attached",Ac="detached",Jl=300,wr=301,Ar=302,ps=303,ms=304,hn=306,qi=1e3,Ut=1001,aa=1002,mt=1003,en=1004;var $r=1005;var Ct=1006,ws=1007;var Ci=1008;var Ri=1009,Ec=1010,Rc=1011,As=1012,Ql=1013,wi=1014,vi=1015,Jt=1016,$l=1017,eh=1018,Wi=1020,Cc=1021,Gt=1023,Lc=1024,Pc=1025,Xi=1026,Er=1027,Ic=1028,th=1029,Nc=1030,ih=1031,rh=1033,En=33776,Rn=33777,Cn=33778,Ln=33779,ho=35840,uo=35841,co=35842,po=35843,ah=36196,mo=37492,fo=37496,go=37808,vo=37809,_o=37810,xo=37811,yo=37812,Mo=37813,bo=37814,So=37815,To=37816,wo=37817,Ao=37818,Eo=37819,Ro=37820,Co=37821,Pn=36492,Lo=36494,Po=36495,Uc=36283,Io=36284,No=36285,Uo=36286;var Rr=2300,Yi=2301,In=2302,Do=2400,Oo=2401,Bo=2402,Dc=2500;var nh=0,un=1,ua=2,sh=3e3,ji=3001,Oc=3200,Bc=3201,oh=0,Fc=1,kt="",nt="srgb",xt="srgb-linear",Es="display-p3",cn="display-p3-linear",tn="linear",et="srgb",rn="rec709",an="p3";var tr=7680;var Fo=519,zc=512,Gc=513,kc=514,lh=515,Hc=516,Vc=517,Wc=518,Xc=519,fs=35044;var zo="300 es",gs=1035,_i=2e3,nn=2001,Ir=d(class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},"hn"),Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Go=1234567,br=Math.PI/180,Cr=180/Math.PI;function Ht(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tt[e&255]+Tt[e>>8&255]+Tt[e>>16&255]+Tt[e>>24&255]+"-"+Tt[t&255]+Tt[t>>8&255]+"-"+Tt[t>>16&15|64]+Tt[t>>24&255]+"-"+Tt[i&63|128]+Tt[i>>8&255]+"-"+Tt[i>>16&255]+Tt[i>>24&255]+Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]).toLowerCase()}d(Ht,"Ye");function ft(e,t,i){return Math.max(t,Math.min(i,e))}d(ft,"he");function Rs(e,t){return(e%t+t)%t}d(Rs,"hl");function jc(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}d(jc,"hp");function qc(e,t,i){return e!==t?(i-e)/(t-e):0}d(qc,"up");function ea(e,t,i){return(1-i)*e+i*t}d(ea,"ws");function Yc(e,t,i,r){return ea(e,t,1-Math.exp(-i*r))}d(Yc,"dp");function Zc(e,t=1){return t-Math.abs(Rs(e,t*2)-t)}d(Zc,"fp");function Kc(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}d(Kc,"pp");function Jc(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}d(Jc,"mp");function Qc(e,t){return e+Math.floor(Math.random()*(t-e+1))}d(Qc,"gp");function $c(e,t){return e+Math.random()*(t-e)}d($c,"_p");function ed(e){return e*(.5-Math.random())}d(ed,"xp");function td(e){e!==void 0&&(Go=e);let t=Go+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}d(td,"vp");function id(e){return e*br}d(id,"yp");function rd(e){return e*Cr}d(rd,"Mp");function vs(e){return(e&e-1)===0&&e!==0}d(vs,"Lo");function ad(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}d(ad,"Sp");function sn(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}d(sn,"ea");function nd(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),u=s((t+r)/2),c=n((t-r)/2),p=s((t-r)/2),f=n((r-t)/2),_=s((r-t)/2);switch(a){case"XYX":e.set(o*u,l*c,l*p,o*h);break;case"YZY":e.set(l*p,o*u,l*c,o*h);break;case"ZXZ":e.set(l*c,l*p,o*u,o*h);break;case"XZX":e.set(o*u,l*_,l*f,o*h);break;case"YXY":e.set(l*f,o*u,l*_,o*h);break;case"ZYZ":e.set(l*_,l*f,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}d(nd,"bp");function ri(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}d(ri,"ke");function Qe(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}d(Qe,"kt");var hh={DEG2RAD:br,RAD2DEG:Cr,generateUUID:Ht,clamp:ft,euclideanModulo:Rs,mapLinear:jc,inverseLerp:qc,lerp:ea,damp:Yc,pingpong:Zc,smoothstep:Kc,smootherstep:Jc,randInt:Qc,randFloat:$c,randFloatSpread:ed,seededRandom:td,degToRad:id,radToDeg:rd,isPowerOfTwo:vs,ceilPowerOfTwo:ad,floorPowerOfTwo:sn,setQuaternionFromProperEuler:nd,normalize:Qe,denormalize:ri},q=d(class uh{constructor(t=0,i=0){uh.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ft(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},"s"),je=d(class ch{constructor(t,i,r,a,n,s,o,l,h){ch.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=i,u[4]=n,u[5]=l,u[6]=r,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],u=r[4],c=r[7],p=r[2],f=r[5],_=r[8],v=a[0],g=a[3],m=a[6],y=a[1],x=a[4],M=a[7],A=a[2],w=a[5],P=a[8];return n[0]=s*v+o*y+l*A,n[3]=s*g+o*x+l*w,n[6]=s*m+o*M+l*P,n[1]=h*v+u*y+c*A,n[4]=h*g+u*x+c*w,n[7]=h*m+u*M+c*P,n[2]=p*v+f*y+_*A,n[5]=p*g+f*x+_*w,n[8]=p*m+f*M+_*P,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return i*s*u-i*o*h-r*n*u+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=u*s-o*h,p=o*l-u*n,f=h*n-s*l,_=i*c+r*p+a*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=c*v,t[1]=(a*h-u*r)*v,t[2]=(o*r-a*s)*v,t[3]=p*v,t[4]=(u*i-a*l)*v,t[5]=(a*n-o*i)*v,t[6]=f*v,t[7]=(r*l-h*i)*v,t[8]=(s*i-r*n)*v,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply(Nn.makeScale(t,i)),this}rotate(t){return this.premultiply(Nn.makeRotation(-t)),this}translate(t,i){return this.premultiply(Nn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},"s"),Nn=new je;function dh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}d(dh,"kd");function na(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}d(na,"Ds");function sd(){let e=na("canvas");return e.style.display="block",e}d(sd,"Tp");var ko={};function ta(e){e in ko||(ko[e]=!0,console.warn(e))}d(ta,"Rs");var Ho=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vo=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fa={[xt]:{transfer:tn,primaries:rn,toReference:e=>e,fromReference:e=>e},[nt]:{transfer:et,primaries:rn,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[cn]:{transfer:tn,primaries:an,toReference:e=>e.applyMatrix3(Vo),fromReference:e=>e.applyMatrix3(Ho)},[Es]:{transfer:et,primaries:an,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Vo),fromReference:e=>e.applyMatrix3(Ho).convertLinearToSRGB()}},od=new Set([xt,cn]),Ke={enabled:!0,_workingColorSpace:xt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(e){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!e},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!od.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,i){if(this.enabled===!1||t===i||!t||!i)return e;let r=fa[t].toReference,a=fa[i].fromReference;return a(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return fa[e].primaries},getTransfer:function(e){return e===kt?tn:fa[e].transfer}};function Sr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}d(Sr,"$i");function Un(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}d(Un,"Xa");var ir,ph=d(class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ir===void 0&&(ir=na("canvas")),ir.width=e.width,ir.height=e.height;let i=ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=na("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Sr(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sr(t[i]/255)*255):t[i]=Sr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},"na"),ld=0,mh=d(class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Ht(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Dn(r[n].image)):a.push(Dn(r[n]))}else a=Dn(r);i.url=a}return t||(e.images[this.uuid]=i),i}},"On");function Dn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ph.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}d(Dn,"qa");var hd=0,Pt=d(class Za extends Ir{constructor(t=Za.DEFAULT_IMAGE,i=Za.DEFAULT_MAPPING,r=Ut,a=Ut,n=Ct,s=Ci,o=Gt,l=Ri,h=Za.DEFAULT_ANISOTROPY,u=kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Ht(),this.name="",this.source=new mh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ji?nt:kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qi:t.x=t.x-Math.floor(t.x);break;case Ut:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qi:t.y=t.y-Math.floor(t.y);break;case Ut:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?ji:sh}set encoding(t){ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ji?nt:kt}},"s");Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Jl;Pt.DEFAULT_ANISOTROPY=1;var tt=d(class fh{constructor(t=0,i=0,r=0,a=1){fh.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],u=s[1],c=s[5],p=s[9],f=s[2],_=s[6],v=s[10];if(Math.abs(l-u)<.01&&Math.abs(h-f)<.01&&Math.abs(p-_)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+f)<.1&&Math.abs(p+_)<.1&&Math.abs(o+c+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let m=(o+1)/2,y=(c+1)/2,x=(v+1)/2,M=(l+u)/4,A=(h+f)/4,w=(p+_)/4;return m>y&&m>x?m<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(m),a=M/r,n=A/r):y>x?y<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(y),r=M/a,n=w/a):x<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(x),r=A/n,a=w/n),this.set(r,a,n,i),this}let g=Math.sqrt((_-p)*(_-p)+(h-f)*(h-f)+(u-l)*(u-l));return Math.abs(g)<.001&&(g=1),this.x=(_-p)/g,this.y=(h-f)/g,this.z=(u-l)/g,this.w=Math.acos((o+c+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},"s"),ud=d(class extends Ir{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(ta("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ji?nt:kt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},"Io"),Dt=d(class extends ud{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},"Ke"),gh=d(class extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mt,this.minFilter=mt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},"Ns");var cd=d(class extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mt,this.minFilter=mt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},"ia");var Qt=d(class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],c=a[n+0],p=a[n+1],f=a[n+2],_=a[n+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(s===1){e[t+0]=c,e[t+1]=p,e[t+2]=f,e[t+3]=_;return}if(u!==_||o!==c||l!==p||h!==f){let v=1-s,g=o*c+l*p+h*f+u*_,m=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let M=Math.sqrt(y),A=Math.atan2(M,g*m);v=Math.sin(v*A)/M,s=Math.sin(s*A)/M}let x=s*m;if(o=o*v+c*x,l=l*v+p*x,h=h*v+f*x,u=u*v+_*x,v===1-s){let M=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=M,l*=M,h*=M,u*=M}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],u=a[n],c=a[n+1],p=a[n+2],f=a[n+3];return e[t]=s*f+h*u+o*p-l*c,e[t+1]=o*f+h*c+l*u-s*p,e[t+2]=l*f+h*p+s*c-o*u,e[t+3]=h*f-s*u-o*c-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),u=s(a/2),c=o(i/2),p=o(r/2),f=o(a/2);switch(n){case"XYZ":this._x=c*h*u+l*p*f,this._y=l*p*u-c*h*f,this._z=l*h*f+c*p*u,this._w=l*h*u-c*p*f;break;case"YXZ":this._x=c*h*u+l*p*f,this._y=l*p*u-c*h*f,this._z=l*h*f-c*p*u,this._w=l*h*u+c*p*f;break;case"ZXY":this._x=c*h*u-l*p*f,this._y=l*p*u+c*h*f,this._z=l*h*f+c*p*u,this._w=l*h*u-c*p*f;break;case"ZYX":this._x=c*h*u-l*p*f,this._y=l*p*u+c*h*f,this._z=l*h*f-c*p*u,this._w=l*h*u+c*p*f;break;case"YZX":this._x=c*h*u+l*p*f,this._y=l*p*u+c*h*f,this._z=l*h*f-c*p*u,this._w=l*h*u-c*p*f;break;case"XZY":this._x=c*h*u-l*p*f,this._y=l*p*u-c*h*f,this._z=l*h*f+c*p*u,this._w=l*h*u+c*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10],c=i+s+u;if(c>0){let p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(h-o)*p,this._y=(a-l)*p,this._z=(n-r)*p}else if(i>s&&i>u){let p=2*Math.sqrt(1+i-s-u);this._w=(h-o)/p,this._x=.25*p,this._y=(r+n)/p,this._z=(a+l)/p}else if(s>u){let p=2*Math.sqrt(1+s-i-u);this._w=(a-l)/p,this._x=(r+n)/p,this._y=.25*p,this._z=(o+h)/p}else{let p=2*Math.sqrt(1+u-i-s);this._w=(n-r)/p,this._x=(a+l)/p,this._y=(o+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,n=this._w,s=n*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=i,this._y=r,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let p=1-t;return this._w=p*n+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(o),h=Math.atan2(l,s),u=Math.sin((1-t)*h)/l,c=Math.sin(t*h)/l;return this._w=n*u+this._w*c,this._x=i*u+this._x*c,this._y=r*u+this._y*c,this._z=a*u+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},"Be"),E=d(class vh{constructor(t=0,i=0,r=0){vh.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Wo.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Wo.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),u=2*(o*i-n*a),c=2*(n*r-s*i);return this.x=i+l*h+s*c-o*u,this.y=r+l*u+o*h-n*c,this.z=a+l*c+n*u-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return On.copy(this).projectOnVector(t),this.sub(On)}reflect(t){return this.sub(On.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ft(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-t**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},"s"),On=new E,Wo=new Qt,Vt=d(class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,qt):qt.fromBufferAttribute(a,n),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),va.subVectors(this.max,Wr),rr.subVectors(e.a,Wr),ar.subVectors(e.b,Wr),nr.subVectors(e.c,Wr),yi.subVectors(ar,rr),Mi.subVectors(nr,ar),Di.subVectors(rr,nr);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Di.z,Di.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Di.z,0,-Di.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Di.y,Di.x,0];return!Bn(t,rr,ar,nr,va)||(t=[1,0,0,0,1,0,0,0,1],!Bn(t,rr,ar,nr,va))?!1:(_a.crossVectors(yi,Mi),t=[_a.x,_a.y,_a.z],Bn(t,rr,ar,nr,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},"Le"),ui=[new E,new E,new E,new E,new E,new E,new E,new E],qt=new E,ga=new Vt,rr=new E,ar=new E,nr=new E,yi=new E,Mi=new E,Di=new E,Wr=new E,va=new E,_a=new E,Oi=new E;function Bn(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Oi.fromArray(e,n);let o=a.x*Math.abs(Oi.x)+a.y*Math.abs(Oi.y)+a.z*Math.abs(Oi.z),l=t.dot(Oi),h=i.dot(Oi),u=r.dot(Oi);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}d(Bn,"Za");var dd=new Vt,Xr=new E,Fn=new E,Wt=d(class{constructor(e=new E,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):dd.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(Fn)),this.expandByPoint(Xr.copy(e.center).sub(Fn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},"Te"),ci=new E,zn=new E,xa=new E,bi=new E,Gn=new E,ya=new E,kn=new E,dn=d(class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zn.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(zn);let a=e.distanceTo(t)*.5,n=-this.direction.dot(xa),s=bi.dot(this.direction),o=-bi.dot(xa),l=bi.lengthSq(),h=Math.abs(1-n*n),u,c,p,f;if(h>0)if(u=n*o-s,c=n*s-o,f=a*h,u>=0)if(c>=-f)if(c<=f){let _=1/h;u*=_,c*=_,p=u*(u+n*c+2*s)+c*(n*u+c+2*o)+l}else c=a,u=Math.max(0,-(n*c+s)),p=-u*u+c*(c+2*o)+l;else c=-a,u=Math.max(0,-(n*c+s)),p=-u*u+c*(c+2*o)+l;else c<=-f?(u=Math.max(0,-(-n*a+s)),c=u>0?-a:Math.min(Math.max(-a,-o),a),p=-u*u+c*(c+2*o)+l):c<=f?(u=0,c=Math.min(Math.max(-a,-o),a),p=c*(c+2*o)+l):(u=Math.max(0,-(n*a+s)),c=u>0?a:Math.min(Math.max(-a,-o),a),p=-u*u+c*(c+2*o)+l);else c=n>0?-a:a,u=Math.max(0,-(n*c+s)),p=-u*u+c*(c+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zn).addScaledVector(xa,c),p}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let i=ci.dot(this.direction),r=ci.dot(ci)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,c=this.origin;return l>=0?(i=(e.min.x-c.x)*l,r=(e.max.x-c.x)*l):(i=(e.max.x-c.x)*l,r=(e.min.x-c.x)*l),h>=0?(a=(e.min.y-c.y)*h,n=(e.max.y-c.y)*h):(a=(e.max.y-c.y)*h,n=(e.min.y-c.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),u>=0?(s=(e.min.z-c.z)*u,o=(e.max.z-c.z)*u):(s=(e.max.z-c.z)*u,o=(e.min.z-c.z)*u),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,r,a){Gn.subVectors(t,e),ya.subVectors(i,e),kn.crossVectors(Gn,ya);let n=this.direction.dot(kn),s;if(n>0){if(r)return null;s=1}else if(n<0)s=-1,n=-n;else return null;bi.subVectors(this.origin,e);let o=s*this.direction.dot(ya.crossVectors(bi,ya));if(o<0)return null;let l=s*this.direction.dot(Gn.cross(bi));if(l<0||o+l>n)return null;let h=-s*bi.dot(kn);return h<0?null:this.at(h/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},"gi"),Le=d(class _s{constructor(t,i,r,a,n,s,o,l,h,u,c,p,f,_,v,g){_s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,u,c,p,f,_,v,g)}set(t,i,r,a,n,s,o,l,h,u,c,p,f,_,v,g){let m=this.elements;return m[0]=t,m[4]=i,m[8]=r,m[12]=a,m[1]=n,m[5]=s,m[9]=o,m[13]=l,m[2]=h,m[6]=u,m[10]=c,m[14]=p,m[3]=f,m[7]=_,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _s().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,a=1/sr.setFromMatrixColumn(t,0).length(),n=1/sr.setFromMatrixColumn(t,1).length(),s=1/sr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),u=Math.cos(n),c=Math.sin(n);if(t.order==="XYZ"){let p=s*u,f=s*c,_=o*u,v=o*c;i[0]=l*u,i[4]=-l*c,i[8]=h,i[1]=f+_*h,i[5]=p-v*h,i[9]=-o*l,i[2]=v-p*h,i[6]=_+f*h,i[10]=s*l}else if(t.order==="YXZ"){let p=l*u,f=l*c,_=h*u,v=h*c;i[0]=p+v*o,i[4]=_*o-f,i[8]=s*h,i[1]=s*c,i[5]=s*u,i[9]=-o,i[2]=f*o-_,i[6]=v+p*o,i[10]=s*l}else if(t.order==="ZXY"){let p=l*u,f=l*c,_=h*u,v=h*c;i[0]=p-v*o,i[4]=-s*c,i[8]=_+f*o,i[1]=f+_*o,i[5]=s*u,i[9]=v-p*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let p=s*u,f=s*c,_=o*u,v=o*c;i[0]=l*u,i[4]=_*h-f,i[8]=p*h+v,i[1]=l*c,i[5]=v*h+p,i[9]=f*h-_,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let p=s*l,f=s*h,_=o*l,v=o*h;i[0]=l*u,i[4]=v-p*c,i[8]=_*c+f,i[1]=c,i[5]=s*u,i[9]=-o*u,i[2]=-h*u,i[6]=f*c+_,i[10]=p-v*c}else if(t.order==="XZY"){let p=s*l,f=s*h,_=o*l,v=o*h;i[0]=l*u,i[4]=-c,i[8]=h*u,i[1]=p*c+v,i[5]=s*u,i[9]=f*c-_,i[2]=_*c-f,i[6]=o*u,i[10]=v*c+p}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pd,t,md)}lookAt(t,i,r){let a=this.elements;return It.subVectors(t,i),It.lengthSq()===0&&(It.z=1),It.normalize(),Si.crossVectors(r,It),Si.lengthSq()===0&&(Math.abs(r.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Si.crossVectors(r,It)),Si.normalize(),Ma.crossVectors(It,Si),a[0]=Si.x,a[4]=Ma.x,a[8]=It.x,a[1]=Si.y,a[5]=Ma.y,a[9]=It.y,a[2]=Si.z,a[6]=Ma.z,a[10]=It.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],u=r[1],c=r[5],p=r[9],f=r[13],_=r[2],v=r[6],g=r[10],m=r[14],y=r[3],x=r[7],M=r[11],A=r[15],w=a[0],P=a[4],I=a[8],S=a[12],C=a[1],O=a[5],V=a[9],j=a[13],N=a[2],k=a[6],X=a[10],K=a[14],se=a[3],Y=a[7],Q=a[11],ie=a[15];return n[0]=s*w+o*C+l*N+h*se,n[4]=s*P+o*O+l*k+h*Y,n[8]=s*I+o*V+l*X+h*Q,n[12]=s*S+o*j+l*K+h*ie,n[1]=u*w+c*C+p*N+f*se,n[5]=u*P+c*O+p*k+f*Y,n[9]=u*I+c*V+p*X+f*Q,n[13]=u*S+c*j+p*K+f*ie,n[2]=_*w+v*C+g*N+m*se,n[6]=_*P+v*O+g*k+m*Y,n[10]=_*I+v*V+g*X+m*Q,n[14]=_*S+v*j+g*K+m*ie,n[3]=y*w+x*C+M*N+A*se,n[7]=y*P+x*O+M*k+A*Y,n[11]=y*I+x*V+M*X+A*Q,n[15]=y*S+x*j+M*K+A*ie,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],u=t[2],c=t[6],p=t[10],f=t[14],_=t[3],v=t[7],g=t[11],m=t[15];return _*(+n*l*c-a*h*c-n*o*p+r*h*p+a*o*f-r*l*f)+v*(+i*l*f-i*h*p+n*s*p-a*s*f+a*h*u-n*l*u)+g*(+i*h*c-i*o*f-n*s*c+r*s*f+n*o*u-r*h*u)+m*(-a*o*u-i*l*c+i*o*p+a*s*c-r*s*p+r*l*u)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],c=t[9],p=t[10],f=t[11],_=t[12],v=t[13],g=t[14],m=t[15],y=c*g*h-v*p*h+v*l*f-o*g*f-c*l*m+o*p*m,x=_*p*h-u*g*h-_*l*f+s*g*f+u*l*m-s*p*m,M=u*v*h-_*c*h+_*o*f-s*v*f-u*o*m+s*c*m,A=_*c*l-u*v*l-_*o*p+s*v*p+u*o*g-s*c*g,w=i*y+r*x+a*M+n*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return t[0]=y*P,t[1]=(v*p*n-c*g*n-v*a*f+r*g*f+c*a*m-r*p*m)*P,t[2]=(o*g*n-v*l*n+v*a*h-r*g*h-o*a*m+r*l*m)*P,t[3]=(c*l*n-o*p*n-c*a*h+r*p*h+o*a*f-r*l*f)*P,t[4]=x*P,t[5]=(u*g*n-_*p*n+_*a*f-i*g*f-u*a*m+i*p*m)*P,t[6]=(_*l*n-s*g*n-_*a*h+i*g*h+s*a*m-i*l*m)*P,t[7]=(s*p*n-u*l*n+u*a*h-i*p*h-s*a*f+i*l*f)*P,t[8]=M*P,t[9]=(_*c*n-u*v*n-_*r*f+i*v*f+u*r*m-i*c*m)*P,t[10]=(s*v*n-_*o*n+_*r*h-i*v*h-s*r*m+i*o*m)*P,t[11]=(u*o*n-s*c*n-u*r*h+i*c*h+s*r*f-i*o*f)*P,t[12]=A*P,t[13]=(u*v*a-_*c*a+_*r*p-i*v*p-u*r*g+i*c*g)*P,t[14]=(_*o*a-s*v*a-_*r*l+i*v*l+s*r*g-i*o*g)*P,t[15]=(s*c*a-u*o*a+u*r*l-i*c*l-s*r*p+i*o*p)*P,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,u=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,u*o+r,u*l-a*s,0,h*l-a*o,u*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,u=s+s,c=o+o,p=n*h,f=n*u,_=n*c,v=s*u,g=s*c,m=o*c,y=l*h,x=l*u,M=l*c,A=r.x,w=r.y,P=r.z;return a[0]=(1-(v+m))*A,a[1]=(f+M)*A,a[2]=(_-x)*A,a[3]=0,a[4]=(f-M)*w,a[5]=(1-(p+m))*w,a[6]=(g+y)*w,a[7]=0,a[8]=(_+x)*P,a[9]=(g-y)*P,a[10]=(1-(p+v))*P,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements,n=sr.set(a[0],a[1],a[2]).length(),s=sr.set(a[4],a[5],a[6]).length(),o=sr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],Yt.copy(this);let l=1/n,h=1/s,u=1/o;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=h,Yt.elements[5]*=h,Yt.elements[6]*=h,Yt.elements[8]*=u,Yt.elements[9]*=u,Yt.elements[10]*=u,i.setFromRotationMatrix(Yt),r.x=n,r.y=s,r.z=o,this}makePerspective(t,i,r,a,n,s,o=_i){let l=this.elements,h=2*n/(i-t),u=2*n/(r-a),c=(i+t)/(i-t),p=(r+a)/(r-a),f,_;if(o===_i)f=-(s+n)/(s-n),_=-2*s*n/(s-n);else if(o===nn)f=-s/(s-n),_=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=_i){let l=this.elements,h=1/(i-t),u=1/(r-a),c=1/(s-n),p=(i+t)*h,f=(r+a)*u,_,v;if(o===_i)_=(s+n)*c,v=-2*c;else if(o===nn)_=n*c,v=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},"s"),sr=new E,Yt=new Le,pd=new E(0,0,0),md=new E(1,1,1),Si=new E,Ma=new E,It=new E,Xo=new Le,jo=new Qt,_h=d(class xh{constructor(t=0,i=0,r=0,a=xh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],u=a[9],c=a[2],p=a[6],f=a[10];switch(i){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,n),this._z=0);break;case"ZXY":this._x=Math.asin(ft(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Xo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xo,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return jo.setFromEuler(this),this.setFromQuaternion(jo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},"s");_h.DEFAULT_ORDER="XYZ";var yh=d(class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},"Os"),fd=0,qo=new E,or=new Qt,di=new Le,ba=new E,jr=new E,gd=new E,vd=new Qt,Yo=new E(1,0,0),Zo=new E(0,1,0),Ko=new E(0,0,1),_d={type:"added"},xd={type:"removed"},ct=d(class Ka extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Ht(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ka.DEFAULT_UP.clone();let t=new E,i=new _h,r=new Qt,a=new E(1,1,1);function n(){r.setFromEuler(i,!1)}d(n,"r");function s(){i.setFromQuaternion(r,void 0,!1)}d(s,"a"),i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Le},normalMatrix:{value:new je}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Ka.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ka.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return or.setFromAxisAngle(t,i),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,i){return or.setFromAxisAngle(t,i),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(Yo,t)}rotateY(t){return this.rotateOnAxis(Zo,t)}rotateZ(t){return this.rotateOnAxis(Ko,t)}translateOnAxis(t,i){return qo.copy(t).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Yo,t)}translateY(t){return this.translateOnAxis(Zo,t)}translateZ(t){return this.translateOnAxis(Ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ba.copy(t):ba.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(jr,ba,this.up):di.lookAt(ba,jr,this.up),this.quaternion.setFromRotationMatrix(di),a&&(di.extractRotation(a.matrixWorld),or.setFromRotationMatrix(di),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(_d)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(xd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++){let n=i[r];(n.matrixWorldAutoUpdate===!0||t===!0)&&n.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++){let o=a[n];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(d(n,"r"),this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let c=l[h];n(t.shapes,c)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),u=s(t.images),c=s(t.shapes),p=s(t.skeletons),f=s(t.animations),_=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),c.length>0&&(r.shapes=c),p.length>0&&(r.skeletons=p),f.length>0&&(r.animations=f),_.length>0&&(r.nodes=_)}return r.object=a,r;function s(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}},"s");ct.DEFAULT_UP=new E(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zt=new E,pi=new E,Hn=new E,mi=new E,lr=new E,hr=new E,Jo=new E,Vn=new E,Wn=new E,Xn=new E,Sa=!1,Jr=d(class zi{constructor(t=new E,i=new E,r=new E){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Zt.subVectors(t,i),a.cross(Zt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Zt.subVectors(a,i),pi.subVectors(r,i),Hn.subVectors(t,i);let s=Zt.dot(Zt),o=Zt.dot(pi),l=Zt.dot(Hn),h=pi.dot(pi),u=pi.dot(Hn),c=s*h-o*o;if(c===0)return n.set(-2,-1,-1);let p=1/c,f=(h*l-o*u)*p,_=(s*u-o*l)*p;return n.set(1-f-_,_,f)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,mi),mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getUV(t,i,r,a,n,s,o,l){return Sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sa=!0),this.getInterpolation(t,i,r,a,n,s,o,l)}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,mi),l.setScalar(0),l.addScaledVector(n,mi.x),l.addScaledVector(s,mi.y),l.addScaledVector(o,mi.z),l}static isFrontFacing(t,i,r,a){return Zt.subVectors(r,i),pi.subVectors(t,i),Zt.cross(pi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zt.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Zt.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return zi.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,r,a,n){return Sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sa=!0),zi.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}getInterpolation(t,i,r,a,n){return zi.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;lr.subVectors(a,r),hr.subVectors(n,r),Vn.subVectors(t,r);let l=lr.dot(Vn),h=hr.dot(Vn);if(l<=0&&h<=0)return i.copy(r);Wn.subVectors(t,a);let u=lr.dot(Wn),c=hr.dot(Wn);if(u>=0&&c<=u)return i.copy(a);let p=l*c-u*h;if(p<=0&&l>=0&&u<=0)return s=l/(l-u),i.copy(r).addScaledVector(lr,s);Xn.subVectors(t,n);let f=lr.dot(Xn),_=hr.dot(Xn);if(_>=0&&f<=_)return i.copy(n);let v=f*h-l*_;if(v<=0&&h>=0&&_<=0)return o=h/(h-_),i.copy(r).addScaledVector(hr,o);let g=u*_-f*c;if(g<=0&&c-u>=0&&f-_>=0)return Jo.subVectors(n,a),o=(c-u)/(c-u+(f-_)),i.copy(a).addScaledVector(Jo,o);let m=1/(g+v+p);return s=v*m,o=p*m,i.copy(r).addScaledVector(lr,s).addScaledVector(hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},"s"),Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function jn(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}d(jn,"io");var Te=d(class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Rs(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=jn(n,a,e+1/3),this.g=jn(n,a,e),this.b=jn(n,a,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=nt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}d(i,"n");let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){let i=Mh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return Ke.fromWorkingColorSpace(wt.copy(this),e),Math.round(ft(wt.r*255,0,255))*65536+Math.round(ft(wt.g*255,0,255))*256+Math.round(ft(wt.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(wt.copy(this),t);let i=wt.r,r=wt.g,a=wt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let u=n-s;switch(l=h<=.5?u/(n+s):u/(2-n-s),n){case i:o=(r-a)/u+(r<a?6:0);break;case r:o=(a-i)/u+2;break;case a:o=(i-r)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=nt){Ke.fromWorkingColorSpace(wt.copy(this),e);let t=wt.r,i=wt.g,r=wt.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Ta);let i=ea(Ti.h,Ta.h,t),r=ea(Ti.s,Ta.s,t),a=ea(Ti.l,Ta.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},"ft"),wt=new Te;Te.NAMES=Mh;var yd=0,$t=d(class extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Ht(),this.name="",this.type="Material",this.blending=Mr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cs,this.blendDst=ds,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cs&&(i.blendSrc=this.blendSrc),this.blendDst!==ds&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$a&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(d(r,"i"),t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},"Ae"),Xt=d(class extends $t{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},"Tn"),y_=Md();function Md(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;!(h&8388608);)h<<=1,u-=8388608;h&=-8388609,u+=947912704,n[l]=h|u}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}d(Md,"Bp");var ut=new E,wa=new q,Mt=d(class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array),a=Qe(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fs&&(e.usage=this.usage),e}},"Kt");var bh=d(class extends Mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},"ra");var Sh=d(class extends Mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},"aa");var Pe=d(class extends Mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},"Mt");var bd=0,zt=new Le,qn=new ct,ur=new E,Nt=new Vt,qr=new Vt,_t=new E,it=d(class Th extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Ht(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dh(t)?Sh:bh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new je().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zt.makeRotationFromQuaternion(t),this.applyMatrix4(zt),this}rotateX(t){return zt.makeRotationX(t),this.applyMatrix4(zt),this}rotateY(t){return zt.makeRotationY(t),this.applyMatrix4(zt),this}rotateZ(t){return zt.makeRotationZ(t),this.applyMatrix4(zt),this}translate(t,i,r){return zt.makeTranslation(t,i,r),this.applyMatrix4(zt),this}scale(t,i,r){return zt.makeScale(t,i,r),this.applyMatrix4(zt),this}lookAt(t){return qn.lookAt(t),qn.updateMatrix(),this.applyMatrix4(qn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){let i=[];for(let r=0,a=t.length;r<a;r++){let n=t[r];i.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Pe(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Nt.setFromBufferAttribute(n),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wt);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(t){let r=this.boundingSphere.center;if(Nt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];qr.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Nt.min,qr.min),Nt.expandByPoint(_t),_t.addVectors(Nt.max,qr.max),Nt.expandByPoint(_t)):(Nt.expandByPoint(qr.min),Nt.expandByPoint(qr.max))}Nt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)_t.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(_t));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)_t.fromBufferAttribute(o,h),l&&(ur.fromBufferAttribute(t,h),_t.add(ur)),a=Math.max(a,r.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=t.array,a=i.position.array,n=i.normal.array,s=i.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,h=[],u=[];for(let C=0;C<o;C++)h[C]=new E,u[C]=new E;let c=new E,p=new E,f=new E,_=new q,v=new q,g=new q,m=new E,y=new E;function x(C,O,V){c.fromArray(a,C*3),p.fromArray(a,O*3),f.fromArray(a,V*3),_.fromArray(s,C*2),v.fromArray(s,O*2),g.fromArray(s,V*2),p.sub(c),f.sub(c),v.sub(_),g.sub(_);let j=1/(v.x*g.y-g.x*v.y);isFinite(j)&&(m.copy(p).multiplyScalar(g.y).addScaledVector(f,-v.y).multiplyScalar(j),y.copy(f).multiplyScalar(v.x).addScaledVector(p,-g.x).multiplyScalar(j),h[C].add(m),h[O].add(m),h[V].add(m),u[C].add(y),u[O].add(y),u[V].add(y))}d(x,"x");let M=this.groups;M.length===0&&(M=[{start:0,count:r.length}]);for(let C=0,O=M.length;C<O;++C){let V=M[C],j=V.start,N=V.count;for(let k=j,X=j+N;k<X;k+=3)x(r[k+0],r[k+1],r[k+2])}let A=new E,w=new E,P=new E,I=new E;function S(C){P.fromArray(n,C*3),I.copy(P);let O=h[C];A.copy(O),A.sub(P.multiplyScalar(P.dot(O))).normalize(),w.crossVectors(I,O);let V=w.dot(u[C])<0?-1:1;l[C*4]=A.x,l[C*4+1]=A.y,l[C*4+2]=A.z,l[C*4+3]=V}d(S,"y");for(let C=0,O=M.length;C<O;++C){let V=M[C],j=V.start,N=V.count;for(let k=j,X=j+N;k<X;k+=3)S(r[k+0]),S(r[k+1]),S(r[k+2])}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let p=0,f=r.count;p<f;p++)r.setXYZ(p,0,0,0);let a=new E,n=new E,s=new E,o=new E,l=new E,h=new E,u=new E,c=new E;if(t)for(let p=0,f=t.count;p<f;p+=3){let _=t.getX(p+0),v=t.getX(p+1),g=t.getX(p+2);a.fromBufferAttribute(i,_),n.fromBufferAttribute(i,v),s.fromBufferAttribute(i,g),u.subVectors(s,n),c.subVectors(a,n),u.cross(c),o.fromBufferAttribute(r,_),l.fromBufferAttribute(r,v),h.fromBufferAttribute(r,g),o.add(u),l.add(u),h.add(u),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(g,h.x,h.y,h.z)}else for(let p=0,f=i.count;p<f;p+=3)a.fromBufferAttribute(i,p+0),n.fromBufferAttribute(i,p+1),s.fromBufferAttribute(i,p+2),u.subVectors(s,n),c.subVectors(a,n),u.cross(c),r.setXYZ(p+0,u.x,u.y,u.z),r.setXYZ(p+1,u.x,u.y,u.z),r.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_t.fromBufferAttribute(t,i),_t.normalize(),t.setXYZ(i,_t.x,_t.y,_t.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,c=o.normalized,p=new h.constructor(l.length*u),f=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)p[_++]=h[f++]}return new Mt(p,u,c)}if(d(t,"t"),this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Th,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let u=0,c=h.length;u<c;u++){let p=h[u],f=t(p,r);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let c=0,p=h.length;c<p;c++){let f=h[c];u.push(f.toJSON(t.data))}u.length>0&&(a[l]=u,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone(i));let a=t.attributes;for(let h in a){let u=a[h];this.setAttribute(h,u.clone(i))}let n=t.morphAttributes;for(let h in n){let u=[],c=n[h];for(let p=0,f=c.length;p<f;p++)u.push(c[p].clone(i));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,u=s.length;h<u;h++){let c=s[h];this.addGroup(c.start,c.count,c.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},"s"),Qo=new Le,Bi=new dn,Aa=new Wt,$o=new E,cr=new E,dr=new E,pr=new E,Yn=new E,Ea=new E,Ra=new q,Ca=new q,La=new q,el=new E,tl=new E,il=new E,Pa=new E,Ia=new E,Je=d(class extends ct{constructor(e=new it,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){Ea.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],u=a[o];h!==0&&(Yn.fromBufferAttribute(u,e),n?Ea.addScaledVector(Yn,h):Ea.addScaledVector(Yn.sub(t),h))}t.add(Ea)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(a),Bi.copy(e.ray).recast(e.near),!(Aa.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Aa,$o)===null||Bi.origin.distanceToSquared($o)>(e.far-e.near)**2))&&(Qo.copy(a).invert(),Bi.copy(e.ray).applyMatrix4(Qo),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,c=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,_=c.length;f<_;f++){let v=c[f],g=n[v.materialIndex],m=Math.max(v.start,p.start),y=Math.min(s.count,Math.min(v.start+v.count,p.start+p.count));for(let x=m,M=y;x<M;x+=3){let A=s.getX(x),w=s.getX(x+1),P=s.getX(x+2);r=Na(this,g,e,i,l,h,u,A,w,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let f=Math.max(0,p.start),_=Math.min(s.count,p.start+p.count);for(let v=f,g=_;v<g;v+=3){let m=s.getX(v),y=s.getX(v+1),x=s.getX(v+2);r=Na(this,n,e,i,l,h,u,m,y,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,_=c.length;f<_;f++){let v=c[f],g=n[v.materialIndex],m=Math.max(v.start,p.start),y=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let x=m,M=y;x<M;x+=3){let A=x,w=x+1,P=x+2;r=Na(this,g,e,i,l,h,u,A,w,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let v=f,g=_;v<g;v+=3){let m=v,y=v+1,x=v+2;r=Na(this,n,e,i,l,h,u,m,y,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}},"ge");function Sd(e,t,i,r,a,n,s,o){let l;if(t.side===At?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===ni,o),l===null)return null;Ia.copy(o),Ia.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(Ia);return h<i.near||h>i.far?null:{distance:h,point:Ia.clone(),object:e}}d(Sd,"Vp");function Na(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,cr),e.getVertexPosition(l,dr),e.getVertexPosition(h,pr);let u=Sd(e,t,i,r,cr,dr,pr,Pa);if(u){a&&(Ra.fromBufferAttribute(a,o),Ca.fromBufferAttribute(a,l),La.fromBufferAttribute(a,h),u.uv=Jr.getInterpolation(Pa,cr,dr,pr,Ra,Ca,La,new q)),n&&(Ra.fromBufferAttribute(n,o),Ca.fromBufferAttribute(n,l),La.fromBufferAttribute(n,h),u.uv1=Jr.getInterpolation(Pa,cr,dr,pr,Ra,Ca,La,new q),u.uv2=u.uv1),s&&(el.fromBufferAttribute(s,o),tl.fromBufferAttribute(s,l),il.fromBufferAttribute(s,h),u.normal=Jr.getInterpolation(Pa,cr,dr,pr,el,tl,il,new E),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:l,c:h,normal:new E,materialIndex:0};Jr.getNormal(cr,dr,pr,c.normal),u.face=c}return u}d(Na,"pr");var Nr=d(class wh extends it{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],u=[],c=[],p=0,f=0;_("z","y","x",-1,-1,r,i,t,s,n,0),_("z","y","x",1,-1,r,i,-t,s,n,1),_("x","z","y",1,1,t,r,i,a,s,2),_("x","z","y",1,-1,t,r,-i,a,s,3),_("x","y","z",1,-1,t,i,r,a,n,4),_("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new Pe(h,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(c,2));function _(v,g,m,y,x,M,A,w,P,I,S){let C=M/P,O=A/I,V=M/2,j=A/2,N=w/2,k=P+1,X=I+1,K=0,se=0,Y=new E;for(let Q=0;Q<X;Q++){let ie=Q*O-j;for(let B=0;B<k;B++){let Z=B*C-V;Y[v]=Z*y,Y[g]=ie*x,Y[m]=N,h.push(Y.x,Y.y,Y.z),Y[v]=0,Y[g]=0,Y[m]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),c.push(B/P),c.push(1-Q/I),K+=1}}for(let Q=0;Q<I;Q++)for(let ie=0;ie<P;ie++){let B=p+ie+k*Q,Z=p+ie+k*(Q+1),pe=p+(ie+1)+k*(Q+1),ve=p+(ie+1)+k*Q;l.push(B,Z,ve),l.push(Z,pe,ve),se+=6}o.addGroup(f,se,S),f+=se,p+=K}d(_,"m")}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},"s");function Lr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}}return t}d(Lr,"es");function Rt(e){let t={};for(let i=0;i<e.length;i++){let r=Lr(e[i]);for(let a in r)t[a]=r[a]}return t}d(Rt,"Oe");function Td(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}d(Td,"kp");function Ah(e){return e.getRenderTarget()===null?e.outputColorSpace:Ke.workingColorSpace}d(Ah,"Gd");var Ur={clone:Lr,merge:Rt},wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=d(class extends $t{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=Td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},"sn"),Cs=d(class extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},"Fs"),yt=d(class extends Cs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(br*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},"be"),mr=-90,fr=1,Ed=d(class extends ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yt(mr,fr,e,t);r.layers=this.layers,this.add(r);let a=new yt(mr,fr,e,t);a.layers=this.layers,this.add(a);let n=new yt(mr,fr,e,t);n.layers=this.layers,this.add(n);let s=new yt(mr,fr,e,t);s.layers=this.layers,this.add(s);let o=new yt(mr,fr,e,t);o.layers=this.layers,this.add(o);let l=new yt(mr,fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===nn)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,u=e.getRenderTarget(),c=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,n),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,c,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},"Uo"),Eh=d(class extends Pt{constructor(e,t,i,r,a,n,s,o,l,h){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},"ns"),Rd=d(class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ta("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ji?nt:kt),this.texture=new Eh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Nr(5,5,5),a=new Lt({name:"CubemapFromEquirect",uniforms:Lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:At,blending:ai});a.uniforms.tEquirect.value=t;let n=new Je(r,a),s=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Ct),new Ed(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},"Do"),Zn=new E,Cd=new E,Ld=new je,Gi=d(class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Zn.subVectors(i,t).cross(Cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Zn),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ld.getNormalMatrix(e),r=this.coplanarPoint(Zn).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},"yn"),Fi=new Wt,Ua=new E,pn=d(class{constructor(e=new Gi,t=new Gi,i=new Gi,r=new Gi,a=new Gi,n=new Gi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i){let i=this.planes,r=e.elements,a=r[0],n=r[1],s=r[2],o=r[3],l=r[4],h=r[5],u=r[6],c=r[7],p=r[8],f=r[9],_=r[10],v=r[11],g=r[12],m=r[13],y=r[14],x=r[15];if(i[0].setComponents(o-a,c-l,v-p,x-g).normalize(),i[1].setComponents(o+a,c+l,v+p,x+g).normalize(),i[2].setComponents(o+n,c+h,v+f,x+m).normalize(),i[3].setComponents(o-n,c-h,v-f,x-m).normalize(),i[4].setComponents(o-s,c-u,v-_,x-y).normalize(),t===_i)i[5].setComponents(o+s,c+u,v+_,x+y).normalize();else if(t===nn)i[5].setComponents(s,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},"is");function Rh(){let e=null,t=!1,i=null,r=null;function a(n,s){i(n,s),r=e.requestAnimationFrame(a)}return d(a,"i"),{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}d(Rh,"Wd");function Pd(e,t){let i=t.isWebGL2,r=new WeakMap;function a(h,u){let c=h.array,p=h.usage,f=c.byteLength,_=e.createBuffer();e.bindBuffer(u,_),e.bufferData(u,c,p),h.onUploadCallback();let v;if(c instanceof Float32Array)v=e.FLOAT;else if(c instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(i)v=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)v=e.SHORT;else if(c instanceof Uint32Array)v=e.UNSIGNED_INT;else if(c instanceof Int32Array)v=e.INT;else if(c instanceof Int8Array)v=e.BYTE;else if(c instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:_,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:h.version,size:f}}d(a,"i");function n(h,u,c){let p=u.array,f=u._updateRange,_=u.updateRanges;if(e.bindBuffer(c,h),f.count===-1&&_.length===0&&e.bufferSubData(c,0,p),_.length!==0){for(let v=0,g=_.length;v<g;v++){let m=_[v];i?e.bufferSubData(c,m.start*p.BYTES_PER_ELEMENT,p,m.start,m.count):e.bufferSubData(c,m.start*p.BYTES_PER_ELEMENT,p.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(i?e.bufferSubData(c,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):e.bufferSubData(c,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}d(n,"r");function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),r.get(h)}d(s,"a");function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=r.get(h);u&&(e.deleteBuffer(u.buffer),r.delete(h))}d(o,"o");function l(h,u){if(h.isGLBufferAttribute){let p=r.get(h);(!p||p.version<h.version)&&r.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let c=r.get(h);if(c===void 0)r.set(h,a(h,u));else if(c.version<h.version){if(c.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,h,u),c.version=h.version}}return d(l,"c"),{get:s,remove:o,update:l}}d(Pd,"Yp");var Ch=d(class Lh extends it{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,u=l+1,c=t/o,p=i/l,f=[],_=[],v=[],g=[];for(let m=0;m<u;m++){let y=m*p-s;for(let x=0;x<h;x++){let M=x*c-n;_.push(M,-y,0),v.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let x=y+h*m,M=y+h*(m+1),A=y+1+h*(m+1),w=y+1+h*m;f.push(x,M,w),f.push(M,A,w)}this.setIndex(f),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lh(t.width,t.height,t.widthSegments,t.heightSegments)}},"s"),Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ip=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Am=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Km=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$m=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Id,alphahash_pars_fragment:Nd,alphamap_fragment:Ud,alphamap_pars_fragment:Dd,alphatest_fragment:Od,alphatest_pars_fragment:Bd,aomap_fragment:Fd,aomap_pars_fragment:zd,batching_pars_vertex:Gd,batching_vertex:kd,begin_vertex:Hd,beginnormal_vertex:Vd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:jd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:Kd,color_fragment:Jd,color_pars_fragment:Qd,color_pars_vertex:$d,color_vertex:ep,common:tp,cube_uv_reflection_fragment:ip,defaultnormal_vertex:rp,displacementmap_pars_vertex:ap,displacementmap_vertex:np,emissivemap_fragment:sp,emissivemap_pars_fragment:op,colorspace_fragment:lp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:cp,envmap_pars_fragment:dp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:wp,envmap_vertex:mp,fog_vertex:fp,fog_pars_vertex:gp,fog_fragment:vp,fog_pars_fragment:_p,gradientmap_pars_fragment:xp,lightmap_fragment:yp,lightmap_pars_fragment:Mp,lights_lambert_fragment:bp,lights_lambert_pars_fragment:Sp,lights_pars_begin:Tp,lights_toon_fragment:Ap,lights_toon_pars_fragment:Ep,lights_phong_fragment:Rp,lights_phong_pars_fragment:Cp,lights_physical_fragment:Lp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Ip,lights_fragment_maps:Np,lights_fragment_end:Up,logdepthbuf_fragment:Dp,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:Fp,map_fragment:zp,map_pars_fragment:Gp,map_particle_fragment:kp,map_particle_pars_fragment:Hp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Wp,morphcolor_vertex:Xp,morphnormal_vertex:jp,morphtarget_pars_vertex:qp,morphtarget_vertex:Yp,normal_fragment_begin:Zp,normal_fragment_maps:Kp,normal_pars_fragment:Jp,normal_pars_vertex:Qp,normal_vertex:$p,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:rm,iridescence_pars_fragment:am,opaque_fragment:nm,packing:sm,premultiplied_alpha_fragment:om,project_vertex:lm,dithering_fragment:hm,dithering_pars_fragment:um,roughnessmap_fragment:cm,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:fm,shadowmask_pars_fragment:gm,skinbase_vertex:vm,skinning_pars_vertex:_m,skinning_vertex:xm,skinnormal_vertex:ym,specularmap_fragment:Mm,specularmap_pars_fragment:bm,tonemapping_fragment:Sm,tonemapping_pars_fragment:Tm,transmission_fragment:wm,transmission_pars_fragment:Am,uv_pars_fragment:Em,uv_pars_vertex:Rm,uv_vertex:Cm,worldpos_vertex:Lm,background_vert:Pm,background_frag:Im,backgroundCube_vert:Nm,backgroundCube_frag:Um,cube_vert:Dm,cube_frag:Om,depth_vert:Bm,depth_frag:Fm,distanceRGBA_vert:zm,distanceRGBA_frag:Gm,equirect_vert:km,equirect_frag:Hm,linedashed_vert:Vm,linedashed_frag:Wm,meshbasic_vert:Xm,meshbasic_frag:jm,meshlambert_vert:qm,meshlambert_frag:Ym,meshmatcap_vert:Zm,meshmatcap_frag:Km,meshnormal_vert:Jm,meshnormal_frag:Qm,meshphong_vert:$m,meshphong_frag:ef,meshphysical_vert:tf,meshphysical_frag:rf,meshtoon_vert:af,meshtoon_frag:nf,points_vert:sf,points_frag:of,shadow_vert:lf,shadow_frag:hf,sprite_vert:uf,sprite_frag:cf},de={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ii={basic:{uniforms:Rt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Rt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Te(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Rt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Rt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Rt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Te(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Rt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Rt([de.points,de.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Rt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Rt([de.common,de.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Rt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Rt([de.sprite,de.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Rt([de.common,de.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Rt([de.lights,de.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ii.physical={uniforms:Rt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var Da={r:0,b:0,g:0};function df(e,t,i,r,a,n,s){let o=new Te(0),l=n===!0?0:1,h,u,c=null,p=0,f=null;function _(g,m){let y=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?i:t).get(x)),x===null?v(o,l):x&&x.isColor&&(v(x,1),y=!0);let M=e.xr.getEnvironmentBlendMode();M==="additive"?r.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(e.autoClear||y)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),x&&(x.isCubeTexture||x.mapping===hn)?(u===void 0&&(u=new Je(new Nr(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Lr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(x.colorSpace)!==et,(c!==x||p!==x.version||f!==e.toneMapping)&&(u.material.needsUpdate=!0,c=x,p=x.version,f=e.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Je(new Ch(2,2),new Lt({name:"BackgroundMaterial",uniforms:Lr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(x.colorSpace)!==et,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||p!==x.version||f!==e.toneMapping)&&(h.material.needsUpdate=!0,c=x,p=x.version,f=e.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}d(_,"m");function v(g,m){g.getRGB(Da,Ah(e)),r.buffers.color.setClear(Da.r,Da.g,Da.b,m,s)}return d(v,"_"),{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:_}}d(df,"w_");function pf(e,t,i,r){let a=e.getParameter(e.MAX_VERTEX_ATTRIBS),n=r.isWebGL2?null:t.get("OES_vertex_array_object"),s=r.isWebGL2||n!==null,o={},l=g(null),h=l,u=!1;function c(N,k,X,K,se){let Y=!1;if(s){let Q=v(K,X,k);h!==Q&&(h=Q,f(h.object)),Y=m(N,K,X,se),Y&&y(N,K,X,se)}else{let Q=k.wireframe===!0;(h.geometry!==K.id||h.program!==X.id||h.wireframe!==Q)&&(h.geometry=K.id,h.program=X.id,h.wireframe=Q,Y=!0)}se!==null&&i.update(se,e.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,I(N,k,X,K),se!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,i.get(se).buffer))}d(c,"u");function p(){return r.isWebGL2?e.createVertexArray():n.createVertexArrayOES()}d(p,"d");function f(N){return r.isWebGL2?e.bindVertexArray(N):n.bindVertexArrayOES(N)}d(f,"f");function _(N){return r.isWebGL2?e.deleteVertexArray(N):n.deleteVertexArrayOES(N)}d(_,"m");function v(N,k,X){let K=X.wireframe===!0,se=o[N.id];se===void 0&&(se={},o[N.id]=se);let Y=se[k.id];Y===void 0&&(Y={},se[k.id]=Y);let Q=Y[K];return Q===void 0&&(Q=g(p()),Y[K]=Q),Q}d(v,"_");function g(N){let k=[],X=[],K=[];for(let se=0;se<a;se++)k[se]=0,X[se]=0,K[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:K,object:N,attributes:{},index:null}}d(g,"g");function m(N,k,X,K){let se=h.attributes,Y=k.attributes,Q=0,ie=X.getAttributes();for(let B in ie)if(ie[B].location>=0){let Z=se[B],pe=Y[B];if(pe===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(pe=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(pe=N.instanceColor)),Z===void 0||Z.attribute!==pe||pe&&Z.data!==pe.data)return!0;Q++}return h.attributesNum!==Q||h.index!==K}d(m,"p");function y(N,k,X,K){let se={},Y=k.attributes,Q=0,ie=X.getAttributes();for(let B in ie)if(ie[B].location>=0){let Z=Y[B];Z===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));let pe={};pe.attribute=Z,Z&&Z.data&&(pe.data=Z.data),se[B]=pe,Q++}h.attributes=se,h.attributesNum=Q,h.index=K}d(y,"v");function x(){let N=h.newAttributes;for(let k=0,X=N.length;k<X;k++)N[k]=0}d(x,"x");function M(N){A(N,0)}d(M,"M");function A(N,k){let X=h.newAttributes,K=h.enabledAttributes,se=h.attributeDivisors;X[N]=1,K[N]===0&&(e.enableVertexAttribArray(N),K[N]=1),se[N]!==k&&((r.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,k),se[N]=k)}d(A,"b");function w(){let N=h.newAttributes,k=h.enabledAttributes;for(let X=0,K=k.length;X<K;X++)k[X]!==N[X]&&(e.disableVertexAttribArray(X),k[X]=0)}d(w,"T");function P(N,k,X,K,se,Y,Q){Q===!0?e.vertexAttribIPointer(N,k,X,se,Y):e.vertexAttribPointer(N,k,X,K,se,Y)}d(P,"C");function I(N,k,X,K){if(r.isWebGL2===!1&&(N.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let se=K.attributes,Y=X.getAttributes(),Q=k.defaultAttributeValues;for(let ie in Y){let B=Y[ie];if(B.location>=0){let Z=se[ie];if(Z===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),Z!==void 0){let pe=Z.normalized,ve=Z.itemSize,Se=i.get(Z);if(Se===void 0)continue;let Re=Se.buffer,ke=Se.type,be=Se.bytesPerElement,He=r.isWebGL2===!0&&(ke===e.INT||ke===e.UNSIGNED_INT||Z.gpuType===Ql);if(Z.isInterleavedBufferAttribute){let L=Z.data,le=L.stride,ee=Z.offset;if(L.isInstancedInterleavedBuffer){for(let $=0;$<B.locationSize;$++)A(B.location+$,L.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let $=0;$<B.locationSize;$++)M(B.location+$);e.bindBuffer(e.ARRAY_BUFFER,Re);for(let $=0;$<B.locationSize;$++)P(B.location+$,ve/B.locationSize,ke,pe,le*be,(ee+ve/B.locationSize*$)*be,He)}else{if(Z.isInstancedBufferAttribute){for(let L=0;L<B.locationSize;L++)A(B.location+L,Z.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let L=0;L<B.locationSize;L++)M(B.location+L);e.bindBuffer(e.ARRAY_BUFFER,Re);for(let L=0;L<B.locationSize;L++)P(B.location+L,ve/B.locationSize,ke,pe,ve*be,ve/B.locationSize*L*be,He)}}else if(Q!==void 0){let pe=Q[ie];if(pe!==void 0)switch(pe.length){case 2:e.vertexAttrib2fv(B.location,pe);break;case 3:e.vertexAttrib3fv(B.location,pe);break;case 4:e.vertexAttrib4fv(B.location,pe);break;default:e.vertexAttrib1fv(B.location,pe)}}}}w()}d(I,"L");function S(){V();for(let N in o){let k=o[N];for(let X in k){let K=k[X];for(let se in K)_(K[se].object),delete K[se];delete k[X]}delete o[N]}}d(S,"y");function C(N){if(o[N.id]===void 0)return;let k=o[N.id];for(let X in k){let K=k[X];for(let se in K)_(K[se].object),delete K[se];delete k[X]}delete o[N.id]}d(C,"w");function O(N){for(let k in o){let X=o[k];if(X[N.id]===void 0)continue;let K=X[N.id];for(let se in K)_(K[se].object),delete K[se];delete X[N.id]}}d(O,"N");function V(){j(),u=!0,h!==l&&(h=l,f(h.object))}d(V,"k");function j(){l.geometry=null,l.program=null,l.wireframe=!1}return d(j,"$"),{setup:c,reset:V,resetDefaultState:j,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:M,disableUnusedAttributes:w}}d(pf,"R_");function mf(e,t,i,r){let a=r.isWebGL2,n;function s(u){n=u}d(s,"a");function o(u,c){e.drawArrays(n,u,c),i.update(c,n,1)}d(o,"o");function l(u,c,p){if(p===0)return;let f,_;if(a)f=e,_="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](n,u,c,p),i.update(c,n,p)}d(l,"c");function h(u,c,p){if(p===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<p;_++)this.render(u[_],c[_]);else{f.multiDrawArraysWEBGL(n,u,0,c,0,p);let _=0;for(let v=0;v<p;v++)_+=c[v];i.update(_,n,1)}}d(h,"l"),this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}d(mf,"C_");function ff(e,t,i){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}d(a,"i");function n(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}d(n,"r");let s=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext",o=i.precision!==void 0?i.precision:"highp",l=n(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let h=s||t.has("WEBGL_draw_buffers"),u=i.logarithmicDepthBuffer===!0,c=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),m=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,M=s||t.has("OES_texture_float"),A=x&&M,w=s?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:h,getMaxAnisotropy:a,getMaxPrecision:n,precision:o,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:w}}d(ff,"P_");function gf(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Gi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,p){let f=c.length!==0||p||r!==0||a;return a=p,r=c.length,f},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(c,p){i=u(c,p,0)},this.setState=function(c,p,f){let _=c.clippingPlanes,v=c.clipIntersection,g=c.clipShadows,m=e.get(c);if(!a||_===null||_.length===0||n&&!g)n?u(null):h();else{let y=n?0:r,x=y*4,M=m.clippingState||null;l.value=M,M=u(_,p,x,f);for(let A=0;A!==x;++A)M[A]=i[A];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}d(h,"l");function u(c,p,f,_){let v=c!==null?c.length:0,g=null;if(v!==0){if(g=l.value,_!==!0||g===null){let m=f+v*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,M=f;x!==v;++x,M+=4)s.copy(c[x]).applyMatrix4(y,o),s.normal.toArray(g,M),g[M+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}d(u,"h")}d(gf,"L_");function vf(e){let t=new WeakMap;function i(s,o){return o===ps?s.mapping=wr:o===ms&&(s.mapping=Ar),s}d(i,"e");function r(s){if(s&&s.isTexture){let o=s.mapping;if(o===ps||o===ms)if(t.has(s)){let l=t.get(s).texture;return i(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let h=new Rd(l.height/2);return h.fromEquirectangularTexture(e,s),t.set(s,h),s.addEventListener("dispose",a),i(h.texture,s.mapping)}else return null}}return s}d(r,"n");function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}d(a,"i");function n(){t=new WeakMap}return d(n,"r"),{get:r,dispose:n}}d(vf,"I_");var Dr=d(class extends Cs{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},"Bs"),xr=4,rl=[.125,.215,.35,.446,.526,.582],Vi=20,Kn=new Dr,al=new Te,Jn=null,Qn=0,$n=0,ki=(1+Math.sqrt(5))/2,gr=1/ki,nl=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,ki,gr),new E(0,ki,-gr),new E(gr,0,ki),new E(-gr,0,ki),new E(ki,gr,0),new E(-ki,gr,0)],on=d(class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Jn=this._renderer.getRenderTarget(),Qn=this._renderer.getActiveCubeFace(),$n=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jn,Qn,$n),e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jn=this._renderer.getRenderTarget(),Qn=this._renderer.getActiveCubeFace(),$n=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Jt,format:Gt,colorSpace:xt,depthBuffer:!1},r=sl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_f(a)),this._blurMaterial=xf(a,e,t)}return r}_compileMaterial(e){let t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,Kn)}_sceneToCubeUV(e,t,i,r){let a=new yt(90,1,t,i),n=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(al),o.toneMapping=Ei,o.autoClear=!1;let u=new Xt({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),c=new Je(new Nr,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(al),p=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(a.up.set(0,n[_],0),a.lookAt(s[_],0,0)):v===1?(a.up.set(0,0,n[_]),a.lookAt(0,s[_],0)):(a.up.set(0,n[_],0),a.lookAt(0,0,s[_]));let g=this._cubeSize;Oa(r,v*g,_>2?g:0,g,g),o.setRenderTarget(r),p&&o.render(c,a),o.render(e,a)}c.geometry.dispose(),c.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===wr||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());let a=r?this._cubemapMaterial:this._equirectMaterial,n=new Je(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Oa(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Kn)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),n=nl[(r-1)%nl.length];this._blur(e,r-1,r,a,n)}t.autoClear=i}_blur(e,t,i,r,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",a),this._halfBlur(n,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Je(this._lodPlanes[r],l),c=l.uniforms,p=this._sizeLods[i]-1,f=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),_=a/f,v=isFinite(a)?1+Math.floor(h*_):Vi;v>Vi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Vi}`);let g=[],m=0;for(let w=0;w<Vi;++w){let P=w/_,I=Math.exp(-P*P/2);g.push(I),w===0?m+=I:w<v&&(m+=2*I)}for(let w=0;w<g.length;w++)g[w]=g[w]/m;c.envMap.value=e.texture,c.samples.value=v,c.weights.value=g,c.latitudinal.value=n==="latitudinal",s&&(c.poleAxis.value=s);let{_lodMax:y}=this;c.dTheta.value=f,c.mipInt.value=y-i;let x=this._sizeLods[r],M=3*x*(r>y-xr?r-y+xr:0),A=4*(this._cubeSize-x);Oa(t,M,A,3*x,2*x),o.setRenderTarget(t),o.render(u,Kn)}},"ca");function _f(e){let t=[],i=[],r=[],a=e,n=e-xr+1+rl.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);i.push(o);let l=1/o;s>e-xr?l=rl[s-e+xr-1]:s===0&&(l=0),r.push(l);let h=1/(o-2),u=-h,c=1+h,p=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,_=6,v=3,g=2,m=1,y=new Float32Array(v*_*f),x=new Float32Array(g*_*f),M=new Float32Array(m*_*f);for(let w=0;w<f;w++){let P=w%3*2/3-1,I=w>2?0:-1,S=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];y.set(S,v*_*w),x.set(p,g*_*w);let C=[w,w,w,w,w,w];M.set(C,m*_*w)}let A=new it;A.setAttribute("position",new Mt(y,v)),A.setAttribute("uv",new Mt(x,g)),A.setAttribute("faceIndex",new Mt(M,m)),t.push(A),a>xr&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}d(_f,"U_");function sl(e,t,i){let r=new Dt(e,t,i);return r.texture.mapping=hn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}d(sl,"Ih");function Oa(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}d(Oa,"_r");function xf(e,t,i){let r=new Float32Array(Vi),a=new E(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}d(xf,"D_");function ol(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}d(ol,"Uh");function ll(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}d(ll,"Dh");function Ls(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}d(Ls,"ul");function yf(e){let t=new WeakMap,i=null;function r(o){if(o&&o.isTexture){let l=o.mapping,h=l===ps||l===ms,u=l===wr||l===Ar;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let c=t.get(o);return i===null&&(i=new on(e)),c=h?i.fromEquirectangular(o,c):i.fromCubemap(o,c),t.set(o,c),c.texture}else{if(t.has(o))return t.get(o).texture;{let c=o.image;if(h&&c&&c.height>0||u&&c&&a(c)){i===null&&(i=new on(e));let p=h?i.fromEquirectangular(o):i.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",n),p.texture}else return null}}}return o}d(r,"n");function a(o){let l=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}d(a,"i");function n(o){let l=o.target;l.removeEventListener("dispose",n);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}d(n,"r");function s(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return d(s,"a"),{get:r,dispose:s}}d(yf,"N_");function Mf(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(r)}return t[r]=a,a}return d(i,"e"),{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){let a=i(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}d(Mf,"O_");function bf(e,t,i,r){let a={},n=new WeakMap;function s(c){let p=c.target;p.index!==null&&t.remove(p.index);for(let _ in p.attributes)t.remove(p.attributes[_]);for(let _ in p.morphAttributes){let v=p.morphAttributes[_];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}p.removeEventListener("dispose",s),delete a[p.id];let f=n.get(p);f&&(t.remove(f),n.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,i.memory.geometries--}d(s,"a");function o(c,p){return a[p.id]===!0||(p.addEventListener("dispose",s),a[p.id]=!0,i.memory.geometries++),p}d(o,"o");function l(c){let p=c.attributes;for(let _ in p)t.update(p[_],e.ARRAY_BUFFER);let f=c.morphAttributes;for(let _ in f){let v=f[_];for(let g=0,m=v.length;g<m;g++)t.update(v[g],e.ARRAY_BUFFER)}}d(l,"c");function h(c){let p=[],f=c.index,_=c.attributes.position,v=0;if(f!==null){let y=f.array;v=f.version;for(let x=0,M=y.length;x<M;x+=3){let A=y[x+0],w=y[x+1],P=y[x+2];p.push(A,w,w,P,P,A)}}else if(_!==void 0){let y=_.array;v=_.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let A=x+0,w=x+1,P=x+2;p.push(A,w,w,P,P,A)}}else return;let g=new(dh(p)?Sh:bh)(p,1);g.version=v;let m=n.get(c);m&&t.remove(m),n.set(c,g)}d(h,"l");function u(c){let p=n.get(c);if(p){let f=c.index;f!==null&&p.version<f.version&&h(c)}else h(c);return n.get(c)}return d(u,"h"),{get:o,update:l,getWireframeAttribute:u}}d(bf,"F_");function Sf(e,t,i,r){let a=r.isWebGL2,n;function s(f){n=f}d(s,"a");let o,l;function h(f){o=f.type,l=f.bytesPerElement}d(h,"l");function u(f,_){e.drawElements(n,_,o,f*l),i.update(_,n,1)}d(u,"h");function c(f,_,v){if(v===0)return;let g,m;if(a)g=e,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](n,_,o,f*l,v),i.update(_,n,v)}d(c,"u");function p(f,_,v){if(v===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(f[m]/l,_[m]);else{g.multiDrawElementsWEBGL(n,_,0,o,f,0,v);let m=0;for(let y=0;y<v;y++)m+=_[y];i.update(m,n,1)}}d(p,"d"),this.setMode=s,this.setIndex=h,this.render=u,this.renderInstances=c,this.renderMultiDraw=p}d(Sf,"B_");function Tf(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}d(r,"n");function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return d(a,"i"),{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}d(Tf,"z_");function wf(e,t){return e[0]-t[0]}d(wf,"V_");function Af(e,t){return Math.abs(t[1])-Math.abs(e[1])}d(Af,"k_");function Ef(e,t,i){let r={},a=new Float32Array(8),n=new WeakMap,s=new tt,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,u,c){let p=h.morphTargetInfluences;if(t.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=f!==void 0?f.length:0,v=n.get(u);if(v===void 0||v.count!==_){let y=d(function(){j.dispose(),n.delete(u),u.removeEventListener("dispose",y)},"I");v!==void 0&&v.texture.dispose();let x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],I=u.morphAttributes.color||[],S=0;x===!0&&(S=1),M===!0&&(S=2),A===!0&&(S=3);let C=u.attributes.position.count*S,O=1;C>t.maxTextureSize&&(O=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let V=new Float32Array(C*O*4*_),j=new gh(V,C,O,_);j.type=vi,j.needsUpdate=!0;let N=S*4;for(let k=0;k<_;k++){let X=w[k],K=P[k],se=I[k],Y=C*O*4*k;for(let Q=0;Q<X.count;Q++){let ie=Q*N;x===!0&&(s.fromBufferAttribute(X,Q),V[Y+ie+0]=s.x,V[Y+ie+1]=s.y,V[Y+ie+2]=s.z,V[Y+ie+3]=0),M===!0&&(s.fromBufferAttribute(K,Q),V[Y+ie+4]=s.x,V[Y+ie+5]=s.y,V[Y+ie+6]=s.z,V[Y+ie+7]=0),A===!0&&(s.fromBufferAttribute(se,Q),V[Y+ie+8]=s.x,V[Y+ie+9]=s.y,V[Y+ie+10]=s.z,V[Y+ie+11]=se.itemSize===4?s.w:1)}}v={count:_,texture:j,size:new q(C,O)},n.set(u,v),u.addEventListener("dispose",y)}let g=0;for(let y=0;y<p.length;y++)g+=p[y];let m=u.morphTargetsRelative?1:1-g;c.getUniforms().setValue(e,"morphTargetBaseInfluence",m),c.getUniforms().setValue(e,"morphTargetInfluences",p),c.getUniforms().setValue(e,"morphTargetsTexture",v.texture,i),c.getUniforms().setValue(e,"morphTargetsTextureSize",v.size)}else{let f=p===void 0?0:p.length,_=r[u.id];if(_===void 0||_.length!==f){_=[];for(let x=0;x<f;x++)_[x]=[x,0];r[u.id]=_}for(let x=0;x<f;x++){let M=_[x];M[0]=x,M[1]=p[x]}_.sort(Af);for(let x=0;x<8;x++)x<f&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(wf);let v=u.morphAttributes.position,g=u.morphAttributes.normal,m=0;for(let x=0;x<8;x++){let M=o[x],A=M[0],w=M[1];A!==Number.MAX_SAFE_INTEGER&&w?(v&&u.getAttribute("morphTarget"+x)!==v[A]&&u.setAttribute("morphTarget"+x,v[A]),g&&u.getAttribute("morphNormal"+x)!==g[A]&&u.setAttribute("morphNormal"+x,g[A]),a[x]=w,m+=w):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),g&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),a[x]=0)}let y=u.morphTargetsRelative?1:1-m;c.getUniforms().setValue(e,"morphTargetBaseInfluence",y),c.getUniforms().setValue(e,"morphTargetInfluences",a)}}return d(l,"c"),{update:l}}d(Ef,"H_");function Rf(e,t,i,r){let a=new WeakMap;function n(l){let h=r.render.frame,u=l.geometry,c=t.get(l,u);if(a.get(c)!==h&&(t.update(c),a.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;a.get(p)!==h&&(p.update(),a.set(p,h))}return c}d(n,"r");function s(){a=new WeakMap}d(s,"a");function o(l){let h=l.target;h.removeEventListener("dispose",o),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return d(o,"o"),{update:n,dispose:s}}d(Rf,"G_");var Ph=d(class extends Pt{constructor(e,t,i,r,a,n,s,o,l,h){if(h=h!==void 0?h:Xi,h!==Xi&&h!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Xi&&(i=wi),i===void 0&&h===Er&&(i=Wi),super(null,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:mt,this.minFilter=o!==void 0?o:mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},"la"),Ih=new Pt,Nh=new Ph(1,1);Nh.compareFunction=lh;var Uh=new gh,Dh=new cd,Oh=new Eh,hl=[],ul=[],cl=new Float32Array(16),dl=new Float32Array(9),pl=new Float32Array(4);function Or(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=hl[a];if(n===void 0&&(n=new Float32Array(a),hl[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}d(Or,"ds");function gt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}d(gt,"_e");function vt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}d(vt,"xe");function mn(e,t){let i=ul[t];i===void 0&&(i=new Int32Array(t),ul[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}d(mn,"Ia");function Cf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}d(Cf,"W_");function Lf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gt(i,t))return;e.uniform2fv(this.addr,t),vt(i,t)}}d(Lf,"X_");function Pf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gt(i,t))return;e.uniform3fv(this.addr,t),vt(i,t)}}d(Pf,"q_");function If(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gt(i,t))return;e.uniform4fv(this.addr,t),vt(i,t)}}d(If,"Y_");function Nf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(gt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),vt(i,t)}else{if(gt(i,r))return;pl.set(r),e.uniformMatrix2fv(this.addr,!1,pl),vt(i,r)}}d(Nf,"Z_");function Uf(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(gt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),vt(i,t)}else{if(gt(i,r))return;dl.set(r),e.uniformMatrix3fv(this.addr,!1,dl),vt(i,r)}}d(Uf,"J_");function Df(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(gt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),vt(i,t)}else{if(gt(i,r))return;cl.set(r),e.uniformMatrix4fv(this.addr,!1,cl),vt(i,r)}}d(Df,"$_");function Of(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}d(Of,"K_");function Bf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gt(i,t))return;e.uniform2iv(this.addr,t),vt(i,t)}}d(Bf,"Q_");function Ff(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gt(i,t))return;e.uniform3iv(this.addr,t),vt(i,t)}}d(Ff,"j_");function zf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gt(i,t))return;e.uniform4iv(this.addr,t),vt(i,t)}}d(zf,"t0");function Gf(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}d(Gf,"e0");function kf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gt(i,t))return;e.uniform2uiv(this.addr,t),vt(i,t)}}d(kf,"n0");function Hf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gt(i,t))return;e.uniform3uiv(this.addr,t),vt(i,t)}}d(Hf,"i0");function Vf(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gt(i,t))return;e.uniform4uiv(this.addr,t),vt(i,t)}}d(Vf,"s0");function Wf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n=this.type===e.SAMPLER_2D_SHADOW?Nh:Ih;i.setTexture2D(t||n,a)}d(Wf,"r0");function Xf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Dh,a)}d(Xf,"a0");function jf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Oh,a)}d(jf,"o0");function qf(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Uh,a)}d(qf,"c0");function Yf(e){switch(e){case 5126:return Cf;case 35664:return Lf;case 35665:return Pf;case 35666:return If;case 35674:return Nf;case 35675:return Uf;case 35676:return Df;case 5124:case 35670:return Of;case 35667:case 35671:return Bf;case 35668:case 35672:return Ff;case 35669:case 35673:return zf;case 5125:return Gf;case 36294:return kf;case 36295:return Hf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return qf}}d(Yf,"l0");function Zf(e,t){e.uniform1fv(this.addr,t)}d(Zf,"h0");function Kf(e,t){let i=Or(t,this.size,2);e.uniform2fv(this.addr,i)}d(Kf,"u0");function Jf(e,t){let i=Or(t,this.size,3);e.uniform3fv(this.addr,i)}d(Jf,"d0");function Qf(e,t){let i=Or(t,this.size,4);e.uniform4fv(this.addr,i)}d(Qf,"f0");function $f(e,t){let i=Or(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}d($f,"p0");function eg(e,t){let i=Or(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}d(eg,"m0");function tg(e,t){let i=Or(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}d(tg,"g0");function ig(e,t){e.uniform1iv(this.addr,t)}d(ig,"_0");function rg(e,t){e.uniform2iv(this.addr,t)}d(rg,"x0");function ag(e,t){e.uniform3iv(this.addr,t)}d(ag,"v0");function ng(e,t){e.uniform4iv(this.addr,t)}d(ng,"y0");function sg(e,t){e.uniform1uiv(this.addr,t)}d(sg,"M0");function og(e,t){e.uniform2uiv(this.addr,t)}d(og,"S0");function lg(e,t){e.uniform3uiv(this.addr,t)}d(lg,"b0");function hg(e,t){e.uniform4uiv(this.addr,t)}d(hg,"E0");function ug(e,t,i){let r=this.cache,a=t.length,n=mn(i,a);gt(r,n)||(e.uniform1iv(this.addr,n),vt(r,n));for(let s=0;s!==a;++s)i.setTexture2D(t[s]||Ih,n[s])}d(ug,"T0");function cg(e,t,i){let r=this.cache,a=t.length,n=mn(i,a);gt(r,n)||(e.uniform1iv(this.addr,n),vt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Dh,n[s])}d(cg,"A0");function dg(e,t,i){let r=this.cache,a=t.length,n=mn(i,a);gt(r,n)||(e.uniform1iv(this.addr,n),vt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||Oh,n[s])}d(dg,"w0");function pg(e,t,i){let r=this.cache,a=t.length,n=mn(i,a);gt(r,n)||(e.uniform1iv(this.addr,n),vt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Uh,n[s])}d(pg,"R0");function mg(e){switch(e){case 5126:return Zf;case 35664:return Kf;case 35665:return Jf;case 35666:return Qf;case 35674:return $f;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ig;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return ng;case 5125:return sg;case 36294:return og;case 36295:return lg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return pg}}d(mg,"C0");var fg=d(class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yf(t.type)}},"No"),gg=d(class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mg(t.type)}},"Oo"),vg=d(class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},"Fo"),es=/(\w+)(\])?(\[|\.)?/g;function ml(e,t){e.seq.push(t),e.map[t.id]=t}d(ml,"Vh");function _g(e,t,i){let r=e.name,a=r.length;for(es.lastIndex=0;;){let n=es.exec(r),s=es.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){ml(i,h===void 0?new fg(o,e,t):new gg(o,e,t));break}else{let u=i.map[o];u===void 0&&(u=new vg(o),ml(i,u)),i=u}}}d(_g,"P0");var Ja=d(class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r),n=e.getUniformLocation(t,a.name);_g(a,n,this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}},"Ki");function fl(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}d(fl,"kh");var xg=37297,yg=0;function Mg(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}d(Mg,"U0");function bg(e){let t=Ke.getPrimaries(Ke.workingColorSpace),i=Ke.getPrimaries(e),r;switch(t===i?r="":t===an&&i===rn?r="LinearDisplayP3ToLinearSRGB":t===rn&&i===an&&(r="LinearSRGBToLinearDisplayP3"),e){case xt:case cn:return[r,"LinearTransferOETF"];case nt:case Es:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[r,"LinearTransferOETF"]}}d(bg,"D0");function gl(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Mg(e.getShaderSource(t),s)}else return a}d(gl,"Hh");function Sg(e,t){let i=bg(t);return`vec4 ${e}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}d(Sg,"N0");function Tg(e,t){let i;switch(t){case Mc:i="Linear";break;case bc:i="Reinhard";break;case Sc:i="OptimizedCineon";break;case Tc:i="ACESFilmic";break;case wc:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}d(Tg,"O0");function wg(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qr).join(`
`)}d(wg,"F0");function Ag(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}d(Ag,"B0");function Eg(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}d(Eg,"z0");function Qr(e){return e!==""}d(Qr,"As");function vl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}d(vl,"Gh");function _l(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}d(_l,"Wh");var Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function xs(e){return e.replace(Rg,Lg)}d(xs,"Bo");var Cg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lg(e,t){let i=Oe[t];if(i===void 0){let r=Cg.get(t);if(r!==void 0)i=Oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return xs(i)}d(Lg,"H0");var Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(e){return e.replace(Pg,Ig)}d(xl,"Xh");function Ig(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}d(Ig,"W0");function yl(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}d(yl,"qh");function Ng(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Zu?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}d(Ng,"X0");function Ug(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case wr:case Ar:t="ENVMAP_TYPE_CUBE";break;case hn:t="ENVMAP_TYPE_CUBE_UV";break}return t}d(Ug,"q0");function Dg(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}d(Dg,"Y0");function Og(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Kl:t="ENVMAP_BLENDING_MULTIPLY";break;case xc:t="ENVMAP_BLENDING_MIX";break;case yc:t="ENVMAP_BLENDING_ADD";break}return t}d(Og,"Z0");function Bg(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}d(Bg,"J0");function Fg(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=Ng(i),h=Ug(i),u=Dg(i),c=Og(i),p=Bg(i),f=i.isWebGL2?"":wg(i),_=Ag(n),v=a.createProgram(),g,m,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Qr).join(`
`),g.length>0&&(g+=`
`),m=[f,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Qr).join(`
`),m.length>0&&(m+=`
`)):(g=[yl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),m=[f,yl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+c:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ei?"#define TONE_MAPPING":"",i.toneMapping!==Ei?Oe.tonemapping_pars_fragment:"",i.toneMapping!==Ei?Tg("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Sg("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qr).join(`
`)),s=xs(s),s=vl(s,i),s=_l(s,i),o=xs(o),o=vl(o,i),o=_l(o,i),s=xl(s),o=xl(o),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=y+g+s,M=y+m+o,A=fl(a,a.VERTEX_SHADER,x),w=fl(a,a.FRAGMENT_SHADER,M);a.attachShader(v,A),a.attachShader(v,w),i.index0AttributeName!==void 0?a.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function P(O){if(e.debug.checkShaderErrors){let V=a.getProgramInfoLog(v).trim(),j=a.getShaderInfoLog(A).trim(),N=a.getShaderInfoLog(w).trim(),k=!0,X=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,v,A,w);else{let K=gl(a,A,"vertex"),se=gl(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+K+`
`+se)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(j===""||N==="")&&(X=!1);X&&(O.diagnostics={runnable:k,programLog:V,vertexShader:{log:j,prefix:g},fragmentShader:{log:N,prefix:m}})}a.deleteShader(A),a.deleteShader(w),I=new Ja(a,v),S=Eg(a,v)}d(P,"C");let I;this.getUniforms=function(){return I===void 0&&P(this),I};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(v,xg)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}d(Fg,"$0");var zg=0,Gg=d(class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new kg(e),t.set(e,i)),i}},"zo"),kg=d(class{constructor(e){this.id=zg++,this.code=e,this.usedTimes=0}},"Vo");function Hg(e,t,i,r,a,n,s){let o=new yh,l=new Gg,h=[],u=a.isWebGL2,c=a.logarithmicDepthBuffer,p=a.vertexTextures,f=a.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}d(v,"_");function g(S,C,O,V,j){let N=V.fog,k=j.geometry,X=S.isMeshStandardMaterial?V.environment:null,K=(S.isMeshStandardMaterial?i:t).get(S.envMap||X),se=K&&K.mapping===hn?K.image.height:null,Y=_[S.type];S.precision!==null&&(f=a.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ie=Q!==void 0?Q.length:0,B=0;k.morphAttributes.position!==void 0&&(B=1),k.morphAttributes.normal!==void 0&&(B=2),k.morphAttributes.color!==void 0&&(B=3);let Z,pe,ve,Se;if(Y){let lt=ii[Y];Z=lt.vertexShader,pe=lt.fragmentShader}else Z=S.vertexShader,pe=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),Se=l.getFragmentShaderID(S);let Re=e.getRenderTarget(),ke=j.isInstancedMesh===!0,be=j.isBatchedMesh===!0,He=!!S.map,L=!!S.matcap,le=!!K,ee=!!S.aoMap,$=!!S.lightMap,J=!!S.bumpMap,_e=!!S.normalMap,fe=!!S.displacementMap,xe=!!S.emissiveMap,Be=!!S.metalnessMap,Ne=!!S.roughnessMap,ot=S.anisotropy>0,dt=S.clearcoat>0,R=S.iridescence>0,b=S.sheen>0,z=S.transmission>0,oe=ot&&!!S.anisotropyMap,re=dt&&!!S.clearcoatMap,te=dt&&!!S.clearcoatNormalMap,ye=dt&&!!S.clearcoatRoughnessMap,he=R&&!!S.iridescenceMap,Me=R&&!!S.iridescenceThicknessMap,Ie=b&&!!S.sheenColorMap,Ye=b&&!!S.sheenRoughnessMap,ae=!!S.specularMap,$e=!!S.specularColorMap,Fe=!!S.specularIntensityMap,De=z&&!!S.transmissionMap,ge=z&&!!S.thicknessMap,Ae=!!S.gradientMap,We=!!S.alphaMap,U=S.alphaTest>0,me=!!S.alphaHash,ne=!!S.extensions,W=!!k.attributes.uv1,ue=!!k.attributes.uv2,we=!!k.attributes.uv3,rt=Ei;return S.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(rt=e.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:pe,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:Se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:be,instancing:ke,instancingColor:ke&&j.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Re===null?e.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:xt,map:He,matcap:L,envMap:le,envMapMode:le&&K.mapping,envMapCubeUVHeight:se,aoMap:ee,lightMap:$,bumpMap:J,normalMap:_e,displacementMap:p&&fe,emissiveMap:xe,normalMapObjectSpace:_e&&S.normalMapType===Fc,normalMapTangentSpace:_e&&S.normalMapType===oh,metalnessMap:Be,roughnessMap:Ne,anisotropy:ot,anisotropyMap:oe,clearcoat:dt,clearcoatMap:re,clearcoatNormalMap:te,clearcoatRoughnessMap:ye,iridescence:R,iridescenceMap:he,iridescenceThicknessMap:Me,sheen:b,sheenColorMap:Ie,sheenRoughnessMap:Ye,specularMap:ae,specularColorMap:$e,specularIntensityMap:Fe,transmission:z,transmissionMap:De,thicknessMap:ge,gradientMap:Ae,opaque:S.transparent===!1&&S.blending===Mr,alphaMap:We,alphaTest:U,alphaHash:me,combine:S.combine,mapUv:He&&v(S.map.channel),aoMapUv:ee&&v(S.aoMap.channel),lightMapUv:$&&v(S.lightMap.channel),bumpMapUv:J&&v(S.bumpMap.channel),normalMapUv:_e&&v(S.normalMap.channel),displacementMapUv:fe&&v(S.displacementMap.channel),emissiveMapUv:xe&&v(S.emissiveMap.channel),metalnessMapUv:Be&&v(S.metalnessMap.channel),roughnessMapUv:Ne&&v(S.roughnessMap.channel),anisotropyMapUv:oe&&v(S.anisotropyMap.channel),clearcoatMapUv:re&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&v(S.sheenRoughnessMap.channel),specularMapUv:ae&&v(S.specularMap.channel),specularColorMapUv:$e&&v(S.specularColorMap.channel),specularIntensityMapUv:Fe&&v(S.specularIntensityMap.channel),transmissionMapUv:De&&v(S.transmissionMap.channel),thicknessMapUv:ge&&v(S.thicknessMap.channel),alphaMapUv:We&&v(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(_e||ot),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:W,vertexUv2s:ue,vertexUv3s:we,pointsUvs:j.isPoints===!0&&!!k.attributes.uv&&(He||We),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:j.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:B,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&O.length>0,shadowMapType:e.shadowMap.type,toneMapping:rt,useLegacyLights:e._useLegacyLights,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Kt,flipSided:S.side===At,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ne&&S.extensions.derivatives===!0,extensionFragDepth:ne&&S.extensions.fragDepth===!0,extensionDrawBuffers:ne&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}d(g,"g");function m(S){let C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(let O in S.defines)C.push(O),C.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(y(C,S),x(C,S),C.push(e.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}d(m,"p");function y(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}d(y,"v");function x(S,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),S.push(o.mask)}d(x,"x");function M(S){let C=_[S.type],O;if(C){let V=ii[C];O=Ur.clone(V.uniforms)}else O=S.uniforms;return O}d(M,"M");function A(S,C){let O;for(let V=0,j=h.length;V<j;V++){let N=h[V];if(N.cacheKey===C){O=N,++O.usedTimes;break}}return O===void 0&&(O=new Fg(e,C,S,n),h.push(O)),O}d(A,"b");function w(S){if(--S.usedTimes===0){let C=h.indexOf(S);h[C]=h[h.length-1],h.pop(),S.destroy()}}d(w,"T");function P(S){l.remove(S)}d(P,"C");function I(){l.dispose()}return d(I,"L"),{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:A,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:I}}d(Hg,"Q0");function Vg(){let e=new WeakMap;function t(n){let s=e.get(n);return s===void 0&&(s={},e.set(n,s)),s}d(t,"t");function i(n){e.delete(n)}d(i,"e");function r(n,s,o){e.get(n)[s]=o}d(r,"n");function a(){e=new WeakMap}return d(a,"i"),{get:t,remove:i,update:r,dispose:a}}d(Vg,"j0");function Wg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}d(Wg,"tx");function Ml(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}d(Ml,"Yh");function bl(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}d(n,"r");function s(c,p,f,_,v,g){let m=e[t];return m===void 0?(m={id:c.id,object:c,geometry:p,material:f,groupOrder:_,renderOrder:c.renderOrder,z:v,group:g},e[t]=m):(m.id=c.id,m.object=c,m.geometry=p,m.material=f,m.groupOrder=_,m.renderOrder=c.renderOrder,m.z=v,m.group=g),t++,m}d(s,"a");function o(c,p,f,_,v,g){let m=s(c,p,f,_,v,g);f.transmission>0?r.push(m):f.transparent===!0?a.push(m):i.push(m)}d(o,"o");function l(c,p,f,_,v,g){let m=s(c,p,f,_,v,g);f.transmission>0?r.unshift(m):f.transparent===!0?a.unshift(m):i.unshift(m)}d(l,"c");function h(c,p){i.length>1&&i.sort(c||Wg),r.length>1&&r.sort(p||Ml),a.length>1&&a.sort(p||Ml)}d(h,"l");function u(){for(let c=t,p=e.length;c<p;c++){let f=e[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return d(u,"h"),{opaque:i,transmissive:r,transparent:a,init:n,push:o,unshift:l,finish:u,sort:h}}d(bl,"Zh");function Xg(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new bl,e.set(r,[s])):a>=n.length?(s=new bl,n.push(s)):s=n[a],s}d(t,"t");function i(){e=new WeakMap}return d(i,"e"),{get:t,dispose:i}}d(Xg,"ex");function jg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new E,color:new Te};break;case"SpotLight":i={position:new E,direction:new E,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new E,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new E,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new E,halfWidth:new E,halfHeight:new E};break}return e[t.id]=i,i}}}d(jg,"nx");function qg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}d(qg,"ix");var Yg=0;function Zg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}d(Zg,"rx");function Kg(e,t){let i=new jg,r=qg(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)a.probe.push(new E);let n=new E,s=new Le,o=new Le;function l(u,c){let p=0,f=0,_=0;for(let V=0;V<9;V++)a.probe[V].set(0,0,0);let v=0,g=0,m=0,y=0,x=0,M=0,A=0,w=0,P=0,I=0,S=0;u.sort(Zg);let C=c===!0?Math.PI:1;for(let V=0,j=u.length;V<j;V++){let N=u[V],k=N.color,X=N.intensity,K=N.distance,se=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=k.r*X*C,f+=k.g*X*C,_+=k.b*X*C;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)a.probe[Y].addScaledVector(N.sh.coefficients[Y],X);S++}else if(N.isDirectionalLight){let Y=i.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*C),N.castShadow){let Q=N.shadow,ie=r.get(N);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,a.directionalShadow[v]=ie,a.directionalShadowMap[v]=se,a.directionalShadowMatrix[v]=N.shadow.matrix,M++}a.directional[v]=Y,v++}else if(N.isSpotLight){let Y=i.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(k).multiplyScalar(X*C),Y.distance=K,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,a.spot[m]=Y;let Q=N.shadow;if(N.map&&(a.spotLightMap[P]=N.map,P++,Q.updateMatrices(N),N.castShadow&&I++),a.spotLightMatrix[m]=Q.matrix,N.castShadow){let ie=r.get(N);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,a.spotShadow[m]=ie,a.spotShadowMap[m]=se,w++}m++}else if(N.isRectAreaLight){let Y=i.get(N);Y.color.copy(k).multiplyScalar(X),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),a.rectArea[y]=Y,y++}else if(N.isPointLight){let Y=i.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*C),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let Q=N.shadow,ie=r.get(N);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,ie.shadowCameraNear=Q.camera.near,ie.shadowCameraFar=Q.camera.far,a.pointShadow[g]=ie,a.pointShadowMap[g]=se,a.pointShadowMatrix[g]=N.shadow.matrix,A++}a.point[g]=Y,g++}else if(N.isHemisphereLight){let Y=i.get(N);Y.skyColor.copy(N.color).multiplyScalar(X*C),Y.groundColor.copy(N.groundColor).multiplyScalar(X*C),a.hemi[x]=Y,x++}}y>0&&(t.isWebGL2||e.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=de.LTC_FLOAT_1,a.rectAreaLTC2=de.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=de.LTC_HALF_1,a.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=p,a.ambient[1]=f,a.ambient[2]=_;let O=a.hash;(O.directionalLength!==v||O.pointLength!==g||O.spotLength!==m||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==M||O.numPointShadows!==A||O.numSpotShadows!==w||O.numSpotMaps!==P||O.numLightProbes!==S)&&(a.directional.length=v,a.spot.length=m,a.rectArea.length=y,a.point.length=g,a.hemi.length=x,a.directionalShadow.length=M,a.directionalShadowMap.length=M,a.pointShadow.length=A,a.pointShadowMap.length=A,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=M,a.pointShadowMatrix.length=A,a.spotLightMatrix.length=w+P-I,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=S,O.directionalLength=v,O.pointLength=g,O.spotLength=m,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=M,O.numPointShadows=A,O.numSpotShadows=w,O.numSpotMaps=P,O.numLightProbes=S,a.version=Yg++)}d(l,"c");function h(u,c){let p=0,f=0,_=0,v=0,g=0,m=c.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){let M=u[y];if(M.isDirectionalLight){let A=a.directional[p];A.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),p++}else if(M.isSpotLight){let A=a.spot[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),_++}else if(M.isRectAreaLight){let A=a.rectArea[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let A=a.point[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let A=a.hemi[g];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),g++}}}return d(h,"l"),{setup:l,setupView:h,state:a}}d(Kg,"ax");function Sl(e,t){let i=new Kg(e,t),r=[],a=[];function n(){r.length=0,a.length=0}d(n,"r");function s(u){r.push(u)}d(s,"a");function o(u){a.push(u)}d(o,"o");function l(u){i.setup(r,u)}d(l,"c");function h(u){i.setupView(r,u)}return d(h,"l"),{init:n,state:{lightsArray:r,shadowsArray:a,lights:i},setupLights:l,setupLightsView:h,pushLight:s,pushShadow:o}}d(Sl,"Jh");function Jg(e,t){let i=new WeakMap;function r(n,s=0){let o=i.get(n),l;return o===void 0?(l=new Sl(e,t),i.set(n,[l])):s>=o.length?(l=new Sl(e,t),o.push(l)):l=o[s],l}d(r,"n");function a(){i=new WeakMap}return d(a,"i"),{get:r,dispose:a}}d(Jg,"ox");var Qg=d(class extends $t{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},"ha"),$g=d(class extends $t{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},"ua"),e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i0(e,t,i){let r=new pn,a=new q,n=new q,s=new tt,o=new Qg({depthPacking:Bc}),l=new $g,h={},u=i.maxTextureSize,c={[ni]:At,[At]:ni,[Kt]:Kt},p=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:e0,fragmentShader:t0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let _=new it;_.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Je(_,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let m=this.type;this.render=function(A,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let I=e.getRenderTarget(),S=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),O=e.state;O.setBlending(ai),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=m!==gi&&this.type===gi,j=m===gi&&this.type!==gi;for(let N=0,k=A.length;N<k;N++){let X=A[N],K=X.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;a.copy(K.mapSize);let se=K.getFrameExtents();if(a.multiply(se),n.copy(K.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/se.x),a.x=n.x*se.x,K.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/se.y),a.y=n.y*se.y,K.mapSize.y=n.y)),K.map===null||V===!0||j===!0){let Q=this.type!==gi?{minFilter:mt,magFilter:mt}:{};K.map!==null&&K.map.dispose(),K.map=new Dt(a.x,a.y,Q),K.map.texture.name=X.name+".shadowMap",K.camera.updateProjectionMatrix()}e.setRenderTarget(K.map),e.clear();let Y=K.getViewportCount();for(let Q=0;Q<Y;Q++){let ie=K.getViewport(Q);s.set(n.x*ie.x,n.y*ie.y,n.x*ie.z,n.y*ie.w),O.viewport(s),K.updateMatrices(X,Q),r=K.getFrustum(),M(w,P,K.camera,X,this.type)}K.isPointLightShadow!==!0&&this.type===gi&&y(K,P),K.needsUpdate=!1}m=this.type,g.needsUpdate=!1,e.setRenderTarget(I,S,C)};function y(A,w){let P=t.update(v);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dt(a.x,a.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(w,null,P,p,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(w,null,P,f,v,null)}d(y,"v");function x(A,w,P,I){let S=null,C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)S=C;else if(S=P.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let O=S.uuid,V=w.uuid,j=h[O];j===void 0&&(j={},h[O]=j);let N=j[V];N===void 0&&(N=S.clone(),j[V]=N),S=N}if(S.visible=w.visible,S.wireframe=w.wireframe,I===gi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:c[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=e.properties.get(S);O.light=P}return S}d(x,"x");function M(A,w,P,I,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===gi)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let O=t.update(A),V=A.material;if(Array.isArray(V)){let j=O.groups;for(let N=0,k=j.length;N<k;N++){let X=j[N],K=V[X.materialIndex];if(K&&K.visible){let se=x(A,K,I,S);A.onBeforeShadow(e,A,w,P,O,se,X),e.renderBufferDirect(P,null,O,se,A,X),A.onAfterShadow(e,A,w,P,O,se,X)}}}else if(V.visible){let j=x(A,V,I,S);A.onBeforeShadow(e,A,w,P,O,j,null),e.renderBufferDirect(P,null,O,j,A,null),A.onAfterShadow(e,A,w,P,O,j,null)}}let C=A.children;for(let O=0,V=C.length;O<V;O++)M(C[O],w,P,I,S)}d(M,"M")}d(i0,"hx");function r0(e,t,i){let r=i.isWebGL2;function a(){let U=!1,me=new tt,ne=null,W=new tt(0,0,0,0);return{setMask:function(ue){ne!==ue&&!U&&(e.colorMask(ue,ue,ue,ue),ne=ue)},setLocked:function(ue){U=ue},setClear:function(ue,we,rt,lt,Ot){Ot===!0&&(ue*=lt,we*=lt,rt*=lt),me.set(ue,we,rt,lt),W.equals(me)===!1&&(e.clearColor(ue,we,rt,lt),W.copy(me))},reset:function(){U=!1,ne=null,W.set(-1,0,0,0)}}}d(a,"i");function n(){let U=!1,me=null,ne=null,W=null;return{setTest:function(ue){ue?be(e.DEPTH_TEST):He(e.DEPTH_TEST)},setMask:function(ue){me!==ue&&!U&&(e.depthMask(ue),me=ue)},setFunc:function(ue){if(ne!==ue){switch(ue){case dc:e.depthFunc(e.NEVER);break;case pc:e.depthFunc(e.ALWAYS);break;case mc:e.depthFunc(e.LESS);break;case $a:e.depthFunc(e.LEQUAL);break;case fc:e.depthFunc(e.EQUAL);break;case gc:e.depthFunc(e.GEQUAL);break;case vc:e.depthFunc(e.GREATER);break;case _c:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ne=ue}},setLocked:function(ue){U=ue},setClear:function(ue){W!==ue&&(e.clearDepth(ue),W=ue)},reset:function(){U=!1,me=null,ne=null,W=null}}}d(n,"r");function s(){let U=!1,me=null,ne=null,W=null,ue=null,we=null,rt=null,lt=null,Ot=null;return{setTest:function(Ze){U||(Ze?be(e.STENCIL_TEST):He(e.STENCIL_TEST))},setMask:function(Ze){me!==Ze&&!U&&(e.stencilMask(Ze),me=Ze)},setFunc:function(Ze,ei,ti){(ne!==Ze||W!==ei||ue!==ti)&&(e.stencilFunc(Ze,ei,ti),ne=Ze,W=ei,ue=ti)},setOp:function(Ze,ei,ti){(we!==Ze||rt!==ei||lt!==ti)&&(e.stencilOp(Ze,ei,ti),we=Ze,rt=ei,lt=ti)},setLocked:function(Ze){U=Ze},setClear:function(Ze){Ot!==Ze&&(e.clearStencil(Ze),Ot=Ze)},reset:function(){U=!1,me=null,ne=null,W=null,ue=null,we=null,rt=null,lt=null,Ot=null}}}d(s,"a");let o=new a,l=new n,h=new s,u=new WeakMap,c=new WeakMap,p={},f={},_=new WeakMap,v=[],g=null,m=!1,y=null,x=null,M=null,A=null,w=null,P=null,I=null,S=new Te(0,0,0),C=0,O=!1,V=null,j=null,N=null,k=null,X=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,Y=0,Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Q)[1]),se=Y>=1):Q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),se=Y>=2);let ie=null,B={},Z=e.getParameter(e.SCISSOR_BOX),pe=e.getParameter(e.VIEWPORT),ve=new tt().fromArray(Z),Se=new tt().fromArray(pe);function Re(U,me,ne,W){let ue=new Uint8Array(4),we=e.createTexture();e.bindTexture(U,we),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let rt=0;rt<ne;rt++)r&&(U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY)?e.texImage3D(me,0,e.RGBA,1,1,W,0,e.RGBA,e.UNSIGNED_BYTE,ue):e.texImage2D(me+rt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ue);return we}d(Re,"yt");let ke={};ke[e.TEXTURE_2D]=Re(e.TEXTURE_2D,e.TEXTURE_2D,1),ke[e.TEXTURE_CUBE_MAP]=Re(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ke[e.TEXTURE_2D_ARRAY]=Re(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ke[e.TEXTURE_3D]=Re(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),be(e.DEPTH_TEST),l.setFunc($a),xe(!1),Be(ro),be(e.CULL_FACE),_e(ai);function be(U){p[U]!==!0&&(e.enable(U),p[U]=!0)}d(be,"Ot");function He(U){p[U]!==!1&&(e.disable(U),p[U]=!1)}d(He,"Tt");function L(U,me){return f[U]!==me?(e.bindFramebuffer(U,me),f[U]=me,r&&(U===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=me),U===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=me)),!0):!1}d(L,"Rt");function le(U,me){let ne=v,W=!1;if(U)if(ne=_.get(me),ne===void 0&&(ne=[],_.set(me,ne)),U.isWebGLMultipleRenderTargets){let ue=U.texture;if(ne.length!==ue.length||ne[0]!==e.COLOR_ATTACHMENT0){for(let we=0,rt=ue.length;we<rt;we++)ne[we]=e.COLOR_ATTACHMENT0+we;ne.length=ue.length,W=!0}}else ne[0]!==e.COLOR_ATTACHMENT0&&(ne[0]=e.COLOR_ATTACHMENT0,W=!0);else ne[0]!==e.BACK&&(ne[0]=e.BACK,W=!0);W&&(i.isWebGL2?e.drawBuffers(ne):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}d(le,"P");function ee(U){return g!==U?(e.useProgram(U),g=U,!0):!1}d(ee,"ct");let $={[Hi]:e.FUNC_ADD,[Ju]:e.FUNC_SUBTRACT,[Qu]:e.FUNC_REVERSE_SUBTRACT};if(r)$[so]=e.MIN,$[oo]=e.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&($[so]=U.MIN_EXT,$[oo]=U.MAX_EXT)}let J={[$u]:e.ZERO,[ec]:e.ONE,[tc]:e.SRC_COLOR,[cs]:e.SRC_ALPHA,[oc]:e.SRC_ALPHA_SATURATE,[nc]:e.DST_COLOR,[rc]:e.DST_ALPHA,[ic]:e.ONE_MINUS_SRC_COLOR,[ds]:e.ONE_MINUS_SRC_ALPHA,[sc]:e.ONE_MINUS_DST_COLOR,[ac]:e.ONE_MINUS_DST_ALPHA,[lc]:e.CONSTANT_COLOR,[hc]:e.ONE_MINUS_CONSTANT_COLOR,[uc]:e.CONSTANT_ALPHA,[cc]:e.ONE_MINUS_CONSTANT_ALPHA};function _e(U,me,ne,W,ue,we,rt,lt,Ot,Ze){if(U===ai){m===!0&&(He(e.BLEND),m=!1);return}if(m===!1&&(be(e.BLEND),m=!0),U!==Ku){if(U!==y||Ze!==O){if((x!==Hi||w!==Hi)&&(e.blendEquation(e.FUNC_ADD),x=Hi,w=Hi),Ze)switch(U){case Mr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qa:e.blendFunc(e.ONE,e.ONE);break;case ao:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case no:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Mr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qa:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case ao:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case no:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,A=null,P=null,I=null,S.set(0,0,0),C=0,y=U,O=Ze}return}ue=ue||me,we=we||ne,rt=rt||W,(me!==x||ue!==w)&&(e.blendEquationSeparate($[me],$[ue]),x=me,w=ue),(ne!==M||W!==A||we!==P||rt!==I)&&(e.blendFuncSeparate(J[ne],J[W],J[we],J[rt]),M=ne,A=W,P=we,I=rt),(lt.equals(S)===!1||Ot!==C)&&(e.blendColor(lt.r,lt.g,lt.b,Ot),S.copy(lt),C=Ot),y=U,O=!1}d(_e,"J");function fe(U,me){U.side===Kt?He(e.CULL_FACE):be(e.CULL_FACE);let ne=U.side===At;me&&(ne=!ne),xe(ne),U.blending===Mr&&U.transparent===!1?_e(ai):_e(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);let W=U.stencilWrite;h.setTest(W),W&&(h.setMask(U.stencilWriteMask),h.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),h.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ot(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?be(e.SAMPLE_ALPHA_TO_COVERAGE):He(e.SAMPLE_ALPHA_TO_COVERAGE)}d(fe,"At");function xe(U){V!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),V=U)}d(xe,"pt");function Be(U){U!==qu?(be(e.CULL_FACE),U!==j&&(U===ro?e.cullFace(e.BACK):U===Yu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):He(e.CULL_FACE),j=U}d(Be,"xt");function Ne(U){U!==N&&(se&&e.lineWidth(U),N=U)}d(Ne,"Ft");function ot(U,me,ne){U?(be(e.POLYGON_OFFSET_FILL),(k!==me||X!==ne)&&(e.polygonOffset(me,ne),k=me,X=ne)):He(e.POLYGON_OFFSET_FILL)}d(ot,"Zt");function dt(U){U?be(e.SCISSOR_TEST):He(e.SCISSOR_TEST)}d(dt,"re");function R(U){U===void 0&&(U=e.TEXTURE0+K-1),ie!==U&&(e.activeTexture(U),ie=U)}d(R,"R");function b(U,me,ne){ne===void 0&&(ie===null?ne=e.TEXTURE0+K-1:ne=ie);let W=B[ne];W===void 0&&(W={type:void 0,texture:void 0},B[ne]=W),(W.type!==U||W.texture!==me)&&(ie!==ne&&(e.activeTexture(ne),ie=ne),e.bindTexture(U,me||ke[U]),W.type=U,W.texture=me)}d(b,"S");function z(){let U=B[ie];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}d(z,"O");function oe(){try{e.compressedTexImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}d(oe,"et");function re(){try{e.compressedTexImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}d(re,"j");function te(){try{e.texSubImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}d(te,"nt");function ye(){try{e.texSubImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}d(ye,"St");function he(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}d(he,"ot");function Me(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}d(Me,"ut");function Ie(){try{e.texStorage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}d(Ie,"It");function Ye(){try{e.texStorage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}d(Ye,"$t");function ae(){try{e.texImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}d(ae,"rt");function $e(){try{e.texImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}d($e,"jt");function Fe(U){ve.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),ve.copy(U))}d(Fe,"Bt");function De(U){Se.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Se.copy(U))}d(De,"Ut");function ge(U,me){let ne=c.get(me);ne===void 0&&(ne=new WeakMap,c.set(me,ne));let W=ne.get(U);W===void 0&&(W=e.getUniformBlockIndex(me,U.name),ne.set(U,W))}d(ge,"wt");function Ae(U,me){let ne=c.get(me).get(U);u.get(me)!==ne&&(e.uniformBlockBinding(me,ne,U.__bindingPointIndex),u.set(me,ne))}d(Ae,"vt");function We(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),p={},ie=null,B={},f={},_=new WeakMap,v=[],g=null,m=!1,y=null,x=null,M=null,A=null,w=null,P=null,I=null,S=new Te(0,0,0),C=0,O=!1,V=null,j=null,N=null,k=null,X=null,ve.set(0,0,e.canvas.width,e.canvas.height),Se.set(0,0,e.canvas.width,e.canvas.height),o.reset(),l.reset(),h.reset()}return d(We,"Yt"),{buffers:{color:o,depth:l,stencil:h},enable:be,disable:He,bindFramebuffer:L,drawBuffers:le,useProgram:ee,setBlending:_e,setMaterial:fe,setFlipSided:xe,setCullFace:Be,setLineWidth:Ne,setPolygonOffset:ot,setScissorTest:dt,activeTexture:R,bindTexture:b,unbindTexture:z,compressedTexImage2D:oe,compressedTexImage3D:re,texImage2D:ae,texImage3D:$e,updateUBOMapping:ge,uniformBlockBinding:Ae,texStorage2D:Ie,texStorage3D:Ye,texSubImage2D:te,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:Me,scissor:Fe,viewport:De,reset:We}}d(r0,"ux");function a0(e,t,i,r,a,n,s){let o=a.isWebGL2,l=a.maxTextures,h=a.maxCubemapSize,u=a.maxTextureSize,c=a.maxSamples,p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap,v,g=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,b){return m?new OffscreenCanvas(R,b):na("canvas")}d(y,"v");function x(R,b,z,oe){let re=1;if((R.width>oe||R.height>oe)&&(re=oe/Math.max(R.width,R.height)),re<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let te=b?sn:Math.floor,ye=te(re*R.width),he=te(re*R.height);v===void 0&&(v=y(ye,he));let Me=z?y(ye,he):v;return Me.width=ye,Me.height=he,Me.getContext("2d").drawImage(R,0,0,ye,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ye+"x"+he+")."),Me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}d(x,"x");function M(R){return vs(R.width)&&vs(R.height)}d(M,"M");function A(R){return o?!1:R.wrapS!==Ut||R.wrapT!==Ut||R.minFilter!==mt&&R.minFilter!==Ct}d(A,"b");function w(R,b){return R.generateMipmaps&&b&&R.minFilter!==mt&&R.minFilter!==Ct}d(w,"T");function P(R){e.generateMipmap(R)}d(P,"C");function I(R,b,z,oe,re=!1){if(o===!1)return b;if(R!==null){if(e[R]!==void 0)return e[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=b;if(b===e.RED&&(z===e.FLOAT&&(te=e.R32F),z===e.HALF_FLOAT&&(te=e.R16F),z===e.UNSIGNED_BYTE&&(te=e.R8)),b===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(te=e.R8UI),z===e.UNSIGNED_SHORT&&(te=e.R16UI),z===e.UNSIGNED_INT&&(te=e.R32UI),z===e.BYTE&&(te=e.R8I),z===e.SHORT&&(te=e.R16I),z===e.INT&&(te=e.R32I)),b===e.RG&&(z===e.FLOAT&&(te=e.RG32F),z===e.HALF_FLOAT&&(te=e.RG16F),z===e.UNSIGNED_BYTE&&(te=e.RG8)),b===e.RGBA){let ye=re?tn:Ke.getTransfer(oe);z===e.FLOAT&&(te=e.RGBA32F),z===e.HALF_FLOAT&&(te=e.RGBA16F),z===e.UNSIGNED_BYTE&&(te=ye===et?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(te=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(te=e.RGB5_A1)}return(te===e.R16F||te===e.R32F||te===e.RG16F||te===e.RG32F||te===e.RGBA16F||te===e.RGBA32F)&&t.get("EXT_color_buffer_float"),te}d(I,"L");function S(R,b,z){return w(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==mt&&R.minFilter!==Ct?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}d(S,"y");function C(R){return R===mt||R===en||R===$r?e.NEAREST:e.LINEAR}d(C,"w");function O(R){let b=R.target;b.removeEventListener("dispose",O),j(b),b.isVideoTexture&&_.delete(b)}d(O,"N");function V(R){let b=R.target;b.removeEventListener("dispose",V),k(b)}d(V,"k");function j(R){let b=r.get(R);if(b.__webglInit===void 0)return;let z=R.source,oe=g.get(z);if(oe){let re=oe[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(R),Object.keys(oe).length===0&&g.delete(z)}r.remove(R)}d(j,"$");function N(R){let b=r.get(R);e.deleteTexture(b.__webglTexture);let z=R.source,oe=g.get(z);delete oe[b.__cacheKey],s.memory.textures--}d(N,"I");function k(R){let b=R.texture,z=r.get(R),oe=r.get(b);if(oe.__webglTexture!==void 0&&(e.deleteTexture(oe.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(z.__webglFramebuffer[re]))for(let te=0;te<z.__webglFramebuffer[re].length;te++)e.deleteFramebuffer(z.__webglFramebuffer[re][te]);else e.deleteFramebuffer(z.__webglFramebuffer[re]);z.__webglDepthbuffer&&e.deleteRenderbuffer(z.__webglDepthbuffer[re])}else{if(Array.isArray(z.__webglFramebuffer))for(let re=0;re<z.__webglFramebuffer.length;re++)e.deleteFramebuffer(z.__webglFramebuffer[re]);else e.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&e.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&e.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let re=0;re<z.__webglColorRenderbuffer.length;re++)z.__webglColorRenderbuffer[re]&&e.deleteRenderbuffer(z.__webglColorRenderbuffer[re]);z.__webglDepthRenderbuffer&&e.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let re=0,te=b.length;re<te;re++){let ye=r.get(b[re]);ye.__webglTexture&&(e.deleteTexture(ye.__webglTexture),s.memory.textures--),r.remove(b[re])}r.remove(b),r.remove(R)}d(k,"z");let X=0;function K(){X=0}d(K,"G");function se(){let R=X;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),X+=1,R}d(se,"st");function Y(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}d(Y,"Y");function Q(R,b){let z=r.get(R);if(R.isVideoTexture&&ot(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let oe=R.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(z,R,b);return}}i.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+b)}d(Q,"Q");function ie(R,b){let z=r.get(R);if(R.version>0&&z.__version!==R.version){be(z,R,b);return}i.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+b)}d(ie,"tt");function B(R,b){let z=r.get(R);if(R.version>0&&z.__version!==R.version){be(z,R,b);return}i.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+b)}d(B,"_t");function Z(R,b){let z=r.get(R);if(R.version>0&&z.__version!==R.version){He(z,R,b);return}i.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+b)}d(Z,"H");let pe={[qi]:e.REPEAT,[Ut]:e.CLAMP_TO_EDGE,[aa]:e.MIRRORED_REPEAT},ve={[mt]:e.NEAREST,[en]:e.NEAREST_MIPMAP_NEAREST,[$r]:e.NEAREST_MIPMAP_LINEAR,[Ct]:e.LINEAR,[ws]:e.LINEAR_MIPMAP_NEAREST,[Ci]:e.LINEAR_MIPMAP_LINEAR},Se={[zc]:e.NEVER,[Xc]:e.ALWAYS,[Gc]:e.LESS,[lh]:e.LEQUAL,[kc]:e.EQUAL,[Wc]:e.GEQUAL,[Hc]:e.GREATER,[Vc]:e.NOTEQUAL};function Re(R,b,z){if(z?(e.texParameteri(R,e.TEXTURE_WRAP_S,pe[b.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,pe[b.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,pe[b.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,ve[b.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,ve[b.minFilter])):(e.texParameteri(R,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(R,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(b.wrapS!==Ut||b.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(R,e.TEXTURE_MAG_FILTER,C(b.magFilter)),e.texParameteri(R,e.TEXTURE_MIN_FILTER,C(b.minFilter)),b.minFilter!==mt&&b.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,Se[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let oe=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===mt||b.minFilter!==$r&&b.minFilter!==Ci||b.type===vi&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===Jt&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||r.get(b).__currentAnisotropy)&&(e.texParameterf(R,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy)}}d(Re,"yt");function ke(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",O));let oe=b.source,re=g.get(oe);re===void 0&&(re={},g.set(oe,re));let te=Y(b);if(te!==R.__cacheKey){re[te]===void 0&&(re[te]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,z=!0),re[te].usedTimes++;let ye=re[R.__cacheKey];ye!==void 0&&(re[R.__cacheKey].usedTimes--,ye.usedTimes===0&&N(b)),R.__cacheKey=te,R.__webglTexture=re[te].texture}return z}d(ke,"Lt");function be(R,b,z){let oe=e.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=e.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=e.TEXTURE_3D);let re=ke(R,b),te=b.source;i.bindTexture(oe,R.__webglTexture,e.TEXTURE0+z);let ye=r.get(te);if(te.version!==ye.__version||re===!0){i.activeTexture(e.TEXTURE0+z);let he=Ke.getPrimaries(Ke.workingColorSpace),Me=b.colorSpace===kt?null:Ke.getPrimaries(b.colorSpace),Ie=b.colorSpace===kt||he===Me?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ye=A(b)&&M(b.image)===!1,ae=x(b.image,Ye,!1,u);ae=dt(b,ae);let $e=M(ae)||o,Fe=n.convert(b.format,b.colorSpace),De=n.convert(b.type),ge=I(b.internalFormat,Fe,De,b.colorSpace,b.isVideoTexture);Re(oe,b,$e);let Ae,We=b.mipmaps,U=o&&b.isVideoTexture!==!0&&ge!==ah,me=ye.__version===void 0||re===!0,ne=S(b,ae,$e);if(b.isDepthTexture)ge=e.DEPTH_COMPONENT,o?b.type===vi?ge=e.DEPTH_COMPONENT32F:b.type===wi?ge=e.DEPTH_COMPONENT24:b.type===Wi?ge=e.DEPTH24_STENCIL8:ge=e.DEPTH_COMPONENT16:b.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Xi&&ge===e.DEPTH_COMPONENT&&b.type!==As&&b.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=wi,De=n.convert(b.type)),b.format===Er&&ge===e.DEPTH_COMPONENT&&(ge=e.DEPTH_STENCIL,b.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Wi,De=n.convert(b.type))),me&&(U?i.texStorage2D(e.TEXTURE_2D,1,ge,ae.width,ae.height):i.texImage2D(e.TEXTURE_2D,0,ge,ae.width,ae.height,0,Fe,De,null));else if(b.isDataTexture)if(We.length>0&&$e){U&&me&&i.texStorage2D(e.TEXTURE_2D,ne,ge,We[0].width,We[0].height);for(let W=0,ue=We.length;W<ue;W++)Ae=We[W],U?i.texSubImage2D(e.TEXTURE_2D,W,0,0,Ae.width,Ae.height,Fe,De,Ae.data):i.texImage2D(e.TEXTURE_2D,W,ge,Ae.width,Ae.height,0,Fe,De,Ae.data);b.generateMipmaps=!1}else U?(me&&i.texStorage2D(e.TEXTURE_2D,ne,ge,ae.width,ae.height),i.texSubImage2D(e.TEXTURE_2D,0,0,0,ae.width,ae.height,Fe,De,ae.data)):i.texImage2D(e.TEXTURE_2D,0,ge,ae.width,ae.height,0,Fe,De,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){U&&me&&i.texStorage3D(e.TEXTURE_2D_ARRAY,ne,ge,We[0].width,We[0].height,ae.depth);for(let W=0,ue=We.length;W<ue;W++)Ae=We[W],b.format!==Gt?Fe!==null?U?i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,Ae.width,Ae.height,ae.depth,Fe,Ae.data,0,0):i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,W,ge,Ae.width,Ae.height,ae.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?i.texSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,Ae.width,Ae.height,ae.depth,Fe,De,Ae.data):i.texImage3D(e.TEXTURE_2D_ARRAY,W,ge,Ae.width,Ae.height,ae.depth,0,Fe,De,Ae.data)}else{U&&me&&i.texStorage2D(e.TEXTURE_2D,ne,ge,We[0].width,We[0].height);for(let W=0,ue=We.length;W<ue;W++)Ae=We[W],b.format!==Gt?Fe!==null?U?i.compressedTexSubImage2D(e.TEXTURE_2D,W,0,0,Ae.width,Ae.height,Fe,Ae.data):i.compressedTexImage2D(e.TEXTURE_2D,W,ge,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?i.texSubImage2D(e.TEXTURE_2D,W,0,0,Ae.width,Ae.height,Fe,De,Ae.data):i.texImage2D(e.TEXTURE_2D,W,ge,Ae.width,Ae.height,0,Fe,De,Ae.data)}else if(b.isDataArrayTexture)U?(me&&i.texStorage3D(e.TEXTURE_2D_ARRAY,ne,ge,ae.width,ae.height,ae.depth),i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Fe,De,ae.data)):i.texImage3D(e.TEXTURE_2D_ARRAY,0,ge,ae.width,ae.height,ae.depth,0,Fe,De,ae.data);else if(b.isData3DTexture)U?(me&&i.texStorage3D(e.TEXTURE_3D,ne,ge,ae.width,ae.height,ae.depth),i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Fe,De,ae.data)):i.texImage3D(e.TEXTURE_3D,0,ge,ae.width,ae.height,ae.depth,0,Fe,De,ae.data);else if(b.isFramebufferTexture){if(me)if(U)i.texStorage2D(e.TEXTURE_2D,ne,ge,ae.width,ae.height);else{let W=ae.width,ue=ae.height;for(let we=0;we<ne;we++)i.texImage2D(e.TEXTURE_2D,we,ge,W,ue,0,Fe,De,null),W>>=1,ue>>=1}}else if(We.length>0&&$e){U&&me&&i.texStorage2D(e.TEXTURE_2D,ne,ge,We[0].width,We[0].height);for(let W=0,ue=We.length;W<ue;W++)Ae=We[W],U?i.texSubImage2D(e.TEXTURE_2D,W,0,0,Fe,De,Ae):i.texImage2D(e.TEXTURE_2D,W,ge,Fe,De,Ae);b.generateMipmaps=!1}else U?(me&&i.texStorage2D(e.TEXTURE_2D,ne,ge,ae.width,ae.height),i.texSubImage2D(e.TEXTURE_2D,0,0,0,Fe,De,ae)):i.texImage2D(e.TEXTURE_2D,0,ge,Fe,De,ae);w(b,$e)&&P(oe),ye.__version=te.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}d(be,"Ot");function He(R,b,z){if(b.image.length!==6)return;let oe=ke(R,b),re=b.source;i.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+z);let te=r.get(re);if(re.version!==te.__version||oe===!0){i.activeTexture(e.TEXTURE0+z);let ye=Ke.getPrimaries(Ke.workingColorSpace),he=b.colorSpace===kt?null:Ke.getPrimaries(b.colorSpace),Me=b.colorSpace===kt||ye===he?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ie=b.isCompressedTexture||b.image[0].isCompressedTexture,Ye=b.image[0]&&b.image[0].isDataTexture,ae=[];for(let W=0;W<6;W++)!Ie&&!Ye?ae[W]=x(b.image[W],!1,!0,h):ae[W]=Ye?b.image[W].image:b.image[W],ae[W]=dt(b,ae[W]);let $e=ae[0],Fe=M($e)||o,De=n.convert(b.format,b.colorSpace),ge=n.convert(b.type),Ae=I(b.internalFormat,De,ge,b.colorSpace),We=o&&b.isVideoTexture!==!0,U=te.__version===void 0||oe===!0,me=S(b,$e,Fe);Re(e.TEXTURE_CUBE_MAP,b,Fe);let ne;if(Ie){We&&U&&i.texStorage2D(e.TEXTURE_CUBE_MAP,me,Ae,$e.width,$e.height);for(let W=0;W<6;W++){ne=ae[W].mipmaps;for(let ue=0;ue<ne.length;ue++){let we=ne[ue];b.format!==Gt?De!==null?We?i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue,0,0,we.width,we.height,De,we.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue,Ae,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue,0,0,we.width,we.height,De,ge,we.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue,Ae,we.width,we.height,0,De,ge,we.data)}}}else{ne=b.mipmaps,We&&U&&(ne.length>0&&me++,i.texStorage2D(e.TEXTURE_CUBE_MAP,me,Ae,ae[0].width,ae[0].height));for(let W=0;W<6;W++)if(Ye){We?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ae[W].width,ae[W].height,De,ge,ae[W].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ae,ae[W].width,ae[W].height,0,De,ge,ae[W].data);for(let ue=0;ue<ne.length;ue++){let we=ne[ue].image[W].image;We?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue+1,0,0,we.width,we.height,De,ge,we.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue+1,Ae,we.width,we.height,0,De,ge,we.data)}}else{We?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,De,ge,ae[W]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ae,De,ge,ae[W]);for(let ue=0;ue<ne.length;ue++){let we=ne[ue];We?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue+1,0,0,De,ge,we.image[W]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue+1,Ae,De,ge,we.image[W])}}}w(b,Fe)&&P(e.TEXTURE_CUBE_MAP),te.__version=re.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}d(He,"Tt");function L(R,b,z,oe,re,te){let ye=n.convert(z.format,z.colorSpace),he=n.convert(z.type),Me=I(z.internalFormat,ye,he,z.colorSpace);if(!r.get(b).__hasExternalTextures){let Ie=Math.max(1,b.width>>te),Ye=Math.max(1,b.height>>te);re===e.TEXTURE_3D||re===e.TEXTURE_2D_ARRAY?i.texImage3D(re,te,Me,Ie,Ye,b.depth,0,ye,he,null):i.texImage2D(re,te,Me,Ie,Ye,0,ye,he,null)}i.bindFramebuffer(e.FRAMEBUFFER,R),Ne(b)?p.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,oe,re,r.get(z).__webglTexture,0,Be(b)):(re===e.TEXTURE_2D||re>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,oe,re,r.get(z).__webglTexture,te),i.bindFramebuffer(e.FRAMEBUFFER,null)}d(L,"Rt");function le(R,b,z){if(e.bindRenderbuffer(e.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let oe=o===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(z||Ne(b)){let re=b.depthTexture;re&&re.isDepthTexture&&(re.type===vi?oe=e.DEPTH_COMPONENT32F:re.type===wi&&(oe=e.DEPTH_COMPONENT24));let te=Be(b);Ne(b)?p.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te,oe,b.width,b.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,te,oe,b.width,b.height)}else e.renderbufferStorage(e.RENDERBUFFER,oe,b.width,b.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){let oe=Be(b);z&&Ne(b)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,oe,e.DEPTH24_STENCIL8,b.width,b.height):Ne(b)?p.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,oe,e.DEPTH24_STENCIL8,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,R)}else{let oe=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0;re<oe.length;re++){let te=oe[re],ye=n.convert(te.format,te.colorSpace),he=n.convert(te.type),Me=I(te.internalFormat,ye,he,te.colorSpace),Ie=Be(b);z&&Ne(b)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie,Me,b.width,b.height):Ne(b)?p.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie,Me,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,Me,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}d(le,"P");function ee(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q(b.depthTexture,0);let z=r.get(b.depthTexture).__webglTexture,oe=Be(b);if(b.depthTexture.format===Xi)Ne(b)?p.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,z,0,oe):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,z,0);else if(b.depthTexture.format===Er)Ne(b)?p.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,z,0,oe):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}d(ee,"ct");function $(R){let b=r.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ee(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)i.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]=e.createRenderbuffer(),le(b.__webglDepthbuffer[oe],R,!1)}else i.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=e.createRenderbuffer(),le(b.__webglDepthbuffer,R,!1);i.bindFramebuffer(e.FRAMEBUFFER,null)}d($,"X");function J(R,b,z){let oe=r.get(R);b!==void 0&&L(oe.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&$(R)}d(J,"at");function _e(R){let b=R.texture,z=r.get(R),oe=r.get(b);R.addEventListener("dispose",V),R.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=e.createTexture()),oe.__version=b.version,s.memory.textures++);let re=R.isWebGLCubeRenderTarget===!0,te=R.isWebGLMultipleRenderTargets===!0,ye=M(R)||o;if(re){z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[he]=[];for(let Me=0;Me<b.mipmaps.length;Me++)z.__webglFramebuffer[he][Me]=e.createFramebuffer()}else z.__webglFramebuffer[he]=e.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)z.__webglFramebuffer[he]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(te)if(a.drawBuffers){let he=R.texture;for(let Me=0,Ie=he.length;Me<Ie;Me++){let Ye=r.get(he[Me]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=e.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ne(R)===!1){let he=te?b:[b];z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Me=0;Me<he.length;Me++){let Ie=he[Me];z.__webglColorRenderbuffer[Me]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[Me]);let Ye=n.convert(Ie.format,Ie.colorSpace),ae=n.convert(Ie.type),$e=I(Ie.internalFormat,Ye,ae,Ie.colorSpace,R.isXRRenderTarget===!0),Fe=Be(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe,$e,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,z.__webglColorRenderbuffer[Me])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),le(z.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(re){i.bindTexture(e.TEXTURE_CUBE_MAP,oe.__webglTexture),Re(e.TEXTURE_CUBE_MAP,b,ye);for(let he=0;he<6;he++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)L(z.__webglFramebuffer[he][Me],R,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me);else L(z.__webglFramebuffer[he],R,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);w(b,ye)&&P(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(te){let he=R.texture;for(let Me=0,Ie=he.length;Me<Ie;Me++){let Ye=he[Me],ae=r.get(Ye);i.bindTexture(e.TEXTURE_2D,ae.__webglTexture),Re(e.TEXTURE_2D,Ye,ye),L(z.__webglFramebuffer,R,Ye,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,0),w(Ye,ye)&&P(e.TEXTURE_2D)}i.unbindTexture()}else{let he=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?he=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(he,oe.__webglTexture),Re(he,b,ye),o&&b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)L(z.__webglFramebuffer[Me],R,b,e.COLOR_ATTACHMENT0,he,Me);else L(z.__webglFramebuffer,R,b,e.COLOR_ATTACHMENT0,he,0);w(b,ye)&&P(he),i.unbindTexture()}R.depthBuffer&&$(R)}d(_e,"J");function fe(R){let b=M(R)||o,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let oe=0,re=z.length;oe<re;oe++){let te=z[oe];if(w(te,b)){let ye=R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,he=r.get(te).__webglTexture;i.bindTexture(ye,he),P(ye),i.unbindTexture()}}}d(fe,"At");function xe(R){if(o&&R.samples>0&&Ne(R)===!1){let b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,oe=R.height,re=e.COLOR_BUFFER_BIT,te=[],ye=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,he=r.get(R),Me=R.isWebGLMultipleRenderTargets===!0;if(Me)for(let Ie=0;Ie<b.length;Ie++)i.bindFramebuffer(e.FRAMEBUFFER,he.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ie,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,he.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ie,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){te.push(e.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&te.push(ye);let Ye=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ye===!1&&(R.depthBuffer&&(re|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=e.STENCIL_BUFFER_BIT)),Me&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,he.__webglColorRenderbuffer[Ie]),Ye===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[ye]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[ye])),Me){let ae=r.get(b[Ie]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ae,0)}e.blitFramebuffer(0,0,z,oe,0,0,z,oe,re,e.NEAREST),f&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,te)}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Me)for(let Ie=0;Ie<b.length;Ie++){i.bindFramebuffer(e.FRAMEBUFFER,he.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ie,e.RENDERBUFFER,he.__webglColorRenderbuffer[Ie]);let Ye=r.get(b[Ie]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,he.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ie,e.TEXTURE_2D,Ye,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}d(xe,"pt");function Be(R){return Math.min(c,R.samples)}d(Be,"xt");function Ne(R){let b=r.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}d(Ne,"Ft");function ot(R){let b=s.render.frame;_.get(R)!==b&&(_.set(R,b),R.update())}d(ot,"Zt");function dt(R,b){let z=R.colorSpace,oe=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===gs||z!==xt&&z!==kt&&(Ke.getTransfer(z)===et?o===!1?t.has("EXT_sRGB")===!0&&oe===Gt?(R.format=gs,R.minFilter=Ct,R.generateMipmaps=!1):b=ph.sRGBToLinear(b):(oe!==Gt||re!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}d(dt,"re"),this.allocateTextureUnit=se,this.resetTextureUnits=K,this.setTexture2D=Q,this.setTexture2DArray=ie,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=J,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=L,this.useMultisampledRTT=Ne}d(a0,"dx");function n0(e,t,i){let r=i.isWebGL2;function a(n,s=kt){let o,l=Ke.getTransfer(s);if(n===Ri)return e.UNSIGNED_BYTE;if(n===$l)return e.UNSIGNED_SHORT_4_4_4_4;if(n===eh)return e.UNSIGNED_SHORT_5_5_5_1;if(n===Ec)return e.BYTE;if(n===Rc)return e.SHORT;if(n===As)return e.UNSIGNED_SHORT;if(n===Ql)return e.INT;if(n===wi)return e.UNSIGNED_INT;if(n===vi)return e.FLOAT;if(n===Jt)return r?e.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(n===Cc)return e.ALPHA;if(n===Gt)return e.RGBA;if(n===Lc)return e.LUMINANCE;if(n===Pc)return e.LUMINANCE_ALPHA;if(n===Xi)return e.DEPTH_COMPONENT;if(n===Er)return e.DEPTH_STENCIL;if(n===gs)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(n===Ic)return e.RED;if(n===th)return e.RED_INTEGER;if(n===Nc)return e.RG;if(n===ih)return e.RG_INTEGER;if(n===rh)return e.RGBA_INTEGER;if(n===En||n===Rn||n===Cn||n===Ln)if(l===et)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===En)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ln)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===En)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rn)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cn)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ln)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ho||n===uo||n===co||n===po)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ho)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===po)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ah)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===mo||n===fo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===mo)return l===et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===fo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===go||n===vo||n===_o||n===xo||n===yo||n===Mo||n===bo||n===So||n===To||n===wo||n===Ao||n===Eo||n===Ro||n===Co)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===go)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ro)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pn||n===Lo||n===Po)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Pn)return l===et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uc||n===Io||n===No||n===Uo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Pn)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Io)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?r?e.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):e[n]!==void 0?e[n]:null}return d(a,"i"),{convert:a}}d(n0,"fx");var s0=d(class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},"ko"),Ai=d(class extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},"ci"),o0={type:"move"},ts=d(class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let _ of e.hand.values()){let v=t.getJointPose(_,i),g=this._getHandJoint(l,_);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],c=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&c>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&c<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(o0)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ai;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},"Cs"),l0=d(class extends Ir{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,u=null,c=null,p=null,f=null,_=t.getContextAttributes(),v=null,g=null,m=[],y=[],x=new q,M=null,A=new yt;A.layers.enable(1),A.viewport=new tt;let w=new yt;w.layers.enable(2),w.viewport=new tt;let P=[A,w],I=new s0;I.layers.enable(1),I.layers.enable(2);let S=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=m[B];return Z===void 0&&(Z=new ts,m[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=m[B];return Z===void 0&&(Z=new ts,m[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=m[B];return Z===void 0&&(Z=new ts,m[B]=Z),Z.getHandSpace()};function O(B){let Z=y.indexOf(B.inputSource);if(Z===-1)return;let pe=m[Z];pe!==void 0&&(pe.update(B.inputSource,B.frame,l||n),pe.dispatchEvent({type:B.type,data:B.inputSource}))}d(O,"k");function V(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",j);for(let B=0;B<m.length;B++){let Z=y[B];Z!==null&&(y[B]=null,m[B].disconnect(Z))}S=null,C=null,e.setRenderTarget(v),p=null,c=null,u=null,r=null,g=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}d(V,"$"),this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",V),r.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Dt(p.framebufferWidth,p.framebufferHeight,{format:Gt,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,pe=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?Er:Xi,pe=_.stencil?Wi:wi);let Se={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};u=new XRWebGLBinding(r,t),c=u.createProjectionLayer(Se),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),g=new Dt(c.textureWidth,c.textureHeight,{format:Gt,type:Ri,depthTexture:new Ph(c.textureWidth,c.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Re=e.properties.get(g);Re.__ignoreDepthValues=c.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(B){for(let Z=0;Z<B.removed.length;Z++){let pe=B.removed[Z],ve=y.indexOf(pe);ve>=0&&(y[ve]=null,m[ve].disconnect(pe))}for(let Z=0;Z<B.added.length;Z++){let pe=B.added[Z],ve=y.indexOf(pe);if(ve===-1){for(let Re=0;Re<m.length;Re++)if(Re>=y.length){y.push(pe),ve=Re;break}else if(y[Re]===null){y[Re]=pe,ve=Re;break}if(ve===-1)break}let Se=m[ve];Se&&Se.connect(pe)}}d(j,"I");let N=new E,k=new E;function X(B,Z,pe){N.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(pe.matrixWorld);let ve=N.distanceTo(k),Se=Z.projectionMatrix.elements,Re=pe.projectionMatrix.elements,ke=Se[14]/(Se[10]-1),be=Se[14]/(Se[10]+1),He=(Se[9]+1)/Se[5],L=(Se[9]-1)/Se[5],le=(Se[8]-1)/Se[0],ee=(Re[8]+1)/Re[0],$=ke*le,J=ke*ee,_e=ve/(-le+ee),fe=_e*-le;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(fe),B.translateZ(_e),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let xe=ke+_e,Be=be+_e,Ne=$-fe,ot=J+(ve-fe),dt=He*be/Be*xe,R=L*be/Be*xe;B.projectionMatrix.makePerspective(Ne,ot,dt,R,xe,Be),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}d(X,"G");function K(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}d(K,"st"),this.updateCamera=function(B){if(r===null)return;I.near=w.near=A.near=B.near,I.far=w.far=A.far=B.far,(S!==I.near||C!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),S=I.near,C=I.far);let Z=B.parent,pe=I.cameras;K(I,Z);for(let ve=0;ve<pe.length;ve++)K(pe[ve],Z);pe.length===2?X(I,A,w):I.projectionMatrix.copy(A.projectionMatrix),se(B,I,Z)};function se(B,Z,pe){pe===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(pe.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Cr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}d(se,"Y"),this.getCamera=function(){return I},this.getFoveation=function(){if(!(c===null&&p===null))return o},this.setFoveation=function(B){o=B,c!==null&&(c.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let Y=null;function Q(B,Z){if(h=Z.getViewerPose(l||n),f=Z,h!==null){let pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ve=!1;pe.length!==I.cameras.length&&(I.cameras.length=0,ve=!0);for(let Se=0;Se<pe.length;Se++){let Re=pe[Se],ke=null;if(p!==null)ke=p.getViewport(Re);else{let He=u.getViewSubImage(c,Re);ke=He.viewport,Se===0&&(e.setRenderTargetTextures(g,He.colorTexture,c.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(g))}let be=P[Se];be===void 0&&(be=new yt,be.layers.enable(Se),be.viewport=new tt,P[Se]=be),be.matrix.fromArray(Re.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Re.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(ke.x,ke.y,ke.width,ke.height),Se===0&&(I.matrix.copy(be.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ve===!0&&I.cameras.push(be)}}for(let pe=0;pe<m.length;pe++){let ve=y[pe],Se=m[pe];ve!==null&&Se!==void 0&&Se.update(ve,Z,l||n)}Y&&Y(B,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),f=null}d(Q,"tt");let ie=new Rh;ie.setAnimationLoop(Q),this.setAnimationLoop=function(B){Y=B},this.dispose=function(){}}},"Ho");function h0(e,t){function i(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}d(i,"e");function r(g,m){m.color.getRGB(g.fogColor.value,Ah(e)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}d(r,"n");function a(g,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?n(g,m):m.isMeshToonMaterial?(n(g,m),c(g,m)):m.isMeshPhongMaterial?(n(g,m),u(g,m)):m.isMeshStandardMaterial?(n(g,m),p(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(n(g,m),_(g,m)):m.isMeshDepthMaterial?n(g,m):m.isMeshDistanceMaterial?(n(g,m),v(g,m)):m.isMeshNormalMaterial?n(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,x):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}d(a,"i");function n(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,i(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,i(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,i(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===At&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,i(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===At&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,i(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,i(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=t.get(m).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let x=e._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*x,i(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,g.aoMapTransform))}d(n,"r");function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,i(m.map,g.mapTransform))}d(s,"a");function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}d(o,"o");function l(g,m,y,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=x*.5,m.map&&(g.map.value=m.map,i(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,i(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}d(l,"c");function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,i(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,i(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}d(h,"l");function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}d(u,"h");function c(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}d(c,"u");function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,g.roughnessMapTransform)),t.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}d(p,"d");function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===At&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,g.specularIntensityMapTransform))}d(f,"f");function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}d(_,"m");function v(g,m){let y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return d(v,"_"),{refreshFogUniforms:r,refreshMaterialUniforms:a}}d(h0,"mx");function u0(e,t,i,r){let a={},n={},s=[],o=i.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let M=x.program;r.uniformBlockBinding(y,M)}d(l,"c");function h(y,x){let M=a[y.id];M===void 0&&(_(y),M=u(y),a[y.id]=M,y.addEventListener("dispose",g));let A=x.program;r.updateUBOMapping(y,A);let w=t.render.frame;n[y.id]!==w&&(p(y),n[y.id]=w)}d(h,"l");function u(y){let x=c();y.__bindingPointIndex=x;let M=e.createBuffer(),A=y.__size,w=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,A,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,M),M}d(u,"h");function c(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}d(c,"u");function p(y){let x=a[y.id],M=y.uniforms,A=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let w=0,P=M.length;w<P;w++){let I=M[w];if(f(I,w,A)===!0){let S=I.__offset,C=Array.isArray(I.value)?I.value:[I.value],O=0;for(let V=0;V<C.length;V++){let j=C[V],N=v(j);typeof j=="number"?(I.__data[0]=j,e.bufferSubData(e.UNIFORM_BUFFER,S+O,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=j.elements[0],I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=j.elements[0],I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=j.elements[0]):(j.toArray(I.__data,O),O+=N.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,S,I.__data)}}e.bindBuffer(e.UNIFORM_BUFFER,null)}d(p,"d");function f(y,x,M){let A=y.value;if(M[x]===void 0){if(typeof A=="number")M[x]=A;else{let w=Array.isArray(A)?A:[A],P=[];for(let I=0;I<w.length;I++)P.push(w[I].clone());M[x]=P}return!0}else if(typeof A=="number"){if(M[x]!==A)return M[x]=A,!0}else{let w=Array.isArray(M[x])?M[x]:[M[x]],P=Array.isArray(A)?A:[A];for(let I=0;I<w.length;I++){let S=w[I];if(S.equals(P[I])===!1)return S.copy(P[I]),!0}}return!1}d(f,"f");function _(y){let x=y.uniforms,M=0,A=16,w=0;for(let P=0,I=x.length;P<I;P++){let S=x[P],C={boundary:0,storage:0},O=Array.isArray(S.value)?S.value:[S.value];for(let V=0,j=O.length;V<j;V++){let N=O[V],k=v(N);C.boundary+=k.boundary,C.storage+=k.storage}if(S.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,P>0){w=M%A;let V=A-w;w!==0&&V-C.boundary<0&&(M+=A-w,S.__offset=M)}M+=C.storage}return w=M%A,w>0&&(M+=A-w),y.__size=M,y.__cache={},this}d(_,"m");function v(y){let x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}d(v,"_");function g(y){let x=y.target;x.removeEventListener("dispose",g);let M=s.indexOf(x.__bindingPointIndex);s.splice(M,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete n[x.id]}d(g,"g");function m(){for(let y in a)e.deleteBuffer(a[y]);s=[],a={},n={}}return d(m,"p"),{bind:l,update:h,dispose:m}}d(u0,"gx");var Ps=d(class{constructor(e={}){let{canvas:t=sd(),context:i=null,depth:r=!0,stencil:a=!0,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let c;i!==null?c=i.getContextAttributes().alpha:c=n;let p=new Uint32Array(4),f=new Int32Array(4),_=null,v=null,g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nt,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;let y=this,x=!1,M=0,A=0,w=null,P=-1,I=null,S=new tt,C=new tt,O=null,V=new Te(0),j=0,N=t.width,k=t.height,X=1,K=null,se=null,Y=new tt(0,0,N,k),Q=new tt(0,0,N,k),ie=!1,B=new pn,Z=!1,pe=!1,ve=null,Se=new Le,Re=new q,ke=new E,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return w===null?X:1}d(He,"Rt");let L=i;function le(T,D){for(let G=0;G<T.length;G++){let H=T[G],F=t.getContext(H,D);if(F!==null)return F}return null}d(le,"ct");try{let T={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ts}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",U,!1),L===null){let D=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&D.shift(),L=le(D,T),L===null)throw le(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ee,$,J,_e,fe,xe,Be,Ne,ot,dt,R,b,z,oe,re,te,ye,he,Me,Ie,Ye,ae,$e,Fe;function De(){ee=new Mf(L),$=new ff(L,ee,e),ee.init($),ae=new n0(L,ee,$),J=new r0(L,ee,$),_e=new Tf(L),fe=new Vg,xe=new a0(L,ee,J,fe,$,ae,_e),Be=new vf(y),Ne=new yf(y),ot=new Pd(L,$),$e=new pf(L,ee,ot,$),dt=new bf(L,ot,_e,$e),R=new Rf(L,dt,ot,_e),Me=new Ef(L,$,xe),te=new gf(fe),b=new Hg(y,Be,Ne,ee,$,$e,te),z=new h0(y,fe),oe=new Xg,re=new Jg(ee,$),he=new df(y,Be,Ne,J,R,c,o),ye=new i0(y,R,$),Fe=new u0(L,_e,$,J),Ie=new mf(L,ee,_e,$),Ye=new Sf(L,ee,_e,$),_e.programs=b.programs,y.capabilities=$,y.extensions=ee,y.properties=fe,y.renderLists=oe,y.shadowMap=ye,y.state=J,y.info=_e}d(De,"wt"),De();let ge=new l0(y,L);this.xr=ge,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(N,k,!1))},this.getSize=function(T){return T.set(N,k)},this.setSize=function(T,D,G=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,k=D,t.width=Math.floor(T*X),t.height=Math.floor(D*X),G===!0&&(t.style.width=T+"px",t.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(N*X,k*X).floor()},this.setDrawingBufferSize=function(T,D,G){N=T,k=D,X=G,t.width=Math.floor(T*G),t.height=Math.floor(D*G),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(Y)},this.setViewport=function(T,D,G,H){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,D,G,H),J.viewport(S.copy(Y).multiplyScalar(X).floor())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,D,G,H){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,D,G,H),J.scissor(C.copy(Q).multiplyScalar(X).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(T){J.setScissorTest(ie=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){se=T},this.getClearColor=function(T){return T.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(T=!0,D=!0,G=!0){let H=0;if(T){let F=!1;if(w!==null){let ce=w.texture.format;F=ce===rh||ce===ih||ce===th}if(F){let ce=w.texture.type,Ee=ce===Ri||ce===wi||ce===As||ce===Wi||ce===$l||ce===eh,Ce=he.getClearColor(),Ue=he.getClearAlpha(),Xe=Ce.r,ze=Ce.g,Ge=Ce.b;Ee?(p[0]=Xe,p[1]=ze,p[2]=Ge,p[3]=Ue,L.clearBufferuiv(L.COLOR,0,p)):(f[0]=Xe,f[1]=ze,f[2]=Ge,f[3]=Ue,L.clearBufferiv(L.COLOR,0,f))}else H|=L.COLOR_BUFFER_BIT}D&&(H|=L.DEPTH_BUFFER_BIT),G&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",U,!1),oe.dispose(),re.dispose(),fe.dispose(),Be.dispose(),Ne.dispose(),R.dispose(),$e.dispose(),Fe.dispose(),b.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",lt),ge.removeEventListener("sessionend",Ot),ve&&(ve.dispose(),ve=null),Ze.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}d(Ae,"Yt");function We(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let T=_e.autoReset,D=ye.enabled,G=ye.autoUpdate,H=ye.needsUpdate,F=ye.type;De(),_e.autoReset=T,ye.enabled=D,ye.autoUpdate=G,ye.needsUpdate=H,ye.type=F}d(We,"U");function U(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}d(U,"mt");function me(T){let D=T.target;D.removeEventListener("dispose",me),ne(D)}d(me,"it");function ne(T){W(T),fe.remove(T)}d(ne,"W");function W(T){let D=fe.get(T).programs;D!==void 0&&(D.forEach(function(G){b.releaseProgram(G)}),T.isShaderMaterial&&b.releaseShaderCache(T))}d(W,"lt"),this.renderBufferDirect=function(T,D,G,H,F,ce){D===null&&(D=be);let Ee=F.isMesh&&F.matrixWorld.determinant()<0,Ce=Hu(T,D,G,H,F);J.setMaterial(H,Ee);let Ue=G.index,Xe=1;if(H.wireframe===!0){if(Ue=dt.getWireframeAttribute(G),Ue===void 0)return;Xe=2}let ze=G.drawRange,Ge=G.attributes.position,bt=ze.start*Xe,pt=(ze.start+ze.count)*Xe;ce!==null&&(bt=Math.max(bt,ce.start*Xe),pt=Math.min(pt,(ce.start+ce.count)*Xe)),Ue!==null?(bt=Math.max(bt,0),pt=Math.min(pt,Ue.count)):Ge!=null&&(bt=Math.max(bt,0),pt=Math.min(pt,Ge.count));let Bt=pt-bt;if(Bt<0||Bt===1/0)return;$e.setup(F,H,Ce,G,Ue);let hi,ht=Ie;if(Ue!==null&&(hi=ot.get(Ue),ht=Ye,ht.setIndex(hi)),F.isMesh)H.wireframe===!0?(J.setLineWidth(H.wireframeLinewidth*He()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(F.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),J.setLineWidth(Ve*He()),F.isLineSegments?ht.setMode(L.LINES):F.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else F.isPoints?ht.setMode(L.POINTS):F.isSprite&&ht.setMode(L.TRIANGLES);if(F.isBatchedMesh)ht.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)ht.renderInstances(bt,Bt,F.count);else if(G.isInstancedBufferGeometry){let Ve=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bn=Math.min(G.instanceCount,Ve);ht.renderInstances(bt,Bt,bn)}else ht.render(bt,Bt)};function ue(T,D,G){T.transparent===!0&&T.side===Kt&&T.forceSinglePass===!1?(T.side=At,T.needsUpdate=!0,ma(T,D,G),T.side=ni,T.needsUpdate=!0,ma(T,D,G),T.side=Kt):ma(T,D,G)}d(ue,"Pt"),this.compile=function(T,D,G=null){G===null&&(G=T),v=re.get(G),v.init(),m.push(v),G.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(v.pushLight(F),F.castShadow&&v.pushShadow(F))}),T!==G&&T.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(v.pushLight(F),F.castShadow&&v.pushShadow(F))}),v.setupLights(y._useLegacyLights);let H=new Set;return T.traverse(function(F){let ce=F.material;if(ce)if(Array.isArray(ce))for(let Ee=0;Ee<ce.length;Ee++){let Ce=ce[Ee];ue(Ce,G,F),H.add(Ce)}else ue(ce,G,F),H.add(ce)}),m.pop(),v=null,H},this.compileAsync=function(T,D,G=null){let H=this.compile(T,D,G);return new Promise(F=>{function ce(){if(H.forEach(function(Ee){fe.get(Ee).currentProgram.isReady()&&H.delete(Ee)}),H.size===0){F(T);return}setTimeout(ce,10)}d(ce,"gt"),ee.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let we=null;function rt(T){we&&we(T)}d(rt,"ve");function lt(){Ze.stop()}d(lt,"Ue");function Ot(){Ze.start()}d(Ot,"ie");let Ze=new Rh;Ze.setAnimationLoop(rt),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(T){we=T,ge.setAnimationLoop(T),T===null?Ze.stop():Ze.start()},ge.addEventListener("sessionstart",lt),ge.addEventListener("sessionend",Ot),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(D),D=ge.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,D,w),v=re.get(T,m.length),v.init(),m.push(v),Se.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),B.setFromProjectionMatrix(Se),pe=this.localClippingEnabled,Z=te.init(this.clippingPlanes,pe),_=oe.get(T,g.length),_.init(),g.push(_),ei(T,D,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(K,se),this.info.render.frame++,Z===!0&&te.beginShadows();let G=v.state.shadowsArray;if(ye.render(G,T,D),Z===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(_,T),v.setupLights(y._useLegacyLights),D.isArrayCamera){let H=D.cameras;for(let F=0,ce=H.length;F<ce;F++){let Ee=H[F];ti(_,T,Ee,Ee.viewport)}}else ti(_,T,D);w!==null&&(xe.updateMultisampleRenderTarget(w),xe.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(y,T,D),$e.resetDefaultState(),P=-1,I=null,m.pop(),m.length>0?v=m[m.length-1]:v=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function ei(T,D,G,H){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||B.intersectsSprite(T)){H&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);let ce=R.update(T),Ee=T.material;Ee.visible&&_.push(T,ce,Ee,G,ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||B.intersectsObject(T))){let ce=R.update(T),Ee=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),ke.copy(ce.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(Ee)){let Ce=ce.groups;for(let Ue=0,Xe=Ce.length;Ue<Xe;Ue++){let ze=Ce[Ue],Ge=Ee[ze.materialIndex];Ge&&Ge.visible&&_.push(T,ce,Ge,G,ke.z,ze)}}else Ee.visible&&_.push(T,ce,Ee,G,ke.z,null)}}let F=T.children;for(let ce=0,Ee=F.length;ce<Ee;ce++)ei(F[ce],D,G,H)}d(ei,"an");function ti(T,D,G,H){let F=T.opaque,ce=T.transmissive,Ee=T.transparent;v.setupLightsView(G),Z===!0&&te.setGlobalState(y.clippingPlanes,G),ce.length>0&&ku(F,ce,D,G),H&&J.viewport(S.copy(H)),F.length>0&&pa(F,D,G),ce.length>0&&pa(ce,D,G),Ee.length>0&&pa(Ee,D,G),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}d(ti,"gl");function ku(T,D,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let F=$.isWebGL2;ve===null&&(ve=new Dt(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?Jt:Ri,minFilter:Ci,samples:F?4:0})),y.getDrawingBufferSize(Re),F?ve.setSize(Re.x,Re.y):ve.setSize(sn(Re.x),sn(Re.y));let ce=y.getRenderTarget();y.setRenderTarget(ve),y.getClearColor(V),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear();let Ee=y.toneMapping;y.toneMapping=Ei,pa(T,G,H),xe.updateMultisampleRenderTarget(ve),xe.updateRenderTargetMipmap(ve);let Ce=!1;for(let Ue=0,Xe=D.length;Ue<Xe;Ue++){let ze=D[Ue],Ge=ze.object,bt=ze.geometry,pt=ze.material,Bt=ze.group;if(pt.side===Kt&&Ge.layers.test(H.layers)){let hi=pt.side;pt.side=At,pt.needsUpdate=!0,Qs(Ge,G,H,bt,pt,Bt),pt.side=hi,pt.needsUpdate=!0,Ce=!0}}Ce===!0&&(xe.updateMultisampleRenderTarget(ve),xe.updateRenderTargetMipmap(ve)),y.setRenderTarget(ce),y.setClearColor(V,j),y.toneMapping=Ee}d(ku,"sf");function pa(T,D,G){let H=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ce=T.length;F<ce;F++){let Ee=T[F],Ce=Ee.object,Ue=Ee.geometry,Xe=H===null?Ee.material:H,ze=Ee.group;Ce.layers.test(G.layers)&&Qs(Ce,D,G,Ue,Xe,ze)}}d(pa,"Zs");function Qs(T,D,G,H,F,ce){T.onBeforeRender(y,D,G,H,F,ce),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(y,D,G,H,T,ce),F.transparent===!0&&F.side===Kt&&F.forceSinglePass===!1?(F.side=At,F.needsUpdate=!0,y.renderBufferDirect(G,D,H,F,T,ce),F.side=ni,F.needsUpdate=!0,y.renderBufferDirect(G,D,H,F,T,ce),F.side=Kt):y.renderBufferDirect(G,D,H,F,T,ce),T.onAfterRender(y,D,G,H,F,ce)}d(Qs,"_l");function ma(T,D,G){D.isScene!==!0&&(D=be);let H=fe.get(T),F=v.state.lights,ce=v.state.shadowsArray,Ee=F.state.version,Ce=b.getParameters(T,F.state,ce,D,G),Ue=b.getProgramCacheKey(Ce),Xe=H.programs;H.environment=T.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(T.isMeshStandardMaterial?Ne:Be).get(T.envMap||H.environment),Xe===void 0&&(T.addEventListener("dispose",me),Xe=new Map,H.programs=Xe);let ze=Xe.get(Ue);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===Ee)return eo(T,Ce),ze}else Ce.uniforms=b.getUniforms(T),T.onBuild(G,Ce,y),T.onBeforeCompile(Ce,y),ze=b.acquireProgram(Ce,Ue),Xe.set(Ue,ze),H.uniforms=Ce.uniforms;let Ge=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=te.uniform),eo(T,Ce),H.needsLights=Wu(T),H.lightsStateVersion=Ee,H.needsLights&&(Ge.ambientLightColor.value=F.state.ambient,Ge.lightProbe.value=F.state.probe,Ge.directionalLights.value=F.state.directional,Ge.directionalLightShadows.value=F.state.directionalShadow,Ge.spotLights.value=F.state.spot,Ge.spotLightShadows.value=F.state.spotShadow,Ge.rectAreaLights.value=F.state.rectArea,Ge.ltc_1.value=F.state.rectAreaLTC1,Ge.ltc_2.value=F.state.rectAreaLTC2,Ge.pointLights.value=F.state.point,Ge.pointLightShadows.value=F.state.pointShadow,Ge.hemisphereLights.value=F.state.hemi,Ge.directionalShadowMap.value=F.state.directionalShadowMap,Ge.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ge.spotShadowMap.value=F.state.spotShadowMap,Ge.spotLightMatrix.value=F.state.spotLightMatrix,Ge.spotLightMap.value=F.state.spotLightMap,Ge.pointShadowMap.value=F.state.pointShadowMap,Ge.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=ze,H.uniformsList=null,ze}d(ma,"Js");function $s(T){if(T.uniformsList===null){let D=T.currentProgram.getUniforms();T.uniformsList=Ja.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}d($s,"xl");function eo(T,D){let G=fe.get(T);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}d(eo,"vl");function Hu(T,D,G,H,F){D.isScene!==!0&&(D=be),xe.resetTextureUnits();let ce=D.fog,Ee=H.isMeshStandardMaterial?D.environment:null,Ce=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:xt,Ue=(H.isMeshStandardMaterial?Ne:Be).get(H.envMap||Ee),Xe=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ge=!!G.morphAttributes.position,bt=!!G.morphAttributes.normal,pt=!!G.morphAttributes.color,Bt=Ei;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Bt=y.toneMapping);let hi=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=hi!==void 0?hi.length:0,Ve=fe.get(H),bn=v.state.lights;if(Z===!0&&(pe===!0||T!==I)){let Ft=T===I&&H.id===P;te.setState(H,T,Ft)}let Sn=!1;H.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==bn.state.version||Ve.outputColorSpace!==Ce||F.isBatchedMesh&&Ve.batching===!1||!F.isBatchedMesh&&Ve.batching===!0||F.isInstancedMesh&&Ve.instancing===!1||!F.isInstancedMesh&&Ve.instancing===!0||F.isSkinnedMesh&&Ve.skinning===!1||!F.isSkinnedMesh&&Ve.skinning===!0||F.isInstancedMesh&&Ve.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ve.instancingColor===!1&&F.instanceColor!==null||Ve.envMap!==Ue||H.fog===!0&&Ve.fog!==ce||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==te.numPlanes||Ve.numIntersection!==te.numIntersection)||Ve.vertexAlphas!==Xe||Ve.vertexTangents!==ze||Ve.morphTargets!==Ge||Ve.morphNormals!==bt||Ve.morphColors!==pt||Ve.toneMapping!==Bt||$.isWebGL2===!0&&Ve.morphTargetsCount!==ht)&&(Sn=!0):(Sn=!0,Ve.__version=H.version);let Ni=Ve.currentProgram;Sn===!0&&(Ni=ma(H,D,F));let to=!1,Vr=!1,Tn=!1,St=Ni.getUniforms(),Ui=Ve.uniforms;if(J.useProgram(Ni.program)&&(to=!0,Vr=!0,Tn=!0),H.id!==P&&(P=H.id,Vr=!0),to||I!==T){St.setValue(L,"projectionMatrix",T.projectionMatrix),St.setValue(L,"viewMatrix",T.matrixWorldInverse);let Ft=St.map.cameraPosition;Ft!==void 0&&Ft.setValue(L,ke.setFromMatrixPosition(T.matrixWorld)),$.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&St.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),I!==T&&(I=T,Vr=!0,Tn=!0)}if(F.isSkinnedMesh){St.setOptional(L,F,"bindMatrix"),St.setOptional(L,F,"bindMatrixInverse");let Ft=F.skeleton;Ft&&($.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),St.setValue(L,"boneTexture",Ft.boneTexture,xe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(St.setOptional(L,F,"batchingTexture"),St.setValue(L,"batchingTexture",F._matricesTexture,xe));let wn=G.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0&&$.isWebGL2===!0)&&Me.update(F,G,Ni),(Vr||Ve.receiveShadow!==F.receiveShadow)&&(Ve.receiveShadow=F.receiveShadow,St.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ui.envMap.value=Ue,Ui.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Vr&&(St.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&Vu(Ui,Tn),ce&&H.fog===!0&&z.refreshFogUniforms(Ui,ce),z.refreshMaterialUniforms(Ui,H,X,k,ve),Ja.upload(L,$s(Ve),Ui,xe)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ja.upload(L,$s(Ve),Ui,xe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&St.setValue(L,"center",F.center),St.setValue(L,"modelViewMatrix",F.modelViewMatrix),St.setValue(L,"normalMatrix",F.normalMatrix),St.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Ft=H.uniformsGroups;for(let An=0,Xu=Ft.length;An<Xu;An++)if($.isWebGL2){let io=Ft[An];Fe.update(io,Ni),Fe.bind(io,Ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ni}d(Hu,"rf");function Vu(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}d(Vu,"af");function Wu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}d(Wu,"of"),this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,D,G){fe.get(T.texture).__webglTexture=D,fe.get(T.depthTexture).__webglTexture=G;let H=fe.get(T);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,D){let G=fe.get(T);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,G=0){w=T,M=D,A=G;let H=!0,F=null,ce=!1,Ee=!1;if(T){let Ce=fe.get(T);Ce.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(L.FRAMEBUFFER,null),H=!1):Ce.__webglFramebuffer===void 0?xe.setupRenderTarget(T):Ce.__hasExternalTextures&&xe.rebindTextures(T,fe.get(T.texture).__webglTexture,fe.get(T.depthTexture).__webglTexture);let Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ee=!0);let Xe=fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[D])?F=Xe[D][G]:F=Xe[D],ce=!0):$.isWebGL2&&T.samples>0&&xe.useMultisampledRTT(T)===!1?F=fe.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?F=Xe[G]:F=Xe,S.copy(T.viewport),C.copy(T.scissor),O=T.scissorTest}else S.copy(Y).multiplyScalar(X).floor(),C.copy(Q).multiplyScalar(X).floor(),O=ie;if(J.bindFramebuffer(L.FRAMEBUFFER,F)&&$.drawBuffers&&H&&J.drawBuffers(T,F),J.viewport(S),J.scissor(C),J.setScissorTest(O),ce){let Ce=fe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ce.__webglTexture,G)}else if(Ee){let Ce=fe.get(T.texture),Ue=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.__webglTexture,G||0,Ue)}P=-1},this.readRenderTargetPixels=function(T,D,G,H,F,ce,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){J.bindFramebuffer(L.FRAMEBUFFER,Ce);try{let Ue=T.texture,Xe=Ue.format,ze=Ue.type;if(Xe!==Gt&&ae.convert(Xe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ge=ze===Jt&&(ee.has("EXT_color_buffer_half_float")||$.isWebGL2&&ee.has("EXT_color_buffer_float"));if(ze!==Ri&&ae.convert(ze)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===vi&&($.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-H&&G>=0&&G<=T.height-F&&L.readPixels(D,G,H,F,ae.convert(Xe),ae.convert(ze),ce)}finally{let Ue=w!==null?fe.get(w).__webglFramebuffer:null;J.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(T,D,G=0){let H=Math.pow(2,-G),F=Math.floor(D.image.width*H),ce=Math.floor(D.image.height*H);xe.setTexture2D(D,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,T.x,T.y,F,ce),J.unbindTexture()},this.copyTextureToTexture=function(T,D,G,H=0){let F=D.image.width,ce=D.image.height,Ee=ae.convert(G.format),Ce=ae.convert(G.type);xe.setTexture2D(G,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment),D.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,T.x,T.y,F,ce,Ee,Ce,D.image.data):D.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,T.x,T.y,D.mipmaps[0].width,D.mipmaps[0].height,Ee,D.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,H,T.x,T.y,Ee,Ce,D.image),H===0&&G.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(T,D,G,H,F=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ce=T.max.x-T.min.x+1,Ee=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,Ue=ae.convert(H.format),Xe=ae.convert(H.type),ze;if(H.isData3DTexture)xe.setTexture3D(H,0),ze=L.TEXTURE_3D;else if(H.isDataArrayTexture)xe.setTexture2DArray(H,0),ze=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);let Ge=L.getParameter(L.UNPACK_ROW_LENGTH),bt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pt=L.getParameter(L.UNPACK_SKIP_PIXELS),Bt=L.getParameter(L.UNPACK_SKIP_ROWS),hi=L.getParameter(L.UNPACK_SKIP_IMAGES),ht=G.isCompressedTexture?G.mipmaps[0]:G.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,T.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,T.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?L.texSubImage3D(ze,F,D.x,D.y,D.z,ce,Ee,Ce,Ue,Xe,ht.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(ze,F,D.x,D.y,D.z,ce,Ee,Ce,Ue,ht.data)):L.texSubImage3D(ze,F,D.x,D.y,D.z,ce,Ee,Ce,Ue,Xe,ht),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ge),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,hi),F===0&&H.generateMipmaps&&L.generateMipmap(ze),J.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),J.unbindTexture()},this.resetState=function(){M=0,A=0,w=null,J.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Es?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===cn?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?ji:sh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ji?nt:xt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},"Go"),c0=d(class extends Ps{},"Wo");c0.prototype.isWebGL1Renderer=!0;var fn=d(class extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},"Yo"),Is=d(class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ht()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},"zs"),Et=new E,Ns=d(class Bh{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Et.fromBufferAttribute(this,i),Et.applyMatrix4(t),this.setXYZ(i,Et.x,Et.y,Et.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Et.fromBufferAttribute(this,i),Et.applyNormalMatrix(t),this.setXYZ(i,Et.x,Et.y,Et.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Et.fromBufferAttribute(this,i),Et.transformDirection(t),this.setXYZ(i,Et.x,Et.y,Et.z);return this}setX(t,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=ri(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=ri(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=ri(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=ri(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=Qe(i,this.array),r=Qe(r,this.array),a=Qe(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=Qe(i,this.array),r=Qe(r,this.array),a=Qe(a,this.array),n=Qe(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Mt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Bh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},"s");var M_=new E,b_=new E,S_=new E,T_=new q,w_=new q,A_=new Le,E_=new E,R_=new E,C_=new E,L_=new q,P_=new q,I_=new q;var N_=new E,U_=new E;var Tl=new E,wl=new tt,Al=new tt,d0=new E,El=new Le,Ba=new E,is=new Wt,Rl=new Le,rs=new dn,Fh=d(class extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lo,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ba),this.boundingBox.expandByPoint(Ba)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ba),this.boundingSphere.expandByPoint(Ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(r),e.ray.intersectsSphere(is)!==!1&&(Rl.copy(r).invert(),rs.copy(e.ray).applyMatrix4(Rl),!(this.boundingBox!==null&&rs.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ac?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;wl.fromBufferAttribute(r.attributes.skinIndex,e),Al.fromBufferAttribute(r.attributes.skinWeight,e),Tl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){let n=Al.getComponent(a);if(n!==0){let s=wl.getComponent(a);El.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),t.addScaledVector(d0.copy(Tl).applyMatrix4(El),n)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},"$o"),Us=d(class extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},"fa"),p0=d(class extends Pt{constructor(e=null,t=1,i=1,r,a,n,s,o,l=mt,h=mt,u,c){super(null,n,s,o,l,h,r,a,u,c),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},"kn"),Cl=new Le,m0=new Le,zh=d(class Gh{constructor(t=[],i=[]){this.uuid=Ht(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){let r=new Le;this.bones[t]&&r.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&r.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){let t=this.bones,i=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let n=0,s=t.length;n<s;n++){let o=t[n]?t[n].matrixWorld:m0;Cl.multiplyMatrices(o,i[n]),Cl.toArray(r,n*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Gh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let i=new Float32Array(t*t*4);i.set(this.boneMatrices);let r=new p0(i,t,t,Gt,vi);return r.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=r,this}getBoneByName(t){for(let i=0,r=this.bones.length;i<r;i++){let a=this.bones[i];if(a.name===t)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let r=0,a=t.bones.length;r<a;r++){let n=t.bones[r],s=i[n];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),s=new Us),this.bones.push(s),this.boneInverses.push(new Le().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let i=this.bones,r=this.boneInverses;for(let a=0,n=i.length;a<n;a++){let s=i[a];t.bones.push(s.uuid);let o=r[a];t.boneInverses.push(o.toArray())}return t}},"s"),sa=d(class extends Mt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},"_i"),vr=new Le,Ll=new Le,Fa=[],Pl=new Vt,f0=new Le,Yr=new Je,Zr=new Wt,kh=d(class extends Je{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sa(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,f0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vr),Pl.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union(Pl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vr),Zr.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(Zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(i),e.ray.intersectsSphere(Zr)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,vr),Ll.multiplyMatrices(i,vr),Yr.matrixWorld=Ll,Yr.raycast(e,Fa);for(let n=0,s=Fa.length;n<s;n++){let o=Fa[n];o.instanceId=a,o.object=this,t.push(o)}Fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},"Qo");var g0=d(class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let a=i[this.index];r.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t}reset(){this.list.length=0,this.index=0}},"jo");var D_=new Le,O_=new Le,B_=new Le,F_=new Le,z_=new pn,G_=new Vt,k_=new Wt,H_=new E,V_=new g0,W_=new Je;var Ds=d(class extends $t{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},"Ie"),Il=new E,Nl=new E,Ul=new Le,as=new dn,za=new Wt,gn=d(class extends ct{constructor(e=new it,t=new Ds){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Il.fromBufferAttribute(t,r-1),Nl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Il.distanceTo(Nl);e.setAttribute("lineDistance",new Pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),za.radius+=a,e.ray.intersectsSphere(za)===!1)return;Ul.copy(r).invert(),as.copy(e.ray).applyMatrix4(Ul);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=new E,h=new E,u=new E,c=new E,p=this.isLineSegments?2:1,f=i.index,_=i.attributes.position;if(f!==null){let v=Math.max(0,n.start),g=Math.min(f.count,n.start+n.count);for(let m=v,y=g-1;m<y;m+=p){let x=f.getX(m),M=f.getX(m+1);if(l.fromBufferAttribute(_,x),h.fromBufferAttribute(_,M),as.distanceSqToSegment(l,h,c,u)>o)continue;c.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(c);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{let v=Math.max(0,n.start),g=Math.min(_.count,n.start+n.count);for(let m=v,y=g-1;m<y;m+=p){if(l.fromBufferAttribute(_,m),h.fromBufferAttribute(_,m+1),as.distanceSqToSegment(l,h,c,u)>o)continue;c.applyMatrix4(this.matrixWorld);let x=e.ray.origin.distanceTo(c);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}},"An"),Dl=new E,Ol=new E,Hh=d(class extends gn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Dl.fromBufferAttribute(t,r),Ol.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Dl.distanceTo(Ol);e.setAttribute("lineDistance",new Pe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},"rn"),Vh=d(class extends gn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},"ec"),Os=d(class extends $t{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},"pa"),Bl=new Le,ys=new dn,Ga=new Wt,ka=new E,Wh=d(class extends ct{constructor(e=new it,t=new Os){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=a,e.ray.intersectsSphere(Ga)===!1)return;Bl.copy(r).invert(),ys.copy(e.ray).applyMatrix4(Bl);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(l!==null){let u=Math.max(0,n.start),c=Math.min(l.count,n.start+n.count);for(let p=u,f=c;p<f;p++){let _=l.getX(p);ka.fromBufferAttribute(h,_),Fl(ka,_,o,r,e,t,this)}}else{let u=Math.max(0,n.start),c=Math.min(h.count,n.start+n.count);for(let p=u,f=c;p<f;p++)ka.fromBufferAttribute(h,p),Fl(ka,p,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}},"ic");function Fl(e,t,i,r,a,n,s){let o=ys.distanceSqToPoint(e);if(o<i){let l=new E;ys.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:s})}}d(Fl,"mu");var si=d(class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],u=i[r+1]-h,c=(n-h)/u;return(r+c)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new q:new E);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new E,r=[],a=[],n=[],s=new E,o=new Le;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new E)}a[0]=new E,n[0]=new E;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),c=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),c<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),n[p]=n[p-1].clone(),s.crossVectors(r[p-1],r[p]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(ft(r[p-1].dot(r[p]),-1,1));a[p].applyMatrix4(o.makeRotationAxis(s,f))}n[p].crossVectors(r[p],a[p])}if(t===!0){let p=Math.acos(ft(a[0].dot(a[e]),-1,1));p/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(p=-p);for(let f=1;f<=e;f++)a[f].applyMatrix4(o.makeRotationAxis(r[f],p*f)),n[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},"Qe"),Bs=d(class extends si{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t){let i=t||new q,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),c=o-this.aX,p=l-this.aY;o=c*h-p*u+this.aX,l=c*u+p*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},"ks"),v0=d(class extends Bs{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}},"sc");function Fs(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return d(a,"i"),{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,u,c){let p=(s-n)/h-(o-n)/(h+u)+(o-s)/u,f=(o-s)/u-(l-s)/(u+c)+(l-o)/c;p*=u,f*=u,a(s,o,p,f)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}d(Fs,"dl");var Ha=new E,ns=new Fs,ss=new Fs,os=new Fs,_0=d(class extends si{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new E){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(Ha.subVectors(r[0],r[1]).add(r[0]),l=Ha);let u=r[s%a],c=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(Ha.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(c),p),v=Math.pow(c.distanceToSquared(h),p);_<1e-4&&(_=1),f<1e-4&&(f=_),v<1e-4&&(v=_),ns.initNonuniformCatmullRom(l.x,u.x,c.x,h.x,f,_,v),ss.initNonuniformCatmullRom(l.y,u.y,c.y,h.y,f,_,v),os.initNonuniformCatmullRom(l.z,u.z,c.z,h.z,f,_,v)}else this.curveType==="catmullrom"&&(ns.initCatmullRom(l.x,u.x,c.x,h.x,this.tension),ss.initCatmullRom(l.y,u.y,c.y,h.y,this.tension),os.initCatmullRom(l.z,u.z,c.z,h.z,this.tension));return i.set(ns.calc(o),ss.calc(o),os.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new E().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},"rc");function zl(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}d(zl,"Mu");function x0(e,t){let i=1-e;return i*i*t}d(x0,"Ex");function y0(e,t){return 2*(1-e)*e*t}d(y0,"Tx");function M0(e,t){return e*e*t}d(M0,"Ax");function ia(e,t,i,r){return x0(e,t)+y0(e,i)+M0(e,r)}d(ia,"Ps");function b0(e,t){let i=1-e;return i*i*i*t}d(b0,"wx");function S0(e,t){let i=1-e;return 3*i*i*e*t}d(S0,"Rx");function T0(e,t){return 3*(1-e)*e*e*t}d(T0,"Cx");function w0(e,t){return e*e*e*t}d(w0,"Px");function ra(e,t,i,r,a){return b0(e,t)+S0(e,i)+T0(e,r)+w0(e,a)}d(ra,"Ls");var Xh=d(class extends si{constructor(e=new q,t=new q,i=new q,r=new q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new q){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(ra(e,r.x,a.x,n.x,s.x),ra(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},"ma"),A0=d(class extends si{constructor(e=new E,t=new E,i=new E,r=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new E){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(ra(e,r.x,a.x,n.x,s.x),ra(e,r.y,a.y,n.y,s.y),ra(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},"ac"),jh=d(class extends si{constructor(e=new q,t=new q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new q){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},"ga"),E0=d(class extends si{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},"oc"),qh=d(class extends si{constructor(e=new q,t=new q,i=new q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new q){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(ia(e,r.x,a.x,n.x),ia(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},"_a"),Yh=d(class extends si{constructor(e=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(ia(e,r.x,a.x,n.x),ia(e,r.y,a.y,n.y),ia(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},"xa"),Zh=d(class extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new q){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],u=r[n>r.length-3?r.length-1:n+2];return i.set(zl(s,o.x,l.x,h.x,u.x),zl(s,o.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new q().fromArray(r))}return this}},"va"),ln=Object.freeze({__proto__:null,ArcCurve:v0,CatmullRomCurve3:_0,CubicBezierCurve:Xh,CubicBezierCurve3:A0,EllipseCurve:Bs,LineCurve:jh,LineCurve3:E0,QuadraticBezierCurve:qh,QuadraticBezierCurve3:Yh,SplineCurve:Zh}),R0=d(class extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ln[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new ln[r.type]().fromJSON(r))}return this}},"cc"),Ms=d(class extends R0{constructor(e){super(),this.type="Path",this.currentPoint=new q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new jh(this.currentPoint.clone(),new q(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new qh(this.currentPoint.clone(),new q(e,t),new q(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new Xh(this.currentPoint.clone(),new q(e,t),new q(i,r),new q(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Zh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new Bs(e,t,i,r,a,n,s,o);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},"rs"),Kh=d(class Jh extends it{constructor(t=[new q(0,-.5),new q(.5,0),new q(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=ft(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],u=1/i,c=new E,p=new q,f=new E,_=new E,v=new E,g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(_)}for(let y=0;y<=i;y++){let x=r+y*u*a,M=Math.sin(x),A=Math.cos(x);for(let w=0;w<=t.length-1;w++){c.x=t[w].x*M,c.y=t[w].y,c.z=t[w].x*A,s.push(c.x,c.y,c.z),p.x=y/i,p.y=w/(t.length-1),o.push(p.x,p.y);let P=l[3*w+0]*M,I=l[3*w+1],S=l[3*w+0]*A;h.push(P,I,S)}}for(let y=0;y<i;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,A=M,w=M+t.length,P=M+t.length+1,I=M+1;n.push(A,w,I),n.push(P,I,w)}this.setIndex(n),this.setAttribute("position",new Pe(s,3)),this.setAttribute("uv",new Pe(o,2)),this.setAttribute("normal",new Pe(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jh(t.points,t.segments,t.phiStart,t.phiLength)}},"s"),C0=d(class Qh extends Kh{constructor(t=1,i=1,r=4,a=8){let n=new Ms;n.absarc(0,-i/2,t,Math.PI*1.5,0),n.absarc(0,i/2,t,0,Math.PI*.5),super(n.getPoints(r),a),this.type="CapsuleGeometry",this.parameters={radius:t,length:i,capSegments:r,radialSegments:a}}static fromJSON(t){return new Qh(t.radius,t.length,t.capSegments,t.radialSegments)}},"s"),L0=d(class $h extends it{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new E,u=new q;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let c=0,p=3;c<=i;c++,p+=3){let f=r+c/i*a;h.x=t*Math.cos(f),h.y=t*Math.sin(f),s.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(s[p]/t+1)/2,u.y=(s[p+1]/t+1)/2,l.push(u.x,u.y)}for(let c=1;c<=i;c++)n.push(c,c+1,0);this.setIndex(n),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $h(t.radius,t.segments,t.thetaStart,t.thetaLength)}},"s"),eu=d(class tu extends it{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let u=[],c=[],p=[],f=[],_=0,v=[],g=r/2,m=0;y(),s===!1&&(t>0&&x(!0),i>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(p,3)),this.setAttribute("uv",new Pe(f,2));function y(){let M=new E,A=new E,w=0,P=(i-t)/r;for(let I=0;I<=n;I++){let S=[],C=I/n,O=C*(i-t)+t;for(let V=0;V<=a;V++){let j=V/a,N=j*l+o,k=Math.sin(N),X=Math.cos(N);A.x=O*k,A.y=-C*r+g,A.z=O*X,c.push(A.x,A.y,A.z),M.set(k,P,X).normalize(),p.push(M.x,M.y,M.z),f.push(j,1-C),S.push(_++)}v.push(S)}for(let I=0;I<a;I++)for(let S=0;S<n;S++){let C=v[S][I],O=v[S+1][I],V=v[S+1][I+1],j=v[S][I+1];u.push(C,O,j),u.push(O,V,j),w+=6}h.addGroup(m,w,0),m+=w}d(y,"v");function x(M){let A=_,w=new q,P=new E,I=0,S=M===!0?t:i,C=M===!0?1:-1;for(let V=1;V<=a;V++)c.push(0,g*C,0),p.push(0,C,0),f.push(.5,.5),_++;let O=_;for(let V=0;V<=a;V++){let j=V/a*l+o,N=Math.cos(j),k=Math.sin(j);P.x=S*k,P.y=g*C,P.z=S*N,c.push(P.x,P.y,P.z),p.push(0,C,0),w.x=N*.5+.5,w.y=k*.5*C+.5,f.push(w.x,w.y),_++}for(let V=0;V<a;V++){let j=A+V,N=O+V;M===!0?u.push(N,N+1,j):u.push(N+1,N,j),I+=3}h.addGroup(m,I,M===!0?1:2),m+=I}d(x,"x")}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},"s"),P0=d(class iu extends eu{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new iu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},"s"),ca=d(class ru extends it{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),h(r),u(),this.setAttribute("position",new Pe(n,3)),this.setAttribute("normal",new Pe(n.slice(),3)),this.setAttribute("uv",new Pe(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new E,M=new E,A=new E;for(let w=0;w<i.length;w+=3)f(i[w+0],x),f(i[w+1],M),f(i[w+2],A),l(x,M,A,y)}d(o,"o");function l(y,x,M,A){let w=A+1,P=[];for(let I=0;I<=w;I++){P[I]=[];let S=y.clone().lerp(M,I/w),C=x.clone().lerp(M,I/w),O=w-I;for(let V=0;V<=O;V++)V===0&&I===w?P[I][V]=S:P[I][V]=S.clone().lerp(C,V/O)}for(let I=0;I<w;I++)for(let S=0;S<2*(w-I)-1;S++){let C=Math.floor(S/2);S%2===0?(p(P[I][C+1]),p(P[I+1][C]),p(P[I][C])):(p(P[I][C+1]),p(P[I+1][C+1]),p(P[I+1][C]))}}d(l,"c");function h(y){let x=new E;for(let M=0;M<n.length;M+=3)x.x=n[M+0],x.y=n[M+1],x.z=n[M+2],x.normalize().multiplyScalar(y),n[M+0]=x.x,n[M+1]=x.y,n[M+2]=x.z}d(h,"l");function u(){let y=new E;for(let x=0;x<n.length;x+=3){y.x=n[x+0],y.y=n[x+1],y.z=n[x+2];let M=g(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;s.push(M,1-A)}_(),c()}d(u,"h");function c(){for(let y=0;y<s.length;y+=6){let x=s[y+0],M=s[y+2],A=s[y+4],w=Math.max(x,M,A),P=Math.min(x,M,A);w>.9&&P<.1&&(x<.2&&(s[y+0]+=1),M<.2&&(s[y+2]+=1),A<.2&&(s[y+4]+=1))}}d(c,"u");function p(y){n.push(y.x,y.y,y.z)}d(p,"d");function f(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}d(f,"f");function _(){let y=new E,x=new E,M=new E,A=new E,w=new q,P=new q,I=new q;for(let S=0,C=0;S<n.length;S+=9,C+=6){y.set(n[S+0],n[S+1],n[S+2]),x.set(n[S+3],n[S+4],n[S+5]),M.set(n[S+6],n[S+7],n[S+8]),w.set(s[C+0],s[C+1]),P.set(s[C+2],s[C+3]),I.set(s[C+4],s[C+5]),A.copy(y).add(x).add(M).divideScalar(3);let O=g(A);v(w,C+0,y,O),v(P,C+2,x,O),v(I,C+4,M,O)}}d(_,"m");function v(y,x,M,A){A<0&&y.x===1&&(s[x]=y.x-1),M.x===0&&M.z===0&&(s[x]=A/2/Math.PI+.5)}d(v,"_");function g(y){return Math.atan2(y.z,-y.x)}d(g,"g");function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}d(m,"p")}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.vertices,t.indices,t.radius,t.details)}},"s"),I0=d(class au extends ca{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new au(t.radius,t.detail)}},"s"),Va=new E,Wa=new E,ls=new E,Xa=new Jr,N0=d(class extends it{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(br*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),u={},c=[];for(let p=0;p<s;p+=3){a?(o[0]=a.getX(p),o[1]=a.getX(p+1),o[2]=a.getX(p+2)):(o[0]=p,o[1]=p+1,o[2]=p+2);let{a:f,b:_,c:v}=Xa;if(f.fromBufferAttribute(n,o[0]),_.fromBufferAttribute(n,o[1]),v.fromBufferAttribute(n,o[2]),Xa.getNormal(ls),h[0]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let g=0;g<3;g++){let m=(g+1)%3,y=h[g],x=h[m],M=Xa[l[g]],A=Xa[l[m]],w=`${y}_${x}`,P=`${x}_${y}`;P in u&&u[P]?(ls.dot(u[P].normal)<=r&&(c.push(M.x,M.y,M.z),c.push(A.x,A.y,A.z)),u[P]=null):w in u||(u[w]={index0:o[g],index1:o[m],normal:ls.clone()})}}for(let p in u)if(u[p]){let{index0:f,index1:_}=u[p];Va.fromBufferAttribute(n,f),Wa.fromBufferAttribute(n,_),c.push(Va.x,Va.y,Va.z),c.push(Wa.x,Wa.y,Wa.z)}this.setAttribute("position",new Pe(c,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},"fc"),nu=d(class extends Ms{constructor(e){super(e),this.uuid=Ht(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ms().fromJSON(r))}return this}},"Hn"),U0={triangulate:function(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=su(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h,u,c,p,f;if(r&&(n=z0(e,t,n,i)),e.length>80*i){o=h=e[0],l=u=e[1];for(let _=i;_<a;_+=i)c=e[_],p=e[_+1],c<o&&(o=c),p<l&&(l=p),c>h&&(h=c),p>u&&(u=p);f=Math.max(h-o,u-l),f=f!==0?32767/f:0}return oa(n,s,i,o,l,f,0),s}};function su(e,t,i,r,a){let n,s;if(a===K0(e,t,i,r)>0)for(n=t;n<i;n+=r)s=Gl(n,e[n],e[n+1],s);else for(n=i-r;n>=t;n-=r)s=Gl(n,e[n],e[n+1],s);return s&&vn(s,s.next)&&(ha(s),s=s.next),s}d(su,"Kd");function Zi(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(vn(i,i.next)||st(i.prev,i,i.next)===0)){if(ha(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}d(Zi,"vi");function oa(e,t,i,r,a,n,s){if(!e)return;!s&&n&&W0(e,r,a,n);let o=e,l,h;for(;e.prev!==e.next;){if(l=e.prev,h=e.next,n?O0(e,r,a,n):D0(e)){t.push(l.i/i|0),t.push(e.i/i|0),t.push(h.i/i|0),ha(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=B0(Zi(e),t,i),oa(e,t,i,r,a,n,2)):s===2&&F0(e,t,i,r,a,n):oa(Zi(e),t,i,r,a,n,1);break}}}d(oa,"Gs");function D0(e){let t=e.prev,i=e,r=e.next;if(st(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,u=a<n?a<s?a:s:n<s?n:s,c=o<l?o<h?o:h:l<h?l:h,p=a>n?a>s?a:s:n>s?n:s,f=o>l?o>h?o:h:l>h?l:h,_=r.next;for(;_!==t;){if(_.x>=u&&_.x<=p&&_.y>=c&&_.y<=f&&yr(a,o,n,l,s,h,_.x,_.y)&&st(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}d(D0,"Ix");function O0(e,t,i,r){let a=e.prev,n=e,s=e.next;if(st(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,u=a.y,c=n.y,p=s.y,f=o<l?o<h?o:h:l<h?l:h,_=u<c?u<p?u:p:c<p?c:p,v=o>l?o>h?o:h:l>h?l:h,g=u>c?u>p?u:p:c>p?c:p,m=bs(f,_,t,i,r),y=bs(v,g,t,i,r),x=e.prevZ,M=e.nextZ;for(;x&&x.z>=m&&M&&M.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=_&&x.y<=g&&x!==a&&x!==s&&yr(o,u,l,c,h,p,x.x,x.y)&&st(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=v&&M.y>=_&&M.y<=g&&M!==a&&M!==s&&yr(o,u,l,c,h,p,M.x,M.y)&&st(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=v&&x.y>=_&&x.y<=g&&x!==a&&x!==s&&yr(o,u,l,c,h,p,x.x,x.y)&&st(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=v&&M.y>=_&&M.y<=g&&M!==a&&M!==s&&yr(o,u,l,c,h,p,M.x,M.y)&&st(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}d(O0,"Ux");function B0(e,t,i){let r=e;do{let a=r.prev,n=r.next.next;!vn(a,n)&&ou(a,r,r.next,n)&&la(a,n)&&la(n,a)&&(t.push(a.i/i|0),t.push(r.i/i|0),t.push(n.i/i|0),ha(r),ha(r.next),r=e=n),r=r.next}while(r!==e);return Zi(r)}d(B0,"Dx");function F0(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&q0(s,o)){let l=lu(s,o);s=Zi(s,s.next),l=Zi(l,l.next),oa(s,t,i,r,a,n,0),oa(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}d(F0,"Nx");function z0(e,t,i,r){let a=[],n,s,o,l,h;for(n=0,s=t.length;n<s;n++)o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=su(e,o,l,r,!1),h===h.next&&(h.steiner=!0),a.push(j0(h));for(a.sort(G0),n=0;n<a.length;n++)i=k0(a[n],i);return i}d(z0,"Ox");function G0(e,t){return e.x-t.x}d(G0,"Fx");function k0(e,t){let i=H0(e,t);if(!i)return t;let r=lu(i,e);return Zi(r,r.next),Zi(i,i.next)}d(k0,"Bx");function H0(e,t){let i=t,r=-1/0,a,n=e.x,s=e.y;do{if(s<=i.y&&s>=i.next.y&&i.next.y!==i.y){let p=i.x+(s-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(p<=n&&p>r&&(r=p,a=i.x<i.next.x?i:i.next,p===n))return a}i=i.next}while(i!==t);if(!a)return null;let o=a,l=a.x,h=a.y,u=1/0,c;i=a;do n>=i.x&&i.x>=l&&n!==i.x&&yr(s<h?n:r,s,l,h,s<h?r:n,s,i.x,i.y)&&(c=Math.abs(s-i.y)/(n-i.x),la(i,e)&&(c<u||c===u&&(i.x>a.x||i.x===a.x&&V0(a,i)))&&(a=i,u=c)),i=i.next;while(i!==o);return a}d(H0,"zx");function V0(e,t){return st(e.prev,e,t.prev)<0&&st(t.next,e,e.next)<0}d(V0,"Vx");function W0(e,t,i,r){let a=e;do a.z===0&&(a.z=bs(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,X0(a)}d(W0,"kx");function X0(e){let t,i,r,a,n,s,o,l,h=1;do{for(i=e,e=null,n=null,s=0;i;){for(s++,r=i,o=0,t=0;t<h&&(o++,r=r.nextZ,!!r);t++);for(l=h;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;i=r}n.nextZ=null,h*=2}while(s>1);return e}d(X0,"Hx");function bs(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}d(bs,"pc");function j0(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}d(j0,"Gx");function yr(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}d(yr,"Zi");function q0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Y0(e,t)&&(la(e,t)&&la(t,e)&&Z0(e,t)&&(st(e.prev,e,t.prev)||st(e,t.prev,t))||vn(e,t)&&st(e.prev,e,e.next)>0&&st(t.prev,t,t.next)>0)}d(q0,"Wx");function st(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}d(st,"oe");function vn(e,t){return e.x===t.x&&e.y===t.y}d(vn,"Ua");function ou(e,t,i,r){let a=qa(st(e,t,i)),n=qa(st(e,t,r)),s=qa(st(i,r,e)),o=qa(st(i,r,t));return!!(a!==n&&s!==o||a===0&&ja(e,i,t)||n===0&&ja(e,r,t)||s===0&&ja(i,e,r)||o===0&&ja(i,t,r))}d(ou,"Qd");function ja(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}d(ja,"Ur");function qa(e){return e>0?1:e<0?-1:0}d(qa,"Dr");function Y0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&ou(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}d(Y0,"Xx");function la(e,t){return st(e.prev,e,e.next)<0?st(e,t,e.next)>=0&&st(e,e.prev,t)>=0:st(e,t,e.prev)<0||st(e,e.next,t)<0}d(la,"Ws");function Z0(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}d(Z0,"qx");function lu(e,t){let i=new Ss(e.i,e.x,e.y),r=new Ss(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}d(lu,"jd");function Gl(e,t,i,r){let a=new Ss(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}d(Gl,"Su");function ha(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}d(ha,"Xs");function Ss(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}d(Ss,"mc");function K0(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}d(K0,"Yx");var Tr=d(class hu{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return hu.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];kl(t),Hl(r,t);let s=t.length;i.forEach(kl);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Hl(r,i[l]);let o=U0.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}},"s");function kl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}d(kl,"bu");function Hl(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}d(Hl,"Eu");var J0=d(class uu extends it{constructor(t=new nu([new q(.5,.5),new q(-.5,.5),new q(-.5,-.5),new q(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new Pe(a,3)),this.setAttribute("uv",new Pe(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,u=i.steps!==void 0?i.steps:1,c=i.depth!==void 0?i.depth:1,p=i.bevelEnabled!==void 0?i.bevelEnabled:!0,f=i.bevelThickness!==void 0?i.bevelThickness:.2,_=i.bevelSize!==void 0?i.bevelSize:f-.1,v=i.bevelOffset!==void 0?i.bevelOffset:0,g=i.bevelSegments!==void 0?i.bevelSegments:3,m=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:Q0,x,M=!1,A,w,P,I;m&&(x=m.getSpacedPoints(u),M=!0,p=!1,A=m.computeFrenetFrames(u,!1),w=new E,P=new E,I=new E),p||(g=0,f=0,_=0,v=0);let S=o.extractPoints(h),C=S.shape,O=S.holes;if(!Tr.isClockWise(C)){C=C.reverse();for(let L=0,le=O.length;L<le;L++){let ee=O[L];Tr.isClockWise(ee)&&(O[L]=ee.reverse())}}let V=Tr.triangulateShape(C,O),j=C;for(let L=0,le=O.length;L<le;L++){let ee=O[L];C=C.concat(ee)}function N(L,le,ee){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(le,ee)}d(N,"z");let k=C.length,X=V.length;function K(L,le,ee){let $,J,_e,fe=L.x-le.x,xe=L.y-le.y,Be=ee.x-L.x,Ne=ee.y-L.y,ot=fe*fe+xe*xe,dt=fe*Ne-xe*Be;if(Math.abs(dt)>Number.EPSILON){let R=Math.sqrt(ot),b=Math.sqrt(Be*Be+Ne*Ne),z=le.x-xe/R,oe=le.y+fe/R,re=ee.x-Ne/b,te=ee.y+Be/b,ye=((re-z)*Ne-(te-oe)*Be)/(fe*Ne-xe*Be);$=z+fe*ye-L.x,J=oe+xe*ye-L.y;let he=$*$+J*J;if(he<=2)return new q($,J);_e=Math.sqrt(he/2)}else{let R=!1;fe>Number.EPSILON?Be>Number.EPSILON&&(R=!0):fe<-Number.EPSILON?Be<-Number.EPSILON&&(R=!0):Math.sign(xe)===Math.sign(Ne)&&(R=!0),R?($=-xe,J=fe,_e=Math.sqrt(ot)):($=fe,J=xe,_e=Math.sqrt(ot/2))}return new q($/_e,J/_e)}d(K,"st");let se=[];for(let L=0,le=j.length,ee=le-1,$=L+1;L<le;L++,ee++,$++)ee===le&&(ee=0),$===le&&($=0),se[L]=K(j[L],j[ee],j[$]);let Y=[],Q,ie=se.concat();for(let L=0,le=O.length;L<le;L++){let ee=O[L];Q=[];for(let $=0,J=ee.length,_e=J-1,fe=$+1;$<J;$++,_e++,fe++)_e===J&&(_e=0),fe===J&&(fe=0),Q[$]=K(ee[$],ee[_e],ee[fe]);Y.push(Q),ie=ie.concat(Q)}for(let L=0;L<g;L++){let le=L/g,ee=f*Math.cos(le*Math.PI/2),$=_*Math.sin(le*Math.PI/2)+v;for(let J=0,_e=j.length;J<_e;J++){let fe=N(j[J],se[J],$);Se(fe.x,fe.y,-ee)}for(let J=0,_e=O.length;J<_e;J++){let fe=O[J];Q=Y[J];for(let xe=0,Be=fe.length;xe<Be;xe++){let Ne=N(fe[xe],Q[xe],$);Se(Ne.x,Ne.y,-ee)}}}let B=_+v;for(let L=0;L<k;L++){let le=p?N(C[L],ie[L],B):C[L];M?(P.copy(A.normals[0]).multiplyScalar(le.x),w.copy(A.binormals[0]).multiplyScalar(le.y),I.copy(x[0]).add(P).add(w),Se(I.x,I.y,I.z)):Se(le.x,le.y,0)}for(let L=1;L<=u;L++)for(let le=0;le<k;le++){let ee=p?N(C[le],ie[le],B):C[le];M?(P.copy(A.normals[L]).multiplyScalar(ee.x),w.copy(A.binormals[L]).multiplyScalar(ee.y),I.copy(x[L]).add(P).add(w),Se(I.x,I.y,I.z)):Se(ee.x,ee.y,c/u*L)}for(let L=g-1;L>=0;L--){let le=L/g,ee=f*Math.cos(le*Math.PI/2),$=_*Math.sin(le*Math.PI/2)+v;for(let J=0,_e=j.length;J<_e;J++){let fe=N(j[J],se[J],$);Se(fe.x,fe.y,c+ee)}for(let J=0,_e=O.length;J<_e;J++){let fe=O[J];Q=Y[J];for(let xe=0,Be=fe.length;xe<Be;xe++){let Ne=N(fe[xe],Q[xe],$);M?Se(Ne.x,Ne.y+x[u-1].y,x[u-1].x+ee):Se(Ne.x,Ne.y,c+ee)}}}Z(),pe();function Z(){let L=a.length/3;if(p){let le=0,ee=k*le;for(let $=0;$<X;$++){let J=V[$];Re(J[2]+ee,J[1]+ee,J[0]+ee)}le=u+g*2,ee=k*le;for(let $=0;$<X;$++){let J=V[$];Re(J[0]+ee,J[1]+ee,J[2]+ee)}}else{for(let le=0;le<X;le++){let ee=V[le];Re(ee[2],ee[1],ee[0])}for(let le=0;le<X;le++){let ee=V[le];Re(ee[0]+k*u,ee[1]+k*u,ee[2]+k*u)}}r.addGroup(L,a.length/3-L,0)}d(Z,"K");function pe(){let L=a.length/3,le=0;ve(j,le),le+=j.length;for(let ee=0,$=O.length;ee<$;ee++){let J=O[ee];ve(J,le),le+=J.length}r.addGroup(L,a.length/3-L,1)}d(pe,"dt");function ve(L,le){let ee=L.length;for(;--ee>=0;){let $=ee,J=ee-1;J<0&&(J=L.length-1);for(let _e=0,fe=u+g*2;_e<fe;_e++){let xe=k*_e,Be=k*(_e+1),Ne=le+$+xe,ot=le+J+xe,dt=le+J+Be,R=le+$+Be;ke(Ne,ot,dt,R)}}}d(ve,"bt");function Se(L,le,ee){l.push(L),l.push(le),l.push(ee)}d(Se,"yt");function Re(L,le,ee){be(L),be(le),be(ee);let $=a.length/3,J=y.generateTopUV(r,a,$-3,$-2,$-1);He(J[0]),He(J[1]),He(J[2])}d(Re,"Lt");function ke(L,le,ee,$){be(L),be(le),be($),be(le),be(ee),be($);let J=a.length/3,_e=y.generateSideWallUV(r,a,J-6,J-3,J-2,J-1);He(_e[0]),He(_e[1]),He(_e[3]),He(_e[1]),He(_e[2]),He(_e[3])}d(ke,"Ot");function be(L){a.push(l[L*3+0]),a.push(l[L*3+1]),a.push(l[L*3+2])}d(be,"Tt");function He(L){n.push(L.x),n.push(L.y)}d(He,"Rt")}d(s,"a")}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return $0(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new ln[a.type]().fromJSON(a)),new uu(r,t.options)}},"s"),Q0={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],u=t[a*3+1];return[new q(n,s),new q(o,l),new q(h,u)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],u=t[r*3+1],c=t[r*3+2],p=t[a*3],f=t[a*3+1],_=t[a*3+2],v=t[n*3],g=t[n*3+1],m=t[n*3+2];return Math.abs(o-u)<Math.abs(s-h)?[new q(s,1-l),new q(h,1-c),new q(p,1-_),new q(v,1-m)]:[new q(o,1-l),new q(u,1-c),new q(f,1-_),new q(g,1-m)]}};function $0(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}d($0,"Jx");var ev=d(class cu extends ca{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new cu(t.radius,t.detail)}},"s"),tv=d(class du extends ca{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new du(t.radius,t.detail)}},"s"),iv=d(class pu extends it{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],u=[],c=t,p=(i-t)/a,f=new E,_=new q;for(let v=0;v<=a;v++){for(let g=0;g<=r;g++){let m=n+g/r*s;f.x=c*Math.cos(m),f.y=c*Math.sin(m),l.push(f.x,f.y,f.z),h.push(0,0,1),_.x=(f.x/i+1)/2,_.y=(f.y/i+1)/2,u.push(_.x,_.y)}c+=p}for(let v=0;v<a;v++){let g=v*(r+1);for(let m=0;m<r;m++){let y=m+g,x=y,M=y+r+1,A=y+r+2,w=y+1;o.push(x,M,w),o.push(M,A,w)}}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},"s"),rv=d(class mu extends it{constructor(t=new nu([new q(0,.5),new q(-.5,-.5),new q(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(n,3)),this.setAttribute("uv",new Pe(s,2));function h(u){let c=a.length/3,p=u.extractPoints(i),f=p.shape,_=p.holes;Tr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=_.length;g<m;g++){let y=_[g];Tr.isClockWise(y)===!0&&(_[g]=y.reverse())}let v=Tr.triangulateShape(f,_);for(let g=0,m=_.length;g<m;g++){let y=_[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){let y=f[g];a.push(y.x,y.y,0),n.push(0,0,1),s.push(y.x,y.y)}for(let g=0,m=v.length;g<m;g++){let y=v[g],x=y[0]+c,M=y[1]+c,A=y[2]+c;r.push(x,M,A),l+=3}}d(h,"l")}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return av(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new mu(r,t.curveSegments)}},"s");function av(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}d(av,"$x");var nv=d(class fu extends it{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,u=[],c=new E,p=new E,f=[],_=[],v=[],g=[];for(let m=0;m<=r;m++){let y=[],x=m/r,M=0;m===0&&s===0?M=.5/i:m===r&&l===Math.PI&&(M=-.5/i);for(let A=0;A<=i;A++){let w=A/i;c.x=-t*Math.cos(a+w*n)*Math.sin(s+x*o),c.y=t*Math.cos(s+x*o),c.z=t*Math.sin(a+w*n)*Math.sin(s+x*o),_.push(c.x,c.y,c.z),p.copy(c).normalize(),v.push(p.x,p.y,p.z),g.push(w+M,1-x),y.push(h++)}u.push(y)}for(let m=0;m<r;m++)for(let y=0;y<i;y++){let x=u[m][y+1],M=u[m][y],A=u[m+1][y],w=u[m+1][y+1];(m!==0||s>0)&&f.push(x,M,w),(m!==r-1||l<Math.PI)&&f.push(M,A,w)}this.setIndex(f),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},"s"),sv=d(class gu extends ca{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new gu(t.radius,t.detail)}},"s"),ov=d(class vu extends it{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n},r=Math.floor(r),a=Math.floor(a);let s=[],o=[],l=[],h=[],u=new E,c=new E,p=new E;for(let f=0;f<=r;f++)for(let _=0;_<=a;_++){let v=_/a*n,g=f/r*Math.PI*2;c.x=(t+i*Math.cos(g))*Math.cos(v),c.y=(t+i*Math.cos(g))*Math.sin(v),c.z=i*Math.sin(g),o.push(c.x,c.y,c.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(c,u).normalize(),l.push(p.x,p.y,p.z),h.push(_/a),h.push(f/r)}for(let f=1;f<=r;f++)for(let _=1;_<=a;_++){let v=(a+1)*f+_-1,g=(a+1)*(f-1)+_-1,m=(a+1)*(f-1)+_,y=(a+1)*f+_;s.push(v,g,y),s.push(g,m,y)}this.setIndex(s),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},"s"),lv=d(class _u extends it{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],u=[],c=new E,p=new E,f=new E,_=new E,v=new E,g=new E,m=new E;for(let x=0;x<=r;++x){let M=x/r*n*Math.PI*2;y(M,n,s,t,f),y(M+.01,n,s,t,_),g.subVectors(_,f),m.addVectors(_,f),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let A=0;A<=a;++A){let w=A/a*Math.PI*2,P=-i*Math.cos(w),I=i*Math.sin(w);c.x=f.x+(P*m.x+I*v.x),c.y=f.y+(P*m.y+I*v.y),c.z=f.z+(P*m.z+I*v.z),l.push(c.x,c.y,c.z),p.subVectors(c,f).normalize(),h.push(p.x,p.y,p.z),u.push(x/r),u.push(A/a)}}for(let x=1;x<=r;x++)for(let M=1;M<=a;M++){let A=(a+1)*(x-1)+(M-1),w=(a+1)*x+(M-1),P=(a+1)*x+M,I=(a+1)*(x-1)+M;o.push(A,w,I),o.push(w,P,I)}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function y(x,M,A,w,P){let I=Math.cos(x),S=Math.sin(x),C=A/M*x,O=Math.cos(C);P.x=w*(2+O)*.5*I,P.y=w*(2+O)*S*.5,P.z=w*Math.sin(C)*.5}d(y,"v")}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _u(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},"s"),hv=d(class xu extends it{constructor(t=new Yh(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new E,l=new E,h=new q,u=new E,c=[],p=[],f=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(p,3)),this.setAttribute("uv",new Pe(f,2));function v(){for(let x=0;x<i;x++)g(x);g(n===!1?i:0),y(),m()}d(v,"_");function g(x){u=t.getPointAt(x/i,u);let M=s.normals[x],A=s.binormals[x];for(let w=0;w<=a;w++){let P=w/a*Math.PI*2,I=Math.sin(P),S=-Math.cos(P);l.x=S*M.x+I*A.x,l.y=S*M.y+I*A.y,l.z=S*M.z+I*A.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=u.x+r*l.x,o.y=u.y+r*l.y,o.z=u.z+r*l.z,c.push(o.x,o.y,o.z)}}d(g,"g");function m(){for(let x=1;x<=i;x++)for(let M=1;M<=a;M++){let A=(a+1)*(x-1)+(M-1),w=(a+1)*x+(M-1),P=(a+1)*x+M,I=(a+1)*(x-1)+M;_.push(A,w,I),_.push(w,P,I)}}d(m,"p");function y(){for(let x=0;x<=i;x++)for(let M=0;M<=a;M++)h.x=x/i,h.y=M/a,f.push(h.x,h.y)}d(y,"v")}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new xu(new ln[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},"s"),uv=d(class extends it{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new E,a=new E;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let u=o[l],c=u.start,p=u.count;for(let f=c,_=c+p;f<_;f+=3)for(let v=0;v<3;v++){let g=s.getX(f+v),m=s.getX(f+(v+1)%3);r.fromBufferAttribute(n,g),a.fromBufferAttribute(n,m),Vl(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let h=3*s+l,u=3*s+(l+1)%3;r.fromBufferAttribute(n,h),a.fromBufferAttribute(n,u),Vl(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Pe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},"Ec");function Vl(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}d(Vl,"Tu");var X_=Object.freeze({__proto__:null,BoxGeometry:Nr,CapsuleGeometry:C0,CircleGeometry:L0,ConeGeometry:P0,CylinderGeometry:eu,DodecahedronGeometry:I0,EdgesGeometry:N0,ExtrudeGeometry:J0,IcosahedronGeometry:ev,LatheGeometry:Kh,OctahedronGeometry:tv,PlaneGeometry:Ch,PolyhedronGeometry:ca,RingGeometry:iv,ShapeGeometry:rv,SphereGeometry:nv,TetrahedronGeometry:sv,TorusGeometry:ov,TorusKnotGeometry:lv,TubeGeometry:hv,WireframeGeometry:uv});var Qi=d(class extends $t{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},"Ea"),oi=d(class extends Qi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},"wc");function Ya(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}d(Ya,"li");function cv(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}d(cv,"tf");function dv(e){function t(a,n){return e[a]-e[n]}d(t,"t");let i=e.length,r=new Array(i);for(let a=0;a!==i;++a)r[a]=a;return r.sort(t),r}d(dv,"ef");function Wl(e,t,i){let r=e.length,a=new e.constructor(r);for(let n=0,s=0;s!==r;++n){let o=i[n]*t;for(let l=0;l!==t;++l)a[s++]=e[o+l]}return a}d(Wl,"Dc");function yu(e,t,i,r){let a=1,n=e[0];for(;n!==void 0&&n[r]===void 0;)n=e[a++];if(n===void 0)return;let s=n[r];if(s!==void 0)if(Array.isArray(s))do s=n[r],s!==void 0&&(t.push(n.time),i.push.apply(i,s)),n=e[a++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[r],s!==void 0&&(t.push(n.time),s.toArray(i,i.length)),n=e[a++];while(n!==void 0);else do s=n[r],s!==void 0&&(t.push(n.time),i.push(s)),n=e[a++];while(n!==void 0)}d(yu,"fl");var Br=d(class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},"as"),pv=d(class extends Br{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Do,endingEnd:Do}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Oo:a=e,s=2*t-i;break;case Bo:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Oo:n=e,o=2*i-t;break;case Bo:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,u=this._offsetNext,c=this._weightPrev,p=this._weightNext,f=(i-t)/(r-t),_=f*f,v=_*f,g=-c*v+2*c*_-c*f,m=(1+c)*v+(-1.5-2*c)*_+(-.5+c)*f+1,y=(-1-p)*v+(1.5+p)*_+.5*f,x=p*v-p*_;for(let M=0;M!==s;++M)a[M]=g*n[h+M]+m*n[l+M]+y*n[o+M]+x*n[u+M];return a}},"Nc"),mv=d(class extends Br{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),u=1-h;for(let c=0;c!==s;++c)a[c]=n[l+c]*u+n[o+c]*h;return a}},"Ta"),fv=d(class extends Br{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},"Oc"),li=d(class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ya(t,this.TimeBufferType),this.values=Ya(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ya(e.times,Array),values:Ya(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rr:t=this.InterpolantFactoryMethodDiscrete;break;case Yi:t=this.InterpolantFactoryMethodLinear;break;case In:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return Yi;case this.InterpolantFactoryMethodSmooth:return In}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&cv(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===In,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let u=s*i,c=u-i,p=u+i;for(let f=0;f!==i;++f){let _=t[u+f];if(_!==t[c+f]||_!==t[p+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let u=s*i,c=n*i;for(let p=0;p!==i;++p)t[c+p]=t[u+p]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}},"je");li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Yi;var Fr=d(class extends li{},"Xn");Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=Rr;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mu=d(class extends li{},"Aa");Mu.prototype.ValueTypeName="color";var Ki=d(class extends li{},"os");Ki.prototype.ValueTypeName="number";var gv=d(class extends Br{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)Qt.slerpFlat(a,0,n,l-s,n,l,o);return a}},"Fc"),Li=d(class extends li{InterpolantFactoryMethodLinear(e){return new gv(this.times,this.values,this.getValueSize(),e)}},"yi");Li.prototype.ValueTypeName="quaternion";Li.prototype.DefaultInterpolation=Yi;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var zr=d(class extends li{},"qn");zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=Rr;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=d(class extends li{},"cs");Ji.prototype.ValueTypeName="vector";var bu=d(class{constructor(e,t=-1,i,r=Dc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Ht(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,s=i.length;n!==s;++n)t.push(_v(i[n]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,n=i.length;a!==n;++a)t.push(li.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,n=[];for(let s=0;s<a;s++){let o=[],l=[];o.push((s+a-1)%a,s,(s+1)%a),l.push(0,1,0);let h=dv(o);o=Wl(o,1,h),l=Wl(l,1,h),!r&&o[0]===0&&(o.push(a),l.push(l[0])),n.push(new Ki(".morphTargetInfluences["+t[s].name+"]",o,l).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let s=0,o=e.length;s<o;s++){let l=e[s],h=l.name.match(a);if(h&&h.length>1){let u=h[1],c=r[u];c||(r[u]=c=[]),c.push(l)}}let n=[];for(let s in r)n.push(this.CreateFromMorphTargetSequence(s,r[s],t,i));return n}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=d(function(h,u,c,p,f){if(c.length!==0){let _=[],v=[];yu(c,_,v,p),_.length!==0&&f.push(new h(u,_,v))}},"n"),r=[],a=e.name||"default",n=e.fps||30,s=e.blendMode,o=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let c={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)c[u[p].morphTargets[f]]=-1;for(let f in c){let _=[],v=[];for(let g=0;g!==u[p].morphTargets.length;++g){let m=u[p];_.push(m.time),v.push(m.morphTarget===f?1:0)}r.push(new Ki(".morphTargetInfluence["+f+"]",_,v))}o=c.length*n}else{let c=".bones["+t[h].name+"]";i(Ji,c+".position",u,"pos",r),i(Li,c+".quaternion",u,"rot",r),i(Ji,c+".scale",u,"scl",r)}}return r.length===0?null:new this(a,o,r,s)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}},"ls");function vv(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ki;case"vector":case"vector2":case"vector3":case"vector4":return Ji;case"color":return Mu;case"quaternion":return Li;case"bool":case"boolean":return Fr;case"string":return zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}d(vv,"jx");function _v(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=vv(e.type);if(e.times===void 0){let i=[],r=[];yu(e.keys,i,r,"value"),e.times=i,e.values=r}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}d(_v,"tv");var Pr={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},xv=d(class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,c=l.length;u<c;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},"wa"),yv=new xv,$i=d(class{constructor(e){this.manager=e!==void 0?e:yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},"ze");$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var fi={},Mv=d(class extends Error{constructor(e,t){super(e),this.response=t}},"Bc"),zs=d(class extends $i{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Pr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:i,onError:r});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:i,onError:r});let n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,o=this.responseType;fetch(n).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=fi[e],u=l.body.getReader(),c=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=c?parseInt(c):0,f=p!==0,_=0,v=new ReadableStream({start(g){m();function m(){u.read().then(({done:y,value:x})=>{if(y)g.close();else{_+=x.byteLength;let M=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:p});for(let A=0,w=h.length;A<w;A++){let P=h[A];P.onProgress&&P.onProgress(M)}g.enqueue(x),m()}})}d(m,"v")}});return new Response(v)}else throw new Mv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,s));case"json":return l.json();default:if(s===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(s),u=h&&h[1]?h[1].toLowerCase():void 0,c=new TextDecoder(u);return l.arrayBuffer().then(p=>c.decode(p))}}}).then(l=>{Pr.add(e,l);let h=fi[e];delete fi[e];for(let u=0,c=h.length;u<c;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=fi[e];if(h===void 0)throw this.manager.itemError(e),l;delete fi[e];for(let u=0,c=h.length;u<c;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},"un");var bv=d(class extends $i{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Pr.get(e);if(n!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0),n;let s=na("img");function o(){h(),Pr.add(e,this),t&&t(this),a.manager.itemEnd(e)}d(o,"c");function l(u){h(),r&&r(u),a.manager.itemError(e),a.manager.itemEnd(e)}d(l,"l");function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return d(h,"h"),s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}},"us");var Su=d(class extends $i{constructor(e){super(e)}load(e,t,i,r){let a=new Pt,n=new bv(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},"Lu"),Gs=d(class extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},"wn");var hs=new Le,Xl=new E,jl=new E,ks=d(class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pn,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xl),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),hs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},"qs"),Sv=d(class extends ks{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Cr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},"Vc"),Tu=d(class extends Gs{constructor(e,t,i=0,r=Math.PI/3,a=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=r,this.penumbra=a,this.decay=n,this.map=null,this.shadow=new Sv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},"kc"),ql=new Le,Kr=new E,us=new E,Tv=d(class extends ks{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new q(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Kr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Kr),us.copy(i.position),us.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(us),i.updateMatrixWorld(),r.makeTranslation(-Kr.x,-Kr.y,-Kr.z),ql.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql)}},"Hc"),_n=d(class extends Gs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Tv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},"Gc"),wv=d(class extends ks{constructor(){super(new Dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},"Wc"),wu=d(class extends Gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new wv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},"Xc");var Gr=d(class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},"Ra");var Au=d(class extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Pr.get(e);if(n!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0),n;let s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,fetch(e,s).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(o){Pr.add(e,o),t&&t(o),a.manager.itemEnd(e)}).catch(function(o){r&&r(o),a.manager.itemError(e),a.manager.itemEnd(e)}),a.manager.itemStart(e)}},"Bu");var j_=new Le,q_=new Le,Y_=new Le;var Eu=d(class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Yl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},"jc");function Yl(){return(typeof performance>"u"?Date:performance).now()}d(Yl,"Gu");var Z_=new E,K_=new Qt,J_=new E,Q_=new E;var $_=new E,ex=new Qt,tx=new E,ix=new E;var Hs="\\[\\]\\.:\\/",Av=new RegExp("["+Hs+"]","g"),Vs="[^"+Hs+"]",Ev="[^"+Hs.replace("\\.","")+"]",Rv=/((?:WC+[\/:])*)/.source.replace("WC",Vs),Cv=/(WCOD+)?/.source.replace("WCOD",Ev),Lv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vs),Pv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vs),Iv=new RegExp("^"+Rv+Cv+Lv+Pv+"$"),Nv=["material","materials","bones","map"],Uv=d(class{constructor(e,t,i){let r=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},"nl"),at=d(class _r{constructor(t,i,r){this.path=i,this.parsedPath=r||_r.parseTrackName(i),this.node=_r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new _r.Composite(t,i,r):new _r(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Av,"")}static parseTrackName(t){let i=Iv.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Nv.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=d(function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},"n"),a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=_r.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},"s");at.Composite=Uv;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rx=new Float32Array(1);var ax=new q;var nx=new E,sx=new E;var ox=new E;var lx=new E,hx=new Le,ux=new Le;var cx=new E,dx=new Te,px=new Te;var mx=new E,fx=new E,gx=new E;var vx=new E,_x=new Cs;var xx=new Vt;var yx=new E;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ts}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ts);function Ws(e,t){if(t===nh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===ua||t===un){let i=e.getIndex();if(i===null){let s=[],o=e.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);e.setIndex(s),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let r=i.count-2,a=[];if(t===ua)for(let s=1;s<=r;s++)a.push(i.getX(0)),a.push(i.getX(s)),a.push(i.getX(s+1));else for(let s=0;s<r;s++)s%2===0?(a.push(i.getX(s)),a.push(i.getX(s+1)),a.push(i.getX(s+2))):(a.push(i.getX(s+2)),a.push(i.getX(s+1)),a.push(i.getX(s)));a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let n=e.clone();return n.setIndex(a),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}d(Ws,"ht");var Iu=d(class extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gv(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new $v(t)})}load(e,t,i,r){let a=this,n;if(this.resourcePath!=="")n=this.resourcePath;else if(this.path!==""){let l=Gr.extractUrlBase(e);n=Gr.resolveURL(l,this.path)}else n=Gr.extractUrlBase(e);this.manager.itemStart(e);let s=d(function(l){r?r(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},"a"),o=new zs(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{a.parse(l,n,function(h){t(h),a.manager.itemEnd(e)},s)}catch(h){s(h)}},i,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let a,n={},s={},o=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===Nu){try{n[qe.KHR_BINARY_GLTF]=new e_(e)}catch(h){r&&r(h);return}a=JSON.parse(n[qe.KHR_BINARY_GLTF].content)}else a=JSON.parse(o.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new p_(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[u.name]=u,n[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){let u=a.extensionsUsed[h],c=a.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:n[u]=new Fv;break;case qe.KHR_DRACO_MESH_COMPRESSION:n[u]=new t_(a,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:n[u]=new i_;break;case qe.KHR_MESH_QUANTIZATION:n[u]=new r_;break;default:c.indexOf(u)>=0&&s[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(n),l.setPlugins(s),l.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,a){i.parse(e,t,r,a)})}},"be");function Ov(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}d(Ov,"bt");var qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Bv=d(class{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let a=t.json,n=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],s,o=new Te(16777215);n.color!==void 0&&o.setRGB(n.color[0],n.color[1],n.color[2],xt);let l=n.range!==void 0?n.range:0;switch(n.type){case"directional":s=new wu(o),s.target.position.set(0,0,-1),s.add(s.target);break;case"point":s=new _n(o),s.distance=l;break;case"spot":s=new Tu(o),s.distance=l,n.spot=n.spot||{},n.spot.innerConeAngle=n.spot.innerConeAngle!==void 0?n.spot.innerConeAngle:0,n.spot.outerConeAngle=n.spot.outerConeAngle!==void 0?n.spot.outerConeAngle:Math.PI/4,s.angle=n.spot.outerConeAngle,s.penumbra=1-n.spot.innerConeAngle/n.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+n.type)}return s.position.set(0,0,0),s.decay=2,Ii(s,n),n.intensity!==void 0&&(s.intensity=n.intensity),s.name=t.createUniqueName(n.name||"light_"+e),r=Promise.resolve(s),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(n){return i._getNodeRef(t.cache,a,n)})}},"Q"),Fv=d(class{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,i){let r=[];e.color=new Te(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let n=a.baseColorFactor;e.color.setRGB(n[0],n[1],n[2],xt),e.opacity=n[3]}a.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",a.baseColorTexture,nt))}return Promise.all(r)}},"Z"),zv=d(class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},"J"),Gv=d(class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:oi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new q(s,s)}return Promise.all(a)}},"$"),kv=d(class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:oi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(a)}},"ee"),Hv=d(class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:oi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let n=r.extensions[this.name];if(n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],xt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",n.sheenColorTexture,nt)),n.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(a)}},"te"),Vv=d(class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:oi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(a)}},"ne"),Wv=d(class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:oi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(s[0],s[1],s[2],xt),Promise.all(a)}},"se"),Xv=d(class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:oi}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},"re"),jv=d(class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:oi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(s[0],s[1],s[2],xt),n.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",n.specularColorTexture,nt)),Promise.all(a)}},"ie"),qv=d(class{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:oi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(a)}},"oe"),Yv=d(class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:oi}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(a)}},"ae"),Zv=d(class{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let a=r.extensions[this.name],n=t.options.ktx2Loader;if(!n){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,n)}},"ce"),Kv=d(class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let n=a.extensions[t],s=r.images[n.source],o=i.textureLoader;if(s.uri){let l=i.options.manager.getHandler(s.uri);l!==null&&(o=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,n.source,o);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},"ue"),Jv=d(class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let n=a.extensions[t],s=r.images[n.source],o=i.textureLoader;if(s.uri){let l=i.options.manager.getHandler(s.uri);l!==null&&(o=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,n.source,o);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},"le"),Qv=d(class{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),n=this.parser.options.meshoptDecoder;if(!n||!n.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(s){let o=r.byteOffset||0,l=r.byteLength||0,h=r.count,u=r.byteStride,c=new Uint8Array(s,o,l);return n.decodeGltfBufferAsync?n.decodeGltfBufferAsync(h,u,c,r.mode,r.filter).then(function(p){return p.buffer}):n.ready.then(function(){let p=new ArrayBuffer(h*u);return n.decodeGltfBuffer(new Uint8Array(p),h,u,c,r.mode,r.filter),p})})}else return null}},"fe"),$v=d(class{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let o of r.primitives)if(o.mode!==jt.TRIANGLES&&o.mode!==jt.TRIANGLE_STRIP&&o.mode!==jt.TRIANGLE_FAN&&o.mode!==void 0)return null;let a=i.extensions[this.name].attributes,n=[],s={};for(let o in a)n.push(this.parser.getDependency("accessor",a[o]).then(l=>(s[o]=l,s[o])));return n.length<1?null:(n.push(this.parser.createNodeMesh(e)),Promise.all(n).then(o=>{let l=o.pop(),h=l.isGroup?l.children:[l],u=o[0].count,c=[];for(let p of h){let f=new Le,_=new E,v=new Qt,g=new E(1,1,1),m=new kh(p.geometry,p.material,u);for(let y=0;y<u;y++)s.TRANSLATION&&_.fromBufferAttribute(s.TRANSLATION,y),s.ROTATION&&v.fromBufferAttribute(s.ROTATION,y),s.SCALE&&g.fromBufferAttribute(s.SCALE,y),m.setMatrixAt(y,f.compose(_,v,g));for(let y in s)if(y==="_COLOR_0"){let x=s[y];m.instanceColor=new sa(x.array,x.itemSize,x.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,s[y]);ct.prototype.copy.call(m,p),this.parser.assignFinalMaterial(m),c.push(m)}return l.isGroup?(l.clear(),l.add(...c),l):c[0]}))}},"de"),Nu="glTF",da=12,Ru={JSON:1313821514,BIN:5130562},e_=d(class{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,da),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-da,a=new DataView(e,da),n=0;for(;n<r;){let s=a.getUint32(n,!0);n+=4;let o=a.getUint32(n,!0);if(n+=4,o===Ru.JSON){let l=new Uint8Array(e,da+n,s);this.content=i.decode(l)}else if(o===Ru.BIN){let l=da+n;this.body=e.slice(l,l+s)}n+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},"he"),t_=d(class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,s={},o={},l={};for(let h in n){let u=Ys[h]||h.toLowerCase();s[u]=n[h]}for(let h in e.attributes){let u=Ys[h]||h.toLowerCase();if(n[h]!==void 0){let c=i.accessors[e.attributes[h]],p=kr[c.componentType];l[u]=p.name,o[u]=c.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u){r.decodeDracoFile(h,function(c){for(let p in c.attributes){let f=c.attributes[p],_=o[p];_!==void 0&&(f.normalized=_)}u(c)},s,l)})})}},"pe"),i_=d(class{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},"me"),r_=d(class{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}},"Ae"),Uu=d(class extends Br{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let n=0;n!==r;n++)t[n]=i[a+n];return t}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=s*2,l=s*3,h=r-t,u=(i-t)/h,c=u*u,p=c*u,f=e*l,_=f-l,v=-2*p+3*c,g=p-c,m=1-v,y=g-c+u;for(let x=0;x!==s;x++){let M=n[_+x+s],A=n[_+x+o]*h,w=n[f+x+s],P=n[f+x]*h;a[x]=m*M+y*A+v*w+g*P}return a}},"j"),a_=new Qt,n_=d(class extends Uu{interpolate_(e,t,i,r){let a=super.interpolate_(e,t,i,r);return a_.fromArray(a).normalize().toArray(a),a}},"ge"),jt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cu={9728:mt,9729:Ct,9984:en,9985:ws,9986:$r,9987:Ci},Lu={33071:Ut,33648:aa,10497:qi},Xs={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ys={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},s_={CUBICSPLINE:void 0,LINEAR:Yi,STEP:Rr},js={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function o_(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Qi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),e.DefaultMaterial}d(o_,"It");function er(e,t,i){for(let r in i.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}d(er,"O");function Ii(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}d(Ii,"M");function l_(e,t,i){let r=!1,a=!1,n=!1;for(let h=0,u=t.length;h<u;h++){let c=t[h];if(c.POSITION!==void 0&&(r=!0),c.NORMAL!==void 0&&(a=!0),c.COLOR_0!==void 0&&(n=!0),r&&a&&n)break}if(!r&&!a&&!n)return Promise.resolve(e);let s=[],o=[],l=[];for(let h=0,u=t.length;h<u;h++){let c=t[h];if(r){let p=c.POSITION!==void 0?i.getDependency("accessor",c.POSITION):e.attributes.position;s.push(p)}if(a){let p=c.NORMAL!==void 0?i.getDependency("accessor",c.NORMAL):e.attributes.normal;o.push(p)}if(n){let p=c.COLOR_0!==void 0?i.getDependency("accessor",c.COLOR_0):e.attributes.color;l.push(p)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(h){let u=h[0],c=h[1],p=h[2];return r&&(e.morphAttributes.position=u),a&&(e.morphAttributes.normal=c),n&&(e.morphAttributes.color=p),e.morphTargetsRelative=!0,e})}d(l_,"Ot");function h_(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++)e.morphTargetDictionary[i[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}d(h_,"Ct");function u_(e){let t,i=e.extensions&&e.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(i?t="draco:"+i.bufferView+":"+i.indices+":"+qs(i.attributes):t=e.indices+":"+qs(e.attributes)+":"+e.mode,e.targets!==void 0)for(let r=0,a=e.targets.length;r<a;r++)t+=":"+qs(e.targets[r]);return t}d(u_,"Dt");function qs(e){let t="",i=Object.keys(e).sort();for(let r=0,a=i.length;r<a;r++)t+=i[r]+":"+e[i[r]]+";";return t}d(qs,"W");function Zs(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}d(Zs,"Re");function c_(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}d(c_,"Pt");var d_=new Le,p_=d(class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ov,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,a=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,a=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&a<98?this.textureLoader=new Su(this.options.manager):this.textureLoader=new Au(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(n){return n._markDefs&&n._markDefs()}),Promise.all(this._invokeAll(function(n){return n.beforeRoot&&n.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(n){let s={scene:n[0][r.scene||0],scenes:n[0],animations:n[1],cameras:n[2],asset:r.asset,parser:i,userData:{}};return er(a,s,r),Ii(s,r),Promise.all(i._invokeAll(function(o){return o.afterRoot&&o.afterRoot(s)})).then(function(){e(s)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){let n=t[r].joints;for(let s=0,o=n.length;s<o;s++)e[n[s]].isBone=!0}for(let r=0,a=e.length;r<a;r++){let n=e[r];n.mesh!==void 0&&(this._addNodeRef(this.meshCache,n.mesh),n.skin!==void 0&&(i[n.mesh].isSkinnedMesh=!0)),n.camera!==void 0&&this._addNodeRef(this.cameraCache,n.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),a=d((n,s)=>{let o=this.associations.get(n);o!=null&&this.associations.set(s,o);for(let[l,h]of n.children.entries())a(h,s.children[l])},"s");return a(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let a=e(t[r]);a&&i.push(a)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,n){return i.getDependency(e,n)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(a,n){i.load(Gr.resolveURL(t.uri,r.path),a,void 0,function(){n(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let n=Xs[r.type],s=kr[r.componentType],o=r.normalized===!0,l=new s(r.count*n);return Promise.resolve(new Mt(l,n,o))}let a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(n){let s=n[0],o=Xs[r.type],l=kr[r.componentType],h=l.BYTES_PER_ELEMENT,u=h*o,c=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,f=r.normalized===!0,_,v;if(p&&p!==u){let g=Math.floor(c/p),m="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count,y=t.cache.get(m);y||(_=new l(s,g*p,r.count*p/h),y=new Is(_,p/h),t.cache.add(m,y)),v=new Ns(y,o,c%p/h,f)}else s===null?_=new l(r.count*o):_=new l(s,c,r.count*o),v=new Mt(_,o,f);if(r.sparse!==void 0){let g=Xs.SCALAR,m=kr[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,M=new m(n[1],y,r.sparse.count*g),A=new l(n[2],x,r.sparse.count*o);s!==null&&(v=new Mt(v.array.slice(),v.itemSize,v.normalized));for(let w=0,P=M.length;w<P;w++){let I=M[w];if(v.setX(I,A[w*o]),o>=2&&v.setY(I,A[w*o+1]),o>=3&&v.setZ(I,A[w*o+2]),o>=4&&v.setW(I,A[w*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],n=this.textureLoader;if(a.uri){let s=i.manager.getHandler(a.uri);s!==null&&(n=s)}return this.loadTextureImage(e,r,n)}loadTextureImage(e,t,i){let r=this,a=this.json,n=a.textures[e],s=a.images[t],o=(s.uri||s.bufferView)+":"+n.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=n.name||s.name||"",h.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(h.name=s.uri);let u=(a.samplers||{})[n.sampler]||{};return h.magFilter=Cu[u.magFilter]||Ct,h.minFilter=Cu[u.minFilter]||Ci,h.wrapS=Lu[u.wrapS]||qi,h.wrapT=Lu[u.wrapT]||qi,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(e,t){let i=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let n=r.images[e],s=self.URL||self.webkitURL,o=n.uri||"",l=!1;if(n.bufferView!==void 0)o=i.getDependency("bufferView",n.bufferView).then(function(u){l=!0;let c=new Blob([u],{type:n.mimeType});return o=s.createObjectURL(c),o});else if(n.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(o).then(function(u){return new Promise(function(c,p){let f=c;t.isImageBitmapLoader===!0&&(f=d(function(_){let v=new Pt(_);v.needsUpdate=!0,c(v)},"p")),t.load(Gr.resolveURL(u,a.path),f,void 0,p)})}).then(function(u){return l===!0&&s.revokeObjectURL(o),u.userData.mimeType=n.mimeType||c_(n.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let a=this;return this.getDependency("texture",i.index).then(function(n){if(!n)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(n=n.clone(),n.channel=i.texCoord),a.extensions[qe.KHR_TEXTURE_TRANSFORM]){let s=i.extensions!==void 0?i.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(s){let o=a.associations.get(n);n=a.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(n,s),a.associations.set(n,o)}}return r!==void 0&&(n.colorSpace=r),e[t]=n,n})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,n=t.attributes.normal===void 0;if(e.isPoints){let s="PointsMaterial:"+i.uuid,o=this.cache.get(s);o||(o=new Os,$t.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,o.sizeAttenuation=!1,this.cache.add(s,o)),i=o}else if(e.isLine){let s="LineBasicMaterial:"+i.uuid,o=this.cache.get(s);o||(o=new Ds,$t.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,this.cache.add(s,o)),i=o}if(r||a||n){let s="ClonedMaterial:"+i.uuid+":";r&&(s+="derivative-tangents:"),a&&(s+="vertex-colors:"),n&&(s+="flat-shading:");let o=this.cache.get(s);o||(o=i.clone(),a&&(o.vertexColors=!0),n&&(o.flatShading=!0),r&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(s,o),this.associations.set(o,this.associations.get(i))),i=o}e.material=i}getMaterialType(){return Qi}loadMaterial(e){let t=this,i=this.json,r=this.extensions,a=i.materials[e],n,s={},o=a.extensions||{},l=[];if(o[qe.KHR_MATERIALS_UNLIT]){let u=r[qe.KHR_MATERIALS_UNLIT];n=u.getMaterialType(),l.push(u.extendParams(s,a,t))}else{let u=a.pbrMetallicRoughness||{};if(s.color=new Te(1,1,1),s.opacity=1,Array.isArray(u.baseColorFactor)){let c=u.baseColorFactor;s.color.setRGB(c[0],c[1],c[2],xt),s.opacity=c[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(s,"map",u.baseColorTexture,nt)),s.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,s.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(s,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(s,"roughnessMap",u.metallicRoughnessTexture))),n=this._invokeOne(function(c){return c.getMaterialType&&c.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(c){return c.extendMaterialParams&&c.extendMaterialParams(e,s)})))}a.doubleSided===!0&&(s.side=Kt);let h=a.alphaMode||js.OPAQUE;if(h===js.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,h===js.MASK&&(s.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&n!==Xt&&(l.push(t.assignTexture(s,"normalMap",a.normalTexture)),s.normalScale=new q(1,1),a.normalTexture.scale!==void 0)){let u=a.normalTexture.scale;s.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&n!==Xt&&(l.push(t.assignTexture(s,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&n!==Xt){let u=a.emissiveFactor;s.emissive=new Te().setRGB(u[0],u[1],u[2],xt)}return a.emissiveTexture!==void 0&&n!==Xt&&l.push(t.assignTexture(s,"emissiveMap",a.emissiveTexture,nt)),Promise.all(l).then(function(){let u=new n(s);return a.name&&(u.name=a.name),Ii(u,a),t.associations.set(u,{materials:e}),a.extensions&&er(r,u,a),u})}createUniqueName(e){let t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function a(s){return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,t).then(function(o){return Pu(o,s,t)})}d(a,"s");let n=[];for(let s=0,o=e.length;s<o;s++){let l=e[s],h=u_(l),u=r[h];if(u)n.push(u.promise);else{let c;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?c=a(l):c=Pu(new it,l,t),r[h]={primitive:l,promise:c},n.push(c)}}return Promise.all(n)}loadMesh(e){let t=this,i=this.json,r=this.extensions,a=i.meshes[e],n=a.primitives,s=[];for(let o=0,l=n.length;o<l;o++){let h=n[o].material===void 0?o_(this.cache):this.getDependency("material",n[o].material);s.push(h)}return s.push(t.loadGeometries(n)),Promise.all(s).then(function(o){let l=o.slice(0,o.length-1),h=o[o.length-1],u=[];for(let p=0,f=h.length;p<f;p++){let _=h[p],v=n[p],g,m=l[p];if(v.mode===jt.TRIANGLES||v.mode===jt.TRIANGLE_STRIP||v.mode===jt.TRIANGLE_FAN||v.mode===void 0)g=a.isSkinnedMesh===!0?new Fh(_,m):new Je(_,m),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),v.mode===jt.TRIANGLE_STRIP?g.geometry=Ws(g.geometry,un):v.mode===jt.TRIANGLE_FAN&&(g.geometry=Ws(g.geometry,ua));else if(v.mode===jt.LINES)g=new Hh(_,m);else if(v.mode===jt.LINE_STRIP)g=new gn(_,m);else if(v.mode===jt.LINE_LOOP)g=new Vh(_,m);else if(v.mode===jt.POINTS)g=new Wh(_,m);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(g.geometry.morphAttributes).length>0&&h_(g,a),g.name=t.createUniqueName(a.name||"mesh_"+e),Ii(g,a),v.extensions&&er(r,g,v),t.assignFinalMaterial(g),u.push(g)}for(let p=0,f=u.length;p<f;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return a.extensions&&er(r,u[0],a),u[0];let c=new Ai;a.extensions&&er(r,c,a),t.associations.set(c,{meshes:e});for(let p=0,f=u.length;p<f;p++)c.add(u[p]);return c})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new yt(hh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Dr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ii(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,a=t.joints.length;r<a;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let a=r.pop(),n=r,s=[],o=[];for(let l=0,h=n.length;l<h;l++){let u=n[l];if(u){s.push(u);let c=new Le;a!==null&&c.fromArray(a.array,l*16),o.push(c)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new zh(s,o)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,n=[],s=[],o=[],l=[],h=[];for(let u=0,c=r.channels.length;u<c;u++){let p=r.channels[u],f=r.samplers[p.sampler],_=p.target,v=_.node,g=r.parameters!==void 0?r.parameters[f.input]:f.input,m=r.parameters!==void 0?r.parameters[f.output]:f.output;_.node!==void 0&&(n.push(this.getDependency("node",v)),s.push(this.getDependency("accessor",g)),o.push(this.getDependency("accessor",m)),l.push(f),h.push(_))}return Promise.all([Promise.all(n),Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(h)]).then(function(u){let c=u[0],p=u[1],f=u[2],_=u[3],v=u[4],g=[];for(let m=0,y=c.length;m<y;m++){let x=c[m],M=p[m],A=f[m],w=_[m],P=v[m];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let I=i._createAnimationTracks(x,M,A,w,P);if(I)for(let S=0;S<I.length;S++)g.push(I[S])}return new bu(a,void 0,g)})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(a){let n=i._getNodeRef(i.meshCache,r.mesh,a);return r.weights!==void 0&&n.traverse(function(s){if(s.isMesh)for(let o=0,l=r.weights.length;o<l;o++)s.morphTargetInfluences[o]=r.weights[o]}),n})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],a=i._loadNodeShallow(e),n=[],s=r.children||[];for(let l=0,h=s.length;l<h;l++)n.push(i.getDependency("node",s[l]));let o=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([a,Promise.all(n),o]).then(function(l){let h=l[0],u=l[1],c=l[2];c!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(c,d_)});for(let p=0,f=u.length;p<f;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],n=a.name?r.createUniqueName(a.name):"",s=[],o=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return o&&s.push(o),a.camera!==void 0&&s.push(r.getDependency("camera",a.camera).then(function(l){return r._getNodeRef(r.cameraCache,a.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){s.push(l)}),this.nodeCache[e]=Promise.all(s).then(function(l){let h;if(a.isBone===!0?h=new Us:l.length>1?h=new Ai:l.length===1?h=l[0]:h=new ct,h!==l[0])for(let u=0,c=l.length;u<c;u++)h.add(l[u]);if(a.name&&(h.userData.name=a.name,h.name=n),Ii(h,a),a.extensions&&er(i,h,a),a.matrix!==void 0){let u=new Le;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,a=new Ai;i.name&&(a.name=r.createUniqueName(i.name)),Ii(a,i),i.extensions&&er(t,a,i);let n=i.nodes||[],s=[];for(let o=0,l=n.length;o<l;o++)s.push(r.getDependency("node",n[o]));return Promise.all(s).then(function(o){for(let h=0,u=o.length;h<u;h++)a.add(o[h]);let l=d(h=>{let u=new Map;for(let[c,p]of r.associations)(c instanceof $t||c instanceof Pt)&&u.set(c,p);return h.traverse(c=>{let p=r.associations.get(c);p!=null&&u.set(c,p)}),u},"c");return r.associations=l(a),a})}_createAnimationTracks(e,t,i,r,a){let n=[],s=e.name?e.name:e.uuid,o=[];Pi[a.path]===Pi.weights?e.traverse(function(c){c.morphTargetInfluences&&o.push(c.name?c.name:c.uuid)}):o.push(s);let l;switch(Pi[a.path]){case Pi.weights:l=Ki;break;case Pi.rotation:l=Li;break;case Pi.position:case Pi.scale:l=Ji;break;default:switch(i.itemSize){case 1:l=Ki;break;case 2:case 3:default:l=Ji;break}break}let h=r.interpolation!==void 0?s_[r.interpolation]:Yi,u=this._getArrayFromAccessor(i);for(let c=0,p=o.length;c<p;c++){let f=new l(o[c]+"."+Pi[a.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),n.push(f)}return n}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Zs(t.constructor),r=new Float32Array(t.length);for(let a=0,n=t.length;a<n;a++)r[a]=t[a]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){let i=this instanceof Li?n_:Uu;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}},"_e");function m_(e,t,i){let r=t.attributes,a=new Vt;if(r.POSITION!==void 0){let o=i.json.accessors[r.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(a.set(new E(l[0],l[1],l[2]),new E(h[0],h[1],h[2])),o.normalized){let u=Zs(kr[o.componentType]);a.min.multiplyScalar(u),a.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let n=t.targets;if(n!==void 0){let o=new E,l=new E;for(let h=0,u=n.length;h<u;h++){let c=n[h];if(c.POSITION!==void 0){let p=i.json.accessors[c.POSITION],f=p.min,_=p.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),p.normalized){let v=Zs(kr[p.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(o)}e.boundingBox=a;let s=new Wt;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=s}d(m_,"Ht");function Pu(e,t,i){let r=t.attributes,a=[];function n(s,o){return i.getDependency("accessor",s).then(function(l){e.setAttribute(o,l)})}d(n,"s");for(let s in r){let o=Ys[s]||s.toLowerCase();o in e.attributes||a.push(n(r[s],o))}if(t.indices!==void 0&&!e.index){let s=i.getDependency("accessor",t.indices).then(function(o){e.setIndex(o)});a.push(s)}return Ke.workingColorSpace!==xt&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Ii(e,t),m_(e,t,i),Promise.all(a).then(function(){return t.targets!==void 0?l_(e,t.targets,i):e})}d(Pu,"Oe");var xi=d(class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},"i"),f_=new Dr(-1,1,1,-1,0,1),g_=d(class extends it{constructor(){super(),this.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pe([0,2,0,0,2,0],2))}},"t"),v_=new g_,xn=d(class{constructor(e){this._mesh=new Je(v_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,f_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},"o");var Du=d(class extends xi{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let a,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=r}},"s");var yn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ou=d(class extends xi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ur.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new xn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},"s");var Ks=d(class extends xi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let n,s;this.inverse?(n=0,s=1):(n=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,n,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}},"l"),Bu=d(class extends xi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},"a");var Fu=d(class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new q);this._width=i.width,this._height=i.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ou(yn),this.copyPass.material.blending=ai,this.clock=new Eu}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,a=this.passes.length;r<a;r++){let n=this.passes[r];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){let s=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Ks!==void 0&&(n instanceof Ks?i=!0:n instanceof Bu&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},"d");var zu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Mn=d(class Js extends xi{constructor(t,i,r,a){super(),this.strength=i!==void 0?i:1,this.radius=r,this.threshold=a,this.resolution=t!==void 0?new q(t.x,t.y):new q(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Dt(n,s,{type:Jt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let p=new Dt(n,s,{type:Jt});p.texture.name="UnrealBloomPass.h"+c,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new Dt(n,s,{type:Jt});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),n=Math.round(n/2),s=Math.round(s/2)}let o=zu;this.highPassUniforms=Ur.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new q(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=yn;this.copyUniforms=Ur.clone(u.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Qa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new Xt,this.fsQuad=new xn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,i){let r=Math.round(t/2),a=Math.round(i/2);this.renderTargetBright.setSize(r,a);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(r,a),this.renderTargetsVertical[n].setSize(r,a),this.separableBlurMaterials[n].uniforms.invSize.value=new q(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(t,i,r,a,n){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),n&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Js.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Js.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=s}getSeperableBlurMaterial(t){let i=[];for(let r=0;r<t;r++)i.push(.39894*Math.exp(-.5*r*r/(t*t))/t);return new Lt({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new q(.5,.5)},direction:{value:new q(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Lt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}},"T");Mn.BlurDirectionX=new q(1,0);Mn.BlurDirectionY=new q(0,1);var Gu=d(class extends fn{constructor(e=null){super();let t=new Nr;t.deleteAttribute("uv");let i=new Qi({side:At}),r=new Qi,a=5;e!==null&&e._useLegacyLights===!1&&(a=900);let n=new _n(16777215,a,28,2);n.position.set(.418,16.199,.3),this.add(n);let s=new Je(t,i);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Je(t,r);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let l=new Je(t,r);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new Je(t,r);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Je(t,r);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let c=new Je(t,r);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);let p=new Je(t,r);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let f=new Je(t,Hr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let _=new Je(t,Hr(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let v=new Je(t,Hr(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);let g=new Je(t,Hr(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let m=new Je(t,Hr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let y=new Je(t,Hr(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}},"L");function Hr(e){let t=new Xt;return t.color.setScalar(e),t}d(Hr,"i");function __(e,t,i){let r=new fn;var a=document.getElementById(i);let n=new yt(45,window.innerWidth/window.innerHeight,.01,1e3);r.background=new Te(0);var s=new Ps({antialias:!0,canvas:a});s.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(s.domElement);let o=new Gu,l=new on(s),h=new Du(r,n),u={exposure:.5,bloomStrength:1,bloomThreshold:0,bloomRadius:.1},c=new Mn(new q(window.innerWidth,window.innerHeight),1.5,.4,.85);c.threshold=u.bloomThreshold,c.strength=u.bloomStrength,c.radius=u.bloomRadius;var p=new Fu(s);p.addPass(h),p.addPass(c),r.environment=l.fromScene(o).texture;var f=new Iu;let _,v,g=8,m=4294933420;f.load(t,function(M){_=M.scene,M.scene.scale.set(1,1,1),M.scene.position.x=0,M.scene.position.y=0,M.scene.position.z=0,r.add(M.scene),v=M.scene.getObjectByName(e),v.material.emissive=new Te(m),v.material.emissiveIntensity=g,v.material.wireframe=!0,y()}),n.position.set(0,.5,10);let y=d(()=>{window.addEventListener("resize",x),p.render(),v.rotation.y+=.015,requestAnimationFrame(y)},"animate"),x=d(()=>{s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)},"resize")}d(__,"renderModel");window.renderModel=__;export{__ as renderModel};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
