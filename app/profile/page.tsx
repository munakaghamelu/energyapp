import Image from 'next/image';
import prisma from '@/lib/prisma';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-50 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-20">
      </div>

      <div className="flex h-50 shrink-0 items-end rounded-lg p-4 md:h-20 text-center align-middle">
        <h1>Username</h1>
      </div>

      <div className="bg-blue-500 rounded-lg">
          <Image 
            src={'/assets/defaultProfile.png'} 
            className="h-auto max-w-lg"
            width={28}
            height={28}
            alt="image of user"/>
      </div>

      <div className="bg-green-500 rounded-lg">
        Energy Level
        </div>
      
      <div className="bg-red-500 rounded-lg">
        Prompt
      </div>
    </main>
  );
}