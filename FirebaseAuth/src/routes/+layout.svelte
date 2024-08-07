<script>
    import "../app.css";
    import App from './fb';
    import {onMount} from "svelte";
    import {getAuth,onAuthStateChanged,signOut} from 'firebase/auth';
    import { goto } from "$app/navigation";
    // import { isLoggedIn } from "../../../routes/stores/authStore";
    // import { Username } from "$lib/store.js";
    onMount(()=>{
      const auth=getAuth();
      onAuthStateChanged(auth,(user)=>{
        if(user){
          // $Username = userCredential;
          console.log(user)
        }
        else{
          goto('/login')
        }
      })
    })
  </script>
  <slot />