import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import { PRIVACY_POLICY_CONTENT_MARKDOWN } from "@/constants/PRIVACY_POLICY";
import Markdown from "react-markdown";

export default function PrivacyPolicy() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-base-100">
      <Navbar />
      <div className="mt-16 doublePaddingContainer">
        <Markdown
          components={{
            h1: ({ children }) => {
              return <h1 className="text-3xl font-display">{children}</h1>;
            },

            h2: ({ children }) => {
              return <h2 className="text-2xl mt-12">{children}</h2>;
            },

            h3: ({ children }) => {
              return <h3 className="text-xl mt-6">{children}</h3>;
            },

            h4: ({ children }) => {
              return <p className="text-base-content/60 mt-2">{children}</p>;
            },

            p: ({ children }) => {
              return (
                <p className="text-lg text-base-content/90 mt-2">{children}</p>
              );
            },

            strong: ({ children }) => {
              return <strong className="font-normal">{children}</strong>;
            },

            li: ({ children }) => {
              return <li className="list-disc ml-8">{children}</li>;
            },
          }}
        >
          {PRIVACY_POLICY_CONTENT_MARKDOWN}
        </Markdown>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
