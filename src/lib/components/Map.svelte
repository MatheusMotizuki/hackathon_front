<script>
    import {MapLibre} from 'svelte-maplibre';
    import MapMarker from "$lib/components/MapMarker.svelte";

    export let schools = [];
    export let userCoords;
    let centerCoords = [userCoords.longitude, userCoords.latitude]
</script>

<div class=" bg-white border rounded border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <MapLibre
            center={centerCoords}
            zoom={10}
            style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
            class="relative w-full aspect-[9/16] max-h-[70vh] sm:max-h-full sm:aspect-video"
            standardControls>

        {#each schools  as school}
            <MapMarker {school}/>
        {/each}
    </MapLibre>

</div>
