/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add a rule to handle PDF files
    config.module.rules.push({
      test: /\.pdf$/, // Regular expression to match PDF files
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]', // Preserve the original name and extension
            outputPath: 'static/files/', // Output directory in the build folder
            publicPath: '/_next/static/files/', // Public URL for accessing files
          },
        },
      ],
    });

    return config;
  },
};

console.log('Loaded ENV:', process.env.NEXT_PUBLIC_GMAIL_USER);


export default nextConfig;
