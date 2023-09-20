import React, { useRef } from 'react';
import './ModalImage.scss';
import { AddImageDragDrop } from './AddImage';

export function AddImageModal() {
  const modalRef: any = useRef();
  return (
    <div>
      <button // 이미지 추가하는 버튼 (Modal open)
        type="button"
        className="btn btn-primary btn--AddImage"
        onClick={() => modalRef.current?.showModal()}
      >
        이미지 추가
      </button>

      <dialog ref={modalRef}>
        <h1>Image Upload Page</h1>

        <AddImageDragDrop />

        <button
          onClick={async () => {
            await modalRef.current?.close();
            location.reload();
          }} // 📍 모달 닫기 버튼
        >
          Close
        </button>
      </dialog>
    </div>
  );
}