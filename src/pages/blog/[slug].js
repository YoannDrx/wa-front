import { useRouter } from "next/router";
import BlogPost from "../../components/BlogPost";
import JumboBlogPost from "@/components/JumboBloPost";
import NavigationPosts from "@/components/NavigationPosts";
import SocialShareButtons from "@/components/SocialShareButtons";
import CommentSection from "@/components/CommentSection";

const fakeData = [
  {
    title: "ARTICLE 1",
    author: "Bruno WEIL",
    date: "2021-01-01",
    catégorie: "Droit des sociétés",
    content:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus aliquam suspendisse tellus non ante sit id at nisl. Etiam vitae egestas mattis gravida ipsum tempus et. Ut tellus orci donec proin. Sit et neque purus rutrum vulputate mattis. Purus ac aliquet id nulla. Semper proin netus interdum senectus suspendisse et nunc dui. Purus mattis sit diam pulvinar nam. Nam leo tellus lorem vitae sociis vel aliquam. Urna pulvinar pulvinar nunc nisl blandit est curabitur. Sed diam viverra amet enim et magnis imperdiet purus. Hendrerit quisque massa massa euismod. Vitae maecenas amet amet hendrerit. Nunc ut risus nec sed volutpat mattis pharetra tellus congue. Lorem magna pulvinar placerat aliquam sit sapien fusce. Amet sit sit in risus aliquet ipsum amet urna eget. Purus felis volutpat elit sit quam adipiscing. Tellus metus diam ut erat dui. Ullamcorper adipiscing quis ultricies eu. Euismod gravida vitae commodo cursus volutpat posuere. Enim feugiat non donec amet. Nec lacinia id tortor sapien eget volutpat. Amet fames lobortis libero semper lectus sapien molestie.",
  },
  {
    title: "ARTICLE 2",
    author: "Bruno WEIL",
    date: "2021-01-01",
    catégorie: "Droit des sociétés",
    content:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus aliquam suspendisse tellus non ante sit id at nisl. Etiam vitae egestas mattis gravida ipsum tempus et. Ut tellus orci donec proin. Sit et neque purus rutrum vulputate mattis. Purus ac aliquet id nulla. Semper proin netus interdum senectus suspendisse et nunc dui. Purus mattis sit diam pulvinar nam. Nam leo tellus lorem vitae sociis vel aliquam. Urna pulvinar pulvinar nunc nisl blandit est curabitur. Sed diam viverra amet enim et magnis imperdiet purus. Hendrerit quisque massa massa euismod. Vitae maecenas amet amet hendrerit. Nunc ut risus nec sed volutpat mattis pharetra tellus congue. Lorem magna pulvinar placerat aliquam sit sapien fusce. Amet sit sit in risus aliquet ipsum amet urna eget. Purus felis volutpat elit sit quam adipiscing. Tellus metus diam ut erat dui. Ullamcorper adipiscing quis ultricies eu. Euismod gravida vitae commodo cursus volutpat posuere. Enim feugiat non donec amet. Nec lacinia id tortor sapien eget volutpat. Amet fames lobortis libero semper lectus sapien molestie.",
  },
  {
    title: "ARTICLE 3",
    author: "Bruno WEIL",
    date: "2021-01-01",
    catégorie: "Droit des sociétés",
    content:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus aliquam suspendisse tellus non ante sit id at nisl. Etiam vitae egestas mattis gravida ipsum tempus et. Ut tellus orci donec proin. Sit et neque purus rutrum vulputate mattis. Purus ac aliquet id nulla. Semper proin netus interdum senectus suspendisse et nunc dui. Purus mattis sit diam pulvinar nam. Nam leo tellus lorem vitae sociis vel aliquam. Urna pulvinar pulvinar nunc nisl blandit est curabitur. Sed diam viverra amet enim et magnis imperdiet purus. Hendrerit quisque massa massa euismod. Vitae maecenas amet amet hendrerit. Nunc ut risus nec sed volutpat mattis pharetra tellus congue. Lorem magna pulvinar placerat aliquam sit sapien fusce. Amet sit sit in risus aliquet ipsum amet urna eget. Purus felis volutpat elit sit quam adipiscing. Tellus metus diam ut erat dui. Ullamcorper adipiscing quis ultricies eu. Euismod gravida vitae commodo cursus volutpat posuere. Enim feugiat non donec amet. Nec lacinia id tortor sapien eget volutpat. Amet fames lobortis libero semper lectus sapien molestie.",
  },
  {
    title: "ARTICLE 1",
    author: "Bruno WEIL",
    date: "2021-01-01",
    catégorie: "Droit des sociétés",
    content:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus aliquam suspendisse tellus non ante sit id at nisl. Etiam vitae egestas mattis gravida ipsum tempus et. Ut tellus orci donec proin. Sit et neque purus rutrum vulputate mattis. Purus ac aliquet id nulla. Semper proin netus interdum senectus suspendisse et nunc dui. Purus mattis sit diam pulvinar nam. Nam leo tellus lorem vitae sociis vel aliquam. Urna pulvinar pulvinar nunc nisl blandit est curabitur. Sed diam viverra amet enim et magnis imperdiet purus. Hendrerit quisque massa massa euismod. Vitae maecenas amet amet hendrerit. Nunc ut risus nec sed volutpat mattis pharetra tellus congue. Lorem magna pulvinar placerat aliquam sit sapien fusce. Amet sit sit in risus aliquet ipsum amet urna eget. Purus felis volutpat elit sit quam adipiscing. Tellus metus diam ut erat dui. Ullamcorper adipiscing quis ultricies eu. Euismod gravida vitae commodo cursus volutpat posuere. Enim feugiat non donec amet. Nec lacinia id tortor sapien eget volutpat. Amet fames lobortis libero semper lectus sapien molestie.",
  },
  {
    title: "ARTICLE 2",
    author: "Bruno WEIL",
    date: "2021-01-01",
    catégorie: "Droit des sociétés",
    content:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus aliquam suspendisse tellus non ante sit id at nisl. Etiam vitae egestas mattis gravida ipsum tempus et. Ut tellus orci donec proin. Sit et neque purus rutrum vulputate mattis. Purus ac aliquet id nulla. Semper proin netus interdum senectus suspendisse et nunc dui. Purus mattis sit diam pulvinar nam. Nam leo tellus lorem vitae sociis vel aliquam. Urna pulvinar pulvinar nunc nisl blandit est curabitur. Sed diam viverra amet enim et magnis imperdiet purus. Hendrerit quisque massa massa euismod. Vitae maecenas amet amet hendrerit. Nunc ut risus nec sed volutpat mattis pharetra tellus congue. Lorem magna pulvinar placerat aliquam sit sapien fusce. Amet sit sit in risus aliquet ipsum amet urna eget. Purus felis volutpat elit sit quam adipiscing. Tellus metus diam ut erat dui. Ullamcorper adipiscing quis ultricies eu. Euismod gravida vitae commodo cursus volutpat posuere. Enim feugiat non donec amet. Nec lacinia id tortor sapien eget volutpat. Amet fames lobortis libero semper lectus sapien molestie.",
  },
  {
    title: "ARTICLE 3",
    author: "Bruno WEIL",
    date: "2021-01-01",
    catégorie: "Droit des sociétés",
    content:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus aliquam suspendisse tellus non ante sit id at nisl. Etiam vitae egestas mattis gravida ipsum tempus et. Ut tellus orci donec proin. Sit et neque purus rutrum vulputate mattis. Purus ac aliquet id nulla. Semper proin netus interdum senectus suspendisse et nunc dui. Purus mattis sit diam pulvinar nam. Nam leo tellus lorem vitae sociis vel aliquam. Urna pulvinar pulvinar nunc nisl blandit est curabitur. Sed diam viverra amet enim et magnis imperdiet purus. Hendrerit quisque massa massa euismod. Vitae maecenas amet amet hendrerit. Nunc ut risus nec sed volutpat mattis pharetra tellus congue. Lorem magna pulvinar placerat aliquam sit sapien fusce. Amet sit sit in risus aliquet ipsum amet urna eget. Purus felis volutpat elit sit quam adipiscing. Tellus metus diam ut erat dui. Ullamcorper adipiscing quis ultricies eu. Euismod gravida vitae commodo cursus volutpat posuere. Enim feugiat non donec amet. Nec lacinia id tortor sapien eget volutpat. Amet fames lobortis libero semper lectus sapien molestie.",
  },
];

const BlogPage = () => {
  const router = useRouter();

  const currentIndex = 1;

  const previousPost = fakeData[currentIndex - 1];
  const nextPost = fakeData[currentIndex + 1];

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
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
