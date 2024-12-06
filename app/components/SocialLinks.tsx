import { socialItems } from "@/data/socialItems";
import { renderIcon } from "@/helpers/renderIcon";
import { Link } from "@/i18n/routing";

const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      {socialItems.map((item) => (
        <Link
          className="grayscale hover:grayscale-0 hover:scale-125 transition-all duration-300"
          href={item.href}
          aria-label={item.title}
          key={item.id}
        >
          {renderIcon(item.svg, 32, 32)}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
