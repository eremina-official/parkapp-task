import { useState } from 'react';
import Button from './components/button/Button';
import RemoteControl from './features/remotes/Remote';
import ParkappLogo from './assets/parkappLogo.svg?react';
import ArrowLeft from './assets/arrowLeft.svg?react';
import RadioSvg from './assets/radio.svg?react';
import RadioSelectedSvg from './assets/radioSelected.svg?react';

interface Remote {
  uid: string;
  text: string;
}

const remotes: Remote[] = [
  {
    uid: 'A',
    text: 'Remote long text',
  },
  {
    uid: 'B',
    text: 'Remote b',
  },
  {
    uid: 'C',
    text: 'Remote c',
  },
  {
    uid: 'D',
    text: 'Remote d',
  },
];

const App: React.FC = () => {
  const [selectedRemote, setSelectedRemote] = useState<Remote>(
    remotes[0]
  );

  return (
    <>
      <main className="m-auto max-w-[1000px]">
        <section className="flex h-[280px] w-full rounded-b-[16px] bg-linear-to-b from-(--color-orange-2) to-(--color-orange-1) drop-shadow-[0_25px_25px_#3030301A]">
          <Button
            customClassName="mx-4 mt-16"
            variant="round"
            icon={<ArrowLeft />}
          />
          <h1 className="mx-2 mt-18 text-[32px] font-bold">
            Otwórz bramę
          </h1>
          <ParkappLogo className="ml-auto" />
        </section>

        <section className="pt-[70px]">
          <RemoteControl remoteName={selectedRemote.text} />
        </section>

        <section className="mt-6">
          <ul className="flex justify-center gap-5 py-(--spacing-30)">
            {remotes.map((remote) => (
              <li key={remote.text}>
                <button onClick={() => setSelectedRemote(remote)}>
                  {remote.uid === selectedRemote.uid ? (
                    <RadioSelectedSvg />
                  ) : (
                    <RadioSvg />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default App;
