import HighlightIcon from "@mui/icons-material/Highlight";

const Header = () => {
  return (
    <header className="bg-primaryColor shadow-header-shadow">
      <div className="wrapper w-full py-4">
        <h1 className="text-textColor font-mcLaren text-3xl font-extralight lg:text-4xl">
          <HighlightIcon sx={{ fontSize: 38 }} />
          Keeper
        </h1>
      </div>
    </header>
  );
};

export default Header;
