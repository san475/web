import React, { useState, useEffect, CSSProperties } from 'react';

const Parallax = () => {
	const [state, setState] = useState(() => { return { offset: 0 }})



	useEffect(() => {
		window.addEventListener('scroll', () => {
			setState({ offset: window.pageYOffset })
			return 0//() => {
				//window.removeEventListener('scroll', handleScroll)
				//console.log('removed event listener')
			//}
		})
	}, [state.offset])
	

	const sectionStyle: CSSProperties = {
		position: 'absolute',
		left: 0,
		height: '105vh',
		width: '100vw',
		//backgroundSize: 'fill',
		overflow: 'hidden',
		zIndex: -1,
		backgroundAttachment: 'fixed',
		opacity: 0.9

	} 

	return <header className='parallax-bg'>
		<section
			className='parallax-s1'
			style={{ ...sectionStyle, background: 'url(https://picsum.photos/2500/1600)',  top: `${((0 + state.offset) - (state.offset * .25)) * .8}px` }}
		>
		</section>
		<section
			className='parallax-s2'
			style={{ ...sectionStyle, background: 'url(https://picsum.photos/2501/1600)',  top: `${((0 + state.offset) - (state.offset * .40)) * .8}px` }}
		>
		</section>
		<section
			className='parallax-s3'
			style={{ ...sectionStyle, background: 'url(https://picsum.photos/2502/1600)',  top: `${((0 + state.offset) - (state.offset * .57)) * .8}px` }}
		>
		</section>
		<section
			className='parallax-s4'
			style={{ ...sectionStyle, background: 'url(https://picsum.photos/2503/1600)',  top: `${((0 + state.offset) - (state.offset * .72)) * .8}px` }}
		>
		</section>
		<section
			className='parallax-s5'
			style={{ ...sectionStyle, background: 'url(https://picsum.photos/2504/1600)',  top: `${((0 + state.offset) - (state.offset * .85)) * .8}px` }}
		>
		</section>

	</header>

}

export default Parallax
