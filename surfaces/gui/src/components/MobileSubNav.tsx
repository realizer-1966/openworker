// MobileSubNav — 모바일(≤1200px)에서 full-page surface 위에 표시되는 뒤로가기 바.
// 데스크톱에서는 렌더링되지 않는다(CSS .mobile-subnav { display: none }).
// 사이드바 메뉴에서 서피스를 열면 3탭바 대신 이 바가 나타나 세션으로 돌아간다.

import { Icon } from "./Icon";

interface Props {
  title: string;
  onBack: () => void;
}

export function MobileSubNav({ title, onBack }: Props) {
  return (
    <div className="mobile-subnav">
      <button
        className="mobile-subnav-back"
        onClick={onBack}
        aria-label="Back"
      >
        <Icon name="arrowLeft" size={20} />
      </button>
      <span className="mobile-subnav-title">{title}</span>
    </div>
  );
}