<script>
    import MapMarker from "../../lib/components/MapMarker.svelte"
    import {MapLibre, Marker} from 'svelte-maplibre';
    import { WidgetPlaceholder, CardPlaceholder   } from 'flowbite-svelte';
    let cep_input = 89010025;
    const randomInteger = (min, max) => (Math.random() * (max - min + 1)) + min;
    class Creche {
        constructor( logintude = 0, latitude = 0, id = ":3", nome = "Creche", cep = "", telefone ="1234", email ="john@doe.com", vagas = 3){
            this.id = id
            this.nome = nome;
            this.cep = cep;
            this.telefone = telefone;
            this.email = email;
            this.logintude = logintude
            this.latitude = latitude
        }
    }
    let creches = []
    for (let i = 0; i < 10; i++) {
        creches.push(new Creche(
            randomInteger(-42.9795, -42.9643),
            randomInteger(-22.3912, -22.4528),
            "Creche N" + i));        
    }
    let markers = creches.map((creche)=>([creche.logintude,  creche.latitude]))
    console.log(markers);

    /**
     * 
     * @param {Number} cep 
     * @return {Promise<Coordinates> | null} 
     */
    function getCoords(cep){
        return fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
        .then((req)=>{ return req.json()})
        .then(address=> {return address})
    }
</script>

<input type="text" bind:value={cep_input}/>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" on:click={()=>{console.log(getCoords(cep_input));
}}>oi</button>
<CardPlaceholder ></CardPlaceholder>
<WidgetPlaceholder />
<div>
    <MapLibre 
        center={[-22.4187,-42.9713]}
        zoom={2}
        class="map"
        standardControls
        style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json">
        {#each creches as  creche }
            <MapMarker {creche}/>
        {/each}
    </MapLibre>
</div>

<style>
  :global(.map) {
    height: 500px;
  }
</style>