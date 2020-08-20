import Link from 'next/link'

const NavBar = () => {

    return <nav style={{ position: 'fixed', width: '378', height: '68', left: '50vw', marginLeft: '-189px', marginTop: '0px' }}>
        <Link href="/"><button className="offset">home</button></Link>
        <Link href="/resume" ><button className="offset">resume</button></Link>
        <Link href="/blog" ><button className="offset">blog</button></Link>
    </nav>

}
export default NavBar
