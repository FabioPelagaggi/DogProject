import { IconButton, LinkPrimaryButton, TextButton } from './style';

interface Props {
  icon?: React.ReactNode;
  text: String;
  onToggle?: (action: Boolean) => void;
}

export default function PrimaryButton({ icon, text, onToggle }: Props) {
  return (
    <LinkPrimaryButton onClick={onToggle}>
      <IconButton>{icon}</IconButton>
      <TextButton>{text}</TextButton>
    </LinkPrimaryButton>
  )
}
