import { t } from "i18next";
import Button from "./Button";
import CommentCard from "./CommentCard";

const CommentSection = () => {
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold text-left mb-4">Leave a Comment</h2>
      <div>
        <textarea className="w-full border rounded p-2 mb-4" rows="5" placeholder="Tapez votre commentaire..."></textarea>
      </div>
      <div className="flex space-x-4 mb-4">
        <input className="border rounded p-2 flex-1" type="text" placeholder="Votre nom" />
        <input className="border rounded p-2 flex-1" type="email" placeholder="Votre email" />
      </div>
      <div className="text-right">
        <Button className={"w-40"} color="primary">
          {t("Envoyer")}
        </Button>
      </div>
      <div className="my-8">
        <CommentCard
          name="John Doe"
          date="2021-10-25"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <CommentCard
          name="Jane Doe"
          date="2021-10-24"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
    </div>
  );
};

export default CommentSection;
