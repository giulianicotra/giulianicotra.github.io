import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-end gap-6 p-6 bg-transparent">
      <nav className="flex gap-6">
        <a href="#about" className="mix-blend-difference hover:text-white">
          About
        </a>
        <a href="#projects" className="mix-blend-difference hover:text-white">
          Projects
        </a>
        <a href="#contact" className="mix-blend-difference hover:text-white">
          Contact
        </a>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
