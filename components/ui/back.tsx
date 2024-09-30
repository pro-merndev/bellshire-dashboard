'use client';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa6';

const Back = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="flex items-center gap-x-3">
      <div className="rounded-lg bg-white p-[5px]">
        <FaChevronLeft size={16} color="#000" />
      </div>
      <p className="font-poppins">Fermer preview</p>
    </button>
  );
};

export default Back;
