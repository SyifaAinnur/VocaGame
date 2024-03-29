'use client';

import { LoginForm } from '@/component/molecules/LoginForm';
import SwiperComponent from '@/component/molecules/Swiper';

export default function page() {

	return (
		<main>
			<div className="w-full h-auto flex justify-center items-center">
				<div className="w-[60%] min-h-screen bg-[#131167] dark:bg-[#D38122] mx-auto justify-center items-center hidden lg:flex">
					<SwiperComponent />
				</div>
				<div className="w-full min-h-screen bg-white flex flex-col mx-auto justify-start items-center">
					<LoginForm />
				</div>
			</div>
		</main>
	);
}
