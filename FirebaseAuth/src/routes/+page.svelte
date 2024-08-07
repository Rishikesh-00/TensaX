<script>
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import {goto} from "$app/navigation"
  // function logout() {
  //   const auth=getAuth();
  //       signOut(auth)
  //           .then(()=> {
  //               localStorage.removeItem("Username");
  //               goto("/login");
  //           })
  //           .catch((error)=> {
  //               console.error(error);
  //           });
  //   }
  const auth = getAuth();
  const handleLogout=async()=>{
    // try{
    //   await signOut(auth);
    //   localStorage.removeItem("Username");
    //   alert('signout')
    //   goto('/login');
    // }catch(err){
    //   console.error(err)
    // }
    const auth = getAuth();
signOut(auth).then(() => {
  console.log('Sign-out successful.')
}).catch((error) => {
  console.log(error)
});
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<button
  class="bg-blue-500 text-white font-bold px-3 py-1 rounded"
  on:click={handleLogout}>Logout</button
>
