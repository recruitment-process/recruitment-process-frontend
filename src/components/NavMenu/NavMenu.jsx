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
	settinsIcon,
	supportIcon,
} from '../../images/icons/navIcons';

export const NavMenu = () => (
	<div className='nav-menu'>
		<NavMenuLink text="Главная" path="/main" icon={mainIcon} />
		<NavMenuLink text="Календарь" path="/calendar" icon={calendarIcon} />
		<NavMenuLink
			text="Сообщения"
			path="/messages"
			icon={messageIcon}
			className="marginBottom"
		/>

		<NavMenuLink text="Вакансии" path="/vacancys" icon={vacancyIcon} />
		<NavMenuLink
			text="Кандидаты"
			path="/candidates"
			icon={candidateIcon}
		/>

		<NavMenuLink text="Coтрудники" path="/staff" icon={staffIcon} />
		<NavMenuLink
			text="Отчеты"
			path="/reports"
			icon={reportsIcon}
			className="marginBottom"
		/>

		<NavMenuLink text="Настройки" path="/settins" icon={settinsIcon} />

		<NavMenuLink
			text="Поддержка"
			path="/support"
			icon={supportIcon}
			className="styles.marginBottom"
		/>

	</div>
);
