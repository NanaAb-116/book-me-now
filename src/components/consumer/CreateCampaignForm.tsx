import React, { useEffect, useRef } from "react";
import ModalWrapper from "../ModalWrapper";
import ReceiptIconBlack from "../../assets/icons/ReceiptIconBlack";
import { useForm } from "react-hook-form";
import customAxios from "../../utils/customAxios";
import { toast } from "react-toastify";
import { Campaign } from "../../pages/Customers";

type FormInput = {
  title: string;
  description: string;
  target: string;
};

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  campaign: Campaign[] | null;
  setCampaign: React.Dispatch<React.SetStateAction<Campaign[] | null>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

const CreateCampaignForm = ({
  setShowModal,
  showModal,
  setCampaign,
  campaign,
  setTotalPages,
  totalPages,
}: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit = async (data: FormInput) => {
    try {
      await customAxios.post("/campaign", {
        campaignTitle: data.title,
        description: data.description,
        targetGroup: data.target,
      });
      setCampaign((prevState) => [
        {
          _id: Date.now().toLocaleString(),
          campaignTitle: data.title,
          description: data.description,
          targetGroup: data.target,
          campaignStatus: "active",
        },
        ...(prevState as Campaign[]),
      ]);
      setTotalPages(campaign ? Math.ceil(totalPages / 10) : 1);
      setShowModal(false);
    } catch (error: any) {
      if (error.response.status === 400) {
        toast.error("Campaign Already Exists");
        return;
      }
    }

    reset();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(!showModal);
        reset();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [reset, setShowModal, showModal]);

  const maxWords = (max: number) => (value: string) => {
    const words = value.trim().split(/\s+/);
    if (words.length > max) {
      return `Maximum ${max} words allowed.`;
    }
    return true;
  };

  const checkTarget = (value: string) => {
    if (value === "Select your target group") {
      return "Select a target";
    }
    return true;
  };

  return (
    <ModalWrapper>
      <div
        ref={modalRef}
        className="w-[30rem] max-h-[90%] bg-white shadow-md rounded-md z-20 p-8 overflow-y-scroll"
      >
        <h4 className="flex items-center gap-2 font-semibold text-lg">
          <ReceiptIconBlack /> Create a campaign
        </h4>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          {/* Campaign Title */}

          <label
            htmlFor="title"
            className="text-[#2B3834] text-sm font-semibold block mb-3"
          >
            Campaign Title
          </label>
          <input
            style={errors.title && { border: "1px solid red" }}
            {...register("title", {
              required: true,
            })}
            aria-invalid={errors.title ? "true" : "false"}
            type="text"
            id="title"
            placeholder="Write your campaign title here"
            className="border-[1px] border-[##CCCFCE66] p-4 rounded-md h-12 w-full outline-none"
          />

          {/* Description */}

          <label
            htmlFor="description"
            className="text-[#2B3834] text-sm font-semibold block mb-3 mt-8"
          >
            Description
          </label>
          <textarea
            style={errors.description && { border: "1px solid red" }}
            {...register("description", {
              required: true,
              validate: maxWords(100),
            })}
            aria-invalid={errors.description ? "true" : "false"}
            placeholder="Write your message here"
            id="description"
            className="border-[1px] border-[##CCCFCE66] p-4 rounded-md h-72 w-full outline-none resize-none"
          ></textarea>
          <p className="text-right text-[#CCCFCE] text-sm">Max: 100 words</p>

          {/* Target group */}

          <label
            htmlFor="target"
            className="text-[#2B3834] text-sm font-semibold block mt-8 mb-3"
          >
            Target group
          </label>
          <select
            style={errors.target && { border: "1px solid red" }}
            {...register("target", {
              required: true,
              validate: checkTarget,
            })}
            aria-invalid={errors.target ? "true" : "false"}
            id="target"
            className="border-[1px] border-[##CCCFCE66] px-4 rounded-md h-12 w-full outline-none"
            defaultValue="Select your target group"
          >
            <option value="Select your target group" disabled>
              Select your target group
            </option>
            <option value="all customers">All customers</option>
            <option value="male customers">Male customers</option>
            <option value="female customers">Female customers</option>
          </select>

          <button
            type="submit"
            className="bg-[#004741] w-full h-12 mt-8 text-white font-semibold rounded-md"
          >
            Submit your comment
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default CreateCampaignForm;
