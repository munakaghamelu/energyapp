import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-52">
      </div>

      <div className="flex flex-col grow gap-6 shrink-0 justify-center text-center rounded-lg bg-gray-50 p-4 md:h-52">
        <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
          <strong>Welcome [Insert Username], please click here to submit form.</strong> 
        </p>
      </div>

      <div className="flex grow justify-center gap-6 p-4">
        <Link
          href="/form/create"
          className="flex items-center gap-5 self-start rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 md:text-base"
        >
          <span>Submit Form</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
        
      </div>
    </main>
  )
}
