export default function ArticleCard({backgroundImage, date, title}) {
	const day = new Date(date).getDate();
	const month = new Date(date).toLocaleString("fr-FR", {month: "short"}).toUpperCase();

	return (
		<div className="relative w-80 h-64 bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
			<div className="absolute bottom-0 w-full h-1/4 bg-black bg-opacity-70 flex justify-between items-center">
				<span className="text-white px-4">{title}</span>
				<div className="bg-primary w-16 h-16 flex flex-col justify-center items-center right-0">
					<span className=" text-white font-bold text-lg">{day}</span>
					<span className=" text-white font-bold text-lg">{month}</span>
				</div>
			</div>
		</div>
	);
}
