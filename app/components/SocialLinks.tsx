import { socialItems } from "@/data/socialItems";
import { renderIcon } from "@/helpers/renderIcon";
import { Link } from "@/i18n/routing";

const SocialLinks = () => {
  return (
    <div className="flex landscape:absolute top-4 left-auto landscape:lg:static gap-3 w-full max-w-min justify-center self-center portrait:mt-8 lg:mt-0">
      {socialItems.map((item) => (
        <Link
          className="lg:grayscale hover:grayscale-0 hover:scale-125 transition-all duration-300"
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
