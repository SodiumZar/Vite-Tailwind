const Logo = ({ className = '' }) => (
  <img
    src="/src/assets/logo.png"
    alt="Logo"
    className={`h-10 w-10 object-contain rounded-full shadow-md select-none " + className`}
    onError={e => { e.target.onerror=null; e.target.src='/vite.svg'; }}
    draggable={false}
  />
);

export default Logo;
