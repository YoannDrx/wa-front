const NavigationPosts = ({ previous, next }) => {
  return (
    <div className="flex justify-between mt-10">
      {previous && (
        <div className="flex items-center">
          <span className="text-primary text-lg">←</span>
          <div className="ml-2">
            <div className="text-sm text-gray-500">Previous Post</div>
            <div className="text-primary">{previous.title}</div>
          </div>
        </div>
      )}
      {next && (
        <div className="flex items-center">
          <div className="mr-2">
            <div className="text-sm text-gray-500">Next Post</div>
            <div className="text-primary">{next.title}</div>
          </div>
          <span className="text-primary text-lg">→</span>
        </div>
      )}
    </div>
  );
};

export default NavigationPosts;
