import "./header.scss";
const Header = () => {
  return (
    <header className="flex-class">
      <img src="./caret-circle-down 1.svg" alt="Eror" />
      <div className="searchBar flex-class">
        <input type="text" placeholder="Search..." />
        <img src="./search.svg" className="search" alt="Eror" />
        <img src="./bell.svg" alt="Eror" />
      </div>
    </header>
  );
};

export default Header;
