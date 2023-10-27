const BlogPost = ({ postData }) => {
  return (
    <article>
      <h1 className="mt-8">{postData.title}</h1>
      <p>{postData.content}</p>
    </article>
  );
};

export default BlogPost;
