export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-50 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-20">
      </div>
      <div className="overflow-auto ...">
        <div className="flex h-50 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-20">
        </div>

        <div className="flex h-50 shrink-0 items-end rounded-lg bg-green-500 p-4 md:h-20">
        </div>
      </div>
    </main>
  );
}