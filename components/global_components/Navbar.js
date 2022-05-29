import Link from 'next/link'
/* import resume from '../../public/documents/resume.pdf' */

export default function Navbar () {
    
    /* const myResume = resume */
    const toggleModal = function () {
        var modal = document.querySelector('.modal-box')
        var down = document.querySelector('.rotate1')
        var vert = document.querySelector('.rotate2')
        var up = document.querySelector('.rotate3')

        const activated = down.classList.contains('down')
        console.log(activated)
        
        if (!activated) {
            modal.classList.toggle('display')
            down.classList.toggle('down')
            vert.classList.toggle('vert')
            up.classList.toggle('up')

        }
        
        if (activated) {
            down.classList.toggle('close')
            vert.classList.toggle('close')
            up.classList.toggle('close')
            modal.classList.toggle('close')
        }

    }

    return (
    <div className="navs">
        <div className="top-nav pitch">
            <div className="logo-brand light">
                <Link href="/"><a  className="logo-text bright">M | R</a></Link>
            </div>
            <div className="nav-links-container">
                <Link  href="/"><a className="top-nav-link h-3 light">Home</a></Link>
                <Link  href="/about"><a className="top-nav-link h-3 light">About</a></Link>
                <Link  href="/projects"><a className="top-nav-link h-3 light">Projects</a></Link>
                <Link  href="/experience"><a className="top-nav-link h-3 light">Experience</a></Link>
                <Link  href="/contact"><a className="top-nav-link h-3 light">Contact</a></Link>
                {/* <Link className="top-nav-link h-2 light" href={myResume}  target='_blank' rel='noopener noreferrer'>Resume</Link> */}
            </div>
        </div>
        <div className="mobile-nav">
            <Link href="/" ><a className="logo-brand light"> M | R </a></Link>
            <div className="modal-overflow">
                <div className="modal-toggle-box" onClick={toggleModal}>
                    <div className="modal-toggle-line rotate1"></div>
                    <div className="modal-toggle-line rotate2"></div>
                    <div className="modal-toggle-line rotate3"></div>
                </div>
                <div className="modal-box">
                    <Link href="/"><a className="mobile-nav-link light">Home</a></Link>
                    <Link href="/about"><a className="mobile-nav-link light">About</a></Link>
                    <Link href="/projects"><a className="mobile-nav-link light">Projects</a></Link>
                    <Link href="/experience"><a className="mobile-nav-link light">Experience</a></Link>
                    <Link href="/contact"><a className="mobile-nav-link light">Contact</a></Link>
                    {/* <Link href={myResume} className="mobile-nav-link light" target='_blank' rel='noopener noreferrer' >Resume</Link> */}
                </div>
            </div>
        </div>
    </div>
    )
}