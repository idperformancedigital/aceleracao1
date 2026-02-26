import footerLogo from "@/assets/footer-logo.webp";

const FooterSection = () => {
  return (
    <footer className="bg-surface-dark-secondary py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <img src={footerLogo} alt="ID Performance Digital" className="w-48" />
        <p className="text-on-dark-muted text-xs">ID PERFORMANCE</p>
      </div>
    </footer>
  );
};

export default FooterSection;
