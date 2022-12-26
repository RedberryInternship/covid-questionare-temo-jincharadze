const NotVaccinated = () => {
  return (
    <div className='flex flex-col text-xl font-normal text-custom-neutral-800 ml-11 mt-12'>
      ახალი პროტოკოლით კოვიდის გადატანიდან 1
      <span>თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</span>
      <span className='mt-4'>👉 რეგისტრაციის ბმული</span>
      <a
        target='_blank'
        href='https://booking.moh.gov.ge/'
        className='text-custom-cyan-600'
      >
        https://booking.moh.gov.ge/
      </a>
    </div>
  );
};

export default NotVaccinated;
