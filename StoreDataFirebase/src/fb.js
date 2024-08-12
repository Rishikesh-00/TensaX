// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRARy47W1J7w9tL5A6Fo6EBL4v-RRSQgc",
  authDomain: "sveltekitauth-40280.firebaseapp.com",
  projectId: "sveltekitauth-40280",
  storageBucket: "sveltekitauth-40280.appspot.com",
  messagingSenderId: "92197554638",
  appId: "1:92197554638:web:0a2fa8ec2c55f140eec39f",
  measurementId: "G-431HCPW15Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Initialize storage
const storageRef = ref(storage); // Create a reference to the storage

export function uploadimage() {
  const file = document.querySelector("#photo").files[0];

  if (!file) {
    alert("No file selected");
    return;
  }

  const name = new Date().toISOString() + "-" + file.name;
  const fileRef = ref(storage, name); // Use the storage reference

  const uploadTask = uploadBytesResumable(fileRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    },
    (error) => {
      // Handle unsuccessful uploads
      console.error("Upload failed:", error);
    },
    () => {
      // Handle successful uploads on complete
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        alert("Image upload successful");
        console.log(downloadURL)
        localStorage.setItem("uploadedImageUrl", downloadURL);
        // const image = document.querySelector("#image");
        // image.src = downloadURL;
      });
    }
  );
}

// Export Firebase services
export const auth = getAuth(app);
export { storage }; // Export the storage instance