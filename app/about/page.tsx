import Navbar from "@/components/navigation/Navbar";
import { ABOUT_PAGE_MARKDOWN_CONTENT } from "@/constants/ABOUT";
import Markdown from "react-markdown";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="mt-16 doublePaddingContainer">
        <Markdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-display italic text-primary">
                {children}
              </h1>
            ),

            h2: ({ children }) => <h2 className="text-xl mt-6">{children}</h2>,

            p: ({ children }) => (
              <p className="text-lg text-base-content/90 mt-4 leading-relaxed">
                {children}
              </p>
            ),

            a: ({ children, href }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/60 hover:text-primary transition-colors"
              >
                {children}
              </a>
            ),

            hr: () => <hr className="my-8 border-base-content/10" />,

            br: () => <br />,
          }}
        >
          {ABOUT_PAGE_MARKDOWN_CONTENT}
        </Markdown>
      </div>
    </div>
  );
}
