<script>
    const randomInteger = (min, max) => (Math.random() * (max - min + 1)) + min;
    import {Creche} from "$lib/components/Map.svelte"
    let creches = []
    for (let i = 0; i < 10; i++) {
        creches.push(new Creche(
            randomInteger(-42.9795, -42.9643),
            randomInteger(-22.3912, -22.4528),
            "Creche N" + i));        
    }

</script>

<Map {creches}/>
<div>
   
    

</div>

<style>
  :global(.map) {
    height: 500px;
  }
</style>