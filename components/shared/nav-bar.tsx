import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function NavBar() {
	return (
		<nav className="flex items-center h-14 justify-between px-6">
			<Link href="/">
				<span className="text-xs font-black tracking-wider uppercase">
					JobX
				</span>
			</Link>
			<Avatar>
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</nav>
	);
}

export default NavBar;
