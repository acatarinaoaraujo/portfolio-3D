/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Prevents ESLint warnings/errors from crashing your Vercel deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // 2. Your existing Webpack configuration for PDF file handling
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/files/',
            publicPath: '/_next/static/files/',
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
