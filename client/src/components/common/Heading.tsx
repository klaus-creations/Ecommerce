interface IHeading {
  heading: string;
}

export default function Heading({ heading }: IHeading) {
  return (
    <h2 className="text-xl lg:text-2xl font-extrabold tracking-[1px] text-gray-950 dark:text-gray-50 pl-3 border-l-[4px] border-l-orange-500">
      {heading}
    </h2>
  );
}
