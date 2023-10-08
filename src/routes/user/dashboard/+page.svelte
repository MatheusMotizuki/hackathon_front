<script>
    import Map from "$lib/components/Map.svelte"
    import Sidebar from "$lib/components/Sidebar.svelte";

    import {dashboardSelected} from "../../../stores.js";
    import ContactGrid from "$lib/components/ContactGrid.svelte";
    let data = {
        userCoords: {
            latitude: -26.9239862,
            longitude: -49.0641133
        },
        schools: [{
            email: "ebm_albertostein@ensinablumenau.sc.gov.br",
            name: "EBM Alberto Stein",
            cep: "89041-003",
            cellPhone: "(47) 3381.6353 / 6354",
            latitude: -27.2239862,
            longitude: -49.0641133
        },
        {
            email: "ebm_almirantetamandare@ensinablumenau.sc.gov.br",
            name: "EBM Almirante Tamandaré",
            cep: "89050-540",
            cellPhone: "(47) 3381.6152",
            latitude: -26.9239862,
            longitude: -48.7641133
        },
        {
            email: "ebm_almirantetamandare@ensinablumenau.sc.gov.br",
            name: "EBM Anita Garibaldi",
            cep: "89068-000",
            cellPhone: "(47) 3381.6216",
            latitude: -26.4239862,
            longitude: -48.7641133
        },
        {
            email: "ebm_annemarietechentin@ensinablumenau.sc.gov.br",
            name: "EBM Bilíngue Annemarie Techentin",
            cep: "89032-400",
            cellPhone: "(47) 3381.6173",
            latitude: -26.2239862,
            longitude: -48.5641133
        },
        {
            email: "ebm_gustavorichard@ensinablumenau.sc.gov.br",
            name: "EBM Bilíngue Gustavo Richard",
            cep: "89051-300",
            cellPhone: "(47) 3381.6286",
            latitude: -25.8239862,
            longitude: -48.9641133
        },
        {
            email: "ebm_duquedecaxias@ensinablumenau.sc.gov.br",
            name: "EBM Duque de Caxias",
            cep: "89075-000",
            cellPhone: "(47) 3381.6381",
            latitude: -26.1239862,
            longitude: -48.9641133
        }
        ]
}

</script>

<Sidebar>
    <span slot="main">
        {#if $dashboardSelected === 'Maps'}
            <Map userCoords={data.userCoords} schools={data.schools}/>
        {/if}
        {#if $dashboardSelected === 'List'}
            <ContactGrid schools={data.schools}/>
        {/if}
    </span>
</Sidebar>