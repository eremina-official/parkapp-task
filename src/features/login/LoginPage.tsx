import Button from '../../components/button/Button';
import ParkappLogo from '../../assets/parkappLogo.svg?react';
import React from 'react';
import { useNavigate } from '@tanstack/react-router';

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const inputClassName =
    'p-[10px] rounded-(--border-radius) border-2 border-(--color-blue-3) bg-white p-2 text-(--color-blue-3) placeholder:text-(--color-blue-3)/60';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder: wire up real auth later

    navigate({ to: '/app' });
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-linear-to-b from-(--color-orange-2) to-(--color-orange-1) px-3">
      <h1 className="mx-2 text-[32px] font-bold">Logowanie</h1>
      <form
        onSubmit={handleSubmit}
        className="z-10 mt-10 flex w-full max-w-[320px] flex-col gap-4 px-4"
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm text-(--color-blue-3)">Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className={inputClassName}
            autoComplete="email"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-(--color-blue-3)">Hasło</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className={inputClassName}
            autoComplete="current-password"
          />
        </label>
        <Button
          type="submit"
          text="Zaloguj"
          customClassName="mt-2 mx-auto"
          variant="outlined"
        />
      </form>
      <span className="absolute right-0 bottom-2">
        <ParkappLogo className="ml-auto h-100 w-100" />
      </span>
    </main>
  );
};

export default LoginPage;
