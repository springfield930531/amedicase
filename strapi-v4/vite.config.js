import { mergeConfig } from 'vite';

export default (config) => {
  return mergeConfig(config, {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['dev.amedicase.com', 'localhost', '127.0.0.1'],
      hmr: {
        clientPort: 443,
        protocol: 'wss',
      },
    },
  });
};
