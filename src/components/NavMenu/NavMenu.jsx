import styles from './NavMenu.module.scss';

import { NavMenuLink } from '../UI/NavMenuLink/NavMenuLink';

// icons
import Logo from '../UI/Logo/Logo';

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
	questionsIcon,
	supportIcon,
	exitIcon,
} from '../../images/icons/navIcons';

export const NavMenu = () => (
	<div className={styles.wrapper}>
		<Logo marginBottom="50px" />

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
			className="marginBottom"
		/>

		<NavMenuLink text="Coтрудники" path="/staff" icon={staffIcon} />
		<NavMenuLink
			text="Отчеты"
			path="/reports"
			icon={reportsIcon}
			className="marginBottom"
		/>

		<NavMenuLink text="Настройки" path="/settins" icon={settinsIcon} />
		<NavMenuLink text="Частые вопросы" path="/questions" icon={questionsIcon} />
		<NavMenuLink
			text="Поддержка"
			path="/support"
			icon={supportIcon}
			className="styles.marginBottom"
		/>

		<NavMenuLink path="/exit" text="Выход" icon={exitIcon} className="color" />
	</div>
);
