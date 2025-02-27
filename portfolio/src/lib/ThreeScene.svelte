<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { interactivity, Environment, Grid, OrbitControls } from '@threlte/extras'
  import { Spring } from 'svelte/motion'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { useLoader } from '@threlte/core'
  import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'; // hdri
	import { EquirectangularReflectionMapping} from 'three';
	import Model from '$lib/test2.svelte'

 
 
 const { load } = useLoader(RGBELoader)
  const map = load('/hdri/kloppenheim_02_puresky_1k.hdr', {
    transform(texture) {
      texture.mapping = EquirectangularReflectionMapping;
      return texture
    }
  })
  let color = '#ff3e00'

  const gltf = useLoader(GLTFLoader).load('/models/test2.glb')
  
  interactivity()
  const scale = new Spring(1)
  let rotation = 0
  useTask((delta) => {
    rotation += delta
  })
  let maxAzimuthAngle: number = 0.1
  let maxPolarAngle: number = Math.PI
</script>

{#await map then texture}
  <Environment
    {texture}
  />
{/await}


<Model 
position.y = {-3}
  scale = {[ 12, 12, 12 ]} rotation={[ -0.0145, 0.0443, -0.0124 ]} position={[ 2, 3.7373, -0.4 ]} renderOrder={6}
  rotation.x = {0.1}
  rotation.y = {rotation} matrixWorldAutoUpdate matrixAutoUpdate frustumCulled	
  />
<T.PerspectiveCamera
  makeDefault
  position={[ 10.3044, 0.2761, 16.9648 ]}
  fov={31.75}
  oncreate={(ref) => {
    ref.lookAt(0, 6, 0)
  }}
  rotation={[ 0.2953, 0.4881, -0.1208 ]}
  filmGauge={139}
  scale={[ 1, 1, 1 ]}
>
<OrbitControls
{ maxAzimuthAngle }
{ maxPolarAngle }
enableDamping />
</T.PerspectiveCamera>
<T.DirectionalLight
  position={[ -11.6464, 8.8964, -7.0845 ]}
  castShadow
  rotation={[ -4.0839, -0.1642, 1.8128 ]}
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
<T.DirectionalLight position={[ 12.0803, 5.2133, -27.939 ]} intensity={10} target.position={[ -6.9, 0, 0 ]} scale={[ 0.1, 0.1, 0.1 ]} renderOrder={0} matrixWorldAutoUpdate color="#f5c66a" castShadow frustumCulled shadow.bias={13.7} shadow.normalBias={14.2} shadow.blurSamples={11.1} shadow.radius={6.5} shadow.camera.near={1.72} shadow.camera.top={0.3} rotation={[ -0.2357, 0.1031, -0.3257 ]}>
  
</T.DirectionalLight>

<Grid
  sectionColor={color}
  sectionThickness={1}
  cellColor="#cccccc"
  gridSize={40}
/>