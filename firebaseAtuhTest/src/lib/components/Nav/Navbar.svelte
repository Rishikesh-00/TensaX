<script>
    import { goto } from "$app/navigation";
    import { getAuth, signOut } from "firebase/auth";
    import { isLoggedIn } from "../../../routes/stores/authStore";

    const auth = getAuth();

    function logout() {
        signOut(auth)
            .then(()=> {
                localStorage.removeItem("uid");
                goto("/login");
            })
            .catch((error)=> {
                console.error(error);
            });
    }
</script>

<ul class="nav justify-end bg-dark">
    <li class="nav-item">
        <a href="/" class="nav-link" aria-current="page">Home</a>
    </li>
    <li class="nav-item">
        <a href="https://google.com" class="nav-link" target="_blank">My Website</a>
    </li>
    {#if $isLoggedIn}
        <li class="nav-item">
            <a href="/" class="nav-link" on:click|preventDefault={logout}>Sign Out</a>
        </li>
    {/if}
</ul>