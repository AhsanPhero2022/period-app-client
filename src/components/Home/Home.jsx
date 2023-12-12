import CssBaseline from "@mui/material/CssBaseline";
import MainFeaturedPost from "./pages/BlogPage/MainFeaturedPost";
import banner from "../../../public/assets/banner.jpg";

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

function Home() {
  return (
    <>
      <div className="flex gap-4 items-center justify-between">
        <img className="" src={banner} alt="Loading.." />
        <div className="space-y-5">
          <h1>
            সখী এবং এসময়ের মধ্যে তৈরি যে যে সম্পর্ক আমাদের জীবনে একটি গভীর
            পরিবর্তন সৃষ্টি করে
          </h1>
          <p>
            তার সৌন্দর্য এবং গুরুত্বপূর্ণ বিশেষত্তর করে তুলে ধরে। সখী আমাদের
            সাথে থাকে তাদের অসংখ্য অভিজ্ঞান এবং ভাবনার সাথে যোগ করে এবং এসময়
            আমাদের জীবনে এক রঙে রূপান্তর করে। <div />
            সখী এসময়ের সহচর লেখার মাধ্যমে, আমরা সময়ের মূহূর্তে যা গুড়িয়ে চলেছি
            তা বোঝার চেষ্টা করি, যাতে আমরা অদৃশ্য অনুভূতি এবং নতুন দিকে চলার
            জন্য প্রস্তুত হতে পারি।
          </p>
        </div>
      </div>
      <MainFeaturedPost post={mainFeaturedPost} />
    </>
  );
}

export default Home;
