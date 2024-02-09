"use client";

import { themes } from "@/themes";
import { changeTheme } from "@/utils/helper";

export default function Home() {
  return (
    <div
      className="h-screen grid place-items-center"
      style={{
        background: `linear-gradient(to bottom , ${themes["buttons"]} , ${themes["primary"]}, ${themes["secondary"]} , ${themes["typography"]} , ${themes["primary"]})`,
      }}>
      <div>
        <button
          className="py-2 px-8 bg-buttons text-typography m-2"
          onClick={() => changeTheme("")}>
          Default
        </button>
        <button
          className="py-2 px-8 text-typography m-2"
          style={{ backgroundColor: `${themes.buttons}` }}
          onClick={() => changeTheme("theme1")}>
          theme 1
        </button>
        <button
          className="py-2 px-8 bg-buttons text-typography m-2"
          onClick={() => changeTheme("theme2")}>
          theme 2
        </button>
        <button
          className="py-2 px-8 bg-buttons text-typography m-2"
          onClick={() => changeTheme("theme3")}>
          theme 3
        </button>
      </div>
    </div>
  );
}
