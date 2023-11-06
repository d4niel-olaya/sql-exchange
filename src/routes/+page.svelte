<script lang="ts">
    import Logo from '../components/Logo.svelte'
    import Translate from '../components/Translate.svelte';
    import { google } from '../services/googleService'
    import { onMount } from 'svelte';
    onMount(async()=>
    {
        await google()
    })
</script>

<main>
    <div class="max-w-4xl mx-auto px-4">
        <Logo/>
        <Translate/>
    </div>
</main>
