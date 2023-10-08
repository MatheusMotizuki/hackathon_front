<script>
    import Map from "$lib/components/Map.svelte"
    import Sidebar from "$lib/components/Sidebar.svelte";

    import {dashboardSelected} from "../../stores.js";
    import ContactGrid from "$lib/components/ContactGrid.svelte";
    export let data;

</script>

<Sidebar>
    <span slot="main">
        {#if $dashboardSelected === 'Maps'}
            <Map userCoords={data.userCoords} schools={data.schools}/>
        {/if}
        {#if $dashboardSelected === 'List'}
            <ContactGrid/>
        {/if}
    </span>
</Sidebar>