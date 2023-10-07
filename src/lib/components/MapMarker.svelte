<script>
    import("$lib/../app.css")
    import MapIcon from "$lib/assets/book-half.svg"
    import {Marker, Popup} from 'svelte-maplibre';
    export let creche
    let lngLat = [creche.logintude,  creche.latitude]
</script>



<Marker {lngLat} class="grid place-items-center bg-">
    <a href="/escola/{creche.id}">
        <div class="flex justify-center items-center">
            <img  src={MapIcon}/>
        </div>
        <div><b>{creche.nome}</b></div>
    </a>
</Marker>