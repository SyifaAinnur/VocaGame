'use client';

import Image from 'next/image';
import { useRouter } from 'next/router';

const Login = () => {
    // const router = useRouter();


    <section className='w-full min-h-dvh flex items-center justify-between bg-primary-600'>
			<div className='lg:max-w-lg xl:max-w-3xl min-h-dvh hidden lg:flex flex-col items-center justify-center px-[75px] gap-20'>
				<Image
					src='https://ik.imagekit.io/siff/logo.png?updatedAt=1711595763053'
					width={250}
					height={250}
					alt='Logo'
					priority
				/>

				<p className='text-white'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci rerum laudantium iste minus itaque maiores.
					Beatae nam quae in at repellendus sunt ad ex quam, ipsum officiis, doloremque vitae eos.
				</p>
			</div>

			<div className='w-full min-h-dvh flex flex-col justify-center px-4 sm:px-6 md:px-12 xl:px-20 bg-white'>
				<article className='mb-10'>
					<h1 className='text-[44px] font-extrabold tracking-tight text-heading md:text-[56px] lg:text-[64px]'>
						Silakan Login
					</h1>

					<p className='mt-2 text-base text-gray-600'>Masukkan Username dan Password anda untuk masuk</p>
				</article>

				
			</div>
		</section>
}

export default Login