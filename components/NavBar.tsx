import Link from 'next/link'

const NavBar = () => {

    return <nav style={{ position: 'fixed', width: '500px', height: '65px', left: '50%', transform: 'translateX(-50%)', marginLeft: '0', marginTop: '0px'}}>

        <Link href="/"><button className="offset"><span>home</span></button></Link>
        <Link href="/resume" ><button className="offset"><span>resume</span></button></Link>
        <Link href="/blog" ><button className="offset"><span>blog</span></button></Link>
    </nav>

}
export default NavBar
