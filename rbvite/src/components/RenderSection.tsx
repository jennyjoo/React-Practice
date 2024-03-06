type List = {
  subTitle?: string;
  li: string[];
};
type SectionType = {
  title: string;
  contents: List[];
};
export const RenderSection = (section: SectionType) => {
  const title = section.title;

  return (
    <>
      <h1 className='sub-title'>| {title} |</h1>
      <div className='text-start pl-20 pr-20 border-hana border-2 p-5 rounded-2xl mb-20'>
        {section.contents?.map((content, index) => (
          <div key={index}>
            <h2 className='text-2xl font-bold mb-5 mt-5'>{content.subTitle}</h2>
            <ul id='list'>
              {content.li?.map((list, index) => (
                <li key={index}>
                  {index + 1}. {list}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
