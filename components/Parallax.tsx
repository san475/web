import React, { useState, useEffect, CSSProperties } from 'react';
let sectionStyle: CSSProperties;
const Parallax = () => {
	const [state, setState] = useState(() => { return { offset: 0 }})

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setState({ offset: window.pageYOffset })
			return 0
		})
	}, [])
	
	const sectionStyle: CSSProperties = {
		position: 'absolute',
		left: 0,
		height: '105vh',
		width: '100vw',
		overflow: 'hidden',
		zIndex: -1,
		opacity: 1.0

	} 

	return <header className='parallax-bg'>
		<section
			className='parallax-s1'
			style={{ ...sectionStyle, marginLeft: '0px', background: 'url(DSC09815.jpg)', backgroundSize: 'cover',position: 'fixed', top: 0}}
		>
		</section>
		<section
			className='parallax-s2'
			style={{ ...sectionStyle, background: 'linear-gradient(rgb(105,105,105,.7), rgb(0,0,0,0))',  top: `${0}px` }}
		>
		</section>
	</header>

}

export default Parallax
