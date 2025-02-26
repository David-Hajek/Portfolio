<script>
import { Canvas } from '@threlte/core'
  import ThreeScene from '$lib/ThreeScene.svelte'
import { onMount } from 'svelte';
onMount(() =>{
    console.log("Home Page Loaded");
});

</script>
 
<h1>Welcome to my Svelte App!</h1>
<p>This is the homepage of our TOMAS DITE application.</p>
<Canvas>
<ThreeScene/>
</Canvas>
<style>
        headerLocation{color: #ffffff; filter: blur(2px);}
</style>
