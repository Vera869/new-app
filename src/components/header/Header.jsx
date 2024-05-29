import "./HeaderStyled.css";

export const HeaderBox = () => {
  return (
    <div className="HeaderBox">
      <img className="HeaderBox__img" src="../../src/components/header/img/iconGlobe.png" alt="countries"/>
      <h1 className="HeaderBox__header">COUNTRIES </h1>
    </div>
  );
};