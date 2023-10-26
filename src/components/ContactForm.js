import React from "react";
import Button from "@/components/Button";

const ContactForm = () => {
  return (
    <div className="w-1/2 px-5 py-10 px-40">
      <h2 className="text-xl font-bold underblue text-white text-center mb-5">Restons en Contact</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-600 text-xs font-bold mb-2" htmlFor="name">
            Nom
          </label>
          <input
            className="bg-[#2E2E2E] text-gray-600 placeholder-gray-600 w-full py-2 px-3 border border-gray-600 focus:border-primary rounded"
            id="name"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-[#2E2E2E] text-gray-600 placeholder-gray-600 w-full py-2 px-3 border border-gray-600 focus:border-primary rounded"
            id="email"
            type="email"
            placeholder="John@Doe.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-xs font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-[#2E2E2E] text-gray-600 placeholder-gray-600 w-full py-2 px-3 border border-gray-600 focus:border-primary rounded"
            id="message"
            placeholder="...votre message"
            rows="4"></textarea>
        </div>
        <div className="flex justify-end">
          <Button className={"w-40"} color="primary">
            Envoyer
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
