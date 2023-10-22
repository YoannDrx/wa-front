import Image from "next/image";
import CardOverlay from "./CardOverlay";

export default function ArticleCardTwo({backgroundImage, date, title, description, buttonText, position}) {
	return (
		<div className="relative w-80 h-64 overflow-hidden">
			<Image
				src={backgroundImage}
				alt="Article Background"
				className="absolute w-full h-full object-cover"
				layout="fill"
				objectFit="cover"
			/>

			<CardOverlay
				title={title}
				date={date}
				description={description}
				buttonText={buttonText}
				position={position}
			/>
		</div>
	);
}
