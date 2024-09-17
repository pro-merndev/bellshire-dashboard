import UserAuthForm from '@/components/forms/user-auth-form';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Login | Bellshire Mansory'
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center bg-background">
      <div className="flex h-full items-center p-4 text-white lg:p-8">
        <div
          className="mx-auto box-border flex w-full flex-col justify-center space-y-6 border-2 p-10 sm:w-[450px]"
          style={{
            borderImageSource:
              'linear-gradient(104.59deg, rgba(255, 255, 255, 0.1) 0.76%, rgba(255, 255, 255, 0.0256139) 32.78%, rgba(255, 255, 255, 0.0735087) 69.11%, rgba(255, 255, 255, 0.007) 99%)',
            borderImageSlice: 1,
            background:
              'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
          }}
        >
          <div className="flex items-center gap-x-2">
            <Image
              src="/white-logo.svg"
              width={40}
              height={40}
              alt="white-logo"
            />
            <h1 className="text-xl font-medium tracking-tight text-[#D1D1D1]">
              Bellshire Mansory
            </h1>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
