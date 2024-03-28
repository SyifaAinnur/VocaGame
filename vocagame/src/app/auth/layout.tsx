import ChangeThemeSwitcher from '@/components/ChangeThemeSwitcher';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='relative h-full w-full'>
			<ChangeThemeSwitcher
			 className='absolute top-5 right-5 text-black' />
			{children}
		</main>
	);
};

export default AuthLayout;
