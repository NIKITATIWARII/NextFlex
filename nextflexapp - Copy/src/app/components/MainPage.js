import React from 'react';
import mainStyles from "@/app/styles/headersection.module.css"
import style from "@/app/styles/common.module.css"
import Link from 'next/link';
import Image from 'next/image';

const MainPage = ({title , ImageUrl}) => {
  return (
    <div>
      <main className={mainStyles.main_section}>
        <div className={style.container}>
         <div className={style.grid_two_section}>
         <div className={mainStyles.hero_content}>
            <h1>{title}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Link href="/movie">
            <button>
                Explore Movies
            </button>
          </Link>
         </div>
         <div className={mainStyles.hero_image}>
         <Image src={ImageUrl} alt='watching nextflix'
          width={500}
          height={40}
         />
         </div>
         </div>
        </div>

      </main>
    </div>
  );
}

export default MainPage;
