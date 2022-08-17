import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const CocktailDetails = () => {
	const [cocktail, setCocktail] = useState(null);
	const { cocktailId } = useParams();

	useEffect(() => {
		fetchData();
	}, [cocktailId]);

	const fetchData = async () => {
		const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`);
		const response = await request.json();
		// console.log(response);

		setCocktail(response.drinks[0]);
	};

	const renderIngredient = () => {
		const keys = Object.keys(cocktail);
		const filterKeysIngredient = keys.filter((key) => key.includes("strIngredient") && cocktail[key] !== null);
		const filterKeysMesure = keys.filter((key) => key.includes("strMeasure"));

		return filterKeysIngredient.map((key, index) => (
			<div
				className={`${
					index % 2 === 0 ? "bg-white" : "bg-gray-50"
				} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
			>
				<dt className="text-sm font-medium text-gray-500">{cocktail[key]}</dt>
				<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					{cocktail[`strMeasure${index + 1}`]}
				</dd>
			</div>
		));

		// for (let i = 1; i <= 15; i++) {
		// 	if (cocktail[`strIngredient${i}`] !== null) {
		// 		return (
		// 			<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
		// 				<dt className="text-sm font-medium text-gray-500">{cocktail[`strIngredient${i}`]}</dt>
		// 				<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
		// 					{cocktail[`strMeasure1${i}`]}
		// 				</dd>
		// 			</div>
		// 		);
		// 	}
		// }
	};
	// console.log(cocktail);

	if (!cocktail) {
		return <Loader />;
	}

	return (
		<div className="bg-white shadow overflow-hidden sm:rounded-lg">
			<div className="px-4 py-5 sm:px-6">
				<div className="w-1/4 min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
					<img
						src={cocktail.strDrinkThumb}
						alt={cocktail.strDrink}
						className="w-full h-full object-center object-cover lg:w-full lg:h-full"
					/>
				</div>
				<h3 className="text-lg leading-6 font-medium text-gray-900">{cocktail.strDrink}</h3>
				<p className="mt-1 max-w-2xl text-sm text-gray-500">{cocktail.strInstructions}</p>
			</div>
			<div className="border-t border-gray-200">
				<dl>
					{renderIngredient()}

					{/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Application for</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Backend Developer</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Email address</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">About</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa
							consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in
							ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui
							eu.
						</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Attachments</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
								<li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
									<div className="w-0 flex-1 flex items-center"></div>
									<div className="ml-4 flex-shrink-0">
										<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
											Download
										</a>
									</div>
								</li>
								<li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
									<div className="w-0 flex-1 flex items-center"></div>
									<div className="ml-4 flex-shrink-0">
										<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
											Download
										</a>
									</div>
								</li>
							</ul>
						</dd>
					</div> */}
				</dl>
			</div>
		</div>
	);
};

export default CocktailDetails;
