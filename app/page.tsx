import { Icon } from "@iconify/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px]  min-h-screen p-6 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col">
				<div className="p-3 pb-2 space-y-3 bg-white/70 border border-[#EBEDED] backdrop-blur-[25px] rounded-[22px] showdow-[rgba(100_100_111_0.2) 0px_7px_29px_0px]">
					<p className="text-[10px] ml-1.5 uppercase font-semibold tracking-wider">
						Most popular categories
					</p>
					<ul className="grid grid-cols-3 gap-2">
						<li>
							<div className="flex flex-col items-center justify-between p-3 aspect-square bg-white/60 border border-[#EBEDED] backdrop-blur-[25px] shadow-[0px_12px_30px_0px rgba(106, 106, 106, 0.06)] rounded-[16px]">
								<Image
									src="/category/taxi.png"
									alt="Taxi"
									height={48}
									width={48}
									className="shrink-0"
								/>
								<p className="text-xs line-clamp-1">Taxi</p>
							</div>
						</li>
						<li>
							<div className="flex flex-col items-center justify-between p-3 aspect-square bg-white/60 border border-[#EBEDED] backdrop-blur-[25px] shadow-[0px_12px_30px_0px rgba(106, 106, 106, 0.06)] rounded-[16px]">
								<Image
									src="/category/truck.png"
									alt="Taxi"
									height={48}
									width={48}
									className="shrink-0"
								/>
								<p className="text-xs line-clamp-1">Transport</p>
							</div>
						</li>
						<li>
							<div className="flex flex-col items-center justify-between p-3 aspect-square bg-white/60 border border-[#EBEDED] backdrop-blur-[25px] shadow-[0px_12px_30px_0px rgba(106, 106, 106, 0.06)] rounded-[16px]">
								<Image
									src="/category/lawn_mower.png"
									alt="Taxi"
									height={48}
									width={48}
									className="shrink-0"
								/>
								<p className="text-xs line-clamp-1">Lawn Mowing</p>
							</div>
						</li>
						{/* <li>
							<div className="flex flex-col items-center justify-between p-3 aspect-square bg-white/60 border border-[#EBEDED] backdrop-blur-[25px] shadow-[0px_12px_30px_0px rgba(106, 106, 106, 0.06)] rounded-[16px]">
								<Image
									src="/category/electrician.png"
									alt="Taxi"
									height={48}
									width={48}
									className="shrink-0"
								/>
								<p className="text-xs line-clamp-1">Electrician</p>
							</div>
						</li> */}
					</ul>
					<div className="flex items-center justify-between">
						<Button
							aria-label="Previous slide"
							className="rounded-full"
							size="icon"
							variant="ghost"
						>
							<Icon icon="fluent:chevron-left-24-filled" className="h-4 w-4" />
						</Button>
						<div className="py-1 px-1.5 border border-[#EBEDED] bg-white/80 backdrop-blur-2xl rounded-full flex items-center gap-1">
							<div className="h-1.5 w-1.5 bg-black/90 rounded-full" />
							<div className="h-1.5 w-1.5 bg-black/30 rounded-full" />
							<div className="h-1.5 w-1.5 bg-black/30 rounded-full" />
						</div>
						<Button
							aria-label="Next slide"
							className="rounded-full"
							size="icon"
							variant="ghost"
						>
							<Icon icon="fluent:chevron-right-24-filled" className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
