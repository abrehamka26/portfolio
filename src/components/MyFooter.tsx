import { Footer } from "flowbite-react"
import { BsTwitter, BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs"

export const MyFooter = () => {
    return (
        <div className="my-12 text-right" >
            <Footer bgDark={false} container={true}>
                <div className="w-full">
                    <div>
                        <Footer.Title title="Contact" />
                        <Footer.LinkGroup col={true}>
                            <Footer.Link href="#">
                                Addis Ababa, Kailty
                            </Footer.Link>
                            <Footer.Link href="#">
                                +251-900609334
                            </Footer.Link>
                            <Footer.Link href="#">
                                abrehamkassa19@gmail.com
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between my-5">
                        <Footer.Copyright
                            href="#"
                            by="Abreham Kassa"
                            year={2025}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                                target="_blank" 
                                icon={BsTwitter}
                            />
                            <Footer.Icon
                                href="https://github.com/abrishk26"
                                target="_blank" 
                                icon={BsGithub}
                            />
                            <Footer.Icon
                                target="_blank" 
                                icon={BsLinkedin}
                            />
                            <Footer.Icon
                                href=""
                                target = "_blank"
                                icon={BsTelegram}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}