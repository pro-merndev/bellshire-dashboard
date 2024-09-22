import React from 'react';
import { LiaPlusSolid } from 'react-icons/lia';
import { IoSettingsSharp } from 'react-icons/io5';

const Channel = ({ title }: { title: string }) => (
  <div className="group flex w-full cursor-pointer justify-between rounded-lg p-2 transition-all hover:bg-custom-radial">
    <p className="font-poppins text-[#8B8B8B]">#{title}</p>
    <IoSettingsSharp
      size={20}
      color="#565656"
      className="opacity-0 transition-all group-hover:opacity-100"
    />
  </div>
);

const Channels = ({ title }: { title: string }) => (
  <div className="space-y-4 p-4">
    <div className="flex h-full w-full justify-between">
      <h5 className="font-poppins font-medium text-[#747474]">{title}</h5>
      <LiaPlusSolid size={20} color="#747474" className='cursor-pointer'/>
    </div>
    <div className="space-y-3">
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
    <div className="h-[calc(100vh - 40rem)] mt-10 h-screen w-full basis-[20%] rounded-2xl border-2 border-[#313131] p-4">
      <Channels title="Channel" />
      <Channels title="Test" />
    </div>
  );
};

export default ChannelBox;
