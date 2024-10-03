import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Spin as Hamburger } from "hamburger-react";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full border-b backdrop-blur-md border-gray-50/35 z-10">
      <div className="flex justify-between items-center w-full md:container mx-auto relative">
        <Link href="/" className="text-white text-3xl font-bold p-4">
          <span className="text-[#00FFA0]">Crypto</span>Dive
        </Link>
        <ul className="md:flex hidden">
          <li>
            <Link className="link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" href="#">
              Market
            </Link>
          </li>
          <li>
            <Link className="link" href="/#learn">
              Learn
            </Link>
          </li>
          <li>
            <Link className="link" href="/#support">
              Support
            </Link>
          </li>
        </ul>

        <Menubar className="flex md:hidden">
          <MenubarMenu>
            <MenubarTrigger>
              <Hamburger color="white" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href="/">Home</Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link href="#">Market</Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link href="/#learn">Learn</Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link href="/#support">Support</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </nav>
  );
}
