import stylesheet from './tailwind.css';
import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from '@remix-run/react';
import Footer from './components/Footer';
import type { ReactNode } from 'react';
import Navigation from './components/Menu/Navigation';
import { getStoryblokApi, storyblokInit } from '@storyblok/react';
import StoryblokServer from './services/Storyblok.server';


export const loader = async ({ params }: LoaderArgs) => {
  StoryblokServer.initStoryblok();
  let story = await StoryblokServer.getStory('menu/navigation');
  return json(story);
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}

const MainStyles = ( { children } :{children: ReactNode}) => {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function App() {
  const story = useLoaderData<typeof loader>();
  return (
    <MainStyles>
      <Navigation story={story} />
      <Outlet />
      <Footer />
    </MainStyles>
  );
}
