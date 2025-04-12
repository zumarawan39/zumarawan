import Link from 'next/link'

function Footer() {
    return (
        <>
            <footer className='container text-center m-auto tertiary-text md:fixed md:bottom-5 md:left-60 border '>
                {"Made with ❤️  by "}
                <span className='tertiary-text underline' >
                    <Link href="https://www.linkedin.com/in/zumar-awan-571967270/" passHref={true} target='_blank'>Zumar Awan</Link>
                </span>
            </footer>
        </>
    )
}

export default Footer