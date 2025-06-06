import{e as or,b as oe,t as Ce}from"../chunks/uTVFfCR1.js";import"../chunks/C-KlFWM5.js";import{A as cr,a9 as lr,C as dr,o as Nt,U as vr,x as ur,_ as fr,e as L,aP as Lt,b as g,r as pr,u as Ut,aM as mr,J as xr,aN as Ht,a4 as A,a5 as gr,aQ as N,aR as Ye,ai as Ke,aj as Ft,al as qe,ap as Be,am as y,m as V,an as b,ak as p,a as hr,ao as yr}from"../chunks/Doxv_zDN.js";import{e as te}from"../chunks/CJUtn9Sh.js";import{i as It}from"../chunks/Du-6FoUU.js";import{s as _}from"../chunks/DzPMz6Vi.js";import{s as br}from"../chunks/Do2w9o0u.js";import{s as Bt}from"../chunks/DJyR-pXI.js";import{i as jt}from"../chunks/D3mgWV0X.js";import{a as ue,o as Xe}from"../chunks/D_usMznt.js";import{g as je,d as Je,w as j}from"../chunks/CdC3-oiW.js";import{T as wr,D as fe,V as R,S as Wt,M as Pe,R as _r,a as ne,b as Qe,U as Se,c as Dr,d as Sr,e as pe,L as Mr,f as Vt,g as U,C as Cr,O as Pr,h as Ir,F as zt,i as zr,j as Er,P as Or,k as kr,l as Rr,W as Ar,B as Tr}from"../chunks/mIAqETd0.js";import{p as $,r as Nr}from"../chunks/BM6RxNwV.js";import{b as Et}from"../chunks/BRz8ZVQu.js";import{b as w}from"../chunks/DfnrTQiP.js";/* empty css                */import"../chunks/BiTT8mz5.js";function Lr(e,t,...r){var s=e,n=Nt,a;cr(()=>{n!==(n=t())&&(a&&(vr(a),a=null),a=dr(()=>n(s,...r)))},lr),ur&&(s=fr)}function Ur(e){L(e,e.v+1)}function Hr(e){let t=0,r=xr(0),s;return()=>{Lt()&&(g(r),pr(()=>(t===0&&(s=Ut(()=>e(()=>Ur(r)))),t+=1,()=>{mr().then(()=>{t-=1,t===0&&(s==null||s(),s=void 0)})})))}}function Fr(e){let t;const r=Hr(n=>{let a=!1;const i=e.subscribe(o=>{t=o,a&&n()});return a=!0,i});function s(){return Lt()?(r(),t):je(e)}return"set"in e?{get current(){return s()},set current(n){e.set(n)}}:{get current(){return s()}}}const Ot=Symbol(),Br=e=>typeof(e==null?void 0:e.subscribe)=="function",$t=(e,t,r)=>{const s=e().map(i=>Br(i)?Fr(i):Ot),n=Ht(()=>e().map((i,o)=>s[o]===Ot?i:s[o].current)),a=()=>{g(n);let i;return Ut(()=>{i=t(g(n))}),i};r?A(a):gr(a)},jr=(e,t)=>$t(e,t,!1),Wr=(e,t)=>$t(e,t,!0);Object.assign(jr,{pre:Wr});const T=(e,t)=>(e==null?void 0:e[`is${t}`])===!0,Me=(e,t)=>{const r=Je(e,a=>a);let s;const n=r.subscribe(async a=>{s&&s();const i=await t(a);i&&(s=i)});ue(()=>{n(),s&&s()})},G=e=>{const t=j(e),r={set:s=>{r.current=s,t.set(s)},subscribe:t.subscribe,update:s=>{const n=s(r.current);r.current=n,t.set(n)},current:e};return r},Gt=(e,t)=>{if(t.includes(".")){const r=t.split("."),s=r.pop();for(let n=0;n<r.length;n+=1)e=e[r[n]];return{target:e,key:s}}else return{target:e,key:t}},Vr=()=>{const e=N("threlte-dom-context");if(!e)throw new Error("useDOM can only be used in a child component to <Canvas>.");return e},$r=()=>{const e=N("threlte-scheduler-context");if(!e)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return e},Gr=()=>{const e=N("threlte-camera-context");if(!e)throw new Error("useCamera can only be used in a child component to <Canvas>.");return e},Zr=()=>{const e=N("threlte-disposal-context");if(!e)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return e},Zt=Symbol("threlte-parent-context"),Yr=e=>{const t=G(e);return Ye(Zt,t),t},Kr=()=>N(Zt),We=Symbol("threlte-parent-object3d-context"),qr=e=>{const t=N(We),r=j(e),s=Je([r,t],([n,a])=>n??a);return Ye(We,s),r},Xr=()=>N(We),Jr=()=>{const e=N("threlte-scene-context");if(!e)throw new Error("useScene can only be used in a child component to <Canvas>.");return e},Qr=()=>{const e=N("threlte-renderer-context");if(!e)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return e},et=()=>{const e=$r(),t=Qr(),r=Gr(),s=Jr(),n=Vr();return{advance:e.advance,autoRender:e.autoRender,autoRenderTask:t.autoRenderTask,camera:r.camera,colorManagementEnabled:t.colorManagementEnabled,colorSpace:t.colorSpace,dpr:t.dpr,invalidate:e.invalidate,mainStage:e.mainStage,renderer:t.renderer,renderMode:e.renderMode,renderStage:e.renderStage,scheduler:e.scheduler,shadows:t.shadows,shouldRender:e.shouldRender,dom:n.dom,canvas:n.canvas,size:n.size,toneMapping:t.toneMapping,get scene(){return s.scene},set scene(i){s.scene=i}}},en=e=>typeof e=="object"&&e!==null,tn=()=>{const{invalidate:e}=et();let t;const r=j(),s=Kr(),n=Xr(),a=Yr(),i=qr();Me([r,a,s,n],([c,v,d,u])=>{if(t==null||t(),t=void 0,!v){e();return}if(c!==void 0){if(c){if(typeof c=="function")t=c({ref:v,parent:d,parentObject3D:u});else if(T(c,"Object3D")&&T(v,"Object3D"))t=()=>c==null?void 0:c.remove(v),c==null||c.add(v);else if(typeof c=="string"){const{target:x,key:f}=Gt(d,c),M=x[f];t=()=>x[f]=M,x[f]=v}}}else T(v,"Object3D")?(t=()=>u==null?void 0:u.remove(v),u==null||u.add(v)):en(d)&&(T(v,"Material")?d.material=v:T(v,"BufferGeometry")&&(d.geometry=v));e()});const o=c=>{r.set(c)},l=c=>{a.set(c),T(c,"Object3D")&&i.set(c)};return ue(()=>{t==null||t(),e()}),{updateRef:l,updateAttach:o}},rn=e=>T(e,"PerspectiveCamera")||T(e,"OrthographicCamera"),nn=()=>{const{invalidate:e,size:t,camera:r}=et(),s=j(),n=j(!0),a=j(!1);return Me([s,a],([c,v])=>{!c||!v||(r.set(c),e())}),Me([s,n,t],([c,v,d])=>{!c||v||(T(c,"OrthographicCamera")?(c.left=d.width/-2,c.right=d.width/2,c.top=d.height/2,c.bottom=d.height/-2,c.updateProjectionMatrix(),c.updateMatrixWorld(),e()):T(c,"PerspectiveCamera")&&(c.aspect=d.width/d.height,c.updateProjectionMatrix(),c.updateMatrixWorld(),e()))}),{updateRef:c=>{rn(c)&&s.set(c)},updateManual:c=>{n.set(c)},updateMakeDefault:c=>{a.set(c)}}},sn=e=>{let t,r,s=!1;const n=()=>{t==null||t(),t=e==null?void 0:e(r)},a=i=>{r=i,s&&n()};return Xe(()=>{n(),s=!0}),ue(()=>t==null?void 0:t()),{updateRef:a}},kt=Symbol("threlte-disposable-object-context"),an=e=>typeof(e==null?void 0:e.dispose)=="function"&&!T(e,"Scene"),on=e=>{let t;const r=j(void 0),s=j(e),{disposableObjectMounted:n,disposableObjectUnmounted:a,removeObjectFromDisposal:i}=Zr(),o=N(kt),l=Je([s,o??j(!0)],([d,u])=>d??u??!0);return Ye(kt,l),Me([r,l],([d,u])=>{d===t?u?t&&n(t):t&&i(t):u&&(t&&a(t),d&&n(d)),t=d}),ue(()=>{if(!je(l))return;const d=je(r);d&&a(d)}),{updateRef:d=>{an(d)&&r.set(d)},updateDispose:d=>{s.set(d)}}},cn=e=>e!==null&&typeof e=="object"&&"addEventListener"in e&&"removeEventListener"in e,ln=(e={})=>{const t=n=>{var a;n!=null&&n.type&&((a=e[`on${n.type}`])==null||a.call(e,n))},r=(n,a)=>{const i=[];for(const o of Object.keys(a))o.startsWith("on")&&(n.addEventListener(o.slice(2),t),i.push(o));return()=>{for(let o=0;o<i.length;o++)n.removeEventListener(i[o],t)}};return{updateRef:n=>{if(cn(n))return r(n,e)}}};let Ve;const dn=e=>{Ve=e},vn=()=>{const e=Ve;return Ve=void 0,e},un=e=>{const r=N("threlte-plugin-context");if(!r)return;const s=[],n=Object.values(r);if(n.length){const a=e();for(let i=0;i<n.length;i++){const o=n[i],l=o(a);l&&l.pluginProps&&s.push(...l.pluginProps)}}return{pluginsProps:s}},fn=new Set(["$$scope","$$slots","type","args","attach","instance"]),pn=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),mn=e=>typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e>"u"||e===null,Rt=(e,t,r)=>{var s,n,a;return!Array.isArray(r)&&typeof r=="number"&&typeof((s=e[t])==null?void 0:s.setScalar)=="function"&&!((n=e[t])!=null&&n.isColor)?(i,o,l)=>{i[o].setScalar(l)}:typeof((a=e[t])==null?void 0:a.set)=="function"?Array.isArray(r)?(i,o,l)=>{i[o].set(...l)}:(i,o,l)=>{i[o].set(l)}:(i,o,l)=>{i[o]=l}},xn=()=>{const{invalidate:e}=et(),t=new Map,r=new Map,s=(a,i,o,l)=>{if(mn(o)){const d=t.get(i);if(d&&d.instance===a&&d.value===o)return;t.set(i,{instance:a,value:o})}const{key:c,target:v}=Gt(a,i);if(o!=null){const d=r.get(i);if(d)d(v,c,o);else{const u=Rt(v,c,o);r.set(i,u),u(v,c,o)}}else Rt(v,c,o)(v,c,o);l.manualCamera||pn.has(c)&&(v.isPerspectiveCamera||v.isOrthographicCamera)&&v.updateProjectionMatrix()};return{updateProp:(a,i,o,l)=>{var c;!fn.has(i)&&!((c=l.pluginsProps)!=null&&c.includes(i))&&s(a,i,o,l),e()}}},gn=/^\s*class\s+/,hn=e=>typeof e!="function"?!1:gn.test(e.toString()),yn=e=>Array.isArray(e),bn=(e,t)=>hn(e)?yn(t)?new e(...t):new e:e;function Le(e,t){Ke(t,!0);let r=$(t,"is",19,vn),s=$(t,"manual",3,!1),n=$(t,"makeDefault",3,!1),a=$(t,"ref",15),i=Nr(t,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]),o=Ht(()=>bn(r(),t.args));const l=sn(t.oncreate);A(()=>{a()!==g(o)&&(a(g(o)),l.updateRef(g(o)))});const c=un(()=>({get ref(){return g(o)},get args(){return t.args},get attach(){return t.attach},get manual(){return s()},get makeDefault(){return n()},get dispose(){return t.dispose},get props(){return i}})),{updateProp:v}=xn();Object.keys(i).forEach(E=>{A(()=>{v(g(o),E,i[E],{manualCamera:s(),pluginsProps:c==null?void 0:c.pluginsProps})})});const d=tn();A(()=>d.updateAttach(t.attach)),A(()=>d.updateRef(g(o)));const u=nn();A(()=>u.updateRef(g(o))),A(()=>u.updateManual(s())),A(()=>u.updateMakeDefault(n()));const x=on(t.dispose);A(()=>x.updateRef(g(o))),A(()=>x.updateDispose(t.dispose));const f=ln(i);A(()=>f.updateRef(g(o)));var M=or(),C=Ft(M);Lr(C,()=>t.children??Nt,()=>({ref:g(o)})),oe(e,M),qe()}const wn={};new Proxy(function(){},{apply(e,t,r){return Le(...r)},get(e,t){if(typeof t!="string")return Le;const r=wn[t]||wr[t];if(r===void 0)throw new Error(`No Three.js module found for ${t}. Did you forget to extend the catalogue?`);return dn(r),Le}});const K=e=>({subscribe:e.subscribe,get current(){return e.current}});let ce=0;const tt=G(!1),Ie=G(!1),rt=G(void 0),nt=G(0),it=G(0),Yt=G([]),st=G(0),{onStart:Ue,onLoad:He,onError:Fe}=fe;fe.onStart=(e,t,r)=>{Ue==null||Ue(e,t,r),Ie.set(!0),rt.set(e),nt.set(t),it.set(r);const s=(t-ce)/(r-ce);st.set(s),s===1&&tt.set(!0)};fe.onLoad=()=>{He==null||He(),Ie.set(!1)};fe.onError=e=>{Fe==null||Fe(e),Yt.update(t=>[...t,e])};fe.onProgress=(e,t,r)=>{t===r&&(ce=r),Ie.set(!0),rt.set(e),nt.set(t),it.set(r);const s=(t-ce)/(r-ce)||1;st.set(s),s===1&&tt.set(!0)};K(Ie),K(rt),K(nt),K(it),K(Yt),K(st),K(tt);new R;new R;new R;new Wt;new Pe;new _r;new R;new R;new R;new R;new ne;const _n="Right",Dn="Top",Sn="Front",Mn="Left",Cn="Bottom",Pn="Back";[_n,Dn,Sn,Mn,Cn,Pn].map(e=>e.toLocaleLowerCase());new Qe;new R;Se.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ne(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Sr.line={uniforms:Dr.merge([Se.common,Se.fog,Se.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new pe;new R;new R;new pe;new pe;new pe;new R;new Pe;new Mr;new R;new Qe;new Wt;new pe;new Pe;new Pe;new Vt;`${U.logdepthbuf_pars_vertex}${U.fog_pars_vertex}${U.logdepthbuf_vertex}${U.fog_vertex}`;`${U.tonemapping_fragment}${U.colorspace_fragment}`;`${U.tonemapping_fragment}${U.colorspace_fragment}`;const In=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,zn=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,En=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,On=En,kn=`
	${In}
	${zn}
`;`${On}${kn}${U.tonemapping_fragment}${U.colorspace_fragment}`;new Qe;new Cr;typeof window<"u"&&document.createElement("div");for(let e=0;e<256;e++)(e<16?"0":"")+e.toString(16);new Pr(-1,1,1,-1,0,1);class Rn extends Ir{constructor(){super(),this.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zt([0,2,0,0,2,0],2))}}new Rn;var Kt={exports:{}};Kt.exports=ze;Kt.exports.default=ze;function ze(e,t,r){r=r||2;var s=t&&t.length,n=s?t[0]*r:e.length,a=qt(e,0,n,r,!0),i=[];if(!a||a.next===a.prev)return i;var o,l,c,v,d,u,x;if(s&&(a=Un(e,t,a,r)),e.length>80*r){o=c=e[0],l=v=e[1];for(var f=r;f<n;f+=r)d=e[f],u=e[f+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>v&&(v=u);x=Math.max(c-o,v-l),x=x!==0?32767/x:0}return le(a,i,r,o,l,x,0),i}function qt(e,t,r,s,n){var a,i;if(n===Ze(e,t,r,s)>0)for(a=t;a<r;a+=s)i=At(a,e[a],e[a+1],i);else for(a=r-s;a>=t;a-=s)i=At(a,e[a],e[a+1],i);return i&&Ee(i,i.next)&&(ve(i),i=i.next),i}function q(e,t){if(!e)return e;t||(t=e);var r=e,s;do if(s=!1,!r.steiner&&(Ee(r,r.next)||D(r.prev,r,r.next)===0)){if(ve(r),r=t=r.prev,r===r.next)break;s=!0}else r=r.next;while(s||r!==t);return t}function le(e,t,r,s,n,a,i){if(e){!i&&a&&Wn(e,s,n,a);for(var o=e,l,c;e.prev!==e.next;){if(l=e.prev,c=e.next,a?Tn(e,s,n,a):An(e)){t.push(l.i/r|0),t.push(e.i/r|0),t.push(c.i/r|0),ve(e),e=c.next,o=c.next;continue}if(e=c,e===o){i?i===1?(e=Nn(q(e),t,r),le(e,t,r,s,n,a,2)):i===2&&Ln(e,t,r,s,n,a):le(q(e),t,r,s,n,a,1);break}}}}function An(e){var t=e.prev,r=e,s=e.next;if(D(t,r,s)>=0)return!1;for(var n=t.x,a=r.x,i=s.x,o=t.y,l=r.y,c=s.y,v=n<a?n<i?n:i:a<i?a:i,d=o<l?o<c?o:c:l<c?l:c,u=n>a?n>i?n:i:a>i?a:i,x=o>l?o>c?o:c:l>c?l:c,f=s.next;f!==t;){if(f.x>=v&&f.x<=u&&f.y>=d&&f.y<=x&&re(n,o,a,l,i,c,f.x,f.y)&&D(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Tn(e,t,r,s){var n=e.prev,a=e,i=e.next;if(D(n,a,i)>=0)return!1;for(var o=n.x,l=a.x,c=i.x,v=n.y,d=a.y,u=i.y,x=o<l?o<c?o:c:l<c?l:c,f=v<d?v<u?v:u:d<u?d:u,M=o>l?o>c?o:c:l>c?l:c,C=v>d?v>u?v:u:d>u?d:u,E=$e(x,f,t,r,s),H=$e(M,C,t,r,s),m=e.prevZ,h=e.nextZ;m&&m.z>=E&&h&&h.z<=H;){if(m.x>=x&&m.x<=M&&m.y>=f&&m.y<=C&&m!==n&&m!==i&&re(o,v,l,d,c,u,m.x,m.y)&&D(m.prev,m,m.next)>=0||(m=m.prevZ,h.x>=x&&h.x<=M&&h.y>=f&&h.y<=C&&h!==n&&h!==i&&re(o,v,l,d,c,u,h.x,h.y)&&D(h.prev,h,h.next)>=0))return!1;h=h.nextZ}for(;m&&m.z>=E;){if(m.x>=x&&m.x<=M&&m.y>=f&&m.y<=C&&m!==n&&m!==i&&re(o,v,l,d,c,u,m.x,m.y)&&D(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;h&&h.z<=H;){if(h.x>=x&&h.x<=M&&h.y>=f&&h.y<=C&&h!==n&&h!==i&&re(o,v,l,d,c,u,h.x,h.y)&&D(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function Nn(e,t,r){var s=e;do{var n=s.prev,a=s.next.next;!Ee(n,a)&&Xt(n,s,s.next,a)&&de(n,a)&&de(a,n)&&(t.push(n.i/r|0),t.push(s.i/r|0),t.push(a.i/r|0),ve(s),ve(s.next),s=e=a),s=s.next}while(s!==e);return q(s)}function Ln(e,t,r,s,n,a){var i=e;do{for(var o=i.next.next;o!==i.prev;){if(i.i!==o.i&&Gn(i,o)){var l=Jt(i,o);i=q(i,i.next),l=q(l,l.next),le(i,t,r,s,n,a,0),le(l,t,r,s,n,a,0);return}o=o.next}i=i.next}while(i!==e)}function Un(e,t,r,s){var n=[],a,i,o,l,c;for(a=0,i=t.length;a<i;a++)o=t[a]*s,l=a<i-1?t[a+1]*s:e.length,c=qt(e,o,l,s,!1),c===c.next&&(c.steiner=!0),n.push($n(c));for(n.sort(Hn),a=0;a<n.length;a++)r=Fn(n[a],r);return r}function Hn(e,t){return e.x-t.x}function Fn(e,t){var r=Bn(e,t);if(!r)return t;var s=Jt(r,e);return q(s,s.next),q(r,r.next)}function Bn(e,t){var r=t,s=e.x,n=e.y,a=-1/0,i;do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){var o=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=s&&o>a&&(a=o,i=r.x<r.next.x?r:r.next,o===s))return i}r=r.next}while(r!==t);if(!i)return null;var l=i,c=i.x,v=i.y,d=1/0,u;r=i;do s>=r.x&&r.x>=c&&s!==r.x&&re(n<v?s:a,n,c,v,n<v?a:s,n,r.x,r.y)&&(u=Math.abs(n-r.y)/(s-r.x),de(r,e)&&(u<d||u===d&&(r.x>i.x||r.x===i.x&&jn(i,r)))&&(i=r,d=u)),r=r.next;while(r!==l);return i}function jn(e,t){return D(e.prev,e,t.prev)<0&&D(t.next,e,e.next)<0}function Wn(e,t,r,s){var n=e;do n.z===0&&(n.z=$e(n.x,n.y,t,r,s)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,Vn(n)}function Vn(e){var t,r,s,n,a,i,o,l,c=1;do{for(r=e,e=null,a=null,i=0;r;){for(i++,s=r,o=0,t=0;t<c&&(o++,s=s.nextZ,!!s);t++);for(l=c;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(n=r,r=r.nextZ,o--):(n=s,s=s.nextZ,l--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=s}a.nextZ=null,c*=2}while(i>1);return e}function $e(e,t,r,s,n){return e=(e-r)*n|0,t=(t-s)*n|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function $n(e){var t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function re(e,t,r,s,n,a,i,o){return(n-i)*(t-o)>=(e-i)*(a-o)&&(e-i)*(s-o)>=(r-i)*(t-o)&&(r-i)*(a-o)>=(n-i)*(s-o)}function Gn(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Zn(e,t)&&(de(e,t)&&de(t,e)&&Yn(e,t)&&(D(e.prev,e,t.prev)||D(e,t.prev,t))||Ee(e,t)&&D(e.prev,e,e.next)>0&&D(t.prev,t,t.next)>0)}function D(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Ee(e,t){return e.x===t.x&&e.y===t.y}function Xt(e,t,r,s){var n=De(D(e,t,r)),a=De(D(e,t,s)),i=De(D(r,s,e)),o=De(D(r,s,t));return!!(n!==a&&i!==o||n===0&&_e(e,r,t)||a===0&&_e(e,s,t)||i===0&&_e(r,e,s)||o===0&&_e(r,t,s))}function _e(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function De(e){return e>0?1:e<0?-1:0}function Zn(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&Xt(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function de(e,t){return D(e.prev,e,e.next)<0?D(e,t,e.next)>=0&&D(e,e.prev,t)>=0:D(e,t,e.prev)<0||D(e,e.next,t)<0}function Yn(e,t){var r=e,s=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==e);return s}function Jt(e,t){var r=new Ge(e.i,e.x,e.y),s=new Ge(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,s.next=r,r.prev=s,a.next=s,s.prev=a,s}function At(e,t,r,s){var n=new Ge(e,t,r);return s?(n.next=s.next,n.prev=s,s.next.prev=n,s.next=n):(n.prev=n,n.next=n),n}function ve(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ge(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}ze.deviation=function(e,t,r,s){var n=t&&t.length,a=n?t[0]*r:e.length,i=Math.abs(Ze(e,0,a,r));if(n)for(var o=0,l=t.length;o<l;o++){var c=t[o]*r,v=o<l-1?t[o+1]*r:e.length;i-=Math.abs(Ze(e,c,v,r))}var d=0;for(o=0;o<s.length;o+=3){var u=s[o]*r,x=s[o+1]*r,f=s[o+2]*r;d+=Math.abs((e[u]-e[f])*(e[x+1]-e[u+1])-(e[u]-e[x])*(e[f+1]-e[u+1]))}return i===0&&d===0?0:Math.abs((d-i)/i)};function Ze(e,t,r,s){for(var n=0,a=t,i=r-s;a<r;a+=s)n+=(e[i]-e[a])*(e[a+1]+e[i+1]),i=a;return n}ze.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},s=0,n=0;n<e.length;n++){for(var a=0;a<e[n].length;a++)for(var i=0;i<t;i++)r.vertices.push(e[n][a][i]);n>0&&(s+=e[n-1].length,r.holes.push(s))}return r};new ne;new ne;var Tt;(e=>{function t(n){let a=n.slice();return a.sort(e.POINT_COMPARATOR),e.makeHullPresorted(a)}e.makeHull=t;function r(n){if(n.length<=1)return n.slice();let a=[];for(let o=0;o<n.length;o++){const l=n[o];for(;a.length>=2;){const c=a[a.length-1],v=a[a.length-2];if((c.x-v.x)*(l.y-v.y)>=(c.y-v.y)*(l.x-v.x))a.pop();else break}a.push(l)}a.pop();let i=[];for(let o=n.length-1;o>=0;o--){const l=n[o];for(;i.length>=2;){const c=i[i.length-1],v=i[i.length-2];if((c.x-v.x)*(l.y-v.y)>=(c.y-v.y)*(l.x-v.x))i.pop();else break}i.push(l)}return i.pop(),a.length==1&&i.length==1&&a[0].x==i[0].x&&a[0].y==i[0].y?a:a.concat(i)}e.makeHullPresorted=r;function s(n,a){return n.x<a.x?-1:n.x>a.x?1:n.y<a.y?-1:n.y>a.y?1:0}e.POINT_COMPARATOR=s})(Tt||(Tt={}));const Kn=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,qn=`
varying vec2 vUv;
uniform sampler2D u_texture;    
uniform vec2 u_mouse;
uniform vec2 u_prevMouse;
uniform float u_aberrationIntensity;

void main() {
    vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
    vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);

    vec2 mouseDirection = u_mouse - u_prevMouse;

    vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
    float pixelDistanceToMouse = length(pixelToMouseDirection);
    float strength = smoothstep(0.5, 0.1, pixelDistanceToMouse);

    vec2 uvOffset = strength * - mouseDirection * 0.35;
    vec2 uv = vUv - uvOffset;

    vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
    vec4 colorG = texture2D(u_texture, uv);
    vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

    gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
}
`;var Xn=Ce('<div class="image-container svelte-jj7csg"><img alt="Shader Effect" class="svelte-jj7csg"></div>');function Jn(e,t){Ke(t,!1);let r=$(t,"imageSrc",8),s=$(t,"exactWidth",8,void 0),n=$(t,"exactHeight",8,void 0),a=$(t,"minHeight",8,"400px"),i=V(),o=V(),l=.02,c,v,d,u,x={x:.5,y:.5},f={x:.5,y:.5},M=1,C={x:.5,y:.5},E=0,H,m=1,h=1;function me(S){m=S.image.naturalWidth/S.image.naturalHeight,c=new Er;const P=S.image.naturalWidth,k=S.image.naturalHeight;let I,F;if(s()&&n())I=parseFloat(s()),F=parseFloat(n());else{const se=g(i).offsetWidth,ae=g(i).offsetHeight||parseFloat(a());h=se/ae,se/ae>m?(F=k,I=F*m):(I=P,F=I/m)}v=new Or(45,m,.01,10),console.log(m),v.position.z=1.5;let ge={u_mouse:{value:new ne},u_prevMouse:{value:new ne},u_aberrationIntensity:{value:1},u_texture:{value:S}},Z,Y;const Oe=13.1*Math.PI/180,ee=2*Math.tan(Oe/2)*v.position.z,he=ee*h;m>h?(Z=he,Y=Z/m):(Y=ee,Z=Y*m),u=new Vt(new kr(Z,Y),new Rr({uniforms:ge,vertexShader:Kn,fragmentShader:qn})),c.add(u),d=new Ar({alpha:!0}),d.setSize(I,F),d.setPixelRatio(window.devicePixelRatio);const O=d.domElement;O.style.position="absolute",O.style.top="50%",O.style.left="50%",O.style.transform="translate(-50%, -50%)",O.style.width=I+"px",O.style.height=F+"px",O.style.display="block",O.style.margin="auto",O.style.borderRadius="2rem",O.style.objectFit="contain",O.style.transformOrigin="center center",g(i)&&g(i).appendChild(O)}function xe(){if(H=requestAnimationFrame(xe),x.x+=(f.x-x.x)*l,x.y+=(f.y-x.y)*l,!u||!u.material)return;u.material.uniforms.u_mouse.value.set(x.x,1-x.y),u.material.uniforms.u_prevMouse.value.set(C.x,1-C.y);const S=x.x-C.x,P=x.y-C.y,k=Math.sqrt(S*S+P*P);E=Math.max(E,k*20),M=Math.max(0,M-.015),E=Math.max(0,E-.1);const I=Math.min(2,M+E*.2);u.material.uniforms.u_aberrationIntensity.value=I,d.render(c,v)}function X(S){if(!g(i))return;l=.02;let P=g(i).getBoundingClientRect();C={...f};const k=(S.clientX-P.left)/P.width,I=(S.clientY-P.top)/P.height;k>=0&&k<=1&&I>=0&&I<=1?(f.x=k,f.y=I,M=1):J()}function ie(S){if(!g(i))return;l=.02;let P=g(i).getBoundingClientRect();const k=Math.max(0,Math.min(1,(S.clientX-P.left)/P.width)),I=Math.max(0,Math.min(1,(S.clientY-P.top)/P.height));x.x=f.x=k,x.y=f.y=I,C={...x},M=1,E=.5}function J(){l=.05,f={...C}}Xe(()=>{setTimeout(()=>{if(!g(i)||!g(o)){console.error("ImageShader: Could not initialize - DOM elements not available");return}new zr().load(`${w}${r()}`,P=>{me(P),xe(),g(i)&&(g(i).addEventListener("mousemove",X),g(i).addEventListener("mouseenter",ie),g(i).addEventListener("mouseleave",J))})},0)}),ue(()=>{g(i)&&(g(i).removeEventListener("mousemove",X),g(i).removeEventListener("mouseenter",ie),g(i).removeEventListener("mouseleave",J)),H&&cancelAnimationFrame(H),d&&d.dispose()}),jt();var W=Xn(),Q=y(W);Et(Q,S=>L(o,S),()=>g(o)),b(W),Et(W,S=>L(i,S),()=>g(i)),Be(()=>{Bt(W,`${s()||n()?"":`min-height: ${a()};`}`),_(Q,"src",`${w}${r()}`)}),oe(e,W),qe()}var Qn=Ce('<div><h1 class="tracking-in-expand svelte-1x0r68s">WELCOME</h1></div>'),ei=Ce('<div class="cursor-preview svelte-1x0r68s"><img alt="Section Preview" class="svelte-1x0r68s"></div>'),ti=Ce(`<!> <div class="landing-page dark-section svelte-1x0r68s"><div id="glass-landing" class="svelte-1x0r68s"></div> <div class="hero-container svelte-1x0r68s"><div class="hero-content svelte-1x0r68s"><div class="hero-text svelte-1x0r68s"><div class="identity svelte-1x0r68s"><span class="greeting svelte-1x0r68s">Hi, I'm</span> <h1 class="name svelte-1x0r68s">David</h1></div> <h2 class="profession svelte-1x0r68s">3D Artist & Visual Designer</h2> <div class="tagline svelte-1x0r68s">Transforming creative concepts into stunning digital experiences</div> <div class="description svelte-1x0r68s"><p class="svelte-1x0r68s">I specialize in creating immersive 3D visuals and compelling digital art that helps brands and businesses stand out in the digital space.</p> <p class="svelte-1x0r68s">With expertise in the 3D sphere, I bring ideas to life through technical excellence and artistic vision.</p></div> <div class="hero-cta svelte-1x0r68s"><a class="primary-btn svelte-1x0r68s">View My Work</a> <a class="secondary-btn svelte-1x0r68s">Let's Talk</a></div></div> <div class="hero-visual svelte-1x0r68s"><div class="image-container svelte-1x0r68s"><!></div></div></div></div></div> <div class="landing-page svelte-1x0r68s"><div id="glass-landingWhite" class="svelte-1x0r68s"></div> <div class="featured-container svelte-1x0r68s"><div class="featured-content svelte-1x0r68s"><h1 class="section-title svelte-1x0r68s">Featured Work</h1> <div class="accent-bar svelte-1x0r68s"></div> <div class="featured-grid svelte-1x0r68s"><a class="featured-item svelte-1x0r68s"><div class="featured-image-container svelte-1x0r68s"><img alt="3D Visualization Project" class="svelte-1x0r68s"> <div class="featured-overlay svelte-1x0r68s"><h3 class="svelte-1x0r68s">THE MAG WRAP 2025</h3> <p class="svelte-1x0r68s">Garment & Crowd Simulations</p> <span class="view-details svelte-1x0r68s">View Project →</span></div></div></a></div></div></div></div> <div class="logos svelte-1x0r68s"><div class="logos-slide svelte-1x0r68s"><img alt="Apparently Logo" class="logo svelte-1x0r68s"> <img alt="Krystof Logo" class="logo svelte-1x0r68s"> <img alt="Mira Logo" class="logo svelte-1x0r68s"> <img alt="Devomi Logo" class="logo svelte-1x0r68s"> <img alt="dykast Logo" class="logo svelte-1x0r68s"></div> <div class="logos-slide svelte-1x0r68s"><img alt="Apparently Logo" class="logo svelte-1x0r68s"> <img alt="Krystof Logo" class="logo svelte-1x0r68s"> <img alt="Mira Logo" class="logo svelte-1x0r68s"> <img alt="Devomi Logo" class="logo svelte-1x0r68s"> <img alt="dykast Logo" class="logo svelte-1x0r68s"></div> <div class="logos-slide svelte-1x0r68s"><img alt="Apparently Logo" class="logo svelte-1x0r68s"> <img alt="Krystof Logo" class="logo svelte-1x0r68s"> <img alt="Mira Logo" class="logo svelte-1x0r68s"> <img alt="Devomi Logo" class="logo svelte-1x0r68s"> <img alt="dykast Logo" class="logo svelte-1x0r68s"></div> <div class="logos-slide svelte-1x0r68s"><img alt="Apparently Logo" class="logo svelte-1x0r68s"> <img alt="Krystof Logo" class="logo svelte-1x0r68s"> <img alt="Mira Logo" class="logo svelte-1x0r68s"> <img alt="Devomi Logo" class="logo svelte-1x0r68s"> <img alt="dykast Logo" class="logo svelte-1x0r68s"></div></div> <div class="landing-page dark-section svelte-1x0r68s"><div id="glass-landing" class="svelte-1x0r68s"></div> <div class="testimonials-container svelte-1x0r68s"><div class="testimonials-content svelte-1x0r68s"><h1 class="section-title svelte-1x0r68s">Client Testimonials</h1> <div class="accent-bar svelte-1x0r68s"></div> <div class="testimonials-grid svelte-1x0r68s"><div class="testimonial-card svelte-1x0r68s"><div class="testimonial-content svelte-1x0r68s"><svg class="quote-icon svelte-1x0r68s" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" class="svelte-1x0r68s"></path></svg> <p class="testimonial-text svelte-1x0r68s">"Working with David was a real pleasure. He is quick to respond to any requests and very accommodating, making co-operating smooth and effective. Can always be trusted to deliver!"</p> <div class="testimonial-author svelte-1x0r68s"><strong class="svelte-1x0r68s">Mira Lumière</strong> <span class="svelte-1x0r68s">Director @ Yoimira Entertainment</span> <img alt="Mira Logo" class="logo-testamonial svelte-1x0r68s" style="opacity:0.5"></div></div></div> <div class="testimonial-card svelte-1x0r68s"><div class="testimonial-content svelte-1x0r68s"><svg class="quote-icon svelte-1x0r68s" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" class="svelte-1x0r68s"></path></svg> <p class="testimonial-text svelte-1x0r68s">"David is a great addition to my team. He knows his way around 3D graphics and isn’t afraid to take on complex technical challenges. He communicates really well, so working with him is always a breeze. Plus, he's reliable and always delivers his work on time, which I truly appreciate. I really enjoy working with him, and I know he'll keep playing a big part in our projects' success."</p> <div class="testimonial-author svelte-1x0r68s"><strong class="svelte-1x0r68s">Krystof Jezek</strong> <span class="svelte-1x0r68s">Motion Director @ Krystof Jezek</span> <img alt="Krystof Logo" class="logo-testamonial svelte-1x0r68s" style="opacity:0.5"></div></div></div></div></div></div></div> <div class="landing-page svelte-1x0r68s"><div id="glass-landingWhite" class="svelte-1x0r68s"></div> <div class="skills-container svelte-1x0r68s"><div class="skills-content svelte-1x0r68s"><h1 class="skills-title svelte-1x0r68s">Skills</h1> <div class="accent-bar svelte-1x0r68s"></div> <div class="skills-section svelte-1x0r68s"><div class="section-container svelte-1x0r68s"><div class="bubble-container svelte-1x0r68s"><span class="bubble svelte-1x0r68s">3D Modeling</span> <span class="bubble svelte-1x0r68s">Texturing</span> <span class="bubble svelte-1x0r68s">Animation</span> <span class="bubble svelte-1x0r68s">UV Mapping</span> <span class="bubble svelte-1x0r68s">Rigging</span> <span class="bubble svelte-1x0r68s">Rendering</span> <span class="bubble svelte-1x0r68s">Lighting</span> <span class="bubble svelte-1x0r68s">Sculpting</span> <span class="bubble svelte-1x0r68s">Geometry Nodes</span> <span class="bubble svelte-1x0r68s">Simulations</span></div></div> <div class="section-container svelte-1x0r68s"><h2 class="section-title svelte-1x0r68s">Technology</h2> <div class="accent-bar svelte-1x0r68s"></div> <div class="bubble-container svelte-1x0r68s"><span class="bubble svelte-1x0r68s">Blender</span> <span class="bubble svelte-1x0r68s">Substance Painter</span> <span class="bubble svelte-1x0r68s">Substance Designer</span> <span class="bubble svelte-1x0r68s">3DCoat</span> <span class="bubble svelte-1x0r68s">Zbrush</span> <span class="bubble svelte-1x0r68s">Photoshop</span> <span class="bubble svelte-1x0r68s">Illustrator</span> <span class="bubble svelte-1x0r68s">Indesign</span> <span class="bubble svelte-1x0r68s">After Effects</span> <span class="bubble svelte-1x0r68s">Figma</span> <span class="bubble svelte-1x0r68s">Davinci Resolve</span> <span class="bubble svelte-1x0r68s">Houdini</span> <span class="bubble svelte-1x0r68s">Figma</span> <span class="bubble svelte-1x0r68s">Github</span> <span class="bubble svelte-1x0r68s">Svelte</span></div></div></div></div></div></div> <div class="landing-page dark-section final-section svelte-1x0r68s"><div id="glass-landing" class="svelte-1x0r68s"></div> <div class="sections-container svelte-1x0r68s"><div class="sections-content svelte-1x0r68s"><div class="sections-left svelte-1x0r68s"><h1 class="mega-title svelte-1x0r68s">Not Impressed<br class="svelte-1x0r68s">Yet?</h1> <div class="accent-bar svelte-1x0r68s"></div> <p class="mega-description svelte-1x0r68s">Choose your journey through my portfolio collections</p></div> <div class="sections-right svelte-1x0r68s"><div class="sections-grid svelte-1x0r68s"><a class="section-item svelte-1x0r68s"><h2 class="svelte-1x0r68s">Personal</h2> <p class="svelte-1x0r68s">Explore my creative projects and artistic expressions</p> <div class="section-number svelte-1x0r68s">01</div></a> <a class="section-item svelte-1x0r68s"><h2 class="svelte-1x0r68s">Commercial</h2> <p class="svelte-1x0r68s">View my professional work and client projects</p> <div class="section-number svelte-1x0r68s">02</div></a> <a class="section-item svelte-1x0r68s"><h2 class="svelte-1x0r68s">Retro</h2> <p class="svelte-1x0r68s">Discover my land of PSX creations</p> <div class="section-number svelte-1x0r68s">03</div></a></div></div></div></div></div> <!> <!>`,1);function yi(e,t){Ke(t,!1);let r=V(!0),s=V(!1),n=V(""),a=V(!1),i=V(0),o=V(0);function l(z,B){L(i,z.clientX),L(o,z.clientY),L(n,B),L(a,!0)}function c(){L(a,!1)}Xe(()=>{console.log("Home Page Loaded"),setTimeout(()=>L(s,!0),1e3),setTimeout(()=>L(r,!1),2e3)}),jt();var v=ti(),d=Ft(v);{var u=z=>{var B=Qn();let we;Be(ar=>we=br(B,1,"intro svelte-1x0r68s",null,we,ar),[()=>({"fade-out":g(s)})],hr),oe(z,B)};It(d,z=>{g(r)&&z(u)})}var x=p(d,2),f=p(y(x),2),M=y(f),C=y(M),E=p(y(C),8),H=y(E);_(H,"href",`${w??""}/personal`);var m=p(H,2);_(m,"href",`${w??""}/contact`),b(E),b(C);var h=p(C,2),me=y(h),xe=y(me);Jn(xe,{imageSrc:"/images/landing.jpg"}),b(me),b(h),b(M),b(f),b(x);var X=p(x,2),ie=p(y(X),2),J=y(ie),W=p(y(J),4),Q=y(W);_(Q,"href",`${w??""}/project/visualization`);var S=y(Q),P=y(S);_(P,"src",`${w??""}/images/projects/wrap/thumbnail.webp`),yr(2),b(S),b(Q),b(W),b(J),b(ie),b(X);var k=p(X,2),I=y(k),F=y(I);_(F,"src",`${w??""}/images/apparently-logo.png`);var ge=p(F,2);_(ge,"src",`${w??""}/images/krystof-logo.png`);var Z=p(ge,2);_(Z,"src",`${w??""}/images/mira-logo.png`);var Y=p(Z,2);_(Y,"src",`${w??""}/images/devomi-logo.png`);var Oe=p(Y,2);_(Oe,"src",`${w??""}/images/dyky-logo.png`),b(I);var ee=p(I,2),he=y(ee);_(he,"src",`${w??""}/images/apparently-logo.png`);var O=p(he,2);_(O,"src",`${w??""}/images/krystof-logo.png`);var se=p(O,2);_(se,"src",`${w??""}/images/mira-logo.png`);var ae=p(se,2);_(ae,"src",`${w??""}/images/devomi-logo.png`);var Qt=p(ae,2);_(Qt,"src",`${w??""}/images/dyky-logo.png`),b(ee);var ke=p(ee,2),at=y(ke);_(at,"src",`${w??""}/images/apparently-logo.png`);var ot=p(at,2);_(ot,"src",`${w??""}/images/krystof-logo.png`);var ct=p(ot,2);_(ct,"src",`${w??""}/images/mira-logo.png`);var lt=p(ct,2);_(lt,"src",`${w??""}/images/devomi-logo.png`);var er=p(lt,2);_(er,"src",`${w??""}/images/dyky-logo.png`),b(ke);var dt=p(ke,2),vt=y(dt);_(vt,"src",`${w??""}/images/apparently-logo.png`);var ut=p(vt,2);_(ut,"src",`${w??""}/images/krystof-logo.png`);var ft=p(ut,2);_(ft,"src",`${w??""}/images/mira-logo.png`);var pt=p(ft,2);_(pt,"src",`${w??""}/images/devomi-logo.png`);var tr=p(pt,2);_(tr,"src",`${w??""}/images/dyky-logo.png`),b(dt),b(k);var Re=p(k,2),mt=p(y(Re),2),xt=y(mt),gt=p(y(xt),4),Ae=y(gt),ht=y(Ae),yt=p(y(ht),4),rr=p(y(yt),4);_(rr,"src",`${w??""}/images/mira-logo.png`),b(yt),b(ht),b(Ae);var bt=p(Ae,2),wt=y(bt),_t=p(y(wt),4),nr=p(y(_t),4);_(nr,"src",`${w??""}/images/krystof-logo.png`),b(_t),b(wt),b(bt),b(gt),b(xt),b(mt),b(Re);var Te=p(Re,4),Dt=p(y(Te),2),St=y(Dt),Mt=p(y(St),2),Ct=y(Mt),ye=y(Ct);_(ye,"href",`${w??""}/personal`);var be=p(ye,2);_(be,"href",`${w??""}/commercial`);var Ne=p(be,2);_(Ne,"href",`${w??""}/retro`),b(Ct),b(Mt),b(St),b(Dt),b(Te);var Pt=p(Te,2);{var ir=z=>{var B=ei(),we=y(B);b(B),Be(()=>{Bt(B,`left: ${g(i)+180}px; top: ${g(o)-50}px;`),_(we,"src",`${w??""}${g(n)??""}`)}),oe(z,B)};It(Pt,z=>{g(a)&&z(ir)})}var sr=p(Pt,2);Tr(sr,{}),te("mousemove",ye,z=>l(z,"/images/gifs/personal.gif")),te("mouseleave",ye,c),te("mousemove",be,z=>l(z,"/images/gifs/commercial.gif")),te("mouseleave",be,c),te("mousemove",Ne,z=>l(z,"/images/gifs/retro.gif")),te("mouseleave",Ne,c),oe(e,v),qe()}export{yi as component};
