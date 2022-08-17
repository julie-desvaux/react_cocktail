import { Link } from "react-router-dom";

const Card = ({ cocktail }) => {
	// const { cocktail } = props;
	return (
		<div className="group relative shadow-md rounded">
			<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
				<img
					src={cocktail.strDrinkThumb}
					alt={cocktail.strDrink}
					className="w-full h-full object-center object-cover lg:w-full lg:h-full"
				/>
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h2 className="p-3 text-gray-700">
						<Link to={`/cocktail/${cocktail.idDrink}`}>
							<span aria-hidden="true" className="absolute inset-0" />
							{cocktail.strDrink}
						</Link>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Card;
