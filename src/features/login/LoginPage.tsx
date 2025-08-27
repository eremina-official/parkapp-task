import Button from '../../components/button/Button';
import ParkappLogo from '../../assets/parkappLogo.svg?react';
import React from 'react';
import { useNavigate } from '@tanstack/react-router';

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder: wire up real auth later
    // eslint-disable-next-line no-console
    console.log({ email, password });
    navigate({ to: '/app' });
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-linear-to-b from-(--color-orange-2) to-(--color-orange-1)">
      <h1 className="mx-2 mt-18 text-[32px] font-bold">Logowanie</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex w-full max-w-[320px] flex-col gap-4 px-4"
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm text-(--color-blue-3)">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="rounded-(--border-radius) border-2 border-(--color-blue-3) bg-white p-2 text-(--color-blue-3) placeholder:text-(--color-blue-3)/60"
            required
            autoComplete="email"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-(--color-blue-3)">Hasło</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="rounded-(--border-radius) border-2 border-(--color-blue-3) bg-white p-2 text-(--color-blue-3) placeholder:text-(--color-blue-3)/60"
            required
            autoComplete="current-password"
          />
        </label>
        <Button
          type="submit"
          text="Zaloguj"
          customClassName="mt-2"
          variant="outlined"
        />
      </form>
      <ParkappLogo className="ml-auto" />
    </main>
  );
};

export default LoginPage;
