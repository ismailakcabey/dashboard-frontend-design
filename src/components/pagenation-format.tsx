interface IProps {
    total: number;
    range: number[];
  }
  
  const PaginationFormatCmp = ({ total, range }: IProps) => {
    return <>{`${range[0]}/${range[1]} - ${total} Kayıt`}</>;
  };
  
  export default PaginationFormatCmp;
  