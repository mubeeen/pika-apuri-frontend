import { useAppDispatch } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { resetPasswordAsync } from "@/redux/slices";

const ResetPassword: React.FC = ({}) => {
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState<string>("");

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (typeof token === "string") {
      setToken(token);
    }
  }, [searchParams]);

  const onResetPress = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(resetPasswordAsync({ newPassword, token }));
  };

  return (
    <div>
      <form onSubmit={onResetPress}>
        <label>Enter New Password: </label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
