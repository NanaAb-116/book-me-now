import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ReceiptIconWhite from "../assets/icons/ReceiptIconWhite";
import CreateCampaignForm from "../components/consumer/CreateCampaignForm";
import CampaignTable from "../components/consumer/CampaignTable";
import { useForm } from "react-hook-form";

export type Campaign = {
  _id: string;
  campaignTitle: string;
  description: string;
  targetGroup: string;
  campaignStatus: string;
};

export type ResData = {
  campaign: Campaign[];
  totalCampaign: number;
  totalPages: number;
};

const Customers = () => {
  const { register, handleSubmit } = useForm<{ search: string }>();

  const [showModal, setShowModal] = useState(false);
  const [campaign, setCampaign] = useState<ResData | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const onSubmit = (data: { search: string }) => {
    setSearch(data.search);
    setPage(1);
  };

  return (
    <>
      <div className="bg-[#F2F2F2] min-h-screen pt-6">
        <div className="mx-auto sm:max-w-[1200px] px-2">
          <div>
            <h2 className="mb-1 text-xl font-semibold">Customers</h2>
            <p className="text-[#808785] text-sm font-light">
              See all your customers in one place
            </p>
          </div>
          <div className="mt-6 flex space-x-3 border-b-[1px] border-b-[#E5E5E4]">
            <p className="text-[#808785] text-sm font-light px-2 pb-4">
              Customer Log
            </p>
            <p className="text-[#00100B] text-sm font-semibold px-2 pb-4 border-b-2 border-[#00100B]">
              Campaigns
            </p>
          </div>
          <div className="mt-4 sm:flex gap-2 justify-between">
            <form
              className="relative mt-2 flex w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <CiSearch className="absolute top-4 left-3 text-2xl text-[#808785]" />
              <input
                type="text"
                placeholder="Search customer log by customer name, email address & phone number"
                className="border-[1px] border-[#E5E5E4] rounded-md pl-11 py-4 flex lg:w-[37rem] w-full outline-none"
                {...register("search")}
                onChange={(e) => {
                  if (e.target.value.trim() === "") {
                    setSearch("");
                    setPage(1);
                  }
                }}
              />
              <button className="ml-2 bg-white p-4 rounded-md border-[1px] border-[#004741] text-[#004741] lg:inline-block">
                Search
              </button>
            </form>
            <button
              className="bg-[#004741] text-white rounded-md px-4 h-14 w-[15rem] flex items-center space-x-2 mt-2"
              onClick={() => setShowModal(true)}
            >
              <ReceiptIconWhite className="text-xl" />
              <p>Create a campaign</p>
            </button>
          </div>
          <CampaignTable
            totalPages={totalPages}
            campaign={campaign}
            setCampaign={setCampaign}
            search={search}
            setPage={setPage}
            page={page}
          />

          {showModal && (
            <CreateCampaignForm
              setShowModal={setShowModal}
              showModal={showModal}
              campaign={campaign}
              setCampaign={setCampaign}
              setTotalPages={setTotalPages}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Customers;
