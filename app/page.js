'use client'; // Ensure this component is a Client Component

import { GlobeDemo } from './github-globe';
import { SparklesPreview } from './titlei';
import { WavyBackgroundDemo } from './wavy';
import { Button } from "@nextui-org/button";
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const router = useRouter(); 


  const handleButtonClick = () => {
    router.push('/info'); 
  };

  return (
    <div>
      <WavyBackgroundDemo />
      <SparklesPreview />
      <GlobeDemo />
      <div className='grid justify-items-center bg-black'>
        <Button color="primary" onClick={handleButtonClick}>
          Fill Form
        </Button>
      </div>
    </div>
  );
}