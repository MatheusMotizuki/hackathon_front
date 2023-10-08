<script>
    import MapMarker from "$lib/components/MapMarker.svelte"
    import {MapLibre, Marker} from 'svelte-maplibre';
    
    import MapIcon from "$lib/assets/map-fill.svg"
    
    let cep_input;
    
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
        <div class="flex mt-6 mb-2 mr-6 ml-6">
            <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Distância</label>
            <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
        </div>
        <div class="flex  m-6" >
            <div class="relative z-0 w-full group">
                <input type="password" name="floating_password" id="cep-input" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="cep-input" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CEP</label>
            </div>
            <button class="w-full inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver escolas proximas</button>
      
        </div>
    </div>
</div>

<style></style>