import React, { useState, useEffect } from 'react';
import './NavBar.scss';
import { AddImageModal } from './ModalAddImage';
import { RootState } from 'redux/types'; // RootState 타입 추가
import { useSelector } from 'react-redux';

export function SideBarLink(): JSX.Element {
  const user = useSelector((state: RootState) => state);

  return (
    <div>
      <nav
        id="navbar-example2"
        className="gallNav navbar bg-body-tertiary px-3 mb-3"
      >
        <a className="navbar-brand" href="#">
          gallery
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#studyTips">
              공부꿀팁
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#events">
              이벤트
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#humors">
              유머
            </a>
          </li>
        </ul>
      </nav>

      {user.uid ? (
        <AddImageModal />
      ) : (
        <a href="/SignIn">이미지를 공유하고 싶다면 로그인을 해주세요!</a>
      )}
    </div>
  );
}