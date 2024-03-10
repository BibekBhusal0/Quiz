function Footer() {
  return (
    <footer className=" text-center relative pt-40 pb-4 ">
      <div className=" text-xl font-thin mb-5 ">
        Copyright © 2024 Bibek Bhusal
      </div>
      <div className=" text-sm font-thin ">
        Note: This site was designde by Bibek Bhusal just for the purpose of
        learning React JS and Tailwind CSS.
        <br />
        <br />
        All the questions desplayed in this website are from
        <a
          target="_blank"
          rel="noopener noreferrer"
          className=" text-blue-400 hover:text-blue-700"
          href="https://opentdb.com/api_config.php">
          Open Ttivia DB
        </a>
        . Creater of this website don't can't assure you that answer of the
        questions in this website are totally correct. The creater of this site
        is and will not be responsible for the questions desplayed in this
        website but be fully responsible for design and responsiveness of the
        website.
      </div>
    </footer>
  );
}

export default Footer;
