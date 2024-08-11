import Image from 'next/image';

const CustomCloseIcon = () => (
    <Image
        src="/closeButton.svg" // Path to your SVG in the public directory
        alt="Close"
        width={32}  // Adjust the width and height according to your needs
        height={32}
        className='mr-4 mt-4'
    />
);

export default CustomCloseIcon;
