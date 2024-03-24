import { isMobileAndTablet } from 'entities/userDevice';

export const fixUserDevise = () => {
  const isMobile = isMobileAndTablet();

  window.is_mobile = isMobile;
  document.body.classList.add(isMobile ? 'mobile' : 'desktop');
};
