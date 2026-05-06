import { PRIVACY_POLICY_CONTENT_MARKDOWN } from "@/constants/PRIVACY_POLICY";
import Markdown from "react-markdown";

export default function PrivacyPolicy() {
  return (
    <div>
      <Markdown>{PRIVACY_POLICY_CONTENT_MARKDOWN}</Markdown>
    </div>
  );
}
