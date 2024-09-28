export interface FooterProps {
  className?: string;
}

export default function Footer(props: FooterProps) {
  return <footer className={`bg-purple-500 ${props.className ?? ''}`}>Rodapé</footer>
}