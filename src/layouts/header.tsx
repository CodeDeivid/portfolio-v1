import ToggleTheme from "../components/toggleTheme";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 sm:px-8">
      <div className="flex items-center gap-6">
        <a href="https://google.com.br" target="_blank">
          <img
            src="/assets/logo.png" alt="Logo" loading="lazy" draggable="false"
            className="w-16 h-16 cursor-pointer hover:scale-110 transform transition-transform duration-150 ease-in"
          />
        </a>
        <a href="" className="link transition-all duration-300 ease-out">Blog</a>
        <a href="" className="link transition-all duration-300 ease-out">Projects</a>
        <a href="" className="link transition-all duration-300 ease-out">About</a>
      </div>
      <div className="flex items-center gap-6">
        <ToggleTheme />
      </div>
    </header>
  );
}