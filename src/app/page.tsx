export default function Home() {
  return(
    <section className="h-svh w-svw bg-gray-950 flex flex-col gap-3 justify-center items-center">
      <div className="flex gap-3">
        <div className="h-[200px] w-[250px] bg-red-600 font-bold text-xl text-white text-center content-center">1</div>
        <div className="h-[200px] w-[250px] bg-red-700 font-bold text-xl text-white text-center content-center">2</div>
        <div className="h-[200px] w-[250px] bg-red-800 font-bold text-xl text-white text-center content-center">3</div>
      </div>
      <div className="flex gap-4">
        <div className="h-[200px] w-[250px] bg-blue-600 font-bold text-xl text-white text-center content-center">1</div>
        <div className="h-[200px] w-[250px] bg-blue-800 font-bold text-xl text-white text-center content-center">2</div>
      </div>
    </section>
  )
}