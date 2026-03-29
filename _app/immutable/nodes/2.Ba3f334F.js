import{e as cn,b as oe,t as Me}from"../chunks/uTVFfCR1.js";import"../chunks/C-KlFWM5.js";import{A as ln,a9 as dn,C as vn,o as Tt,U as un,x as fn,_ as pn,e as A,aP as Nt,b as y,r as mn,u as Lt,aM as gn,J as yn,aN as Ut,a4 as R,a5 as hn,aQ as N,aR as Ze,ai as Ye,aj as Ht,al as Ke,ap as Fe,am as x,m as W,an as b,ak as p,a as xn,ao as bn}from"../chunks/Doxv_zDN.js";import{e as te}from"../chunks/CJUtn9Sh.js";import{i as Ct}from"../chunks/Du-6FoUU.js";import{s as k}from"../chunks/DzPMz6Vi.js";import{s as wn}from"../chunks/Do2w9o0u.js";import{s as Ft}from"../chunks/DJyR-pXI.js";import{i as Bt}from"../chunks/D3mgWV0X.js";import{a as ue,o as Xe}from"../chunks/D_usMznt.js";import{g as Be,d as Je,w as B}from"../chunks/CdC3-oiW.js";import{T as kn,D as fe,V as O,S as jt,M as qe,R as _n,a as re,b as Qe,U as De,c as Dn,d as Sn,e as pe,L as Mn,f as Wt,g as L,C as qn,O as Cn,h as Pn,F as Pt,i as In,j as zn,P as En,k as On,l as Rn,W as An,B as Tn}from"../chunks/mIAqETd0.js";import{p as V,r as Nn}from"../chunks/BM6RxNwV.js";import{b as It}from"../chunks/BRz8ZVQu.js";import{b as w}from"../chunks/Bh1NSRWo.js";/* empty css                */import"../chunks/BiTT8mz5.js";function Ln(e,t,...n){var s=e,r=Tt,a;ln(()=>{r!==(r=t())&&(a&&(un(a),a=null),a=vn(()=>r(s,...n)))},dn),fn&&(s=pn)}function Un(e){A(e,e.v+1)}function Hn(e){let t=0,n=yn(0),s;return()=>{Nt()&&(y(n),mn(()=>(t===0&&(s=Lt(()=>e(()=>Un(n)))),t+=1,()=>{gn().then(()=>{t-=1,t===0&&(s==null||s(),s=void 0)})})))}}function Fn(e){let t;const n=Hn(r=>{let a=!1;const i=e.subscribe(o=>{t=o,a&&r()});return a=!0,i});function s(){return Nt()?(n(),t):Be(e)}return"set"in e?{get current(){return s()},set current(r){e.set(r)}}:{get current(){return s()}}}const zt=Symbol(),Bn=e=>typeof(e==null?void 0:e.subscribe)=="function",Vt=(e,t,n)=>{const s=e().map(i=>Bn(i)?Fn(i):zt),r=Ut(()=>e().map((i,o)=>s[o]===zt?i:s[o].current)),a=()=>{y(r);let i;return Lt(()=>{i=t(y(r))}),i};n?R(a):hn(a)},jn=(e,t)=>Vt(e,t,!1),Wn=(e,t)=>Vt(e,t,!0);Object.assign(jn,{pre:Wn});const T=(e,t)=>(e==null?void 0:e[`is${t}`])===!0,Se=(e,t)=>{const n=Je(e,a=>a);let s;const r=n.subscribe(async a=>{s&&s();const i=await t(a);i&&(s=i)});ue(()=>{r(),s&&s()})},$=e=>{const t=B(e),n={set:s=>{n.current=s,t.set(s)},subscribe:t.subscribe,update:s=>{const r=s(n.current);n.current=r,t.set(r)},current:e};return n},$t=(e,t)=>{if(t.includes(".")){const n=t.split("."),s=n.pop();for(let r=0;r<n.length;r+=1)e=e[n[r]];return{target:e,key:s}}else return{target:e,key:t}},Vn=()=>{const e=N("threlte-dom-context");if(!e)throw new Error("useDOM can only be used in a child component to <Canvas>.");return e},$n=()=>{const e=N("threlte-scheduler-context");if(!e)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return e},Gn=()=>{const e=N("threlte-camera-context");if(!e)throw new Error("useCamera can only be used in a child component to <Canvas>.");return e},Zn=()=>{const e=N("threlte-disposal-context");if(!e)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return e},Gt=Symbol("threlte-parent-context"),Yn=e=>{const t=$(e);return Ze(Gt,t),t},Kn=()=>N(Gt),je=Symbol("threlte-parent-object3d-context"),Xn=e=>{const t=N(je),n=B(e),s=Je([n,t],([r,a])=>r??a);return Ze(je,s),n},Jn=()=>N(je),Qn=()=>{const e=N("threlte-scene-context");if(!e)throw new Error("useScene can only be used in a child component to <Canvas>.");return e},er=()=>{const e=N("threlte-renderer-context");if(!e)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return e},et=()=>{const e=$n(),t=er(),n=Gn(),s=Qn(),r=Vn();return{advance:e.advance,autoRender:e.autoRender,autoRenderTask:t.autoRenderTask,camera:n.camera,colorManagementEnabled:t.colorManagementEnabled,colorSpace:t.colorSpace,dpr:t.dpr,invalidate:e.invalidate,mainStage:e.mainStage,renderer:t.renderer,renderMode:e.renderMode,renderStage:e.renderStage,scheduler:e.scheduler,shadows:t.shadows,shouldRender:e.shouldRender,dom:r.dom,canvas:r.canvas,size:r.size,toneMapping:t.toneMapping,get scene(){return s.scene},set scene(i){s.scene=i}}},tr=e=>typeof e=="object"&&e!==null,nr=()=>{const{invalidate:e}=et();let t;const n=B(),s=Kn(),r=Jn(),a=Yn(),i=Xn();Se([n,a,s,r],([c,v,d,u])=>{if(t==null||t(),t=void 0,!v){e();return}if(c!==void 0){if(c){if(typeof c=="function")t=c({ref:v,parent:d,parentObject3D:u});else if(T(c,"Object3D")&&T(v,"Object3D"))t=()=>c==null?void 0:c.remove(v),c==null||c.add(v);else if(typeof c=="string"){const{target:g,key:f}=$t(d,c),S=g[f];t=()=>g[f]=S,g[f]=v}}}else T(v,"Object3D")?(t=()=>u==null?void 0:u.remove(v),u==null||u.add(v)):tr(d)&&(T(v,"Material")?d.material=v:T(v,"BufferGeometry")&&(d.geometry=v));e()});const o=c=>{n.set(c)},l=c=>{a.set(c),T(c,"Object3D")&&i.set(c)};return ue(()=>{t==null||t(),e()}),{updateRef:l,updateAttach:o}},rr=e=>T(e,"PerspectiveCamera")||T(e,"OrthographicCamera"),ir=()=>{const{invalidate:e,size:t,camera:n}=et(),s=B(),r=B(!0),a=B(!1);return Se([s,a],([c,v])=>{!c||!v||(n.set(c),e())}),Se([s,r,t],([c,v,d])=>{!c||v||(T(c,"OrthographicCamera")?(c.left=d.width/-2,c.right=d.width/2,c.top=d.height/2,c.bottom=d.height/-2,c.updateProjectionMatrix(),c.updateMatrixWorld(),e()):T(c,"PerspectiveCamera")&&(c.aspect=d.width/d.height,c.updateProjectionMatrix(),c.updateMatrixWorld(),e()))}),{updateRef:c=>{rr(c)&&s.set(c)},updateManual:c=>{r.set(c)},updateMakeDefault:c=>{a.set(c)}}},sr=e=>{let t,n,s=!1;const r=()=>{t==null||t(),t=e==null?void 0:e(n)},a=i=>{n=i,s&&r()};return Xe(()=>{r(),s=!0}),ue(()=>t==null?void 0:t()),{updateRef:a}},Et=Symbol("threlte-disposable-object-context"),ar=e=>typeof(e==null?void 0:e.dispose)=="function"&&!T(e,"Scene"),or=e=>{let t;const n=B(void 0),s=B(e),{disposableObjectMounted:r,disposableObjectUnmounted:a,removeObjectFromDisposal:i}=Zn(),o=N(Et),l=Je([s,o??B(!0)],([d,u])=>d??u??!0);return Ze(Et,l),Se([n,l],([d,u])=>{d===t?u?t&&r(t):t&&i(t):u&&(t&&a(t),d&&r(d)),t=d}),ue(()=>{if(!Be(l))return;const d=Be(n);d&&a(d)}),{updateRef:d=>{ar(d)&&n.set(d)},updateDispose:d=>{s.set(d)}}},cr=e=>e!==null&&typeof e=="object"&&"addEventListener"in e&&"removeEventListener"in e,lr=(e={})=>{const t=r=>{var a;r!=null&&r.type&&((a=e[`on${r.type}`])==null||a.call(e,r))},n=(r,a)=>{const i=[];for(const o of Object.keys(a))o.startsWith("on")&&(r.addEventListener(o.slice(2),t),i.push(o));return()=>{for(let o=0;o<i.length;o++)r.removeEventListener(i[o],t)}};return{updateRef:r=>{if(cr(r))return n(r,e)}}};let We;const dr=e=>{We=e},vr=()=>{const e=We;return We=void 0,e},ur=e=>{const n=N("threlte-plugin-context");if(!n)return;const s=[],r=Object.values(n);if(r.length){const a=e();for(let i=0;i<r.length;i++){const o=r[i],l=o(a);l&&l.pluginProps&&s.push(...l.pluginProps)}}return{pluginsProps:s}},fr=new Set(["$$scope","$$slots","type","args","attach","instance"]),pr=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),mr=e=>typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e>"u"||e===null,Ot=(e,t,n)=>{var s,r,a;return!Array.isArray(n)&&typeof n=="number"&&typeof((s=e[t])==null?void 0:s.setScalar)=="function"&&!((r=e[t])!=null&&r.isColor)?(i,o,l)=>{i[o].setScalar(l)}:typeof((a=e[t])==null?void 0:a.set)=="function"?Array.isArray(n)?(i,o,l)=>{i[o].set(...l)}:(i,o,l)=>{i[o].set(l)}:(i,o,l)=>{i[o]=l}},gr=()=>{const{invalidate:e}=et(),t=new Map,n=new Map,s=(a,i,o,l)=>{if(mr(o)){const d=t.get(i);if(d&&d.instance===a&&d.value===o)return;t.set(i,{instance:a,value:o})}const{key:c,target:v}=$t(a,i);if(o!=null){const d=n.get(i);if(d)d(v,c,o);else{const u=Ot(v,c,o);n.set(i,u),u(v,c,o)}}else Ot(v,c,o)(v,c,o);l.manualCamera||pr.has(c)&&(v.isPerspectiveCamera||v.isOrthographicCamera)&&v.updateProjectionMatrix()};return{updateProp:(a,i,o,l)=>{var c;!fr.has(i)&&!((c=l.pluginsProps)!=null&&c.includes(i))&&s(a,i,o,l),e()}}},yr=/^\s*class\s+/,hr=e=>typeof e!="function"?!1:yr.test(e.toString()),xr=e=>Array.isArray(e),br=(e,t)=>hr(e)?xr(t)?new e(...t):new e:e;function Ne(e,t){Ye(t,!0);let n=V(t,"is",19,vr),s=V(t,"manual",3,!1),r=V(t,"makeDefault",3,!1),a=V(t,"ref",15),i=Nn(t,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]),o=Ut(()=>br(n(),t.args));const l=sr(t.oncreate);R(()=>{a()!==y(o)&&(a(y(o)),l.updateRef(y(o)))});const c=ur(()=>({get ref(){return y(o)},get args(){return t.args},get attach(){return t.attach},get manual(){return s()},get makeDefault(){return r()},get dispose(){return t.dispose},get props(){return i}})),{updateProp:v}=gr();Object.keys(i).forEach(I=>{R(()=>{v(y(o),I,i[I],{manualCamera:s(),pluginsProps:c==null?void 0:c.pluginsProps})})});const d=nr();R(()=>d.updateAttach(t.attach)),R(()=>d.updateRef(y(o)));const u=ir();R(()=>u.updateRef(y(o))),R(()=>u.updateManual(s())),R(()=>u.updateMakeDefault(r()));const g=or(t.dispose);R(()=>g.updateRef(y(o))),R(()=>g.updateDispose(t.dispose));const f=lr(i);R(()=>f.updateRef(y(o)));var S=cn(),M=Ht(S);Ln(M,()=>t.children??Tt,()=>({ref:y(o)})),oe(e,S),Ke()}const wr={};new Proxy(function(){},{apply(e,t,n){return Ne(...n)},get(e,t){if(typeof t!="string")return Ne;const n=wr[t]||kn[t];if(n===void 0)throw new Error(`No Three.js module found for ${t}. Did you forget to extend the catalogue?`);return dr(n),Ne}});const Y=e=>({subscribe:e.subscribe,get current(){return e.current}});let ce=0;const tt=$(!1),Ce=$(!1),nt=$(void 0),rt=$(0),it=$(0),Zt=$([]),st=$(0),{onStart:Le,onLoad:Ue,onError:He}=fe;fe.onStart=(e,t,n)=>{Le==null||Le(e,t,n),Ce.set(!0),nt.set(e),rt.set(t),it.set(n);const s=(t-ce)/(n-ce);st.set(s),s===1&&tt.set(!0)};fe.onLoad=()=>{Ue==null||Ue(),Ce.set(!1)};fe.onError=e=>{He==null||He(e),Zt.update(t=>[...t,e])};fe.onProgress=(e,t,n)=>{t===n&&(ce=n),Ce.set(!0),nt.set(e),rt.set(t),it.set(n);const s=(t-ce)/(n-ce)||1;st.set(s),s===1&&tt.set(!0)};Y(Ce),Y(nt),Y(rt),Y(it),Y(Zt),Y(st),Y(tt);new O;new O;new O;new jt;new qe;new _n;new O;new O;new O;new O;new re;const kr="Right",_r="Top",Dr="Front",Sr="Left",Mr="Bottom",qr="Back";[kr,_r,Dr,Sr,Mr,qr].map(e=>e.toLocaleLowerCase());new Qe;new O;De.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new re(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Sn.line={uniforms:Dn.merge([De.common,De.fog,De.line]),vertexShader:`
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
		`};new pe;new O;new O;new pe;new pe;new pe;new O;new qe;new Mn;new O;new Qe;new jt;new pe;new qe;new qe;new Wt;`${L.logdepthbuf_pars_vertex}${L.fog_pars_vertex}${L.logdepthbuf_vertex}${L.fog_vertex}`;`${L.tonemapping_fragment}${L.colorspace_fragment}`;`${L.tonemapping_fragment}${L.colorspace_fragment}`;const Cr=`

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
`,Pr=`

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
`,Ir=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,zr=Ir,Er=`
	${Cr}
	${Pr}
`;`${zr}${Er}${L.tonemapping_fragment}${L.colorspace_fragment}`;new Qe;new qn;typeof window<"u"&&document.createElement("div");for(let e=0;e<256;e++)(e<16?"0":"")+e.toString(16);new Cn(-1,1,1,-1,0,1);class Or extends Pn{constructor(){super(),this.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pt([0,2,0,0,2,0],2))}}new Or;var Yt={exports:{}};Yt.exports=Pe;Yt.exports.default=Pe;function Pe(e,t,n){n=n||2;var s=t&&t.length,r=s?t[0]*n:e.length,a=Kt(e,0,r,n,!0),i=[];if(!a||a.next===a.prev)return i;var o,l,c,v,d,u,g;if(s&&(a=Lr(e,t,a,n)),e.length>80*n){o=c=e[0],l=v=e[1];for(var f=n;f<r;f+=n)d=e[f],u=e[f+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>v&&(v=u);g=Math.max(c-o,v-l),g=g!==0?32767/g:0}return le(a,i,n,o,l,g,0),i}function Kt(e,t,n,s,r){var a,i;if(r===Ge(e,t,n,s)>0)for(a=t;a<n;a+=s)i=Rt(a,e[a],e[a+1],i);else for(a=n-s;a>=t;a-=s)i=Rt(a,e[a],e[a+1],i);return i&&Ie(i,i.next)&&(ve(i),i=i.next),i}function K(e,t){if(!e)return e;t||(t=e);var n=e,s;do if(s=!1,!n.steiner&&(Ie(n,n.next)||_(n.prev,n,n.next)===0)){if(ve(n),n=t=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==t);return t}function le(e,t,n,s,r,a,i){if(e){!i&&a&&jr(e,s,r,a);for(var o=e,l,c;e.prev!==e.next;){if(l=e.prev,c=e.next,a?Ar(e,s,r,a):Rr(e)){t.push(l.i/n|0),t.push(e.i/n|0),t.push(c.i/n|0),ve(e),e=c.next,o=c.next;continue}if(e=c,e===o){i?i===1?(e=Tr(K(e),t,n),le(e,t,n,s,r,a,2)):i===2&&Nr(e,t,n,s,r,a):le(K(e),t,n,s,r,a,1);break}}}}function Rr(e){var t=e.prev,n=e,s=e.next;if(_(t,n,s)>=0)return!1;for(var r=t.x,a=n.x,i=s.x,o=t.y,l=n.y,c=s.y,v=r<a?r<i?r:i:a<i?a:i,d=o<l?o<c?o:c:l<c?l:c,u=r>a?r>i?r:i:a>i?a:i,g=o>l?o>c?o:c:l>c?l:c,f=s.next;f!==t;){if(f.x>=v&&f.x<=u&&f.y>=d&&f.y<=g&&ne(r,o,a,l,i,c,f.x,f.y)&&_(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Ar(e,t,n,s){var r=e.prev,a=e,i=e.next;if(_(r,a,i)>=0)return!1;for(var o=r.x,l=a.x,c=i.x,v=r.y,d=a.y,u=i.y,g=o<l?o<c?o:c:l<c?l:c,f=v<d?v<u?v:u:d<u?d:u,S=o>l?o>c?o:c:l>c?l:c,M=v>d?v>u?v:u:d>u?d:u,I=Ve(g,f,t,n,s),U=Ve(S,M,t,n,s),m=e.prevZ,h=e.nextZ;m&&m.z>=I&&h&&h.z<=U;){if(m.x>=g&&m.x<=S&&m.y>=f&&m.y<=M&&m!==r&&m!==i&&ne(o,v,l,d,c,u,m.x,m.y)&&_(m.prev,m,m.next)>=0||(m=m.prevZ,h.x>=g&&h.x<=S&&h.y>=f&&h.y<=M&&h!==r&&h!==i&&ne(o,v,l,d,c,u,h.x,h.y)&&_(h.prev,h,h.next)>=0))return!1;h=h.nextZ}for(;m&&m.z>=I;){if(m.x>=g&&m.x<=S&&m.y>=f&&m.y<=M&&m!==r&&m!==i&&ne(o,v,l,d,c,u,m.x,m.y)&&_(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;h&&h.z<=U;){if(h.x>=g&&h.x<=S&&h.y>=f&&h.y<=M&&h!==r&&h!==i&&ne(o,v,l,d,c,u,h.x,h.y)&&_(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function Tr(e,t,n){var s=e;do{var r=s.prev,a=s.next.next;!Ie(r,a)&&Xt(r,s,s.next,a)&&de(r,a)&&de(a,r)&&(t.push(r.i/n|0),t.push(s.i/n|0),t.push(a.i/n|0),ve(s),ve(s.next),s=e=a),s=s.next}while(s!==e);return K(s)}function Nr(e,t,n,s,r,a){var i=e;do{for(var o=i.next.next;o!==i.prev;){if(i.i!==o.i&&$r(i,o)){var l=Jt(i,o);i=K(i,i.next),l=K(l,l.next),le(i,t,n,s,r,a,0),le(l,t,n,s,r,a,0);return}o=o.next}i=i.next}while(i!==e)}function Lr(e,t,n,s){var r=[],a,i,o,l,c;for(a=0,i=t.length;a<i;a++)o=t[a]*s,l=a<i-1?t[a+1]*s:e.length,c=Kt(e,o,l,s,!1),c===c.next&&(c.steiner=!0),r.push(Vr(c));for(r.sort(Ur),a=0;a<r.length;a++)n=Hr(r[a],n);return n}function Ur(e,t){return e.x-t.x}function Hr(e,t){var n=Fr(e,t);if(!n)return t;var s=Jt(n,e);return K(s,s.next),K(n,n.next)}function Fr(e,t){var n=t,s=e.x,r=e.y,a=-1/0,i;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){var o=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(o<=s&&o>a&&(a=o,i=n.x<n.next.x?n:n.next,o===s))return i}n=n.next}while(n!==t);if(!i)return null;var l=i,c=i.x,v=i.y,d=1/0,u;n=i;do s>=n.x&&n.x>=c&&s!==n.x&&ne(r<v?s:a,r,c,v,r<v?a:s,r,n.x,n.y)&&(u=Math.abs(r-n.y)/(s-n.x),de(n,e)&&(u<d||u===d&&(n.x>i.x||n.x===i.x&&Br(i,n)))&&(i=n,d=u)),n=n.next;while(n!==l);return i}function Br(e,t){return _(e.prev,e,t.prev)<0&&_(t.next,e,e.next)<0}function jr(e,t,n,s){var r=e;do r.z===0&&(r.z=Ve(r.x,r.y,t,n,s)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,Wr(r)}function Wr(e){var t,n,s,r,a,i,o,l,c=1;do{for(n=e,e=null,a=null,i=0;n;){for(i++,s=n,o=0,t=0;t<c&&(o++,s=s.nextZ,!!s);t++);for(l=c;o>0||l>0&&s;)o!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,o--):(r=s,s=s.nextZ,l--),a?a.nextZ=r:e=r,r.prevZ=a,a=r;n=s}a.nextZ=null,c*=2}while(i>1);return e}function Ve(e,t,n,s,r){return e=(e-n)*r|0,t=(t-s)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Vr(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ne(e,t,n,s,r,a,i,o){return(r-i)*(t-o)>=(e-i)*(a-o)&&(e-i)*(s-o)>=(n-i)*(t-o)&&(n-i)*(a-o)>=(r-i)*(s-o)}function $r(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Gr(e,t)&&(de(e,t)&&de(t,e)&&Zr(e,t)&&(_(e.prev,e,t.prev)||_(e,t.prev,t))||Ie(e,t)&&_(e.prev,e,e.next)>0&&_(t.prev,t,t.next)>0)}function _(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ie(e,t){return e.x===t.x&&e.y===t.y}function Xt(e,t,n,s){var r=_e(_(e,t,n)),a=_e(_(e,t,s)),i=_e(_(n,s,e)),o=_e(_(n,s,t));return!!(r!==a&&i!==o||r===0&&ke(e,n,t)||a===0&&ke(e,s,t)||i===0&&ke(n,e,s)||o===0&&ke(n,t,s))}function ke(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function _e(e){return e>0?1:e<0?-1:0}function Gr(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Xt(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function de(e,t){return _(e.prev,e,e.next)<0?_(e,t,e.next)>=0&&_(e,e.prev,t)>=0:_(e,t,e.prev)<0||_(e,e.next,t)<0}function Zr(e,t){var n=e,s=!1,r=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&r<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==e);return s}function Jt(e,t){var n=new $e(e.i,e.x,e.y),s=new $e(t.i,t.x,t.y),r=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,s.next=n,n.prev=s,a.next=s,s.prev=a,s}function Rt(e,t,n,s){var r=new $e(e,t,n);return s?(r.next=s.next,r.prev=s,s.next.prev=r,s.next=r):(r.prev=r,r.next=r),r}function ve(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function $e(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Pe.deviation=function(e,t,n,s){var r=t&&t.length,a=r?t[0]*n:e.length,i=Math.abs(Ge(e,0,a,n));if(r)for(var o=0,l=t.length;o<l;o++){var c=t[o]*n,v=o<l-1?t[o+1]*n:e.length;i-=Math.abs(Ge(e,c,v,n))}var d=0;for(o=0;o<s.length;o+=3){var u=s[o]*n,g=s[o+1]*n,f=s[o+2]*n;d+=Math.abs((e[u]-e[f])*(e[g+1]-e[u+1])-(e[u]-e[g])*(e[f+1]-e[u+1]))}return i===0&&d===0?0:Math.abs((d-i)/i)};function Ge(e,t,n,s){for(var r=0,a=t,i=n-s;a<n;a+=s)r+=(e[i]-e[a])*(e[a+1]+e[i+1]),i=a;return r}Pe.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},s=0,r=0;r<e.length;r++){for(var a=0;a<e[r].length;a++)for(var i=0;i<t;i++)n.vertices.push(e[r][a][i]);r>0&&(s+=e[r-1].length,n.holes.push(s))}return n};new re;new re;var At;(e=>{function t(r){let a=r.slice();return a.sort(e.POINT_COMPARATOR),e.makeHullPresorted(a)}e.makeHull=t;function n(r){if(r.length<=1)return r.slice();let a=[];for(let o=0;o<r.length;o++){const l=r[o];for(;a.length>=2;){const c=a[a.length-1],v=a[a.length-2];if((c.x-v.x)*(l.y-v.y)>=(c.y-v.y)*(l.x-v.x))a.pop();else break}a.push(l)}a.pop();let i=[];for(let o=r.length-1;o>=0;o--){const l=r[o];for(;i.length>=2;){const c=i[i.length-1],v=i[i.length-2];if((c.x-v.x)*(l.y-v.y)>=(c.y-v.y)*(l.x-v.x))i.pop();else break}i.push(l)}return i.pop(),a.length==1&&i.length==1&&a[0].x==i[0].x&&a[0].y==i[0].y?a:a.concat(i)}e.makeHullPresorted=n;function s(r,a){return r.x<a.x?-1:r.x>a.x?1:r.y<a.y?-1:r.y>a.y?1:0}e.POINT_COMPARATOR=s})(At||(At={}));const Yr=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Kr=`
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
`;var Xr=Me('<div class="image-container svelte-jj7csg"><img alt="Shader Effect" class="svelte-jj7csg"></div>');function Jr(e,t){Ye(t,!1);let n=V(t,"imageSrc",8),s=V(t,"exactWidth",8,void 0),r=V(t,"exactHeight",8,void 0),a=V(t,"minHeight",8,"400px"),i=W(),o=W(),l=.02,c,v,d,u,g={x:.5,y:.5},f={x:.5,y:.5},S=1,M={x:.5,y:.5},I=0,U,m=1,h=1;function me(D){m=D.image.naturalWidth/D.image.naturalHeight,c=new zn;const q=D.image.naturalWidth,E=D.image.naturalHeight;let C,H;if(s()&&r())C=parseFloat(s()),H=parseFloat(r());else{const se=y(i).offsetWidth,ae=y(i).offsetHeight||parseFloat(a());h=se/ae,se/ae>m?(H=E,C=H*m):(C=q,H=C/m)}v=new En(45,m,.01,10),console.log(m),v.position.z=1.5;let ye={u_mouse:{value:new re},u_prevMouse:{value:new re},u_aberrationIntensity:{value:1},u_texture:{value:D}},G,Z;const ze=13.1*Math.PI/180,ee=2*Math.tan(ze/2)*v.position.z,he=ee*h;m>h?(G=he,Z=G/m):(Z=ee,G=Z*m),u=new Wt(new On(G,Z),new Rn({uniforms:ye,vertexShader:Yr,fragmentShader:Kr})),c.add(u),d=new An({alpha:!0}),d.setSize(C,H),d.setPixelRatio(window.devicePixelRatio);const z=d.domElement;z.style.position="absolute",z.style.top="50%",z.style.left="50%",z.style.transform="translate(-50%, -50%)",z.style.width=C+"px",z.style.height=H+"px",z.style.display="block",z.style.margin="auto",z.style.borderRadius="2rem",z.style.objectFit="contain",z.style.transformOrigin="center center",y(i)&&y(i).appendChild(z)}function ge(){if(U=requestAnimationFrame(ge),g.x+=(f.x-g.x)*l,g.y+=(f.y-g.y)*l,!u||!u.material)return;u.material.uniforms.u_mouse.value.set(g.x,1-g.y),u.material.uniforms.u_prevMouse.value.set(M.x,1-M.y);const D=g.x-M.x,q=g.y-M.y,E=Math.sqrt(D*D+q*q);I=Math.max(I,E*20),S=Math.max(0,S-.015),I=Math.max(0,I-.1);const C=Math.min(2,S+I*.2);u.material.uniforms.u_aberrationIntensity.value=C,d.render(c,v)}function X(D){if(!y(i))return;l=.02;let q=y(i).getBoundingClientRect();M={...f};const E=(D.clientX-q.left)/q.width,C=(D.clientY-q.top)/q.height;E>=0&&E<=1&&C>=0&&C<=1?(f.x=E,f.y=C,S=1):J()}function ie(D){if(!y(i))return;l=.02;let q=y(i).getBoundingClientRect();const E=Math.max(0,Math.min(1,(D.clientX-q.left)/q.width)),C=Math.max(0,Math.min(1,(D.clientY-q.top)/q.height));g.x=f.x=E,g.y=f.y=C,M={...g},S=1,I=.5}function J(){l=.05,f={...M}}Xe(()=>{setTimeout(()=>{if(!y(i)||!y(o)){console.error("ImageShader: Could not initialize - DOM elements not available");return}new In().load(`${w}${n()}`,q=>{me(q),ge(),y(i)&&(y(i).addEventListener("mousemove",X),y(i).addEventListener("mouseenter",ie),y(i).addEventListener("mouseleave",J))})},0)}),ue(()=>{y(i)&&(y(i).removeEventListener("mousemove",X),y(i).removeEventListener("mouseenter",ie),y(i).removeEventListener("mouseleave",J)),U&&cancelAnimationFrame(U),d&&d.dispose()}),Bt();var j=Xr(),Q=x(j);It(Q,D=>A(o,D),()=>y(o)),b(j),It(j,D=>A(i,D),()=>y(i)),Fe(()=>{Ft(j,`${s()||r()?"":`min-height: ${a()};`}`),k(Q,"src",`${w}${n()}`)}),oe(e,j),Ke()}var Qr=Me('<div><h1 class="tracking-in-expand svelte-8ksy5q">WELCOME</h1></div>'),ei=Me('<div class="cursor-preview svelte-8ksy5q"><img alt="Section Preview" class="svelte-8ksy5q"></div>'),ti=Me(`<!> <div class="landing-page dark-section svelte-8ksy5q"><div id="glass-landing" class="svelte-8ksy5q"></div> <div class="hero-container svelte-8ksy5q"><div class="hero-content svelte-8ksy5q"><div class="hero-text svelte-8ksy5q"><div class="identity svelte-8ksy5q"><span class="greeting svelte-8ksy5q">Hi, I'm</span> <h1 class="name svelte-8ksy5q">David</h1></div> <h2 class="profession svelte-8ksy5q">3D Artist & Visual Designer</h2> <div class="tagline svelte-8ksy5q">Transforming creative concepts into stunning digital experiences</div> <div class="description svelte-8ksy5q"><p class="svelte-8ksy5q">I specialize in creating immersive 3D visuals and compelling digital art that helps
						brands and businesses stand out in the digital space.</p> <p class="svelte-8ksy5q">With expertise in the 3D sphere, I bring ideas to life through technical excellence and
						artistic vision.</p></div> <div class="hero-cta svelte-8ksy5q"><a class="primary-btn svelte-8ksy5q">View My Work</a> <a class="secondary-btn svelte-8ksy5q">Let's Talk</a></div></div> <div class="hero-visual svelte-8ksy5q"><div class="image-container svelte-8ksy5q"><!></div></div></div></div></div> <div class="landing-page svelte-8ksy5q"><div id="glass-landingWhite" class="svelte-8ksy5q"></div> <div class="featured-container svelte-8ksy5q"><div class="featured-content svelte-8ksy5q"><h1 class="section-title svelte-8ksy5q">Featured Work</h1> <div class="accent-bar svelte-8ksy5q"></div> <div class="featured-grid svelte-8ksy5q"><a class="featured-item svelte-8ksy5q"><div class="featured-image-container svelte-8ksy5q"><img alt="3D Visualization Project" class="svelte-8ksy5q"> <div class="featured-overlay svelte-8ksy5q"><h3 class="svelte-8ksy5q">THE MAG WRAP 2025</h3> <p class="svelte-8ksy5q">Garment & Crowd Simulations</p> <span class="view-details svelte-8ksy5q">View Project →</span></div></div></a></div></div></div></div> <div class="logos svelte-8ksy5q"><div class="logos-slide svelte-8ksy5q"><img alt="Apparently Logo" class="logo svelte-8ksy5q"> <img alt="Krystof Logo" class="logo svelte-8ksy5q"> <img alt="Mira Logo" class="logo svelte-8ksy5q"> <img alt="Devomi Logo" class="logo svelte-8ksy5q"> <img alt="dykast Logo" class="logo svelte-8ksy5q"></div> <div class="logos-slide svelte-8ksy5q"><img alt="Apparently Logo" class="logo svelte-8ksy5q"> <img alt="Krystof Logo" class="logo svelte-8ksy5q"> <img alt="Mira Logo" class="logo svelte-8ksy5q"> <img alt="Devomi Logo" class="logo svelte-8ksy5q"> <img alt="dykast Logo" class="logo svelte-8ksy5q"></div> <div class="logos-slide svelte-8ksy5q"><img alt="Apparently Logo" class="logo svelte-8ksy5q"> <img alt="Krystof Logo" class="logo svelte-8ksy5q"> <img alt="Mira Logo" class="logo svelte-8ksy5q"> <img alt="Devomi Logo" class="logo svelte-8ksy5q"> <img alt="dykast Logo" class="logo svelte-8ksy5q"></div> <div class="logos-slide svelte-8ksy5q"><img alt="Apparently Logo" class="logo svelte-8ksy5q"> <img alt="Krystof Logo" class="logo svelte-8ksy5q"> <img alt="Mira Logo" class="logo svelte-8ksy5q"> <img alt="Devomi Logo" class="logo svelte-8ksy5q"> <img alt="dykast Logo" class="logo svelte-8ksy5q"></div></div> <div class="landing-page dark-section svelte-8ksy5q"><div id="glass-landing" class="svelte-8ksy5q"></div> <div class="testimonials-container svelte-8ksy5q"><div class="testimonials-content svelte-8ksy5q"><h1 class="section-title svelte-8ksy5q">Client Testimonials</h1> <div class="accent-bar svelte-8ksy5q"></div> <div class="testimonials-grid svelte-8ksy5q"><div class="testimonial-card svelte-8ksy5q"><div class="testimonial-content svelte-8ksy5q"><svg class="quote-icon svelte-8ksy5q" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" class="svelte-8ksy5q"></path></svg> <p class="testimonial-text svelte-8ksy5q">"Working with David was a real pleasure. He is quick to respond to any requests and
							very accommodating, making co-operating smooth and effective. Can always be trusted to
							deliver!"</p> <div class="testimonial-author svelte-8ksy5q"><strong class="svelte-8ksy5q">Mira Lumière</strong> <span class="svelte-8ksy5q">Director @ Yoimira Entertainment</span> <img alt="Mira Logo" class="logo-testamonial svelte-8ksy5q" style="opacity:0.5"></div></div></div> <div class="testimonial-card svelte-8ksy5q"><div class="testimonial-content svelte-8ksy5q"><svg class="quote-icon svelte-8ksy5q" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" class="svelte-8ksy5q"></path></svg> <p class="testimonial-text svelte-8ksy5q">"David is a great addition to my team. He knows his way around 3D graphics and isn’t
							afraid to take on complex technical challenges. He communicates really well, so
							working with him is always a breeze. Plus, he's reliable and always delivers his work
							on time, which I truly appreciate. I really enjoy working with him, and I know he'll
							keep playing a big part in our projects' success."</p> <div class="testimonial-author svelte-8ksy5q"><strong class="svelte-8ksy5q">Krystof Jezek</strong> <span class="svelte-8ksy5q">Motion Director @ Krystof Jezek</span> <img alt="Krystof Logo" class="logo-testamonial svelte-8ksy5q" style="opacity:0.5"></div></div></div></div></div></div></div> <div class="landing-page svelte-8ksy5q"><div id="glass-landingWhite" class="svelte-8ksy5q"></div> <div class="skills-container svelte-8ksy5q"><div class="skills-content svelte-8ksy5q"><h1 class="skills-title svelte-8ksy5q">Skills</h1> <div class="accent-bar svelte-8ksy5q"></div> <div class="skills-section svelte-8ksy5q"><div class="section-container svelte-8ksy5q"><div class="bubble-container svelte-8ksy5q"><span class="bubble svelte-8ksy5q">3D Modeling</span> <span class="bubble svelte-8ksy5q">Texturing</span> <span class="bubble svelte-8ksy5q">Simulations</span> <span class="bubble svelte-8ksy5q">Animation</span> <span class="bubble svelte-8ksy5q">UV Mapping</span> <span class="bubble svelte-8ksy5q">Rigging</span> <span class="bubble svelte-8ksy5q">Rendering</span> <span class="bubble svelte-8ksy5q">Lighting</span> <span class="bubble svelte-8ksy5q">Sculpting</span> <span class="bubble svelte-8ksy5q">Geometry Nodes</span></div></div> <div class="section-container svelte-8ksy5q"><h2 class="section-title svelte-8ksy5q">Technology</h2> <div class="accent-bar svelte-8ksy5q"></div> <div class="bubble-container svelte-8ksy5q"><span class="bubble svelte-8ksy5q">Blender</span> <span class="bubble svelte-8ksy5q">Substance Painter</span> <span class="bubble svelte-8ksy5q">Substance Designer</span> <span class="bubble svelte-8ksy5q">Houdini</span> <span class="bubble svelte-8ksy5q">3DCoat</span> <span class="bubble svelte-8ksy5q">Zbrush</span> <span class="bubble svelte-8ksy5q">Photoshop</span> <span class="bubble svelte-8ksy5q">Illustrator</span> <span class="bubble svelte-8ksy5q">Indesign</span> <span class="bubble svelte-8ksy5q">After Effects</span> <span class="bubble svelte-8ksy5q">Figma</span> <span class="bubble svelte-8ksy5q">Davinci Resolve</span> <span class="bubble svelte-8ksy5q">Github</span> <span class="bubble svelte-8ksy5q">Svelte</span></div></div></div></div></div></div> <div class="landing-page dark-section final-section svelte-8ksy5q"><div id="glass-landing" class="svelte-8ksy5q"></div> <div class="sections-container svelte-8ksy5q"><div class="sections-content svelte-8ksy5q"><div class="sections-left svelte-8ksy5q"><h1 class="mega-title svelte-8ksy5q">Not Impressed<br class="svelte-8ksy5q">Yet?</h1> <div class="accent-bar svelte-8ksy5q"></div> <p class="mega-description svelte-8ksy5q">Choose your journey through my portfolio collections</p></div> <div class="sections-right svelte-8ksy5q"><div class="sections-grid svelte-8ksy5q"><a class="section-item svelte-8ksy5q"><h2 class="svelte-8ksy5q">Commercial</h2> <p class="svelte-8ksy5q">View my professional work and client projects</p> <div class="section-number svelte-8ksy5q">01</div></a> <a class="section-item svelte-8ksy5q"><h2 class="svelte-8ksy5q">Personal</h2> <p class="svelte-8ksy5q">Explore my creative projects and artistic expressions</p> <div class="section-number svelte-8ksy5q">02</div></a> <a class="section-item svelte-8ksy5q"><h2 class="svelte-8ksy5q">Retro</h2> <p class="svelte-8ksy5q">Discover my land of PSX creations</p> <div class="section-number svelte-8ksy5q">03</div></a></div></div></div></div></div> <!> <!>`,1);function xi(e,t){Ye(t,!1);let n=W(!1),s=W(!1),r=W(""),a=W(!1),i=W(0),o=W(0);function l(P,F){A(i,P.clientX),A(o,P.clientY),A(r,F),A(a,!0)}function c(){A(a,!1)}Xe(()=>{console.log("Home Page Loaded"),localStorage.getItem("hasVisited")||(A(n,!0),setTimeout(()=>A(s,!0),1e3),setTimeout(()=>A(n,!1),2e3),localStorage.setItem("hasVisited","true"))}),Bt();var v=ti(),d=Ht(v);{var u=P=>{var F=Qr();let we;Fe(on=>we=wn(F,1,"intro svelte-8ksy5q",null,we,on),[()=>({"fade-out":y(s)})],xn),oe(P,F)};Ct(d,P=>{y(n)&&P(u)})}var g=p(d,2),f=p(x(g),2),S=x(f),M=x(S),I=p(x(M),8),U=x(I);k(U,"href",`${w??""}/personal`);var m=p(U,2);k(m,"href",`${w??""}/contact`),b(I),b(M);var h=p(M,2),me=x(h),ge=x(me);Jr(ge,{imageSrc:"/images/landing.jpg"}),b(me),b(h),b(S),b(f),b(g);var X=p(g,2),ie=p(x(X),2),J=x(ie),j=p(x(J),4),Q=x(j);k(Q,"href",`${w??""}/project/visualization`);var D=x(Q),q=x(D);k(q,"src",`${w??""}/images/projects/wrap/thumbnail.webp`),bn(2),b(D),b(Q),b(j),b(J),b(ie),b(X);var E=p(X,2),C=x(E),H=x(C);k(H,"src",`${w??""}/images/apparently-logo.png`);var ye=p(H,2);k(ye,"src",`${w??""}/images/krystof-logo.png`);var G=p(ye,2);k(G,"src",`${w??""}/images/mira-logo.png`);var Z=p(G,2);k(Z,"src",`${w??""}/images/devomi-logo.png`);var ze=p(Z,2);k(ze,"src",`${w??""}/images/dyky-logo.png`),b(C);var ee=p(C,2),he=x(ee);k(he,"src",`${w??""}/images/apparently-logo.png`);var z=p(he,2);k(z,"src",`${w??""}/images/krystof-logo.png`);var se=p(z,2);k(se,"src",`${w??""}/images/mira-logo.png`);var ae=p(se,2);k(ae,"src",`${w??""}/images/devomi-logo.png`);var Qt=p(ae,2);k(Qt,"src",`${w??""}/images/dyky-logo.png`),b(ee);var Ee=p(ee,2),at=x(Ee);k(at,"src",`${w??""}/images/apparently-logo.png`);var ot=p(at,2);k(ot,"src",`${w??""}/images/krystof-logo.png`);var ct=p(ot,2);k(ct,"src",`${w??""}/images/mira-logo.png`);var lt=p(ct,2);k(lt,"src",`${w??""}/images/devomi-logo.png`);var en=p(lt,2);k(en,"src",`${w??""}/images/dyky-logo.png`),b(Ee);var dt=p(Ee,2),vt=x(dt);k(vt,"src",`${w??""}/images/apparently-logo.png`);var ut=p(vt,2);k(ut,"src",`${w??""}/images/krystof-logo.png`);var ft=p(ut,2);k(ft,"src",`${w??""}/images/mira-logo.png`);var pt=p(ft,2);k(pt,"src",`${w??""}/images/devomi-logo.png`);var tn=p(pt,2);k(tn,"src",`${w??""}/images/dyky-logo.png`),b(dt),b(E);var Oe=p(E,2),mt=p(x(Oe),2),gt=x(mt),yt=p(x(gt),4),Re=x(yt),ht=x(Re),xt=p(x(ht),4),nn=p(x(xt),4);k(nn,"src",`${w??""}/images/mira-logo.png`),b(xt),b(ht),b(Re);var bt=p(Re,2),wt=x(bt),kt=p(x(wt),4),rn=p(x(kt),4);k(rn,"src",`${w??""}/images/krystof-logo.png`),b(kt),b(wt),b(bt),b(yt),b(gt),b(mt),b(Oe);var Ae=p(Oe,4),_t=p(x(Ae),2),Dt=x(_t),St=p(x(Dt),2),Mt=x(St),xe=x(Mt);k(xe,"href",`${w??""}/commercial`);var be=p(xe,2);k(be,"href",`${w??""}/personal`);var Te=p(be,2);k(Te,"href",`${w??""}/retro`),b(Mt),b(St),b(Dt),b(_t),b(Ae);var qt=p(Ae,2);{var sn=P=>{var F=ei(),we=x(F);b(F),Fe(()=>{Ft(F,`left: ${y(i)+180}px; top: ${y(o)-50}px;`),k(we,"src",`${w??""}${y(r)??""}`)}),oe(P,F)};Ct(qt,P=>{y(a)&&P(sn)})}var an=p(qt,2);Tn(an,{}),te("mousemove",xe,P=>l(P,"/images/gifs/commercial.gif")),te("mouseleave",xe,c),te("mousemove",be,P=>l(P,"/images/gifs/personal.gif")),te("mouseleave",be,c),te("mousemove",Te,P=>l(P,"/images/gifs/retro.gif")),te("mouseleave",Te,c),oe(e,v),Ke()}export{xi as component};
