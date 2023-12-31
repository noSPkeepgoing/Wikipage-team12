import React, { useRef } from 'react';
import './_modal.scss';
import './SlideRow.scss';
import { IImageData } from './SlideRow';
import { ModalComment } from './ModalCommentList';
interface IMapImages extends Partial<IImageData> {
  userId: string;
  nickName: string;
  categoryId: string;
  commentsListData: Array<object>;
  slideClassName?: string;
  userImage: any;
}

export function MapImages({
  userId,
  nickName,
  categoryId,
  commentsListData,
  image,
  like,
  slideClassName,
  userImage,
}: IMapImages): JSX.Element {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  return (
    <div className="slide-card">
      <div>
        <img
          key={image.id}
          id={categoryId}
          className="slide-images"
          src={image.image}
          onClick={() => modalRef.current?.showModal()}
        />

        <dialog
          ref={modalRef}
          className="modal-container modal-container-comment"
        >
          <div className="modal-inner modal-comment-inner">
            <img src={userImage} alt="" />

            <ModalComment
              image={image.image}
              imgId={image.id}
              categoryId={categoryId}
              commentsListData={commentsListData}
              writerId={userId}
              writerImage={userImage}
              writerName={nickName}
              likeData={like}
            />

            <button
              type="button"
              className="btn btn-secondary btn-modalClose"
              onClick={async () => {
                await modalRef.current?.close();
                location.reload();
              }}
            >
              Close
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
}
