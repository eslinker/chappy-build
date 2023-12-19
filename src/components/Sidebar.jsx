import React from 'react'
import DropdownScore from "./sidemenu/DropdownScore";
import MenuitemSub from "./sidemenu/MenuitemSub";
import Menuitem from "./sidemenu/Menuitem";

export default function Sidebar() {
    const title = ['대시보드', '강의실', '이수증', '학습문의함', '결제내역', '계정관리'];

    return (
        <aside id="sidebar" className="sidebar ">
            <div className="sidebar-nav" id="sidebar-nav">
                <div className="menuDivide">
                    <div>
                        <Menuitem title={title[0]} icon='bi-grid-fill'/>
                        <DropdownScore title={title[1]} icon='bi-journal-bookmark-fill' id='score'/>
                        <MenuitemSub title={title[2]} icon='bi-award-fill' link={'activity'}/>
                    </div>
                    <div>
                        <div className="nav-heading mt-5">
                            마이 지원센터
                        </div>
                        <MenuitemSub title={title[3]} icon='bi-envelope-fill' link={'activity'}/>
                        <MenuitemSub title={title[4]} icon='bi-credit-card-fill' link={'activity'}/>
                    </div>
                </div>
                    <div className={'d-flex justify-content-end flex-column'}>
                        <MenuitemSub title={title[5]} icon='bi-person-fill' id='support'/>
                    </div>
            </div>
        </aside>
    )
}
