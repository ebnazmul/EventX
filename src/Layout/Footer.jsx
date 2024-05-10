
const Footer = () => {
    return (
        <div className="max-w-screen-2xl mx-auto mt-10 flex flex-col-reverse space-y-2 md:flex-row flex-1 justify-between border-t">
            <div>
            <h2 className="font-semibold text-3xl italic">EventX</h2>
            <p>Copyright 2024 | EventX.com LLC</p>
            </div>
            <div>
                <h4 className="font-bold">Helpful Links</h4>
                <ul>
                    <li>Support</li>
                    <li>Refund Policy</li>
                    <li>Terms and confitions</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold">Social</h4>
                <ul>
                    <li>Facebook</li>
                    <li>LinkdIn</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;