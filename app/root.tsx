import stylesheet from './tailwind.css';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { apiPlugin, storyblokInit } from '@storyblok/react';
import Feature from './components/Feature';
import Grid from './components/Grid';
import Hero from './components/Hero';
import Page from './components/Page';
import Teaser from './components/Teaser';

console.log(process.env.API_TOKEN);

storyblokInit({
  accessToken: process.env.API_TOKEN,
  use: [apiPlugin],
  components: {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    page: Page,
    hero: Hero
  },
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
