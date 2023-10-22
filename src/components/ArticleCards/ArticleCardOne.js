import Image from "next/image";
import CardBanner from "./CardOverlay";

export default function ArticleCardOne({backgroundImage, date, title}) {
	return (
		<div className="relative w-80 h-64 overflow-hidden">
			<Image
				src={backgroundImage}
				alt="Article Background"
				className="absolute w-full h-full object-cover"
				layout="fill"
				objectFit="cover"
			/>
			<CardBanner title={title} date={date} />
		</div>
	);
}
