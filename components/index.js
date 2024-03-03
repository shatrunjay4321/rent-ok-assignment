'use client'

import styles from './styles.module.css'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { useRouter } from 'next/router';

function Home({content}) {
    console.log("content:", content)
    return (
        <div className={styles.title}>Hello {content}</div>
    );
};

export async function getServerSideProps(context) {
	try {
        const host = context.req.headers.host;
        const subdomain = host.split('.')[0]; // Extract subdomain from the host
        console.log("subdomain:", subdomain);

        const tenant = await prisma.tenant.findUnique({
            where: { id: 1 },
        });

        console.log("tenant:", tenant); // Log the tenant object

        return {
            props: {
                content: tenant ? tenant.content : 'Default Content',
            },
        };
    } catch (error) {
        console.error("Error fetching tenant:", error);
        return {
            props: {
                content: 'Error Occurred',
            },
        };
    } finally {
        await prisma.$disconnect(); // Disconnect the Prisma client
    }
}

export default Home;