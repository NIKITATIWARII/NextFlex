/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: true,
    },
    images:{
     domains:['www.google.com' ,"www.istockphoto.com"]
    }
};

export default nextConfig;
