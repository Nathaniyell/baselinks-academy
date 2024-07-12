import Image from 'next/image';
import proposal from "../../../public/proposal.png"

interface TestimonialCardProps {
  name: string;
  image: string;
  testimonial: string;
  role: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, image, testimonial, role }) => {
  return (
    <div className="w-11/12 md:w-3/5 mx-auto p-4 md:p-10 bg-[#eee] shadow-md rounded-lg flex flex-col gap-4">
      <div className='flex gap-4'>

        <Image src={image || proposal} alt={name} className="w-10 h-10 rounded-full" />
        <h4 className="text-normal font-semibold text-titles">{name} <br /> {role && <span className='text-lightBg text-sm capitalize font-normal'>{role}</span>}</h4>
      </div>
      <p className="text-lightBg md:w-4/5 mx-auto">{testimonial} <br />   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, doloremque asperiores! Nesciunt pariatur repellendus odio id amet qui laborum aperiam!</p>
   
    </div>
  );
};

export default TestimonialCard;
