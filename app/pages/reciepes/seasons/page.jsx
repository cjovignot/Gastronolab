"use client"
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Reciepe from '../../../components/Card/card';

function SeasonsRecipes() {
    const { t, i18n } = useTranslation()

    // Get the current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    const currentYear = currentDate.getFullYear().toString().slice(-2);

    // Define state variables for day, month, and year and initialize them with current values
    const [day, setDay] = useState(currentDay);
    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);
    const [season, setSeason] = useState('');

    const [currentReciepes, setCurrentReciepes] = useState([])
    const [userLanguage, setUserLanguage] = useState('')
    
    useEffect(() => {
      setUserLanguage(localStorage.getItem("userLanguage"));
    }, []);

    const calculateSeason = (month) => {
        switch (month) {
            case 12:
            case 1:
            case 2:
                return 'seasons.winter.title';
            case 3:
            case 4:
            case 5:
                return 'seasons.spring.title';
            case 6:
            case 7:
            case 8:
                return 'seasons.summer.title';
            case 9:
            case 10:
            case 11:
                return 'seasons.autumn.title';
            default:
                return '';
        }
    };

    // Function to update date and season
    const updateDateAndSeason = () => {
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
        const currentYear = currentDate.getFullYear().toString().slice(-2);
        const currentSeason = calculateSeason(currentMonth);

        setDay(currentDay);
        setMonth(currentMonth);
        setYear(currentYear);
        setSeason(currentSeason);
    };

    useEffect(() => {
        // Initial update
        updateDateAndSeason();

        // Set up an interval to update the date and season every minute
        const intervalId = setInterval(updateDateAndSeason, 60000);

        // Cleanup the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    // useEffect(() => {
    //     // Calculate the current season and update the state
    //     const currentSeason = calculateSeason(month);
    //     setSeason(currentSeason);
    //     console.log(season)
    // }, [month]);

    
    // Filter the recipes based on the current season
    useEffect(() => {
        let filteringSeason
        if (season) {
            filteringSeason = season.split('.');
            filteringSeason = filteringSeason[1]
            filteringSeason = filteringSeason.charAt(0).toUpperCase() + filteringSeason.slice(1);
            const filteredRecipes = reciepes.filter(recipe => recipe.season.includes(filteringSeason));
            setCurrentReciepes(filteredRecipes);
        }
    }, [season]);


    const reciepes = [
        {
            title: "Autumn Apple Pie",
            content: "A delicious apple pie perfect for crisp Autumn evenings.",
            imagePath: "https://example.com/apple_pie_image.jpg",
            linkPath: "/recipes/apple-pie",
            season: ['Autumn', 'Automne'],
            tags: ["dessert", "apple", "pie"]
        },
        {
            title: "Pumpkin Spice Latte",
            content: "Warm up with this classic Autumn beverage made with pumpkin spice.",
            imagePath: "https://example.com/pumpkin_spice_latte_image.jpg",
            linkPath: "/recipes/pumpkin-spice-latte",
            season: ['Autumn', 'Automne'],
            tags: ["beverage", "pumpkin", "latte"]
        },
        {
            title: "Butternut Squash Soup",
            content: "A creamy and comforting soup made from fresh butternut squash.",
            imagePath: "https://example.com/butternut_squash_soup_image.jpg",
            linkPath: "/recipes/butternut-squash-soup",
            season: ['Autumn', 'Automne'],
            tags: ["soup", "butternut squash"]
        },
        {
            title: "Cranberry Walnut Salad",
            content: "A light and refreshing salad with cranberries and walnuts, perfect for Fall.",
            imagePath: "https://example.com/cranberry_walnut_salad_image.jpg",
            linkPath: "/recipes/cranberry-walnut-salad",
            season: ['Autumn', 'Automne'],
            tags: ["salad", "cranberry", "walnut"]
        },
        {
            title: "Maple Glazed Roasted Carrots",
            content: "Sweet and savory roasted carrots with a maple glaze.",
            imagePath: "https://example.com/maple_glazed_carrots_image.jpg",
            linkPath: "/recipes/maple-glazed-carrots",
            season: ['Autumn', 'Automne'],
            tags: ["side dish", "carrots", "maple"]
        },
        {
            title: "Spiced Pumpkin Bread",
            content: "A moist and flavorful pumpkin bread with a hint of Fall spices.",
            imagePath: "https://example.com/pumpkin_bread_image.jpg",
            linkPath: "/recipes/spiced-pumpkin-bread",
            season: ['Autumn', 'Automne'],
            tags: ["dessert", "pumpkin", "bread"]
        },
        {
            title: "Apple Cider Donuts",
            content: "Delicious apple cider-flavored donuts, a Fall favorite.",
            imagePath: "https://example.com/apple_cider_donuts_image.jpg",
            linkPath: "/recipes/apple-cider-donuts",
            season: ['Autumn', 'Automne'],
            tags: ["dessert", "apple cider", "donuts"]
        },
        {
            title: "Harvest Vegetable Stir-Fry",
            content: "A healthy stir-fry featuring an assortment of Autumn vegetables.",
            imagePath: "https://example.com/harvest_vegetable_stir_fry_image.jpg",
            linkPath: "/recipes/harvest-vegetable-stir-fry",
            season: ['Autumn', 'Automne'],
            tags: ["main dish", "vegetables", "stir-fry"]
        },
        {
            title: "Cinnamon Roasted Almonds",
            content: "Crispy roasted almonds coated in cinnamon sugar for a Fall snack.",
            imagePath: "https://example.com/cinnamon_roasted_almonds_image.jpg",
            linkPath: "/recipes/cinnamon-roasted-almonds",
            season: ['Autumn', 'Automne'],
            tags: ["snack", "almonds", "cinnamon"]
        },
        {
            title: "Pumpkin Cheesecake",
            content: "Creamy and decadent pumpkin cheesecake, a Fall dessert favorite.",
            imagePath: "https://example.com/pumpkin_cheesecake_image.jpg",
            linkPath: "/recipes/pumpkin-cheesecake",
            season: ['Autumn', 'Automne'],
            tags: ["dessert", "pumpkin", "cheesecake"]
        },
        {
            title: "Winter Soup",
            content: "A hearty and warm soup perfect for cold winter nights.",
            imagePath: "https://images.unsplash.com/photo-1520881374372-9b63f843f338",
            linkPath: "/pages/recipes/soups",
            season: ['Winter', 'Hiver'],
            tags: ["soup", "comfort food"]
        },
        {
            title: "Holiday Roast Turkey",
            content: "A classic recipe for a delicious holiday roast turkey with all the fixings.",
            imagePath: "https://images.unsplash.com/photo-1576070442620-507abbf8b055",
            linkPath: "/pages/recipes/main-dishes",
            season: ['Winter', 'Hiver'],
            tags: ["turkey", "holiday", "roast"]
        },
        {
            title: "Hot Chocolate",
            content: "Indulge in a creamy and rich hot chocolate to warm up on chilly winter days.",
            imagePath: "https://images.unsplash.com/photo-1579757035313-27b2a3d67a06",
            linkPath: "/pages/recipes/drinks",
            season: ['Winter', 'Hiver'],
            tags: ["hot chocolate", "drink", "winter"]
        },
        {
            title: "Winter Vegetable Stew",
            content: "A healthy and flavorful stew made with seasonal winter vegetables.",
            imagePath: "https://images.unsplash.com/photo-1483402164311-909d8b5cf18f",
            linkPath: "/pages/recipes/soups",
            season: ['Winter', 'Hiver'],
            tags: ["stew", "vegetables", "healthy"]
        },
        {
            title: "Baked Apple Pie",
            content: "Enjoy the sweet and warm flavors of baked apple pie during the winter months.",
            imagePath: "https://images.unsplash.com/photo-1529072995266-7e2fa5f4c790",
            linkPath: "/pages/recipes/desserts",
            season: ['Winter', 'Hiver'],
            tags: ["apple pie", "dessert", "winter"]
        },
        {
            title: "Peppermint Bark",
            content: "Make your own delicious peppermint bark for a festive treat in winter.",
            imagePath: "https://images.unsplash.com/photo-1576423472710-901875a84ca0",
            linkPath: "/pages/recipes/desserts",
            season: ['Winter', 'Hiver'],
            tags: ["peppermint", "dessert", "holiday"]
        },
        {
            title: "Winter Citrus Salad",
            content: "A refreshing and colorful citrus salad to brighten up your winter meals.",
            imagePath: "https://images.unsplash.com/photo-1572416723701-3ed739043b8e",
            linkPath: "/pages/recipes/salads",
            season: ['Winter', 'Hiver'],
            tags: ["salad", "citrus", "healthy"]
        },
        {
            title: "Cozy Casserole",
            content: "Warm up with a comforting casserole filled with winter vegetables and cheese.",
            imagePath: "https://images.unsplash.com/photo-1565299508-8fcf2db9f7d3",
            linkPath: "/pages/recipes/main-dishes",
            season: ['Winter', 'Hiver'],
            tags: ["casserole", "comfort food", "vegetables"]
        },
        {
            title: "Winter Spice Latte",
            content: "A spiced latte with flavors of cinnamon and nutmeg, perfect for winter mornings.",
            imagePath: "https://images.unsplash.com/photo-1577112222023-9c6b8d2715eb",
            linkPath: "/pages/recipes/drinks",
            season: ['Winter', 'Hiver'],
            tags: ["spice latte", "coffee", "drink"]
        },
        {
            title: "Snowflake Cookies",
            content: "Decorate and enjoy delightful snowflake-shaped cookies during the winter season.",
            imagePath: "https://images.unsplash.com/photo-1543306982-825c3d3acf07",
            linkPath: "/pages/recipes/cookies",
            season: ['Winter', 'Hiver'],
            tags: ["cookies", "dessert", "holiday"]
        },
        {
            title: "Spring Salad",
            content: "A refreshing salad with seasonal greens and a zesty dressing.",
            imagePath: "https://images.unsplash.com/photo-1522184216316-5a810fda9661",
            linkPath: "/pages/recipes/spring-salad",
            season: ['Spring', 'Printemps'],
            tags: ["salad", "healthy", "vegetarian"]
        },
        {
            title: "Strawberry Shortcake",
            content: "Delicious strawberry shortcake topped with whipped cream.",
            imagePath: "https://images.unsplash.com/photo-1548662116-092edeeb76a6",
            linkPath: "/pages/recipes/strawberry-shortcake",
            season: ['Spring', 'Printemps'],
            tags: ["dessert", "strawberry", "cake"]
        },
        {
            title: "Asparagus Risotto",
            content: "Creamy risotto with fresh asparagus spears and Parmesan cheese.",
            imagePath: "https://images.unsplash.com/photo-1585090706001-cb1c90a66391",
            linkPath: "/pages/recipes/asparagus-risotto",
            season: ['Spring', 'Printemps'],
            tags: ["risotto", "vegetarian", "Italian"]
        },
        {
            title: "Lemon Herb Chicken",
            content: "Grilled chicken marinated in lemon and herbs for a light and flavorful dish.",
            imagePath: "https://images.unsplash.com/photo-1566035332882-681f8a12c52a",
            linkPath: "/pages/recipes/lemon-herb-chicken",
            season: ['Spring', 'Printemps'],
            tags: ["chicken", "grilled", "lemon"]
        },
        {
            title: "Spring Vegetable Stir-Fry",
            content: "Quick and healthy stir-fry with a variety of spring vegetables and tofu.",
            imagePath: "https://images.unsplash.com/photo-1551514025-009b6cc5a6f7",
            linkPath: "/pages/recipes/spring-vegetable-stir-fry",
            season: ['Spring', 'Printemps'],
            tags: ["stir-fry", "vegetarian", "healthy"]
        },
        {
            title: "Strawberry Spinach Salad",
            content: "A sweet and savory salad with fresh strawberries, spinach, and a balsamic vinaigrette.",
            imagePath: "https://images.unsplash.com/photo-1533269246856-3f6e4473c7ad",
            linkPath: "/pages/recipes/strawberry-spinach-salad",
            season: ['Spring', 'Printemps'],
            tags: ["salad", "strawberry", "healthy"]
        },
        {
            title: "Spring Pea Soup",
            content: "Creamy pea soup made with fresh spring peas and a hint of mint.",
            imagePath: "https://images.unsplash.com/photo-1534126505227-49fae717d36c",
            linkPath: "/pages/recipes/spring-pea-soup",
            season: ['Spring', 'Printemps'],
            tags: ["soup", "vegetarian", "spring peas"]
        },
        {
            title: "Lavender Lemonade",
            content: "Refreshing lavender-infused lemonade perfect for a warm spring day.",
            imagePath: "https://images.unsplash.com/photo-1500577810042-8a29e1fda47e",
            linkPath: "/pages/recipes/lavender-lemonade",
            season: ['Spring', 'Printemps'],
            tags: ["drink", "lemonade", "lavender"]
        },
        {
            title: "Spring Vegetable Pasta",
            content: "Pasta dish loaded with fresh spring vegetables and a light garlic sauce.",
            imagePath: "https://images.unsplash.com/photo-1552308990-2c64677e74c0",
            linkPath: "/pages/recipes/spring-vegetable-pasta",
            season: ['Spring', 'Printemps'],
            tags: ["pasta", "vegetarian", "spring vegetables"]
        },
        {
            title: "Strawberry Rhubarb Pie",
            content: "Classic pie with a delightful combination of strawberries and rhubarb.",
            imagePath: "https://images.unsplash.com/photo-1554210593-297e1c6f9f3c",
            linkPath: "/pages/recipes/strawberry-rhubarb-pie",
            season: ['Spring', 'Printemps'],
            tags: ["pie", "strawberry", "rhubarb"]
        },
        {
            title: "Summer Salad",
            content: "A refreshing salad with seasonal fruits and vegetables.",
            imagePath: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
            linkPath: "/pages/recipes/summer-salad",
            season: ['Summer', 'Eté'],
            tags: ["salad", "healthy", "vegetarian"]
        },
        {
            title: "Iced Tea",
            content: "Cool down with a glass of homemade iced tea.",
            imagePath: "https://images.unsplash.com/photo-1541696439-7f2b6e8df1d4",
            linkPath: "/pages/recipes/iced-tea",
            season: ['Summer', 'Eté'],
            tags: ["beverage", "drinks", "refreshing"]
        },
        {
            title: "Grilled Chicken",
            content: "Delicious grilled chicken with a summer marinade.",
            imagePath: "https://images.unsplash.com/photo-1586192076190-5e6854b8d68f",
            linkPath: "/pages/recipes/grilled-chicken",
            season: ['Summer', 'Eté'],
            tags: ["grill", "chicken", "barbecue"]
        },
        {
            title: "Watermelon Smoothie",
            content: "Blend fresh watermelon for a hydrating summer smoothie.",
            imagePath: "https://images.unsplash.com/photo-1555930804-21a91dce02a1",
            linkPath: "/pages/recipes/watermelon-smoothie",
            season: ['Summer', 'Eté'],
            tags: ["smoothie", "fruit", "refreshing"]
        },
        {
            title: "Mango Salsa",
            content: "Spicy mango salsa to pair with your summer dishes.",
            imagePath: "https://images.unsplash.com/photo-1560943627-2c5c1a6e87c2",
            linkPath: "/pages/recipes/mango-salsa",
            season: ['Summer', 'Eté'],
            tags: ["salsa", "mango", "appetizer"]
        },
        {
            title: "Grilled Vegetables",
            content: "Seasonal vegetables grilled to perfection.",
            imagePath: "https://images.unsplash.com/photo-1532327651085-bc35e2a5b8ef",
            linkPath: "/pages/recipes/grilled-vegetables",
            season: ['Summer', 'Eté'],
            tags: ["grill", "vegetables", "healthy"]
        },
        {
            title: "Fruit Salad",
            content: "Colorful fruit salad for a summer dessert.",
            imagePath: "https://images.unsplash.com/photo-1597426223398-3b7e1b3eadeb",
            linkPath: "/pages/recipes/fruit-salad",
            season: ['Summer', 'Eté'],
            tags: ["dessert", "fruit", "refreshing"]
        },
        {
            title: "Beachside BBQ",
            content: "Plan a beachside barbecue party with these recipes.",
            imagePath: "https://images.unsplash.com/photo-1566057353-398c5f994b8b",
            linkPath: "/pages/recipes/beachside-bbq",
            season: ['Summer', 'Eté'],
            tags: ["barbecue", "grill", "party"]
        },
        {
            title: "Lemonade",
            content: "Homemade lemonade to beat the summer heat.",
            imagePath: "https://images.unsplash.com/photo-1566552472065-3f7d48d8b83f",
            linkPath: "/pages/recipes/lemonade",
            season: ['Summer', 'Eté'],
            tags: ["beverage", "drinks", "lemon"]
        },
        {
            title: "Summer Pasta Salad",
            content: "Cold pasta salad with summer veggies and dressing.",
            imagePath: "https://images.unsplash.com/photo-1579451862173-3f61b8f7c2d0",
            linkPath: "/pages/recipes/summer-pasta-salad",
            season: ['Summer', 'Eté'],
            tags: ["salad", "pasta", "picnic"]
        }
    ];

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-5xl font-bold pb-10">
                {/* {`${userLanguage === 'en-US' ? `${t(`${season}`)} Recipes` : (userLanguage === 'fr-FR' && season === 'Printemps' ? `Recettes de ${season}` : `Recettes d'${season}`)}`} */}
                {`${userLanguage === 'en-US' ? `${t(season)} Recipes` : (userLanguage === 'fr-FR' && season === 'Printemps' ? `Recettes de ${t(season)}` : `Recettes d'${t(season)}`)}`}

            </h1>

            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                    <span style={{"--value": day}}>{day}</span>
                    </span>
                    {t('calendar.day.title')}
                </div> 
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                    <span style={{"--value": month}}>{month}</span>
                    </span>
                    {t('calendar.month.title')}
                </div> 
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                    <span style={{"--value": year}}>{year}</span>
                    </span>
                    {t('calendar.year.title')}
                </div>
            </div>

            <div className="flex flex-wrap justify-center w-full">
                {/* Map over the reciepes array and render Reciepe components */}
                {currentReciepes.map((recipe, index) => (
                    <Reciepe
                    key={index} // You can use a unique key based on your data
                    props={recipe} // Pass the entire recipe object as a prop
                    />
                ))}
            </div>
        </main>
    )
}

export default SeasonsRecipes;