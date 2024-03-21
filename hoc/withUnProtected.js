import { useUser } from "../context/user";
import { useRouter } from "next/navigation";

// nah fungsi yang ini kebalikan dari withProtected , kalau yang ini adalah jka dia sudah login / uid nya ada 
// maka redirect langsung ke halamaan dashboard 

export default function withUnProtected(Pages) {
  return (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;

    if (uid) {
      router.push('/dashboard');
      return <></>;
    }

    return <Pages {...props} />;
  };
}

