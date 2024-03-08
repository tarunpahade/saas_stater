import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="flex justify-between w-[90%]">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight mb-5 ml-4 ">Enter EmTries</h1>
    </div>
    <div className=" flex justify-start max-w-screen-lg px-4   overflow-y-auto  align-middle">
            <div   className="w-[220px] mx-5 flex items-center justify-center rounded-lg border border-stone-200 pb-10 shadow-md transition-all hover:shadow-xl dark:border-stone-700 dark:hover:border-white">
                <div className="flex flex-col">
                    <div className="flex flex-col overflow-hidden rounded-lg">
                        <div className="relative h-24 overflow-hidden">
                        </div>
                        <div className="border-t border-stone-200 p-4 dark:border-stone-700">
                            <h3 className="my-0 truncate font-cal text-xl font-bold tracking-wide dark:text-white">
                  hII
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        

    </div>
</div>

  
  
    );
}
