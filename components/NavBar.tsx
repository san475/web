import Link from 'next/link'

const NavBar = () => {

    return <nav>
        <Link href="/"><button className="offset">home</button></Link>
        <Link href="/resume" ><button className="offset">resume</button></Link>
        <Link href="/blog" ><button className="offset">blog</button></Link>
    </nav>

}
export default NavBar
