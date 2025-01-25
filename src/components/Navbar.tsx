import { Avatar, DarkThemeToggle, Navbar } from "flowbite-react";

export const NavigationBar = () => {
    return (
        <div className="drop-shadow sticky z-10 top-0">
            <Navbar rounded={true}>
                <Navbar.Brand href="/">
                    <div className="px-2">
                        <Avatar size="xs" img="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_27.png" bordered={true} />
                    </div>
                    <span className="self-center whitespace-nowrap text-xl text-gray-700 font-semibold dark:text-white">
                        Abreham Kassa
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/#middletext"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/#education">
                        Education
                    </Navbar.Link>
                    <Navbar.Link href="/#certifications">
                        Certifications
                    </Navbar.Link>
                    <Navbar.Link href="/#experience">
                        Experience
                    </Navbar.Link>
                    <Navbar.Link href="/#technologies">
                        Technologies
                    </Navbar.Link>
                    <Navbar.Link href="/#projects">
                        Projects
                    </Navbar.Link>
                </Navbar.Collapse>
                {/* <DarkThemeToggle /> */}
            </Navbar>
        </div>
    )
}