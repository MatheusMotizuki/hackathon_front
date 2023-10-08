<script>
    import Map from "$lib/components/Map.svelte"
    import Sidebar from "$lib/components/Sidebar.svelte";

    import {dashboardSelected} from "../../stores.js";
    export let data;

</script>

<Sidebar>
    <span slot="main">
        {#if $dashboardSelected === 'Maps'}
        <Map userCoords={data.userCoords} schools={data.schools}/>
        {/if}
    </span>
</Sidebar>