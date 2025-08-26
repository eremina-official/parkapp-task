import { useState } from 'react';
import Button from '../../components/button/Button';
import RemoteSvg from '../../assets/remote.svg?react';

const garageEntriesList = [
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

interface Props {
  remoteName: string;
}

const RemoteControl: React.FC<Props> = ({ remoteName }) => {
  return (
    <div className="flex flex-nowrap gap-3">
      <div className="mr-4">
        <RemoteSvg className="h-[398px]" />
      </div>
      <div className="w-[700px] flex flex-col">
        <h2 className="text-[24px] font-bold">
          {`Długa nazwa pilota ${remoteName}`}
        </h2>
        <ul className="mt-auto mb-[20px] flex flex-col gap-[15px]">
          {garageEntriesList.map((remote, index) => (
            <li key={remote.text}>
              <Button
                variant="outlined"
                text={remote.text}
                selected={index === 0}
              />
            </li>
          ))}
        </ul>
        <p className="mb-[20px] text-[18px] font-bold">
          Wybierz bramę, by otworzyć
        </p>
      </div>
    </div>
  );
};

export default RemoteControl;
