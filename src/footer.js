import { Link } from "@nextui-org/link";

function Footer() {
  return (
    <footer className=" text-center relative pt-20 pb-4 ">
      <div className=" text-xl font-thin mb-5 ">
        Copyright © 2024 Bibek Bhusal
      </div>
      <div className=" text-sm font-thin ">
        Note: This site was designde by Bibek Bhusal just for the purpose of
        learning React JS and Tailwind CSS.
        <br />
        <p>
          Credits to API:{" "}
          <Link
            isExternal
            showAnchorIcon
            color="primary"
            underline="always"
            href="https://opentdb.com/api_config.php">
            Open Trivia DB
          </Link>
        </p>
        <p>
          Also see the{" "}
          <Link
            isExternal
            showAnchorIcon
            color="primary"
            underline="always"
            href="https://github.com/bibekbhusal0/quiz">
            Source Code
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
