import stylesheet from './tailwind.css';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';
import { apiPlugin, storyblokInit } from '@storyblok/react';
import Feature from './components/Feature';
import Grid from './components/Grid';
import Hero from './components/Hero';
import Page from './components/Page';
import Teaser from './components/Teaser';
import Footer from './components/Footer';
import type { ReactNode } from 'react';
import Navigation from './components/Menu/Navigation';
import StoryblokServer from './services/Storyblok.server';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  footer: Footer
}

StoryblokServer.initStoryblok(components);

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

const MainStyles = ( {children} :{children: ReactNode}) => {
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
  return (
    <MainStyles>
      <Navigation />
      <Outlet />
      <Footer />
    </MainStyles>
  );
}
