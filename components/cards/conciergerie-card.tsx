import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
const ConciergerieCard = () => {
  return (
    <Card
      className="dark:gradiant-bg relative rounded-[20px] border-none dark:bg-custom-radial dark:shadow-custom bg-custom-radial-light"
    >
      <div className="w-full space-y-6 p-6">
        <h4 className="w-full text-center font-poppins text-base font-semibold dark:text-white  text-lightHeading lg:text-xl">
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
