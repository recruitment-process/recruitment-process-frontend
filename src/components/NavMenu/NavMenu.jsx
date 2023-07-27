import styles from './NavMenu.module.scss';

import { NavMenuLink } from '../NavMenuLink/NavMenuLink';

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
			marginBottom="40px"
		/>

		<NavMenuLink text="Вакансии" path="/vacancys" icon={vacancyIcon} />
		<NavMenuLink
			text="Кандидаты"
			path="/candidates"
			icon={candidateIcon}
			marginBottom="40px"
		/>

		<NavMenuLink text="Coтрудники" path="/staff" icon={staffIcon} />
		<NavMenuLink
			text="Отчеты"
			path="/reports"
			icon={reportsIcon}
			marginBottom="40px"
		/>

		<NavMenuLink text="Настройки" path="/settins" icon={settinsIcon} />
		<NavMenuLink text="Частые вопросы" path="/questions" icon={questionsIcon} />
		<NavMenuLink
			text="Поддержка"
			path="/support"
			icon={supportIcon}
			marginBottom="40px"
		/>

		<NavMenuLink path="/exit" text="Выход" icon={exitIcon} color="#929393" />
	</div>
);
