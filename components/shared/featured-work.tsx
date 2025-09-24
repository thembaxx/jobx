import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const WorkItem = () => (
	<div className="p-3 bg-white/60 h-full border border-[#EBEDED] backdrop-blur-[25px]  rounded-[22px] showdow-[rgba(99, 99, 99, 0.2) 0px_2px_8px_0px)]">
		<div className="w-full aspect-video bg-gray-200 rounded-[16px]"></div>
		<div className="space-y-2">
			<h2 className="mt-3 font-medium text-lg">
				Window frame & windows Repair/Installation
			</h2>
			<p className="text-[#6c6c6c] text-[13px]">
				From <span className="font-semibold text-[#3c3c3c]">25.99</span> ZAR per
				hour
			</p>
		</div>
		<div className="flex items-center flex-wrap gap-3 mt-6">
			<div className="flex items-center space-x-1.5">
				<div className="w-5 h-5 rounded-full bg-gray-300">
					<Avatar className="h-full w-full">
						<AvatarImage src="" />
						<AvatarFallback className="text-[9px] bg-gray-300">
							CN
						</AvatarFallback>
					</Avatar>
				</div>
				<p className="text-sm text-[#6c6c6c]">Ervin Howell</p>
				<Icon
					icon="material-symbols:verified-rounded"
					className="text-blue-600 w-4 h-4"
				/>
			</div>
			<div className="flex items-center space-x-1.5">
				<Icon
					icon="material-symbols:kid-star"
					className="text-yellow-500 w-4 h-4"
				/>
				<p className="text-xs ">
					<span className="font-semibold">4.8</span>{" "}
					<span className="text-[#6c6c6c]">(256)</span>
				</p>
			</div>
		</div>
	</div>
);

function FeaturedWork() {
	return (
		<div className="space-y-4 w-full overflow-hidden">
			<h1 className="text-[10px] ml-6 uppercase font-semibold tracking-wider">
				Featured Work
			</h1>
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="w-full pb-20"
			>
				<CarouselContent className="w-[80vw] ml-0">
					<CarouselItem className="md:basis-1/2 w-full ml-4">
						<WorkItem />
					</CarouselItem>
					<CarouselItem className="md:md:basis-1/2 w-full ml-4">
						<WorkItem />
					</CarouselItem>
					<CarouselItem className="md:basis-1/2 w-full ml-4">
						<WorkItem />
					</CarouselItem>
					<CarouselItem className="md:basis-1/2 w-full ml-4">
						<WorkItem />
					</CarouselItem>
					<CarouselItem className="md:basis-1/2 w-full ml-4">
						<WorkItem />
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious className="left-6" />
				<CarouselNext className="right-6" />
			</Carousel>
		</div>
	);
}

export default FeaturedWork;
