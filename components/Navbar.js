import { useRouter } from "next/router";
import { Navbar } from "../styledComponents/Navbar";

export default () => {
  const router = useRouter();
  return (
    <Navbar>
      <a onClick={() => router.pathname != "/" && router.push("/")}>Home</a>
    </Navbar>
  );
};
