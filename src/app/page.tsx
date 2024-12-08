
import AboutUs from "./components/aboutus";
import FoodCategory from "./components/foodcategory";
import Client from "./components/client";
import MeetOurChef from "./components/meetourchef";
import Blog from "./components/blog";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <AboutUs/>
    <FoodCategory/>
    <Client/>
    <MeetOurChef/>
    <Blog/>
    </>
  );
}