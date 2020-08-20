import NavBar from '../components/NavBar'

// From folder, import all markdown files into array of html objects ( need to figure out whether i should *run markdown on build* or find a way to convert in js)

const blog = () =>
    <>
        <NavBar />
        <div style={{paddingTop: '200px'}}>
            <header>
                <h1>blog</h1>
            </header>
        </div>
    </>
// Map through markdown files and print each one as an entry
// TODO get meta data for blog information
export default blog
