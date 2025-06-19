import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AuthForm from "./AuthForm";
import { ArrowLeft, Lock, Mail, User } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex relative items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <button
        onClick={() => navigate({ to: "/" })}
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        aria-label="Go back"
      >
        <ArrowLeft size={24} className="text-gray-600 dark:text-gray-300" />
      </button>
      <div className="w-full max-w-md lg:w-[500px] lg:h-[500px] bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {isSignUp ? (
            <motion.div
              key="register"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <AuthForm
                title="Register"
                inputs={[
                  { icon: <User />, type: "text", placeholder: "Username" },
                  { icon: <Mail />, type: "email", placeholder: "Email" },
                  { icon: <Lock />, type: "password", placeholder: "Password" },
                ]}
                buttonText="Register"
                bottomText="Already have an account?"
                switchText="Login"
                onSwitch={() => setIsSignUp(false)}
                isSignUp={isSignUp}
              />
            </motion.div>
          ) : (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <AuthForm
                title="Login"
                inputs={[
                  { icon: <User />, type: "text", placeholder: "Username" },
                  { icon: <Lock />, type: "password", placeholder: "Password" },
                ]}
                buttonText="Login"
                bottomText="Don't have an account?"
                switchText="Register"
                onSwitch={() => setIsSignUp(true)}
                isSignUp={isSignUp}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthPage;
