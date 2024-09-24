import React from 'react';
import { LiaPlusSolid } from 'react-icons/lia';
import { IoSettingsSharp } from 'react-icons/io5';

const Channel = ({ title }: { title: string }) => (
  <div className="group flex w-full cursor-pointer justify-between rounded-lg p-2 transition-all hover:bg-custom-radial">
    <p className="font-poppins text-[#8B8B8B] 2xl:text-base text-xs">#{title}</p>
    <IoSettingsSharp
      color="#565656"
      className="opacity-0 transition-all group-hover:opacity-100 2xl:h-5 2xl:w-5 h-4 w-4"
    />
  </div>
);

const Channels = ({ title }: { title: string }) => (
  <div className="space-y-2 2xl:space-y-4 p-2 2xl:p-4">
    <div className="flex h-full w-full justify-between">
      <h5 className="font-poppins font-medium text-[#747474] text-sm 2xl:text-base">{title}</h5>
      <LiaPlusSolid size={20} color="#747474" className="cursor-pointer" />
    </div>
    <div className="2xl:space-y-3 space-y-1">
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
    <div className=" h-[calc(100vh-7rem)] w-full 2xl:basis-[20%] basis-[25%] rounded-2xl border-2 border-[#313131] 2xl:p-4 p-2">
      <Channels title="Channel" />
      <Channels title="Test" />
    </div>
  );
};

export default ChannelBox;
