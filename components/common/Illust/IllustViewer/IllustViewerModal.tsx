import React, { FC } from "react";
import { mq } from "@/styles/mediaQueries";
import { css, ClassNames } from "@emotion/react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import { IllustViewer } from "./IllustViewer";

Modal.setAppElement("#__next");

const IllustViewerModal: FC = () => {
  const router = useRouter();

  const onClose = () => router.push(router.pathname);
  const isOpen = !!router.query.opusNo;

  return (
    <>
      <ClassNames>
        {({ css }) => (
          <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={css(modalStyles.content)}
            overlayClassName={css(modalStyles.overlay)}
          >
            <IllustViewer />
          </Modal>
        )}
      </ClassNames>
      {isOpen && (
        <button css={styles.closeButton} onClick={onClose}>
          閉じる
        </button>
      )}
    </>
  );
};

const modalStyles = {
  content: css(
    mq({
      overflow: "scroll",
      position: "fixed",
      left: [0, "180px"],
      right: [0, "180px"],
      top: ["initial", "50%"],
      bottom: [0, "initial"],
      transform: ["initial", "translateY(-50%)"],
      width: ["100vw", "auto"],
      maxHeight: ["calc(100% - 50px)", "calc(100% - 50px)"],
      backgroundColor: "#222",
      border: "none",
      borderRadius: [0, 8],
    })
  ),
  overlay: css(
    mq({
      zIndex: 1,
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, .8)",
    })
  ),
};

const styles = {
  closeButton: css(
    mq({
      position: "fixed",
      top: [14, 20],
      right: [14, 20],
      zIndex: 2,
    })
  ),
};

export { IllustViewerModal };
