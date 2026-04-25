import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function AuthCallback() {
  useEffect(() => {
    const handleAuth = async () => {
      await supabase.auth.getSession();

      window.location.href = "/contact";
    };

    handleAuth();
  }, []);

  return <p>Logging you in...</p>;
}