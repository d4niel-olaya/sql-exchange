<script lang="ts">
    import { onMount } from "svelte";
    import { google } from "../services/googleService";

    async function req()
    {
        const result = await google(providerFrom, queryFrom , providerEnd)
        finalQuery = result
    }
    let providerFrom : string = "MySQL"
    let providerEnd : string = "PostgreSQL"
    let queryFrom : string = ""
    let finalQuery : string = ""
   </script>


<div class="flex w-full items-center justify-between">
    <div class="w-full p-2">
        <select class="select select-bordered  w-full max-w-xs m-4" bind:value={providerFrom}>
            <option disabled selected>Provider</option>
            <option value="MySQL" class="option">MySQL</option>
            <option value="PostgreSQL" class="option">PostgreSQL</option>
            <option  value="Oracle" class="option">Oracle</option>
            <option  value="SQL Server" class="option">SQL Server</option>
          </select>
        <textarea class="textarea textarea-bordered textarea-ghost  w-full h-56 mt-4" bind:value={queryFrom} placeholder="Your SQL Code" spellcheck="false"></textarea>
    </div>
    <div>
        <button class="btn btn-primary" on:click={req}>Translate</button>
    </div>
    <div class="w-full p-2">
        <select class="select select-bordered w-full max-w-xs  m-4" bind:value={providerEnd}>
            <option disabled selected>Provider</option>
            <option value="MySQL" class="option">MySQL</option>
            <option value="PostgreSQL" class="option">PostgreSQL</option>
            <option  value="Oracle" class="option">Oracle</option>
            <option  value="SQL Server" class="option">SQL Server</option>
          </select>
        <textarea class="textarea textarea-bordered  textarea-ghost w-full h-56 mt-4" bind:value={finalQuery} spellcheck="false"></textarea>
    </div>
</div>
