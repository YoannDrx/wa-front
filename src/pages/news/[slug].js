import { useRouter } from "next/router";
import BlogPost from "../../components/BlogPost";
import JumboBlogPost from "@/components/JumboBloPost";
import NavigationPosts from "@/components/NavigationPosts";
import SocialShareButtons from "@/components/SocialShareButtons";
import CommentSection from "@/components/CommentSection";
import Head from "next/head";

const BlogPage = () => {
  // is single news page useful? not in specs
  return <div />;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <Head>
        <title>{"Article de Blog"}</title>
        <meta name="description" content={`Lisez cet article de Weil & Associés`} />
      </Head>
      <JumboBlogPost
        imageHref="/assets/blog/test.png"
        author={fakeData[currentIndex].author}
        date={fakeData[currentIndex].date}
        category={fakeData[currentIndex].catégorie}
      />
      <BlogPost postData={fakeData[currentIndex]} />
      <NavigationPosts previous={previousPost} next={nextPost} />
      <SocialShareButtons />
      <CommentSection />
    </div>
  );
};

export default BlogPage;
