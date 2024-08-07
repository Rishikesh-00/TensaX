<script>
    import { onMount, onDestroy } from "svelte";
    import { goto } from "$app/navigation";
    import {
        getAuth, 
        signInWithEmailAndPassword, 
        createUserWithEmailAndPassword, 
        signInWithPopup,
        GithubAuthProvider,
        GoogleAuthProvider
    } from "firebase/auth";

    export let title;

    const auth = getAuth();

    const loginWithGoogle= () =>{
        const auth = getAuth();
        signInWithPopup(auth, new GoogleAuthProvider());
    };
    const loginWithGithub= () =>{
        const auth = getAuth();
        signInWithPopup(auth, new GithubAuthProvider());
    };




    function login(){
        let email = document.getElementById("emailInput").value;
        let password = document.getElementById("passInput").value;
        if (title == "Login"){
            signInWithEmailAndPassword(auth, email, password).then(
                (userCredential)=>{
                    const user = userCredential.user;
                    localStorage.setItem("uid", user.uid);
                    goto("/");
                }
            ).catch((error)=> {
                console.error(error);
            });
        }
        else{
            createUserWithEmailAndPassword(auth, email, password).then(
                (userCredential)=>{
                    const user = userCredential.user;
                    localStorage.setItem("uid", user.uid);
                    goto("/");
                }
            ).catch((error)=> {
                console.error(error);
            });
        }
    }

</script>

<div class="login">
    <div class="card">
        <div class="card-body login-form">
            <h3 class="card-title">{title}</h3>
            <form on:submit|preventDefault ={login}>
                <div class="mb-3">
                    <label for="emailInput" class="form-label">Email Address</label>
                    <input
                      type="email"
                      class="form-control" 
                      id="emailInput" 
                      aria-describedby="emailHelp" 
                      placeholder="Email Address"/>
                      {#if title != "Login"}
                        <div class="form-text" id="emailHelp">
                            We'll never share your email with anyone else.
                        </div>
                    {/if}
                </div>
                <div class="mb-3">
                    <label for="passInput" class="form-label">Password</label>
                    <input 
                        type="password"
                        class="form-control"
                        id="passInput"
                        placeholder="Password"
                        />
                </div>
                <button class="btn btn-primary" type="submit">submit</button>
                <button on:click={loginWithGoogle} >Login with Google</button>
                <button on:click={loginWithGithub} >Login with Github</button>
                <button on:click={loginWithOtp} >Login with OTP</button>
            </form>
            {#if title == "Login"}
                <p class="float-end mb-3">
                    Not a user?<a href="/signup" class="card-link">Sign Up</a>
                </p>
            {/if}
        </div>
    </div>
</div>

<style>
    .card{
        width: 50%;
        margin: 0 auto;
    }

    .login{
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .login-form{
        width: 60%;
        margin: 0 auto;
    }

    .card-link{
        text-decoration: underline;
        color: rgb(61, 150, 223);
    }

    @media only screen and (min-width: 320px) and (max-width: 400px){
        .login-form{
            width: 90%;

        }

        .card{
            width: 90%;
        }
    }
</style>