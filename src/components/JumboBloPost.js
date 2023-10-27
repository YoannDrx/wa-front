const JumboBlogPost = ({ imageHref, author, date, category }) => {
  return (
    <div className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${imageHref})` }}>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent">
        <div className="text-white p-8 pl-4 flex justify-start">
          <div className="mr-8">
            <div className="square-blue">Auteur:</div>
            <div className="text-sm opacity-50 ml-4">{author}</div>
          </div>
          <div className="mr-8">
            <div className="square-blue">Date de publication:</div>
            <div className="text-sm opacity-50 ml-4">{date}</div>
          </div>
          <div>
            <div className="square-blue">Catégorie:</div>
            <div className="text-sm opacity-50 ml-4">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumboBlogPost;
