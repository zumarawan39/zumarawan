import Image from 'next/image';
import React from 'react';

import Logo from '@/assets/images/intail-logo.png';
import { Link } from '@/libs/i18nNavigation';

const AppLogo = () => {
  return (
    <Link href="/" className="hover:cursor-pointer">
      <div className="logo">
        <Image src={Logo} alt="Best Connect Logo" width={70} />
      </div>
    </Link>
  );
};

export default AppLogo;
