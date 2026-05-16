import { CREATE_VOW } from "@/constants/CREATE_VOW";
import { VowVisibility } from "@/types/VowVisibility";
import { ArrowRight, CheckCheckIcon } from "lucide-react";
import { ChangeEvent, SubmitEvent, useState } from "react";
import { VowPreview } from "./VowPreview";
import { CreateVowHeader } from "./CreateVowHeader";
import { CreateVowFormTitle } from "./CreateVowFormTitle";
import { CreateVowFormDescription } from "./CreateVowFormDescription";
import { CreateVowFormDeadline } from "./CreateVowFormDeadline";
import { CreateVowFormVisibility } from "./CreateVowFormVisibility";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/QUERY_KEYS";
import { useModalStore } from "@/store/modalStore";
import { closeModal, openModal } from "@/utils/functions/modalActions";
import { MODALS } from "@/constants/MODALS";
import { PRODUCT } from "@/constants/PRODUCT";

export const CreateVowForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { setModalInformation } = useModalStore();

  const [vowTitle, setVowTitle] = useState<string>("");
  const [vowDescription, setVowDescription] = useState<string>("");
  const [vowDeadlineDate, setVowDeadlineDate] = useState<string>("");
  const [vowDeadlineTime, setVowDeadlineTime] = useState<string>("");
  const [vowVisibility, setVowVisibility] = useState<VowVisibility>("public");

  const [loading, setLoading] = useState<boolean>(false);
  const [vowId, setVowId] = useState<string>("");
  const [codeCopied, setCodeCopied] = useState<boolean>(false);

  const handleVowTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    if (title.length > CREATE_VOW.MAX_VOW_TITLE_LENGTH) return;
    setVowTitle(title);
  };

  const handleVowDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const description = e.target.value;
    if (description.length > CREATE_VOW.MAX_VOW_DESCRIPTION_LENGTH) return;
    setVowDescription(description);
  };

  const handleVowDeadlineDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVowDeadlineDate(e.target.value);
  };

  const handleVowDeadlineTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVowDeadlineTime(e.target.value);
  };

  const handleFormSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const dateTime = new Date(`${vowDeadlineDate}T${vowDeadlineTime}:00.000`);
    const deadlineTimestampUTC = dateTime.getTime();

    try {
      setLoading(true);
      const res = await fetch("/api/vows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: vowTitle.trim(),
          description: vowDescription.trim(),
          deadlineTimestampUTC: deadlineTimestampUTC,
          visibility: vowVisibility,
        }),
      });

      const data = await res.json();
      setVowId(data.vowId);
    } catch (error) {
      setModalInformation({
        modalType: "error",
        modalTitle: "Failed to create vow",
        modalText:
          "We could not create your vow at this moment. Please try again later.",
        primaryButtonText: "Okay",
        onPrimaryButtonClick: () => {
          closeModal(MODALS.GENERIC_MODAL.ID);
        },
      });
      openModal(MODALS.GENERIC_MODAL.ID);
      console.error(error);
      return;
    } finally {
      setLoading(false);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_PROFILE],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_VOWS],
      });
    }
  };

  // Post vow-creation actions

  const handleCopyButtonClick = async () => {
    try {
      await navigator.clipboard.writeText(`${PRODUCT.BASE_URL}/v/${vowId}`);
      setCodeCopied(true);
      setTimeout(() => {
        setCodeCopied(false);
      }, 1000);
    } catch (error) {
      console.error("Copy failed.", error);
    }
  };

  const handleDashboardButtonClick = () => {
    router.push("/dashboard");
    router.refresh();
  };

  const handleCreateAnotherVowClick = () => {
    setVowId("");
    setVowTitle("");
    setVowDescription("");
    setVowDeadlineDate("");
    setVowDeadlineTime("");
    setVowVisibility("public"); // Default
  };

  if (!vowId) {
    return (
      <>
        <CreateVowHeader />
        <form
          className="mt-16 w-full sm:w-lg md:w-xl lg:w-2xl flex flex-col gap-12"
          onSubmit={handleFormSubmit}
        >
          <CreateVowFormTitle
            vowTitle={vowTitle}
            handleVowTitleChange={handleVowTitleChange}
          />

          <CreateVowFormDescription
            vowDescription={vowDescription}
            handleVowDescriptionChange={handleVowDescriptionChange}
          />

          <CreateVowFormDeadline
            vowDeadlineDate={vowDeadlineDate}
            vowDeadlineTime={vowDeadlineTime}
            handleVowDeadlineDateChange={handleVowDeadlineDateChange}
            handleVowDeadlineTimeChange={handleVowDeadlineTimeChange}
          />

          <CreateVowFormVisibility
            vowVisibility={vowVisibility}
            setVowVisibility={setVowVisibility}
          />

          <div className="border-b border-base-300"></div>

          <div>
            <p className="text-base-content/60 mb-4">Preview</p>

            <VowPreview
              title={vowTitle}
              deadlineDate={vowDeadlineDate}
              deadlineTime={vowDeadlineTime}
            />

            <div className="flex flex-col sm:flex-row w-full items-center justify-between mt-8">
              <p className="text-base-content/60 text-center sm:text-left">
                Once submitted, this vow is{" "}
                <span className="text-base-content/90">permanent.</span>
                <br />
                There is no delete - only resolution.
              </p>

              <button
                type={"submit"}
                className="btn btn-primary flex shrink-0 mt-4 sm:mt-0"
                disabled={loading}
              >
                Publish vow
                <span className="w-5 h-5 flex items-center justify-center">
                  {loading ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    <ArrowRight size={20} />
                  )}
                </span>
              </button>
            </div>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <motion.div
        className="fixed inset-0 z-50 w-screen h-screen bg-base-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <div className="w-full paddingContainer h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <CheckCheckIcon size={70} className="text-primary" />
          </motion.div>

          <h1 className="text-4xl font-display text-center">
            Your vow is <span className="text-primary italic">live.</span>
          </h1>
          <p className="max-w-md text-center text-accent mt-2">
            {
              "Your vow is now public and on record. Share the link - the clock is ticking."
            }
          </p>

          <div className="mt-8 w-full max-w-md sm:max-w-lg rounded-xl bg-base-200 p-4 flex flex-col sm:flex-row items-center justify-between border border-base-300 gap-4 sm:gap-0">
            <kbd className="text-accent text-center w-full max-w-md sm:max-w-lg wrap-break-word">{`${PRODUCT.BASE_URL}/v/${vowId}`}</kbd>
            <button
              disabled={codeCopied}
              type={"button"}
              className="btn btn-primary"
              onClick={handleCopyButtonClick}
            >
              {codeCopied ? "Copied!" : "Copy"}
            </button>
          </div>

          <div className="w-full max-w-lg justify-center flex flex-col xs:flex-row gap-2 mt-4">
            <button
              className="btn btn-primary"
              onClick={handleDashboardButtonClick}
            >
              Go to dashboard
            </button>
            <button
              type={"button"}
              className="btn"
              onClick={handleCreateAnotherVowClick}
            >
              Make another vow
            </button>
          </div>
        </div>
      </motion.div>
    );
  }
};
