import { mergeConfig } from 'vite';

export default (config) => {
  return mergeConfig(config, {
    server: {
      host: '0.0.0.0',
      allowedHosts: 'all',
      hmr: {
        clientPort: 443,
        protocol: 'wss',
      },
    },
  });
};
