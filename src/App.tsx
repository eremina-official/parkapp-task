import { useEffect, useState } from 'react';
import Button from './components/button/Button';
import RemoteControl from './features/remotes/components/Remote';
import ParkappLogo from './assets/parkappLogo.svg?react';
import ArrowLeft from './assets/arrowLeft.svg?react';
import RadioSvg from './assets/radio.svg?react';
import RadioSelectedSvg from './assets/radioSelected.svg?react';
import request from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { graphql } from './gql/gql';
import type { Post } from './gql/graphql';

// graphql placeholder
const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query posts {
    posts {
      id
      title
      body
    }
  }
`);

const App: React.FC = () => {
  const [selectedRemote, setSelectedRemote] = useState<Post | null>(
    {} as Post
  );

  // `data` is fully typed
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['films'],
    retry: false,
    queryFn: async () =>
      request(
        'https://graphqlplaceholder.vercel.app/graphql',
        allFilmsWithVariablesQueryDocument
        // variables are type-checked too
        // { id: 1 }
      ),
  });

  useEffect(() => {
    if (data?.posts?.length) {
      setSelectedRemote(data.posts[0]);
    }
  }, [data]);

  if (isPending) {
    return (
      <span className="flex min-h-screen items-center justify-center">
        Loading...
      </span>
    );
  }

  if (isError) {
    return <span>Error:{error.message}</span>;
  }

  if (data.posts?.length === 0) {
    return <span>Currently no remotes available</span>;
  }

  const remotes = data?.posts?.slice(0, 4);

  return (
    <>
      <main className="m-auto max-w-[1000px]">
        <section className="flex h-[250px] w-full rounded-b-[16px] bg-linear-to-b from-(--color-orange-2) to-(--color-orange-1) drop-shadow-[0_25px_25px_#3030301A]">
          <Button
            customClassName="mx-4 mt-16"
            variant="round"
            icon={<ArrowLeft />}
          />
          <h1 className="mx-2 mt-18 text-[32px] font-bold">
            Otwórz bramę
          </h1>
          <span className="ml-auto">
            <ParkappLogo height={250} />
          </span>
        </section>

        <section className="pt-[70px]">
          <RemoteControl remoteName={selectedRemote?.title} />
        </section>

        <section className="mt-6">
          <ul className="flex justify-center gap-5 py-(--spacing-30)">
            {remotes?.map((remote) => (
              <li key={remote?.id}>
                <button onClick={() => setSelectedRemote(remote)}>
                  {remote.id === selectedRemote.id ? (
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
