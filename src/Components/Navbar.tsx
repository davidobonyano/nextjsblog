import Link from 'next/link';
export default function Navbar(){
    return(
        <div className='bg-gray-800 text-white py-4 '>
            <div className='relative'>
                <h1 className='text-2xl font-bold absolute'>My Blog</h1>
            </div>
           
            <nav className="flex justify-end space-x-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/author" className="hover:underline">Author</Link>
                <Link href="/blog" className="hover:underline">Blog</Link>
            </nav>
        </div>
    )
}