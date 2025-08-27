import { createFileRoute } from '@tanstack/react-router';
import LoginPage from '../features/login/LoginPage';

export const Route = createFileRoute('/login')({
  component: LoginPage,
});