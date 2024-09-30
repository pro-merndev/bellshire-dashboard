import { Input } from '@/components/ui/input';
import { RiLinksFill } from 'react-icons/ri';

const Chatbox = () => {
  return (
    <div className="flex h-[calc(100vh-10rem)] w-full basis-[75%] items-end rounded-2xl bg-custom-radial-light p-4 2xl:basis-[80%] dark:border-2 dark:border-[#313131] dark:bg-none">
      <div className="relative w-full">
        <Input
          className="bg-primary-input-light-radial z-10 h-auto w-full rounded-xl border-none py-3 font-poppins text-sm dark:text-sidebarNavlinkNormal text-[#4B4B4B] 2xl:text-base dark:bg-custom-radial"
          placeholder="Envoyez un message dans #Général chat"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer">
          <RiLinksFill className="h-5 w-5 dark:fill-sidebarNavlinkNormal fill-[#4B4B4B] 2xl:h-6 2xl:w-6 " />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
