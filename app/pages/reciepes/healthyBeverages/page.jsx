import HealthyBeverageWelcome from '../../../components/HealthyBeverages/Home/welcome'
import Collapse from '../../../components/Collapse/collapse'

export default function HealthyBeverages() {
    
    const healthyBeverageKinds = [
        {
            title: "Green Tea",
            description: "Loaded with antioxidants and nutrients.",
        },
        {
            title: "Smoothies",
            description: "Delicious and nutritious blended beverages.",
        },
        {
            title: "Herbal Infusions",
            description: "Various herbal teas with health benefits.",
        },
        {
            title: "Fresh Juices",
            description: "Naturally extracted juices from fruits and vegetables.",
        },
        {
            title: "Coconut Water",
            description: "Hydrating and rich in electrolytes.",
        },
        {
            title: "Kombucha",
            description: "Fermented tea with probiotics.",
        },
        // Add more beverage kinds here
    ];

    return (
        <>
        <HealthyBeverageWelcome />
        {healthyBeverageKinds.map((beverage, index) => (
            <Collapse key={beverage.index} title={beverage.title} content={beverage.description} />
        ))}
        </>
    )
}