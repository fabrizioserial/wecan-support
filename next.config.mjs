/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [

            {
                // does not add /docs since basePath: false is set
                source: '/terms-and-conditions',
                destination: 'https://www.hospitalaustral.edu.ar/terminos-y-condiciones/',
                basePath: false,
                permanent: false,
            }, {
                // does not add /docs since basePath: false is set
                source: '/privacy-policy',
                destination: 'https://www.hospitalaustral.edu.ar/politicas-de-privacidad/',
                basePath: false,
                permanent: false,
            },
        ]
    },
};

export default nextConfig;
