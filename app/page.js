import Image from 'next/image'
import Link from 'next/link'
import Welcome from './components/Home/welcome'
import Card from './components/Card/card'

export default function Home() {

  const reciepes = {
    title: "All reciepes",
    content: "All our reciepes",
    imagePath: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    linkPath: "/pages/reciepes/",
  }
  const beverage = {
    title: "Beverage reciepes",
    content: "In case your thirsty... or not !",
    imagePath: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=957&q=80",
    linkPath: "/pages/reciepes/beverages"
  }
  const dessert = {
    title: "Our desserts",
    content: "For... everyone !",
    imagePath: "https://images.unsplash.com/photo-1547414368-ac947d00b91d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    linkPath: "/pages/reciepes/desserts"
  }
  const healthy = {
    title: "Healthy beverage",
    content: "Our healthy beverages and medicine informations about plants",
    imagePath: "https://plus.unsplash.com/premium_photo-1663853293768-11ae559bc4e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    linkPath: "/pages/reciepes/healthyBeverages"
  }

  return (
    <div>
      <Welcome />
      <h1 id="collectionTitle" className="text-center text-5xl font-bold mt-20">COLLECTIONS</h1>
      <div className="flex flex-wrap justify-center w-[70%] m-auto my-10">
        <Card props={reciepes}/>
        <Card props={beverage}/>
        <Card props={dessert}/>
        <Card props={healthy}/>
      </div>
    </div>
  )
}
