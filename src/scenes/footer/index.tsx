import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>@ Evogym All Right Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:-mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Yoga Classes</p>
          <p className="my-5">Children care</p>
          <p>Packages</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">For healthy life style</p>
          <p className="my-5">For healthy body</p>
          <p>(3333)454-565</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
