import Brand from './brand';
import UserMenu from './user-menu';

export interface HeaderProps {
  className?: string;
}

export default function Header(props:HeaderProps) {
  return(
    <header className={`flex justify-between items-center px-7 border-b border-zinc-800 ${props.className ?? ''}`}>
      <Brand />

      <UserMenu />
    </header>
  )
}