import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard"
import HeroSection from "../../components/heroSection/HeroSection"
import Layouts from "../../components/layouts/Layouts"
import Category from "../../components/category/Category"
import Track from "../../components/track/Track"
import Testimonial from "../../components/testimonial/Testimonial"
import Loader from "../../components/loader/Loader"



const HomePage = () => {

  return (
    <Layouts>
        <HeroSection></HeroSection>
        <Category></Category>
        <HomePageProductCard></HomePageProductCard>
        <Track></Track>
        <Testimonial></Testimonial>
      <Loader></Loader>
    </Layouts>
  )
}

export default HomePage