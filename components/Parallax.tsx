import React, { useState, useEffect, CSSProperties } from 'react';

const Parallax = () => {
	const [state, setState] = useState(() => { return { offset: 0 }})


	const handleScroll = () => {
			setState({ offset: window.pageYOffset })
	}

	useEffect(() => {
		window.addEventListener('scroll', () => {
			handleScroll()
			return () => {
				window.removeEventListener('scroll', handleScroll)
				console.log('removed event listener')
			}
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
	} 

	return <header className='parallax-bg'>
		<section
			className='parallax-s1'
			style={{ ...sectionStyle, background: 'url(https://picsum.photos/2500/1600)',  top: `${(0 + state.offset) * .25}px` }}
		>
		</section>
		<section
			className='parallax-s2'
			style={{ ...sectionStyle, background: 'url(https://picsum.photos/2501/1600)',  top: `${(0 - state.offset) * .35}px` }}
		>
		</section>
		<section
			className='parallax-s3'
			style={{ ...sectionStyle, background: 'url(https://picsum.photos/2502/1600)',  top: `${(0 - state.offset) * .55}px` }}
		>
		</section>
		<section
			className='parallax-s4'
			style={{ ...sectionStyle, background: 'url(https://picsum.photos/2503/1600)',  top: `${(0 - state.offset) * .75}px` }}
		>
		</section>
		<section
			className='parallax-s5'
			style={{ ...sectionStyle, background: 'url(https://picsum.photos/2504/1600)',  top: `${(0 - state.offset) * .85}px` }}
		>
		</section>

	</header>

}

export default Parallax
