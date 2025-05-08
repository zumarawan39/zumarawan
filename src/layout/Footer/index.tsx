import Link from 'next/link'

function Footer() {
    return (
        <>
            <footer className='text-center mx-auto tertiary-text py-4  '>
                {"Made with ❤️  by "}
                <span className='tertiary-text underline' >
                    <Link href="https://www.linkedin.com/in/zumar-awan/" passHref={true} target='_blank'>Zumar Awan</Link>
                </span>
            </footer>
        </>
    )
}

export default Footer