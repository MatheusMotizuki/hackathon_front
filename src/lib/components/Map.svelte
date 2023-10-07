<script>
    import MapMarker from "$lib/components/MapMarker.svelte"
    import {MapLibre, Marker} from 'svelte-maplibre';
    
    import MapIcon from "$lib/assets/map-fill.svg"
    
    let cep_input = 89010025;
    
    export let creches;

</script>

<div class=" bg-white border rounded border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <MapLibre 
        center={[-22.4187,-42.9713]}
        zoom={2}
        class="map rounded-xl"
        standardControls
        style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json">
        {#each creches as  creche }
            <MapMarker {creche}/>
        {/each}
    </MapLibre>
    <div class="">
        <div>
            <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DISTANCIA</label>
            <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
        </div>
        <br>/
        <div class="flex">
            <label for="cep-input">Insira seu CEP</label>
            <input id="cep-input" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" type="text" bind:value={cep_input}/>
            <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver escolas proximas</button>
        </div>
    </div>
</div>

<style></style>