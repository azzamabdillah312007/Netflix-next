import { useUser } from "../context/user";
import { useRouter } from "next/navigation";

// parameter pages di ambil dari halaman halaman mana saja yang mau di authentikasi atau harus login dulu baru bisa di lihat 
// content dari halaman tersebut , jika belum login saat mau mengakses halaman contohnya halaman dashboard tidak akan bisa 
// karna jika uid nya belum ada maka dia akan di redirect ke halaman /login

export default function withProtected(Pages) {
  return (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;

    if (!uid) {
      router.replace('/login');
      return <></>;
    }

    return <Pages {...props} />;
  };
}


