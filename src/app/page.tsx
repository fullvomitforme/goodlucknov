'use client';

import Image from 'next/image';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

export default function Home() {
	const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		setWindowSize({ width: window.innerWidth, height: window.innerHeight });
	}, []);

	return (
		<div className='justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)] text-center'>
			<Confetti
				width={windowSize.width}
				height={windowSize.height}
				numberOfPieces={200}
				recycle={false}
			/>

			<main className='flex flex-col justify-center items-center gap-8 row-start-2'>
				<Image src={'/nova.svg'} alt='BEE' width={300} height={200} />
				<div className='flex flex-col gap-3'>
					<p className='font-[family-name:var(--font-geist-mono)] text-[#FE019A] text-sm text-center'>
						semangat today!! tonss of luckk, itss going to be fun for suree!
						keep your heads up for your first day menjadi diva depok, lock in
						and own it!! remberr, you&apos;re capable of more than you know, and
						this is just the beginning of something amazing. believee in
						yourself, embrace the experience, and make every moment count!
					</p>
					<p className='font-[family-name:var(--font-geist-mono)] text-[#FE019A] text-sm text-center'>
						hope your day is kind to you! hope the sun di depok feels gentle on
						your skin, warmer than usual, hopeee the air feels softer, and the
						world a little lighter. let you live in the sacred space youve
						curved out for yourself. but if only you knew, in the quiet corners
						of my mind, ill always be wishing you well and even if u never feel
						it, ill keep sending u every ounce of light i can, hoping it reaches
						u when u need it most!!! today is ur big dayy!! so tonss of tonss of
						luckkk!!!!
					</p>
				</div>
			</main>
		</div>
	);
}
