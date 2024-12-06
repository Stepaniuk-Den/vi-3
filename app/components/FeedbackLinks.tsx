import { feedbackItems } from "@/data/feedbackItems";
import { renderIcon } from "@/helpers/renderIcon";
import { Link } from "@/i18n/routing";
import clsx from "clsx";

const FeedbackLinks = () => {
  return (
    <div className="flex group">
      {feedbackItems.map((item) => (
        <Link
          className={clsx(
            "flex group/item items-center gap-2 px-7 py-3 bg-customElement text-white transition-all duration-300 hover:bg-customMarsala-accent group-hover:grayscale group-hover:hover:grayscale-0",
            {
              "rounded-l-md": item.id === 1,
              "rounded-r-md": item.id === 2,
            }
          )}
          href={item.href}
          aria-label={item.area_label}
          key={item.id}
        >
          <div className="group-hover/item:animate-bounce">
            {renderIcon(item.svg, 32, 32)}
          </div>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default FeedbackLinks;
