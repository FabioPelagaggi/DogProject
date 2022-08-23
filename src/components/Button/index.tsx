import { LinkButton } from "./style";

interface Props {
  children: String;
  onToggle?: (action: Boolean) => void;
}

export default function Button({ children, onToggle }: Props) {
  return (
    <LinkButton onClick={onToggle}>
      { children }
    </LinkButton>
  )
}
