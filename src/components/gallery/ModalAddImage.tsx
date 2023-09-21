import React, { useRef } from 'react';
import { AddImageDragDrop } from './NavAddImage';
import './_modal.scss';
import './ModalAddImage.scss';

export function AddImageModal(): JSX.Element {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  return (
    <div>
      <button // 이미지 추가하는 버튼 (Modal open)
        type="button"
        className="btn-addImage btn btn-secondary"
        onClick={() => modalRef.current?.showModal()}
      >
        이미지 업로드
      </button>

      <dialog ref={modalRef} className="modal-container modal-container-image">
        <div className="modal-inner modal-addImage-inner">
          <h2>Image Upload Page</h2>

          <AddImageDragDrop />

          <button
            type="button"
            className="btn-close"
            onClick={async () => {
              await modalRef.current?.close();
              location.reload();
            }}
          />
        </div>
      </dialog>
    </div>
  );
}