import Navbar from "@/components/navigation/Navbar";
import { PRIVACY_POLICY_CONTENT_MARKDOWN } from "@/constants/PRIVACY_POLICY";
import Markdown from "react-markdown";

export default function PrivacyPolicy() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-base-100">
      <Navbar />
      <div className="mt-16 doublePaddingContainer">
        <Markdown>{PRIVACY_POLICY_CONTENT_MARKDOWN}</Markdown>
      </div>
    </div>
  );
}
