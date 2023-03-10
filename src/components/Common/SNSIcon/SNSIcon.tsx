import { SNSType } from './SNSIcon.types';

const SNSIcon = ({
  href = "#",
  alt = "#",
  imgSrc = "https://www.linkedin.com/company/77745265/admin/",
}: SNSType) => {
  return (
    <a
      href={href}
      target={href === "#" ? "" : "_blank"}
      rel="noopener noreferrer"
    >
      <img src={imgSrc} alt={alt} loading="lazy" className="w-full h-full" />
    </a>
  );
};

export default SNSIcon