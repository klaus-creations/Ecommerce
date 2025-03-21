/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuthStore } from "@/features/auth";
import { logoutRequest } from "@/features/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function LogoutComponent() {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      toast("User logged out successfully ");
      logout();
      queryClient.invalidateQueries({ queryKey: ["session"] });
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
      toast(err.message);
    },
  });

  const handleLogout = function (e: any) {
    e.preventDefault();
    mutate();
  };
  return (
    <form onSubmit={handleLogout}>
      <Button
        disabled={isLoading}
        className="bg-orange-500 hover:bg-orange-500/[.7] text-gray-100"
      >
        Logout
      </Button>
    </form>
  );
}
