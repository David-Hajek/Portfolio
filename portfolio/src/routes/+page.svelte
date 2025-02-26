<script>
import { Canvas } from '@threlte/core'
  import ThreeScene from '$lib/ThreeScene.svelte'
  
import { onMount } from 'svelte';
import { Studio } from '@threlte/studio'
onMount(() =>{
    console.log("Home Page Loaded");
});

</script>
<Canvas>
  {#if import.meta.env.MODE === 'development'}
    {#await import('@threlte/studio') then { Studio }}
      <Studio>
        <ThreeScene/>
      </Studio>
    {/await}
  {:else}
    <ThreeScene/>
  {/if}

</Canvas>

<h1>Welcome to my Svelte App!</h1>
<p>This is the homepage of our TOMAS DITE application.</p>


<style>
        headerLocation{color: #ffffff; filter: blur(2px);}
</style>
