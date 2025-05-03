import{e as zr,b as fe,t as ze}from"../chunks/uTVFfCR1.js";import"../chunks/C-KlFWM5.js";import{A as Er,a9 as Or,C as kr,o as tr,U as Rr,x as Ar,_ as Tr,e as j,aP as rr,b as _,r as Nr,u as nr,aM as Lr,J as Ur,aN as ir,a4 as U,a5 as Hr,aQ as F,aR as tt,ai as rt,aj as sr,al as nt,ap as Ye,am as y,m as G,an as b,ak as p,a as Fr,ao as Br}from"../chunks/Doxv_zDN.js";import{e as ne}from"../chunks/CJUtn9Sh.js";import{i as Zt}from"../chunks/Du-6FoUU.js";import{a as O}from"../chunks/D1xFoWUl.js";import{s as M}from"../chunks/DzPMz6Vi.js";import{s as jr}from"../chunks/Do2w9o0u.js";import{s as ar}from"../chunks/DJyR-pXI.js";import{i as or}from"../chunks/D3mgWV0X.js";import{a as he,o as it}from"../chunks/D_usMznt.js";import{g as Ke,d as st,w as $}from"../chunks/CdC3-oiW.js";import{T as Wr,D as ye,V as L,S as lr,M as Ee,R as Vr,a as se,b as at,U as Pe,c as $r,d as Gr,e as be,L as Zr,f as cr,g as W,C as Yr,O as Kr,h as qr,F as Yt,i as Xr,j as Jr,P as Qr,k as en,l as tn,W as rn,B as nn}from"../chunks/kC0pcug4.js";import{p as Z,r as sn}from"../chunks/BM6RxNwV.js";import{b as Kt}from"../chunks/BRz8ZVQu.js";import{b as S}from"../chunks/BbLSVL2J.js";/* empty css                */import{B as k}from"../chunks/BiTT8mz5.js";function an(e,t,...r){var s=e,n=tr,a;Er(()=>{n!==(n=t())&&(a&&(Rr(a),a=null),a=kr(()=>n(s,...r)))},Or),Ar&&(s=Tr)}function on(e){j(e,e.v+1)}function ln(e){let t=0,r=Ur(0),s;return()=>{rr()&&(_(r),Nr(()=>(t===0&&(s=nr(()=>e(()=>on(r)))),t+=1,()=>{Lr().then(()=>{t-=1,t===0&&(s==null||s(),s=void 0)})})))}}function cn(e){let t;const r=ln(n=>{let a=!1;const i=e.subscribe(o=>{t=o,a&&n()});return a=!0,i});function s(){return rr()?(r(),t):Ke(e)}return"set"in e?{get current(){return s()},set current(n){e.set(n)}}:{get current(){return s()}}}const qt=Symbol(),dn=e=>typeof(e==null?void 0:e.subscribe)=="function",dr=(e,t,r)=>{const s=e().map(i=>dn(i)?cn(i):qt),n=ir(()=>e().map((i,o)=>s[o]===qt?i:s[o].current)),a=()=>{_(n);let i;return nr(()=>{i=t(_(n))}),i};r?U(a):Hr(a)},vn=(e,t)=>dr(e,t,!1),un=(e,t)=>dr(e,t,!0);Object.assign(vn,{pre:un});const H=(e,t)=>(e==null?void 0:e[`is${t}`])===!0,Ie=(e,t)=>{const r=st(e,a=>a);let s;const n=r.subscribe(async a=>{s&&s();const i=await t(a);i&&(s=i)});he(()=>{n(),s&&s()})},Y=e=>{const t=$(e),r={set:s=>{r.current=s,t.set(s)},subscribe:t.subscribe,update:s=>{const n=s(r.current);r.current=n,t.set(n)},current:e};return r},vr=(e,t)=>{if(t.includes(".")){const r=t.split("."),s=r.pop();for(let n=0;n<r.length;n+=1)e=e[r[n]];return{target:e,key:s}}else return{target:e,key:t}},fn=()=>{const e=F("threlte-dom-context");if(!e)throw new Error("useDOM can only be used in a child component to <Canvas>.");return e},pn=()=>{const e=F("threlte-scheduler-context");if(!e)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return e},mn=()=>{const e=F("threlte-camera-context");if(!e)throw new Error("useCamera can only be used in a child component to <Canvas>.");return e},xn=()=>{const e=F("threlte-disposal-context");if(!e)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return e},ur=Symbol("threlte-parent-context"),gn=e=>{const t=Y(e);return tt(ur,t),t},hn=()=>F(ur),qe=Symbol("threlte-parent-object3d-context"),yn=e=>{const t=F(qe),r=$(e),s=st([r,t],([n,a])=>n??a);return tt(qe,s),r},bn=()=>F(qe),wn=()=>{const e=F("threlte-scene-context");if(!e)throw new Error("useScene can only be used in a child component to <Canvas>.");return e},_n=()=>{const e=F("threlte-renderer-context");if(!e)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return e},ot=()=>{const e=pn(),t=_n(),r=mn(),s=wn(),n=fn();return{advance:e.advance,autoRender:e.autoRender,autoRenderTask:t.autoRenderTask,camera:r.camera,colorManagementEnabled:t.colorManagementEnabled,colorSpace:t.colorSpace,dpr:t.dpr,invalidate:e.invalidate,mainStage:e.mainStage,renderer:t.renderer,renderMode:e.renderMode,renderStage:e.renderStage,scheduler:e.scheduler,shadows:t.shadows,shouldRender:e.shouldRender,dom:n.dom,canvas:n.canvas,size:n.size,toneMapping:t.toneMapping,get scene(){return s.scene},set scene(i){s.scene=i}}},Dn=e=>typeof e=="object"&&e!==null,Sn=()=>{const{invalidate:e}=ot();let t;const r=$(),s=hn(),n=bn(),a=gn(),i=yn();Ie([r,a,s,n],([l,v,d,f])=>{if(t==null||t(),t=void 0,!v){e();return}if(l!==void 0){if(l){if(typeof l=="function")t=l({ref:v,parent:d,parentObject3D:f});else if(H(l,"Object3D")&&H(v,"Object3D"))t=()=>l==null?void 0:l.remove(v),l==null||l.add(v);else if(typeof l=="string"){const{target:w,key:g}=vr(d,l),I=w[g];t=()=>w[g]=I,w[g]=v}}}else H(v,"Object3D")?(t=()=>f==null?void 0:f.remove(v),f==null||f.add(v)):Dn(d)&&(H(v,"Material")?d.material=v:H(v,"BufferGeometry")&&(d.geometry=v));e()});const o=l=>{r.set(l)},c=l=>{a.set(l),H(l,"Object3D")&&i.set(l)};return he(()=>{t==null||t(),e()}),{updateRef:c,updateAttach:o}},Mn=e=>H(e,"PerspectiveCamera")||H(e,"OrthographicCamera"),Cn=()=>{const{invalidate:e,size:t,camera:r}=ot(),s=$(),n=$(!0),a=$(!1);return Ie([s,a],([l,v])=>{!l||!v||(r.set(l),e())}),Ie([s,n,t],([l,v,d])=>{!l||v||(H(l,"OrthographicCamera")?(l.left=d.width/-2,l.right=d.width/2,l.top=d.height/2,l.bottom=d.height/-2,l.updateProjectionMatrix(),l.updateMatrixWorld(),e()):H(l,"PerspectiveCamera")&&(l.aspect=d.width/d.height,l.updateProjectionMatrix(),l.updateMatrixWorld(),e()))}),{updateRef:l=>{Mn(l)&&s.set(l)},updateManual:l=>{n.set(l)},updateMakeDefault:l=>{a.set(l)}}},Pn=e=>{let t,r,s=!1;const n=()=>{t==null||t(),t=e==null?void 0:e(r)},a=i=>{r=i,s&&n()};return it(()=>{n(),s=!0}),he(()=>t==null?void 0:t()),{updateRef:a}},Xt=Symbol("threlte-disposable-object-context"),In=e=>typeof(e==null?void 0:e.dispose)=="function"&&!H(e,"Scene"),zn=e=>{let t;const r=$(void 0),s=$(e),{disposableObjectMounted:n,disposableObjectUnmounted:a,removeObjectFromDisposal:i}=xn(),o=F(Xt),c=st([s,o??$(!0)],([d,f])=>d??f??!0);return tt(Xt,c),Ie([r,c],([d,f])=>{d===t?f?t&&n(t):t&&i(t):f&&(t&&a(t),d&&n(d)),t=d}),he(()=>{if(!Ke(c))return;const d=Ke(r);d&&a(d)}),{updateRef:d=>{In(d)&&r.set(d)},updateDispose:d=>{s.set(d)}}},En=e=>e!==null&&typeof e=="object"&&"addEventListener"in e&&"removeEventListener"in e,On=(e={})=>{const t=n=>{var a;n!=null&&n.type&&((a=e[`on${n.type}`])==null||a.call(e,n))},r=(n,a)=>{const i=[];for(const o of Object.keys(a))o.startsWith("on")&&(n.addEventListener(o.slice(2),t),i.push(o));return()=>{for(let o=0;o<i.length;o++)n.removeEventListener(i[o],t)}};return{updateRef:n=>{if(En(n))return r(n,e)}}};let Xe;const kn=e=>{Xe=e},Rn=()=>{const e=Xe;return Xe=void 0,e},An=e=>{const r=F("threlte-plugin-context");if(!r)return;const s=[],n=Object.values(r);if(n.length){const a=e();for(let i=0;i<n.length;i++){const o=n[i],c=o(a);c&&c.pluginProps&&s.push(...c.pluginProps)}}return{pluginsProps:s}},Tn=new Set(["$$scope","$$slots","type","args","attach","instance"]),Nn=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),Ln=e=>typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e>"u"||e===null,Jt=(e,t,r)=>{var s,n,a;return!Array.isArray(r)&&typeof r=="number"&&typeof((s=e[t])==null?void 0:s.setScalar)=="function"&&!((n=e[t])!=null&&n.isColor)?(i,o,c)=>{i[o].setScalar(c)}:typeof((a=e[t])==null?void 0:a.set)=="function"?Array.isArray(r)?(i,o,c)=>{i[o].set(...c)}:(i,o,c)=>{i[o].set(c)}:(i,o,c)=>{i[o]=c}},Un=()=>{const{invalidate:e}=ot(),t=new Map,r=new Map,s=(a,i,o,c)=>{if(Ln(o)){const d=t.get(i);if(d&&d.instance===a&&d.value===o)return;t.set(i,{instance:a,value:o})}const{key:l,target:v}=vr(a,i);if(o!=null){const d=r.get(i);if(d)d(v,l,o);else{const f=Jt(v,l,o);r.set(i,f),f(v,l,o)}}else Jt(v,l,o)(v,l,o);c.manualCamera||Nn.has(l)&&(v.isPerspectiveCamera||v.isOrthographicCamera)&&v.updateProjectionMatrix()};return{updateProp:(a,i,o,c)=>{var l;!Tn.has(i)&&!((l=c.pluginsProps)!=null&&l.includes(i))&&s(a,i,o,c),e()}}},Hn=/^\s*class\s+/,Fn=e=>typeof e!="function"?!1:Hn.test(e.toString()),Bn=e=>Array.isArray(e),jn=(e,t)=>Fn(e)?Bn(t)?new e(...t):new e:e;function Ve(e,t){rt(t,!0);let r=Z(t,"is",19,Rn),s=Z(t,"manual",3,!1),n=Z(t,"makeDefault",3,!1),a=Z(t,"ref",15),i=sn(t,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]),o=ir(()=>jn(r(),t.args));const c=Pn(t.oncreate);U(()=>{a()!==_(o)&&(a(_(o)),c.updateRef(_(o)))});const l=An(()=>({get ref(){return _(o)},get args(){return t.args},get attach(){return t.attach},get manual(){return s()},get makeDefault(){return n()},get dispose(){return t.dispose},get props(){return i}})),{updateProp:v}=Un();Object.keys(i).forEach(A=>{U(()=>{v(_(o),A,i[A],{manualCamera:s(),pluginsProps:l==null?void 0:l.pluginsProps})})});const d=Sn();U(()=>d.updateAttach(t.attach)),U(()=>d.updateRef(_(o)));const f=Cn();U(()=>f.updateRef(_(o))),U(()=>f.updateManual(s())),U(()=>f.updateMakeDefault(n()));const w=zn(t.dispose);U(()=>w.updateRef(_(o))),U(()=>w.updateDispose(t.dispose));const g=On(i);U(()=>g.updateRef(_(o)));var I=zr(),z=sr(I);an(z,()=>t.children??tr,()=>({ref:_(o)})),fe(e,I),nt()}const Wn={};new Proxy(function(){},{apply(e,t,r){return Ve(...r)},get(e,t){if(typeof t!="string")return Ve;const r=Wn[t]||Wr[t];if(r===void 0)throw new Error(`No Three.js module found for ${t}. Did you forget to extend the catalogue?`);return kn(r),Ve}});const X=e=>({subscribe:e.subscribe,get current(){return e.current}});let pe=0;const lt=Y(!1),Oe=Y(!1),ct=Y(void 0),dt=Y(0),vt=Y(0),fr=Y([]),ut=Y(0),{onStart:$e,onLoad:Ge,onError:Ze}=ye;ye.onStart=(e,t,r)=>{$e==null||$e(e,t,r),Oe.set(!0),ct.set(e),dt.set(t),vt.set(r);const s=(t-pe)/(r-pe);ut.set(s),s===1&&lt.set(!0)};ye.onLoad=()=>{Ge==null||Ge(),Oe.set(!1)};ye.onError=e=>{Ze==null||Ze(e),fr.update(t=>[...t,e])};ye.onProgress=(e,t,r)=>{t===r&&(pe=r),Oe.set(!0),ct.set(e),dt.set(t),vt.set(r);const s=(t-pe)/(r-pe)||1;ut.set(s),s===1&&lt.set(!0)};X(Oe),X(ct),X(dt),X(vt),X(fr),X(ut),X(lt);new L;new L;new L;new lr;new Ee;new Vr;new L;new L;new L;new L;new se;const Vn="Right",$n="Top",Gn="Front",Zn="Left",Yn="Bottom",Kn="Back";[Vn,$n,Gn,Zn,Yn,Kn].map(e=>e.toLocaleLowerCase());new at;new L;Pe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new se(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Gr.line={uniforms:$r.merge([Pe.common,Pe.fog,Pe.line]),vertexShader:`
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
		`};new be;new L;new L;new be;new be;new be;new L;new Ee;new Zr;new L;new at;new lr;new be;new Ee;new Ee;new cr;`${W.logdepthbuf_pars_vertex}${W.fog_pars_vertex}${W.logdepthbuf_vertex}${W.fog_vertex}`;`${W.tonemapping_fragment}${W.colorspace_fragment}`;`${W.tonemapping_fragment}${W.colorspace_fragment}`;const qn=`

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
`,Xn=`

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
`,Jn=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Qn=Jn,ei=`
	${qn}
	${Xn}
`;`${Qn}${ei}${W.tonemapping_fragment}${W.colorspace_fragment}`;new at;new Yr;typeof window<"u"&&document.createElement("div");for(let e=0;e<256;e++)(e<16?"0":"")+e.toString(16);new Kr(-1,1,1,-1,0,1);class ti extends qr{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}new ti;var pr={exports:{}};pr.exports=ke;pr.exports.default=ke;function ke(e,t,r){r=r||2;var s=t&&t.length,n=s?t[0]*r:e.length,a=mr(e,0,n,r,!0),i=[];if(!a||a.next===a.prev)return i;var o,c,l,v,d,f,w;if(s&&(a=ai(e,t,a,r)),e.length>80*r){o=l=e[0],c=v=e[1];for(var g=r;g<n;g+=r)d=e[g],f=e[g+1],d<o&&(o=d),f<c&&(c=f),d>l&&(l=d),f>v&&(v=f);w=Math.max(l-o,v-c),w=w!==0?32767/w:0}return me(a,i,r,o,c,w,0),i}function mr(e,t,r,s,n){var a,i;if(n===et(e,t,r,s)>0)for(a=t;a<r;a+=s)i=Qt(a,e[a],e[a+1],i);else for(a=r-s;a>=t;a-=s)i=Qt(a,e[a],e[a+1],i);return i&&Re(i,i.next)&&(ge(i),i=i.next),i}function J(e,t){if(!e)return e;t||(t=e);var r=e,s;do if(s=!1,!r.steiner&&(Re(r,r.next)||C(r.prev,r,r.next)===0)){if(ge(r),r=t=r.prev,r===r.next)break;s=!0}else r=r.next;while(s||r!==t);return t}function me(e,t,r,s,n,a,i){if(e){!i&&a&&vi(e,s,n,a);for(var o=e,c,l;e.prev!==e.next;){if(c=e.prev,l=e.next,a?ni(e,s,n,a):ri(e)){t.push(c.i/r|0),t.push(e.i/r|0),t.push(l.i/r|0),ge(e),e=l.next,o=l.next;continue}if(e=l,e===o){i?i===1?(e=ii(J(e),t,r),me(e,t,r,s,n,a,2)):i===2&&si(e,t,r,s,n,a):me(J(e),t,r,s,n,a,1);break}}}}function ri(e){var t=e.prev,r=e,s=e.next;if(C(t,r,s)>=0)return!1;for(var n=t.x,a=r.x,i=s.x,o=t.y,c=r.y,l=s.y,v=n<a?n<i?n:i:a<i?a:i,d=o<c?o<l?o:l:c<l?c:l,f=n>a?n>i?n:i:a>i?a:i,w=o>c?o>l?o:l:c>l?c:l,g=s.next;g!==t;){if(g.x>=v&&g.x<=f&&g.y>=d&&g.y<=w&&ie(n,o,a,c,i,l,g.x,g.y)&&C(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ni(e,t,r,s){var n=e.prev,a=e,i=e.next;if(C(n,a,i)>=0)return!1;for(var o=n.x,c=a.x,l=i.x,v=n.y,d=a.y,f=i.y,w=o<c?o<l?o:l:c<l?c:l,g=v<d?v<f?v:f:d<f?d:f,I=o>c?o>l?o:l:c>l?c:l,z=v>d?v>f?v:f:d>f?d:f,A=Je(w,g,t,r,s),V=Je(I,z,t,r,s),h=e.prevZ,D=e.nextZ;h&&h.z>=A&&D&&D.z<=V;){if(h.x>=w&&h.x<=I&&h.y>=g&&h.y<=z&&h!==n&&h!==i&&ie(o,v,c,d,l,f,h.x,h.y)&&C(h.prev,h,h.next)>=0||(h=h.prevZ,D.x>=w&&D.x<=I&&D.y>=g&&D.y<=z&&D!==n&&D!==i&&ie(o,v,c,d,l,f,D.x,D.y)&&C(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;h&&h.z>=A;){if(h.x>=w&&h.x<=I&&h.y>=g&&h.y<=z&&h!==n&&h!==i&&ie(o,v,c,d,l,f,h.x,h.y)&&C(h.prev,h,h.next)>=0)return!1;h=h.prevZ}for(;D&&D.z<=V;){if(D.x>=w&&D.x<=I&&D.y>=g&&D.y<=z&&D!==n&&D!==i&&ie(o,v,c,d,l,f,D.x,D.y)&&C(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function ii(e,t,r){var s=e;do{var n=s.prev,a=s.next.next;!Re(n,a)&&xr(n,s,s.next,a)&&xe(n,a)&&xe(a,n)&&(t.push(n.i/r|0),t.push(s.i/r|0),t.push(a.i/r|0),ge(s),ge(s.next),s=e=a),s=s.next}while(s!==e);return J(s)}function si(e,t,r,s,n,a){var i=e;do{for(var o=i.next.next;o!==i.prev;){if(i.i!==o.i&&pi(i,o)){var c=gr(i,o);i=J(i,i.next),c=J(c,c.next),me(i,t,r,s,n,a,0),me(c,t,r,s,n,a,0);return}o=o.next}i=i.next}while(i!==e)}function ai(e,t,r,s){var n=[],a,i,o,c,l;for(a=0,i=t.length;a<i;a++)o=t[a]*s,c=a<i-1?t[a+1]*s:e.length,l=mr(e,o,c,s,!1),l===l.next&&(l.steiner=!0),n.push(fi(l));for(n.sort(oi),a=0;a<n.length;a++)r=li(n[a],r);return r}function oi(e,t){return e.x-t.x}function li(e,t){var r=ci(e,t);if(!r)return t;var s=gr(r,e);return J(s,s.next),J(r,r.next)}function ci(e,t){var r=t,s=e.x,n=e.y,a=-1/0,i;do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){var o=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=s&&o>a&&(a=o,i=r.x<r.next.x?r:r.next,o===s))return i}r=r.next}while(r!==t);if(!i)return null;var c=i,l=i.x,v=i.y,d=1/0,f;r=i;do s>=r.x&&r.x>=l&&s!==r.x&&ie(n<v?s:a,n,l,v,n<v?a:s,n,r.x,r.y)&&(f=Math.abs(n-r.y)/(s-r.x),xe(r,e)&&(f<d||f===d&&(r.x>i.x||r.x===i.x&&di(i,r)))&&(i=r,d=f)),r=r.next;while(r!==c);return i}function di(e,t){return C(e.prev,e,t.prev)<0&&C(t.next,e,e.next)<0}function vi(e,t,r,s){var n=e;do n.z===0&&(n.z=Je(n.x,n.y,t,r,s)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,ui(n)}function ui(e){var t,r,s,n,a,i,o,c,l=1;do{for(r=e,e=null,a=null,i=0;r;){for(i++,s=r,o=0,t=0;t<l&&(o++,s=s.nextZ,!!s);t++);for(c=l;o>0||c>0&&s;)o!==0&&(c===0||!s||r.z<=s.z)?(n=r,r=r.nextZ,o--):(n=s,s=s.nextZ,c--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=s}a.nextZ=null,l*=2}while(i>1);return e}function Je(e,t,r,s,n){return e=(e-r)*n|0,t=(t-s)*n|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function fi(e){var t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function ie(e,t,r,s,n,a,i,o){return(n-i)*(t-o)>=(e-i)*(a-o)&&(e-i)*(s-o)>=(r-i)*(t-o)&&(r-i)*(a-o)>=(n-i)*(s-o)}function pi(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!mi(e,t)&&(xe(e,t)&&xe(t,e)&&xi(e,t)&&(C(e.prev,e,t.prev)||C(e,t.prev,t))||Re(e,t)&&C(e.prev,e,e.next)>0&&C(t.prev,t,t.next)>0)}function C(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Re(e,t){return e.x===t.x&&e.y===t.y}function xr(e,t,r,s){var n=Ce(C(e,t,r)),a=Ce(C(e,t,s)),i=Ce(C(r,s,e)),o=Ce(C(r,s,t));return!!(n!==a&&i!==o||n===0&&Me(e,r,t)||a===0&&Me(e,s,t)||i===0&&Me(r,e,s)||o===0&&Me(r,t,s))}function Me(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function Ce(e){return e>0?1:e<0?-1:0}function mi(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&xr(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function xe(e,t){return C(e.prev,e,e.next)<0?C(e,t,e.next)>=0&&C(e,e.prev,t)>=0:C(e,t,e.prev)<0||C(e,e.next,t)<0}function xi(e,t){var r=e,s=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==e);return s}function gr(e,t){var r=new Qe(e.i,e.x,e.y),s=new Qe(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,s.next=r,r.prev=s,a.next=s,s.prev=a,s}function Qt(e,t,r,s){var n=new Qe(e,t,r);return s?(n.next=s.next,n.prev=s,s.next.prev=n,s.next=n):(n.prev=n,n.next=n),n}function ge(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Qe(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}ke.deviation=function(e,t,r,s){var n=t&&t.length,a=n?t[0]*r:e.length,i=Math.abs(et(e,0,a,r));if(n)for(var o=0,c=t.length;o<c;o++){var l=t[o]*r,v=o<c-1?t[o+1]*r:e.length;i-=Math.abs(et(e,l,v,r))}var d=0;for(o=0;o<s.length;o+=3){var f=s[o]*r,w=s[o+1]*r,g=s[o+2]*r;d+=Math.abs((e[f]-e[g])*(e[w+1]-e[f+1])-(e[f]-e[w])*(e[g+1]-e[f+1]))}return i===0&&d===0?0:Math.abs((d-i)/i)};function et(e,t,r,s){for(var n=0,a=t,i=r-s;a<r;a+=s)n+=(e[i]-e[a])*(e[a+1]+e[i+1]),i=a;return n}ke.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},s=0,n=0;n<e.length;n++){for(var a=0;a<e[n].length;a++)for(var i=0;i<t;i++)r.vertices.push(e[n][a][i]);n>0&&(s+=e[n-1].length,r.holes.push(s))}return r};new se;new se;var er;(e=>{function t(n){let a=n.slice();return a.sort(e.POINT_COMPARATOR),e.makeHullPresorted(a)}e.makeHull=t;function r(n){if(n.length<=1)return n.slice();let a=[];for(let o=0;o<n.length;o++){const c=n[o];for(;a.length>=2;){const l=a[a.length-1],v=a[a.length-2];if((l.x-v.x)*(c.y-v.y)>=(l.y-v.y)*(c.x-v.x))a.pop();else break}a.push(c)}a.pop();let i=[];for(let o=n.length-1;o>=0;o--){const c=n[o];for(;i.length>=2;){const l=i[i.length-1],v=i[i.length-2];if((l.x-v.x)*(c.y-v.y)>=(l.y-v.y)*(c.x-v.x))i.pop();else break}i.push(c)}return i.pop(),a.length==1&&i.length==1&&a[0].x==i[0].x&&a[0].y==i[0].y?a:a.concat(i)}e.makeHullPresorted=r;function s(n,a){return n.x<a.x?-1:n.x>a.x?1:n.y<a.y?-1:n.y>a.y?1:0}e.POINT_COMPARATOR=s})(er||(er={}));const gi=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,hi=`
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
`;var yi=ze('<div class="image-container svelte-jj7csg"><img alt="Shader Effect" class="svelte-jj7csg"></div>');function bi(e,t){rt(t,!1);let r=Z(t,"imageSrc",8),s=Z(t,"exactWidth",8,void 0),n=Z(t,"exactHeight",8,void 0),a=Z(t,"minHeight",8,"400px"),i=G(),o=G(),c=.02,l,v,d,f,w={x:.5,y:.5},g={x:.5,y:.5},I=1,z={x:.5,y:.5},A=0,V,h=1,D=1;function ae(P){h=P.image.naturalWidth/P.image.naturalHeight,l=new Jr;const E=P.image.naturalWidth,N=P.image.naturalHeight;let R,B;if(s()&&n())R=parseFloat(s()),B=parseFloat(n());else{const ve=_(i).offsetWidth,ue=_(i).offsetHeight||parseFloat(a());D=ve/ue,ve/ue>h?(B=N,R=B*h):(R=E,B=R/h)}v=new Qr(45,h,.01,10),console.log(h),v.position.z=1.5;let ce={u_mouse:{value:new se},u_prevMouse:{value:new se},u_aberrationIntensity:{value:1},u_texture:{value:P}},q,te;const de=13.1*Math.PI/180,re=2*Math.tan(de/2)*v.position.z,_e=re*D;h>D?(q=_e,te=q/h):(te=re,q=te*h),f=new cr(new en(q,te),new tn({uniforms:ce,vertexShader:gi,fragmentShader:hi})),l.add(f),d=new rn({alpha:!0}),d.setSize(R,B),d.setPixelRatio(window.devicePixelRatio);const T=d.domElement;T.style.position="absolute",T.style.top="50%",T.style.left="50%",T.style.transform="translate(-50%, -50%)",T.style.width=R+"px",T.style.height=B+"px",T.style.display="block",T.style.margin="auto",T.style.borderRadius="2rem",T.style.objectFit="contain",T.style.transformOrigin="center center",_(i)&&_(i).appendChild(T)}function oe(){if(V=requestAnimationFrame(oe),w.x+=(g.x-w.x)*c,w.y+=(g.y-w.y)*c,!f||!f.material)return;f.material.uniforms.u_mouse.value.set(w.x,1-w.y),f.material.uniforms.u_prevMouse.value.set(z.x,1-z.y);const P=w.x-z.x,E=w.y-z.y,N=Math.sqrt(P*P+E*E);A=Math.max(A,N*20),I=Math.max(0,I-.015),A=Math.max(0,A-.1);const R=Math.min(2,I+A*.2);f.material.uniforms.u_aberrationIntensity.value=R,d.render(l,v)}function we(P){if(!_(i))return;c=.02;let E=_(i).getBoundingClientRect();z={...g};const N=(P.clientX-E.left)/E.width,R=(P.clientY-E.top)/E.height;N>=0&&N<=1&&R>=0&&R<=1?(g.x=N,g.y=R,I=1):Q()}function le(P){if(!_(i))return;c=.02;let E=_(i).getBoundingClientRect();const N=Math.max(0,Math.min(1,(P.clientX-E.left)/E.width)),R=Math.max(0,Math.min(1,(P.clientY-E.top)/E.height));w.x=g.x=N,w.y=g.y=R,z={...w},I=1,A=.5}function Q(){c=.05,g={...z}}it(()=>{setTimeout(()=>{if(!_(i)||!_(o)){console.error("ImageShader: Could not initialize - DOM elements not available");return}new Xr().load(`${S}${r()}`,E=>{ae(E),oe(),_(i)&&(_(i).addEventListener("mousemove",we),_(i).addEventListener("mouseenter",le),_(i).addEventListener("mouseleave",Q))})},0)}),he(()=>{_(i)&&(_(i).removeEventListener("mousemove",we),_(i).removeEventListener("mouseenter",le),_(i).removeEventListener("mouseleave",Q)),V&&cancelAnimationFrame(V),d&&d.dispose()}),or();var K=yi(),ee=y(K);Kt(ee,P=>j(o,P),()=>_(o)),b(K),Kt(K,P=>j(i,P),()=>_(i)),Ye(()=>{ar(K,`${s()||n()?"":`min-height: ${a()};`}`),M(ee,"src",r())}),fe(e,K),nt()}var wi=ze('<div><h1 class="tracking-in-expand svelte-1x0r68s">WELCOME</h1></div>'),_i=ze('<div class="cursor-preview svelte-1x0r68s"><img alt="Section Preview" class="svelte-1x0r68s"></div>'),Di=ze(`<!> <div class="landing-page dark-section svelte-1x0r68s"><div id="glass-landing" class="svelte-1x0r68s"></div> <div class="hero-container svelte-1x0r68s"><div class="hero-content svelte-1x0r68s"><div class="hero-text svelte-1x0r68s"><div class="identity svelte-1x0r68s"><span class="greeting svelte-1x0r68s">Hi, I'm</span> <h1 class="name svelte-1x0r68s">David</h1></div> <h2 class="profession svelte-1x0r68s">3D Artist & Visual Designer</h2> <div class="tagline svelte-1x0r68s">Transforming creative concepts into stunning digital experiences</div> <div class="description svelte-1x0r68s"><p class="svelte-1x0r68s">I specialize in creating immersive 3D visuals and compelling digital art that helps brands and businesses stand out in the digital space.</p> <p class="svelte-1x0r68s">With expertise in the 3D sphere, I bring ideas to life through technical excellence and artistic vision.</p></div> <div class="hero-cta svelte-1x0r68s"><a class="primary-btn svelte-1x0r68s">View My Work</a> <a class="secondary-btn svelte-1x0r68s">Let's Talk</a></div></div> <div class="hero-visual svelte-1x0r68s"><div class="image-container svelte-1x0r68s"><!></div></div></div></div></div> <div class="landing-page svelte-1x0r68s"><div id="glass-landingWhite" class="svelte-1x0r68s"></div> <div class="featured-container svelte-1x0r68s"><div class="featured-content svelte-1x0r68s"><h1 class="section-title svelte-1x0r68s">Featured Work</h1> <div class="accent-bar svelte-1x0r68s"></div> <div class="featured-grid svelte-1x0r68s"><a class="featured-item svelte-1x0r68s"><div class="featured-image-container svelte-1x0r68s"><img alt="3D Visualization Project" class="svelte-1x0r68s"> <div class="featured-overlay svelte-1x0r68s"><h3 class="svelte-1x0r68s">THE MAG WRAP 2025</h3> <p class="svelte-1x0r68s">Garment & Crowd Simulations</p> <span class="view-details svelte-1x0r68s">View Project →</span></div></div></a></div></div></div></div> <div class="logos svelte-1x0r68s"><div class="logos-slide svelte-1x0r68s"><img alt="Apparently Logo" class="logo svelte-1x0r68s"> <img alt="Krystof Logo" class="logo svelte-1x0r68s"> <img alt="Mira Logo" class="logo svelte-1x0r68s"> <img alt="Devomi Logo" class="logo svelte-1x0r68s"> <img alt="dykast Logo" class="logo svelte-1x0r68s"></div> <div class="logos-slide svelte-1x0r68s"><img alt="Apparently Logo" class="logo svelte-1x0r68s"> <img alt="Krystof Logo" class="logo svelte-1x0r68s"> <img alt="Mira Logo" class="logo svelte-1x0r68s"> <img alt="Devomi Logo" class="logo svelte-1x0r68s"> <img alt="dykast Logo" class="logo svelte-1x0r68s"></div> <div class="logos-slide svelte-1x0r68s"><img alt="Apparently Logo" class="logo svelte-1x0r68s"> <img alt="Krystof Logo" class="logo svelte-1x0r68s"> <img alt="Mira Logo" class="logo svelte-1x0r68s"> <img alt="Devomi Logo" class="logo svelte-1x0r68s"> <img alt="dykast Logo" class="logo svelte-1x0r68s"></div> <div class="logos-slide svelte-1x0r68s"><img alt="Apparently Logo" class="logo svelte-1x0r68s"> <img alt="Krystof Logo" class="logo svelte-1x0r68s"> <img alt="Mira Logo" class="logo svelte-1x0r68s"> <img alt="Devomi Logo" class="logo svelte-1x0r68s"> <img alt="dykast Logo" class="logo svelte-1x0r68s"></div></div> <div class="landing-page dark-section svelte-1x0r68s"><div id="glass-landing" class="svelte-1x0r68s"></div> <div class="testimonials-container svelte-1x0r68s"><div class="testimonials-content svelte-1x0r68s"><h1 class="section-title svelte-1x0r68s">Client Testimonials</h1> <div class="accent-bar svelte-1x0r68s"></div> <div class="testimonials-grid svelte-1x0r68s"><div class="testimonial-card svelte-1x0r68s"><div class="testimonial-content svelte-1x0r68s"><svg class="quote-icon svelte-1x0r68s" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" class="svelte-1x0r68s"></path></svg> <p class="testimonial-text svelte-1x0r68s">"Working with David was a real pleasure. He is quick to respond to any requests and very accommodating, making co-operating smooth and effective. Can always be trusted to deliver!"</p> <div class="testimonial-author svelte-1x0r68s"><strong class="svelte-1x0r68s">Mira Lumière</strong> <span class="svelte-1x0r68s">Director @ Yoimira Entertainment</span> <img alt="Mira Logo" class="logo-testamonial svelte-1x0r68s" style="opacity:0.5"></div></div></div> <div class="testimonial-card svelte-1x0r68s"><div class="testimonial-content svelte-1x0r68s"><svg class="quote-icon svelte-1x0r68s" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" class="svelte-1x0r68s"></path></svg> <p class="testimonial-text svelte-1x0r68s">"David is a great addition to my team. He knows his way around 3D graphics and isn’t afraid to take on complex technical challenges. He communicates really well, so working with him is always a breeze. Plus, he's reliable and always delivers his work on time, which I truly appreciate. I really enjoy working with him, and I know he'll keep playing a big part in our projects' success."</p> <div class="testimonial-author svelte-1x0r68s"><strong class="svelte-1x0r68s">Krystof Jezek</strong> <span class="svelte-1x0r68s">Motion Director @ Krystof Jezek</span> <img alt="Krystof Logo" class="logo-testamonial svelte-1x0r68s" style="opacity:0.5"></div></div></div></div></div></div></div> <div class="landing-page svelte-1x0r68s"><div id="glass-landingWhite" class="svelte-1x0r68s"></div> <div class="skills-container svelte-1x0r68s"><div class="skills-content svelte-1x0r68s"><h1 class="skills-title svelte-1x0r68s">Skills</h1> <div class="accent-bar svelte-1x0r68s"></div> <div class="skills-section svelte-1x0r68s"><div class="section-container svelte-1x0r68s"><div class="bubble-container svelte-1x0r68s"><span class="bubble svelte-1x0r68s">3D Modeling</span> <span class="bubble svelte-1x0r68s">Texturing</span> <span class="bubble svelte-1x0r68s">Animation</span> <span class="bubble svelte-1x0r68s">UV Mapping</span> <span class="bubble svelte-1x0r68s">Rigging</span> <span class="bubble svelte-1x0r68s">Rendering</span> <span class="bubble svelte-1x0r68s">Lighting</span> <span class="bubble svelte-1x0r68s">Sculpting</span> <span class="bubble svelte-1x0r68s">Geometry Nodes</span> <span class="bubble svelte-1x0r68s">Simulations</span></div></div> <div class="section-container svelte-1x0r68s"><h2 class="section-title svelte-1x0r68s">Technology</h2> <div class="accent-bar svelte-1x0r68s"></div> <div class="bubble-container svelte-1x0r68s"><span class="bubble svelte-1x0r68s">Blender</span> <span class="bubble svelte-1x0r68s">Substance Painter</span> <span class="bubble svelte-1x0r68s">Substance Designer</span> <span class="bubble svelte-1x0r68s">3DCoat</span> <span class="bubble svelte-1x0r68s">Zbrush</span> <span class="bubble svelte-1x0r68s">Photoshop</span> <span class="bubble svelte-1x0r68s">Illustrator</span> <span class="bubble svelte-1x0r68s">Indesign</span> <span class="bubble svelte-1x0r68s">After Effects</span> <span class="bubble svelte-1x0r68s">Figma</span> <span class="bubble svelte-1x0r68s">Davinci Resolve</span> <span class="bubble svelte-1x0r68s">Houdini</span> <span class="bubble svelte-1x0r68s">Figma</span> <span class="bubble svelte-1x0r68s">Github</span> <span class="bubble svelte-1x0r68s">Svelte</span></div></div></div></div></div></div> <div class="landing-page dark-section final-section svelte-1x0r68s"><div id="glass-landing" class="svelte-1x0r68s"></div> <div class="sections-container svelte-1x0r68s"><div class="sections-content svelte-1x0r68s"><div class="sections-left svelte-1x0r68s"><h1 class="mega-title svelte-1x0r68s">Not Impressed<br class="svelte-1x0r68s">Yet?</h1> <div class="accent-bar svelte-1x0r68s"></div> <p class="mega-description svelte-1x0r68s">Choose your journey through my portfolio collections</p></div> <div class="sections-right svelte-1x0r68s"><div class="sections-grid svelte-1x0r68s"><a class="section-item svelte-1x0r68s"><h2 class="svelte-1x0r68s">Personal</h2> <p class="svelte-1x0r68s">Explore my creative projects and artistic expressions</p> <div class="section-number svelte-1x0r68s">01</div></a> <a class="section-item svelte-1x0r68s"><h2 class="svelte-1x0r68s">Commercial</h2> <p class="svelte-1x0r68s">View my professional work and client projects</p> <div class="section-number svelte-1x0r68s">02</div></a> <a class="section-item svelte-1x0r68s"><h2 class="svelte-1x0r68s">Retro</h2> <p class="svelte-1x0r68s">Discover my land of PSX creations</p> <div class="section-number svelte-1x0r68s">03</div></a></div></div></div></div></div> <!> <!>`,1);function ji(e,t){rt(t,!1);let r=G(!0),s=G(!1),n=G(""),a=G(!1),i=G(0),o=G(0);function c(m,x){j(i,m.clientX),j(o,m.clientY),j(n,x),j(a,!0)}function l(){j(a,!1)}it(()=>{console.log("Home Page Loaded"),setTimeout(()=>j(s,!0),1e3),setTimeout(()=>j(r,!1),2e3)}),or();var v=Di(),d=sr(v);{var f=m=>{var x=wi();let u;Ye(Ir=>u=jr(x,1,"intro svelte-1x0r68s",null,u,Ir),[()=>({"fade-out":_(s)})],Fr),fe(m,x)};Zt(d,m=>{_(r)&&m(f)})}var w=p(d,2),g=p(y(w),2),I=y(g),z=y(I),A=y(z);O(A,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:0,threshold:.01}));var V=p(A,2);O(V,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:1700,threshold:.01}));var h=p(V,2);O(h,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:1900,threshold:.01}));var D=p(h,2);O(D,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:2200,threshold:.01}));var ae=p(D,2),oe=y(ae);M(oe,"href",`${S??""}/personal`);var we=p(oe,2);M(we,"href",`${S??""}/contact`),b(ae),O(ae,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:2600,threshold:.01})),b(z);var le=p(z,2),Q=y(le),K=y(Q);bi(K,{imageSrc:`${S??""}/images/landing.jpg`}),b(Q),b(le),b(I),b(g),b(w);var ee=p(w,2),P=p(y(ee),2),E=y(P),N=y(E);O(N,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:150,threshold:.01}));var R=p(N,2);O(R,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:200,threshold:.01}));var B=p(R,2),ce=y(B);M(ce,"href",`${S??""}/project/visualization`);var q=y(ce),te=y(q);M(te,"src",`${S??""}/images/projects/wrap/thumbnail.webp`),Br(2),b(q),b(ce),b(B),O(B,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:250,threshold:.01})),b(E),b(P),b(ee);var de=p(ee,2),re=y(de),_e=y(re);M(_e,"src",`${S??""}/images/apparently-logo.png`);var T=p(_e,2);M(T,"src",`${S??""}/images/krystof-logo.png`);var ve=p(T,2);M(ve,"src",`${S??""}/images/mira-logo.png`);var ue=p(ve,2);M(ue,"src",`${S??""}/images/devomi-logo.png`);var hr=p(ue,2);M(hr,"src",`${S??""}/images/dyky-logo.png`),b(re);var Ae=p(re,2),ft=y(Ae);M(ft,"src",`${S??""}/images/apparently-logo.png`);var pt=p(ft,2);M(pt,"src",`${S??""}/images/krystof-logo.png`);var mt=p(pt,2);M(mt,"src",`${S??""}/images/mira-logo.png`);var xt=p(mt,2);M(xt,"src",`${S??""}/images/devomi-logo.png`);var yr=p(xt,2);M(yr,"src",`${S??""}/images/dyky-logo.png`),b(Ae);var Te=p(Ae,2),gt=y(Te);M(gt,"src",`${S??""}/images/apparently-logo.png`);var ht=p(gt,2);M(ht,"src",`${S??""}/images/krystof-logo.png`);var yt=p(ht,2);M(yt,"src",`${S??""}/images/mira-logo.png`);var bt=p(yt,2);M(bt,"src",`${S??""}/images/devomi-logo.png`);var br=p(bt,2);M(br,"src",`${S??""}/images/dyky-logo.png`),b(Te);var wt=p(Te,2),_t=y(wt);M(_t,"src",`${S??""}/images/apparently-logo.png`);var Dt=p(_t,2);M(Dt,"src",`${S??""}/images/krystof-logo.png`);var St=p(Dt,2);M(St,"src",`${S??""}/images/mira-logo.png`);var Mt=p(St,2);M(Mt,"src",`${S??""}/images/devomi-logo.png`);var wr=p(Mt,2);M(wr,"src",`${S??""}/images/dyky-logo.png`),b(wt),b(de);var Ne=p(de,2),Ct=p(y(Ne),2),Pt=y(Ct),It=y(Pt);O(It,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:100,threshold:.01}));var zt=p(It,2);O(zt,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:110,threshold:.01}));var Le=p(zt,2),Ue=y(Le),Et=y(Ue),Ot=p(y(Et),4),_r=p(y(Ot),4);M(_r,"src",`${S??""}/images/mira-logo.png`),b(Ot),b(Et),b(Ue);var kt=p(Ue,2),Rt=y(kt),At=p(y(Rt),4),Dr=p(y(At),4);M(Dr,"src",`${S??""}/images/krystof-logo.png`),b(At),b(Rt),b(kt),b(Le),O(Le,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:120,threshold:.01})),b(Pt),b(Ct),b(Ne);var He=p(Ne,2),Tt=p(y(He),2),Nt=y(Tt),Lt=y(Nt);O(Lt,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:100,threshold:.01}));var Ut=p(Lt,2);O(Ut,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:110,threshold:.01}));var Ht=p(Ut,2),Ft=y(Ht);O(Ft,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",threshold:.01}));var Sr=p(Ft,2);O(Sr,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",threshold:.01})),b(Ht),b(Nt),b(Tt),b(He);var Fe=p(He,2),Bt=p(y(Fe),2),jt=y(Bt),Be=y(jt),Wt=y(Be);O(Wt,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:50,threshold:.01}));var Vt=p(Wt,2);O(Vt,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:100,threshold:.01}));var Mr=p(Vt,2);O(Mr,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:110,threshold:.01})),b(Be);var $t=p(Be,2),je=y($t),De=y(je);M(De,"href",`${S??""}/personal`);var Se=p(De,2);M(Se,"href",`${S??""}/commercial`);var We=p(Se,2);M(We,"href",`${S??""}/retro`),b(je),O(je,(m,x)=>{var u;return(u=k)==null?void 0:u(m,x)},()=>({preset:"slide",delay:120,threshold:.01})),b($t),b(jt),b(Bt),b(Fe);var Gt=p(Fe,2);{var Cr=m=>{var x=_i(),u=y(x);b(x),Ye(()=>{ar(x,`left: ${_(i)+180}px; top: ${_(o)-50}px;`),M(u,"src",`${S??""}${_(n)??""}`)}),fe(m,x)};Zt(Gt,m=>{_(a)&&m(Cr)})}var Pr=p(Gt,2);nn(Pr,{}),ne("mousemove",De,m=>c(m,"/images/gifs/personal.gif")),ne("mouseleave",De,l),ne("mousemove",Se,m=>c(m,"/images/gifs/commercial.gif")),ne("mouseleave",Se,l),ne("mousemove",We,m=>c(m,"/images/gifs/retro.gif")),ne("mouseleave",We,l),fe(e,v),nt()}export{ji as component};
