import Link from "next/link";

const NavigationPosts = ({ previous, next }) => {
  return (
    <div className="flex justify-between mt-10">
      {previous && (
        <Link href={`/post/${previous.id}`} className="flex items-center">
          <span className="text-primary text-lg font-bold">←</span>
          <div className="ml-2">
            <div className="text-sm text-gray-500">Previous Post</div>
            <div className="text-primary font-bold">{previous.title}</div>
          </div>
        </Link>
      )}
      {next && (
        <Link href={`/post/${next.id}`} className="flex items-center">
          <div className="mr-2">
            <div className="text-sm text-gray-500">Next Post</div>
            <div className="text-primary font-bold">{next.title}</div>
          </div>
          <span className="text-primary text-lg font-bold">→</span>
        </Link>
      )}
    </div>
  );
};

export default NavigationPosts;
