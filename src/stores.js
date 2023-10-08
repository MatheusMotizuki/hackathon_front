import {writable} from "svelte/store";

export let userStore  = writable({})
export let dashboardSelected = writable('Maps');