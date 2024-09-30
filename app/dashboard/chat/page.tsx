import ChannelBox from '@/components/box/channel-box';
import Chatbox from '@/components/box/chatbox';
import PageContainer from '@/components/layout/page-container';
import Transition from '@/components/layout/transition';

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="pb-20">
        <Transition>
          <div className="flex gap-x-10">
            <ChannelBox />
            <Chatbox />
          </div>
        </Transition>
      </div>
    </PageContainer>
  );
}
