import React, { ChangeEvent, useState } from "react";
import { Modal, Upload } from "../../common";

type Props = {
  closeModal(): void;
  handleEmbedPostClick(url: string): Promise<void>;
};

const UploadPost = ({ closeModal, handleEmbedPostClick }: Props) => {
  const [postUrl, setpostUrl] = useState<string>("");

  const embedPost = async () => {
    await handleEmbedPostClick(postUrl);

    closeModal();
  };

  return (
    <div>
      <Modal isOpen closeModal={closeModal}>
        <div className="my-4 flex flex-col gap-y-1">
          <label className="text-xs uppercase">Enter Facebook Page Link</label>
          <input
            type="text"
            className="border px-1 py-2 outline-none"
            value={postUrl}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setpostUrl(e.target.value)
            }
          />
        </div>
        <div className="space-x-4 mt-4">
          <button
            className="py-2 border-0 px-4 rounded bg-green-600 text-white font-semibold outline-none"
            onClick={embedPost}
          >
            Embed
          </button>

          <button
            className="py-2 border bg-red-600 px-4 rounded text-white"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UploadPost;
