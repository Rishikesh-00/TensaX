<script>
    import "../app.css";
    
    import App from "./fb";
    import { onMount } from 'svelte';
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { goto } from "$app/navigation";
    import {isLoggedIn} from "./stores/authStore";
    import Navbar from '$lib/components/Nav/Navbar.svelte';

    onMount(()=> {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) =>{
            if(user){
                console.log('Welcome to the file portal');
                isLoggedIn.update(()=> true);
            }
            else{
                isLoggedIn.update(()=> false);
                goto("/login");
            }
        })
    })
</script>

<Navbar />
  
  <slot />