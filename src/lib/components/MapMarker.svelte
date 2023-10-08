<script>
    import("$lib/../app.css")
    import MapIcon from "$lib/assets/book-half.svg"
    import {Marker, Popup} from 'svelte-maplibre';
    export let school
    let lngLat = [school.logintude,  school.latitude]
</script>



<Marker {lngLat} class="grid place-items-center bg-">
    <a href="/escola/{school.id}">
        <div class="flex justify-center items-center">
            <img alt="Marcador {school.name}" src={MapIcon}/>
        </div>
        <div><b>{school.name}</b></div>
    </a>
</Marker>