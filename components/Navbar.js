import { Navbar } from "../styledComponents/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";

const MyNavbar = () => {
  const router = useRouter();
  return (
    <Navbar>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : null}>Home</a>
      </Link>
      <Link href="/movies/static">
        <a className={router.pathname === "/movies/static" ? "active" : null}>
          Static
        </a>
      </Link>
      <Link href="/movies/dynamic">
        <a className={router.pathname === "/movies/dynamic" ? "active" : null}>
          Dynamic
        </a>
      </Link>
      <Link href="/movies/isr">
        <a className={router.pathname === "/movies/isr" ? "active" : null}>
          Isr
        </a>
      </Link>
    </Navbar>
  );
};
export default MyNavbar;
