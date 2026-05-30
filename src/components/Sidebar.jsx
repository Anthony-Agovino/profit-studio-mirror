import { BookOpen, LayoutDashboard } from 'lucide-react';
import './Sidebar.css';

const guides = [
  {
    id: 'local-biz',
    label: 'Local Business Website Builder',
    active: true,
    icon: <LayoutDashboard size={16} />,
  },
  {
    id: 'coming-soon-1',
    label: 'Coming Soon',
    active: false,
    comingSoon: true,
    icon: <BookOpen size={16} />,
  },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar${isOpen ? ' sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <span className="sidebar__logo-text">Profit Studio</span>
        <span className="sidebar__logo-dot" />
      </div>

      <nav className="sidebar__nav" aria-label="Guides">
        <p className="sidebar__section-label">Guides</p>
        <ul className="sidebar__list">
          {guides.map(guide => (
            <li key={guide.id}>
              <button
                className={`sidebar__item${guide.active ? ' sidebar__item--active' : ''}${guide.comingSoon ? ' sidebar__item--disabled' : ''}`}
                onClick={guide.active ? onClose : undefined}
                disabled={guide.comingSoon}
                aria-current={guide.active ? 'page' : undefined}
              >
                <span className="sidebar__item-icon">{guide.icon}</span>
                <span className="sidebar__item-label">{guide.label}</span>
                {guide.comingSoon && (
                  <span className="sidebar__badge">Soon</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__footer">
        <p className="sidebar__footer-text">Profit Studio &copy; 2025</p>
      </div>
    </aside>
  );
}

export default Sidebar;
