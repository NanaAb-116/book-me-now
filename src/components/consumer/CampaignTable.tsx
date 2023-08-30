import { useEffect, useState } from "react";
import customAxios from "../../utils/customAxios";
import { HiMiniArrowLeft, HiMiniArrowRight } from "react-icons/hi2";
import { RiMoreLine } from "react-icons/ri";
import { Campaign } from "../../pages/Customers";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";

type Props = {
  campaign: Campaign[] | null;
  setCampaign: React.Dispatch<React.SetStateAction<Campaign[] | null>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
};

const CampaignTable = ({
  setCampaign,
  campaign,
  setTotalPages,
  totalPages,
}: Props) => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCampaign = async () => {
      setIsLoading(true);
      try {
        const { data } = await customAxios.get(
          `/campaign/?page=${page}&limit=10`
        );
        setCampaign(data.campaign);
        setTotalPages(data.totalPages);
      } catch (error) {}

      setIsLoading(false);
    };
    fetchCampaign();
  }, [page, setCampaign, setTotalPages]);

  const handlePage = (value: number) => {
    if (value <= totalPages) {
      setPage(value);
    }
  };
  return (
    <>
      <Backdrop open={isLoading}>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </Backdrop>
      <div className="bg-white mt-8 min-h-[710px] overflow-y-scroll">
        <table className="w-full rounded-t-lg overflow-hidden">
          <thead className="">
            <tr className="font-semibold text-[#00100B] bg-[#ECECEB] text-left border-2 border-[#E5E5E4] border-b-0">
              <th className="p-5 w-[20%]">Campaign Title</th>
              <th className="p-5 w-[50%]">Description</th>
              <th className="p-5 w-[15%]">Target Group</th>
              <th className="p-5 w-[15%]">Campaign Status</th>
            </tr>
          </thead>
          <tbody className="">
            {campaign?.slice(0, 11).map((item) => {
              return (
                <tr
                  key={item._id}
                  className="font-light text-[#00100B] bg-white text-left border-b-[1px] border-[#E5E5E4]"
                >
                  <td className="p-5 capitalize">
                    {item.campaignTitle.length < 25
                      ? item.campaignTitle
                      : item.campaignTitle.slice(0, 20) + "..."}
                  </td>
                  <td className="p-5 capitalize">
                    {item.description.length < 65
                      ? item.description
                      : item.description.slice(0, 65) + "..."}
                  </td>
                  <td className="p-5 capitalize">{item.targetGroup}</td>
                  <td className="p-5 capitalize">{item.campaignStatus}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center space-x-2 py-8">
        <HiMiniArrowLeft
          className={`cursor-pointer text-xl ${
            page === 1 ? "text-gray-500" : "text-[#004741]"
          }`}
          onClick={() => handlePage(page <= 1 ? 1 : page - 1)}
        />
        <span
          className={`cursor-pointer rounded-full h-8 w-8 flex items-center justify-center text-[12px] ${
            page === 1 ? "bg-[#004741] text-white" : "bg-white text-[#004741]"
          }`}
          onClick={() => handlePage(1)}
        >
          1
        </span>
        {totalPages > 1 && (
          <span
            className={`cursor-pointer rounded-full h-8 w-8 flex items-center justify-center text-[12px] ${
              page === 2 ? "bg-[#004741] text-white" : "bg-white text-[#004741]"
            }`}
            onClick={() => handlePage(2)}
          >
            2
          </span>
        )}
        {totalPages > 3 && page > 2 && page !== totalPages && (
          <span
            className={`cursor-pointer rounded-full h-8 w-8 flex items-center justify-center text-[12px] ${
              totalPages > 3
                ? "bg-[#004741] text-white"
                : "bg-white text-[#004741]"
            }`}
            onClick={() => handlePage(3)}
          >
            {page}
          </span>
        )}
        {totalPages > 3 && (
          <span
            className="cursor-pointer bg-white rounded-full h-8 w-8 flex items-center justify-center text-[#004741]"
            onClick={() => handlePage(3)}
          >
            <RiMoreLine />
          </span>
        )}
        {totalPages > 3 && (
          <span
            className={`cursor-pointer rounded-full h-8 w-8 flex items-center justify-center text-[12px] ${
              page === totalPages
                ? "bg-[#004741] text-white"
                : "bg-white text-[#004741]"
            }`}
            onClick={() => handlePage(totalPages)}
          >
            {totalPages}
          </span>
        )}
        <HiMiniArrowRight
          className={`cursor-pointer text-xl ${
            page === totalPages ? "text-gray-500" : "text-[#004741]"
          }`}
          onClick={() => handlePage(page + 1)}
        />
      </div>
    </>
  );
};

export default CampaignTable;
