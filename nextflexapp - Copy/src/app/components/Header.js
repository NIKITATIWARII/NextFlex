import styles from "@/app/styles/navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
 

const Header = () => {
  return (
    <header>
      <div className={styles.main_header}>
      <div className={styles.navbar_brand}>
        
        <Link href="/" className={styles.link}>
         <Image src="/logo.jpg" alt="my logo image"
         height={90}
         width={150}
                  />
         <h2>NextFlix</h2>
        </Link>
        </div>
        <Nav/>

      </div>
    </header>
  );
}

export default Header;
