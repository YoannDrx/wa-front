import Image from "next/image";

const CommentCard = ({ name, date, content }) => {
  return (
    <div className={"w-full border p-4 mb-4 relative leftBlueCard"}>
      <div className="absolute top-2 right-2 font-bold text-primary">
        <button className="text-sm">Reply</button>
      </div>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Image className="rounded-full" src="/assets/blog/user1.png" alt="Profile" width={70} height={70} />
        </div>
        <div className="ml-4 flex-grow">
          <p className="font-bold mb-1">{name}</p>
          <p className="text-xs text-gray-500 mb-1">{date}</p>
          <p className="mb-1 text-xs">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
