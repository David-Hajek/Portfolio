<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { interactivity, Environment, Grid, OrbitControls } from '@threlte/extras'
  import { Spring } from 'svelte/motion'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { useLoader } from '@threlte/core'
  import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'; // hdri
 import { EffectComposer } from 'threlte-postprocessing'
	import { EquirectangularReflectionMapping} from 'three';
import { DepthOfFieldEffect, NoiseEffect, VignetteEffect, ChromaticAberrationEffect, ToneMappingEffect, BloomEffect,  } from 'threlte-postprocessing/effects'
  
	//import Model from '$lib/test2.svelte'
 import Model from '$lib/test4.svelte'
 
 
 const { load } = useLoader(RGBELoader)
  const map = load('/hdri/kloppenheim_02_puresky_1k.hdr', {
    transform(texture) {
      texture.mapping = EquirectangularReflectionMapping;
      return texture
    }
  })
  let color = '#ff3e00'

 
  
  interactivity()
  const scale = new Spring(1)
  let rotation = 0
  useTask((delta) => {
    rotation += delta
  })
  
</script>

{#await map then texture}
  <Environment
    {texture}
  />
{/await}


<EffectComposer>

  <BloomEffect
    intensity={0.8}          
  luminanceThreshold={0.8}
  />
  <VignetteEffect 
  eskil={false} offset={0.1} darkness={0.8} />
  <NoiseEffect
  premultiply={true}
  />
</EffectComposer>
<Model 
   renderOrder={6}
  />
<T.PerspectiveCamera
makeDefault
position={[ 4.5814, 1.5362, 3.4907 ]}
fov={41}
oncreate={(ref) => {
  ref.lookAt(6, 6, 6)
}}
visible
rotation={[ -0.4251, 0.9929, 0.3378 ]}
scale={[ 1, 1, 1 ]}

  >
  <OrbitControls
  enablePan={false}
  enableZoom={false}
  maxDistance={6}
  maxPolarAngle={0.3 * Math.PI}
  enableDamping={true}
  minPolarAngle={0.415 * Math.PI}
  minAzimuthAngle={0.245 * Math.PI}
  maxAzimuthAngle={0.3341 * Math.PI}
  rotateSpeed={0.1}
  
    />
</T.PerspectiveCamera>
<T.DirectionalLight
  position={[ 39.3536, 6.2964, -3.6845 ]}
  castShadow
  rotation={[ -2.164, -0.1642, 1.8128 ]}
  color="#f2c083"
  intensity={8}
  renderOrder={0}
  frustumCulled
  matrixAutoUpdate
  scale={[ -1, -1, 1 ]}
  target.position={[ 36.6, 0, 0 ]}
  shadow.bias={5.9}
  shadow.normalBias={18.6}
  shadow.radius={-8.1}
  shadow.blurSamples={7.4}
  shadow.camera.near={2.42}
  shadow.camera.far={2420}
  shadow.camera.right={5.1}
  shadow.mapSize.width={512}
/>
<T.DirectionalLight position={[ 0.0803, 5.7133, -18.939 ]} intensity={10} target.position={[ -6.9, 0, 0 ]} scale={[ 0.1, 0.0527, 0.1 ]} renderOrder={0} matrixWorldAutoUpdate color="#fed9a1" castShadow frustumCulled shadow.bias={13.7} shadow.normalBias={14.2} shadow.blurSamples={11.1} shadow.radius={6.5} shadow.camera.near={1.72} shadow.camera.top={0.3} rotation={[ 0.1657, 0.1031, -0.3257 ]}>
  
</T.DirectionalLight>

