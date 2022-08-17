import { useEffect, useState } from "react";

import Card from "../components/Card";
import Loader from "../components/Loader";
import LetterSelected from "../components/LetterSelected";
import LetterSelect from "../components/LetterSelect";
import Button from "../components/Button";

const letters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

const Home = () => {
	const [cocktails, setCocktails] = useState(null);
	const [letterSelected, setLetterSelected] = useState("a");
	const [cocktailSearch, setCocktailSearch] = useState("");
	const [error, setError] = useState(false);

	useEffect(() => {
		fetchData();
	}, [letterSelected]);

	const fetchData = async () => {
		const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letterSelected}`);
		const response = await request.json();
		// console.log(response);
		setCocktails(response.drinks);
	};

	const handleCocktailSearch = (e) => {
		setCocktailSearch(e.target.value);
	};

	const handleLetterSelected = (letter) => {
		setLetterSelected(letter);
	};

	const handleSubmitSearch = async (e) => {
		e.preventDefault();
		if (cocktailSearch) {
			const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailSearch}`);
			const response = await request.json();
			console.log(response);
			if (response.drinks !== null) {
				setCocktails(response.drinks);
			} else {
				setError(true);
			}
		}
	};

	if (!cocktails) {
		return <Loader />;
	}

	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto py-2 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
				<div className="flex justify-around mb-8 items-center">
					<h2 className="text-2xl py-2 font-extrabold tracking-tight text-gray-900">
						Coctail's List letter : {letterSelected.toUpperCase()}
					</h2>
					<form className="space-y-6" onSubmit={handleSubmitSearch}>
						<input type="hidden" name="remember" defaultValue="true" />
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label htmlFor="email-address" className="sr-only">
									Cocktail's name
								</label>
								<input
									id="cocktail"
									name="cocktail"
									type="text"
									required
									className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Enter cocktail's name"
									onChange={handleCocktailSearch}
								/>
							</div>
						</div>

						<Button>Search</Button>
					</form>
				</div>
				<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 flex-wrap">
					{letters.map((letter) => {
						if (letter.toUpperCase() === letterSelected.toUpperCase()) {
							return (
								<LetterSelected
									key={letter}
									handleLetterSelected={handleLetterSelected}
									letter={letter.toUpperCase()}
								/>
							);
						} else {
							return (
								<LetterSelect
									key={letter}
									handleLetterSelected={handleLetterSelected}
									letter={letter.toUpperCase()}
								/>
							);
						}
					})}
				</div>
				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{error ? (
						<p>This cocktail doesn't exist</p>
					) : (
						cocktails.map((cocktail) => <Card key={cocktail.idDrink} cocktail={cocktail} />)
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
