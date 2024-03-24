import Image from 'next/image';
import Logo from '@/public/logo.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#1F1827] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={300} />
        </div>

        {/* Navigation Buttons */}
        <div>
          <Link href="/link1">
            <button className="hover:text-[#BF45F4] text-white font-light py-2 px-4 rounded mr-2">
              Github
            </button>
          </Link>
          <Link href="/link2">
            <button className="hover:text-[#BF45F4] text-white font-light py-2 px-4 rounded">
              {/* <Connector/> */} button
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
