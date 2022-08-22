import { LinkButton } from "./style";

interface onToggleAndChildrenProps {
  children: String;
  onToggle?: (action: Boolean) => void;
}

export default function Button({ children, onToggle }: onToggleAndChildrenProps) {
  return (
    <LinkButton onClick={onToggle}>
      { children }
    </LinkButton>
  )
}
