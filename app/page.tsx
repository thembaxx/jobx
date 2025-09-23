import { Icon } from "@iconify/react";
import Image from "next/image";
import SearchBar from "@/components/shared/search-bar";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px]  min-h-screen py-6 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col space-y-6">
				<div className="px-6">
					<SearchBar />
				</div>
				<div className="px-6">
					<div className="relative bg-white/80 border border-[#EBEDED] backdrop-blur-[25px] rounded-[20px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
						<div className="absolute bottom-0 -right-8">
							<Image
								src="/Adobe Express - file (3).png"
								alt=""
								height={164}
								width={164}
							/>
						</div>
						<div className="p-4 space-y-4">
							<h1 className="font-black text-[24px] leading-7 text-[#3C3C3C]">
								Welcome to JobX
							</h1>
							<div className="flex jusstify-start">
								<div className="text-white text-xs font-bold uppercase tracking-[3%] h-6 px-2.5 leading-0 bg-[#FC2215] rounded-tl-2xl rounded-br-2xl flex items-center">
									Specials
								</div>
							</div>
							<div className="flex">
								<p className="max-w-[224px] text-sm">
									Use code <b className="font-semibold">BETAAPP</b> and get{" "}
									<span className="font-semibold">30% off</span> any orders from
									our partners
								</p>
							</div>
							<p className="text-xs text-[#6a6a6a">
								Valid for the first{" "}
								<span className="font-semibold text-[#3c3c3c]">1,000</span>{" "}
								customers
							</p>
						</div>
					</div>
				</div>
				<div className="px-6">
					<div className="p-3 pb-2 space-y-3 bg-white/60 border border-[#EBEDED] backdrop-blur-[25px] rounded-[22px] showdow-[0px_7px_29px_0px rgba(100,100,111,0.2)]">
						<p className="text-[10px] ml-1.5 uppercase font-semibold tracking-wider">
							Most popular categories
						</p>
						<ul className="grid grid-cols-3 gap-2">
							<li>
								<div className="flex flex-col items-center justify-between p-3 space-y-2 aspect-square shadow-[0px_12px_30px_0px rgba(106, 106, 106, 0.06)] rounded-[16px]">
									<Image
										src="/category/taxi.png"
										alt="Taxi"
										height={48}
										width={48}
										className="shrink-0"
									/>
									<p className="text-xs text-center">Taxi</p>
								</div>
							</li>
							<li>
								<div className="flex flex-col items-center justify-between p-3 space-y-2 aspect-square shadow-[0px_12px_30px_0px rgba(106, 106, 106, 0.06)] rounded-[16px]">
									<Image
										src="/category/truck.png"
										alt="Taxi"
										height={48}
										width={48}
										className="shrink-0"
									/>
									<p className="text-xs text-center">Transport</p>
								</div>
							</li>
							<li>
								<div className="flex flex-col items-center justify-between p-3 space-y-2 aspect-square shadow-[0px_12px_30px_0px rgba(106, 106, 106, 0.06)] rounded-[16px]">
									<Image
										src="/category/lawn_mower.png"
										alt="Taxi"
										height={48}
										width={48}
										className="shrink-0"
									/>
									<p className="text-xs">Lawn Mowing</p>
								</div>
							</li>
							{/* <li>
							<div className="flex flex-col items-center justify-between p-3 aspect-square shadow-[0px_12px_30px_0px rgba(106, 106, 106, 0.06)] rounded-[16px]">
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
								className="rounded-full !text-[#6b6b6b]"
								size="icon"
								variant="ghost"
							>
								<Icon
									icon="fluent:chevron-left-24-filled"
									className="h-4 w-4"
								/>
							</Button>
							<div className="py-1 px-1.5 border border-[#EBEDED] bg-white/80 backdrop-blur-2xl rounded-full flex items-center gap-1">
								<div className="h-1.5 w-1.5 bg-black/90 rounded-full" />
								<div className="h-1.5 w-1.5 bg-black/30 rounded-full" />
								<div className="h-1.5 w-1.5 bg-black/30 rounded-full" />
							</div>
							<Button
								aria-label="Next slide"
								className="rounded-full text-[#6b6b6b]"
								size="icon"
								variant="ghost"
							>
								<Icon
									icon="fluent:chevron-right-24-filled"
									className="h-4 w-4"
								/>
							</Button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
