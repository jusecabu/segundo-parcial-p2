import { ComponentChildren } from "preact";
import { useLocation } from "preact-iso";

function Nav() {
    const { url } = useLocation();

    const navItems = [
        { path: "/", label: "Inicio" },
        { path: "/series", label: "Series" },
        { path: "/actors", label: "Actores" },
    ];

    return (
        <nav className="px-10 py-5 flex justify-start items-center gap-5">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    href={item.path}
                    isActive={url === item.path}
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
}

interface NavLinkProps {
    href: string;
    children: ComponentChildren;
    isActive: boolean;
}

function NavLink({ href, children, isActive }: NavLinkProps) {
    return (
        <a
            href={href}
            className={`hover:underline${isActive ? " underline" : ""}`}
        >
            {children}
        </a>
    );
}

export default Nav;
