export const persistingErr = ({ msg }: { msg: string }) => {
  let flag = false;
  return () => {
    flag = true;
    return (
      <>
        <span>{flag && msg}</span>
      </>
    );
  };
};
