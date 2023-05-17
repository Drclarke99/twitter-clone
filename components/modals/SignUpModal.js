import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { setUser } from "@/redux/userSlice";

export default function SignUpModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;

      //handle redux actions
      dispatch(
        setUser({
          username: currentUser.email.split("@")[0],
          name: null,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: null,
        })
      );
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <button
        className="
                bg-white text-black
                w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]
                "
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[600px] bg-black text-white md:w-[560px]
        md:h-[600px] border border-gray-700 rounded-lg
        flex justify-center
        "
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <button
              className="bg-white text-black w-full font-bold text-lg
                p-2 rounded-md"
            >
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="mt-4 font-bold text-4xl">Create your Account</h1>
            <input
              type={"text"}
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700
                p-6"
              placeholder="Full Name"
            />
            <input
              type={"email"}
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700
                p-6"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type={"password"}
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700
                p-6"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="bg-white text-black w-full font-bold text-lg mt-8
                p-2 rounded-md"
              onClick={handleSignUp}
            >
              Create Account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
