import { useEffect, useState } from "react";
import classNames from "classnames";
import SsInput from "@/components/input";
import { DM_Sans, Inter } from "next/font/google";
import { linkData } from "@/data/LinkData";
import SsButton from "@/components/button";
import { LinkCard } from "@/components/LinkCard";
import { FaLinkedin, FaPinterest, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useTour } from "@reactour/tour";
import { Metadata } from "next";

const words = ["whatsApp", "linkedIn", "twitter", "pinterest"];

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Share socials",
  description: "Your shareable socials links",
};

export default function Home() {
  const { setIsOpen } = useTour();

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
      className={`flex min-h-screen xl:mx-[4rem] 2xl:mx-[12rem] 
      mb-12 flex-col gap-[5rem] md:gap-[10rem] ${dm_sans.className}`}
    >
      <nav className="gradient font-bold text-[1.2rem] flex justify-start mx-20 pt-5 p-2">
        SocialShare
      </nav>
      <section className="items-center lg:px-12 2xl:mx-[14rem] justify-between -pt-4 flex-col flex">
        <div className="flex justify-center gap-10 items-center flex-col">
          <p
            className="text-[2.2rem] md:text-[3rem] -mt-3 max-w-[85%] md:max-w-[70%]
           text-center font-bold leading-[1.3]"
          >
            Get Social shareable links for{" "}
            <span className="gradient-text capitalize"> {text}</span>
          </p>

          <SsButton
            onClick={() => setIsOpen(true)}
            className="w-full !-px-2 py-[7.85px] bg-black"
          >
            Take a tour
          </SsButton>
          <div className="grid md:grid-cols-2 md:mt-[7.1rem] w-full max-w-[900px]">
            <div className="col-span-1 step-one flex flex-col md:w-[80%] md:max-h-[45vh]">
              <h4 className="uppercase font-bold text-[.9rem] pb-2">
                Shareable Data
              </h4>
              <p className="text-sm text-gray-500">
                Add data you&apos;d like to share in this section. Note that
                fields differ by social media
              </p>
              <div className="mt-4 flex flex-col gap-6">
                <div>
                  <SsInput
                    name="linkToShare"
                    label="Link to share"
                    placeholder="https://example.com"
                  />
                  <div
                    className="flex items-center gap-2 text-[.76rem] font-[500]
                   text-gray-500"
                  >
                    <p>Available for:</p>
                    <FaTwitter
                      className="text-black cursor-pointer"
                      onClick={() => scrollToSocialLink("twitter")}
                    />{" "}
                    <FaLinkedin
                      className="text-blue-600 cursor-pointer"
                      onClick={() => scrollToSocialLink("linkedIn")}
                    />
                    <FaPinterest
                      className="text-red-600 cursor-pointer"
                      onClick={() => scrollToSocialLink("pinterest")}
                    />
                  </div>
                </div>
                <div>
                  <SsInput
                    textarea
                    name="textToShare"
                    label="Text to share"
                    placeholder="Checkout this resource at example"
                  />{" "}
                  <div>
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
                </div>
                <div>
                  <SsInput
                    name="imageUrl"
                    label="Image url to share"
                    placeholder="https://example.com/image.png"
                  />{" "}
                  <div className="flex items-center gap-2 text-[.76rem] font-[500] text-gray-500">
                    <p>Available for:</p>

                    <FaPinterest
                      className="text-red-600 cursor-pointer"
                      onClick={() => scrollToSocialLink("pinterest")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 step-two flex -ml-5 md:w-[105%] flex-col">
              <h4 className="uppercase font-bold  text-[.9rem] pb-4">
                Social Links
              </h4>
              <div className="flex flex-col gap-8">
                {linkData.map((el) => (
                  <div
                    key={el.id}
                    id={el.title}
                    className={classNames(
                      "flex flex-col justify-between gap-2 rounded-xl p-1 md:h-[17vh] w-full",
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
