import LeftSidebarBottom from "./LeftSidebarBottom";
import LeftSidebarTop from "./LeftSidebarTop";

export default function LeftSidebar() {
  return (
    <div className="skeleton-left-sidebar w-66 flex select-none flex-col gap-2 text-base text-white">
      <LeftSidebarTop />
      <LeftSidebarBottom />
    </div>
  );
}
