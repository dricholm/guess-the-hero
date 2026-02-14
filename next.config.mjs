import path from 'path';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  sassOptions: {
    loadPaths: ['styles'],
  },
};

export default config;
