import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('renders provided text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies outlined variant styles by default', () => {
    render(<Button text="Outlined" />);
    const btn = screen.getByRole('button', { name: 'Outlined' });
    expect(btn.className).toContain('rounded-(--border-radius)');
  });

  it('supports round variant', () => {
    render(<Button text="Round" variant="round" />);
    const btn = screen.getByRole('button', { name: 'Round' });
    expect(btn.className).toContain('rounded-full');
  });
});
