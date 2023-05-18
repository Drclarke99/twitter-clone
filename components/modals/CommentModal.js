import { closeCommentModal } from "@/redux/modalSlice";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function CommentModal() {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
      >
        <div
          className="w-full h-full relative
                rounded-lg bg-black border border-gray-500
                sm:w-[600px] sm:h-[386px] text-white
                sm:p-10 p-4"
        >
          <div
            className="absolute w-[2px] h-[77px] bg-gray-500
          left-[40px] top-[96px] sm:left-[64px] sm:top-[120px]
          "
          ></div>

          <div
            className="absolute top-4 cursor-pointer"
            onClick={() => dispatch(closeCommentModal())}
          >
            <XIcon className="w-6" />
          </div>

          <div className="mt-8">
            <div className="flex space-x-3">
              <img
                src="/assets/kylie.png"
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <div className="flex space-x-1.5">
                  <h1 className="font-bold">Kylie</h1>
                  <h1 className="text-gray-500">@kylie</h1>
                </div>
                <p className="mt-1">This is awesome</p>
                <h1 className="text-gray-500 text-[15px] mt-2">
                  Replying to <span className="text-[#1b9bf0]">@xgs</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-11">
            <div className="flex space-x-3">
              <img
                src="/assets/kylie.png"
                className="w-12 h-12 object-cover rounded-full"
              />
              <div className="w-full">
                <textarea
                  placeholder="Tweet your reply"
                  className="w-full
                    bg-transparent resize-none text-lg outline-none
                "
                />

                <div className="pt-4 flex justify-between border-t border-gray-700">
                  <div className="flex space-x-0">
                    <div className="iconAnimation">
                      <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconAnimation">
                      <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconAnimation">
                      <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconAnimation">
                      <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconAnimation">
                      <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                  </div>
                  <button
                    className="
                    bg-[#1d9bf0] rounded-full px-4 py-1.5
                    disabled:opacity-50"
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
