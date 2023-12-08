export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-50 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-20">
      </div>

      <div className="grid justify-items-center grid-cols-4 grid-rows-6">
        <div className="col-span-4 row-span-1 bg-orange-500">User Name</div>
        <div className="col-span-4 row-span-3 bg-blue-500 rounded-lg">
          <img className="h-auto max-w-lg" src={'/assets/defaultProfile.png'} alt="image of user"/>
        </div>
        <div className="col-span-2 row-span-2 bg-green-500">Energy Level</div>
        <div className="col-span-2 row-span-2 bg-green-500">Prompt</div>
      </div>

    
    </main>
  );
}