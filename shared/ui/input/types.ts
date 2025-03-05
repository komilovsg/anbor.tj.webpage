export interface IInputProps {
  placeholder?: string;
  name: string;
  value?: string; // Для текстовых полей
  checked?: boolean; // Для чекбокса
  label?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
  type?: 'text' | 'email' | 'number' | 'textarea' | 'checkbox';
  disabled?: boolean;
}
