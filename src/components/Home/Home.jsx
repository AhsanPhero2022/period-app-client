import CssBaseline from "@mui/material/CssBaseline";
import MainFeaturedPost from "./pages/BlogPage/MainFeaturedPost";
import banner from "../../../public/assets/banner.png";


const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

function Home() {

  const backgroundImageUrl = 'https://i.postimg.cc/Fst52HjH/butter-flye.png';


  return (
    <>
      <div className="flex gap-4 items-center bg-cover bg-center w-full h-[600px]"
        // style={{ backgroundImage: `url(${require('../assets/your-image.jpg').default})` }}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <img className="w-1/2 h-full" src={banner} />
        <div className="  "
        
        >
          <h1 className=" lg:ms-52 text-3xl font-bold text-[#ba759a] ">
          সখী <br/> অসময়ের সহচর 
          </h1>
         
        </div>
      </div>
      
      <MainFeaturedPost post={mainFeaturedPost} />
  
    </>
  );
}

export default Home;
