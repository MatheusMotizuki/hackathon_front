<script>
    import MapMarker from "../../lib/components/MapMarker.svelte"
    import SchoolCard from "../../lib/components/SchoolCard.svelte"
    import {MapLibre, Marker} from 'svelte-maplibre';
    import School from "$lib/api/schools"
    import Map from "$lib/components/Map.svelte"
    import MapIcon from "$lib/assets/map-fill.svg"
    let creches = []
    const randomInteger = (min, max) => (Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < 10; i++) {
        creches.push(new School(
            randomInteger(-42.9795, -42.9643),
            randomInteger(-22.3912, -22.4528),
            "Creche N" + i));        
    }
    let teste = new School(
            randomInteger(-42.9795, -42.9643),
            randomInteger(-22.3912, -22.4528),
            "Creche N")
    console.log(teste);
</script>

<SchoolCard {teste}/>

<!--<Map  {creches}></Map>
-->
<style>
  :global(.map) {
    height: 500px;
  }
</style>