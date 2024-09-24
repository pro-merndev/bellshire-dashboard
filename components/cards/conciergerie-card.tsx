import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
const ConciergerieCard = () => {
  return (
    <Card
      className="gradiant-bg relative rounded-[20px] border-none bg-custom-radial shadow-custom"
      style={{
        background:
          'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
      }}
    >
      <div className="w-full space-y-6 p-6">
        <h4 className="w-full text-center font-poppins text-base font-semibold text-white lg:text-xl">
          LEX AGENCY <br />
          (EXPATRIATION)
        </h4>
        <div className="space-y-4">
          <Button
            className="h-auto w-full rounded-xl py-2 font-roboto text-sm text-white lg:py-3 lg:text-base"
            variant={'default'}
          >
            Découvrir
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ConciergerieCard;
