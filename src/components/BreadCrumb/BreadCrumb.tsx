import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './BreadCrumb.scss';
import '../../styles/utils/_typography.scss';

export const BreadCrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="bread-crumb">
      {pathnames.length > 0 && (
        <div className="bread-crumb__list">
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return (
              <span key={to} className="bread-crumb__item">
                {index > 0 && <span className="bread-crumb__separator">/</span>}
                <Link to={to} className="body-text bread-crumb__text">
                  {decodeURIComponent(value).replace(/-/g, ' ')}
                </Link>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
