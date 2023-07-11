import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
	return (
		<header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md items-center">
			{/* left */}
			<div className="flex items-center space-x-2">
				<Image
					src="https://links.papareact.com/4t3"
					width={30}
					height={30}
					alt="logo"
				/>

				<div>
					<h1 className="font-bold">
						The PAPAFAM <span className="text-violet-500">AI</span> Image
						Generator
					</h1>
					<h2 className="text-xs">
						Powered by DALL&middot;E 2, Chat GPT & Microsoft Azure!
					</h2>
				</div>
			</div>

			{/* right */}
			<div className="flex text-xs md:text-base divide-x items-center text-gray-500">
				<Link
					href="https://www.paparect.com"
					className="px-2 font-light text-right"
				>
					Join Zero To Full Stack Hero
				</Link>
				<Link
					href="https://links.papareact.com/microsoft-youtube-build"
					className="px-2 font-light"
				>
					GitHub Repo
				</Link>
			</div>
		</header>
	);
};

export default Header;
