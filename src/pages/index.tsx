import { LinkCard } from "@/components/LinkCard";
import SsButton from "@/components/button";
import SsInput from "@/components/input";
import { linkData } from "@/data/LinkData";
import classNames from "classnames";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { FaLinkedin, FaPinterest, FaTwitter, FaWhatsapp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });
const words = ["whatsApp", "linkedIn", "twitter", "pinterest"];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    setText(words[index]);
  }, [index, words]);

  const scrollToSocialLink = (id: string) => {
    setClickedItem(id);
    const socialLink = document.getElementById(id);
    if (socialLink) {
      socialLink.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setClickedItem(null);
      }, 2000);
    }
  };

  return (
    <main
      className={`flex min-h-screen xl:mx-[4rem] 2xl:mx-[12rem] mb-12 flex-col gap-[10rem] ${inter.className}`}
    >
      <span className="gradient-text font-bold text-lg flex justify-start pt-4 p-2">
        SocialShare
      </span>
      <section className="items-center md:px-12 2xl:mx-[14rem]  justify-between flex-col flex">
        <div className="flex justify-center gap-12 items-center flex-col">
          <p className="text-[2.8rem] lg:max-w-[60%] text-center font-bold">
            Get Social shareable links for{" "}
            <span className="gradient-text"> {text}</span>
          </p>

          <SsButton className="w-full pb-3 bg-black">Take a tour</SsButton>
          <div className="grid md:grid-cols-2 gap-5 px-4 lg:mt-20">
            <div className="col-span-1 flex flex-col lg:w-[80%]">
              <h4 className="uppercase font-bold text-[.9rem] pb-4">
                Shareable Data
              </h4>
              <p className="text-sm text-gray-500">
                Add data you'd like to share in this section. Note that fields
                differ by social media
              </p>
              <div className="mt-4 flex flex-col gap-6">
                <div>
                  <SsInput
                    name="linkToShare"
                    label="Link to share"
                    placeholder="https://example.com"
                  />
                  <div className="flex items-center gap-2 text-[.76rem] font-[500] text-gray-500">
                    <p>Available for:</p>
                    <FaTwitter
                      className="text-black cursor-pointer"
                      onClick={() => scrollToSocialLink("twitter")}
                    />{" "}
                    <FaLinkedin
                      className="text-blue-600 cursor-pointer"
                      onClick={() => scrollToSocialLink("linkedIn")}
                    />
                    <FaWhatsapp
                      className="text-green-400 cursor-pointer"
                      onClick={() => scrollToSocialLink("whatsApp")}
                    />
                    <FaPinterest
                      className="text-red-600 cursor-pointer"
                      onClick={() => scrollToSocialLink("pinterest")}
                    />
                  </div>
                </div>
                <SsInput
                  textarea
                  name="textToShare"
                  label="Text to share"
                  placeholder="Checkout this resource at example"
                />{" "}
                <SsInput
                  name="imageUrl"
                  label="Image url to share"
                  placeholder="https://example.com/image.png"
                />
              </div>
            </div>
            <div className="col-span-1  flex flex-col">
              <h4 className="uppercase font-bold  text-[.9rem] pb-4">
                Social Links
              </h4>
              <div className="flex flex-col gap-8">
                {linkData.map((el) => (
                  <div
                    key={el.id}
                    id={el.title}
                    className={classNames(
                      "flex flex-col justify-between gap-2 rounded-xl p-1 h-[17vh] w-full",
                      { "border border-blue-500": clickedItem === el.title }
                    )}
                  >
                    <LinkCard
                      title={el.title}
                      link={el.link}
                      className={el.title}
                      onClick={() => scrollToSocialLink(el.title)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
