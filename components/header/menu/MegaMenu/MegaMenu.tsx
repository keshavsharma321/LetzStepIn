import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { megaMenuActions } from "../../../../store/megaMenu-slice";
import { Transition } from "react-transition-group";
import { useLanguage } from "../../../../hooks/useLanguage";
import { GoGrabber, GoHeart, GoWatch } from "react-icons/go";
import MenusContainer from "./MenusContainer";
import { IMegaMenuRootState } from "../../../../lib/types/megaMenu";

const MegaMenu = () => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const dispatch = useDispatch();
  function showMegaMenuHandler() {
    dispatch(megaMenuActions.openMegaMenu());
  }
  function closeMegaMenuHandler() {
    dispatch(megaMenuActions.closeMegaMenu());
  }
  const isMegaMenuOpen = useSelector(
    (state: IMegaMenuRootState) => state.megaMenu.isMegaMenuOpen
  );

  return (
    <div
      className="flex items-center"
      onMouseOver={showMegaMenuHandler}
      onMouseOut={closeMegaMenuHandler}
    >
      {/* <div className="flex items-center font-bold cursor-pointer ">
        <GoHeart style={{ fontSize: "1.5rem" }} />
        <h3 className="ltr:ml-1 rtl:mr-1 text-lg font-serif ml-2">{t.CategoryOfProducts1}</h3>
      </div> */}

      <Transition
        nodeRef={nodeRef}
        in={isMegaMenuOpen!}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (

            <></>
          );
        }}
      </Transition>
    </div>
  );
};

export default MegaMenu;
