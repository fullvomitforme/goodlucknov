import Image from "next/image";

export default function Home() {
	return (
		<div className='justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)] text-center'>
			<main className='flex flex-col justify-center items-center gap-8 row-start-2'>
				<Image src={'/nova.svg'} alt='BEE' width={300} height={200} />
				<p className='text-[#FE019A] text-sm text-center'>
					semangat today!! tonss of luckk, itss going to be fun for suree! may
					keep your heads up for your first day menjadi diva depok, lock in and
					own it!!
				</p>
			</main>
		</div>
	);
}
