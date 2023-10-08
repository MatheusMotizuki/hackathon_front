<script>
    import Contact from "$lib/components/Contact.svelte";
    export let schools;
</script>


<div class="grid grid-cols-2  gap-4">
    {#if schools.length === 0}

    {/if}
    {#each schools as school}
        <Contact {school}/>
    {/each}
</div>
