import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Logo from './Logo.js'
import DesctopMenu from "./DesctopMenu.js";
import SocialNetworks from '../SocialNetworks.js'
import ThemeChanger from "./ThemeChanger.js";
import MobuleMenu from "./MobuleMenu.js";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect( () => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
      <div className="flex  md:flex-row justify-between items-center">

        <Logo />

        <DesctopMenu />

          <SocialNetworks />

        {/* Theme Changer */}
        <ThemeChanger mounted = {mounted} />

      </div>

      <MobuleMenu />

    </div>
  );
}
