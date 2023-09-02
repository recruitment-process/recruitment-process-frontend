import './CandidateNavigation.scss';
import { NavMenuLink } from '../../UI/NavMenuLink/NavMenuLink';

const CandidateNavigation = () => (
  <nav className="candidate-navigation candidate-navigation_position">
    <NavMenuLink path="resume" text="Резюме" type="section" />
    <NavMenuLink path="contacts" text="Контакты" type="section" />
    <NavMenuLink path="stages" text="Воронка кандидата" type="section" />
    <NavMenuLink path="messages" text="Сообщения" type="section" />
  </nav>
);

export default CandidateNavigation;
