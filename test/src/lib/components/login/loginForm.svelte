<script>
  import { goto } from "$app/navigation";
  import { getAuth, 
        signInWithEmailAndPassword, 
        createUserWithEmailAndPassword, 
        signInWithPopup,
        GithubAuthProvider,
        GoogleAuthProvider } from "firebase/auth";

  import { Username } from "$lib/store.js";

const provider = new GoogleAuthProvider();

  export let title;
  const auth = getAuth();

  function login() {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passInput").value;

    if (title == "Login") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          $Username = userCredential;
          // console.log(userCredential);
          goto("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          $Username = userCredential;
          goto("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  const logingoogle = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      // goto('/')
      alert("login")
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  // const logingoogle = async () => {
  //   const auth = getAuth();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       // const credential = GoogleAuthProvider.credentialFromResult(result);
  //       // console.log("cred"+credential)
  //       // const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log("user", user)
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // };

  // const loginWithGoogle=()=>{
  //   const auth=getAuth(app);
  //   signInWithPopup(auth,new GoogleAuthProvider());
  // }

  // const logingit = async () => {
  //   try {
  //     await signInWithPopup(auth, new GithubAuthProvider());
  //     // goto("/");
  //   } catch (error) {
  //     console.error("GitHub login error:", error);
  //   }
  // };

</script>

<div class="login">
  <div class="card">
    <div class="card-body login-form">
      <h5 class="card-title">{title}</h5>
      <form on:submit|preventDefault={login}>
        <div class="mb-3">
          <label for="emailInput" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            placeholder="Email Address"
          />
          {#if title != "Login"}
            <div id="emailHelp" class="form-text">
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
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      {#if title == "Login"}
        <button type="button" class="border px-3 py-1" on:click|preventDefault={logingoogle}
          >Login with Google</button
        >

        <button type="button" class="border px-3 py-1" on:click={loginWithGithub}
          >Login with GitHub</button
        >
        <p class="float-end mt-3">
          Not a user? <a href="/signup" class="card-link">Sign Up</a>
        </p>
      {:else}
        <a href="/login" class="card-link">Login</a>
      {/if}
    </div>
  </div>
</div>
