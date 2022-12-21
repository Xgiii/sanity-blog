import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            className='w-[50px] h-[50px] rounded-full object-cover object-top'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Michael_Jordan_in_2014.jpg/168px-Michael_Jordan_in_2014.jpg'
            width={50}
            height={50}
            alt='logo'
          />
        </Link>
        <h1>Michael Jordan Blog</h1>
      </div>
    </header>
  );
}

export default Header;
