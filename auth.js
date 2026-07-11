import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: fullName
      });

      await setDoc(doc(db, "users", userCredential.user.uid), {
        fullName,
        email,
        role: "student",
        createdAt: serverTimestamp()
      });

      alert("Account created successfully!");

      window.location.href = "student-lecture-page.html";

    } catch (error) {
      alert(error.message);
    }
  });
}