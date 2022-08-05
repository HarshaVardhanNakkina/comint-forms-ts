import 'react-tabs/style/react-tabs.css';

import Head from 'next/head';

import ShipForm from '../components/ShipForm';
import { Tabs } from 'flowbite-react';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-4">
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item title="Ship Form" active>
            <ShipForm />
          </Tabs.Item>
          <Tabs.Item active={true} title="Weather Form">
            Weather Form
          </Tabs.Item>
          <Tabs.Item title="Country Form">Country Form</Tabs.Item>
        </Tabs.Group>
      </main>
    </div>
  );
}
