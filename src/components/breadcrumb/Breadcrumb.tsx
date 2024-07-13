import Link from 'next/link';

interface BreadcrumbProps {
  previousPage?: string;
  currentPage: string;
  previousPageLink?: string;
}

const Breadcrumb = ({ previousPage, currentPage, previousPageLink = "" }: BreadcrumbProps) => {
  return (
    <div className='text-lightBg bg-[#eff5f5] p-3 text-sm'>
      <div className="w-11/12 lg:w-10/12 mx-auto flex gap-2 items-center">
        <Link className="hover:text-titles" href="/">
         Home
        </Link>
        <span>&gt;</span>
        {previousPage && (
          <>
            <Link className="hover:text-titles" href={previousPageLink}>
             {previousPage}
            </Link>
            <span>&gt;</span>
          </>
        )}
        <p className='text-titles'>
          {currentPage}
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;
