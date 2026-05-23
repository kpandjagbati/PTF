import { Box, Linkedin, Twitter, Github, Mail } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

const Footer = ({ onContactClick }: FooterProps) => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center p-10">
        <aside>
          <Box className="w-10 h-10" />
          <p className="font-bold">
            Aris <span className="text-info">.Dev</span>
          </p>
          <p>Copyright {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="flex flex-col items-center gap-4">
            <div className="grid grid-flow-col gap-4">
              <a href="https://x.com/KpandjaAri6580" target='_blank' rel='noopener noreferrer' className="hover:scale-110 transition-transform">
                <Twitter className="w-6 h-6 text-current" />
              </a>

              <a href="https://www.linkedin.com/in/aristide-kpandja-253b89353/" target='_blank' rel='noopener noreferrer' className="hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-current" />
              </a>

              <a href="https://github.com/GOAT-12" target='_blank' rel='noopener noreferrer' className="hover:scale-110 transition-transform">
                <Github className="w-6 h-6 text-current" />
              </a>

              <button
                onClick={onContactClick}
                className="hover:scale-110 transition-transform"
                aria-label="Me contacter"
              >
                <Mail className="w-6 h-6 text-current" />
              </button>
            </div>

            <button
              onClick={onContactClick}
              className="btn btn-primary btn-sm mt-2"
            >
              Me contacter
            </button>
          </div>
        </nav>
      </footer>
    </div>
  )
}

export default Footer