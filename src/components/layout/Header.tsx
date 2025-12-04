const Header = () => {
  return (
    <header className="ui-container my-8 text-center">
      <img src="/pwa-512x512.png" alt="" className="w-20 mx-auto" />

      <h1 className="mb-2 text-2xl md:text-3xl font-bold text-primary">
        Phone Purchase Checklist
      </h1>

      <p className="text-dark-secondary text-sm">
        A guide to ensure get the perfect phone
      </p>
    </header>
  );
};

export default Header;
