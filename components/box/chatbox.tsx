import { Input } from '@/components/ui/input';
import { RiLinksFill } from 'react-icons/ri';

const Chatbox = () => {
  return (
    <div className="flex h-[calc(100vh-7rem)] w-full basis-[75%] 2xl:basis-[80%] items-end rounded-2xl border-2 border-[#313131] p-4">
      <div className="relative w-full">
        <Input
          className="z-10 h-auto w-full rounded-xl border-none py-3 font-poppins text-sm 2xl:text-base text-[#8B8B8B]"
          style={{
            background: 'linear-gradient(90deg, #FFFFFF12 0%, #D9D9D900 100%)'
          }}
          placeholder="Entrer en contact avec notre service de conciergerie..."
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer">
          <RiLinksFill className="text-[#8B8B8B] 2xl:w-6 2xl:h-6 w-5 h-5 " />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
