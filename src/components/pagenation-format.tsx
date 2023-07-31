interface IProps {
    total: number;
    range: number[];
  }
  
  const PaginationFormatCmp = ({ total, range }: IProps) => {
    return <>{`${range[0]}/${range[1]} - ${total} Page`}</>;
  };
  
  export default PaginationFormatCmp;
  