<script>
    import Contact from "$lib/components/Contact.svelte";

    import("$lib/../app.css")
    import MapIcon from "$lib/assets/book-half.svg"
    import {Marker, Popup} from 'svelte-maplibre';
    export let school
    let lngLat = [school.longitude,  school.latitude]

</script>



<Marker
        {lngLat}
        class="border-gray-200 border shadow-2xl focus:outline-2 focus:outline-black w-8 h-8 bg-red-300 text-black rounded-full grid place-items-center"
>
    <Popup openOn="hover" offset={[0, -10]}>
        <Contact {school}/>
    </Popup>
</Marker>