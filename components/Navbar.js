import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between p-4 bg-white shadow-lg z-50">
      <div className="text-xl font-bold">My Portfolio</div>
      <div className="space-x-4">
        <Link href="#hero" passHref>
          <span className="hover:text-accent cursor-pointer">Home</span>
        </Link>
        <Link href="#projects" passHref>
          <span className="hover:text-accent cursor-pointer">Projects</span>
        </Link>
        <Link href="#contact" passHref>
          <span className="hover:text-accent cursor-pointer">Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
