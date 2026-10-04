import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, type KeyboardEvent } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams
} from "react-router";
import { cn } from "cn";
import { CustomLogo } from "@/components/custom/CustomLogo";
export const CustomHeader = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const { gender } = useParams();
  const location = useLocation();

  const inputRef = useRef<HTMLInputElement>(null);
  const query = searchParams.get('query') || '';

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key != 'Enter') return;
    const query = inputRef.current?.value;
    const newSearchParams = new URLSearchParams();
    if (!query) {
      newSearchParams.delete('query');
    } else {
      newSearchParams.set('query', inputRef.current?.value || '');
    }
    setsearchParams(newSearchParams);
  }
  return <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <CustomLogo />

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/"
                ? "underline underline-offset-4"
                : ""
            )}
          >
            Home
          </Link>

          <Link
            to="/gender/remos"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname.includes("/gender/")
                ? "underline underline-offset-4"
                : ""
            )}
          >
            Productos
          </Link>

          <Link
            to="/quienessomos"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/quienessomos"
                ? "underline underline-offset-4"
                : ""
            )}
          >
            Quiénes Somos
          </Link>

          <Link
            to="/contacto"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/contacto"
                ? "underline underline-offset-4"
                : ""
            )}
          >
            Contacto
          </Link>
        </nav>

        {/* Search and Cart */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar productos..." className="pl-9 w-64 h-9 bg-white" ref={inputRef} onKeyDown={handleSearch} defaultValue={query} />
            </div>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Link to='/auth/login'>
            <Button
              variant='default'
              size='sm'
              className="ml-2"
            >
              Login
            </Button>
          </Link>
          <Link to='/admin'>
            <Button
              variant='destructive'
              size='sm'
              className="ml-2"
            >
              Admin
            </Button>
          </Link>

        </div>
      </div>
    </div>
  </header>;
};
