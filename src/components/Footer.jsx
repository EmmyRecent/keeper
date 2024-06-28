const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full py-4 text-center">
      <p className="text-[#ccc]">
        Made with 💌 by{" "}
        <a href="https://chukwuemeka-e.vercel.app/" className="cursor-pointer">
          Chukwuemeka
        </a>
      </p>
      <p className="text-base text-[#ccc]">Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;
