import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer items-center p-3 drop-shadow-lg bg-neutral text-neutral-content mt-4">
      <div className="grid-flow-col gap-2 justify-self-end">
        <p>Created by Saurabh Patel</p>
        <a
          href="https://github.com/Saurabh3652"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
