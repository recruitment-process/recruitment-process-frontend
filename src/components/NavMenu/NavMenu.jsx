import { NavMenuLink } from '../UI/NavMenuLink/NavMenuLink';

import './NavMenu.scss';

// menu icons
import {
  mainIcon,
  calendarIcon,
  messageIcon,
  vacancyIcon,
  candidateIcon,
  staffIcon,
  reportsIcon,
  settingsIcon,
  supportIcon,
} from '../../images/icons/navIcons';

const NavMenu = () => (
  <div className="nav-menu">
    <NavMenuLink text="Главная" path="/" icon={mainIcon} />
    <NavMenuLink text="Календарь" path="/calendar" icon={calendarIcon} />
    <NavMenuLink text="Сообщения" path="/messages" icon={messageIcon} />
    <div className="nav-menu__splitter" />
    <NavMenuLink text="Вакансии" path="/vacancies" icon={vacancyIcon} />
    <NavMenuLink text="Кандидаты" path="/candidates" icon={candidateIcon} />
    <NavMenuLink text="Coтрудники" path="/staff" icon={staffIcon} />
    <NavMenuLink text="Отчеты" path="/reports" icon={reportsIcon} />
    <div className="nav-menu__splitter" />
    <NavMenuLink text="Настройки" path="/settings" icon={settingsIcon} />
    <NavMenuLink text="Поддержка" path="/support" icon={supportIcon} />
  </div>
);

export default NavMenu;
