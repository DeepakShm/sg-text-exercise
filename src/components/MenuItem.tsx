import { MenuItemType } from "../utils/MenuData";

type MenuItemPropType = {
  menu: MenuItemType[];
  title: string;
};

function MenuItem({ menu, title }: MenuItemPropType) {
  return (
    <div className="px-1 lg:pt-32 pt-10 overflow-hidden">
      <h4 className="text-[62px] leading-[50px] uppercase">{title}</h4>
      <div className="px-4 mt-10 space-y-10">
        {menu.map((mi, idx) => (
          <div className="space-y-2 text-sm" key={mi.name + idx}>
            <h6>{mi.name}</h6>
            <p className="text-muted font-gill">{mi.desc}</p>
            <button className="px-4 py-1 border-2 border-secondary">{mi.price}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuItem;
