import Header from "@/components/global/header";
import { ArrowRight, ChevronDown, Grid3x3, List, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Footer from "@/components/global/footer";

export default function OurTalent() {
	return (
		<div>
			<main className="w-full bg-[#444444] font-[family-name:var(--font-nunito)]">
				<section className="min-h-3/4 relative">
					<Header />
					<div className="min-h-[75vh] flex flex-row relative bg-gradient-to-b from-[#1F1F1F] to-[#2D2D2D] z-1">
						<div className="basis-1/2 flex flex-col justify-center px-20 text-white">
							<h1 className="font-black text-4xl mb-4">JASA KAMI</h1>
							<p className="mb-10">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<div className="flex">
								<div className="min-w-[300px] flex flex-row justify-between items-center bg-[white] text-[#AC8210] rounded-full px-6 py-4 shadow-[0px_4px_0px_4px_#FFC934] hover:shadow-[0px_0px_0px_0px_#FFC934] transition-shadow duration-300 cursor-pointer">
									<div className="">
										Bergabung dengan kami
									</div>
									<ArrowRight className="text-[#FFC934]" size={24} />
								</div>
							</div>
						</div>
						<div className="basis-1/2 bg-[url('/home/mosque.png')] bg-cover bg-start relative"></div>
					</div>
				</section>

				<section className="min-h-screen bg-white px-20 pt-16 pb-[35vh]">
					<div className="flex flex-row justify-between items-center mb-18">
						<div className="grow flex flex-row items-center justify-start">
							<div className="text-3xl text-[#FFC934] font-black text-nowrap me-24">All Talent</div>
							<Input type="text" className="w-auto rounded-full w-[320px] me-16" iconLeft={Search} placeholder="Search by name or tags" />
							<div className="me-8">Sort By</div>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Input type="text" className="w-auto rounded-full" iconRight={ChevronDown} placeholder="Name" readOnly />
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56" align="end">
									<DropdownMenuLabel>My Account</DropdownMenuLabel>
									<DropdownMenuGroup>
										<DropdownMenuItem>
											Profile
											<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
										</DropdownMenuItem>
										<DropdownMenuItem>
											Billing
											<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
										</DropdownMenuItem>
										<DropdownMenuItem>
											Settings
											<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
										</DropdownMenuItem>
										<DropdownMenuItem>
											Keyboard shortcuts
											<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem>Team</DropdownMenuItem>
										<DropdownMenuSub>
											<DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
											<DropdownMenuPortal>
												<DropdownMenuSubContent>
													<DropdownMenuItem>Email</DropdownMenuItem>
													<DropdownMenuItem>Message</DropdownMenuItem>
													<DropdownMenuSeparator />
													<DropdownMenuItem>More...</DropdownMenuItem>
												</DropdownMenuSubContent>
											</DropdownMenuPortal>
										</DropdownMenuSub>
										<DropdownMenuItem>
											New Team
											<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuItem>GitHub</DropdownMenuItem>
									<DropdownMenuItem>Support</DropdownMenuItem>
									<DropdownMenuItem disabled>API</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>
										Log out
										<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<div className="flex-none flex flex-row items-center justify-end">
							<div className="flex items-center jusitfy-center bg-[#FFC934] border border-[#FFC934] p-[6px] rounded-md text-white me-2">
								<Grid3x3 />
							</div>
							<div className="flex items-center jusitfy-center bg-white border border-[#FFC934] p-[6px] rounded-md text-[#FFC934]">
								<List />
							</div>
						</div>
					</div>

					<div className="grid grid-cols-4 gap-4 mb-16">
						{Array.from({ length: 12 }).map((_, i) => (
							<Card key={i} className="pt-0 pb-6 gap-0 rounded-xl overflow-hidden">
								<div className="h-[15rem] bg-[url('/home/usaha-micro-2.png')] bg-cover bg-start mb-4	"></div>
								<CardContent>
									<div className="flex flex-row justify-between">
										<div className="font-bold text-lg">Sarah James</div>
										<div className="bg-[#FCCE4D] rounded-full px-4 flex items-center text-sm">Designer</div>
									</div>
									<div className="flex mb-4 items-center">
										<MapPin className="text-[#FFC934] me-1" size={18} />
										<div className="text-xs">Studio ABCD</div>
									</div>
									<p className="text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<div className="flex justify-center">
										<Button className="rounded-full cursor-pointer bg-[#FFC934] px-16 py-5">Learn More</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#" isActive>
									2
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">3</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationNext href="#" />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</section>
				<Footer />
			</main>
		</div>
	)
}