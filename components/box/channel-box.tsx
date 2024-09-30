import React from 'react';
import { LiaPlusSolid } from 'react-icons/lia';
import { IoSettingsSharp } from 'react-icons/io5';

const Channel = ({ title }: { title: string }) => (
  <div className="group flex w-full cursor-pointer justify-between rounded-lg p-2 transition-all hover:bg-custom-radial">
    <p className="font-poppins text-[#8B8B8B] 2xl:text-base text-xs">#{title}</p>
    <IoSettingsSharp
      className="opacity-0 transition-all group-hover:opacity-100 2xl:h-5 2xl:w-5 h-4 w-4 dark:fill-[#565656] fill-[#4B4B4B]"
    />
  </div>
);

const Channels = ({ title }: { title: string }) => (
  <div className="space-y-w 2xl:space-y-4 p-2 2xl:p-4">
    <div className="flex h-full w-full justify-between">
      <h5 className="font-poppins font-medium dark:text-[#747474] text-lightHeading text-sm 2xl:text-base">{title}</h5>
      <LiaPlusSolid size={20} className="cursor-pointer dark:fill-[#747474] fill-lightHeading" />
    </div>
    <div className="2xl:space-y-3 lg:space-y-0">
      <Channel title="Général chat" />
      <Channel title="Informations" />
      <Channel title="Analyses traditionnel" />
      <Channel title="Analyses cryptos" />
      <Channel title="Networking" />
      <Channel title="Voyages" />
    </div>
  </div>
);

const ChannelBox = () => {
  return (
    <div className=" h-[calc(100vh-10rem)] w-full 2xl:basis-[20%] basis-[25%] rounded-2xl dark:border-2 dark:border-[#313131] bg-custom-radial-light dark:bg-none 2xl:p-4 p-2">
      <Channels title="Channel" />
      <Channels title="Test" />
    </div>
  );
};

export default ChannelBox;
