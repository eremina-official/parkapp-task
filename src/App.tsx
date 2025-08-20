import { useState } from 'react';
import Button from './components/button/Button';
import ParkappLogo from './assets/parkappLogo.svg?react';
import ArrowLeft from './assets/arrowLeft.svg?react';

const garageRemotesList = [
  {
    button: 'A',
    text: 'Szlaban Grzybowska 1',
  },
  {
    button: 'A',
    text: 'Brama Garażowa 1',
  },
  {
    button: 'A',
    text: 'Brama Wyjazdowa Śląska',
  },
  {
    button: 'A',
    text: 'Szlaban Pomorska 32',
  },
];

const App: React.FC = () => {
  return (
    <>
      <main className="m-auto max-w-[1000px]">
        <section className="flex h-[280px] w-full rounded-b-[16px] bg-linear-to-b from-(--color-orange-2) to-(--color-orange-1) drop-shadow-[0_25px_25px_#3030301A]">
          <Button
            customClassName="mx-4 mt-3"
            variant="round"
            icon={<ArrowLeft />}
          />
          <div className="mx-2 mt-4 text-[32px] font-bold">
            Otwórz bramę
          </div>
          <ParkappLogo className="ml-auto" />
        </section>
        <section className="mt-6">
          <div className="flex">
            <div>
              <div className="mb-3 text-[24px] font-bold">
                Długa nazwa pilota
              </div>
              {garageRemotesList.map((remote) => (
                <Button variant="outlined" text={remote.text} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
